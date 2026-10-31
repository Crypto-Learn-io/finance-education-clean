import { useEffect, useState } from "react";
import {
  addXP,
  getXPProgress,
  loadUserProgress,
  UserProgress,
} from "@/data/xpSystem";

/**
 * Points and streaks for the course player, built on the existing XP levels
 * (client/data/xpSystem.ts). Every award has a unique key, so repeating an
 * action never pays twice. Everything is per browser.
 */

export const POINTS = {
  check: 10, // inline knowledge check or sort, first time correct
  checkpoint: 10, // video checkpoint question
  item: 5, // finishing any item
  course: 50, // finishing a whole course
} as const;

const KEY = "thrive_rewards";
export const XP_EVENT = "thrive-xp";

interface RewardState {
  awarded: string[];
  streak: { count: number; last: string | null; best: number };
}

export interface XpEventDetail {
  amount: number;
  reason: string;
  total: number;
  levelUp: boolean;
  levelTitle: string;
  badge: string;
}

function read(): RewardState {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* ignore */
  }
  return { awarded: [], streak: { count: 0, last: null, best: 0 } };
}

function write(s: RewardState) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* ignore */
  }
}

const today = () => new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD, local time
const daysBetween = (a: string, b: string) =>
  Math.round((Date.parse(b) - Date.parse(a)) / 86_400_000);

/** Count a learning day. Consecutive days grow the streak. */
function touchStreak(s: RewardState) {
  const t = today();
  const last = s.streak.last;
  if (last === t) return;
  const gap = last ? daysBetween(last, t) : null;
  s.streak.count = gap === 1 ? s.streak.count + 1 : 1;
  s.streak.best = Math.max(s.streak.best, s.streak.count);
  s.streak.last = t;
}

/** Award points once per unique key. Returns true if points were given. */
export function award(key: string, amount: number, reason: string): boolean {
  const s = read();
  touchStreak(s);
  if (s.awarded.includes(key)) {
    write(s);
    return false;
  }
  s.awarded.push(key);
  write(s);

  const before: UserProgress = loadUserProgress();
  let after: UserProgress;
  try {
    after = addXP(before, amount);
  } catch {
    return false;
  }
  const info = getXPProgress(after.totalXP);
  const detail: XpEventDetail = {
    amount,
    reason,
    total: after.totalXP,
    levelUp: after.currentLevel > before.currentLevel,
    levelTitle: info.currentLevel.title,
    badge: info.currentLevel.badge,
  };
  window.dispatchEvent(new CustomEvent(XP_EVENT, { detail }));
  return true;
}

export function hasAward(key: string) {
  return read().awarded.includes(key);
}

/** Live XP, level and streak for headers and the home page. */
export function useLearnerStats() {
  const get = () => {
    const p = loadUserProgress();
    const s = read();
    const t = today();
    // A streak is "alive" if the learner studied today or yesterday.
    const alive = s.streak.last !== null && daysBetween(s.streak.last, t) <= 1;
    return {
      xp: p.totalXP,
      level: getXPProgress(p.totalXP),
      streak: alive ? s.streak.count : 0,
      studiedToday: s.streak.last === t,
      best: s.streak.best,
    };
  };
  const [stats, setStats] = useState(get);
  useEffect(() => {
    const sync = () => setStats(get());
    window.addEventListener(XP_EVENT, sync);
    window.addEventListener("storage", sync);
    window.addEventListener("thrive-progress-change", sync);
    return () => {
      window.removeEventListener(XP_EVENT, sync);
      window.removeEventListener("storage", sync);
      window.removeEventListener("thrive-progress-change", sync);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return stats;
}
