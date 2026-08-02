import { useState } from "react";
import { Link } from "react-router-dom";

import darkLogo from "../assets/darkLogo.svg";
import whiteLogo from "../assets/whiteLogo.svg";

import "../components/Navstyle.css";
import Hamburger from "./Hamburger";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen((open) => !open);
  }

  const phone = "2348101375140";
  const message = "Hi! I saw your portfolio and would like to chat.";

  return (
    <nav className="relative z-20 flex h-12  w-[90%] items-center justify-between  ">
      <div className="flex items-center">
        <img
          src={open ? whiteLogo : darkLogo}
          alt={open ? "white logo" : "dark logo"}
          className="h-8 w-auto object-contain z-40"
        />
      </div>

      <ul className="hidden lg:block">
        <li className="flex items-center justify-center gap-8">
          <Link
            to="/about"
            className="text-sm hover:border-y-2 hover:border-black py-2"
          >
            About
          </Link>
          <Link
            to="/techstack"
            className="text-sm hover:border-y-2 hover:border-black py-2"
          >
            Tech Stack
          </Link>
          <Link
            to="/projects"
            className="text-sm hover:border-y-2 hover:border-black py-2"
          >
            Projects
          </Link>
          <Link
            to="/experience"
            className="text-sm hover:border-y-2 hover:border-black py-2"
          >
            Experience
          </Link>
          <Link
            to="/contact"
            className="text-sm hover:border-y-2 hover:border-black py-2"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="flex text-center lg:flex items-center justify-center">
        <a
          href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="h-10 w-36 text-white text-center bg-black text-xs hidden lg:flex items-center justify-center gap-2 hover:bg-white hover:text-black lg:hover:border lg:hover:border-black transition-colors duration-300">
            Let's Talk <FaWhatsapp size={15} />
          </button>
        </a>
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
