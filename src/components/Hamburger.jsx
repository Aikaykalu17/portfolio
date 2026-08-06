import { NavLink } from "react-router-dom";

import { FaUser, FaBriefcase, FaCode, FaEnvelope } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Hamburger({ onClose }) {
  function handleClick(e) {
    e.stopPropagation();
  }
  const year = new Date().getFullYear();

  return (
    <div
      onClick={handleClick}
      role="button"
      className="mt-4 pt-4 border-t border-slate-600 flex flex-col justify-between gap-4"
    >
      <nav
        aria-label="Social-links"
        className="flex flex-col items-start w-[90%] mx-auto justify-between h-52 "
      >
        <NavLink
          to="/"
          onClick={onClose}
          className="text-white flex items-center justify-center gap-4 text-xs"
        >
          {" "}
          <FaBriefcase size={20} color="#fff" /> Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={onClose}
          className="text-white flex items-center justify-center gap-4 text-xs"
        >
          {" "}
          <FaUser size={20} color="#fff" /> About
        </NavLink>
        <NavLink
          to="/techstack"
          onClick={onClose}
          className="text-white flex items-center justify-center gap-4 text-xs"
        >
          {" "}
          <FaCode size={20} color="#fff" />
          Skills
        </NavLink>
        <NavLink
          to="/projects"
          onClick={onClose}
          className="text-white flex items-center justify-center gap-4 text-xs"
        >
          {" "}
          <FaUser size={20} color="#fff" /> Projects
        </NavLink>

        <NavLink
          to="/contact"
          onClick={onClose}
          className="text-white flex items-center justify-center gap-4 text-xs"
        >
          {" "}
          <FaEnvelope size={20} color="#fff" /> Contact
        </NavLink>
      </nav>

      <div className="flex justify-center border-t border-slate-600 pt-6 w-[90%]  mx-auto">
        <button className="w-60 h-12 border border-stone-500 text-white text-xs">
          Let's talk
        </button>
      </div>

      <nav
        aria-label="Social-links"
        className="flex flex-col items-start w-[90%] mx-auto justify-between h-12 pb-8 gap-4 border-t border-slate-600 pt-6"
      >
        <a
          href="https://github.com/Aikaykalu17"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white flex items-center gap-4 text-xs"
        >
          {" "}
          <FaGithub size={20} color="#fff" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ikechukwu-kalu-amogu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white flex items-center  gap-4 text-xs"
        >
          <FaLinkedin size={20} color="#fff" />
          LinkedIn
        </a>
        <a
          href="mailto:ikegod4luv@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white flex items-center gap-4 text-xs"
        >
          <SiGmail size={20} color="#fff" />
          Email
        </a>
      </nav>

      <footer className="w-[90%] mx-auto mt-20 border-t border-slate-600 pt-6">
        <p className="text-neutral-400  text-xs w-max">
          © <span>{year}</span> Ikechukwu Kalu Amogu. <br /> All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default Hamburger;
