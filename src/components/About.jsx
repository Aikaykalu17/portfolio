import { HiOutlineLocationMarker } from "react-icons/hi";

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
} from "react-icons/hi2";

import portrait2 from "../assets/portrait2.webp";

function About() {
  return (
    <section className="pt-4" id="about">
      <div className="flex flex-col gap-4 w-[90%] mx-auto pb-4 border-t border-slate-200">
        <div className="flex flex-col md:flex md:flex-row pt-8 gap-4">
          <div className="flex flex-col gap-4 pt-4 lg:justify-center">
            <p className="font-bold">About me</p>
            <h1 className="text-3xl font-bold">
              {" "}
              I build things for the web.{" "}
            </h1>
            <div className="w-24 h-px bg-black"></div>
            <p className="text-stone-500 font-medium text-xs">
              I'm a self-taught fronted developer who loves crafitng clean,
              responsive and accessible web experiences that solve real
              problems.{" "}
            </p>
            <div className="flex justify-around lg:justify-normal lg:gap-6">
              <span className="flex items-center justify-center gap-2 text-stone-500 font-medium text-xs">
                <HiOutlineLocationMarker /> Nigeria
              </span>
              <div className="w-px h-4 bg-neutral-300"></div>
              <div className="flex items-center justify-center gap-2">
                <span className="relative flex w-2 h-2 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full w-2 h-2 bg-green-500"></span>
                </span>
                <span className="text-stone-500 font-medium text-xs">
                  Available for work
                </span>
              </div>
            </div>
          </div>

          <div className="md:flex md:justify-center">
            <img src={portrait2} className="md:w-8/12 xl:w-[50%]" />
          </div>
        </div>

        <div className="flex flex-col gap-4 ">
          <div>
            <p className="font-bold">MY STORY</p>
          </div>

          {/* Row flex container */}
          <div className="flex flex-col gap-8 lg:flex lg:flex-row">
            {/* First column container */}
            <div className="flex flex-col gap-8">
              {/* Icons and words */}
              <div className="flex gap-4">
                <div className=" bg-slate-200 w-max h-max rounded-full p-4">
                  <HiOutlineLightBulb size={20} title="Light Bulb" />
                </div>
                {/* Words */}
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-sm">Curiosity</h2>
                  <p className="text-stone-500 font-medium text-xs">
                    My interest in computers started young. I was always taking
                    things apart, putting them back together, chasing an answer
                    to "how does this actually work?"
                  </p>
                </div>
              </div>
              {/* Icons and words */}
              <div className="flex gap-4">
                <div className=" bg-slate-200 w-max h-max rounded-full p-4">
                  <HiOutlineRocketLaunch size={20} title="Rocket launch" />
                </div>
                {/* Words */}
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-sm">The Spark</h2>
                  <p className="text-stone-500 font-medium text-xs">
                    That curiosity sat dormant for a while until a friend
                    introduced me to the Mimo learning app, and something
                    clicked. What started as casual curiosity turned into a
                    genuine obsession with building things: replicating designs
                    pixel-for-pixel, focusing on thoughtful UI, clean code, and
                    responsive design that works on any device.
                  </p>
                </div>
              </div>
              {/* Icons and words */}
              <div className="flex gap-4">
                <div className=" bg-slate-200 w-max h-max rounded-full p-4">
                  <HiOutlineCodeBracket size={20} title="Code Bracket" />
                </div>
                {/* Words */}
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-sm">What I Do</h2>
                  <p className="text-stone-500 font-medium text-xs">
                    I work primarily with React, Next.js, Redux, React Query,
                    Tailwind CSS, WordPress, and vanilla HTML/CSS, comfortable
                    across both building custom applications and crafting clean,
                    conversion-focused landing pages for businesses that need a
                    strong online presence.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden w-px h-auto bg-neutral-300 lg:block"></div>
            <div className="flex flex-col gap-8">
              {/* Icons and words */}
              <div className="flex gap-4">
                <div className=" bg-slate-200 w-max h-max rounded-full p-4">
                  <HiOutlineCursorArrowRays
                    size={20}
                    title="Cursor Arrow Rays"
                  />
                </div>
                {/* Words */}
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-sm">My Appprach</h2>
                  <p className="text-stone-500 font-medium text-xs">
                    My approach starts before I write a single line of code. I
                    take time to understand the problem a client actually has,
                    plan the architecture of the solution, then build with
                    accessibility in mind from the start, not as an
                    afterthought.
                  </p>
                </div>
              </div>
              {/* Icons and words */}
              <div className="flex gap-4">
                <div className=" bg-slate-200 w-max h-max rounded-full p-4">
                  <HiOutlineArrowPath size={20} title="Arrow Path" />
                </div>
                {/* Words */}
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-sm">Always Learning</h2>
                  <p className="text-stone-600 font-medium text-xs">
                    I care about screen reader users having as smooth an
                    experience as everyone else. When a project calls for
                    something outside my current toolkit, I treat that as a
                    research problem to solve, not a wall to stop at. Staying
                    sharp on new tools and approaches is part of the job, not
                    extra credit.
                  </p>
                </div>
              </div>
              {/* Icons and words */}
              <div className="flex gap-4">
                <div className=" bg-slate-200 w-max h-max rounded-full p-4">
                  <HiOutlineAcademicCap size={20} title="Code Bracket" />
                </div>
                {/* Words */}
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-sm">What I Do</h2>
                  <p className="text-stone-600 font-medium text-xs">
                    I graduated with a degree in Sociology from Abia State
                    University, Uturu, and I'm a self-taught frontend developer,
                    largely shaped by Jonas Schmedtmann's courses, which built
                    the foundation for everything I do today.
                  </p>
                </div>
              </div>
              {/* Icons and words */}
              <div className="flex gap-4">
                <div className=" bg-slate-200 w-max h-max rounded-full p-4">
                  <HiOutlineGlobeAlt size={20} title="Globe" />
                </div>
                {/* Words */}
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-sm">What I'm Doing Now</h2>
                  <p className="text-stone-600 font-medium text-xs">
                    I currently manage the WordPress website for Formato
                    Famiglia, an Italian-based nonprofit, handling ongoing
                    maintenance, updates, and design improvements. I love making
                    the web feel smooth. Let's build something people actually
                    enjoy using.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-200 p-4">
          <div>
            <span className="font-bold">MY VALUES</span>
          </div>

          {/* Column on mobile devices. Row on large screens */}
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:flex lg:flex-row">
            <div className="flex gap-4 border border-slate-200 p-4 lg:p-2 lg:gap-2">
              <div className=" bg-slate-200 w-max h-max rounded-full p-2">
                <HiOutlineUser size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-bold text-sm">User First</h2>
                <p className="text-stone-500 font-medium text-xs">
                  I design and build with the end user in mind, creating
                  experiences that are intuitive and inclusive.
                </p>
              </div>
            </div>

            <div className="flex gap-4 border border-slate-200 p-4 lg:p-2 lg:gap-2">
              <div className=" bg-slate-200 w-max h-max rounded-full p-2">
                <HiOutlineEye size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-sm">Accessibility</h3>
                <p className="text-stone-500 font-medium text-xs">
                  Everyone should have a seamless experience. I build accessible
                  interfaces from ground up.
                </p>
              </div>
            </div>

            <div className="flex gap-4 border border-slate-200 p-4 lg:p-2 lg:gap-2">
              <div className=" bg-slate-200 w-max h-max rounded-full p-2">
                <HiOutlineCodeBracket size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-bold text-sm">Clean Code</h2>
                <p className="text-stone-500 font-medium text-xs">
                  Readable, maintainable code is the foundation of every great
                  product.{" "}
                </p>
              </div>
            </div>

            <div className="flex gap-4 border border-slate-200 p-4 lg:p-2 lg:gap-2">
              <div className=" bg-slate-200 w-max h-max rounded-full p-2">
                <HiOutlineBolt size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-sm">Continuous Growth</p>
                <p className="text-stone-500 font-medium text-xs">
                  I embrace new tools, learn constantly, and strive to be better
                  everyday.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
