"use client";

import Reveal from "./Reveal";
import InteractiveType, { SplitText } from "./InteractiveType";

export default function PageHero({ eyebrow, title, outline, desc }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <InteractiveType as="h1" className="page-title">
            <SplitText text={title} />
            {outline && (
              <>
                {" "}
                <span className="outline">
                  <SplitText text={outline} />
                </span>
              </>
            )}
          </InteractiveType>
        </Reveal>
        {desc && (
          <Reveal delay={0.2}>
            <p className="page-desc">{desc}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
