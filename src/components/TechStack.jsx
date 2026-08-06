import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiReactquery,
  SiJavascript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function TechStack() {
  return (
    <section className="pt-4" id="techstack">
      <div className="flex flex-col justify-between gap-8 pb-8 w-[90%] mx-auto border-t border-slate-200 lg:flex lg:flex-col">
        <div className="flex flex-col pt-4 gap-6 lg:flex lg:flex-col ">
          <div className="flex flex-col gap-6">
            <p className="font-bold text-black">TECH STACK</p>
            <h1 className="text-3xl font-bold">
              Technologies I use to build the web
            </h1>
            <p className="text-stone-500 font-medium text-xs">
              A collection of the technologies, tools and platforms I use to
              build fast, modern and responsive web applications.
            </p>
          </div>

          <div className="flex flex-row gap-6">
            <div className="flex border-l-2 border-black"></div>
            <div className="flex flex-col justify-around">
              <h2 className="">
                The right tools make the process smoother
                <br /> and the product better.
              </h2>
              <p className="text-stone-500 font-medium text-xs">
                I choose the technologies that help me build scalable,
                maintainable, and user-friendly solutions.
              </p>
            </div>
          </div>
          {/* hh */}
        </div>

        {/* Icons part */}
        <div className="flex flex-col gap-4 lg:flex lg:flex-row lg:justify-between">
          {/* Languages */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-bold">Languages</h3>
            </div>

            <div className="flex flex-row gap-4 border border-slate-300 p-4 rounded-lg">
              <div className="flex items-center border border-slate-300 p-4 rounded-lg">
                <SiJavascript size={30} title="JavaScript" color="#F7DF1E" />
              </div>
              <div className="flex flex-col  gap-1">
                <h4 className="font-bold">JavaScript</h4>
                <p className="text-xs text-stone-500">
                  Building interactive and dynamic experiences.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-4 border border-slate-300 p-4 rounded-lg">
              <div className="flex items-center border border-slate-300 p-4 rounded-lg">
                <SiTypescript size={30} title="Typescript" color="#3178C6" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-bold">TypeScript</h4>
                <p className="text-xs text-stone-500">
                  Adding type safety to JavaScript.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-4 border border-slate-300 p-4 rounded-lg">
              <div className="flex items-center border border-slate-300 p-4 rounded-lg">
                <FaHtml5 size={30} title="HTML5" color="#E34F26" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-bold">HTML5</h4>
                <p className="text-xs text-stone-500">
                  Structuring the web with semantic markup.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 border border-slate-300 p-4 rounded-lg">
              <div className="flex items-center border border-slate-300 p-4 rounded-lg">
                <FaCss3Alt size={30} title="CSS3" color="#1572B6" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-bold">CSS3</h4>
                <p className="text-xs text-stone-500">
                  Styling beautiful and responsive interfces.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block h-auto w-px border border-slate-200"></div>
          {/* Frameworks */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-bold">Frameworks & Libraries</h3>
            </div>

            <div className="flex flex-row gap-4 border border-slate-300 p-4 rounded-lg">
              <div className="flex items-center border border-slate-300 p-4 rounded-lg">
                <FaReact size={30} title="React" color="#61DAFB" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-bold">React</h4>
                <p className="text-xs text-stone-500">
                  Building user interfaces with component-based architecture.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-4 border border-slate-300 p-4 rounded-lg">
              <div className="flex items-center border border-slate-300 p-4 rounded-lg">
                <SiNextdotjs size={30} title="Next.js" color="#000000" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-bold">Next.js</h4>
                <p className="text-xs text-stone-500">
                  The React framework for production.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 border border-slate-300 p-4 rounded-lg">
              <div className="flex items-center border border-slate-300 p-4 rounded-lg">
                <SiTailwindcss
                  size={30}
                  title="Taildwind CSS"
                  color="#06B6D4"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-bold">Tailwind CSS</h4>
                <p className="text-xs text-stone-500">
                  Utility-first CSS framework.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 border border-slate-300 p-4 rounded-lg">
              <div className="flex items-center border border-slate-300 p-4 rounded-lg">
                <SiReactquery size={30} title="React Query" color="#764ABC" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-bold">React Query</h4>
                <p className="text-xs text-stone-500">
                  Powerful data fetching for React applications.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block h-auto w-px border border-slate-200"></div>
          {/* Tools */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-bold">Tools & Others</h3>
            </div>

            <div className="flex flex-row gap-4 border border-slate-300 p-4 rounded-lg">
              <div className="flex items-center border border-slate-300 p-4 rounded-lg">
                <FaGitAlt size={30} title="Git" color="#F05032" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-bold">Git</h4>
                <p className="text-xs text-stone-500">
                  Version control and collaboraton.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 border border-slate-300 p-4 rounded-lg">
              <div className="flex items-center border border-slate-300 p-4 rounded-lg">
                <FaGithub size={30} title="GitHub" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-bold">GitHub</h4>
                <p className="text-xs text-stone-500">
                  Designing and prototyping user-interfaces.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 border border-slate-300 p-4 rounded-lg">
              <div className="flex items-center border border-slate-300 p-4 rounded-lg">
                <VscVscode size={30} title="Vs Code" color="#007ACC" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-bold">Vs Code</h4>
                <p className="text-xs text-stone-500">
                  My go-to code editor for building.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 border border-slate-300 p-4 rounded-lg">
              <div className="flex items-center border border-slate-300 p-4 rounded-lg">
                <FaFigma size={30} title="Figma" color="#F24E1E" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-bold">Figma</h4>
                <p className="text-xs text-stone-500">
                  Designing and prototyping user-interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
