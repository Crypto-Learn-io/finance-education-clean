import { z } from "zod";

/**
 * THRIVE course JSON schema (version 1).
 *
 * A course is one JSON file in client/content/courses/<slug>.json.
 * Structure: Course > Modules > Lessons > Items.
 * Item types: video, reading, widget, quiz.
 * Reading items are built from blocks: text, check, sort, accordion,
 * timeline, callout. See docs/course-json.md for a full guide.
 */

const id = z
  .string()
  .regex(/^[a-z0-9][a-z0-9-]*$/, "Use lowercase letters, numbers and dashes");

/* ---------- Questions ---------- */

export const McqSchema = z
  .object({
    id,
    prompt: z.string().min(1),
    options: z.array(z.string().min(1)).min(2).max(6),
    /** Index of the correct option, starting at 0 */
    answer: z.number().int().min(0),
    hint: z.string().optional(),
    explanation: z.string().optional(),
  })
  .refine((q) => q.answer < q.options.length, {
    message: "answer must point at one of the options",
    path: ["answer"],
  });

export const SortSchema = z
  .object({
    id,
    prompt: z.string().min(1),
    buckets: z.array(z.string().min(1)).min(2).max(4),
    items: z
      .array(
        z.object({ text: z.string().min(1), bucket: z.number().int().min(0) }),
      )
      .min(2)
      .max(10),
    hint: z.string().optional(),
    explanation: z.string().optional(),
  })
  .refine((q) => q.items.every((i) => i.bucket < q.buckets.length), {
    message: "every item.bucket must point at one of the buckets",
    path: ["items"],
  });

/* ---------- Reading blocks ---------- */

export const BlockSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("text"), md: z.string() }),
  z.object({
    type: z.literal("callout"),
    tone: z.enum(["tip", "note", "warning"]).default("tip"),
    md: z.string(),
  }),
  z.object({ type: z.literal("check"), question: McqSchema }),
  z.object({ type: z.literal("sort"), question: SortSchema }),
  z.object({
    type: z.literal("accordion"),
    title: z.string().optional(),
    items: z.array(z.object({ title: z.string(), md: z.string() })).min(1),
  }),
  z.object({
    type: z.literal("timeline"),
    title: z.string().optional(),
    steps: z
      .array(z.object({ title: z.string(), md: z.string().optional() }))
      .min(2),
  }),
]);

/* ---------- Items ---------- */

const VideoSource = z.union([
  z.object({ youtubeId: z.string().min(5) }),
  z.object({
    src: z.string().min(1),
    poster: z.string().optional(),
    captions: z.string().optional(),
  }),
]);

export const WIDGET_KINDS = [
  "compound-interest",
  "budget-split",
  "inflation",
  "credit-utilization",
  "loan-payment",
  "risk-return",
  "tax-brackets",
] as const;

const itemBase = {
  id,
  title: z.string().min(1),
  /** Optional override; reading time is estimated from word count otherwise */
  minutes: z.number().positive().optional(),
};

export const VideoItemSchema = z.object({
  ...itemBase,
  type: z.literal("video"),
  source: VideoSource,
  checkpoints: z
    .array(z.object({ time: z.number().min(0), question: McqSchema }))
    .default([]),
});

export const ReadingItemSchema = z.object({
  ...itemBase,
  type: z.literal("reading"),
  blocks: z.array(BlockSchema).min(1),
});

export const WidgetItemSchema = z.object({
  ...itemBase,
  type: z.literal("widget"),
  widget: z.object({
    kind: z.enum(WIDGET_KINDS),
    intro: z.string().optional(),
    defaults: z.record(z.number()).optional(),
  }),
  blocks: z.array(BlockSchema).optional(),
});

const QuizQuestionSchema = z.object({
  id,
  question: z.string(),
  options: z.array(z.string()).min(2),
  correctAnswer: z.number().int().min(0),
  difficulty: z.enum(["Easy", "Medium", "Hard"]).default("Medium"),
  explanation: z.string().optional(),
});

export const QuizItemSchema = z
  .object({
    ...itemBase,
    type: z.literal("quiz"),
    /** Use a quiz from client/data/quizzes.ts ... */
    quizId: z.string().optional(),
    /** ... or define questions right here */
    questions: z.array(QuizQuestionSchema).optional(),
  })
  .refine((q) => q.quizId || q.questions?.length, {
    message: "A quiz item needs quizId or questions",
  });

export const ItemSchema = z.union([
  VideoItemSchema,
  ReadingItemSchema,
  WidgetItemSchema,
  QuizItemSchema,
]);

/* ---------- Course ---------- */

export const LessonSchema = z.object({
  id,
  title: z.string(),
  items: z.array(ItemSchema).min(1),
});

export const ModuleSchema = z.object({
  id,
  title: z.string(),
  summary: z.string().optional(),
  discussionPrompt: z.string().optional(),
  lessons: z.array(LessonSchema).min(1),
});

export const ICONS = [
  "PiggyBank",
  "CreditCard",
  "Percent",
  "TrendingDown",
  "TrendingUp",
  "Shield",
  "Calculator",
  "Building",
  "Target",
  "Coins",
  "Wallet",
  "Landmark",
  "GraduationCap",
] as const;

export const CourseMetaSchema = z.object({
  title: z.string().min(1),
  /** Position in the course list (1 = first) */
  order: z.number().int().min(1),
  age: z.string(),
  time: z.string(),
  level: z.enum(["Beginner", "Intermediate"]),
  blurb: z.string(),
  objectives: z.array(z.string()).min(1).max(6),
  outcome: z.string(),
  pillars: z
    .array(z.enum(["T", "H", "R", "I", "V", "E"]))
    .min(1)
    .max(2),
  icon: z.enum(ICONS),
  /** Tailwind classes for the icon tile, e.g. "bg-emerald-100 text-emerald-800" */
  tint: z.string(),
  featured: z.boolean().optional(),
});

export const CourseSchema = z
  .object({
    schemaVersion: z.literal(1),
    slug: id,
    meta: CourseMetaSchema,
    modules: z.array(ModuleSchema).min(1),
  })
  .superRefine((c, ctx) => {
    const seen = new Set<string>();
    c.modules.forEach((m) =>
      m.lessons.forEach((l) =>
        l.items.forEach((it) => {
          if (seen.has(it.id))
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: `Item id "${it.id}" is used twice. Item ids must be unique in a course.`,
            });
          seen.add(it.id);
        }),
      ),
    );
  });

export type Mcq = z.infer<typeof McqSchema>;
export type SortQuestion = z.infer<typeof SortSchema>;
export type Block = z.infer<typeof BlockSchema>;
export type VideoItem = z.infer<typeof VideoItemSchema>;
export type ReadingItem = z.infer<typeof ReadingItemSchema>;
export type WidgetItem = z.infer<typeof WidgetItemSchema>;
export type QuizItem = z.infer<typeof QuizItemSchema>;
export type Item = z.infer<typeof ItemSchema>;
export type Lesson = z.infer<typeof LessonSchema>;
export type Module = z.infer<typeof ModuleSchema>;
export type CourseMeta = z.infer<typeof CourseMetaSchema>;
export type CourseData = z.infer<typeof CourseSchema>;
export type WidgetKind = (typeof WIDGET_KINDS)[number];
