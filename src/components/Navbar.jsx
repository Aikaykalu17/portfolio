import { useState } from "react";

import darkLogo from "../assets/darkLogo.svg";
import whiteLogo from "../assets/whiteLogo.svg";

import "../components/Navstyle.css";
import Hamburger from "./Hamburger";

function Navbar() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen((open) => !open);
  }

  return (
    <nav className="relative z-20 flex h-12 w-[90%] items-center justify-between">
      <div className="flex items-center">
        <img
          src={open ? whiteLogo : darkLogo}
          alt={open ? "white logo" : "dark logo"}
          className="h-8 w-auto object-contain z-40"
        />
      </div>

      <ul className="hidden lg:block">
        <li className="flex items-center justify-center gap-8">
          <a href="#about" className="text-sm">
            About
          </a>
          <a href="#techstack" className="text-sm">
            Tech Stack
          </a>
          <a href="#projects" className="text-sm">
            Projects
          </a>
          <a href="#experience" className="text-sm">
            Experience
          </a>
          <a href="#contact" className="text-sm">
            Contact
          </a>
        </li>
      </ul>

      <div className="flex text-center lg:flex items-center justify-center">
        <button className="h-10 w-36 text-white text-center bg-black text-xs hidden lg:flex items-center justify-center hover:bg-white hover:text-black lg:hover:border lg:hover:border-black transition-colors duration-300">
          Let's Talk
        </button>
      </div>

      <div className="lg:hidden">
        <button
          className={open ? "hamburger open" : "hamburger"}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div
        className={open ? "overlay" : "overlay active"}
        onClick={handleClick}
      >
        <Hamburger />
      </div>
    </nav>
  );
}

export default Navbar;
