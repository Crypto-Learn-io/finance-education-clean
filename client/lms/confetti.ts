/**
 * Tiny dependency-free confetti burst on a temporary full-screen canvas.
 * Skipped entirely when the user prefers reduced motion.
 */
const COLORS = [
  "#0F9D58",
  "#0A7A4A",
  "#FFC857",
  "#FFB84D",
  "#7DD3A8",
  "#ffffff",
];

export function confettiBurst(origin?: { x: number; y: number }) {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");
  canvas.dataset.confetti = "true";
  Object.assign(canvas.style, {
    position: "fixed",
    inset: "0",
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    zIndex: "100",
  });
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    canvas.remove();
    return;
  }
  ctx.scale(dpr, dpr);

  const ox = origin?.x ?? window.innerWidth / 2;
  const oy = origin?.y ?? window.innerHeight / 3;
  const pieces = Array.from({ length: 90 }, () => {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 0.9;
    const speed = 6 + Math.random() * 7;
    return {
      x: ox,
      y: oy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: 5 + Math.random() * 6,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: Math.random() > 0.5 ? "rect" : "circle",
    };
  });

  const start = performance.now();
  const DURATION = 1600;

  const frame = (now: number) => {
    const t = now - start;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    const fade = Math.max(0, 1 - t / DURATION);
    for (const p of pieces) {
      p.vy += 0.28; // gravity
      p.vx *= 0.985; // drag
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      ctx.save();
      ctx.globalAlpha = fade;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      if (p.shape === "rect")
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
    if (t < DURATION) requestAnimationFrame(frame);
    else canvas.remove();
  };
  requestAnimationFrame(frame);
}

/** Center of an element, for aiming the burst. */
export function centerOf(el: Element | null) {
  if (!el) return undefined;
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}
