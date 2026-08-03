import Typewriter from "./TyperWriter";

import portrait2 from "../assets/portrait2.png";
import famiglia from "../assets/famiglia.png";
import manageLanding from "../assets/manageLanding.png";
import fastReactPizza from "../assets/fastReactPizza.png";

import { FaHtml5 } from "react-icons/fa";
import {
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaPuzzlePiece,
  FaBookOpen,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiReactquery,
  SiFramer,
} from "react-icons/si";
import { FiTarget } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="w-full flex justify-center mt-4 pt-4 border-t border-[#E5E7EB]">
        <div className="w-[90%] flex flex-col gap-4 lg:grid lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="flex flex-col justify-center gap-2">
            <div className="flex flex-col gap-4">
              <p className="text-neutral-600 text-sm font-semibold">
                HELLO I'M
              </p>
              <h1 className="font-bold text-4xl">
                <Typewriter text="Ikechukwu Kalu Amogu" speed={100} />
              </h1>
              <p className="text-neutral-600 font-light text-xs">
                Frontend Developer crafting clean, <br /> responsive,
                user-friendly websites and web applications.
              </p>
            </div>
            <div className="flex justify-between mt-4 gap-8 lg:justify-normal lg:w-full">
              <button className="h-10 w-36 bg-black text-white text-xs lg:hover:bg-white lg:hover:text-black lg:hover:border lg:hover:border-black transition-colors duration-300">
                View My Work
              </button>
              <button className="h-10 w-36 hover:bg-black hover:text-white text-black text-xs border border-black transition-colors duration-300">
                Contact Me
              </button>
            </div>
          </div>

          <div className="w-full flex justify-center lg:justify-start px-4 lg:px-0 lg:row-span-2 ">
            <img
              src={portrait2}
              alt="portrait"
              className="w-[90%] object-cover lg:w-[80%] lg:max-w-[580px]"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-4 py-4 w-full lg:w-full lg:pt-0 lg:pl-0">
            <p className="text-sm font-semibold text-neutral-600">TECH STACK</p>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <span className="flex flex-col items-center justify-center  text-stone-900 font-bold text-xs">
                  <FaHtml5 title="HTML" size={32} color="#E34F26" /> HTML
                </span>
                <span className="flex flex-col items-center justify-center  text-stone-900 font-bold text-xs">
                  <FaCss3Alt title="CSS" size={32} color="#1572B6" /> CSS
                </span>
                <span className="flex flex-col items-center justify-center  text-stone-900 font-bold text-xs">
                  <SiTailwindcss
                    title="TAILWINDCSS"
                    size={32}
                    color="#06B6D4"
                  />{" "}
                  TAILWINDCSS
                </span>
                <span className="flex flex-col items-center justify-center  text-stone-900 font-bold text-xs">
                  <FaJs title="JAVASCRIPT" size={32} color="#F7DF1E" />{" "}
                  JAVASCRIPT
                </span>
                <span className="flex flex-col items-center justify-center  text-stone-900 font-bold text-xs">
                  <FaReact title="REACT" size={32} color="#61DAFB" /> REACT
                </span>
              </div>
              <div className="flex gap-4">
                <span className="flex flex-col items-center justify-center  text-stone-900 font-bold text-xs">
                  <SiReactquery title="REACTQUERY" size={32} color="#764ABC" />{" "}
                  REACT QUERY
                </span>
                <span className="flex flex-col items-center justify-center  text-stone-900 font-bold text-xs">
                  <FaWordpress title="WORDPRESS" size={32} color="#21759B" />{" "}
                  WORDPRESS
                </span>
                <span className="flex flex-col items-center justify-center  text-stone-900 font-bold text-xs">
                  <SiRedux title="REDUX" size={32} color="#FF4154" /> REDUX
                </span>
                <span className="flex flex-col items-center justify-center  text-stone-900 font-bold text-xs">
                  <SiNextdotjs title="NEXTJS" size={32} color="#000000" /> NEXJS
                </span>
                <span className="flex flex-col items-center justify-center  text-stone-900 font-bold text-xs">
                  <SiFramer title="Framer Motion" size={32} color="#000000" />{" "}
                  FRAMER MOTION
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center my-4 border-t border-[#E5E7EB] pt-6 ">
        <div className="flex w-full justify-center items-center lg:w-[90%] lg:mx-auto lg:justify-start">
          <div className="flex flex-col gap-4 w-[90%] lg:w-3/6 ">
            <span className="text-sm font-semibold text-neutral-600 ">
              ABOUT ME
            </span>
            <p className="font-semibold text-2xl">I build things for the web</p>
            <div className="flex flex-col">
              <p className="text-xs text-slate-600">
                I'm a frontend developer with a passion for building clean,{" "}
                <br />
                responsive, and accessible websites and applications.
              </p>
              <p className="text-xs text-slate-600">
                I enjoy turning ideas into real products that solve problems and
                create impact.
              </p>
            </div>
            <NavLink to="/about">
              <button className="h-10 w-36 hover:bg-black hover:text-white text-black text-xs border border-black transition-colors duration-300">
                More About Me
              </button>
            </NavLink>
          </div>
          <div className="hidden lg:flex lg:flex-col lg:w-3/6 gap-8 justify-center items-start">
            <div className="flex gap-8">
              <div className="border border-black flex items-center justify-center px-4 rounded-lg h-12">
                <FiTarget size={25} />
              </div>
              <div className="flex flex-col">
                <h2 className="font-semibold">Detailed Oriented</h2>
                <p className="text-sm text-slate-600">
                  I pay attention to the little thing that <br /> make a
                  difference.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="border border-black flex items-center justify-center px-4 rounded-lg h-12">
                <FaPuzzlePiece size={25} />
              </div>
              <div className="flex flex-col">
                <h2 className="font-semibold">Problem Solver</h2>
                <p className="text-sm text-slate-600">
                  I enjoy solving problems and building <br /> solutions that
                  matter.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="border border-black flex items-center justify-center px-4 rounded-lg h-12">
                <FaBookOpen size={25} />
              </div>
              <div className="flex flex-col">
                <h2 className="font-semibold">Continuous Learning</h2>
                <p className="text-sm text-slate-600">
                  I'm always learning new technologies <br /> to level up my
                  skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex items-center justify-center border border-t border-#E5E7EB py-4">
        <div className="w-[90%] featured-projects flex flex-col gap-4">
          <span className="text-sm font-semibold text-neutral-600 ">
            FEATURED PROJECTS
          </span>
          <div className="flex items-center justify-center gap-4">
            <h2 className="font-semibold">Some Things I've Built</h2>
            <a href="#" className="underline font-medium text-xs">
              View all projects &rarr;
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="https://formatofamigliascs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start"
            >
              <img
                src={famiglia}
                alt="Formato Famiglia"
                className="hover:scale-105 transition-transform "
              />
            </a>
            <a
              href="https://manage-landing-webpage.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block"
            >
              <img
                src={manageLanding}
                alt="Manage Landing Page"
                className="hover:scale-105 transition-transform "
              />
            </a>
            <a
              href="https://fast-react-pizza-gold-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block"
            >
              <img
                src={fastReactPizza}
                alt="Fast React Pizza Page"
                className="hover:scale-105 transition-transform "
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
