import { FaUser, FaBriefcase, FaCode, FaEnvelope } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Hamburger() {
  const year = new Date().getFullYear();

  return (
    <div className="mt-4 pt-8 border-t border-slate-600 flex flex-col justify-between gap-4">
      <nav
        aria-label="Social-links"
        className="flex flex-col items-start w-[90%] mx-auto justify-between h-52 "
      >
        <a
          href="#about"
          className="text-white flex items-center justify-center gap-4"
        >
          {" "}
          <FaUser size={30} color="#fff" /> About
        </a>
        <a
          href="#techstack"
          className="text-white flex items-center justify-center gap-4"
        >
          {" "}
          <FaCode size={30} color="#fff" />
          Skills
        </a>
        <a
          href="#projects"
          className="text-white flex items-center justify-center gap-4"
        >
          {" "}
          <FaUser size={30} color="#fff" /> Projects
        </a>
        <a
          href="#experience"
          className="text-white flex items-center justify-center gap-4"
        >
          {" "}
          <FaBriefcase size={30} color="#fff" /> Experience
        </a>
        <a
          href="#contact"
          className="text-white flex items-center justify-center gap-4"
        >
          {" "}
          <FaEnvelope size={30} color="#fff" /> Contact
        </a>
      </nav>

      <div className="flex justify-center border-t border-slate-600 pt-6 w-[90%] h-36 mx-auto">
        <button className="w-60 h-12 border border-stone-500 text-white ">
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
          className="text-white flex items-center gap-4"
        >
          {" "}
          <FaGithub size={20} color="#fff" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ikechukwu-kalu-amogu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white flex items-center  gap-4"
        >
          <FaLinkedin size={20} color="#fff" />
          LinkedIn
        </a>
        <a
          href="mailto:ikegod4luv@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white flex items-center gap-4"
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
