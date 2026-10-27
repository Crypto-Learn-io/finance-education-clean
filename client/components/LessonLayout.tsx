import { CSSProperties, ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import LessonContent from "./LessonContent";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock,
  PlayCircle,
  Trophy,
  Users,
} from "lucide-react";
import { courseByPath, pillarWord } from "@/data/courses";

interface LessonSection {
  title: string;
  content: string;
}

interface LessonLayoutProps {
  title: string;
  intro: string;
  sections: LessonSection[];
  videoEmbed?: ReactNode;
  duration: string;
  difficulty: string;
  nextLessonPath?: string;
  nextLessonTitle?: string;
  prevLessonPath?: string;
  prevLessonTitle?: string;
  quizId?: string;
}

const sectionId = (i: number) => `part-${i + 1}`;
const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function LessonLayout({
  title,
  intro,
  sections,
  videoEmbed,
  duration,
  difficulty,
  nextLessonPath,
  nextLessonTitle,
  prevLessonPath,
  prevLessonTitle,
  quizId,
}: LessonLayoutProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // Course card data is the single source for title, age, time and goals.
  const course = courseByPath(pathname);
  const nextCourse = nextLessonPath ? courseByPath(nextLessonPath) : undefined;
  const prevCourse = prevLessonPath ? courseByPath(prevLessonPath) : undefined;

  const heading = course?.title ?? title;
  const blurb = course?.blurb ?? intro;

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-b from-mint to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm font-semibold text-ink-muted">
              <li>
                <Link to="/courses" className="link-underline text-primary">
                  Courses
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-4 h-4" />
              </li>
              <li aria-current="page" className="text-ink">
                {heading}
              </li>
            </ol>
          </nav>

          <div className="hero-animate mt-6 flex flex-wrap items-center gap-2">
            <span className="free-pill">Free</span>
            <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-ink shadow-sm">
              {course?.level ?? difficulty}
            </span>
            {course?.pillars.map((p) => (
              <span
                key={p}
                className="rounded-full bg-white px-3 py-1 text-sm font-bold text-primary shadow-sm"
              >
                {pillarWord(p)}
              </span>
            ))}
          </div>

          <h1
            className="hero-animate mt-4 text-4xl md:text-5xl font-black text-ink"
            style={delay(80)}
          >
            {heading}
          </h1>
          <p
            className="hero-animate mt-4 text-lg md:text-xl text-ink-muted max-w-2xl"
            style={delay(160)}
          >
            {blurb}
          </p>

          <dl
            className="hero-animate mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-ink-muted"
            style={delay(220)}
          >
            {course && (
              <div className="flex items-center gap-1.5">
                <dt className="sr-only">Age</dt>
                <Users className="w-4 h-4 text-brand" aria-hidden="true" />
                <dd>{course.age}</dd>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <dt className="sr-only">Time</dt>
              <Clock className="w-4 h-4 text-brand" aria-hidden="true" />
              <dd>{course?.time ?? duration}</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* In this lesson: goals + jump links */}
        <section
          aria-labelledby="overview-heading"
          className="reveal grid gap-6 rounded-3xl border border-border bg-white p-6 shadow-sm md:grid-cols-2"
        >
          <div>
            <h2
              id="overview-heading"
              className="text-sm font-extrabold uppercase tracking-wide text-ink"
            >
              You'll learn to
            </h2>
            <ul className="mt-3 space-y-2">
              {(course?.objectives ?? []).map((o) => (
                <li key={o} className="flex items-start gap-2 text-ink">
                  <CheckCircle2
                    className="mt-0.5 w-5 h-5 flex-none text-brand"
                    aria-hidden="true"
                  />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <nav aria-label="Lesson parts">
            <h2 className="text-sm font-extrabold uppercase tracking-wide text-ink">
              In this lesson
            </h2>
            <ol className="mt-3 space-y-1">
              {videoEmbed && (
                <li>
                  <a
                    href="#video"
                    className="flex items-center gap-2 rounded-xl px-2 py-1.5 font-semibold text-primary hover:bg-mint"
                  >
                    <PlayCircle className="w-4 h-4" aria-hidden="true" />
                    Watch the video
                  </a>
                </li>
              )}
              {sections.map((s, i) => (
                <li key={s.title}>
                  <a
                    href={`#${sectionId(i)}`}
                    className="flex items-start gap-2 rounded-xl px-2 py-1.5 font-semibold text-ink hover:bg-mint hover:text-primary"
                  >
                    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-mint text-xs font-black text-primary">
                      {i + 1}
                    </span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </section>

        {/* Video */}
        {videoEmbed && (
          <section
            id="video"
            aria-labelledby="video-heading"
            className="reveal mt-8 scroll-mt-24 rounded-3xl bg-ink p-4 sm:p-6"
          >
            <h2
              id="video-heading"
              className="mb-4 flex items-center gap-2 text-lg font-extrabold text-white"
            >
              <PlayCircle className="w-6 h-6 text-sun" aria-hidden="true" />
              Watch and learn
            </h2>
            <div className="overflow-hidden rounded-2xl bg-black">
              {videoEmbed}
            </div>
          </section>
        )}

        {/* Lesson parts */}
        <div className="mt-8 space-y-6">
          {sections.map((section, index) => (
            <article
              key={section.title}
              id={sectionId(index)}
              aria-labelledby={`${sectionId(index)}-title`}
              className="reveal scroll-mt-24 rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-sm"
            >
              <h2
                id={`${sectionId(index)}-title`}
                className="flex items-start gap-3 text-xl sm:text-2xl font-extrabold text-ink"
              >
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-primary text-base font-black text-white"
                >
                  {index + 1}
                </span>
                <span>
                  <span className="sr-only">Part {index + 1}: </span>
                  {section.title}
                </span>
              </h2>
              <div className="mt-5">
                <LessonContent content={section.content} />
              </div>
            </article>
          ))}
        </div>

        {/* Outcome + quiz */}
        <section
          aria-labelledby="quiz-heading"
          className="reveal mt-10 rounded-3xl bg-sun-soft p-8 text-center"
        >
          {course && (
            <p className="mx-auto mb-6 flex max-w-xl items-start justify-center gap-2 font-bold text-ink">
              <Trophy
                className="mt-0.5 w-5 h-5 flex-none text-amber-600"
                aria-hidden="true"
              />
              {course.outcome}
            </p>
          )}
          <Brain className="mx-auto w-12 h-12 text-brand" aria-hidden="true" />
          <h2 id="quiz-heading" className="mt-3 text-2xl font-black text-ink">
            Ready to test yourself?
          </h2>
          <p className="mt-2 text-ink-muted">
            Take a quick quiz and see what stuck.
          </p>
          <Button
            size="lg"
            className="mt-6"
            onClick={() => quizId && navigate(`/quiz/${quizId}`)}
            disabled={!quizId}
          >
            Take the quiz
            <ArrowRight aria-hidden="true" />
          </Button>
          {!quizId && (
            <p className="mt-2 text-sm text-ink-muted">Quiz coming soon</p>
          )}
        </section>

        {/* Prev / next */}
        <nav
          aria-label="More lessons"
          className="mt-10 flex flex-col sm:flex-row justify-between gap-4"
        >
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link to={prevLessonPath ?? "/courses"}>
              <ArrowLeft aria-hidden="true" />
              <span className="truncate">
                {prevLessonPath
                  ? (prevCourse?.title ?? prevLessonTitle)
                  : "All courses"}
              </span>
            </Link>
          </Button>
          <Button asChild size="lg" className="flex-1">
            <Link to={nextLessonPath ?? "/courses"}>
              <span className="truncate">
                {nextLessonPath
                  ? `Next: ${nextCourse?.title ?? nextLessonTitle}`
                  : "Pick another course"}
              </span>
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </nav>
      </div>
    </Layout>
  );
}
