import { NavLink } from "react-router-dom";

import {
  FaUser,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Hamburger({ onClose, isOpen }) {
  const year = new Date().getFullYear();

  const phone = "2348101375140";
  const message = "Hi! I saw your portfolio and would like to chat.";

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Main navigation"
      aria-hidden={!isOpen}
      className="mt-4 pt-4 border-t border-slate-600 flex flex-col  gap-4 w-[90%] mx-auto h-[calc(100dvh-6rem)] justify-between"
    >
      <nav
        aria-label="Social-links"
        className="flex flex-col items-start  justify-between h-auto gap-6 "
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

      <div className="flex items-center justify-center border-t border-slate-600 pt-4">
        <a
          href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-60 h-12 border border-stone-500 text-white text-sm flex items-center justify-center gap-4"
        >
          Let's Talk <FaWhatsapp size={20} />
        </a>
      </div>

      <nav
        aria-label="Social-links"
        className="flex flex-col items-start justify-between h-auto gap-4 border-t border-slate-600 pt-6"
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

      <footer className="border-t border-slate-600 pt-6">
        <p className="text-neutral-400  text-xs w-max">
          © <span>{year}</span> Ikechukwu Kalu Amogu. <br /> All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default Hamburger;
