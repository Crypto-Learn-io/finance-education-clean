import type { LucideIcon } from "lucide-react";
import { allCourses } from "@/lms/registry";
import {
  PiggyBank,
  CreditCard,
  Percent,
  Building,
  TrendingUp,
  Shield,
  TrendingDown,
  Calculator,
  Target,
  Wallet,
  Landmark,
  GraduationCap,
  BookOpen,
  ListChecks,
  Repeat,
  Handshake,
  Sprout,
  Tag,
  Coins,
} from "lucide-react";

/**
 * THRIVE pillars. Every course is tagged with one or two.
 */
export type PillarKey = "T" | "H" | "R" | "I" | "V" | "E";

export interface Pillar {
  key: PillarKey;
  word: string;
  line: string;
  icon: LucideIcon;
}

export const pillars: Pillar[] = [
  {
    key: "T",
    word: "Track",
    line: "Know where your money goes.",
    icon: ListChecks,
  },
  {
    key: "H",
    word: "Habits",
    line: "Small steps, done often, add up.",
    icon: Repeat,
  },
  {
    key: "R",
    word: "Responsibility",
    line: "Borrow smart and keep your word.",
    icon: Handshake,
  },
  {
    key: "I",
    word: "Invest",
    line: "Help your money grow over time.",
    icon: Sprout,
  },
  { key: "V", word: "Value", line: "Know what things really cost.", icon: Tag },
  {
    key: "E",
    word: "Earn",
    line: "Turn effort and skills into income.",
    icon: Coins,
  },
];

export const pillarWord = (key: PillarKey) =>
  pillars.find((p) => p.key === key)?.word ?? key;

/**
 * Course card template. Copy rules:
 *  - title: short, 1 to 4 words
 *  - age: recommended age range
 *  - time: number of parts and rough reading time
 *  - blurb: 1 or 2 short sentences, plain words, talk to the learner
 *  - objectives: 3 to 5 short phrases, start with a verb, no full stops
 *  - outcome: one sentence starting "By the end, you can..."
 * Avoid em dashes and filler like "This course will provide you with".
 * See docs/course-template.md for a filled-in example.
 */
export interface Course {
  slug: string;
  path: string;
  title: string;
  age: string;
  time: string;
  level: "Beginner" | "Intermediate";
  blurb: string;
  objectives: string[];
  outcome: string;
  pillars: PillarKey[];
  icon: LucideIcon;
  /** Tailwind classes for the icon tile */
  tint: string;
  featured?: boolean;
}

// Course cards are built from the course JSON files (client/content/courses).
// To add a course, add a JSON file there; see docs/course-json.md.
const ICON_MAP: Record<string, LucideIcon> = {
  PiggyBank,
  CreditCard,
  Percent,
  TrendingDown,
  TrendingUp,
  Shield,
  Calculator,
  Building,
  Target,
  Coins,
  Wallet,
  Landmark,
  GraduationCap,
};

export const courses: Course[] = allCourses.map((c) => ({
  slug: c.slug,
  path: `/lessons/${c.slug}`,
  title: c.meta.title,
  age: c.meta.age,
  time: c.meta.time,
  level: c.meta.level,
  blurb: c.meta.blurb,
  objectives: c.meta.objectives,
  outcome: c.meta.outcome,
  pillars: c.meta.pillars,
  icon: ICON_MAP[c.meta.icon] ?? BookOpen,
  tint: c.meta.tint,
  featured: c.meta.featured,
}));

export const courseByPath = (path: string) =>
  courses.find((c) => c.path === path);

/** Suggested order for brand new learners. */
export const learningPath = [
  "budgeting-and-saving",
  "understanding-credit",
  "interest-rates",
  "investment-basics",
];
