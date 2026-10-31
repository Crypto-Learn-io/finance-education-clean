import { CSSProperties, useId, useState } from "react";
import { ChevronDown, Eye, ListRestart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LessonContent from "@/components/LessonContent";

/* ---------- Accordion ---------- */

interface AccordionProps {
  title?: string;
  items: { title: string; md: string }[];
}

export function Accordion({ title, items }: AccordionProps) {
  const uid = useId();
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setOpen((s) => {
      const n = new Set(s);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });

  return (
    <section className="my-6" aria-label={title ?? "More details"}>
      {title && (
        <h2 className="mb-3 text-lg font-extrabold text-ink">{title}</h2>
      )}
      <ul className="space-y-2">
        {items.map((it, i) => {
          const isOpen = open.has(i);
          return (
            <li
              key={it.title}
              className={cn(
                "rounded-2xl border-2 bg-white transition-colors duration-200",
                isOpen ? "border-primary/50" : "border-border",
              )}
            >
              <h3>
                <button
                  type="button"
                  id={`${uid}-h${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`${uid}-p${i}`}
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left font-extrabold text-ink hover:bg-mint-soft"
                >
                  {it.title}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      "h-5 w-5 flex-none text-primary transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
              </h3>
              <div
                id={`${uid}-p${i}`}
                role="region"
                aria-labelledby={`${uid}-h${i}`}
                className="collapse-grid"
                data-open={isOpen}
              >
                <div
                  className={cn(
                    "transition-[visibility] duration-300",
                    isOpen ? "visible" : "invisible",
                  )}
                >
                  <div className="px-4 pb-4 text-[15px] text-ink-muted">
                    <LessonContent content={it.md} />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* ---------- Timeline (sequential reveal) ---------- */

interface TimelineProps {
  title?: string;
  steps: { title: string; md?: string }[];
}

export function Timeline({ title, steps }: TimelineProps) {
  const [shown, setShown] = useState(1);
  const all = shown >= steps.length;
  const fill =
    steps.length > 1 ? ((shown - 1) / (steps.length - 1)) * 100 : 100;

  return (
    <section
      className="my-6 rounded-3xl border border-border bg-white p-5 sm:p-6"
      aria-label={title ?? "Timeline"}
    >
      {title && (
        <h2 className="mb-4 text-lg font-extrabold text-ink">{title}</h2>
      )}
      <ol className="relative">
        {/* Track + animated fill */}
        <span
          aria-hidden="true"
          className="absolute left-[15px] top-2 bottom-2 w-1 rounded-full bg-mint"
        />
        <span
          aria-hidden="true"
          className="absolute left-[15px] top-2 w-1 rounded-full bg-primary transition-[height] duration-500 ease-out"
          style={{ height: `calc((100% - 1rem) * ${fill / 100})` }}
        />
        {steps.map((s, i) => {
          const visible = i < shown;
          return (
            <li
              key={s.title}
              aria-hidden={!visible}
              className="collapse-grid"
              data-open={visible}
            >
              <div>
                <div
                  className={cn(
                    "relative flex gap-4 pb-5 transition-all duration-500",
                    visible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2",
                  )}
                  style={{ "--delay": `${i * 60}ms` } as CSSProperties}
                >
                  <span className="relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary text-sm font-black text-white ring-4 ring-white">
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <p className="font-extrabold text-ink">{s.title}</p>
                    {s.md && (
                      <div className="mt-1 text-[15px] text-ink-muted">
                        <LessonContent content={s.md} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
      <p className="sr-only" aria-live="polite">
        Showing {shown} of {steps.length} steps.
      </p>
      <div className="flex flex-wrap gap-2">
        {!all ? (
          <>
            <Button type="button" onClick={() => setShown((n) => n + 1)}>
              <Eye aria-hidden="true" />
              Next idea ({shown}/{steps.length})
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setShown(steps.length)}
            >
              Show all
            </Button>
          </>
        ) : (
          <Button type="button" variant="ghost" onClick={() => setShown(1)}>
            <ListRestart aria-hidden="true" />
            Start again
          </Button>
        )}
      </div>
    </section>
  );
}
