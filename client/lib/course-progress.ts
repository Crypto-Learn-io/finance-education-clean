import { useCallback, useEffect, useState } from "react";

/**
 * Per-learner course progress, saved in this browser.
 * Stores finished item ids, plus answered questions as "q:<question id>".
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

export function markComplete(slug: string, id: string) {
  const store = read();
  const done = new Set(store[slug] ?? []);
  if (done.has(id)) return;
  done.add(id);
  store[slug] = [...done];
  write(store);
}

/** React hook: finished item ids and answered question ids for a course. */
export function useCourseProgress(slug: string | undefined) {
  const [all, setAll] = useState<Set<string>>(
    () => new Set(slug ? getCompleted(slug) : []),
  );

  useEffect(() => {
    if (!slug) return;
    const sync = () => setAll(new Set(getCompleted(slug)));
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, [slug]);

  const done = new Set([...all].filter((id) => !id.startsWith("q:")));
  const answered = new Set(
    [...all].filter((id) => id.startsWith("q:")).map((id) => id.slice(2)),
  );

  const mark = useCallback(
    (itemId: string) => slug && markComplete(slug, itemId),
    [slug],
  );
  const markAnswered = useCallback(
    (questionId: string) => slug && markComplete(slug, `q:${questionId}`),
    [slug],
  );

  return { done, answered, mark, markAnswered };
}
