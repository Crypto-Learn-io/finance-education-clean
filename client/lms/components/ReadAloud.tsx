import { useEffect, useRef, useState } from "react";
import { Pause, Play, Square, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Block } from "../schema";

/** Plain text from reading blocks, ready to speak. */
export function blocksToSpeech(blocks: Block[]) {
  return blocks
    .map((b) => (b.type === "text" || b.type === "callout" ? b.md : ""))
    .filter(Boolean)
    .join("\n\n")
    .replace(/\*\*/g, "")
    .replace(/^[•▪◦]\s*/gm, "")
    .replace(/^\d+\.\s*/gm, "")
    .replace(/\$(\d)/g, "$1 dollars ")
    .replace(/\n{2,}/g, ". ")
    .replace(/\n/g, ". ");
}

/**
 * "Listen" button using the browser's built-in speech (Web Speech API).
 * Hidden when the browser doesn't support it.
 */
export default function ReadAloud({
  text,
  title,
}: {
  text: string;
  title: string;
}) {
  const [supported, setSupported] = useState(false);
  const [state, setState] = useState<"idle" | "playing" | "paused">("idle");
  const [rate, setRate] = useState(1);
  const utter = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);

  // Stop when the text changes (new item)
  useEffect(() => {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    setState("idle");
  }, [text]);

  if (!supported) return null;
  const synth = window.speechSynthesis;

  const start = (r = rate) => {
    synth.cancel();
    const u = new SpeechSynthesisUtterance(`${title}. ${text}`);
    u.rate = r;
    u.lang = "en-US";
    u.onend = () => setState("idle");
    u.onerror = () => setState("idle");
    utter.current = u;
    synth.speak(u);
    setState("playing");
  };

  const toggle = () => {
    if (state === "idle") start();
    else if (state === "playing") {
      synth.pause();
      setState("paused");
    } else {
      synth.resume();
      setState("playing");
    }
  };

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full bg-mint p-1"
      role="group"
      aria-label="Read aloud"
    >
      <button
        type="button"
        onClick={toggle}
        aria-pressed={state === "playing"}
        className={cn(
          "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold transition-colors duration-200",
          state === "idle"
            ? "text-primary hover:bg-white"
            : "bg-primary text-white",
        )}
      >
        {state === "idle" ? (
          <Volume2 className="h-4 w-4" aria-hidden="true" />
        ) : state === "playing" ? (
          <Pause className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Play className="h-4 w-4" aria-hidden="true" />
        )}
        {state === "idle" ? "Listen" : state === "playing" ? "Pause" : "Resume"}
        {state === "playing" && (
          <span
            aria-hidden="true"
            className="ml-0.5 flex h-3 items-end gap-0.5"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-0.5 animate-pulse rounded-full bg-white motion-reduce:animate-none"
                style={{
                  height: `${6 + i * 3}px`,
                  animationDelay: `${i * 150}ms`,
                }}
              />
            ))}
          </span>
        )}
      </button>
      {state !== "idle" && (
        <button
          type="button"
          onClick={() => {
            synth.cancel();
            setState("idle");
          }}
          aria-label="Stop reading"
          className="flex h-8 w-8 items-center justify-center rounded-full text-primary hover:bg-white"
        >
          <Square className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
        </button>
      )}
      <button
        type="button"
        onClick={() => {
          const r = rate === 1 ? 0.85 : rate === 0.85 ? 1.15 : 1;
          setRate(r);
          if (state !== "idle") start(r);
        }}
        aria-label={`Speed ${rate === 1 ? "1×" : rate < 1 ? "0.85×" : "1.15×"}, press to change`}
        className="rounded-full px-2 py-1.5 text-xs font-black tabular-nums text-primary hover:bg-white"
      >
        {rate === 1 ? "1×" : rate < 1 ? "0.85×" : "1.15×"}
      </button>
    </div>
  );
}
