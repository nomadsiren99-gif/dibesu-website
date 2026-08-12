"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import InteractiveType, { SplitText } from "./InteractiveType";

export default function Hero() {
  const [wi, setWi] = useState(0);
  const [inClass, setInClass] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setInClass(true), 120);
    const t2 = setInterval(
      () => setWi((i) => (i + 1) % site.heroWords.length),
      3000
    );
    return () => {
      clearTimeout(t1);
      clearInterval(t2);
    };
  }, []);

  return (
    <section className={`hero ${inClass ? "in" : ""}`}>
      <div className="container hero-inner">
        <InteractiveType as="h1" className="hero-title">
          {site.heroLines.map((line, i) => (
            <span className="hero-line" key={i}>
              <span
                className={`line ${i === 1 ? "outline" : ""}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <SplitText text={line} />
              </span>
            </span>
          ))}
          <span className="hero-line">
            <span className="line" style={{ transitionDelay: `0.2s` }}>
              <span className="word-wrap">
                <span className="rot-word" key={wi}>
                  <SplitText text={site.heroWords[wi]} />
                </span>
              </span>
            </span>
          </span>
        </InteractiveType>

        <div className="hero-meta">
          <span className="hero-rule" aria-hidden="true" />
          <span className="hero-tag">{site.tagline}</span>
          <span className="hero-index">
            {String(site.projects.length).padStart(2, "0")} projects
          </span>
        </div>
      </div>
    </section>
  );
}
