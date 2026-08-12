"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const subject = encodeURIComponent(`Project inquiry — ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's make"
        outline="something bold"
        desc="Tell me about your project, your brand, or your wild idea. I read every message and reply within a day or two."
      />

      <section className="section contact-page">
        <div className="container contact-grid">
          <Reveal>
            <div className="contact-info">
              <a className="info-line" href={`mailto:${site.email}`}>
                <span className="info-label">Email</span>
                <span className="info-val">{site.email}</span>
              </a>
              <a className="info-line" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                <span className="info-label">Phone</span>
                <span className="info-val">{site.phone}</span>
              </a>
              <div className="info-line">
                <span className="info-label">Studio</span>
                <span className="info-val">{site.location}</span>
              </div>
              <div className="info-line">
                <span className="info-label">Follow</span>
                <span className="info-socials">
                  {site.socials.map((s) => (
                    <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
                      {s.label}
                    </a>
                  ))}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form className="form" onSubmit={submit}>
              <label className="field">
                <span>Your name</span>
                <input name="name" type="text" required placeholder="Jane Doe" />
              </label>
              <label className="field">
                <span>Email</span>
                <input name="email" type="email" required placeholder="jane@brand.com" />
              </label>
              <label className="field">
                <span>What do you need?</span>
                <select name="type" defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  {site.about.services.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                  <option value="Other">Something else</option>
                </select>
              </label>
              <label className="field">
                <span>Tell me about it</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Brand, deadline, budget, links — whatever helps."
                />
              </label>
              <button type="submit" className="btn form-submit">
                {sent ? "Opening your mail app…" : "Send message"} <span className="arr">→</span>
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
