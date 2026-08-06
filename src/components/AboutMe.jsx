import { FaPuzzlePiece, FaBookOpen } from "react-icons/fa";

import { FiTarget } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function AboutMe() {
  return (
    <section className="w-full flex justify-center my-4 border-t border-[#E5E7EB] pt-6 ">
      <div className="flex w-full justify-center items-center lg:w-[90%] lg:mx-auto lg:justify-start">
        <div className="flex flex-col gap-4 w-[90%] lg:w-3/6 ">
          <span className="text-sm font-semibold text-neutral-600 ">
            ABOUT ME
          </span>
          <p className="font-semibold text-2xl">I build things for the web</p>
          <div className="flex flex-col">
            <p className="text-xs text-slate-600">
              I'm a frontend developer with a passion for building clean, <br />
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
        <div className="hidden lg:flex lg:flex-col lg:w-3/6 gap-4 justify-center items-center">
          <div className="flex gap-4">
            <div className="border border-black flex items-center justify-center px-4 rounded-lg h-12">
              <FiTarget size={25} />
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold">Detailed Oriented</h2>
              <p className="text-xs text-slate-600">
                I pay attention to the little thing that <br /> make a
                difference.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="border border-black flex items-center justify-center px-4 rounded-lg h-12">
              <FaPuzzlePiece size={25} />
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold">Problem Solver</h2>
              <p className="text-xs text-slate-600">
                I enjoy solving problems and building <br /> solutions that
                matter.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="border border-black flex items-center justify-center px-4 rounded-lg h-12">
              <FaBookOpen size={25} />
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold">Continuous Learning</h2>
              <p className="text-xs text-slate-600">
                I'm always learning new technologies <br /> to level up my
                skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
