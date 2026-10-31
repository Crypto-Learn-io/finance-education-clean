import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface ShortcutHandlers {
  next: () => void;
  prev: () => void;
  complete: () => void;
  outline: () => void;
  panel: (n: 1 | 2 | 3) => void;
  close: () => void;
  help: () => void;
}

export const SHORTCUTS: { keys: string[]; label: string }[] = [
  { keys: ["N"], label: "Next item" },
  { keys: ["P"], label: "Previous item" },
  { keys: ["C"], label: "Complete and continue" },
  { keys: ["O"], label: "Show or hide the outline" },
  { keys: ["1"], label: "Notes" },
  { keys: ["2"], label: "Ask AI" },
  { keys: ["3"], label: "Discussion" },
  { keys: ["Esc"], label: "Close the study panel" },
  { keys: ["?"], label: "Show these shortcuts" },
];

/** Global player shortcuts. Ignored while typing or inside the video player. */
export function useShortcuts(h: ShortcutHandlers, enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    const on = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement | null;
      if (
        t?.closest(
          "input, textarea, select, [contenteditable=true], [role=dialog], [data-video-player]",
        )
      )
        return;
      const k = e.key;
      const map: Record<string, () => void> = {
        n: h.next,
        p: h.prev,
        c: h.complete,
        o: h.outline,
        "1": () => h.panel(1),
        "2": () => h.panel(2),
        "3": () => h.panel(3),
        Escape: h.close,
        "?": h.help,
      };
      const fn = map[k.length === 1 ? k.toLowerCase() : k];
      if (fn) {
        e.preventDefault();
        fn();
      }
    };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, [h, enabled]);
}

export function ShortcutsDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-black text-ink">
            Keyboard shortcuts
          </DialogTitle>
          <DialogDescription>
            Move through a course without the mouse.
          </DialogDescription>
        </DialogHeader>
        <dl className="mt-2 divide-y divide-border">
          {SHORTCUTS.map((s) => (
            <div
              key={s.label}
              className="flex items-center justify-between py-2"
            >
              <dt className="text-sm text-ink">{s.label}</dt>
              <dd className="flex gap-1">
                {s.keys.map((k) => (
                  <kbd
                    key={k}
                    className="min-w-[2rem] rounded-lg border-2 border-border border-b-4 bg-white px-2 py-0.5 text-center text-sm font-black text-ink"
                  >
                    {k}
                  </kbd>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </DialogContent>
    </Dialog>
  );
}
