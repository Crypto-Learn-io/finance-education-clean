import type { WidgetKind } from "./schema";

/**
 * Playground definitions. Each widget kind declares its slider controls and a
 * pure compute() that returns a summary, a chart model and a table. The
 * Playground component renders any of them, so adding a new kind means adding
 * one entry here and its name to WIDGET_KINDS in schema.ts.
 */

export type Unit = "money" | "percent" | "years";

export interface Control {
  key: string;
  label: string;
  min: number;
  max: number;
  step: number;
  unit: Unit;
}

export interface Series {
  name: string;
  color: string;
  values: number[];
  area?: boolean;
  dashed?: boolean;
}

export type Chart =
  | { type: "lines"; xLabels: string[]; series: Series[]; format: Unit }
  | {
      type: "bars";
      rows: {
        label: string;
        segments: { name: string; value: number; color: string }[];
      }[];
      format: Unit;
    }
  | {
      type: "gauge";
      value: number;
      zones: { to: number; label: string; color: string }[];
    }
  | {
      type: "ranges";
      rows: {
        label: string;
        low: number;
        mid: number;
        high: number;
        highlight?: boolean;
      }[];
    };

export interface WidgetResult {
  summary: { label: string; value: string; tone?: "good" | "warn" | "bad" }[];
  chart: Chart;
  chartLabel: string;
  table: { columns: string[]; rows: string[][] };
  note?: string;
}

export interface WidgetDef {
  controls: Control[];
  compute: (v: Record<string, number>) => WidgetResult;
}

/* ---------- Formatting ---------- */

const usd0 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
const usd2 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const money = (n: number) => (Math.abs(n) < 100 ? usd2 : usd0).format(n);
export const pct = (n: number, digits = 1) => `${n.toFixed(digits)}%`;

export function formatValue(n: number, unit: Unit) {
  if (unit === "money") return money(n);
  if (unit === "percent") return pct(n, n % 1 === 0 ? 0 : 1);
  return `${n} ${n === 1 ? "year" : "years"}`;
}

/** Year labels, thinned to keep tables short. */
function yearSteps(years: number) {
  const step = years <= 10 ? 1 : years <= 20 ? 2 : 5;
  const out: number[] = [];
  for (let y = 0; y <= years; y += step) out.push(y);
  if (out[out.length - 1] !== years) out.push(years);
  return out;
}

const C = {
  green: "#0A7A4A",
  light: "#7DD3A8",
  sun: "#E8A92E",
  sunLight: "#FFC857",
  ink: "#3D5A47",
  red: "#C2410C",
};

/* ---------- Widgets ---------- */

export const WIDGETS: Record<WidgetKind, WidgetDef> = {
  "compound-interest": {
    controls: [
      {
        key: "principal",
        label: "Starting amount",
        min: 0,
        max: 20000,
        step: 100,
        unit: "money",
      },
      {
        key: "monthly",
        label: "Added each month",
        min: 0,
        max: 1000,
        step: 5,
        unit: "money",
      },
      {
        key: "rate",
        label: "Yearly growth rate",
        min: 0,
        max: 12,
        step: 0.5,
        unit: "percent",
      },
      { key: "years", label: "Years", min: 1, max: 50, step: 1, unit: "years" },
    ],
    compute: ({ principal, monthly, rate, years }) => {
      const r = rate / 100 / 12;
      const balances: number[] = [principal];
      const contributed: number[] = [principal];
      let b = principal;
      for (let y = 1; y <= years; y++) {
        for (let m = 0; m < 12; m++) b = b * (1 + r) + monthly;
        balances.push(b);
        contributed.push(principal + monthly * 12 * y);
      }
      const final = balances[years];
      const put = contributed[years];
      const steps = yearSteps(years);
      return {
        summary: [
          { label: `After ${years} years`, value: money(final), tone: "good" },
          { label: "You put in", value: money(put) },
          { label: "Growth earned", value: money(final - put), tone: "good" },
        ],
        chart: {
          type: "lines",
          format: "money",
          xLabels: balances.map((_, y) => `Year ${y}`),
          series: [
            {
              name: "Total balance",
              color: C.green,
              values: balances,
              area: true,
            },
            {
              name: "What you put in",
              color: C.sun,
              values: contributed,
              dashed: true,
            },
          ],
        },
        chartLabel: `Line chart. Balance grows from ${money(principal)} to ${money(final)} over ${years} years. You put in ${money(put)}.`,
        table: {
          columns: ["Year", "You put in", "Balance", "Growth"],
          rows: steps.map((y) => [
            String(y),
            money(contributed[y]),
            money(balances[y]),
            money(balances[y] - contributed[y]),
          ]),
        },
        note: "Growth is compounded monthly. Real investments go up and down; this rate is an example, not a promise.",
      };
    },
  },

  "budget-split": {
    controls: [
      {
        key: "income",
        label: "Monthly take-home pay",
        min: 200,
        max: 10000,
        step: 50,
        unit: "money",
      },
    ],
    compute: ({ income }) => {
      const needs = income * 0.5;
      const wants = income * 0.3;
      const save = income * 0.2;
      return {
        summary: [
          { label: "Needs (50%)", value: money(needs) },
          { label: "Wants (30%)", value: money(wants) },
          { label: "Savings (20%)", value: money(save), tone: "good" },
        ],
        chart: {
          type: "bars",
          format: "money",
          rows: [
            {
              label: "Each month",
              segments: [
                { name: "Needs", value: needs, color: C.green },
                { name: "Wants", value: wants, color: C.sunLight },
                { name: "Savings", value: save, color: C.light },
              ],
            },
          ],
        },
        chartLabel: `Bar split: needs ${money(needs)}, wants ${money(wants)}, savings ${money(save)} each month.`,
        table: {
          columns: ["Bucket", "Share", "Per month", "Per year"],
          rows: [
            [
              "Needs: rent, food, transport",
              "50%",
              money(needs),
              money(needs * 12),
            ],
            ["Wants: fun and extras", "30%", money(wants), money(wants * 12)],
            [
              "Savings and extra debt payments",
              "20%",
              money(save),
              money(save * 12),
            ],
          ],
        },
        note: `Saving ${money(save)} a month adds up to ${money(save * 12)} in a year, before any interest.`,
      };
    },
  },

  inflation: {
    controls: [
      {
        key: "amount",
        label: "Amount of money",
        min: 10,
        max: 10000,
        step: 10,
        unit: "money",
      },
      {
        key: "rate",
        label: "Inflation per year",
        min: 0,
        max: 10,
        step: 0.5,
        unit: "percent",
      },
      {
        key: "years",
        label: "Years from now",
        min: 1,
        max: 40,
        step: 1,
        unit: "years",
      },
    ],
    compute: ({ amount, rate, years }) => {
      const f = 1 + rate / 100;
      const buys: number[] = [];
      const cost: number[] = [];
      for (let y = 0; y <= years; y++) {
        buys.push(amount / f ** y);
        cost.push(amount * f ** y);
      }
      const lost = 100 * (1 - buys[years] / amount);
      return {
        summary: [
          {
            label: `${money(amount)} will buy what this buys today`,
            value: money(buys[years]),
            tone: "warn",
          },
          { label: "Buying power lost", value: pct(lost), tone: "bad" },
          {
            label: `Price of today's ${money(amount)} basket`,
            value: money(cost[years]),
          },
        ],
        chart: {
          type: "lines",
          format: "money",
          xLabels: buys.map((_, y) => `Year ${y}`),
          series: [
            {
              name: "What your money buys (today's dollars)",
              color: C.green,
              values: buys,
              area: true,
            },
            {
              name: "What the same basket costs",
              color: C.red,
              values: cost,
              dashed: true,
            },
          ],
        },
        chartLabel: `Line chart. Over ${years} years at ${pct(rate)} inflation, ${money(amount)} buys only ${money(buys[years])} worth of today's goods.`,
        table: {
          columns: ["Year", "Buys what this buys today", "Basket costs"],
          rows: yearSteps(years).map((y) => [
            String(y),
            money(buys[y]),
            money(cost[y]),
          ]),
        },
        note: "This assumes the same inflation rate every year. Real inflation changes from year to year.",
      };
    },
  },

  "credit-utilization": {
    controls: [
      {
        key: "limit",
        label: "Credit limit",
        min: 200,
        max: 20000,
        step: 100,
        unit: "money",
      },
      {
        key: "balance",
        label: "Current balance",
        min: 0,
        max: 20000,
        step: 50,
        unit: "money",
      },
    ],
    compute: ({ limit, balance }) => {
      const b = Math.min(balance, limit);
      const u = limit > 0 ? (b / limit) * 100 : 0;
      const target = limit * 0.3;
      const payDown = Math.max(0, b - target);
      const tone =
        u <= 10 ? "good" : u <= 30 ? "good" : u <= 50 ? "warn" : "bad";
      const word =
        u <= 10
          ? "Excellent"
          : u <= 30
            ? "Good"
            : u <= 50
              ? "Getting high"
              : "High";
      return {
        summary: [
          { label: "Utilization", value: pct(u, 0), tone },
          { label: "How it looks to lenders", value: word, tone },
          {
            label: "Pay down to get under 30%",
            value: payDown > 0 ? money(payDown) : "You're there",
            tone: payDown > 0 ? "warn" : "good",
          },
        ],
        chart: {
          type: "gauge",
          value: u / 100,
          zones: [
            { to: 0.1, label: "Excellent", color: C.green },
            { to: 0.3, label: "Good", color: C.light },
            { to: 0.5, label: "Getting high", color: C.sunLight },
            { to: 1, label: "High", color: C.red },
          ],
        },
        chartLabel: `Gauge showing ${pct(u, 0)} utilization, rated ${word}.`,
        table: {
          columns: ["Balance", "Utilization", "Rating"],
          rows: [0.05, 0.1, 0.3, 0.5, 0.75, 1].map((s) => [
            money(limit * s),
            pct(s * 100, 0),
            s <= 0.1
              ? "Excellent"
              : s <= 0.3
                ? "Good"
                : s <= 0.5
                  ? "Getting high"
                  : "High",
          ]),
        },
        note:
          balance > limit
            ? "Your balance can't go over the limit here, so it's capped at the limit."
            : "Ratings are general guidance. Many experts suggest staying under 30%, and lower is better.",
      };
    },
  },

  "loan-payment": {
    controls: [
      {
        key: "amount",
        label: "Loan amount",
        min: 1000,
        max: 500000,
        step: 1000,
        unit: "money",
      },
      {
        key: "rate",
        label: "Interest rate (APR)",
        min: 0,
        max: 25,
        step: 0.25,
        unit: "percent",
      },
      {
        key: "years",
        label: "Loan length",
        min: 1,
        max: 30,
        step: 1,
        unit: "years",
      },
    ],
    compute: ({ amount, rate, years }) => {
      const i = rate / 100 / 12;
      const n = years * 12;
      const pay = i === 0 ? amount / n : (amount * i) / (1 - (1 + i) ** -n);
      const total = pay * n;
      const interest = total - amount;
      const bal: number[] = [amount];
      const yearInterest: number[] = [0];
      let b = amount;
      for (let y = 1; y <= years; y++) {
        let yi = 0;
        for (let m = 0; m < 12; m++) {
          const int = b * i;
          yi += int;
          b = Math.max(0, b + int - pay);
        }
        bal.push(b);
        yearInterest.push(yi);
      }
      return {
        summary: [
          { label: "Monthly payment", value: money(pay) },
          {
            label: "Total interest",
            value: money(interest),
            tone: interest > amount * 0.5 ? "bad" : "warn",
          },
          { label: "Total you pay back", value: money(total) },
        ],
        chart: {
          type: "bars",
          format: "money",
          rows: [
            {
              label: "Total cost",
              segments: [
                { name: "Amount borrowed", value: amount, color: C.green },
                { name: "Interest", value: interest, color: C.red },
              ],
            },
          ],
        },
        chartLabel: `Bar: you borrow ${money(amount)} and pay ${money(interest)} in interest, ${money(total)} in total.`,
        table: {
          columns: ["Year", "Interest that year", "Still owed"],
          rows: yearSteps(years)
            .filter((y) => y > 0)
            .map((y) => [String(y), money(yearInterest[y]), money(bal[y])]),
        },
        note: "Assumes a fixed rate and equal monthly payments. Fees, taxes and insurance aren't included.",
      };
    },
  },

  "risk-return": {
    controls: [
      {
        key: "stocks",
        label: "Share in stocks (rest in bonds)",
        min: 0,
        max: 100,
        step: 10,
        unit: "percent",
      },
    ],
    compute: ({ stocks }) => {
      // Illustrative long-run assumptions, not a forecast.
      const S = { mean: 7, sd: 15 };
      const B = { mean: 3, sd: 5 };
      const rho = 0.2;
      const stats = (pctStocks: number) => {
        const w = pctStocks / 100;
        const mean = w * S.mean + (1 - w) * B.mean;
        const sd = Math.sqrt(
          (w * S.sd) ** 2 +
            ((1 - w) * B.sd) ** 2 +
            2 * w * (1 - w) * rho * S.sd * B.sd,
        );
        return { mean, sd };
      };
      const cur = stats(stocks);
      const mixes = [0, 20, 40, 60, 80, 100];
      if (!mixes.includes(stocks)) mixes.push(stocks);
      mixes.sort((a, b) => a - b);
      return {
        summary: [
          { label: "Average year (example)", value: pct(cur.mean) },
          {
            label: "Typical range, about 2 years in 3",
            value: `${pct(cur.mean - cur.sd, 0)} to ${pct(cur.mean + cur.sd, 0)}`,
          },
          {
            label: "A rough bad year",
            value: pct(cur.mean - 2 * cur.sd, 0),
            tone: cur.mean - 2 * cur.sd < -15 ? "bad" : "warn",
          },
        ],
        chart: {
          type: "ranges",
          rows: mixes.map((m) => {
            const s = stats(m);
            return {
              label: `${m}% stocks`,
              low: s.mean - 2 * s.sd,
              mid: s.mean,
              high: s.mean + 2 * s.sd,
              highlight: m === stocks,
            };
          }),
        },
        chartLabel: `Range chart. With ${stocks}% stocks, an average year is about ${pct(cur.mean)}, and most years fall between ${pct(cur.mean - 2 * cur.sd, 0)} and ${pct(cur.mean + 2 * cur.sd, 0)}.`,
        table: {
          columns: ["Mix", "Average year", "Typical range", "Bad year"],
          rows: mixes.map((m) => {
            const s = stats(m);
            return [
              `${m}% stocks`,
              pct(s.mean),
              `${pct(s.mean - s.sd, 0)} to ${pct(s.mean + s.sd, 0)}`,
              pct(s.mean - 2 * s.sd, 0),
            ];
          }),
        },
        note: "Example assumptions for learning: stocks average 7% a year with big swings, bonds average 3% with small swings. Real returns differ and can be worse.",
      };
    },
  },

  "tax-brackets": {
    controls: [
      {
        key: "income",
        label: "Yearly taxable income",
        min: 0,
        max: 200000,
        step: 1000,
        unit: "money",
      },
    ],
    compute: ({ income }) => {
      // Example brackets for learning only. Real brackets change every year.
      const brackets = [
        { upTo: 10000, rate: 10, color: C.light },
        { upTo: 40000, rate: 15, color: C.green },
        { upTo: 90000, rate: 25, color: C.sunLight },
        { upTo: Infinity, rate: 35, color: C.red },
      ];
      let prev = 0;
      let tax = 0;
      let marginal = 10;
      const slices = brackets.map((b) => {
        const amt = Math.max(0, Math.min(income, b.upTo) - prev);
        const t = (amt * b.rate) / 100;
        if (amt > 0) marginal = b.rate;
        const row = {
          from: prev,
          upTo: b.upTo,
          rate: b.rate,
          amt,
          t,
          color: b.color,
        };
        prev = b.upTo;
        tax += t;
        return row;
      });
      const eff = income > 0 ? (tax / income) * 100 : 0;
      return {
        summary: [
          { label: "Total tax", value: money(tax) },
          {
            label: "Effective rate (tax ÷ income)",
            value: pct(eff),
            tone: "good",
          },
          { label: "Top (marginal) rate", value: `${marginal}%`, tone: "warn" },
        ],
        chart: {
          type: "bars",
          format: "money",
          rows: [
            {
              label: "Income by bracket",
              segments: slices
                .filter((s) => s.amt > 0)
                .map((s) => ({
                  name: `${s.rate}% slice`,
                  value: s.amt,
                  color: s.color,
                })),
            },
            {
              label: "Tax from each slice",
              segments: slices
                .filter((s) => s.t > 0)
                .map((s) => ({
                  name: `${s.rate}% of slice`,
                  value: s.t,
                  color: s.color,
                })),
            },
          ],
        },
        chartLabel: `Bars: ${money(income)} income split into tax slices. Total tax ${money(tax)}, effective rate ${pct(eff)}.`,
        table: {
          columns: ["Slice", "Rate", "Income in slice", "Tax"],
          rows: slices.map((s) => [
            s.upTo === Infinity
              ? `Over ${money(s.from)}`
              : `${money(s.from)} to ${money(s.upTo)}`,
            `${s.rate}%`,
            money(s.amt),
            money(s.t),
          ]),
        },
        note: "These are example brackets for learning, not current tax law. Real brackets and amounts change every year.",
      };
    },
  },
};
