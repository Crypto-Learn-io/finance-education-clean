export interface XPLevel {
  level: number;
  title: string;
  minXP: number;
  maxXP: number;
  description: string;
  badge: string;
}

export interface UserProgress {
  totalXP: number;
  currentLevel: number;
  completedQuizzes: string[];
  badges: string[];
}

export const XP_LEVELS: XPLevel[] = [
  {
    level: 1,
    title: "Finance Novice",
    minXP: 0,
    maxXP: 199,
    description: "Just starting your financial journey",
    badge: "🌱",
  },
  {
    level: 2,
    title: "Budget Builder",
    minXP: 200,
    maxXP: 449,
    description: "Learning to manage money basics",
    badge: "💰",
  },
  {
    level: 3,
    title: "Credit Climber",
    minXP: 450,
    maxXP: 749,
    description: "Understanding credit and debt management",
    badge: "📈",
  },
  {
    level: 4,
    title: "Investment Explorer",
    minXP: 750,
    maxXP: 1099,
    description: "Discovering the world of investing",
    badge: "🎯",
  },
  {
    level: 5,
    title: "Risk Manager",
    minXP: 1100,
    maxXP: 1499,
    description: "Balancing risk and return like a pro",
    badge: "⚖️",
  },
  {
    level: 6,
    title: "Tax Strategist",
    minXP: 1500,
    maxXP: 1999,
    description: "Optimizing your tax situation",
    badge: "🧮",
  },
  {
    level: 7,
    title: "Retirement Planner",
    minXP: 2000,
    maxXP: 2599,
    description: "Building wealth for the future",
    badge: "🏆",
  },
  {
    level: 8,
    title: "Finance Expert",
    minXP: 2600,
    maxXP: 3299,
    description: "Mastering advanced financial concepts",
    badge: "🎓",
  },
  {
    level: 9,
    title: "Wealth Builder",
    minXP: 3300,
    maxXP: 4099,
    description: "Creating substantial financial wealth",
    badge: "💎",
  },
  {
    level: 10,
    title: "Financial Guru",
    minXP: 4100,
    maxXP: Infinity,
    description: "Peak financial literacy mastery",
    badge: "👑",
  },
];

export function getCurrentLevel(totalXP: number): XPLevel {
  return (
    XP_LEVELS.find(
      (level) => totalXP >= level.minXP && totalXP <= level.maxXP,
    ) || XP_LEVELS[0]
  );
}

export function getNextLevel(currentLevel: number): XPLevel | null {
  return XP_LEVELS.find((level) => level.level === currentLevel + 1) || null;
}

export function getXPProgress(totalXP: number): {
  currentLevel: XPLevel;
  nextLevel: XPLevel | null;
  progressToNext: number;
  xpNeededForNext: number;
} {
  const currentLevel = getCurrentLevel(totalXP);
  const nextLevel = getNextLevel(currentLevel.level);

  if (!nextLevel) {
    return {
      currentLevel,
      nextLevel: null,
      progressToNext: 100,
      xpNeededForNext: 0,
    };
  }

  const xpInCurrentLevel = totalXP - currentLevel.minXP;
  const xpRangeForLevel = nextLevel.minXP - currentLevel.minXP;
  const progressToNext = Math.round((xpInCurrentLevel / xpRangeForLevel) * 100);
  const xpNeededForNext = nextLevel.minXP - totalXP;

  return {
    currentLevel,
    nextLevel,
    progressToNext,
    xpNeededForNext,
  };
}

// Local storage helpers for user progress
export function saveUserProgress(progress: UserProgress): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("fintechlearn_progress", JSON.stringify(progress));
  }
}

export function loadUserProgress(): UserProgress {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("fintechlearn_progress");
    if (stored) {
      return JSON.parse(stored);
    }
  }

  return {
    totalXP: 0,
    currentLevel: 1,
    completedQuizzes: [],
    badges: [],
  };
}

export function addXP(
  currentProgress: UserProgress,
  xpToAdd: number,
): UserProgress {
  const newTotalXP = currentProgress.totalXP + xpToAdd;
  const newLevel = getCurrentLevel(newTotalXP);

  const updatedProgress: UserProgress = {
    ...currentProgress,
    totalXP: newTotalXP,
    currentLevel: newLevel.level,
  };

  // Check if user leveled up and add badge
  if (newLevel.level > currentProgress.currentLevel) {
    updatedProgress.badges = [...currentProgress.badges, newLevel.badge];
  }

  saveUserProgress(updatedProgress);
  return updatedProgress;
}

export function markQuizCompleted(
  currentProgress: UserProgress,
  quizId: string,
  xpEarned: number,
): UserProgress {
  // Don't award XP again if quiz was already completed
  if (currentProgress.completedQuizzes.includes(quizId)) {
    return currentProgress;
  }

  const updatedProgress = addXP(currentProgress, xpEarned);
  updatedProgress.completedQuizzes = [
    ...currentProgress.completedQuizzes,
    quizId,
  ];

  saveUserProgress(updatedProgress);
  return updatedProgress;
}
