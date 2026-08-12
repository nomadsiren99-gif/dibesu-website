import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { site } from "@/data/site";

export const metadata = {
  title: "About — " + site.name,
  description: site.metaDescription,
};

export default function AboutPage() {
  const { stats, process } = site.about;

  return (
    <>
      <PageHero
        eyebrow="About me"
        title="Design with a"
        outline="point of view"
        desc="I'm a brand and graphic designer who believes strategy and feeling are the same craft. Here's who I am, how I work, and what I care about."
      />

      <About />

      {/* ---------- STATS ---------- */}
      <div className="stats">
        {stats.map((s, i) => (
          <Reveal className="stat" key={s.label} delay={i * 0.07}>
            <span className="stat-value">
              <CountUp value={s.value} />
            </span>
            <span className="stat-label">{s.label}</span>
          </Reveal>
        ))}
      </div>

      {/* ---------- PROCESS ---------- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">How I work</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="process-heading">A simple, honest process</h2>
          </Reveal>
          <div className="process">
            {process.map((p, i) => (
              <Reveal className="process-step" key={p.step} delay={i * 0.08}>
                <span className="process-num">{p.step}</span>
                <h4 className="process-name">{p.name}</h4>
                <p className="process-desc">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
