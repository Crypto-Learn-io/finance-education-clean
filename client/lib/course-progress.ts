import { useCallback, useEffect, useState } from "react";

/**
 * Per-learner course progress (which items are done), saved in this browser.
 * Storage can be missing or blocked (private mode), so every access is guarded
 * and the app works without it.
 */
const KEY = "thrive_course_progress";
const EVENT = "thrive-progress-change";

type Store = Record<string, string[]>;

function read(): Store {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Store) : {};
  } catch {
    return {};
  }
}

function write(store: Store) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(store));
  } catch {
    /* storage unavailable: progress just won't persist */
  }
  window.dispatchEvent(new Event(EVENT));
}

export function getCompleted(slug: string): string[] {
  return read()[slug] ?? [];
}

export function markComplete(slug: string, itemId: string) {
  const store = read();
  const done = new Set(store[slug] ?? []);
  if (done.has(itemId)) return;
  done.add(itemId);
  store[slug] = [...done];
  write(store);
}

/** React hook: completed item ids for a course, kept in sync across the app. */
export function useCourseProgress(slug: string | undefined) {
  const [done, setDone] = useState<Set<string>>(
    () => new Set(slug ? getCompleted(slug) : []),
  );

  useEffect(() => {
    if (!slug) return;
    const sync = () => setDone(new Set(getCompleted(slug)));
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, [slug]);

  const mark = useCallback(
    (itemId: string) => slug && markComplete(slug, itemId),
    [slug],
  );

  return { done, mark };
}
