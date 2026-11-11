import {
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
  HiOutlineCodeBracket,
  HiOutlineAcademicCap,
  HiOutlineCursorArrowRays,
  HiOutlineGlobeAlt,
  HiOutlineArrowPath,
  HiOutlineUser,
  HiOutlineEye,
  HiOutlineBolt,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

import portrait from "../assets/portrait2.webp";
import PageHeader from "./PageHeader";
import ResumeButton from "./ResumeButton";

const story = [
  {
    icon: HiOutlineLightBulb,
    title: "Curiosity",
    text: "My interest in computers started young. I was always taking things apart, putting them back together, chasing an answer to “how does this actually work?”",
  },
  {
    icon: HiOutlineRocketLaunch,
    title: "The spark",
    text: "That curiosity sat dormant for a while until a friend introduced me to the Mimo learning app, and something clicked. What started as casual curiosity became a genuine obsession with building things: replicating designs pixel for pixel, with thoughtful UI, clean code, and responsive layouts that work on any device.",
  },
  {
    icon: HiOutlineCodeBracket,
    title: "What I do",
    text: "I work primarily with React, Next.js, Redux, React Query, Tailwind CSS, WordPress, and vanilla HTML and CSS. I’m comfortable building custom applications as well as clean, conversion-focused landing pages for businesses that need a strong online presence.",
  },
  {
    icon: HiOutlineCursorArrowRays,
    title: "My approach",
    text: "It starts before I write a single line of code. I take time to understand the problem a client actually has, plan the architecture of the solution, then build with accessibility in mind from the start, not as an afterthought.",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Always learning",
    text: "I care about screen reader users having as smooth an experience as everyone else. When a project calls for something outside my current toolkit, I treat it as a research problem to solve, not a wall to stop at.",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Background",
    text: "I graduated with a degree in Sociology from Abia State University, Uturu. I’m a self-taught frontend developer, largely shaped by Jonas Schmedtmann’s courses, which built the foundation for everything I do today.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Right now",
    text: "I manage the WordPress website for Formato Famiglia, an Italian-based nonprofit, handling ongoing maintenance, updates and design improvements. I love making the web feel smooth. Let’s build something people actually enjoy using.",
  },
];

const values = [
  { icon: HiOutlineUser, title: "User first", text: "Intuitive, inclusive experiences designed around the person using them." },
  { icon: HiOutlineEye, title: "Accessibility", text: "Everyone deserves a seamless experience, so I build accessible from the ground up." },
  { icon: HiOutlineCodeBracket, title: "Clean code", text: "Readable, maintainable code is the foundation of every great product." },
  { icon: HiOutlineBolt, title: "Continuous growth", text: "I embrace new tools, learn constantly and aim to be better every day." },
];

function About() {
  return (
    <>
      <section className="container-x pb-16 pt-6 md:pb-20 md:pt-10">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-12 lg:gap-20">
          <div className="order-2 md:order-1">
            <PageHeader title="I build things for the web.">
              I&rsquo;m a self-taught frontend developer who loves crafting clean,
              responsive and accessible web experiences that solve real problems.
            </PageHeader>
            <ul className="mt-7 flex flex-wrap gap-2">
              <li className="chip gap-1.5 py-1.5 text-sm">
                <HiOutlineMapPin size={15} aria-hidden="true" /> Nigeria
              </li>
              <li className="chip gap-2 py-1.5 text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                Available for work
              </li>
            </ul>
          </div>
          <div className="order-1 mx-auto w-full max-w-[15rem] xs:max-w-[17rem] md:order-2 md:max-w-none">
            <div className="rounded-full border border-line bg-surface p-2.5">
              <div className="overflow-hidden rounded-full">
                <img
                  src={portrait}
                  alt="Portrait of Ikechukwu Kalu Amogu"
                  width="924"
                  height="924"
                  className="aspect-square w-full scale-[1.14] object-cover dark:brightness-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="story-title" className="border-y border-line bg-surface">
        <div className="container-x py-16 md:py-20">
          <h2 id="story-title" className="text-3xl font-bold md:text-4xl">
            My story
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6">
            {story.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4 rounded-2xl border border-line bg-bg p-5 md:p-6">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-surface"
                >
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="values-title" className="container-x py-16 md:py-20">
        <h2 id="values-title" className="text-3xl font-bold md:text-4xl">
          What I value
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <li key={title} className="card p-6">
              <Icon size={24} aria-hidden="true" />
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col gap-3 xs:flex-row">
          <Link to="/projects" className="btn-primary min-h-12 px-7">
            See my work
          </Link>
          <Link to="/contact" className="btn-ghost min-h-12 px-7">
            Get in touch
          </Link>
          <ResumeButton variant="ghost" />
        </div>
      </section>
    </>
  );
}

export default About;
