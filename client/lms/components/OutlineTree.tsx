import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Brain,
  ChevronDown,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { CourseData, Item } from "../schema";
import { ITEM_LABEL, itemMinutes } from "../registry";

const TYPE_ICON: Record<Item["type"], typeof PlayCircle> = {
  video: PlayCircle,
  reading: BookOpen,
  widget: Sparkles,
  quiz: Brain,
};

/** Custom check box with a drawn check mark and a pop when it turns on. */
export function CheckBox({ done, label }: { done: boolean; label?: string }) {
  const prev = useRef(done);
  const [pop, setPop] = useState(false);
  useEffect(() => {
    if (done && !prev.current) setPop(true);
    prev.current = done;
  }, [done]);
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      data-done={done}
      onAnimationEnd={() => setPop(false)}
      className={cn(
        "check-box flex h-5 w-5 flex-none items-center justify-center rounded-md border-2",
        done ? "border-primary bg-primary" : "border-ink/25 bg-white",
        pop && "just-done",
      )}
    >
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
        <path
          d="M3.5 8.5l3 3 6-7"
          fill="none"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

interface Props {
  course: CourseData;
  base: string;
  done: Set<string>;
  currentId?: string;
  onNavigate?: () => void;
}

/**
 * Collapsible tree: Modules > Lessons > Items.
 * Disclosure pattern (buttons with aria-expanded) for reliable keyboard and
 * screen reader support.
 */
export default function OutlineTree({
  course,
  base,
  done,
  currentId,
  onNavigate,
}: Props) {
  const currentModule = course.modules.find((m) =>
    m.lessons.some((l) => l.items.some((i) => i.id === currentId)),
  )?.id;

  const [openModules, setOpenModules] = useState<Set<string>>(
    () => new Set(currentModule ? [currentModule] : [course.modules[0]?.id]),
  );
  const [closedLessons, setClosedLessons] = useState<Set<string>>(new Set());

  // Opening the module that holds the current item when it changes.
  useEffect(() => {
    if (currentModule)
      setOpenModules((s) =>
        s.has(currentModule) ? s : new Set(s).add(currentModule),
      );
  }, [currentModule]);

  const toggle = (set: Set<string>, id: string) => {
    const n = new Set(set);
    if (n.has(id)) n.delete(id);
    else n.add(id);
    return n;
  };

  return (
    <nav aria-label="Course outline">
      <ol className="space-y-2">
        {course.modules.map((m, mi) => {
          const items = m.lessons.flatMap((l) => l.items);
          const mDone = items.filter((i) => done.has(i.id)).length;
          const open = openModules.has(m.id);
          const pct = items.length ? mDone / items.length : 0;
          const panelId = `tree-${m.id}`;
          return (
            <li key={m.id} className="rounded-2xl">
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenModules((s) => toggle(s, m.id))}
                className={cn(
                  "hover-glow flex w-full items-center gap-3 rounded-2xl border px-3 py-2.5 text-left",
                  m.id === currentModule
                    ? "border-primary/40 bg-mint-soft"
                    : "border-transparent hover:bg-mint-soft",
                )}
              >
                {/* Module progress ring */}
                <svg
                  viewBox="0 0 36 36"
                  className="h-9 w-9 flex-none -rotate-90"
                  aria-hidden="true"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    fill="none"
                    stroke="#D6F5E3"
                    strokeWidth="4"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    fill="none"
                    stroke="#0A7A4A"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${pct * 94.25} 94.25`}
                    opacity={pct > 0 ? 1 : 0}
                    style={{
                      transition: "stroke-dasharray 600ms var(--ease-in-out)",
                    }}
                  />
                  <text
                    x="18"
                    y="18"
                    transform="rotate(90 18 18)"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize="13"
                    fontWeight="900"
                    fill="#0B2A1A"
                  >
                    {mi + 1}
                  </text>
                </svg>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] font-extrabold uppercase tracking-wide text-primary">
                    Module {mi + 1}
                  </span>
                  <span className="block truncate font-extrabold text-ink">
                    {m.title}
                  </span>
                  <span className="block text-xs text-ink-muted">
                    {mDone}/{items.length} done
                  </span>
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "h-5 w-5 flex-none text-ink-muted transition-transform duration-300",
                    open && "rotate-180",
                  )}
                />
              </button>

              <div id={panelId} className="collapse-grid" data-open={open}>
                <div
                  className={cn(
                    "transition-[visibility] duration-300",
                    open ? "visible" : "invisible",
                  )}
                >
                  <ol className="ml-[1.4rem] border-l-2 border-mint pb-1 pl-3 pt-1">
                    {m.lessons.map((l) => {
                      const lid = `${m.id}-${l.id}`;
                      const lOpen = !closedLessons.has(lid);
                      return (
                        <li key={l.id} className="mt-1">
                          <button
                            type="button"
                            aria-expanded={lOpen}
                            aria-controls={`tree-${lid}`}
                            onClick={() =>
                              setClosedLessons((s) => toggle(s, lid))
                            }
                            className="flex w-full items-center gap-1.5 rounded-lg px-2 py-1 text-left text-xs font-extrabold uppercase tracking-wide text-ink-muted hover:text-ink"
                          >
                            <ChevronDown
                              aria-hidden="true"
                              className={cn(
                                "h-3.5 w-3.5 transition-transform duration-300",
                                !lOpen && "-rotate-90",
                              )}
                            />
                            {l.title}
                          </button>
                          <div
                            id={`tree-${lid}`}
                            className="collapse-grid"
                            data-open={lOpen}
                          >
                            <div
                              className={cn(
                                "transition-[visibility] duration-300",
                                lOpen ? "visible" : "invisible",
                              )}
                            >
                              <ol className="space-y-0.5 py-0.5">
                                {l.items.map((it) => {
                                  const isCur = it.id === currentId;
                                  const isDone = done.has(it.id);
                                  const Icon = TYPE_ICON[it.type];
                                  const mins = itemMinutes(it);
                                  return (
                                    <li key={it.id}>
                                      <Link
                                        to={`${base}/${it.id}`}
                                        onClick={onNavigate}
                                        aria-current={
                                          isCur ? "page" : undefined
                                        }
                                        className={cn(
                                          "group relative flex items-start gap-2.5 rounded-xl px-2 py-2 text-sm transition-[background-color,transform] duration-200 hover:translate-x-0.5",
                                          isCur
                                            ? "bg-mint font-bold text-ink"
                                            : "text-ink-muted hover:bg-mint-soft hover:text-ink",
                                        )}
                                      >
                                        {isCur && (
                                          <span
                                            aria-hidden="true"
                                            className="absolute -left-[15px] top-2 bottom-2 w-1 rounded-full bg-primary animate-in fade-in slide-in-from-top-1 duration-300"
                                          />
                                        )}
                                        <CheckBox done={isDone} />
                                        <span className="min-w-0 flex-1">
                                          <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-ink-muted">
                                            <Icon
                                              className="h-3.5 w-3.5"
                                              aria-hidden="true"
                                            />
                                            {ITEM_LABEL[it.type]}
                                            {mins ? ` · ${mins} min` : ""}
                                          </span>
                                          <span className="block leading-snug">
                                            {it.title}
                                          </span>
                                          <span className="sr-only">
                                            {isDone ? ", completed" : ""}
                                          </span>
                                        </span>
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ol>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
