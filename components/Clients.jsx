"use client";

import { site } from "@/data/site";
import Reveal from "./Reveal";

export default function Clients() {
  const logos = [...site.clients, ...site.clients];

  return (
    <section id="clients" className="section">
      <div className="container">
        <Reveal>
          <p className="clients-label">Brands I've worked with</p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="clients-marquee">
          <div className="clients-track">
            {logos.map((c, i) => (
              <span className="client-cell" key={`${c.name}-${i}`}>
                <span className="client-fallback">{c.name}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo}
                  alt={c.name}
                  loading="lazy"
                  onError={(e) => e.currentTarget.remove()}
                />
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
