import { useState } from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const LONG = 170;
const SHOWN_TECH = 4;

function ProjectCard({ project, headingLevel: H = "h3" }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = project.description.length > LONG;
  const extra = project.tech.length - SHOWN_TECH;
  const tech = expanded ? project.tech : project.tech.slice(0, SHOWN_TECH);
  const descId = `desc-${project.id}`;

  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="block overflow-hidden border-b border-line bg-raised"
      >
        <img
          src={project.image}
          alt=""
          loading="lazy"
          width="1200"
          height="800"
          className="aspect-[3/2] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </a>

      <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <H className="text-xl font-bold">{project.title}</H>
          <span className="chip shrink-0">{project.category}</span>
        </div>

        <p
          id={descId}
          className={`text-[15px] leading-relaxed text-muted ${expanded ? "" : "line-clamp-3"}`}
        >
          {project.description}
        </p>

        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={descId}
            className="-mt-1 w-max rounded text-sm font-medium underline underline-offset-4 hover:opacity-70"
          >
            {expanded ? "Show less" : "Read more"}
            <span className="sr-only"> about {project.title}</span>
          </button>
        )}

        <ul className="flex flex-wrap gap-1.5" aria-label={`${project.title} technologies`}>
          {tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
          {!expanded && extra > 0 && (
            <li className="chip" aria-label={`and ${extra} more`}>
              +{extra}
            </li>
          )}
        </ul>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost mt-auto w-full self-stretch"
        >
          Visit {project.title}
          <HiOutlineArrowUpRight size={16} aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
