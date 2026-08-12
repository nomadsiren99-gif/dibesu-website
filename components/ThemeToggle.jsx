"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(
      document.documentElement.getAttribute("data-theme") === "dark"
    );
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    html.classList.add("theme-anim");
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    setDark(next === "dark");
    window.setTimeout(() => html.classList.remove("theme-anim"), 600);
  };

  return (
    <button
      className={`theme-toggle ${dark ? "on" : ""}`}
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle light / dark"
    >
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <g className="bulb-glass">
          <path d="M12 3a6.1 6.1 0 0 0-3.6 11.1c.8.6 1.3 1.4 1.4 2.3h4.4c.1-.9.6-1.7 1.4-2.3A6.1 6.1 0 0 0 12 3Z" />
          <path d="M9.9 18.4h4.2M10.4 20.8h3.2" />
        </g>
        <g className="bulb-fil">
          <path d="M10.2 7.2l1.8 2 1.8-2" />
          <path d="M12 9.2v2" />
        </g>
        <g className="bulb-rays">
          <path d="M12 .8v1.9M20.5 3.5l-1.4 1.4M23.2 9h-1.9M2.7 9H.8M3.5 3.5L2.1 2.1M5.6 12.6l-1.5.9M18.4 12.6l1.5.9" />
        </g>
      </svg>
    </button>
  );
}
