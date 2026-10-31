import { useCallback, useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  CircleHelp,
  ExternalLink,
  Maximize,
  Minimize,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VideoItem } from "../schema";
import KnowledgeCheck from "./KnowledgeCheck";

/* ---------- Player adapters (native HTML5 or YouTube) ---------- */

interface Adapter {
  play(): void;
  pause(): void;
  seek(t: number): void;
  time(): number;
  duration(): number;
  setRate(r: number): void;
  setMuted(m: boolean): void;
  destroy(): void;
}

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let ytPromise: Promise<any> | null = null;
function loadYouTube(): Promise<any> {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (ytPromise) return ytPromise;
  ytPromise = new Promise((resolve, reject) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve(window.YT);
    };
    const s = document.createElement("script");
    s.src = "https://www.youtube.com/iframe_api";
    s.async = true;
    s.onerror = () => {
      ytPromise = null;
      reject(new Error("YouTube failed to load"));
    };
    document.head.appendChild(s);
  });
  return ytPromise;
}

const fmt = (t: number) => {
  if (!Number.isFinite(t) || t < 0) t = 0;
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
};

/* ---------- Component ---------- */

interface Props {
  item: VideoItem;
  answered: Set<string>;
  onAnswer: (checkpointId: string) => void;
  onEnded?: () => void;
}

export default function VideoPlayer({
  item,
  answered,
  onAnswer,
  onEnded,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const adapter = useRef<Adapter | null>(null);
  const lastTime = useRef(0);
  const dismissed = useRef(new Set<string>());

  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const [rate, setRate] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [activeSolved, setActiveSolved] = useState(false);

  // Validated by the schema: either { youtubeId } or { src, poster?, captions? }.
  const src = item.source as {
    youtubeId?: string;
    src?: string;
    poster?: string;
    captions?: string;
  };
  const isYouTube = Boolean(src.youtubeId);

  /* Build the adapter */
  useEffect(() => {
    let cancelled = false;
    setReady(false);
    setError(false);
    if (isYouTube) {
      const host = hostRef.current;
      if (!host) return;
      const mount = document.createElement("div");
      host.appendChild(mount);
      const timer = window.setTimeout(
        () => !cancelled && setError(true),
        12000,
      );
      loadYouTube()
        .then((YT) => {
          if (cancelled) return;
          const p = new YT.Player(mount, {
            videoId: src.youtubeId,
            width: "100%",
            height: "100%",
            playerVars: {
              controls: 0,
              rel: 0,
              modestbranding: 1,
              playsinline: 1,
              disablekb: 1,
            },
            events: {
              onReady: () => {
                window.clearTimeout(timer);
                if (cancelled) return;
                adapter.current = {
                  play: () => p.playVideo(),
                  pause: () => p.pauseVideo(),
                  seek: (t) => p.seekTo(t, true),
                  time: () => p.getCurrentTime?.() ?? 0,
                  duration: () => p.getDuration?.() ?? 0,
                  setRate: (r) => p.setPlaybackRate(r),
                  setMuted: (m) => (m ? p.mute() : p.unMute()),
                  destroy: () => p.destroy(),
                };
                setDuration(p.getDuration?.() ?? 0);
                setReady(true);
              },
              onStateChange: (e: { data: number }) => {
                // 1 playing, 2 paused, 0 ended
                setPlaying(e.data === 1);
                if (e.data === 0) onEnded?.();
                if (e.data === 1) setDuration(p.getDuration?.() ?? 0);
              },
              onError: () => setError(true),
            },
          });
        })
        .catch(() => !cancelled && setError(true));
      return () => {
        cancelled = true;
        window.clearTimeout(timer);
        adapter.current?.destroy();
        adapter.current = null;
        host.innerHTML = "";
      };
    }
    const v = videoRef.current;
    if (!v) return;
    adapter.current = {
      play: () => void v.play().catch(() => undefined),
      pause: () => v.pause(),
      seek: (t) => (v.currentTime = t),
      time: () => v.currentTime,
      duration: () => v.duration || 0,
      setRate: (r) => (v.playbackRate = r),
      setMuted: (m) => (v.muted = m),
      destroy: () => v.pause(),
    };
    setReady(true);
    return () => {
      cancelled = true;
      adapter.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.id]);

  /* Clock: update time and trigger checkpoints.
     Seeks made with our controls reset lastTime, so only real playback that
     crosses a checkpoint triggers it, even if the timer runs late in a
     background tab. */
  useEffect(() => {
    if (!ready) return;
    const id = window.setInterval(() => {
      const a = adapter.current;
      if (!a) return;
      const t = a.time();
      const prev = lastTime.current;
      lastTime.current = t;
      setTime(t);
      const d = a.duration();
      if (d && d !== duration) setDuration(d);
      if (active !== null) return;
      const idx = item.checkpoints.findIndex(
        (c) =>
          !answered.has(c.question.id) &&
          !dismissed.current.has(c.question.id) &&
          prev < c.time &&
          t >= c.time,
      );
      if (idx !== -1) {
        a.pause();
        setActive(idx);
        setActiveSolved(false);
      }
    }, 200);
    return () => window.clearInterval(id);
  }, [ready, active, answered, item.checkpoints, duration]);

  useEffect(() => {
    const onFs = () =>
      setFullscreen(document.fullscreenElement === wrapRef.current);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const toggle = useCallback(() => {
    const a = adapter.current;
    if (!a || active !== null) return;
    if (playing) a.pause();
    else a.play();
  }, [playing, active]);

  const seek = (t: number) => {
    adapter.current?.seek(t);
    lastTime.current = t;
    setTime(t);
  };

  const closeCheckpoint = (resume: boolean) => {
    if (active === null) return;
    const id = item.checkpoints[active].question.id;
    if (!activeSolved) dismissed.current.add(id);
    setActive(null);
    if (resume) adapter.current?.play();
    wrapRef.current?.focus();
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (active !== null) return;
    if ((e.target as HTMLElement).closest("input,button,select")) return;
    if (e.key === " " || e.key === "k") {
      e.preventDefault();
      toggle();
    } else if (e.key === "ArrowRight") seek(Math.min(duration, time + 5));
    else if (e.key === "ArrowLeft") seek(Math.max(0, time - 5));
    else if (e.key === "m") {
      adapter.current?.setMuted(!muted);
      setMuted(!muted);
    }
  };

  const cp = active !== null ? item.checkpoints[active] : null;
  const watchUrl = isYouTube
    ? `https://www.youtube.com/watch?v=${src.youtubeId}`
    : null;

  return (
    <div>
      <div
        ref={wrapRef}
        tabIndex={0}
        onKeyDown={onKey}
        aria-label={`Video player: ${item.title}. Space to play or pause, arrow keys to skip.`}
        role="region"
        className={cn(
          "group relative overflow-hidden rounded-2xl bg-ink shadow-lg outline-none focus-visible:ring-4 focus-visible:ring-primary/40",
          fullscreen && "flex flex-col rounded-none",
        )}
      >
        {/* Canvas */}
        <div
          className={cn(
            "relative aspect-video w-full bg-black",
            fullscreen && "flex-1 aspect-auto",
          )}
        >
          {isYouTube ? (
            <div
              ref={hostRef}
              className="absolute inset-0 [&>iframe]:h-full [&>iframe]:w-full"
            />
          ) : (
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full"
              src={src.src}
              poster={src.poster}
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => {
                setPlaying(false);
                onEnded?.();
              }}
              onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
            >
              {src.captions && (
                <track kind="captions" src={src.captions} default />
              )}
            </video>
          )}

          {/* Click-to-toggle layer (keeps YouTube's own UI out of the way) */}
          {ready && !error && active === null && (
            <button
              type="button"
              aria-label={playing ? "Pause video" : "Play video"}
              onClick={toggle}
              className="absolute inset-0 flex items-center justify-center"
              tabIndex={-1}
            >
              {!playing && (
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-xl transition-transform duration-200 group-hover:scale-110">
                  <Play className="ml-1 h-7 w-7" aria-hidden="true" />
                </span>
              )}
            </button>
          )}

          {/* Loading */}
          {!ready && !error && (
            <div
              className="skeleton absolute inset-0 rounded-none"
              aria-label="Loading video"
            />
          )}

          {/* Error */}
          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink p-6 text-center text-white">
              <p className="font-bold">This video couldn't load here.</p>
              {watchUrl && (
                <a
                  href={watchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-bold text-primary"
                >
                  Watch on YouTube{" "}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
              <p className="text-sm text-white/80">
                You can still answer the checkpoint questions below.
              </p>
            </div>
          )}

          {/* Checkpoint overlay */}
          {cp && (
            <div
              role="dialog"
              aria-modal="false"
              aria-label="Video checkpoint question"
              className="absolute inset-0 z-10 flex items-center justify-center overflow-y-auto bg-ink/70 p-3 backdrop-blur-sm animate-in fade-in duration-300 sm:p-6"
            >
              <div className="w-full max-w-lg animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-white">
                  <CircleHelp className="h-4 w-4 text-sun" aria-hidden="true" />
                  Checkpoint at {fmt(cp.time)}
                </p>
                <KnowledgeCheck
                  key={cp.question.id}
                  question={cp.question}
                  variant="overlay"
                  onCorrect={() => {
                    setActiveSolved(true);
                    onAnswer(cp.question.id);
                  }}
                />
                <div className="mt-3 flex justify-end gap-2">
                  {activeSolved ? (
                    <Button
                      type="button"
                      onClick={() => closeCheckpoint(true)}
                      autoFocus
                    >
                      <Play aria-hidden="true" />
                      Keep watching
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      variant="outline"
                      className="bg-white"
                      onClick={() => closeCheckpoint(true)}
                    >
                      Skip for now
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 bg-ink px-3 py-2 text-white sm:gap-3">
          <button
            type="button"
            onClick={toggle}
            disabled={!ready || active !== null}
            aria-label={playing ? "Pause" : "Play"}
            className="flex h-10 w-10 flex-none items-center justify-center rounded-full hover:bg-white/15 disabled:opacity-40"
          >
            {playing ? (
              <Pause className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Play className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <span className="w-[5.5rem] flex-none text-xs tabular-nums text-white/85">
            {fmt(time)} / {fmt(duration)}
          </span>
          <div className="relative flex-1">
            <input
              type="range"
              aria-label="Seek"
              min={0}
              max={duration || 1}
              step={1}
              value={Math.min(time, duration || 1)}
              aria-valuetext={`${fmt(time)} of ${fmt(duration)}`}
              disabled={!ready || active !== null}
              onChange={(e) => seek(Number(e.target.value))}
              className="range relative z-10"
              style={
                {
                  "--fill": `${duration ? (time / duration) * 100 : 0}%`,
                } as React.CSSProperties
              }
            />
            {duration > 0 &&
              item.checkpoints.map((c) => (
                <span
                  key={c.question.id}
                  aria-hidden="true"
                  title={`Checkpoint at ${fmt(c.time)}`}
                  className={cn(
                    "pointer-events-none absolute top-1/2 z-20 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-ink",
                    answered.has(c.question.id) ? "bg-primary" : "bg-sun",
                  )}
                  style={{
                    left: `${Math.min(100, (c.time / duration) * 100)}%`,
                  }}
                />
              ))}
          </div>
          <label className="sr-only" htmlFor={`${item.id}-rate`}>
            Playback speed
          </label>
          <select
            id={`${item.id}-rate`}
            value={rate}
            disabled={!ready}
            onChange={(e) => {
              const r = Number(e.target.value);
              setRate(r);
              adapter.current?.setRate(r);
            }}
            className="hidden h-9 rounded-full bg-white/10 px-2 text-xs font-bold text-white sm:block [&>option]:text-ink"
          >
            {[0.75, 1, 1.25, 1.5].map((r) => (
              <option key={r} value={r}>
                {r}×
              </option>
            ))}
          </select>
          <button
            type="button"
            aria-label={muted ? "Unmute" : "Mute"}
            disabled={!ready}
            onClick={() => {
              adapter.current?.setMuted(!muted);
              setMuted(!muted);
            }}
            className="flex h-10 w-10 flex-none items-center justify-center rounded-full hover:bg-white/15 disabled:opacity-40"
          >
            {muted ? (
              <VolumeX className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Volume2 className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            aria-label={fullscreen ? "Exit full screen" : "Full screen"}
            onClick={() =>
              fullscreen
                ? document.exitFullscreen()
                : wrapRef.current?.requestFullscreen?.()
            }
            className="hidden h-10 w-10 flex-none items-center justify-center rounded-full hover:bg-white/15 sm:flex"
          >
            {fullscreen ? (
              <Minimize className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Maximize className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Checkpoint list (also the fallback if the video can't play) */}
      {item.checkpoints.length > 0 && (
        <section aria-labelledby={`${item.id}-cps`} className="mt-5">
          <h2
            id={`${item.id}-cps`}
            className="text-sm font-extrabold uppercase tracking-wide text-ink"
          >
            Checkpoints in this video
          </h2>
          <p className="mt-1 text-sm text-ink-muted">
            The video pauses at each one and asks a quick question.
          </p>
          <ol className="mt-3 grid gap-2 sm:grid-cols-2">
            {item.checkpoints.map((c) => {
              const done = answered.has(c.question.id);
              return (
                <li key={c.question.id}>
                  <button
                    type="button"
                    disabled={!ready || error}
                    onClick={() => seek(Math.max(0, c.time - 3))}
                    className="hover-glow flex w-full items-start gap-3 rounded-2xl border-2 border-border bg-white px-4 py-3 text-left disabled:cursor-default"
                  >
                    {done ? (
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 flex-none text-primary"
                        aria-hidden="true"
                      />
                    ) : (
                      <CircleHelp
                        className="mt-0.5 h-5 w-5 flex-none text-amber-600"
                        aria-hidden="true"
                      />
                    )}
                    <span className="text-sm">
                      <span className="font-black text-ink">{fmt(c.time)}</span>{" "}
                      <span className="text-ink-muted">
                        {c.question.prompt}
                      </span>
                      <span className="sr-only">
                        {done ? " Answered." : " Not answered yet."}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
          {error &&
            item.checkpoints.map((c) => (
              <KnowledgeCheck
                key={c.question.id}
                question={c.question}
                initiallySolved={answered.has(c.question.id)}
                onCorrect={() => onAnswer(c.question.id)}
              />
            ))}
        </section>
      )}
    </div>
  );
}
