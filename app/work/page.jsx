import PageHero from "@/components/PageHero";
import Work from "@/components/Work";
import { site } from "@/data/site";

export const metadata = {
  title: "Work",
  description: site.metaDescription,
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected"
        outline="Work"
        desc="Every project starts as a question and ends as a system. Browse the full body of work — each one links to its case study, story and timeline."
      />
      <section className="section">
        <div className="container">
          <div className="work-head">
            <span className="work-count">
              {site.projects.length} projects
            </span>
          </div>
        </div>
        <Work />
      </section>
    </>
  );
}
