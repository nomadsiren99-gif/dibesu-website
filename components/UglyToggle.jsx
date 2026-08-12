"use client";

import { useEffect, useState } from "react";

const KEY = "ugly";

export default function UglyToggle() {
  const [ugly, setUgly] = useState(false);

  useEffect(() => {
    let saved = false;
    try {
      saved = localStorage.getItem(KEY) === "true";
    } catch (e) {}
    document.documentElement.setAttribute("data-ugly", saved ? "true" : "false");
    setUgly(saved);
  }, []);

  const toggle = () => {
    const next = !ugly;
    document.documentElement.setAttribute("data-ugly", next ? "true" : "false");
    try {
      localStorage.setItem(KEY, next ? "true" : "false");
    } catch (e) {}
    setUgly(next);
  };

  return (
    <button
      className={`ugly-toggle ${ugly ? "on" : ""}`}
      onClick={toggle}
      aria-pressed={ugly}
      title={ugly ? "Turn good design back on" : "Make this site terrible"}
    >
      {ugly ? "Okay, fix it." : "Turn Off Good Design"}
    </button>
  );
}
