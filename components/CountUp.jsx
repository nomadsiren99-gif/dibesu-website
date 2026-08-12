"use client";

import { useEffect, useRef, useState } from "react";

function parseValue(value) {
  const m = String(value).match(/^([\d.,]+)(.*)$/);
  if (!m) return { num: 0, suffix: String(value) };
  return {
    num: parseFloat(m[1].replace(/,/g, "")) || 0,
    suffix: m[2],
  };
}

export default function CountUp({ value, duration = 1200 }) {
  const ref = useRef(null);
  const started = useRef(false);
  const [display, setDisplay] = useState("0");
  const { num, suffix } = parseValue(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplay(String(num) + suffix);
          return;
        }

        const t0 = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(eased * num) + suffix);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [num, suffix, duration]);

  return (
    <span ref={ref} className="countup">
      {display}
    </span>
  );
}
