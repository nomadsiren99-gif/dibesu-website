"use client";

import Link from "next/link";
import { asset } from "@/lib/path";

const SPANS = [
  "b-l", //  7 cols x 2 rows
  "b-r", //  5 cols x 1 row
  "b-s", //  5 cols x 1 row
  "b-f", // 12 cols x 1 row
  "b-s", //  5 cols x 1 row
  "b-l", //  7 cols x 2 rows
  "b-s", //  5 cols x 1 row
  "b-s", //  5 cols x 1 row
];

const reduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function BentoGrid({ projects }) {
  const onMove = (e) => {
    if (reduced) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${((0.5 - py) * 7).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${((px - 0.5) * 7).toFixed(2)}deg`);
    el.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
  };

  const onLeave = (e) => {
    const el = e.currentTarget;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div className="bento-grid">
      {projects.map((p, i) =>
        i % 3 === 1 ? (
          <Link
            key={p.slug}
            className={`bento-card bento-type ${SPANS[i % SPANS.length]}`}
            href={`/work/${p.slug}`}
            aria-label={`Open ${p.title}`}
          >
            <span className="bento-type-num">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="bento-type-word" aria-hidden="true">
              {p.category.split(" ")[0]}
            </span>
            <span className="bento-type-info">
              <span className="bento-name">{p.title}</span>
              <span className="bento-cat">
                {p.category} / {p.year}
              </span>
            </span>
            <span className="bento-type-go">→</span>
          </Link>
        ) : (
          <Link
            key={p.slug}
            className={`bento-card ${SPANS[i % SPANS.length]}`}
            href={`/work/${p.slug}`}
            aria-label={`Open ${p.title}`}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(`/images/projects/${p.image}`)}
              alt={p.title}
              loading="lazy"
            />
            <span className="bento-veil" aria-hidden="true">
              <span className="bento-go">→</span>
              <span className="bento-info">
                <span className="bento-cat">
                  {p.category} / {p.year}
                </span>
                <span className="bento-name">{p.title}</span>
              </span>
            </span>
            <span className="bento-glare" aria-hidden="true" />
          </Link>
        )
      )}
    </div>
  );
}
