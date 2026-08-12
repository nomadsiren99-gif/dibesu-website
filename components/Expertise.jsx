"use client";

import { site } from "@/data/site";

export default function Expertise() {
  const items = [...site.marquee, ...site.marquee];
  return (
    <section className="marquee" aria-label="What I do">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
