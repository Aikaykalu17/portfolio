import Typewriter from "./TyperWriter";

import portrait2 from "../assets/portrait2.webp";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt, FaJs, FaReact, FaWordpress } from "react-icons/fa";
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
    <section className="w-full flex justify-center mt-4 pt-4 border-t border-[#E5E7EB]">
      <div className="w-[90%] flex flex-col gap-4 lg:grid lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <div className="flex flex-col justify-center gap-2">
          <div className="flex flex-col gap-4">
            <p className="text-neutral-600 text-sm font-semibold">HELLO I'M</p>
            <h1 className="font-bold text-4xl">
              <Typewriter text="Ikechukwu Kalu Amogu" speed={100} />
            </h1>
            <p className="text-neutral-600 font-light text-xs">
              Frontend Developer crafting clean, <br /> responsive,
              user-friendly websites and web applications.
            </p>
          </div>
          <div className="flex justify-between mt-4 gap-8 lg:justify-normal lg:w-full">
            <Link to="/projects">
              <button className="h-10 w-36 bg-black text-white text-xs lg:hover:bg-white lg:hover:text-black lg:hover:border lg:hover:border-black transition-colors duration-300">
                View My Work
              </button>
            </Link>
            <button className="h-10 w-36 hover:bg-black hover:text-white text-black text-xs border border-black transition-colors duration-300">
              Contact Me
            </button>
          </div>
        </div>

        <div className="w-full flex justify-center lg:justify-start px-4 lg:px-0 lg:row-span-2 ">
          <img
            src={portrait2}
            alt="portrait"
            className="w-[90%] object-cover lg:max-w-[580px] lg:w-9/12"
            fetchPriority="high"
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
                <SiTailwindcss title="TAILWINDCSS" size={32} color="#06B6D4" />{" "}
                TAILWINDCSS
              </span>
              <span className="flex flex-col items-center justify-center  text-stone-900 font-bold text-xs">
                <FaJs title="JAVASCRIPT" size={32} color="#F7DF1E" /> JAVASCRIPT
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
  );
}
export default UserInfo;
