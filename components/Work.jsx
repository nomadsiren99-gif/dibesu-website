"use client";

import { useMemo, useState } from "react";
import { site, categories } from "@/data/site";
import BentoGrid from "./BentoGrid";
import Magnetic from "./Magnetic";

export default function Work() {
  const [filter, setFilter] = useState("All");

  const shown = useMemo(
    () =>
      filter === "All"
        ? site.projects
        : site.projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <>
      <div className="container">
        <div className="filters">
          {categories.map((c) => (
            <Magnetic key={c} strength={0.25}>
              <button
                className={`filter ${filter === c ? "active" : ""}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            </Magnetic>
          ))}
        </div>
      </div>

      <div className="bento-bleed">
        <BentoGrid projects={shown} />
      </div>
    </>
  );
}
