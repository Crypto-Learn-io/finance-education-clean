import { useId, useMemo, useRef, useState } from "react";
import { CheckCircle2, GripVertical, Lightbulb, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { SortQuestion } from "../schema";
import { centerOf, confettiBurst } from "../confetti";

interface Props {
  question: SortQuestion;
  onCorrect?: () => void;
  initiallySolved?: boolean;
}

/** Stable shuffle so items don't start in answer order. */
function shuffled<T>(arr: T[], seed: string) {
  let h = 0;
  for (const c of seed) h = (h * 31 + c.charCodeAt(0)) | 0;
  const out = arr.map((v, i) => ({ v, k: Math.sin(h + i * 97) }));
  return out.sort((a, b) => a.k - b.k).map((o) => o.v);
}

/**
 * Drag-and-drop sorting. Desktop: drag chips into buckets.
 * Touch and keyboard: tap a chip, then tap "Place here" on a bucket.
 */
export default function SortCheck({
  question,
  onCorrect,
  initiallySolved = false,
}: Props) {
  const uid = useId();
  const order = useMemo(
    () =>
      shuffled(
        question.items.map((_, i) => i),
        question.id,
      ),
    [question],
  );
  const solvedPlacement = () =>
    Object.fromEntries(question.items.map((it, i) => [i, it.bucket]));

  const [placed, setPlaced] = useState<Record<number, number>>(
    initiallySolved ? solvedPlacement() : {},
  );
  const [selected, setSelected] = useState<number | null>(null);
  const [status, setStatus] = useState<"idle" | "wrong" | "right">(
    initiallySolved ? "right" : "idle",
  );
  const [shaking, setShaking] = useState(false);
  const [overBucket, setOverBucket] = useState<number | null>(null);
  const checkRef = useRef<HTMLButtonElement>(null);

  const pool = order.filter((i) => placed[i] === undefined);
  const allPlaced = pool.length === 0;
  const solved = status === "right";

  const place = (item: number, bucket: number | undefined) => {
    setPlaced((p) => {
      const next = { ...p };
      if (bucket === undefined) delete next[item];
      else next[item] = bucket;
      return next;
    });
    setSelected(null);
    if (status === "wrong") setStatus("idle");
  };

  const check = () => {
    const ok = question.items.every((it, i) => placed[i] === it.bucket);
    if (ok) {
      setStatus("right");
      confettiBurst(centerOf(checkRef.current));
      onCorrect?.();
    } else {
      setStatus("wrong");
      setShaking(false);
      requestAnimationFrame(() => setShaking(true));
    }
  };

  const chip = (i: number, inBucket: boolean) => {
    const wrong =
      status === "wrong" && inBucket && placed[i] !== question.items[i].bucket;
    return (
      <li key={i}>
        <button
          type="button"
          draggable={!solved}
          onDragStart={(e) => {
            e.dataTransfer.setData("text/plain", String(i));
            e.dataTransfer.effectAllowed = "move";
          }}
          onClick={() =>
            solved
              ? undefined
              : inBucket
                ? place(i, undefined)
                : setSelected(selected === i ? null : i)
          }
          aria-pressed={!inBucket ? selected === i : undefined}
          aria-label={
            inBucket
              ? `${question.items[i].text}. In ${question.buckets[placed[i]]}. Press to move back.`
              : undefined
          }
          className={cn(
            "hover-glow flex w-full items-center gap-2 rounded-xl border-2 bg-white px-3 py-2 text-left text-sm font-bold text-ink",
            selected === i
              ? "border-primary ring-4 ring-primary/20"
              : "border-border",
            wrong && "border-amber-400 bg-amber-50",
            solved && "cursor-default border-primary/40",
          )}
        >
          {!solved && (
            <GripVertical
              className="h-4 w-4 flex-none text-ink-muted"
              aria-hidden="true"
            />
          )}
          <span className="flex-1">{question.items[i].text}</span>
          {solved && (
            <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
          )}
        </button>
      </li>
    );
  };

  return (
    <section
      aria-labelledby={`${uid}-q`}
      onAnimationEnd={() => setShaking(false)}
      className={cn(
        "my-6 rounded-3xl border-2 bg-white p-5 sm:p-6 transition-colors duration-300",
        solved
          ? "border-primary/60 bg-mint-soft"
          : status === "wrong"
            ? "border-amber-400"
            : "border-border",
        shaking && "shake",
      )}
    >
      <p className="text-xs font-extrabold uppercase tracking-wide text-primary">
        Sort it out
      </p>
      <h2 id={`${uid}-q`} className="mt-1 text-lg font-extrabold text-ink">
        {question.prompt}
      </h2>
      <p className="mt-1 text-sm text-ink-muted">
        Drag each card into a box. On a phone, tap a card, then tap{" "}
        <em>Place here</em>.
      </p>

      {/* Pool */}
      {!allPlaced && (
        <ul
          aria-label="Cards to sort"
          className="mt-4 grid gap-2 sm:grid-cols-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            const i = Number(e.dataTransfer.getData("text/plain"));
            if (!Number.isNaN(i)) place(i, undefined);
          }}
        >
          {pool.map((i) => chip(i, false))}
        </ul>
      )}

      {/* Buckets */}
      <div
        className={cn(
          "mt-4 grid gap-3",
          question.buckets.length > 2 ? "sm:grid-cols-3" : "sm:grid-cols-2",
        )}
      >
        {question.buckets.map((b, bi) => {
          const items = order.filter((i) => placed[i] === bi);
          return (
            <div
              key={b}
              onDragOver={(e) => {
                e.preventDefault();
                setOverBucket(bi);
              }}
              onDragLeave={() => setOverBucket(null)}
              onDrop={(e) => {
                e.preventDefault();
                setOverBucket(null);
                const i = Number(e.dataTransfer.getData("text/plain"));
                if (!Number.isNaN(i)) place(i, bi);
              }}
              className={cn(
                "min-h-32 rounded-2xl border-2 border-dashed p-3 transition-colors duration-200",
                overBucket === bi
                  ? "border-primary bg-mint"
                  : "border-primary/30 bg-mint-soft",
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-extrabold text-ink">{b}</h3>
                {selected !== null && (
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="h-8 bg-white px-3 text-xs"
                    onClick={() => place(selected, bi)}
                  >
                    Place here
                  </Button>
                )}
              </div>
              <ul aria-label={`${b} box`} className="mt-2 grid gap-2">
                {items.map((i) => chip(i, true))}
              </ul>
            </div>
          );
        })}
      </div>

      {question.hint && (
        <div className="collapse-grid mt-3" data-open={status === "wrong"}>
          <div>
            <p className="flex items-start gap-2 rounded-2xl bg-sun-soft px-4 py-3 text-[15px] text-ink ring-2 ring-sun">
              <Lightbulb
                className="mt-0.5 h-5 w-5 flex-none text-amber-600"
                aria-hidden="true"
              />
              <span>
                <strong>Hint:</strong> {question.hint} Cards in the wrong box
                are marked in orange.
              </span>
            </p>
          </div>
        </div>
      )}

      <div aria-live="polite" className="mt-3">
        {solved && (
          <p className="rounded-2xl bg-white px-4 py-3 text-[15px] text-ink ring-1 ring-primary/30">
            <strong className="text-primary">All sorted!</strong>{" "}
            {question.explanation}
          </p>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {!solved && (
          <Button
            ref={checkRef}
            type="button"
            onClick={check}
            disabled={!allPlaced}
          >
            Check my sorting
          </Button>
        )}
        {(Object.keys(placed).length > 0 || solved) && (
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setPlaced({});
              setStatus("idle");
            }}
          >
            <RotateCcw aria-hidden="true" />
            Start over
          </Button>
        )}
      </div>
    </section>
  );
}
