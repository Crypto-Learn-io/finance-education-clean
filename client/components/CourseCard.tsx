import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Course, pillarWord } from "@/data/courses";

interface CourseCardProps {
  course: Course;
  /** Stagger index for the reveal animation */
  index?: number;
  /** Compact cards hide objectives and outcome (used on the homepage) */
  compact?: boolean;
}

export default function CourseCard({
  course,
  index = 0,
  compact = false,
}: CourseCardProps) {
  const headingId = `course-${course.slug}`;

  return (
    <article
      aria-labelledby={headingId}
      className="reveal card-lift group flex flex-col rounded-3xl border border-border bg-white p-6 shadow-sm"
      style={{ "--delay": `${(index % 3) * 80}ms` } as CSSProperties}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105 motion-reduce:transform-none",
            course.tint,
          )}
        >
          <course.icon className="w-7 h-7" aria-hidden="true" />
        </div>
        <ul
          className="flex flex-wrap justify-end gap-1.5"
          aria-label="THRIVE skills"
        >
          {course.pillars.map((p) => (
            <li
              key={p}
              className="rounded-full bg-mint px-2.5 py-1 text-xs font-bold text-primary"
            >
              {pillarWord(p)}
            </li>
          ))}
        </ul>
      </div>

      <h3 id={headingId} className="mt-4 text-xl font-extrabold text-ink">
        {course.title}
      </h3>

      <dl className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold text-ink-muted">
        <div className="flex items-center gap-1.5">
          <dt className="sr-only">Age</dt>
          <Users className="w-4 h-4 text-brand" aria-hidden="true" />
          <dd>{course.age}</dd>
        </div>
        <div className="flex items-center gap-1.5">
          <dt className="sr-only">Time</dt>
          <Clock className="w-4 h-4 text-brand" aria-hidden="true" />
          <dd>{course.time}</dd>
        </div>
      </dl>

      <p className="mt-3 text-base leading-relaxed text-ink-muted">
        {course.blurb}
      </p>

      {!compact && (
        <>
          <h4 className="mt-5 text-sm font-extrabold uppercase tracking-wide text-ink">
            You'll learn to
          </h4>
          <ul className="mt-2 space-y-2">
            {course.objectives.map((o) => (
              <li
                key={o}
                className="flex items-start gap-2 text-[15px] text-ink"
              >
                <CheckCircle2
                  className="mt-0.5 w-5 h-5 flex-none text-brand"
                  aria-hidden="true"
                />
                <span>{o}</span>
              </li>
            ))}
          </ul>

          <p className="mt-5 flex items-start gap-2 rounded-2xl bg-sun-soft px-4 py-3 text-[15px] font-semibold text-ink">
            <Trophy
              className="mt-0.5 w-5 h-5 flex-none text-amber-600"
              aria-hidden="true"
            />
            <span>{course.outcome}</span>
          </p>
        </>
      )}

      <div className="mt-auto pt-6">
        <Button asChild className="w-full" size="lg">
          <Link to={course.path}>
            Start for free
            <span className="sr-only">: {course.title}</span>
            <ArrowRight
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Button>
      </div>
    </article>
  );
}
