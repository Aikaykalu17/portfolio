import Typewriter from "./Typerwriter";

import portrait2 from "../assets/portrait2.webp";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiReactquery,
  SiFramer,
} from "react-icons/si";
import { Link } from "react-router-dom";

function UserInfo() {
  return (
    <section className="w-full flex justify-center mt-4 pt-6 border-t border-[#E5E7EB]">
      <div className="w-[90%] flex flex-col gap-4 md:grid md:grid-cols-[1.4fr_1fr] md:items-start">
        <div className="flex flex-col justify-center gap-2">
          <div className="flex flex-col gap-4">
            <p className="text-neutral-600 text-sm font-semibold ">HELLO I'M</p>
            <h1 className="font-bold text-4xl">
              <Typewriter text="Ikechukwu Kalu Amogu" speed={100} />
            </h1>
            <p className="text-neutral-600 font-light text-xs">
              Frontend Developer crafting clean, <br /> responsive,
              user-friendly websites and web applications.
            </p>
          </div>
          <div className="flex justify-between mt-4 gap-4 md:justify-normal md:w-full ">
            <Link
              to="/projects"
              className="h-10 w-36 flex items-center justify-center bg-black text-white text-xs md:hover:bg-white md:hover:text-black md:hover:border md:hover:border-black transition-colors duration-300"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="h-10 w-36 flex items-center justify-center hover:bg-black hover:text-white text-black text-xs border border-black transition-colors duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="w-full flex justify-center md:justify-center md:px-0 md:row-span-2 ">
          <img
            src={portrait2}
            alt="portrait"
            className="w-full object-cover md:max-w-[580px] md:w-9/12"
            fetchPriority="high"
          />
        </div>

        <div className="flex flex-col gap-4 py-4 w-full lg:w-full lg:pt-0 lg:pl-0">
          <p className="text-sm font-semibold text-neutral-600">TECH STACK</p>

          <div className="flex flex-col gap-6 items-center md:items-start">
            <div className="flex gap-4">
              <span className="flex flex-col items-center justify-center  text-slate-500 font-bold text-xs">
                <FaHtml5 title="HTML" size={30} color="#E34F26" /> HTML
              </span>
              <span className="flex flex-col items-center justify-center  text-slate-500 font-bold text-xs">
                <FaCss3Alt title="CSS" size={30} color="#1572B6" /> CSS
              </span>
              <span className="flex flex-col items-center justify-center  text-slate-500 font-bold text-xs">
                <SiTailwindcss title="TAILWINDCSS" size={30} color="#06B6D4" />{" "}
                TAILWINDCSS
              </span>
              <span className="flex flex-col items-center justify-center  text-slate-500 font-bold text-xs">
                <FaJs title="JAVASCRIPT" size={30} color="#F7DF1E" /> JAVASCRIPT
              </span>
              <span className="flex flex-col items-center justify-center  text-slate-500 font-bold text-xs">
                <FaReact title="REACT" size={30} color="#61DAFB" /> REACT
              </span>
            </div>
            <div className="flex gap-4">
              <span className="flex flex-col items-center justify-center  text-slate-500 font-bold text-xs">
                <SiReactquery title="REACTQUERY" size={30} color="#764ABC" />{" "}
                REACT QUERY
              </span>
              <span className="flex flex-col items-center justify-center  text-slate-500 font-bold text-xs">
                <SiNextdotjs title="NEXTJS" size={30} color="#000000" /> NEXJS
              </span>
              {/* <span className="flex flex-col items-center justify-center  text-slate-500 font-bold text-xs">
                <FaWordpress title="WORDPRESS" size={30} color="#21759B" />{" "}
                WORDPRESS
              </span> */}
              <span className="flex flex-col items-center justify-center  text-slate-500 font-bold text-xs">
                <SiRedux title="REDUX" size={30} color="#FF4154" /> REDUX
              </span>

              <span className="flex flex-col items-center justify-center  text-slate-500 font-bold text-xs">
                <SiFramer title="Framer Motion" size={30} color="#000000" />{" "}
                FRAMER MOTION
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default UserInfo;
