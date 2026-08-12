"use client";

import Link from "next/link";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div>
            <Reveal>
              <h2
                className="about-title"
                dangerouslySetInnerHTML={{ __html: site.about.heading }}
              />
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.12}>
              <div
                className="about-body"
                dangerouslySetInnerHTML={{ __html: site.about.body }}
              />
            </Reveal>
            <Reveal delay={0.2}>
              <Magnetic>
                <Link className="ulink about-cta" href="/about">
                  More about me <span className="arr">→</span>
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </div>

        <div className="services">
          {site.about.services.map((s, i) => (
            <Reveal as="div" className="service-row" key={s.name} delay={i * 0.04}>
              <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="service-name">{s.name}</span>
              <span className="service-desc">{s.desc}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
