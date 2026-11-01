import { lazy, Suspense } from "react";
import { AlertTriangle, Info, Lightbulb } from "lucide-react";
import LessonContent from "@/components/LessonContent";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { cn } from "@/lib/utils";
import { getQuizById, Quiz } from "@/data/quizzes";
import type { Block, CourseData, QuizItem } from "../schema";
import type { FlatItem } from "../registry";
import KnowledgeCheck from "./KnowledgeCheck";
import SortCheck from "./SortCheck";
import { Accordion, Timeline } from "./Disclosure";
import { CanvasSkeleton } from "./Skeletons";

// Heavy pieces load on demand; a shimmer skeleton shows meanwhile.
const Playground = lazy(() => import("./Playground"));
const QuizComponent = lazy(() => import("@/components/Quiz"));

interface Props {
  course: CourseData;
  current: FlatItem;
  answered: Set<string>;
  onAnswer: (questionId: string) => void;
  onQuizExit: () => void;
}

export default function ItemCanvas({
  course,
  current,
  answered,
  onAnswer,
  onQuizExit,
}: Props) {
  const { item } = current;

  if (item.type === "video")
    return (
      <div className="reveal overflow-hidden rounded-2xl bg-ink shadow-lg">
        <YouTubeEmbed videoId={item.source.youtubeId} title={item.title} />
      </div>
    );

  if (item.type === "widget")
    return (
      <>
        <Suspense fallback={<CanvasSkeleton kind="widget" />}>
          <Playground
            kind={item.widget.kind}
            intro={item.widget.intro}
            defaults={item.widget.defaults}
          />
        </Suspense>
        {item.blocks && (
          <Blocks
            blocks={item.blocks}
            answered={answered}
            onAnswer={onAnswer}
          />
        )}
      </>
    );

  if (item.type === "quiz") {
    const quiz = toQuiz(course, item);
    if (!quiz)
      return (
        <p className="rounded-3xl bg-sun-soft p-8 text-center font-semibold text-ink">
          This quiz is coming soon.
        </p>
      );
    return (
      <Suspense fallback={<CanvasSkeleton kind="quiz" />}>
        <div className="-mx-6 [&_h1]:text-2xl">
          <QuizComponent key={quiz.id} quiz={quiz} onComplete={onQuizExit} />
        </div>
      </Suspense>
    );
  }

  return (
    <article className="rounded-3xl border border-border bg-white p-5 shadow-sm sm:p-8">
      <Blocks blocks={item.blocks} answered={answered} onAnswer={onAnswer} />
    </article>
  );
}

function Blocks({
  blocks,
  answered,
  onAnswer,
}: {
  blocks: Block[];
  answered: Set<string>;
  onAnswer: (id: string) => void;
}) {
  return (
    <>
      {blocks.map((b, i) => {
        const el = renderBlock(b, i);
        return b.type === "text" ? (
          el
        ) : (
          <div key={i} className="reveal">
            {el}
          </div>
        );
      })}
    </>
  );

  function renderBlock(b: Block, i: number) {
    switch (b.type) {
      case "text":
        return <LessonContent key={i} content={b.md} reveal />;
      case "callout": {
        const Icon =
          b.tone === "warning"
            ? AlertTriangle
            : b.tone === "note"
              ? Info
              : Lightbulb;
        return (
          <aside
            key={i}
            className={cn(
              "my-5 flex gap-3 rounded-2xl p-4",
              b.tone === "warning"
                ? "bg-orange-50"
                : b.tone === "note"
                  ? "bg-mint-soft"
                  : "bg-sun-soft",
            )}
          >
            <Icon
              className="mt-0.5 h-5 w-5 flex-none text-primary"
              aria-hidden="true"
            />
            <div className="text-ink">
              <LessonContent content={b.md} />
            </div>
          </aside>
        );
      }
      case "check":
        return (
          <KnowledgeCheck
            key={b.question.id}
            question={b.question}
            initiallySolved={answered.has(b.question.id)}
            onCorrect={() => onAnswer(b.question.id)}
          />
        );
      case "sort":
        return (
          <SortCheck
            key={b.question.id}
            question={b.question}
            initiallySolved={answered.has(b.question.id)}
            onCorrect={() => onAnswer(b.question.id)}
          />
        );
      case "accordion":
        return (
          <Accordion
            key={i}
            title={b.title}
            items={b.items as { title: string; md: string }[]}
          />
        );
      case "timeline":
        return (
          <Timeline
            key={i}
            title={b.title}
            steps={b.steps as { title: string; md?: string }[]}
          />
        );
    }
  }
}

/** Quiz from quizzes.ts by id, or built from questions in the JSON. */
export function toQuiz(course: CourseData, item: QuizItem): Quiz | undefined {
  if (item.quizId) return getQuizById(item.quizId);
  if (!item.questions?.length) return undefined;
  // Mastery thresholds are counts of correct answers.
  const n = item.questions.length;
  const excellent = Math.ceil(n * 0.8);
  const good = Math.ceil(n * 0.5);
  return {
    id: `${course.slug}-${item.id}`,
    title: item.title,
    description: `Check what you learned in ${course.meta.title}.`,
    questions: item.questions as Quiz["questions"],
    xpReward: 50,
    masteryScoring: {
      excellent: {
        min: excellent,
        message: "Excellent! You really know this.",
      },
      good: {
        min: good,
        max: excellent - 1,
        message: "Good job. Review a part or two and try again.",
      },
      needsImprovement: {
        max: good - 1,
        message: "Keep going. Revisit the course and try again.",
      },
    },
  };
}
