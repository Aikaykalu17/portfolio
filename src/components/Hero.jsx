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
} from "react-icons/si";
import { FiTarget } from "react-icons/fi";

function Hero() {
  return (
    <>
      <section className="flex flex-col w-full items-center mt-4 pt-4 gap-4 border-t border-[#E5E7EB] lg:grid lg:grid-cols-[1.4fr_1fr] lg:items-start lg:w-[90%] lg:mx-auto">
        <div className="w-[90%] flex flex-col justify-center gap-2 lg:w-full">
          <div className="flex flex-col gap-4">
            <p className="text-neutral-600 text-sm font-semibold">HELLO I'M</p>
            <h1 className="font-bold text-4xl">
              <Typewriter text="Ikechukwu Kalu Amogu" speed={100} />
            </h1>
            <p className="text-neutral-600 font-light">
              Frontend Developer crafting clean, <br /> responsive,
              user-friendly websites and web applications. I love making the web{" "}
              <br /> feel smooth. I focus on thoughtful UI, clean code, and
              responsive design that works on any device. Let’s build something
              people actually enjoy using.
            </p>
          </div>
          <div className="flex justify-between mt-4 gap-8 lg:justify-normal">
            <button className="h-10 w-36 bg-black text-white text-xs lg:hover:bg-white lg:hover:text-black lg:hover:border lg:hover:border-black transition-colors duration-300">
              View My Work
            </button>
            <button className="h-10 w-36 hover:bg-black hover:text-white text-black text-xs border border-black transition-colors duration-300">
              Contact Me
            </button>
          </div>
        </div>

        <div className="w-full flex justify-center lg:justify-end px-4 lg:px-0 lg:row-span-2">
          <img
            src={portrait2}
            alt="portrait"
            className="w-[90%] object-cover lg:w-[80%] lg:max-w-[580px]"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-4 py-4 w-[90%] lg:w-full lg:pt-0">
          <p className="text-sm font-semibold text-neutral-600">TECH STACK</p>

          <div className="marquee-wrapper">
            <div className="marquee-row marquee-left">
              <FaHtml5 size={32} color="#E34F26" />
              <FaCss3Alt size={32} color="#1572B6" />
              <FaJs size={32} color="#F7DF1E" />
              <FaReact size={32} color="#61DAFB" />
              <SiTailwindcss size={32} color="#06B6D4" />
              <FaHtml5 size={32} color="#E34F26" />
              <FaCss3Alt size={32} color="#1572B6" />
              <FaJs size={32} color="#F7DF1E" />
              <FaReact size={32} color="#61DAFB" />
              <SiTailwindcss size={32} color="#06B6D4" />
            </div>
          </div>

          <div className="marquee-wrapper">
            <div className="marquee-row marquee-right">
              <FaWordpress size={32} color="#21759B" />
              <SiNextdotjs size={32} color="#000000" />
              <SiReactquery size={32} color="#764ABC" />
              <SiRedux size={32} color="#FF4154" />
              <FaWordpress size={32} color="#21759B" />
              <SiNextdotjs size={32} color="#000000" />
              <SiReactquery size={32} color="#764ABC" />
              <SiRedux size={32} color="#FF4154" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-me w-full flex justify-center my-4 border-t border-[#E5E7EB] pt-6 lg:w-[90%] lg:mx-auto lg:justify-start">
        <div className="flex flex-col gap-4 w-[90%] lg:w-3/6 ">
          <span className="text-sm font-semibold text-neutral-600 ">
            ABOUT ME
          </span>
          <p className="font-semibold text-2xl">I build things for the web</p>
          <p className="text-sm text-slate-600">
            I'm a frontend developer with a passion <br className="lg:hidden" />{" "}
            for building clean, <br className="hidden lg:block" />
            responsive, and <br className="lg:hidden" /> accessible websites and
            applications. <br />I enjoy turning ideas into real products{" "}
            <br className="lg:hidden" /> that solve problems{" "}
            <br className="hidden lg:block" />
            and create impact.
          </p>
          <button className="h-10 w-36 hover:bg-black hover:text-white text-black text-xs border border-black transition-colors duration-300">
            More About Me
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:w-3/6 gap-8">
          <div className="flex gap-8">
            <div className="border border-black flex items-center justify-center py-1 px-6 rounded-lg">
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
            <div className="border border-black flex items-center justify-center py-1 px-6 rounded-lg">
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
            <div className="border border-black flex items-center justify-center py-1 px-6 rounded-lg">
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
          <div className="flex">
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
