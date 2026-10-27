# THRIVE course card template

Every course card uses the same fields. The data lives in `client/data/courses.ts`
and renders through `client/components/CourseCard.tsx`, so adding a course is one
new object in that file.

| Field        | Rule                                                         |
| ------------ | ------------------------------------------------------------ |
| `title`      | Short. 1 to 4 words.                                         |
| `age`        | Recommended age range, for example `Ages 8–11`.              |
| `time`       | Number of parts or lessons and rough time.                   |
| `blurb`      | 1 or 2 short sentences. Talk to the learner or the parent.   |
| `objectives` | 3 to 5 short phrases. Start with a verb. No full stops.      |
| `outcome`    | One sentence that starts with "By the end, ...".             |
| `pillars`    | One or two THRIVE skills: T, H, R, I, V, E.                  |
| CTA          | Always "Start for free".                                     |

## Example (copy this style)

```ts
{
  slug: "money-basics",
  path: "/lessons/money-basics",
  title: "Money Basics",
  age: "Ages 8–11",
  time: "4 lessons (20–30 min each)",
  level: "Beginner",
  blurb:
    "Simple lessons that teach kids how money works. Hands-on activities help them start saving and making choices.",
  objectives: [
    "Track basic income and spending",
    "Set a simple saving goal",
    "Plan a small budget",
  ],
  outcome: "By the end, kids can plan a small budget and set a saving goal.",
  pillars: ["T", "H"],
  icon: Coins,
  tint: "bg-emerald-100 text-emerald-800",
}
```

## Writing style

- Short sentences, about 8 to 15 words.
- Plain words. Write like a tutor talking to a kid or a parent.
- Contractions are fine: "you'll", "it's".
- No long em dashes. Use a comma or a new sentence.
- Skip filler like "This course will provide you with...". Say "You'll learn to..." or "Kids practice...".
- Be concrete: "Set a saving goal" beats "Develop financial goal-setting competencies".
