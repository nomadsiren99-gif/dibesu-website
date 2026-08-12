"use client";

import { site } from "@/data/site";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <span className="eyebrow contact-eyebrow">Have a project?</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="contact-title">
            Let's make
            <br />
            something bold
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="contact-actions">
            <a className="btn" href={`mailto:${site.email}`}>
              {site.email} <span className="arr">→</span>
            </a>
            <a className="btn" href="#work">
              View work <span className="arr">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
