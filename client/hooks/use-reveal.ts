import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Adds `.is-visible` to every `.reveal` element when it scrolls into view.
 * CSS in global.css does the actual animation and turns it off for
 * prefers-reduced-motion. Re-scans on every route change.
 */
export function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)"),
    );
    if (els.length === 0) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
}
