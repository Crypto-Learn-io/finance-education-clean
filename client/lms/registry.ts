import { CourseData, CourseSchema, Item, Lesson, Module } from "./schema";

/**
 * Loads every course JSON in client/content/courses and validates it.
 * Adding a course = dropping a new <slug>.json file in that folder.
 */
const files = import.meta.glob<unknown>("../content/courses/*.json", {
  eager: true,
  import: "default",
});

export interface CourseLoadError {
  file: string;
  issues: string[];
}

export const loadErrors: CourseLoadError[] = [];

export const allCourses: CourseData[] = Object.entries(files)
  .map(([file, raw]) => {
    const parsed = CourseSchema.safeParse(raw);
    if (!parsed.success) {
      const issues = parsed.error.issues.map(
        (i) => `${i.path.join(".") || "(root)"}: ${i.message}`,
      );
      loadErrors.push({ file, issues });
      if (import.meta.env.DEV) {
        console.error(`[THRIVE] Skipped invalid course file ${file}`, issues);
      }
      return null;
    }
    return parsed.data;
  })
  .filter((c): c is CourseData => c !== null)
  .sort((a, b) => a.meta.order - b.meta.order);

export const courseBySlug = (slug: string | undefined) =>
  allCourses.find((c) => c.slug === slug);

/* ---------- Flattened view used by the player ---------- */

export interface FlatItem {
  item: Item;
  module: Module;
  moduleIndex: number;
  lesson: Lesson;
  /** Position across the whole course, starting at 0 */
  index: number;
}

export function flattenCourse(course: CourseData): FlatItem[] {
  const out: FlatItem[] = [];
  course.modules.forEach((module, moduleIndex) =>
    module.lessons.forEach((lesson) =>
      lesson.items.forEach((item) =>
        out.push({ item, module, moduleIndex, lesson, index: out.length }),
      ),
    ),
  );
  return out;
}

const WORDS_PER_MINUTE = 150;

/** Estimated minutes for an item, unless the JSON sets `minutes`. */
export function itemMinutes(item: Item): number | undefined {
  if (item.minutes) return item.minutes;
  if (item.type === "reading" || (item.type === "widget" && item.blocks)) {
    const blocks = item.blocks ?? [];
    const words = blocks.reduce((n, b) => {
      if (b.type === "text" || b.type === "callout")
        return n + b.md.split(/\s+/).length;
      if (b.type === "check" || b.type === "sort") return n + 60;
      if (b.type === "accordion")
        return n + b.items.reduce((m, i) => m + i.md.split(/\s+/).length, 0);
      if (b.type === "timeline") return n + b.steps.length * 25;
      return n;
    }, 0);
    return Math.max(2, Math.ceil(words / WORDS_PER_MINUTE));
  }
  if (item.type === "widget") return 5;
  return undefined;
}

export const ITEM_LABEL: Record<Item["type"], string> = {
  video: "Video",
  reading: "Reading",
  widget: "Interactive",
  quiz: "Quiz",
};
