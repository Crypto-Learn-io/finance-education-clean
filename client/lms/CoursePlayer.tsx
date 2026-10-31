import {
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  Clock,
  ListTree,
  MessageSquare,
  NotebookPen,
  PanelLeftClose,
  PanelLeftOpen,
  PanelRightOpen,
  RotateCcw,
  Trophy,
  Users,
} from "lucide-react";
import Layout from "@/components/Layout";
import NotFound from "@/pages/NotFound";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { pillarWord } from "@/data/courses";
import { loadUserProgress } from "@/data/xpSystem";
import { useCourseProgress } from "@/lib/course-progress";
import type { CourseData, Item } from "./schema";
import {
  allCourses,
  courseBySlug,
  flattenCourse,
  FlatItem,
  ITEM_LABEL,
  itemMinutes,
} from "./registry";
import OutlineTree, { CheckBox } from "./components/OutlineTree";
import ItemCanvas, { toQuiz } from "./components/ItemCanvas";
import StudyPanel, { PanelTab } from "./components/StudyPanel";

/* ---------- Shared progress logic ---------- */

function useProgress(course: CourseData, flat: FlatItem[]) {
  const {
    done: raw,
    answered,
    mark,
    markAnswered,
  } = useCourseProgress(course.slug);
  // A quiz finished anywhere (also on the Quizzes page) counts as done.
  const done = useMemo(() => {
    const d = new Set(raw);
    const completed = loadUserProgress().completedQuizzes;
    for (const f of flat)
      if (f.item.type === "quiz") {
        const q = toQuiz(course, f.item);
        if (q && completed.includes(q.id)) d.add(f.item.id);
      }
    return d;
  }, [raw, flat, course]);
  const count = flat.filter((f) => done.has(f.item.id)).length;
  return {
    done,
    answered,
    mark,
    markAnswered,
    count,
    percent: Math.round((count / flat.length) * 100),
  };
}

function readPref(key: string, fallback: boolean) {
  try {
    const v = window.localStorage.getItem(key);
    return v === null ? fallback : v === "1";
  } catch {
    return fallback;
  }
}
function writePref(key: string, v: boolean) {
  try {
    window.localStorage.setItem(key, v ? "1" : "0");
  } catch {
    /* ignore */
  }
}

/* ---------- Route entry ---------- */

export default function CoursePlayerPage() {
  const params = useParams();
  const course = courseBySlug(params.slug);
  if (!course) return <NotFound />;
  const itemId = (params["*"] ?? "").split("/")[0];
  return itemId ? (
    <Player key={course.slug} course={course} itemId={itemId} />
  ) : (
    <CourseHome course={course} />
  );
}

/* ---------- Course home ---------- */

function CourseHome({ course }: { course: CourseData }) {
  const flat = useMemo(() => flattenCourse(course), [course]);
  const { done, count, percent } = useProgress(course, flat);
  const base = `/lessons/${course.slug}`;
  const nextUp = flat.find((f) => !done.has(f.item.id));
  const order = allCourses.findIndex((c) => c.slug === course.slug);
  const prevCourse = allCourses[order - 1];
  const nextCourse = allCourses[order + 1];
  const m = course.meta;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Layout>
      <section className="bg-gradient-to-b from-mint to-white">
        <div className="mx-auto max-w-5xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm font-semibold text-ink-muted">
              <li>
                <Link to="/courses" className="link-underline text-primary">
                  Courses
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-4 w-4" />
              </li>
              <li aria-current="page" className="text-ink">
                {m.title}
              </li>
            </ol>
          </nav>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
            <div>
              <div className="hero-animate flex flex-wrap items-center gap-2">
                <span className="free-pill">Free</span>
                <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-ink shadow-sm">
                  {m.level}
                </span>
                {m.pillars.map((p) => (
                  <span
                    key={p}
                    className="rounded-full bg-white px-3 py-1 text-sm font-bold text-primary shadow-sm"
                  >
                    {pillarWord(p)}
                  </span>
                ))}
              </div>
              <h1 className="hero-animate mt-4 text-4xl font-black text-ink md:text-5xl">
                {m.title}
              </h1>
              <p className="hero-animate mt-4 max-w-2xl text-lg text-ink-muted md:text-xl">
                {m.blurb}
              </p>
              <dl className="hero-animate mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-ink-muted">
                <div className="flex items-center gap-1.5">
                  <dt className="sr-only">Age</dt>
                  <Users className="h-4 w-4 text-brand" aria-hidden="true" />
                  <dd>{m.age}</dd>
                </div>
                <div className="flex items-center gap-1.5">
                  <dt className="sr-only">Length</dt>
                  <Clock className="h-4 w-4 text-brand" aria-hidden="true" />
                  <dd>{m.time}</dd>
                </div>
                <div className="flex items-center gap-1.5">
                  <dt className="sr-only">Items</dt>
                  <ListTree className="h-4 w-4 text-brand" aria-hidden="true" />
                  <dd>{flat.length} items</dd>
                </div>
              </dl>
            </div>
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
                {count} of {flat.length} items done
              </p>
              <Button asChild size="lg" className="mt-5 w-full">
                <Link to={`${base}/${(nextUp ?? flat[0]).item.id}`}>
                  {count === 0 ? (
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
              {nextUp && count > 0 && (
                <p className="mt-3 text-sm text-ink-muted">
                  Up next: {ITEM_LABEL[nextUp.item.type]}, {nextUp.item.title}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <section
          aria-labelledby="learn-h"
          className="rounded-3xl border border-border bg-white p-6 shadow-sm"
        >
          <h2
            id="learn-h"
            className="text-sm font-extrabold uppercase tracking-wide text-ink"
          >
            What you'll learn
          </h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {m.objectives.map((o) => (
              <li key={o} className="flex items-start gap-2 text-ink">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 flex-none text-brand"
                  aria-hidden="true"
                />
                {o}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="syl-h" className="mt-10">
          <h2 id="syl-h" className="text-2xl font-black text-ink md:text-3xl">
            Course content
          </h2>
          <p className="mt-1 text-ink-muted">
            Go in order, or jump to any part. Progress saves in this browser.
          </p>
          <ol className="mt-6 space-y-6">
            {course.modules.map((mod, mi) => {
              const items = mod.lessons.flatMap((l) => l.items);
              const mDone = items.filter((i) => done.has(i.id)).length;
              return (
                <li
                  key={mod.id}
                  className="reveal overflow-hidden rounded-3xl border border-border bg-white shadow-sm"
                  style={{ "--delay": `${mi * 80}ms` } as CSSProperties}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border bg-mint-soft px-6 py-5">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-wide text-primary">
                        Module {mi + 1}
                      </p>
                      <h3 className="text-xl font-extrabold text-ink">
                        {mod.title}
                      </h3>
                      {mod.summary && (
                        <p className="mt-1 text-sm text-ink-muted">
                          {mod.summary}
                        </p>
                      )}
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-ink shadow-sm">
                      {mDone}/{items.length} done
                    </span>
                  </div>
                  {mod.lessons.map((l) => (
                    <div key={l.id}>
                      <h4 className="px-6 pt-4 text-xs font-extrabold uppercase tracking-wide text-ink-muted">
                        {l.title}
                      </h4>
                      <ol className="px-3 pb-3 pt-1">
                        {l.items.map((it) => {
                          const isDone = done.has(it.id);
                          const mins = itemMinutes(it);
                          return (
                            <li key={it.id}>
                              <Link
                                to={`${base}/${it.id}`}
                                className="hover-glow group flex items-center gap-4 rounded-2xl border border-transparent px-3 py-3"
                              >
                                <CheckBox
                                  done={isDone}
                                  label={isDone ? "Completed" : "Not started"}
                                />
                                <span className="min-w-0 flex-1">
                                  <span className="block text-ink">
                                    <span className="font-extrabold">
                                      {ITEM_LABEL[it.type]}
                                    </span>{" "}
                                    {it.title}
                                  </span>
                                  <span className="mt-0.5 block text-sm text-ink-muted">
                                    {describe(it)}
                                    {mins ? ` · ${mins} min` : ""}
                                  </span>
                                </span>
                                <ChevronRight
                                  className="h-5 w-5 text-ink-muted transition-transform duration-200 group-hover:translate-x-1"
                                  aria-hidden="true"
                                />
                              </Link>
                            </li>
                          );
                        })}
                      </ol>
                    </div>
                  ))}
                </li>
              );
            })}
          </ol>
        </section>

        <p className="mt-8 flex items-start gap-2 rounded-2xl bg-sun-soft px-5 py-4 font-semibold text-ink">
          <Trophy
            className="mt-0.5 h-5 w-5 flex-none text-amber-600"
            aria-hidden="true"
          />
          {m.outcome}
        </p>

        <nav
          aria-label="More courses"
          className="mt-10 flex flex-col justify-between gap-4 sm:flex-row"
        >
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link to={prevCourse ? `/lessons/${prevCourse.slug}` : "/courses"}>
              <ArrowLeft aria-hidden="true" />
              <span className="truncate">
                {prevCourse?.meta.title ?? "All courses"}
              </span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link to={nextCourse ? `/lessons/${nextCourse.slug}` : "/courses"}>
              <span className="truncate">
                {nextCourse
                  ? `Next course: ${nextCourse.meta.title}`
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

function describe(it: Item) {
  if (it.type === "video")
    return it.checkpoints.length
      ? `${it.checkpoints.length} checkpoint questions`
      : "Video";
  if (it.type === "widget") return "Hands-on tool";
  if (it.type === "quiz") return "Earn points";
  const checks = it.blocks.filter(
    (b) => b.type === "check" || b.type === "sort",
  ).length;
  return checks ? `${checks} quick check${checks > 1 ? "s" : ""}` : "Reading";
}

/* ---------- Player ---------- */

function Player({ course, itemId }: { course: CourseData; itemId: string }) {
  const navigate = useNavigate();
  const flat = useMemo(() => flattenCourse(course), [course]);
  const base = `/lessons/${course.slug}`;
  const index = flat.findIndex((f) => f.item.id === itemId);
  const { done, answered, mark, markAnswered, count } = useProgress(
    course,
    flat,
  );

  const [leftOpen, setLeftOpen] = useState(() =>
    readPref("thrive_outline_open", true),
  );
  const [rightOpen, setRightOpen] = useState(false);
  const [tab, setTab] = useState<PanelTab>("notes");
  const [outlineSheet, setOutlineSheet] = useState(false);
  const [toolsSheet, setToolsSheet] = useState(false);
  const [scrollFrac, setScrollFrac] = useState(0);
  const canvasRef = useRef<HTMLDivElement>(null);
  const prevIndex = useRef(index);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  // Slide direction + scroll reset when the item changes
  useEffect(() => {
    if (index !== prevIndex.current) {
      setDirection(index > prevIndex.current ? "next" : "prev");
      prevIndex.current = index;
    }
    canvasRef.current?.scrollTo({ top: 0 });
    window.scrollTo({ top: 0 });
    setScrollFrac(0);
  }, [index]);

  // Scroll progress inside the canvas (desktop) or the window (mobile)
  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const el = canvasRef.current;
      const desktop =
        el &&
        el.scrollHeight > el.clientHeight + 4 &&
        getComputedStyle(el).overflowY !== "visible";
      const frac = desktop
        ? el!.scrollTop / Math.max(1, el!.scrollHeight - el!.clientHeight)
        : window.scrollY /
          Math.max(
            1,
            document.documentElement.scrollHeight - window.innerHeight,
          );
      setScrollFrac(Math.min(1, Math.max(0, frac || 0)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    const el = canvasRef.current;
    el?.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el?.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const current = flat[index];
  const go = useCallback(
    (id: string) => navigate(`${base}/${id}`),
    [navigate, base],
  );

  if (index === -1) return <Navigate to={base} replace />;

  const prev = flat[index - 1];
  const next = flat[index + 1];
  const isDone = done.has(current.item.id);
  const total = flat.length;
  const barValue = ((count + (isDone ? 0 : scrollFrac * 0.95)) / total) * 100;

  const completeAndContinue = () => {
    mark(current.item.id);
    if (next) go(next.item.id);
    else navigate(base);
  };

  const openPanel = (t: PanelTab) => {
    if (rightOpen && tab === t) setRightOpen(false);
    else {
      setTab(t);
      setRightOpen(true);
    }
  };

  const toggleLeft = () =>
    setLeftOpen((v) => {
      writePref("thrive_outline_open", !v);
      return !v;
    });

  const lessonTitle = current.lesson.title;

  return (
    <div className="flex min-h-[100dvh] flex-col overflow-x-clip bg-white md:h-[100dvh] md:overflow-hidden">
      {/* Persistent top progress bar */}
      <div
        className="fixed inset-x-0 top-0 z-[70] h-1 bg-mint"
        role="progressbar"
        aria-label="Course progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round((count / total) * 100)}
      >
        <div
          className="h-full rounded-r-full bg-gradient-to-r from-brand-dark to-brand shadow-[0_0_10px_rgb(15_157_88/0.6)]"
          style={{
            width: `${barValue}%`,
            transition: "width 600ms var(--ease-in-out)",
          }}
        />
      </div>

      <a
        href="#canvas"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[80] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to lesson content
      </a>

      {/* Compact header */}
      <header className="sticky top-0 z-50 flex h-14 flex-none items-center gap-2 border-b border-border bg-white/90 px-2 backdrop-blur-md sm:px-3">
        <button
          type="button"
          onClick={toggleLeft}
          aria-expanded={leftOpen}
          aria-controls="outline-sidebar"
          aria-label={leftOpen ? "Hide course outline" : "Show course outline"}
          className="hidden h-10 w-10 items-center justify-center rounded-xl text-ink hover:bg-mint md:flex"
        >
          {leftOpen ? (
            <PanelLeftClose className="h-5 w-5" aria-hidden="true" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
        <Link to="/" className="flex-none rounded-lg" aria-label="THRIVE home">
          <img
            src="/favicon.svg"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8"
          />
        </Link>
        <div className="min-w-0 flex-1 leading-tight">
          <Link
            to={base}
            className="block truncate font-extrabold text-ink hover:text-primary"
          >
            {course.meta.title}
          </Link>
          <p className="truncate text-xs text-ink-muted">
            {count} of {total} done · Item {index + 1} of {total}
          </p>
        </div>
        <div
          className="hidden items-center gap-1 md:flex"
          role="group"
          aria-label="Study tools"
        >
          {(
            [
              ["notes", NotebookPen, "Notes"],
              ["assistant", Bot, "AI Assistant"],
              ["discussion", MessageSquare, "Discussion"],
            ] as const
          ).map(([t, Icon, label]) => (
            <button
              key={t}
              type="button"
              onClick={() => openPanel(t)}
              aria-pressed={rightOpen && tab === t}
              aria-controls="study-panel"
              className={cn(
                "flex h-10 items-center gap-1.5 rounded-xl px-3 text-sm font-bold transition-colors duration-200",
                rightOpen && tab === t
                  ? "bg-primary text-white"
                  : "text-ink-muted hover:bg-mint hover:text-ink",
              )}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span className="hidden lg:inline">{label}</span>
            </button>
          ))}
        </div>
      </header>

      <div className="relative flex min-h-0 flex-1">
        {/* Left sidebar (md+) */}
        <aside
          id="outline-sidebar"
          aria-label="Course outline sidebar"
          data-open={leftOpen}
          className="hidden flex-none overflow-hidden border-r border-border bg-white transition-[width] duration-500 ease-[var(--ease-spring)] md:block md:w-0 md:data-[open=true]:w-[280px] lg:data-[open=true]:w-[300px]"
        >
          <div
            className={cn(
              "h-full w-[280px] overflow-y-auto p-3 transition-[opacity,transform,visibility] duration-300 lg:w-[300px]",
              leftOpen
                ? "visible translate-x-0 opacity-100"
                : "invisible -translate-x-4 opacity-0",
            )}
          >
            <OutlineTree
              course={course}
              base={base}
              done={done}
              currentId={current.item.id}
            />
          </div>
        </aside>

        {/* Main canvas */}
        <main
          id="canvas"
          ref={canvasRef}
          tabIndex={-1}
          className="min-w-0 flex-1 outline-none md:overflow-y-auto"
        >
          <div className="mx-auto max-w-3xl px-4 pb-28 pt-6 sm:px-6 md:pb-12 lg:pt-8">
            <div
              key={current.item.id}
              className={
                direction === "next" ? "canvas-enter-next" : "canvas-enter-prev"
              }
            >
              <nav aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-1 text-sm font-semibold text-ink-muted">
                  <li>
                    <Link to={base} className="link-underline text-primary">
                      Module {current.moduleIndex + 1}: {current.module.title}
                    </Link>
                  </li>
                  <li aria-hidden="true">
                    <ChevronRight className="h-4 w-4" />
                  </li>
                  <li>{lessonTitle}</li>
                </ol>
              </nav>
              <p className="mt-4 flex flex-wrap items-center gap-2 text-sm font-bold text-ink-muted">
                <span className="rounded-full bg-mint px-3 py-1 text-primary">
                  {ITEM_LABEL[current.item.type]}
                </span>
                {itemMinutes(current.item) && (
                  <span>{itemMinutes(current.item)} min</span>
                )}
                {isDone && (
                  <span className="flex items-center gap-1 text-primary">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />{" "}
                    Completed
                  </span>
                )}
              </p>
              {current.item.type !== "quiz" && (
                <h1 className="mt-3 text-3xl font-black text-ink md:text-4xl">
                  {current.item.title}
                </h1>
              )}

              <div className="mt-6">
                <ItemCanvas
                  course={course}
                  current={current}
                  answered={answered}
                  onAnswer={markAnswered}
                  onItemDone={() => mark(current.item.id)}
                  onQuizExit={() => {
                    mark(current.item.id);
                    navigate(base);
                  }}
                />
              </div>

              {/* Item navigation */}
              <nav
                aria-label="Lesson navigation"
                className="mt-10 hidden items-center justify-between gap-3 border-t border-border pt-6 md:flex"
              >
                <Button asChild variant="outline" size="lg">
                  <Link to={prev ? `${base}/${prev.item.id}` : base}>
                    <ArrowLeft aria-hidden="true" />
                    {prev ? "Previous" : "Course home"}
                  </Link>
                </Button>
                {current.item.type !== "quiz" &&
                  (isDone ? (
                    <Button
                      size="lg"
                      onClick={() => (next ? go(next.item.id) : navigate(base))}
                    >
                      {next
                        ? `Next: ${ITEM_LABEL[next.item.type]}`
                        : "Back to course home"}
                      <ArrowRight aria-hidden="true" />
                    </Button>
                  ) : (
                    <Button size="lg" onClick={completeAndContinue}>
                      <CheckCircle2 aria-hidden="true" />
                      {next ? "Complete and continue" : "Finish course"}
                    </Button>
                  ))}
              </nav>
            </div>
          </div>
        </main>

        {/* Right contextual panel (md+): overlay below xl, inline on xl */}
        <aside
          id="study-panel"
          aria-label="Study panel"
          data-open={rightOpen}
          className={cn(
            "hidden flex-none border-l border-border bg-white md:block",
            "md:absolute md:inset-y-0 md:right-0 md:z-40 md:w-[360px] md:translate-x-full md:shadow-2xl md:transition-transform md:duration-500 md:ease-[var(--ease-spring)] md:data-[open=true]:translate-x-0",
            "xl:static xl:w-0 xl:translate-x-0 xl:shadow-none xl:transition-[width] xl:data-[open=true]:w-[380px]",
          )}
        >
          <div
            className={cn(
              "h-full w-[360px] xl:w-[380px]",
              rightOpen ? "visible" : "invisible",
            )}
          >
            <StudyPanel
              course={course}
              current={current}
              flat={flat}
              tab={tab}
              onTab={setTab}
              onClose={() => setRightOpen(false)}
              onJump={go}
            />
          </div>
        </aside>
      </div>

      {/* Mobile bottom bar (< 768px) */}
      <nav
        aria-label="Lesson controls"
        className="fixed inset-x-0 bottom-0 z-50 flex items-center gap-2 border-t border-border bg-white/95 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-md md:hidden"
      >
        <button
          type="button"
          onClick={() => setOutlineSheet(true)}
          aria-haspopup="dialog"
          aria-expanded={outlineSheet}
          className="flex h-12 flex-col items-center justify-center rounded-xl px-3 text-[11px] font-bold text-ink-muted hover:bg-mint"
        >
          <ListTree className="h-5 w-5" aria-hidden="true" />
          Outline
        </button>
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 flex-none"
          aria-label={prev ? "Previous item" : "Course home"}
          onClick={() => (prev ? go(prev.item.id) : navigate(base))}
        >
          <ArrowLeft aria-hidden="true" />
        </Button>
        {current.item.type !== "quiz" ? (
          <Button
            className="h-12 flex-1"
            onClick={
              isDone
                ? () => (next ? go(next.item.id) : navigate(base))
                : completeAndContinue
            }
          >
            {isDone ? (next ? "Next" : "Done") : next ? "Complete" : "Finish"}
            <ArrowRight aria-hidden="true" />
          </Button>
        ) : (
          <Button
            className="h-12 flex-1"
            variant="outline"
            onClick={() => navigate(base)}
          >
            Course home
          </Button>
        )}
        <button
          type="button"
          onClick={() => setToolsSheet(true)}
          aria-haspopup="dialog"
          aria-expanded={toolsSheet}
          className="flex h-12 flex-col items-center justify-center rounded-xl px-3 text-[11px] font-bold text-ink-muted hover:bg-mint"
        >
          <PanelRightOpen className="h-5 w-5" aria-hidden="true" />
          Tools
        </button>
      </nav>

      {/* Mobile drawers */}
      <Drawer
        open={outlineSheet}
        onOpenChange={setOutlineSheet}
        shouldScaleBackground={false}
      >
        <DrawerContent className="max-h-[85dvh]">
          <DrawerTitle className="px-4 pt-2 text-lg font-black text-ink">
            Course outline
          </DrawerTitle>
          <div className="overflow-y-auto p-3">
            <OutlineTree
              course={course}
              base={base}
              done={done}
              currentId={current.item.id}
              onNavigate={() => setOutlineSheet(false)}
            />
          </div>
        </DrawerContent>
      </Drawer>
      <Drawer
        open={toolsSheet}
        onOpenChange={setToolsSheet}
        shouldScaleBackground={false}
      >
        <DrawerContent className="h-[85dvh]">
          <DrawerTitle className="sr-only">Study tools</DrawerTitle>
          <div className="min-h-0 flex-1">
            <StudyPanel
              course={course}
              current={current}
              flat={flat}
              tab={tab}
              onTab={setTab}
              onJump={(id) => {
                setToolsSheet(false);
                go(id);
              }}
            />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
