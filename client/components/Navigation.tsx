import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, BookOpen, Brain, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/courses", label: "Courses", icon: BookOpen },
  { href: "/quizzes", label: "Quizzes", icon: Brain },
];

export default function Navigation() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [location.pathname]);

  const isActive = (href: string) =>
    href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(href) ||
        (href === "/courses" && location.pathname.startsWith("/lessons"));

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/85 backdrop-blur-md">
      <nav aria-label="Main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="group flex items-center gap-2.5 rounded-lg"
            title="THRIVE: Track, Habits, Responsibility, Invest, Value, Earn"
          >
            <img
              src="/favicon.svg"
              alt=""
              width={36}
              height={36}
              className="w-9 h-9 transition-transform duration-300 group-hover:rotate-[-6deg] motion-reduce:transition-none"
            />
            <span className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-wider text-ink">
                THRIVE
              </span>
              <span className="hidden sm:block text-[11px] font-semibold text-brand-dark mt-0.5">
                Track · Habits · Responsibility · Invest · Value · Earn
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-2">
            {navItems.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  to={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors duration-200",
                    isActive(href)
                      ? "text-primary bg-mint"
                      : "text-ink-muted hover:text-primary hover:bg-mint/70",
                  )}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
            <li className="ml-2">
              <Button asChild size="sm" className="px-5">
                <Link to="/courses">Start free</Link>
              </Button>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-ink hover:bg-mint transition-colors"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          hidden={!open}
          className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  to={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-bold",
                    isActive(href)
                      ? "text-primary bg-mint"
                      : "text-ink hover:bg-mint/70",
                  )}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild className="w-full mt-3">
            <Link to="/courses">Start free</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
