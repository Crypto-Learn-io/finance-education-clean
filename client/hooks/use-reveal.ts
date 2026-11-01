import { useEffect } from "react";

/**
 * Adds `.is-visible` to every `.reveal` element when it scrolls into view.
 * CSS in global.css does the animation: fade + rise normally, fade only when
 * the user prefers reduced motion. A MutationObserver picks up elements that
 * mount later (for example after a filter change or a new lesson item).
 */
export function useReveal() {
  useEffect(() => {
    const canObserve = "IntersectionObserver" in window;

    const io = canObserve
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                io?.unobserve(entry.target);
              }
            });
          },
          { rootMargin: "0px 0px -6% 0px", threshold: 0 },
        )
      : null;

    const scan = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((el) => {
          if (!io) el.classList.add("is-visible");
          else io.observe(el);
        });
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io?.disconnect();
    };
  }, []);
}
