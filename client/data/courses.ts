import type { LucideIcon } from "lucide-react";
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

// Reading times are estimated from each lesson's word count (about 150 words
// a minute) and rounded to 5 minutes. Each lesson also has a short video.
export const courses: Course[] = [
  {
    slug: "budgeting-and-saving",
    path: "/lessons/budgeting-and-saving",
    title: "Budgeting & Saving",
    age: "Ages 10–14",
    time: "8 short parts, about 10 min",
    level: "Beginner",
    blurb:
      "Learn where your money goes and how to keep some. Simple steps help you build a saving habit.",
    objectives: [
      "Make a simple budget",
      "Use the 50/30/20 rule",
      "Start an emergency fund",
      "Set a saving goal and stick to it",
    ],
    outcome: "By the end, you can plan a monthly budget and set a saving goal.",
    pillars: ["T", "H"],
    icon: PiggyBank,
    tint: "bg-emerald-100 text-emerald-800",
    featured: true,
  },
  {
    slug: "understanding-credit",
    path: "/lessons/understanding-credit",
    title: "Understanding Credit",
    age: "Ages 14–18",
    time: "7 short parts, about 15 min",
    level: "Beginner",
    blurb:
      "Credit is trust you build over time. Learn how scores work and how to protect yours.",
    objectives: [
      "Read a credit score",
      "Know what raises or lowers it",
      "Use a card without falling into debt",
      "Pay down debt step by step",
    ],
    outcome: "By the end, you can explain how to build good credit from zero.",
    pillars: ["R"],
    icon: CreditCard,
    tint: "bg-violet-100 text-violet-800",
    featured: true,
  },
  {
    slug: "interest-rates",
    path: "/lessons/interest-rates",
    title: "Interest Rates",
    age: "Ages 12–16",
    time: "6 short parts, about 15 min",
    level: "Beginner",
    blurb:
      "Interest can work for you or against you. See how small rates grow big over time.",
    objectives: [
      "Tell simple and compound interest apart",
      "Compare APR and APY",
      "See why starting early pays off",
    ],
    outcome: "By the end, you can compare two rates and pick the better deal.",
    pillars: ["V", "I"],
    icon: Percent,
    tint: "bg-amber-100 text-amber-800",
  },
  {
    slug: "understanding-inflation",
    path: "/lessons/understanding-inflation",
    title: "Understanding Inflation",
    age: "Ages 11–15",
    time: "4 short parts, about 20 min",
    level: "Beginner",
    blurb:
      "Why does a snack cost more than it used to? That's inflation. Learn what causes it and how to keep up.",
    objectives: [
      "Explain inflation in plain words",
      "See how prices change over time",
      "Protect savings from rising prices",
    ],
    outcome:
      "By the end, you can explain why saving alone isn't always enough.",
    pillars: ["V"],
    icon: TrendingDown,
    tint: "bg-orange-100 text-orange-800",
  },
  {
    slug: "investment-basics",
    path: "/lessons/investment-basics",
    title: "Investment Basics",
    age: "Ages 13–18",
    time: "5 short parts, about 15 min",
    level: "Intermediate",
    blurb:
      "Investing helps money grow while you sleep. Learn the basics without the jargon.",
    objectives: [
      "Know stocks, bonds, and funds",
      "Understand ETFs and index funds",
      "Spread risk across investments",
      "Invest a little, often",
    ],
    outcome:
      "By the end, you can explain how a simple starter portfolio works.",
    pillars: ["I"],
    icon: TrendingUp,
    tint: "bg-green-100 text-green-800",
    featured: true,
  },
  {
    slug: "risk-vs-return",
    path: "/lessons/risk-vs-return",
    title: "Risk vs Return",
    age: "Ages 14–18",
    time: "5 short parts, about 20 min",
    level: "Intermediate",
    blurb:
      "Bigger rewards come with bigger risks. Find a balance that feels right for you.",
    objectives: [
      "Name the main types of risk",
      "Find your own comfort with risk",
      "Use diversification to stay steady",
    ],
    outcome: "By the end, you can match an investment to your goals.",
    pillars: ["I"],
    icon: Shield,
    tint: "bg-rose-100 text-rose-800",
  },
  {
    slug: "tax-fundamentals",
    path: "/lessons/tax-fundamentals",
    title: "Tax Basics",
    age: "Ages 15+",
    time: "4 short parts, about 15 min",
    level: "Intermediate",
    blurb:
      "When you earn money, some goes to taxes. Learn where it goes and how to keep more, legally.",
    objectives: [
      "See how tax brackets work",
      "Know deductions from credits",
      "Use tax-friendly savings accounts",
      "Plan ahead, not just in April",
    ],
    outcome: "By the end, you can explain how taxes affect what you earn.",
    pillars: ["E", "R"],
    icon: Calculator,
    tint: "bg-teal-100 text-teal-800",
  },
  {
    slug: "loans-and-mortgages",
    path: "/lessons/loans-and-mortgages",
    title: "Loans & Mortgages",
    age: "Ages 16+, great with a parent",
    time: "6 short parts, about 15 min",
    level: "Intermediate",
    blurb:
      "Big buys often need a loan. Learn how loans work before you sign anything.",
    objectives: [
      "Know the main types of loans",
      "Understand down payments and PMI",
      "Compare loan offers side by side",
      "Ask the right questions",
    ],
    outcome: "By the end, you can read a loan offer and spot the true cost.",
    pillars: ["R"],
    icon: Building,
    tint: "bg-indigo-100 text-indigo-800",
  },
  {
    slug: "retirement-planning",
    path: "/lessons/retirement-planning",
    title: "Retirement Planning",
    age: "Ages 16+ and parents",
    time: "5 short parts, about 30 min",
    level: "Intermediate",
    blurb:
      "Retirement feels far away. That's exactly why starting early helps so much.",
    objectives: [
      "See how time grows savings",
      "Know 401(k) and IRA basics",
      "Choose between Roth and traditional",
      "Set a simple savings target",
    ],
    outcome: "By the end, you can start a retirement plan with confidence.",
    pillars: ["I", "H"],
    icon: Target,
    tint: "bg-pink-100 text-pink-800",
    featured: true,
  },
];

export const courseByPath = (path: string) =>
  courses.find((c) => c.path === path);

/** Suggested order for brand new learners. */
export const learningPath = [
  "budgeting-and-saving",
  "understanding-credit",
  "interest-rates",
  "investment-basics",
];
