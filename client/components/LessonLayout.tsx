import { ReactNode, isValidElement, useEffect, useMemo, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import LessonContent from "./LessonContent";
import QuizComponent from "./Quiz";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock,
  ListOrdered,
  PlayCircle,
  RotateCcw,
  Trophy,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { courses, pillarWord } from "@/data/courses";
import { getQuizById } from "@/data/quizzes";
import { loadUserProgress } from "@/data/xpSystem";
import { useCourseProgress } from "@/lib/course-progress";

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

/* ---------- Course structure ---------- */

type ItemKind = "video" | "reading" | "quiz";

interface CourseItem {
  id: string;
  kind: ItemKind;
  title: string;
  meta: string;
  module: number;
  section?: LessonSection;
}

interface CourseModule {
  number: number;
  title: string;
  summary: string;
  items: CourseItem[];
}

const KIND_LABEL: Record<ItemKind, string> = {
  video: "Video",
  reading: "Reading",
  quiz: "Quiz",
};

const KIND_ICON: Record<ItemKind, typeof PlayCircle> = {
  video: PlayCircle,
  reading: BookOpen,
  quiz: Brain,
};

/** About 150 words a minute, rounded up, at least 2 minutes. */
function readingMinutes(text: string) {
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.ceil(words / 150));
}

function buildModules(
  sections: LessonSection[],
  videoTitle: string | undefined,
  quizId: string | undefined,
): CourseModule[] {
  const half = Math.ceil(sections.length / 2);
  const reading = (
    s: LessonSection,
    i: number,
    module: number,
  ): CourseItem => ({
    id: `part-${i + 1}`,
    kind: "reading",
    title: s.title,
    meta: `${readingMinutes(s.content)} min`,
    module,
    section: s,
  });

  const m1: CourseItem[] = [];
  if (videoTitle !== undefined) {
    m1.push({
      id: "video",
      kind: "video",
      title: videoTitle || "Watch and learn",
      meta: "Short video",
      module: 1,
    });
  }
  sections.slice(0, half).forEach((s, i) => m1.push(reading(s, i, 1)));
  const m2 = sections.slice(half).map((s, i) => reading(s, i + half, 2));

  const modules: CourseModule[] = [
    {
      number: 1,
      title: "The basics",
      summary: "Watch the video, then learn the key ideas.",
      items: m1,
    },
  ];
  if (m2.length) {
    modules.push({
      number: 2,
      title: "Going further",
      summary: "Build on the basics with real examples and tips.",
      items: m2,
    });
  }
  const quiz = quizId ? getQuizById(quizId) : undefined;
  modules.push({
    number: modules.length + 1,
    title: "Check what you learned",
    summary: "Take the quiz and earn points.",
    items: [
      {
        id: "quiz",
        kind: "quiz",
        title: "Course quiz",
        meta: quiz ? `${quiz.questions.length} questions` : "Coming soon",
        module: modules.length + 1,
      },
    ],
  });
  return modules;
}

/* ---------- Shared pieces ---------- */

function ItemIcon({ kind, done }: { kind: ItemKind; done: boolean }) {
  const Icon = done ? CheckCircle2 : KIND_ICON[kind];
  return (
    <span
      className={cn(
        "flex h-10 w-10 flex-none items-center justify-center rounded-full border-2",
        done
          ? "border-primary bg-primary text-white"
          : "border-border bg-white text-ink",
      )}
      aria-hidden="true"
    >
      <Icon className="h-5 w-5" />
    </span>
  );
}

interface OutlineProps {
  base: string;
  modules: CourseModule[];
  done: Set<string>;
  currentId?: string;
  onNavigate?: () => void;
}

function Outline({ base, modules, done, currentId, onNavigate }: OutlineProps) {
  return (
    <ol className="space-y-5">
      {modules.map((m) => (
        <li key={m.number}>
          <p className="px-2 text-xs font-extrabold uppercase tracking-wide text-ink-muted">
            Module {m.number}
          </p>
          <p className="px-2 font-extrabold text-ink">{m.title}</p>
          <ol className="mt-2 space-y-1">
            {m.items.map((item) => {
              const isDone = done.has(item.id);
              const isCurrent = item.id === currentId;
              const Icon = isDone ? CheckCircle2 : KIND_ICON[item.kind];
              return (
                <li key={item.id}>
                  <Link
                    to={`${base}/${item.id}`}
                    onClick={onNavigate}
                    aria-current={isCurrent ? "page" : undefined}
                    className={cn(
                      "flex items-start gap-2.5 rounded-xl border-l-4 px-2 py-2 text-sm transition-colors duration-150",
                      isCurrent
                        ? "border-primary bg-mint font-bold text-ink"
                        : "border-transparent text-ink-muted hover:bg-mint/60 hover:text-ink",
                    )}
                  >
                    <Icon
                      className={cn(
                        "mt-0.5 h-4 w-4 flex-none",
                        isDone ? "text-primary" : "text-ink-muted",
                      )}
                      aria-hidden="true"
                    />
                    <span className="flex-1">
                      <span className="sr-only">
                        {isDone ? "Completed. " : ""}
                      </span>
                      <span className="font-bold">
                        {KIND_LABEL[item.kind]}:
                      </span>{" "}
                      {item.title}
                      <span className="block text-xs font-semibold text-ink-muted">
                        {item.meta}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Main component ---------- */

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
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const course = courses.find(
    (c) => pathname === c.path || pathname.startsWith(c.path + "/"),
  );
  const base = course?.path ?? pathname.replace(/\/[^/]*$/, "");
  const itemId = pathname.startsWith(base + "/")
    ? pathname.slice(base.length + 1).replace(/\/$/, "")
    : "";

  const videoTitle = isValidElement<{ title?: string }>(videoEmbed)
    ? (videoEmbed.props.title ?? "")
    : undefined;

  const modules = useMemo(
    () => buildModules(sections, videoTitle, quizId),
    [sections, videoTitle, quizId],
  );
  const items = useMemo(() => modules.flatMap((m) => m.items), [modules]);

  const { done: doneRaw, mark } = useCourseProgress(course?.slug);
  // A quiz finished on the Quizzes page also counts.
  const done = useMemo(() => {
    const d = new Set(doneRaw);
    if (quizId && loadUserProgress().completedQuizzes.includes(quizId)) {
      d.add("quiz");
    }
    return d;
  }, [doneRaw, quizId]);

  const completedCount = items.filter((i) => done.has(i.id)).length;
  const percent = Math.round((completedCount / items.length) * 100);
  const nextUp = items.find((i) => !done.has(i.id));

  const heading = course?.title ?? title;
  const nextCourseTitle = nextLessonPath
    ? (courses.find((c) => c.path === nextLessonPath)?.title ?? nextLessonTitle)
    : undefined;
  const prevCourseTitle = prevLessonPath
    ? (courses.find((c) => c.path === prevLessonPath)?.title ?? prevLessonTitle)
    : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [itemId]);

  /* ----- Course home: overview + syllabus ----- */
  if (!itemId) {
    return (
      <Layout>
        <section className="bg-gradient-to-b from-mint to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
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

            <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
              <div>
                <div className="hero-animate flex flex-wrap items-center gap-2">
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
                <h1 className="hero-animate mt-4 text-4xl md:text-5xl font-black text-ink">
                  {heading}
                </h1>
                <p className="hero-animate mt-4 text-lg md:text-xl text-ink-muted max-w-2xl">
                  {course?.blurb ?? intro}
                </p>
                <dl className="hero-animate mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-ink-muted">
                  {course && (
                    <div className="flex items-center gap-1.5">
                      <dt className="sr-only">Age</dt>
                      <Users
                        className="w-4 h-4 text-brand"
                        aria-hidden="true"
                      />
                      <dd>{course.age}</dd>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5">
                    <dt className="sr-only">Length</dt>
                    <ListOrdered
                      className="w-4 h-4 text-brand"
                      aria-hidden="true"
                    />
                    <dd>
                      {modules.length} modules, {items.length} items
                    </dd>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <dt className="sr-only">Time</dt>
                    <Clock className="w-4 h-4 text-brand" aria-hidden="true" />
                    <dd>{course?.time.split(", ").pop() ?? duration}</dd>
                  </div>
                </dl>
              </div>

              {/* Progress card */}
              <div className="hero-animate rounded-3xl border border-border bg-white p-6 shadow-sm">
                <p className="text-sm font-extrabold uppercase tracking-wide text-ink">
                  Your progress
                </p>
                <p className="mt-2 text-3xl font-black text-ink">{percent}%</p>
                <Progress
                  value={percent}
                  className="mt-2 h-3"
                  aria-label="Course progress"
                />
                <p className="mt-2 text-sm text-ink-muted">
                  {completedCount} of {items.length} items done
                </p>
                <Button asChild size="lg" className="mt-5 w-full">
                  <Link to={`${base}/${(nextUp ?? items[0]).id}`}>
                    {completedCount === 0 ? (
                      <>
                        Start course <ArrowRight aria-hidden="true" />
                      </>
                    ) : nextUp ? (
                      <>
                        Resume <ArrowRight aria-hidden="true" />
                      </>
                    ) : (
                      <>
                        <RotateCcw aria-hidden="true" /> Review course
                      </>
                    )}
                  </Link>
                </Button>
                {nextUp && completedCount > 0 && (
                  <p className="mt-3 text-sm text-ink-muted">
                    Up next: {KIND_LABEL[nextUp.kind]}, {nextUp.title}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* What you'll learn */}
          {course && (
            <section
              aria-labelledby="learn-heading"
              className="rounded-3xl border border-border bg-white p-6 shadow-sm"
            >
              <h2
                id="learn-heading"
                className="text-sm font-extrabold uppercase tracking-wide text-ink"
              >
                What you'll learn
              </h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {course.objectives.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-ink">
                    <CheckCircle2
                      className="mt-0.5 w-5 h-5 flex-none text-brand"
                      aria-hidden="true"
                    />
                    {o}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Syllabus */}
          <section aria-labelledby="syllabus-heading" className="mt-10">
            <h2
              id="syllabus-heading"
              className="text-2xl md:text-3xl font-black text-ink"
            >
              Course content
            </h2>
            <p className="mt-1 text-ink-muted">
              Go in order, or jump to any part. Your progress saves in this
              browser.
            </p>

            <ol className="mt-6 space-y-6">
              {modules.map((m) => {
                const mDone = m.items.filter((i) => done.has(i.id)).length;
                return (
                  <li
                    key={m.number}
                    className="reveal overflow-hidden rounded-3xl border border-border bg-white shadow-sm"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border bg-mint-soft px-6 py-5">
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-wide text-primary">
                          Module {m.number}
                        </p>
                        <h3 className="text-xl font-extrabold text-ink">
                          {m.title}
                        </h3>
                        <p className="mt-1 text-sm text-ink-muted">
                          {m.summary}
                        </p>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-ink shadow-sm">
                        {mDone}/{m.items.length} done
                      </span>
                    </div>
                    <ol>
                      {m.items.map((item) => {
                        const isDone = done.has(item.id);
                        return (
                          <li
                            key={item.id}
                            className="border-b border-border last:border-b-0"
                          >
                            <Link
                              to={`${base}/${item.id}`}
                              className="group flex items-center gap-4 px-6 py-4 transition-colors duration-150 hover:bg-mint-soft"
                            >
                              <ItemIcon kind={item.kind} done={isDone} />
                              <span className="flex-1 min-w-0">
                                <span className="block text-ink">
                                  <span className="font-extrabold">
                                    {KIND_LABEL[item.kind]}
                                  </span>{" "}
                                  {item.title}
                                </span>
                                <span className="mt-0.5 flex items-center gap-1.5 text-sm text-ink-muted">
                                  <Clock
                                    className="w-3.5 h-3.5"
                                    aria-hidden="true"
                                  />
                                  {item.meta}
                                  {isDone && (
                                    <span className="font-bold text-primary">
                                      · Completed
                                    </span>
                                  )}
                                </span>
                              </span>
                              <ChevronRight
                                className="w-5 h-5 text-ink-muted transition-transform duration-200 group-hover:translate-x-1"
                                aria-hidden="true"
                              />
                            </Link>
                          </li>
                        );
                      })}
                    </ol>
                  </li>
                );
              })}
            </ol>
          </section>

          {course && (
            <p className="mt-8 flex items-start gap-2 rounded-2xl bg-sun-soft px-5 py-4 font-semibold text-ink">
              <Trophy
                className="mt-0.5 w-5 h-5 flex-none text-amber-600"
                aria-hidden="true"
              />
              {course.outcome}
            </p>
          )}

          <nav
            aria-label="More courses"
            className="mt-10 flex flex-col sm:flex-row justify-between gap-4"
          >
            <Button asChild variant="outline" size="lg" className="flex-1">
              <Link to={prevLessonPath ?? "/courses"}>
                <ArrowLeft aria-hidden="true" />
                <span className="truncate">
                  {prevCourseTitle ?? "All courses"}
                </span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex-1">
              <Link to={nextLessonPath ?? "/courses"}>
                <span className="truncate">
                  {nextCourseTitle
                    ? `Next course: ${nextCourseTitle}`
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

  /* ----- Item player ----- */
  const index = items.findIndex((i) => i.id === itemId);
  if (index === -1) return <Navigate to={base} replace />;

  const item = items[index];
  const prev = items[index - 1];
  const next = items[index + 1];
  const mod = modules.find((m) => m.number === item.module)!;
  const quiz = item.kind === "quiz" && quizId ? getQuizById(quizId) : undefined;

  const goNext = () => {
    mark(item.id);
    navigate(next ? `${base}/${next.id}` : base);
  };

  return (
    <PlayerShell
      base={base}
      heading={heading}
      modules={modules}
      done={done}
      currentId={item.id}
      percent={percent}
      completedCount={completedCount}
      total={items.length}
    >
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1 text-sm font-semibold text-ink-muted">
          <li>
            <Link to={base} className="link-underline text-primary">
              {heading}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-4 h-4" />
          </li>
          <li>
            Module {mod.number}: {mod.title}
          </li>
        </ol>
      </nav>

      <p className="mt-5 flex items-center gap-2 text-sm font-bold text-ink-muted">
        <span className="rounded-full bg-mint px-3 py-1 text-primary">
          {KIND_LABEL[item.kind]}
        </span>
        <span>{item.meta}</span>
        <span aria-hidden="true">·</span>
        <span>
          Item {index + 1} of {items.length}
        </span>
      </p>
      {/* The quiz component renders its own heading */}
      {!(item.kind === "quiz" && quiz) && (
        <h1 className="mt-3 text-3xl md:text-4xl font-black text-ink">
          {item.title}
        </h1>
      )}

      <div className="mt-6">
        {item.kind === "video" && (
          <>
            <div className="overflow-hidden rounded-2xl bg-black shadow-sm">
              {videoEmbed}
            </div>
            <p className="mt-4 text-ink-muted">
              Watch the video, then move on to the readings. You can pause or
              rewatch any time.
            </p>
          </>
        )}

        {item.kind === "reading" && item.section && (
          <article className="rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-sm">
            <LessonContent content={item.section.content} />
          </article>
        )}

        {item.kind === "quiz" &&
          (quiz ? (
            <div className="-mx-6">
              <QuizComponent
                key={quiz.id}
                quiz={quiz}
                onComplete={() => {
                  mark("quiz");
                  navigate(base);
                }}
              />
            </div>
          ) : (
            <p className="rounded-3xl bg-sun-soft p-8 text-center font-semibold text-ink">
              The quiz for this course is coming soon.
            </p>
          ))}
      </div>

      {/* Item navigation */}
      <nav
        aria-label="Course items"
        className="mt-10 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-border pt-6"
      >
        {prev ? (
          <Button asChild variant="outline" size="lg">
            <Link to={`${base}/${prev.id}`}>
              <ArrowLeft aria-hidden="true" />
              Previous
            </Link>
          </Button>
        ) : (
          <Button asChild variant="outline" size="lg">
            <Link to={base}>
              <ArrowLeft aria-hidden="true" />
              Course home
            </Link>
          </Button>
        )}

        {item.kind !== "quiz" || !quiz ? (
          <Button size="lg" onClick={goNext} className="sm:max-w-[60%]">
            <span className="truncate">
              {next ? `Done, next: ${KIND_LABEL[next.kind]}` : "Finish course"}
            </span>
            <ArrowRight aria-hidden="true" />
          </Button>
        ) : (
          <Button asChild variant="outline" size="lg">
            <Link to={base}>
              Back to course home
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        )}
      </nav>
    </PlayerShell>
  );
}

/* ---------- Player shell: sidebar outline + content ---------- */

interface PlayerShellProps {
  base: string;
  heading: string;
  modules: CourseModule[];
  done: Set<string>;
  currentId: string;
  percent: number;
  completedCount: number;
  total: number;
  children: ReactNode;
}

function PlayerShell({
  base,
  heading,
  modules,
  done,
  currentId,
  percent,
  completedCount,
  total,
  children,
}: PlayerShellProps) {
  const [open, setOpen] = useState(false);

  const header = (
    <div>
      <Link
        to={base}
        className="link-underline font-extrabold text-ink hover:text-primary"
      >
        {heading}
      </Link>
      <Progress
        value={percent}
        className="mt-3 h-2"
        aria-label="Course progress"
      />
      <p className="mt-1.5 text-xs font-semibold text-ink-muted">
        {completedCount} of {total} done
      </p>
    </div>
  );

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 grid gap-8 lg:grid-cols-[300px_1fr]">
        {/* Desktop outline */}
        <aside aria-label="Course outline" className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-3xl border border-border bg-white p-4 shadow-sm">
            {header}
            <div className="mt-5">
              <Outline
                base={base}
                modules={modules}
                done={done}
                currentId={currentId}
              />
            </div>
          </div>
        </aside>

        <div className="min-w-0 max-w-3xl">
          {/* Mobile outline */}
          <div className="lg:hidden mb-5">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  <span className="flex items-center gap-2">
                    <ListOrdered aria-hidden="true" />
                    Course outline
                  </span>
                  <span className="text-ink-muted">
                    {completedCount}/{total} done
                  </span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[88vw] max-w-sm overflow-y-auto"
              >
                <SheetHeader className="text-left">
                  <SheetTitle className="sr-only">Course outline</SheetTitle>
                </SheetHeader>
                {header}
                <div className="mt-5">
                  <Outline
                    base={base}
                    modules={modules}
                    done={done}
                    currentId={currentId}
                    onNavigate={() => setOpen(false)}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {children}
        </div>
      </div>
    </Layout>
  );
}
