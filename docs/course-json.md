# Adding a course with JSON

Every THRIVE course is one JSON file in `client/content/courses/`.
Drop in a new `<slug>.json` and it appears on the Courses page, the homepage
and in the course player. No code changes needed.

Run `npm test` after editing. It checks every course file against the schema
(`client/lms/schema.ts`), confirms quiz ids exist, and checks that each module
has at least two interactive features.

## Structure

```
Course
└── modules[]        "Module 1: The basics"
    └── lessons[]    "Watch", "Learn the key ideas"
        └── items[]  video | reading | widget | quiz
```

Item `id`s must be unique within a course. They become the URL:
`/lessons/<slug>/<item id>`.

## Minimal example

```json
{
  "schemaVersion": 1,
  "slug": "money-basics",
  "meta": {
    "title": "Money Basics",
    "order": 10,
    "age": "Ages 8–11",
    "time": "3 modules, about 20 min",
    "level": "Beginner",
    "blurb": "Learn how money works. Simple lessons help you save and spend wisely.",
    "objectives": [
      "Track money in and out",
      "Set a saving goal",
      "Plan a small budget"
    ],
    "outcome": "By the end, you can plan a small budget and set a saving goal.",
    "pillars": ["T", "H"],
    "icon": "Coins",
    "tint": "bg-emerald-100 text-emerald-800",
    "featured": false
  },
  "modules": [
    {
      "id": "m1",
      "title": "The basics",
      "summary": "Watch, then learn the key ideas.",
      "discussionPrompt": "What's one thing you'd like to save for?",
      "lessons": [
        {
          "id": "watch",
          "title": "Watch",
          "items": [
            {
              "id": "video",
              "type": "video",
              "title": "What is money?",
              "source": { "youtubeId": "VIDEO_ID" }
            }
          ]
        },
        {
          "id": "learn",
          "title": "Learn",
          "items": [
            {
              "id": "part-1",
              "type": "reading",
              "title": "Money in, money out",
              "blocks": [
                {
                  "type": "text",
                  "md": "**Income** is money in.\n\n• Allowance\n• Gifts"
                },
                {
                  "type": "callout",
                  "tone": "tip",
                  "md": "**Try this:** Track every dollar for a week."
                },
                {
                  "type": "check",
                  "question": {
                    "id": "mb-c1",
                    "prompt": "Which one is income?",
                    "options": ["A birthday gift of $20", "Buying a snack"],
                    "answer": 0,
                    "hint": "Income is money coming in.",
                    "explanation": "Gifts are money coming in."
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

## Item types

| Type      | Key fields                                                            | Notes                                                                                                                                                             |
| --------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `video`   | `source`                                                              | `{ "youtubeId": "..." }`, shown with YouTube's own player.                                                                                                        |
| `reading` | `blocks[]`                                                            | See blocks below. Reading time is estimated automatically.                                                                                                        |
| `widget`  | `widget.kind`, `widget.intro`, `widget.defaults`, optional `blocks[]` | Slider playground with Graph and Table tabs.                                                                                                                      |
| `quiz`    | `quizId` or `questions[]`                                             | `quizId` reuses a quiz from `client/data/quizzes.ts`. Or write questions inline: `{ "id", "question", "options", "correctAnswer", "difficulty", "explanation" }`. |

## Reading blocks

| Block       | Fields                                                                                 | What learners see                                                                                                          |
| ----------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `text`      | `md`                                                                                   | Paragraphs. A line that is only `**Bold**` becomes a mini heading. Lines starting `•` become bullets, `1.` numbered steps. |
| `callout`   | `tone` (`tip`, `note`, `warning`), `md`                                                | Coloured box. Use `note` for "Parent tip".                                                                                 |
| `check`     | `question` (`id`, `prompt`, `options`, `answer`, `hint`, `explanation`)                | Multiple choice. Right: confetti + explanation. Wrong: shake + highlighted hint. Earns points once.                        |
| `sort`      | `question` (`id`, `prompt`, `buckets`, `items[{text, bucket}]`, `hint`, `explanation`) | Drag-and-drop sorting (tap-to-place on phones).                                                                            |
| `accordion` | `title`, `items[{title, md}]`                                                          | Expandable cards.                                                                                                          |
| `timeline`  | `title`, `steps[{title, md?}]`                                                         | Revealed one step at a time.                                                                                               |

`answer` and `bucket` are zero-based: the first option is `0`.

## Widget kinds

| `kind`               | Sliders (`defaults` keys)               |
| -------------------- | --------------------------------------- |
| `compound-interest`  | `principal`, `monthly`, `rate`, `years` |
| `budget-split`       | `income`                                |
| `inflation`          | `amount`, `rate`, `years`               |
| `credit-utilization` | `limit`, `balance`                      |
| `loan-payment`       | `amount`, `rate`, `years`               |
| `risk-return`        | `stocks`                                |
| `tax-brackets`       | `income`                                |

New kinds go in `client/lms/widgets.ts` (controls + a `compute` function) and
the `WIDGET_KINDS` list in `client/lms/schema.ts`.

## Meta fields

- `order`: position in the course list (1 = first)
- `pillars`: one or two of `T`, `H`, `R`, `I`, `V`, `E`
- `icon`: one of `PiggyBank`, `CreditCard`, `Percent`, `TrendingDown`, `TrendingUp`, `Shield`, `Calculator`, `Building`, `Target`, `Coins`, `Wallet`, `Landmark`, `GraduationCap`
- `tint`: Tailwind classes for the icon tile, for example `bg-emerald-100 text-emerald-800`

## Writing style

Short sentences, plain words, talk to the learner. No em dashes. Avoid numbers
that change every year (tax limits, ages set by law); point to the official
source instead, for example IRS.gov. See `docs/course-template.md` for the
card copy rules.

## Discussion

The Discussion tab saves posts on the learner's device until a shared backend
exists. To make it shared, implement the `DiscussionStore` interface in
`client/lms/stores.ts` (for example against an `/api/discussion` route) and pass
it to `StudyPanel`.
