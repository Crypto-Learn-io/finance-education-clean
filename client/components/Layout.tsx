import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { useReveal } from "@/hooks/use-reveal";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useReveal();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main" className="flex-1">
        {children}
      </main>
      <footer className="border-t border-border bg-mint-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-muted">
          <div className="flex items-center gap-2">
            <img src="/favicon.svg" alt="" width={24} height={24} />
            <span>
              <strong className="text-ink">THRIVE</strong>: Track, Habits,
              Responsibility, Invest, Value, Earn
            </span>
          </div>
          <nav aria-label="Footer" className="flex items-center gap-5">
            <Link to="/courses" className="link-underline font-semibold">
              Courses
            </Link>
            <Link to="/quizzes" className="link-underline font-semibold">
              Quizzes
            </Link>
            <span className="free-pill text-xs">Always free</span>
          </nav>
        </div>
      </footer>
    </div>
  );
}
