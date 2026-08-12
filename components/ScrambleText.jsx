"use client";

import { useRef } from "react";

const CHARS = "!<>-_\\/[]{}=+*^?#";

export default function ScrambleText({ text, className = "" }) {
  const ref = useRef(null);

  const play = () => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = text;
      return;
    }
    const original = text;
    let frame = 0;
    const total = 22;
    let raf;

    const tick = () => {
      const progress = frame / total;
      const reveal = Math.floor(progress * original.length);
      let out = "";
      for (let i = 0; i < original.length; i++) {
        if (i < reveal) out += original[i];
        else if (Math.random() < progress) out += original[i];
        else out += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      el.textContent = out;
      frame++;
      if (frame < total) raf = requestAnimationFrame(tick);
      else el.textContent = original;
    };

    cancelAnimationFrame(el._scramble);
    el._scramble = raf = requestAnimationFrame(tick);
  };

  const stop = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(el._scramble);
    el.textContent = text;
  };

  return (
    <span
      ref={ref}
      className={`scramble ${className}`}
      onMouseEnter={play}
      onMouseLeave={stop}
    >
      {text}
    </span>
  );
}
