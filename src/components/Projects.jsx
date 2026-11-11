import { useState } from "react";

import { projects, categories } from "../data/projects";
import PageHeader from "./PageHeader";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [active, setActive] = useState("All");

  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="container-x pb-16 pt-6 md:pb-24 md:pt-10">
      <PageHeader title="Projects">
        A selection of things I&rsquo;ve built. Each one taught me something new and
        helped me grow as a developer.
      </PageHeader>

      <div className="mt-8" role="group" aria-label="Filter projects by category">
        <ul className="flex flex-wrap gap-2">
          {categories.map((c) => {
            const on = active === c;
            return (
              <li key={c}>
                <button
                  type="button"
                  onClick={() => setActive(c)}
                  aria-pressed={on}
                  className={`min-h-11 rounded-full border px-5 text-sm font-medium transition ${
                    on
                      ? "border-transparent bg-inverse text-on-inverse"
                      : "border-line text-ink hover:bg-surface"
                  }`}
                >
                  {c === "All" ? "All projects" : c === "Web Application" ? "Web apps" : c === "Landing Page" ? "Landing pages" : "Websites"}
                </button>
              </li>
            );
          })}
        </ul>
        <p className="sr-only" role="status" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.id} project={p} headingLevel="h2" />
        ))}
      </div>
    </section>
  );
}

export default Projects;
