import { useCallback, useEffect, useState } from "react";

/**
 * Small browser-storage helpers for notes and discussion.
 * Every access is guarded: storage may be blocked (private mode) and the
 * player must keep working without it.
 */

function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

/* ---------- Notes ---------- */

export interface Note {
  text: string;
  updatedAt: number;
}

const notesKey = (slug: string) => `thrive_notes_${slug}`;

/** Notes for a whole course, keyed by item id. */
export function useCourseNotes(slug: string) {
  const [notes, setNotes] = useState<Record<string, Note>>(() =>
    readJSON(notesKey(slug), {}),
  );
  const [saved, setSaved] = useState<"idle" | "saving" | "saved" | "error">(
    "idle",
  );

  useEffect(() => {
    setNotes(readJSON(notesKey(slug), {}));
  }, [slug]);

  const setNote = useCallback((itemId: string, text: string) => {
    setSaved("saving");
    setNotes((prev) => {
      const next = { ...prev };
      if (text.trim()) next[itemId] = { text, updatedAt: Date.now() };
      else delete next[itemId];
      return next;
    });
  }, []);

  // Debounced save
  useEffect(() => {
    if (saved !== "saving") return;
    const t = window.setTimeout(() => {
      setSaved(writeJSON(notesKey(slug), notes) ? "saved" : "error");
    }, 500);
    return () => window.clearTimeout(t);
  }, [notes, saved, slug]);

  return { notes, setNote, saved };
}

/* ---------- Discussion ---------- */

export interface Post {
  id: string;
  author: string;
  text: string;
  createdAt: number;
}

/**
 * Discussion storage adapter. The default keeps posts in this browser only.
 * To make discussion shared, implement this interface against a backend
 * (for example an /api/discussion route) and pass it to <StudyPanel>.
 */
export interface DiscussionStore {
  shared: boolean;
  list(threadId: string): Promise<Post[]>;
  post(threadId: string, text: string, author: string): Promise<Post>;
}

export const localDiscussionStore: DiscussionStore = {
  shared: false,
  async list(threadId) {
    return readJSON<Post[]>(`thrive_discussion_${threadId}`, []);
  },
  async post(threadId, text, author) {
    const key = `thrive_discussion_${threadId}`;
    const posts = readJSON<Post[]>(key, []);
    const post: Post = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      author,
      text,
      createdAt: Date.now(),
    };
    writeJSON(key, [...posts, post]);
    return post;
  },
};
