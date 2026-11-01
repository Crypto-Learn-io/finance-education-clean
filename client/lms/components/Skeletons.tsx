import { cn } from "@/lib/utils";

const Bar = ({ className }: { className?: string }) => (
  <div className={cn("skeleton", className)} />
);

/** Placeholder for the main canvas while a heavy component loads. */
export function CanvasSkeleton({
  kind = "reading",
}: {
  kind?: "video" | "reading" | "widget" | "quiz";
}) {
  return (
    <div role="status" aria-label="Loading content" className="space-y-4">
      {kind === "video" && <Bar className="aspect-video w-full rounded-2xl" />}
      {kind === "widget" && (
        <div className="grid gap-4 rounded-3xl border border-border p-5 md:grid-cols-[5fr_7fr]">
          <div className="space-y-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-2">
                <Bar className="h-4 w-1/2" />
                <Bar className="h-2 w-full rounded-full" />
              </div>
            ))}
            <Bar className="h-20 w-full" />
          </div>
          <Bar className="h-64 w-full" />
        </div>
      )}
      {kind === "quiz" && (
        <div className="space-y-3 rounded-3xl border border-border p-6">
          <Bar className="h-6 w-2/3" />
          {[0, 1, 2, 3].map((i) => (
            <Bar key={i} className="h-12 w-full rounded-2xl" />
          ))}
        </div>
      )}
      {kind === "reading" && (
        <div className="space-y-3 rounded-3xl border border-border p-6">
          {[100, 96, 88, 92, 70].map((w, i) => (
            <Bar key={i} className="h-4" />
          ))}
          <Bar className="mt-4 h-24 w-full rounded-2xl" />
        </div>
      )}
      <span className="sr-only">Loading…</span>
    </div>
  );
}

/** Whole-player placeholder, shown while the player code loads. */
export function PlayerSkeleton() {
  return (
    <div
      role="status"
      aria-label="Loading course"
      className="min-h-screen bg-white"
    >
      <div className="flex h-14 items-center gap-3 border-b border-border px-4">
        <Bar className="h-9 w-9 rounded-xl" />
        <Bar className="h-5 w-40" />
        <div className="flex-1" />
        <Bar className="hidden h-9 w-28 rounded-full md:block" />
      </div>
      <div className="flex">
        <div className="hidden w-[300px] space-y-3 border-r border-border p-4 md:block">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-2">
              <Bar className="h-12 w-full rounded-2xl" />
              <Bar className="ml-6 h-8 w-4/5" />
              <Bar className="ml-6 h-8 w-3/4" />
            </div>
          ))}
        </div>
        <div className="mx-auto w-full max-w-3xl space-y-4 p-6">
          <Bar className="h-4 w-1/3" />
          <Bar className="h-10 w-3/4" />
          <CanvasSkeleton kind="video" />
        </div>
      </div>
      <span className="sr-only">Loading course…</span>
    </div>
  );
}
