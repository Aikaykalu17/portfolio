import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import whiteLogo from "../assets/whiteLogo.svg";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full flex items-center justify-center h-full bg-black">
      <div className="w-[90%] h-40 flex flex-col justify-center gap-2">
        <img src={whiteLogo} alt="White logo" className="flex self-start" />
        <div className="flex flex-col justify-center gap-4 items-center">
          <nav className="flex gap-6" aria-label="Social-links">
            <a
              href="https://github.com/Aikaykalu17"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaGithub size={20} color="#fff" />
            </a>
            <a
              href="https://www.linkedin.com/in/ikechukwu-kalu-amogu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} color="#fff" />
            </a>
            <a
              href="mailto:ikegod4luv@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail size={20} color="#fff" />
            </a>
          </nav>
          <p className="text-neutral-400  text-xs">
            © <span>{year}</span> Ikechukwu Kalu Amogu. <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
