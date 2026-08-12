import ProjectDetail from "@/components/ProjectDetail";
import { site } from "@/data/site";

export function generateStaticParams() {
  return site.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = site.projects.find((x) => x.slug === slug);
  return {
    title: p ? `${p.title} · ${site.name}` : "Work · " + site.name,
    description: p?.description,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const idx = site.projects.findIndex((x) => x.slug === slug);
  const project = site.projects[idx];
  if (!project) return null;

  const next = site.projects[(idx + 1) % site.projects.length];

  return <ProjectDetail project={project} next={next} />;
}
