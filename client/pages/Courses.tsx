import { CSSProperties, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CourseCard from "@/components/CourseCard";
import { cn } from "@/lib/utils";
import { BookOpen, Video, Brain, ArrowRight } from "lucide-react";
import { courses, learningPath, Course } from "@/data/courses";

type Filter = "All" | Course["level"];
const filters: { value: Filter; label: string }[] = [
  { value: "All", label: "All courses" },
  { value: "Beginner", label: "Start here" },
  { value: "Intermediate", label: "Next steps" },
];

export default function Courses() {
  const [filter, setFilter] = useState<Filter>("All");

  const shown = useMemo(
    () =>
      filter === "All" ? courses : courses.filter((c) => c.level === filter),
    [filter],
  );

  const pathCourses = learningPath
    .map((slug) => courses.find((c) => c.slug === slug))
    .filter(Boolean) as Course[];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-b from-mint to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 text-center">
          <span className="free-pill hero-animate">Every course is free</span>
          <h1
            className="hero-animate mt-4 text-4xl md:text-5xl font-black text-ink"
            style={{ "--delay": "80ms" } as CSSProperties}
          >
            Pick a course. Start learning.
          </h1>
          <p
            className="hero-animate mt-4 text-lg md:text-xl text-ink-muted max-w-2xl mx-auto"
            style={{ "--delay": "160ms" } as CSSProperties}
          >
            Each course has short reading parts, a video, and a quiz. Go at your
            own pace.
          </p>

          <ul
            className="hero-animate mt-8 flex flex-wrap justify-center gap-3 text-sm font-bold text-ink"
            style={{ "--delay": "240ms" } as CSSProperties}
          >
            <li className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <BookOpen className="w-4 h-4 text-brand" aria-hidden="true" />
              {courses.length} courses
            </li>
            <li className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <Video className="w-4 h-4 text-brand" aria-hidden="true" />A video
              in every course
            </li>
            <li className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <Brain className="w-4 h-4 text-brand" aria-hidden="true" />
              Quizzes to check what you know
            </li>
          </ul>
        </div>
      </section>

      {/* Suggested path */}
      <section
        aria-labelledby="path-heading"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="reveal rounded-3xl bg-ink px-6 py-6 md:px-8 text-white">
          <h2 id="path-heading" className="text-lg font-extrabold">
            New here? Try this order.
          </h2>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {pathCourses.map((c, i) => (
              <li key={c.slug}>
                <Link
                  to={c.path}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 font-bold transition-colors duration-200 hover:bg-white/20"
                >
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-sun text-sun-foreground text-sm font-black">
                    {i + 1}
                  </span>
                  {c.title}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Course grid */}
      <section
        aria-labelledby="all-courses"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <h2
            id="all-courses"
            className="text-2xl md:text-3xl font-black text-ink"
          >
            All courses
          </h2>
          <div
            role="group"
            aria-label="Filter courses"
            className="inline-flex self-start rounded-full bg-mint p-1"
          >
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                aria-pressed={filter === f.value}
                onClick={() => setFilter(f.value)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-bold transition-colors duration-200",
                  filter === f.value
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-primary hover:bg-white",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {shown.map((course, i) => (
            <CourseCard key={course.slug} course={course} index={i} />
          ))}
        </div>

        <p className="mt-12 text-center text-ink-muted">
          Done with a course?{" "}
          <Link
            to="/quizzes"
            className="link-underline inline-flex items-center gap-1 font-bold text-primary"
          >
            Test yourself with a quiz
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </p>
      </section>
    </Layout>
  );
}
