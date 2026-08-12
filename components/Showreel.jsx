"use client";

import { useEffect, useRef } from "react";
import { site } from "@/data/site";

export default function Showreel() {
  const ref = useRef(null);
  const media = useRef(null);
  const vid = useRef(null);

  useEffect(() => {
    const sec = ref.current;
    const v = vid.current;
    if (!sec) return;

    let raf;
    const tick = () => {
      const r = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (r.height + vh)));
      if (media.current) {
        media.current.style.transform = `translateY(${
          (0.5 - p) * 8
        }%) scale(1.08)`;
      }
      if (v) {
        const visible = r.top < vh * 0.9 && r.bottom > vh * 0.1;
        if (visible && v.paused) v.play().catch(() => {});
        else if (!visible && !v.paused) v.pause();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="showreel" ref={ref} aria-label="Showreel">
      <div className="showreel-media" ref={media}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <video
          ref={vid}
          src={site.showreel.video}
          poster={site.showreel.poster}
          muted
          loop
          playsInline
          preload="none"
        />
      </div>
    </section>
  );
}
