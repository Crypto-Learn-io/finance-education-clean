import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Flame, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { courseBySlug, flattenCourse, ITEM_LABEL } from "@/lms/registry";
import { useLearnerStats } from "@/lms/rewards";
import { useCourseProgress } from "@/lib/course-progress";

interface Last {
  slug: string;
  itemId: string;
  at: number;
}

function readLast(): Last | null {
  try {
    const raw = window.localStorage.getItem("thrive_last_item");
    return raw ? (JSON.parse(raw) as Last) : null;
  } catch {
    return null;
  }
}

/** "Pick up where you left off" card. Renders nothing for new visitors. */
export default function ContinueLearning() {
  const last = useMemo(readLast, []);
  const course = courseBySlug(last?.slug);
  const { done } = useCourseProgress(course?.slug);
  const stats = useLearnerStats();
  if (!last || !course) return null;

  const flat = flattenCourse(course);
  const count = flat.filter((f) => done.has(f.item.id)).length;
  const pct = Math.round((count / flat.length) * 100);
  const lastIdx = flat.findIndex((f) => f.item.id === last.itemId);
  const target =
    flat.slice(Math.max(0, lastIdx)).find((f) => !done.has(f.item.id)) ??
    flat.find((f) => !done.has(f.item.id)) ??
    flat[0];
  const finished = count === flat.length;

  return (
    <section
      aria-labelledby="continue-h"
      className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8"
    >
      <div className="reveal hover-glow flex flex-col gap-5 rounded-3xl border-2 border-primary/20 bg-white p-6 shadow-sm md:flex-row md:items-center">
        <div className="flex-1">
          <p className="text-sm font-extrabold uppercase tracking-wide text-primary">
            Welcome back
          </p>
          <h2 id="continue-h" className="mt-1 text-2xl font-black text-ink">
            {finished
              ? `You finished ${course.meta.title}!`
              : `Pick up ${course.meta.title}`}
          </h2>
          <p className="mt-1 text-ink-muted">
            {finished
              ? "Grab your certificate or start a new course."
              : `Up next: ${ITEM_LABEL[target.item.type]}, ${target.item.title}`}
          </p>
          <div className="mt-3 flex items-center gap-3">
            <Progress
              value={pct}
              className="h-2.5 max-w-xs flex-1"
              aria-label={`${course.meta.title} progress`}
            />
            <span className="text-sm font-bold tabular-nums text-ink">
              {pct}%
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 md:flex-col md:items-end">
          <div className="flex gap-2">
            <span className="flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1 text-sm font-black text-orange-700">
              <Flame className="h-4 w-4" aria-hidden="true" />
              {stats.streak} day{stats.streak === 1 ? "" : "s"}
            </span>
            <span className="flex items-center gap-1 rounded-full bg-sun-soft px-3 py-1 text-sm font-black text-ink">
              <Star
                className="h-4 w-4 fill-sun text-amber-600"
                aria-hidden="true"
              />
              {stats.xp} points
            </span>
          </div>
          <Button asChild size="lg" className="ml-auto md:ml-0">
            <Link
              to={
                finished
                  ? `/lessons/${course.slug}/certificate`
                  : `/lessons/${course.slug}/${target.item.id}`
              }
            >
              {finished ? "See certificate" : "Continue"}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
