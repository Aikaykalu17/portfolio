import { useState } from "react";
import { Listbox } from "@headlessui/react";

import { projects } from "../data/projects";
import { FaChevronDown } from "react-icons/fa";
import "../components/Navstyle.css";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  function handleFilter(category) {
    setActiveFilter(category);
  }

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((filter) => filter.category === activeFilter);

  function getButtonStyle(category) {
    return activeFilter === category
      ? "h-8 w-32 text-white text-center bg-black text-xs items-center justify-center gap-2 rounded text-xs"
      : "h-8 w-32  border border-black text-black rounded text-xs";
  }

  return (
    <section id="projects" className="w-full pt-4">
      <div className="flex flex-col gap-4 w-[90%] mx-auto pb-4 pt-4 border-t border-slate-200 ">
        <div className="flex flex-col gap-2">
          <p className="font-bold">MY WORK</p>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-stone-500 font-medium text-xs">
            A selection of projects I've built. Each taught me something new and
            helped me grow as a developer.
          </p>
        </div>

        <label htmlFor="project-filter" className="sr-only">
          Filter projects by category
        </label>

        <div className="md:hidden">
          <Listbox value={activeFilter} onChange={handleFilter}>
            {({ open }) => (
              <div className="relative w-full">
                <Listbox.Button className="w-full border border-slate-400 rounded-lg p-2 text-left text-xs flex justify-between items-center">
                  {activeFilter}
                  <FaChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                  />
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 w-full bg-white border border-slate-200 rounded-lg shadow-lg z-10">
                  {[
                    "All Projects",
                    "Landing Pages",
                    "Web Application",
                    "Other",
                  ].map((category) => (
                    <Listbox.Option
                      key={category}
                      value={category}
                      className="p-2 cursor-pointer hover:bg-slate-100 text-xs"
                    >
                      {category}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            )}
          </Listbox>
        </div>

        <div className="hidden  md:flex md:flex-row gap-4 border border-slate-400 w-max p-4 rounded-lg ">
          <button
            onClick={() => handleFilter("All Projects")}
            className={getButtonStyle("All Projects")}
          >
            All Projects
          </button>
          <div className="h-auto w-px bg-slate-400"></div>
          <button
            onClick={() => handleFilter("Landing Pages")}
            className={getButtonStyle("Landing Pages")}
          >
            Landing Pages
          </button>
          <div className="h-auto w-px bg-slate-400"></div>
          <button
            onClick={() => handleFilter("Web Application")}
            className={getButtonStyle("Web Application")}
          >
            Web Applications
          </button>
          <div className="h-auto w-px bg-slate-400"></div>
          <button
            onClick={() => handleFilter("Other")}
            className={getButtonStyle("Other")}
          >
            Other
          </button>
        </div>
        <div className="md:grid md:grid-cols-3 flex flex-col gap-8 md:gap-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col lg:flex lg:flex-col border border-slate-400 p-4 gap-2 rounded-lg"
            >
              <p className="text-stone-500 font-bold text-xs">
                <span className="font-bold text-black ">Project Title:</span>{" "}
                {project.title}
              </p>
              <p className="text-stone-500 font-medium text-xs">
                <span className="font-bold text-black ">
                  Project Description:
                </span>{" "}
                {project.description}
              </p>
              <p className="text-stone-500 text-xs">
                <span className="font-bold text-black ">Project Category:</span>{" "}
                {project.category}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 underline text-xs xl:flex xl:flex-row"
              >
                <img src={project.image} alt="" className="lg:w-3/6" />{" "}
                <span className="">Visit site &rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
