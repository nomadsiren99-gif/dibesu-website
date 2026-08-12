"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { asset } from "@/lib/path";

function Section({ num, title, body }) {
  const paragraphs = Array.isArray(body) ? body : [body];
  return (
    <div className="case-section">
      <span className="label">{num}</span>
      <h3 className="case-h3">{title}</h3>
      <div className="case-body">
        {paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  );
}

export default function ProjectDetail({ project, next }) {
  return (
    <main>
      {/* ---------- HERO ---------- */}
      <section className="case-hero">
        <div className="container">
          <Reveal>
            <div className="case-meta">
              <span>{project.sector}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="case-title">{project.title}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="case-intro">{project.intro}</p>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="case-hero-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(`/images/projects/${project.image}`)} alt={project.title} />
          </div>
        </Reveal>
      </section>

      {/* ---------- STORY / MEANING ---------- */}
      <section className="case-body-section">
        <div className="container case-grid">
          <div className="case-sticky">
            <Reveal>
              <span className="label">The meaning behind</span>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="case-services">
                {project.services.join("  /  ")}
              </div>
            </Reveal>
          </div>
          <div className="case-stack">
            <div className="case-lead">
              {project.story.map((para, i) => (
                <Reveal as="p" key={i} delay={i * 0.07}>
                  {para}
                </Reveal>
              ))}
            </div>

            <div className="case-two-col">
              <Section num="01" title={project.challenge.title} body={project.challenge.body} />
              <Section num="02" title={project.approach.title} body={project.approach.body} />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- GALLERY ---------- */}
      {project.gallery?.length > 0 && (
        <section className="case-gallery">
          <div className="container">
            <div className="gallery-grid">
              {project.gallery.map((img, i) => (
                <Reveal
                  key={i}
                  className={`gallery-item g-${i + 1}`}
                  delay={i * 0.07}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(`/images/projects/${img}`)}
                    alt={`${project.title} ${i + 1}`}
                    loading="lazy"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- TIMELINE ---------- */}
      <section className="case-timeline">
        <div className="container">
          <Reveal>
            <span className="label">How it came together</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="timeline-heading">Timeline</h3>
          </Reveal>
          {project.timeline.map((t, i) => (
            <Reveal
              as="div"
              className="timeline-item"
              key={t.title}
              delay={i * 0.05}
            >
              <span className="timeline-period">{t.period}</span>
              <div className="timeline-body">
                <h4 className="timeline-title">{t.title}</h4>
                <p className="timeline-desc">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- NEXT PROJECT ---------- */}
      <section className="case-next">
        <div className="container">
          <Link href={`/work/${next.slug}`} className="next-link">
            <span className="next-label">Next project</span>
            <span className="next-title">{next.title}</span>
            <span className="next-arrow">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
