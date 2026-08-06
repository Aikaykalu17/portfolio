import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import whiteLogo from "../assets/whiteLogo.svg";

function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const year = new Date().getFullYear();

  return (
    <footer className="w-full flex items-center justify-center h-40 bg-black flex-none">
      <div className="w-[90%] h-40 flex flex-col justify-center gap-4 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center items-center">
          <img src={whiteLogo} alt="White logo" className="flex self-start" />
          <p className="hidden lg:block text-neutral-400 text-xs">
            Frontend Developer crafting clean, <br /> responsive, user-friendly
            websites and web applications.{" "}
          </p>
        </div>

        <nav
          className="flex gap-6 lg:flex-col self-center"
          aria-label="Social-links"
        >
          <a
            href="https://github.com/Aikaykalu17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex items-center font-medium text-xs gap-4"
            aria-label="Visit my GitHub profile"
          >
            {" "}
            <FaGithub size={20} color="#fff" title="Github" />{" "}
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ikechukwu-kalu-amogu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex items-center font-medium text-xs gap-4"
            aria-label="Visit my LinkedIn profile"
          >
            <FaLinkedin size={20} color="#fff" title="LinkedIn" />{" "}
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="mailto:ikegod4luv@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex items-center font-medium text-xs gap-4"
            aria-label="Send me an email"
          >
            <SiGmail size={20} color="#fff" title="Email" />{" "}
            <span className="hidden sm:inline">Email</span>
          </a>
        </nav>

        <div className="flex gap-12 justify-around items-center ">
          <div>
            <p className="text-neutral-400  text-xs">
              © <span>{year}</span> Ikechukwu Kalu Amogu. <br />
              All rights reserved.
            </p>
          </div>
          <button
            type="button"
            className="w-8 h-8 border border-white rounded-full flex items-center justify-center self-center"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <FaArrowUp color="#fff" size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
