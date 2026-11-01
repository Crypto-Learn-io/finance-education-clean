import { describe, expect, it } from "vitest";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { CourseSchema } from "./schema";
import { getQuizById } from "@/data/quizzes";

const dir = join(__dirname, "../content/courses");
const files = readdirSync(dir).filter((f) => f.endsWith(".json"));

describe("course JSON files", () => {
  it("has at least one course", () => {
    expect(files.length).toBeGreaterThan(0);
  });

  for (const file of files) {
    describe(file, () => {
      const raw = JSON.parse(readFileSync(join(dir, file), "utf8"));
      const parsed = CourseSchema.safeParse(raw);

      it("matches the course schema", () => {
        const issues = parsed.success
          ? []
          : parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`);
        expect(issues).toEqual([]);
      });

      it("slug matches the file name", () => {
        expect(raw.slug).toBe(file.replace(/\.json$/, ""));
      });

      it("points every quizId at a real quiz", () => {
        if (!parsed.success) return;
        for (const m of parsed.data.modules)
          for (const l of m.lessons)
            for (const it of l.items)
              if (it.type === "quiz" && it.quizId)
                expect(getQuizById(it.quizId), it.quizId).toBeDefined();
      });

      it("gives every module at least two interactive features", () => {
        if (!parsed.success) return;
        for (const m of parsed.data.modules) {
          const kinds = new Set<string>();
          for (const l of m.lessons)
            for (const it of l.items) {
              if (it.type === "widget") kinds.add("playground");
              const blocks =
                it.type === "reading" || it.type === "widget"
                  ? (it.blocks ?? [])
                  : [];
              for (const b of blocks) {
                if (b.type === "check" || b.type === "sort")
                  kinds.add("knowledge-check");
                if (b.type === "accordion" || b.type === "timeline")
                  kinds.add("accordion-timeline");
              }
            }
          expect(
            [...kinds].length,
            `${m.id}: ${[...kinds]}`,
          ).toBeGreaterThanOrEqual(2);
        }
      });
    });
  }
});
