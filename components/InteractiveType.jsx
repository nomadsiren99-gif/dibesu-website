"use client";

import { useEffect, useRef } from "react";

export function SplitText({ text }) {
  return (
    <>
      {String(text)
        .split("")
        .map((ch, i) => (
          <span key={i} data-char className="ichar">
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
    </>
  );
}

export default function InteractiveType({
  children,
  as = "span",
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = null;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let px = mx;
    let py = my;
    let tPrev = performance.now();
    let speed = 0;
    const R = 320;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const tick = () => {
      const now = performance.now();
      const dt = Math.max(1, now - tPrev);
      const vel = Math.hypot(mx - px, my - py) / dt;
      speed += (Math.min(vel * 8, 2.4) - speed) * 0.12;
      px = mx;
      py = my;
      tPrev = now;

      // good design only — stand down in ugly mode
      if (document.documentElement.getAttribute("data-ugly") !== "true") {
        root.style.setProperty(
          "--rx",
          `${((mx / window.innerWidth - 0.5) * -14).toFixed(2)}px`
        );
        root.style.setProperty(
          "--ry",
          `${((my / window.innerHeight - 0.5) * -9).toFixed(2)}px`
        );
        root.style.setProperty("--speed", speed.toFixed(3));

        const chars = root.querySelectorAll("[data-char]");
        for (const c of chars) {
          const r = c.getBoundingClientRect();
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;
          const dx = mx - cx;
          const dy = my - cy;
          const dist = Math.hypot(dx, dy);
          const f = Math.max(0, 1 - dist / R);
          if (f > 0) {
            const f2 = f * f;
            c.style.setProperty("--tx", `${(dx * f2 * -0.4).toFixed(1)}px`);
            c.style.setProperty("--ty", `${(dy * f2 * -0.5).toFixed(1)}px`);
            c.style.setProperty("--sx", `${(1 - f2 * 0.25).toFixed(3)}`);
            c.style.setProperty("--sy", `${(1 + f2 * 0.3).toFixed(3)}`);
            c.style.setProperty("--sk", `${(dx * f2 * -0.006).toFixed(4)}deg`);
          } else {
            c.style.removeProperty("--tx");
            c.style.removeProperty("--ty");
            c.style.removeProperty("--sx");
            c.style.removeProperty("--sy");
            c.style.removeProperty("--sk");
          }
        }
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const Tag = as;
  return (
    <Tag ref={ref} className={`interactive-type ${className}`}>
      {children}
    </Tag>
  );
}
