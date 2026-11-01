import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  Flame,
  PartyPopper,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { confettiBurst } from "../confetti";
import { useLearnerStats, XP_EVENT, XpEventDetail } from "../rewards";

/* ---------- Header stats: streak, points, level ---------- */

export function LearnerStats({ compact = false }: { compact?: boolean }) {
  const s = useLearnerStats();
  const [bump, setBump] = useState(false);
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setBump(true);
  }, [s.xp]);

  return (
    <div
      className="flex items-center gap-1.5"
      aria-label={`${s.streak} day streak. ${s.xp} points. Level ${s.level.currentLevel.level}, ${s.level.currentLevel.title}.`}
      role="group"
    >
      <span
        title={
          s.studiedToday
            ? "Streak: you learned today!"
            : "Learn today to keep your streak"
        }
        className={cn(
          "flex items-center gap-1 rounded-full px-2.5 py-1 text-sm font-black",
          s.streak > 0
            ? "bg-orange-50 text-orange-700"
            : "bg-mint-soft text-ink-muted",
        )}
      >
        <Flame
          aria-hidden="true"
          className={cn(
            "h-4 w-4",
            s.studiedToday && "fill-orange-400 text-orange-600",
          )}
        />
        {s.streak}
      </span>
      <span
        title={`${s.xp} points`}
        onAnimationEnd={() => setBump(false)}
        className={cn(
          "flex items-center gap-1 rounded-full bg-sun-soft px-2.5 py-1 text-sm font-black tabular-nums text-ink",
          bump && "check-box just-done",
        )}
      >
        <Star aria-hidden="true" className="h-4 w-4 fill-sun text-amber-600" />
        {s.xp}
      </span>
      {!compact && (
        <span
          title={s.level.currentLevel.title}
          className="hidden items-center gap-1 rounded-full bg-mint px-2.5 py-1 text-sm font-bold text-primary xl:flex"
        >
          <span aria-hidden="true">{s.level.currentLevel.badge}</span>
          {s.level.currentLevel.title}
        </span>
      )}
    </div>
  );
}

/* ---------- Floating "+10 points" toasts ---------- */

interface Toast extends XpEventDetail {
  id: number;
}

export function RewardToasts() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  useEffect(() => {
    let n = 0;
    const on = (e: Event) => {
      const d = (e as CustomEvent<XpEventDetail>).detail;
      const id = ++n;
      setToasts((t) => [...t.slice(-2), { ...d, id }]);
      if (d.levelUp) confettiBurst({ x: window.innerWidth / 2, y: 120 });
      window.setTimeout(
        () => setToasts((t) => t.filter((x) => x.id !== id)),
        d.levelUp ? 4200 : 2400,
      );
    };
    window.addEventListener(XP_EVENT, on);
    return () => window.removeEventListener(XP_EVENT, on);
  }, []);

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed right-3 top-16 z-[75] flex flex-col items-end gap-2 sm:right-5"
    >
      {toasts.map((t) =>
        t.levelUp ? (
          <div
            key={t.id}
            className="flex items-center gap-3 rounded-2xl bg-ink px-4 py-3 text-white shadow-2xl animate-in fade-in zoom-in-90 slide-in-from-top-3 duration-500"
          >
            <span className="text-3xl" aria-hidden="true">
              {t.badge}
            </span>
            <span>
              <span className="block text-xs font-bold uppercase tracking-wide text-sun">
                Level up!
              </span>
              <span className="block font-black">
                You're now a {t.levelTitle}
              </span>
            </span>
          </div>
        ) : (
          <div
            key={t.id}
            className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-black text-ink shadow-lg ring-2 ring-sun animate-in fade-in slide-in-from-bottom-3 duration-300"
          >
            <Sparkles className="h-4 w-4 text-amber-500" aria-hidden="true" />+
            {t.amount} points
            <span className="font-semibold text-ink-muted">· {t.reason}</span>
          </div>
        ),
      )}
    </div>
  );
}

/* ---------- Course complete celebration ---------- */

interface CelebrateProps {
  open: boolean;
  courseTitle: string;
  items: number;
  certificateHref: string;
  nextHref?: string;
  nextTitle?: string;
  homeHref: string;
  onClose: () => void;
}

export function CourseCelebration({
  open,
  courseTitle,
  items,
  certificateHref,
  nextHref,
  nextTitle,
  homeHref,
  onClose,
}: CelebrateProps) {
  const s = useLearnerStats();
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const w = window.innerWidth;
    confettiBurst({ x: w * 0.25, y: window.innerHeight * 0.45 });
    const a = window.setTimeout(
      () => confettiBurst({ x: w * 0.75, y: window.innerHeight * 0.45 }),
      250,
    );
    const b = window.setTimeout(
      () => confettiBurst({ x: w * 0.5, y: window.innerHeight * 0.35 }),
      500,
    );
    btnRef.current?.focus();
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
      window.removeEventListener("keydown", esc);
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="celebrate-title"
      className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] bg-white p-8 text-center shadow-2xl animate-in zoom-in-90 slide-in-from-bottom-6 duration-500">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-sun-soft to-white"
        />
        <div className="relative">
          <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sun shadow-lg float-slow">
            <Trophy className="h-10 w-10 text-ink" aria-hidden="true" />
          </span>
          <p className="mt-5 text-sm font-extrabold uppercase tracking-wide text-primary">
            Course complete
          </p>
          <h2
            id="celebrate-title"
            className="mt-1 text-3xl font-black text-ink"
          >
            You finished {courseTitle}!
          </h2>
          <dl className="mt-6 grid grid-cols-3 gap-2">
            {[
              { k: "Items done", v: items, icon: PartyPopper },
              { k: "Total points", v: s.xp, icon: Star },
              { k: "Day streak", v: s.streak, icon: Flame },
            ].map(({ k, v, icon: Icon }) => (
              <div key={k} className="rounded-2xl bg-mint-soft p-3">
                <Icon
                  className="mx-auto h-5 w-5 text-primary"
                  aria-hidden="true"
                />
                <dd className="mt-1 text-2xl font-black tabular-nums text-ink">
                  {v}
                </dd>
                <dt className="text-xs font-semibold text-ink-muted">{k}</dt>
              </div>
            ))}
          </dl>
          <div className="mt-6 grid gap-2">
            <Button asChild size="lg">
              <Link ref={btnRef} to={certificateHref}>
                <Award aria-hidden="true" />
                Get your certificate
              </Link>
            </Button>
            {nextHref && (
              <Button asChild size="lg" variant="outline">
                <Link to={nextHref}>Next course: {nextTitle}</Link>
              </Button>
            )}
            <Button asChild variant="ghost">
              <Link to={homeHref} onClick={onClose}>
                Back to course home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
