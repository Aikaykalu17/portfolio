import { Link } from "react-router-dom";
import { HiOutlineArrowRight, HiOutlineMapPin } from "react-icons/hi2";

import portrait from "../assets/portrait2.webp";
import { projects } from "../data/projects";
import { heroTech } from "./TechIcons";
import ProjectCard from "./ProjectCard";
import ResumeButton from "./ResumeButton";
import { whatsappUrl } from "../data/site";

const featured = [projects[0], projects[1], projects[2]];

function Hero() {
  return (
    <>
      {/* Intro */}
      <section aria-labelledby="intro-title" className="container-x pb-16 pt-6 md:pb-24 md:pt-10">
        <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-12 lg:gap-20">
          <div className="order-2 md:order-1">
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for work
            </p>

            <h1
              id="intro-title"
              className="mt-6 text-[2.5rem] font-extrabold leading-[1.05] xs:text-5xl lg:text-6xl xl:text-7xl"
            >
              Hi, I&rsquo;m Ikechukwu. I build for the web.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              A frontend developer making clean, responsive and accessible websites
              and web apps that are easy for everyone to use.
            </p>

            <div className="mt-8 flex flex-col gap-3 xs:flex-row">
              <Link to="/projects" className="btn-primary min-h-12 px-7">
                View my work
                <HiOutlineArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn-ghost min-h-12 px-7">
                Contact me
              </Link>
            </div>
            <ResumeButton variant="link" className="mt-4" />

            <p className="mt-8 flex items-center gap-1.5 text-sm text-muted">
              <HiOutlineMapPin size={16} aria-hidden="true" /> Based in Nigeria
            </p>
          </div>

          <div className="order-1 mx-auto w-full max-w-[17rem] xs:max-w-xs md:order-2 md:max-w-none">
            <div className="rounded-full border border-line bg-surface p-2.5 md:p-3">
              <div className="overflow-hidden rounded-full">
                <img
                  src={portrait}
                  alt="Portrait of Ikechukwu Kalu Amogu"
                  width="924"
                  height="924"
                  fetchPriority="high"
                  className="aspect-square w-full scale-[1.14] object-cover dark:brightness-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section aria-labelledby="tools-title" className="border-y border-line bg-surface">
        <div className="container-x py-8 md:py-10">
          <h2 id="tools-title" className="text-sm font-medium text-muted">
            What I work with
          </h2>
          <ul className="mt-5 grid grid-cols-3 gap-x-4 gap-y-6 xs:grid-cols-5 lg:flex lg:flex-wrap lg:justify-between lg:gap-x-6">
            {heroTech.map(({ name, icon: Icon }) => (
              <li key={name} className="flex flex-col items-center gap-2 text-center">
                <Icon size={28} aria-hidden="true" className="text-ink" />
                <span className="text-xs text-muted">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured work */}
      <section aria-labelledby="work-title" className="container-x py-16 md:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 id="work-title" className="text-3xl font-bold md:text-4xl">
              Selected work
            </h2>
            <p className="mt-3 text-muted md:text-lg">
              A few projects that show how I like to build.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex min-h-11 w-max items-center gap-2 rounded-full text-sm font-medium underline underline-offset-4 hover:opacity-70"
          >
            View all projects
            <HiOutlineArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} headingLevel="h3" />
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section aria-labelledby="about-title" className="container-x pb-16 md:pb-24">
        <div className="card grid gap-8 p-6 md:grid-cols-[1.2fr_1fr] md:p-12 lg:gap-16">
          <div>
            <h2 id="about-title" className="text-3xl font-bold md:text-4xl">
              Clean, accessible and built to last.
            </h2>
            <p className="mt-4 max-w-prose leading-relaxed text-muted">
              I&rsquo;m a self-taught frontend developer who enjoys turning ideas into
              products that solve real problems. I care about the small details,
              and about people who use screen readers having as smooth an
              experience as everyone else.
            </p>
            <Link to="/about" className="btn-ghost mt-7 min-h-12 px-7">
              More about me
            </Link>
          </div>
          <ul className="flex flex-col divide-y divide-line self-center">
            {[
              ["Detail oriented", "I pay attention to the little things that make a difference."],
              ["Problem solver", "I enjoy building solutions that matter."],
              ["Always learning", "New tools and approaches are part of the job."],
            ].map(([t, d]) => (
              <li key={t} className="py-4 first:pt-0 last:pb-0">
                <h3 className="text-base font-bold">{t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing CTA */}
      <section aria-labelledby="cta-title" className="container-x pb-16 md:pb-24">
        <div className="rounded-3xl bg-inverse px-6 py-12 text-center text-on-inverse md:px-12 md:py-16">
          <h2 id="cta-title" className="mx-auto max-w-xl text-3xl font-bold md:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-md opacity-70">
            I&rsquo;d love to hear about it and how I can help.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-8 min-h-12 bg-bg px-8 text-ink hover:opacity-90"
          >
            Let&rsquo;s talk
            <span className="sr-only">(opens WhatsApp in a new tab)</span>
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
