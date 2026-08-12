"use client";

import Link from "next/link";
import { site } from "@/data/site";
import BentoGrid from "./BentoGrid";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function FeaturedWork() {
  const featured = site.projects
    .filter((p) => p.featured)
    .concat(site.projects.filter((p) => !p.featured))
    .slice(0, 6);

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="feat-head">
          <Reveal>
            <h2 className="feat-title">
              Selected <em>work</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Magnetic>
              <Link className="ulink" href="/work">
                View all work <span className="arr">→</span>
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </div>

      <Reveal className="bento-bleed" delay={0.05}>
        <BentoGrid projects={featured} />
      </Reveal>
    </section>
  );
}
