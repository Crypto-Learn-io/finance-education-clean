import { CSSProperties, useId, useMemo, useState } from "react";
import { BarChart3, Info, RotateCcw, Table2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { WidgetKind } from "../schema";
import { Chart, formatValue, money, Unit, WIDGETS } from "../widgets";

interface Props {
  kind: WidgetKind;
  intro?: string;
  defaults?: Record<string, number>;
  onInteract?: () => void;
}

/** Split-pane concept playground: sliders left, live graph or table right. */
export default function Playground({
  kind,
  intro,
  defaults,
  onInteract,
}: Props) {
  const def = WIDGETS[kind];
  const initial = useMemo(
    () =>
      Object.fromEntries(
        def.controls.map((c) => [
          c.key,
          defaults?.[c.key] ??
            Math.round((c.min + c.max) / 2 / c.step) * c.step,
        ]),
      ),
    [def, defaults],
  );
  const [values, setValues] = useState<Record<string, number>>(initial);
  const result = useMemo(() => def.compute(values), [def, values]);
  const uid = useId();

  return (
    <section
      aria-label="Interactive playground"
      className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm"
    >
      {intro && (
        <p className="border-b border-border bg-mint-soft px-5 py-4 text-[15px] text-ink">
          {intro}
        </p>
      )}
      <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* Controls */}
        <div className="space-y-5 border-b border-border p-5 md:border-b-0 md:border-r">
          {def.controls.map((c) => {
            const v = values[c.key];
            const fill = ((v - c.min) / (c.max - c.min)) * 100;
            return (
              <div key={c.key}>
                <div className="flex items-baseline justify-between gap-2">
                  <label
                    htmlFor={`${uid}-${c.key}`}
                    className="text-sm font-bold text-ink"
                  >
                    {c.label}
                  </label>
                  <output
                    htmlFor={`${uid}-${c.key}`}
                    className="rounded-full bg-mint px-2.5 py-0.5 text-sm font-black tabular-nums text-primary"
                  >
                    {formatValue(v, c.unit)}
                  </output>
                </div>
                <input
                  id={`${uid}-${c.key}`}
                  type="range"
                  className="range mt-2"
                  min={c.min}
                  max={c.max}
                  step={c.step}
                  value={v}
                  style={{ "--fill": `${fill}%` } as CSSProperties}
                  aria-valuetext={formatValue(v, c.unit)}
                  onChange={(e) => {
                    setValues((s) => ({
                      ...s,
                      [c.key]: Number(e.target.value),
                    }));
                    onInteract?.();
                  }}
                />
                <div className="mt-1 flex justify-between text-xs text-ink-muted">
                  <span>{formatValue(c.min, c.unit)}</span>
                  <span>{formatValue(c.max, c.unit)}</span>
                </div>
              </div>
            );
          })}

          <dl className="grid gap-2" aria-live="polite">
            {result.summary.map((s) => (
              <div
                key={s.label}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-2xl px-3 py-2",
                  s.tone === "good"
                    ? "bg-mint"
                    : s.tone === "warn"
                      ? "bg-sun-soft"
                      : s.tone === "bad"
                        ? "bg-orange-50"
                        : "bg-mint-soft",
                )}
              >
                <dt className="text-sm text-ink-muted">{s.label}</dt>
                <dd className="text-right text-base font-black tabular-nums text-ink">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>

          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setValues(initial)}
          >
            <RotateCcw aria-hidden="true" />
            Reset
          </Button>
        </div>

        {/* Output */}
        <Tabs defaultValue="graph" className="flex min-w-0 flex-col p-5">
          <TabsList className="self-start rounded-full bg-mint p-1">
            <TabsTrigger
              value="graph"
              className="rounded-full px-4 font-bold data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <BarChart3 className="mr-1.5 h-4 w-4" aria-hidden="true" />
              Graph
            </TabsTrigger>
            <TabsTrigger
              value="table"
              className="rounded-full px-4 font-bold data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Table2 className="mr-1.5 h-4 w-4" aria-hidden="true" />
              Table
            </TabsTrigger>
          </TabsList>
          <TabsContent value="graph" className="mt-4">
            <figure>
              <ChartView chart={result.chart} label={result.chartLabel} />
            </figure>
          </TabsContent>
          <TabsContent value="table" className="mt-4">
            <div className="max-h-80 overflow-auto rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-mint text-left text-ink">
                  <tr>
                    {result.table.columns.map((c) => (
                      <th
                        key={c}
                        scope="col"
                        className="px-3 py-2 font-extrabold"
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {result.table.rows.map((r, i) => (
                    <tr key={i} className="border-t border-border">
                      {r.map((cell, j) => (
                        <td
                          key={j}
                          className="px-3 py-2 tabular-nums text-ink-muted"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          {result.note && (
            <p className="mt-4 flex items-start gap-2 text-sm text-ink-muted">
              <Info className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" />
              {result.note}
            </p>
          )}
        </Tabs>
      </div>
    </section>
  );
}

/* ---------- Charts ---------- */

/** True for dark fills, so labels on them use white text. */
const isDark = (hex: string) => {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  return 0.299 * r + 0.587 * g + 0.114 * b < 150;
};

const short = (n: number, unit: Unit) => {
  if (unit === "percent") return `${Math.round(n)}%`;
  const a = Math.abs(n);
  if (a >= 1e6) return `$${(n / 1e6).toFixed(1)}M`;
  if (a >= 1e3) return `$${(n / 1e3).toFixed(a >= 1e4 ? 0 : 1)}k`;
  return `$${Math.round(n)}`;
};

function ChartView({ chart, label }: { chart: Chart; label: string }) {
  if (chart.type === "lines") return <LineChart chart={chart} label={label} />;
  if (chart.type === "bars") return <BarsChart chart={chart} label={label} />;
  if (chart.type === "gauge") return <Gauge chart={chart} label={label} />;
  return <Ranges chart={chart} label={label} />;
}

function LineChart({
  chart,
  label,
}: {
  chart: Extract<Chart, { type: "lines" }>;
  label: string;
}) {
  const W = 440;
  const H = 280;
  const P = { l: 54, r: 14, t: 12, b: 30 };
  const n = chart.xLabels.length;
  const max = Math.max(1, ...chart.series.flatMap((s) => s.values)) * 1.08;
  const x = (i: number) =>
    P.l + (n === 1 ? 0 : (i / (n - 1)) * (W - P.l - P.r));
  const y = (v: number) => P.t + (1 - v / max) * (H - P.t - P.b);
  const [hover, setHover] = useState<number | null>(null);

  const ticks = [0, 0.25, 0.5, 0.75, 1].map((f) => f * max);
  const path = (vals: number[]) =>
    vals
      .map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`)
      .join(" ");
  const area = (vals: number[]) =>
    `${path(vals)} L${x(n - 1).toFixed(1)},${y(0)} L${x(0).toFixed(1)},${y(0)} Z`;

  return (
    <>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={label}
        className="h-auto w-full touch-none select-none"
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          const px = ((e.clientX - r.left) / r.width) * W;
          const i = Math.round(((px - P.l) / (W - P.l - P.r)) * (n - 1));
          setHover(Math.max(0, Math.min(n - 1, i)));
        }}
        onPointerLeave={() => setHover(null)}
      >
        {ticks.map((t) => (
          <g key={t}>
            <line x1={P.l} x2={W - P.r} y1={y(t)} y2={y(t)} stroke="#E3EFE8" />
            <text
              x={P.l - 8}
              y={y(t) + 4}
              textAnchor="end"
              fontSize="13"
              fill="#3D5A47"
            >
              {short(t, chart.format)}
            </text>
          </g>
        ))}
        {[0, Math.floor((n - 1) / 2), n - 1].map((i) => (
          <text
            key={i}
            x={x(i)}
            y={H - 8}
            textAnchor={i === 0 ? "start" : i === n - 1 ? "end" : "middle"}
            fontSize="13"
            fill="#3D5A47"
          >
            {chart.xLabels[i]}
          </text>
        ))}
        {chart.series.map((s) =>
          s.area ? (
            <path
              key={`${s.name}-a`}
              className="chart-line"
              d={area(s.values)}
              style={{ d: `path("${area(s.values)}")` } as CSSProperties}
              fill={s.color}
              opacity={0.12}
            />
          ) : null,
        )}
        {chart.series.map((s) => (
          <path
            key={s.name}
            className="chart-line"
            d={path(s.values)}
            style={{ d: `path("${path(s.values)}")` } as CSSProperties}
            fill="none"
            stroke={s.color}
            strokeWidth={3}
            strokeDasharray={s.dashed ? "6 6" : undefined}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
        {hover !== null && (
          <g>
            <line
              x1={x(hover)}
              x2={x(hover)}
              y1={P.t}
              y2={H - P.b}
              stroke="#0B2A1A"
              strokeOpacity={0.25}
            />
            {chart.series.map((s) => (
              <circle
                key={s.name}
                cx={x(hover)}
                cy={y(s.values[hover])}
                r={5}
                fill="#fff"
                stroke={s.color}
                strokeWidth={3}
              />
            ))}
          </g>
        )}
      </svg>
      <figcaption className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        {chart.series.map((s) => (
          <span
            key={s.name}
            className="flex items-center gap-1.5 text-ink-muted"
          >
            <span
              aria-hidden="true"
              className="h-1 w-5 rounded-full"
              style={{ background: s.color }}
            />
            {s.name}
            {hover !== null && (
              <strong className="tabular-nums text-ink">
                :{" "}
                {chart.format === "money"
                  ? money(s.values[hover])
                  : short(s.values[hover], chart.format)}
              </strong>
            )}
          </span>
        ))}
        {hover !== null && (
          <span className="text-ink-muted">({chart.xLabels[hover]})</span>
        )}
      </figcaption>
    </>
  );
}

function BarsChart({
  chart,
  label,
}: {
  chart: Extract<Chart, { type: "bars" }>;
  label: string;
}) {
  const max = Math.max(
    1,
    ...chart.rows.map((r) => r.segments.reduce((n, s) => n + s.value, 0)),
  );
  const legend = new Map<string, string>();
  chart.rows.forEach((r) =>
    r.segments.forEach((s) => legend.set(s.name, s.color)),
  );
  return (
    <div role="img" aria-label={label}>
      <div className="space-y-5">
        {chart.rows.map((r) => {
          const total = r.segments.reduce((n, s) => n + s.value, 0);
          return (
            <div key={r.label}>
              <div className="mb-1.5 flex justify-between text-sm font-bold text-ink">
                <span>{r.label}</span>
                <span className="tabular-nums">{money(total)}</span>
              </div>
              <div className="flex h-12 overflow-hidden rounded-xl bg-mint-soft">
                {r.segments.map((s) => (
                  <div
                    key={s.name}
                    className={cn(
                      "bar-fill flex items-center justify-center overflow-hidden text-xs font-black",
                      isDark(s.color) ? "text-white" : "text-ink",
                    )}
                    style={{
                      width: `${(s.value / max) * 100}%`,
                      background: s.color,
                    }}
                    title={`${s.name}: ${money(s.value)}`}
                  >
                    {s.value / max > 0.12 && (
                      <span className="truncate px-1 tabular-nums">
                        {short(s.value, chart.format)}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-muted">
        {[...legend].map(([name, color]) => (
          <span key={name} className="flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="h-3 w-3 rounded"
              style={{ background: color }}
            />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

function Gauge({
  chart,
  label,
}: {
  chart: Extract<Chart, { type: "gauge" }>;
  label: string;
}) {
  const cx = 150;
  const cy = 150;
  const R = 120;
  const pt = (f: number, r = R) => {
    const a = Math.PI * (1 - f);
    return [cx + r * Math.cos(a), cy - r * Math.sin(a)];
  };
  const arc = (f0: number, f1: number) => {
    const [x0, y0] = pt(f0);
    const [x1, y1] = pt(f1);
    return `M${x0},${y0} A${R},${R} 0 0 1 ${x1},${y1}`;
  };
  const v = Math.min(1, Math.max(0, chart.value));
  let prev = 0;
  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox="0 0 300 175"
        role="img"
        aria-label={label}
        className="w-full max-w-sm"
      >
        {chart.zones.map((z) => {
          const d = arc(prev, z.to);
          prev = z.to;
          return (
            <path
              key={z.label}
              d={d}
              stroke={z.color}
              strokeWidth={26}
              fill="none"
            />
          );
        })}
        <g
          style={{
            transform: `rotate(${v * 180}deg)`,
            transformOrigin: `${cx}px ${cy}px`,
            transition: "transform 500ms var(--ease-spring)",
          }}
        >
          <line
            x1={cx}
            y1={cy}
            x2={cx - R + 18}
            y2={cy}
            stroke="#0B2A1A"
            strokeWidth={5}
            strokeLinecap="round"
          />
        </g>
        <circle cx={cx} cy={cy} r={10} fill="#0B2A1A" />
        <text
          x={cx}
          y={cy - 40}
          textAnchor="middle"
          fontSize="34"
          fontWeight="900"
          fill="#0B2A1A"
        >
          {Math.round(chart.value * 100)}%
        </text>
      </svg>
      <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-ink-muted">
        {chart.zones.map((z, i) => (
          <span key={z.label} className="flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="h-3 w-3 rounded"
              style={{ background: z.color }}
            />
            {z.label} ({i === 0 ? 0 : Math.round(chart.zones[i - 1].to * 100)}–
            {Math.round(z.to * 100)}%)
          </span>
        ))}
      </div>
    </div>
  );
}

function Ranges({
  chart,
  label,
}: {
  chart: Extract<Chart, { type: "ranges" }>;
  label: string;
}) {
  const lo = Math.min(...chart.rows.map((r) => r.low), 0);
  const hi = Math.max(...chart.rows.map((r) => r.high));
  const pos = (v: number) => ((v - lo) / (hi - lo)) * 100;
  return (
    <div role="img" aria-label={label}>
      <div className="relative space-y-2.5">
        <div
          aria-hidden="true"
          className="absolute bottom-0 top-0 w-px bg-ink/30"
          style={{ left: `calc(7rem + (100% - 7rem) * ${pos(0) / 100})` }}
        />
        {chart.rows.map((r) => (
          <div key={r.label} className="flex items-center gap-3">
            <span
              className={cn(
                "w-[6.5rem] flex-none text-right text-sm",
                r.highlight ? "font-black text-ink" : "text-ink-muted",
              )}
            >
              {r.label}
            </span>
            <div className="relative h-7 flex-1 rounded-full bg-mint-soft">
              <div
                className={cn(
                  "bar-fill absolute top-1 bottom-1 rounded-full",
                  r.highlight ? "bg-primary" : "bg-primary/30",
                )}
                style={{
                  left: `${pos(r.low)}%`,
                  width: `${pos(r.high) - pos(r.low)}%`,
                }}
              />
              <div
                className="bar-fill absolute top-0 h-7 w-1.5 -translate-x-1/2 rounded-full bg-sun"
                style={{ left: `${pos(r.mid)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="relative mt-2 ml-[7rem] h-4 text-xs text-ink-muted">
        <span className="absolute left-0">{Math.round(lo)}%</span>
        <span
          className="absolute -translate-x-1/2"
          style={{ left: `${pos(0)}%` }}
        >
          0%
        </span>
        <span className="absolute right-0">+{Math.round(hi)}%</span>
      </div>
      <p className="mt-3 text-sm text-ink-muted">
        Each bar shows the usual range of one-year returns (about 19 years in
        20). The yellow mark is the average year.
      </p>
    </div>
  );
}
