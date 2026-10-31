import { useId, useRef, useState } from "react";
import { CheckCircle2, Lightbulb, RotateCcw, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Mcq } from "../schema";
import { centerOf, confettiBurst } from "../confetti";

interface Props {
  question: Mcq;
  /** "card" for inline in readings, "overlay" for on top of video */
  variant?: "card" | "overlay";
  onCorrect?: () => void;
  /** Already answered before (restored from progress) */
  initiallySolved?: boolean;
}

type Status = "idle" | "wrong" | "right";

/**
 * Inline multiple-choice knowledge check.
 * Correct: confetti + explanation. Wrong: gentle shake + highlighted hint.
 */
export default function KnowledgeCheck({
  question,
  variant = "card",
  onCorrect,
  initiallySolved = false,
}: Props) {
  const uid = useId();
  const [choice, setChoice] = useState<number | null>(
    initiallySolved ? question.answer : null,
  );
  const [status, setStatus] = useState<Status>(
    initiallySolved ? "right" : "idle",
  );
  const [shaking, setShaking] = useState(false);
  const [tries, setTries] = useState(0);
  const cardRef = useRef<HTMLFieldSetElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const check = () => {
    if (choice === null) return;
    if (choice === question.answer) {
      setStatus("right");
      confettiBurst(centerOf(buttonRef.current));
      onCorrect?.();
    } else {
      setStatus("wrong");
      setTries((t) => t + 1);
      setShaking(false);
      requestAnimationFrame(() => setShaking(true));
    }
  };

  const reset = () => {
    setChoice(null);
    setStatus("idle");
  };

  const solved = status === "right";

  return (
    <fieldset
      ref={cardRef}
      onAnimationEnd={() => setShaking(false)}
      className={cn(
        variant === "overlay"
          ? "rounded-2xl border-2 p-3 sm:p-4 transition-colors duration-300"
          : "rounded-3xl border-2 p-5 sm:p-6 transition-colors duration-300",
        variant === "card" ? "my-6 bg-white" : "bg-white/95 backdrop-blur",
        solved
          ? "border-primary/60 bg-mint-soft"
          : status === "wrong"
            ? "border-amber-400"
            : "border-border",
        shaking && "shake",
      )}
    >
      <legend className="sr-only">Knowledge check</legend>
      <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-primary">
        <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full bg-sun animate-pulse motion-reduce:animate-none"
        />
        Quick check
      </p>
      <p
        id={`${uid}-q`}
        className={cn(
          "font-extrabold leading-snug text-ink",
          variant === "overlay" ? "mt-1 text-base" : "mt-2 text-lg",
        )}
      >
        {question.prompt}
      </p>

      <div
        role="radiogroup"
        aria-labelledby={`${uid}-q`}
        className={cn(
          "grid gap-2",
          variant === "overlay" ? "mt-2 sm:grid-cols-2" : "mt-4",
        )}
      >
        {question.options.map((opt, i) => {
          const selected = choice === i;
          const isAnswer = solved && i === question.answer;
          const isWrongPick = status === "wrong" && selected;
          return (
            <label
              key={opt}
              className={cn(
                "hover-glow flex cursor-pointer items-center gap-3 rounded-2xl border-2 font-semibold",
                variant === "overlay"
                  ? "px-3 py-2 text-sm"
                  : "px-4 py-3 text-[15px]",
                isAnswer
                  ? "border-primary bg-white text-ink"
                  : isWrongPick
                    ? "border-amber-400 bg-amber-50 text-ink"
                    : selected
                      ? "border-primary/70 bg-mint text-ink"
                      : "border-border bg-white text-ink-muted",
                solved && "pointer-events-none",
              )}
            >
              <input
                type="radio"
                name={`${uid}-opt`}
                className="sr-only peer"
                checked={selected}
                disabled={solved}
                onChange={() => {
                  setChoice(i);
                  if (status === "wrong") setStatus("idle");
                }}
              />
              <span
                aria-hidden="true"
                className={cn(
                  "flex h-6 w-6 flex-none items-center justify-center rounded-full border-2 text-xs font-black peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2",
                  selected || isAnswer
                    ? "border-primary bg-primary text-white"
                    : "border-border text-ink-muted",
                )}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{opt}</span>
              {isAnswer && (
                <CheckCircle2
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />
              )}
              {isWrongPick && (
                <XCircle
                  className="h-5 w-5 text-amber-600"
                  aria-hidden="true"
                />
              )}
            </label>
          );
        })}
      </div>

      {/* Hint: highlighted after a wrong answer */}
      {question.hint && (
        <div
          className="collapse-grid mt-3"
          data-open={status === "wrong" || (tries > 0 && !solved)}
        >
          <div>
            <p className="flex items-start gap-2 rounded-2xl bg-sun-soft px-4 py-3 text-[15px] text-ink ring-2 ring-sun">
              <Lightbulb
                className="mt-0.5 h-5 w-5 flex-none text-amber-600"
                aria-hidden="true"
              />
              <span>
                <strong>Hint:</strong> {question.hint}
              </span>
            </p>
          </div>
        </div>
      )}

      {/* Result */}
      <div aria-live="polite" className="mt-3">
        {solved && (
          <p className="rounded-2xl bg-white px-4 py-3 text-[15px] text-ink ring-1 ring-primary/30 animate-in fade-in slide-in-from-bottom-1 duration-300">
            <strong className="text-primary">Nice work!</strong>{" "}
            {question.explanation}
          </p>
        )}
        {status === "wrong" && (
          <p className="text-[15px] font-semibold text-amber-700">
            Not quite. Check the hint and try again.
          </p>
        )}
      </div>

      {!solved ? (
        <Button
          ref={buttonRef}
          type="button"
          className={variant === "overlay" ? "mt-2" : "mt-4"}
          size={variant === "overlay" ? "sm" : "default"}
          disabled={choice === null}
          onClick={check}
        >
          Check answer
        </Button>
      ) : (
        variant === "card" && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="mt-2"
            onClick={reset}
          >
            <RotateCcw aria-hidden="true" />
            Try again
          </Button>
        )
      )}
    </fieldset>
  );
}
