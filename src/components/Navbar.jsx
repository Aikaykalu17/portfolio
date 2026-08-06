import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import darkLogo from "../assets/darkLogo.svg";
import whiteLogo from "../assets/whiteLogo.svg";

import "../components/Navstyle.css";
import Hamburger from "./Hamburger";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  // Disables homepage scrolling whenever open is true.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  function handleClick() {
    setOpen((open) => !open);
  }

  const phone = "2348101375140";
  const message = "Hi! I saw your portfolio and would like to chat.";
  const mobileMenuId = "mobile-navigation";

  return (
    <nav className="relative z-20 flex h-12  w-[90%] items-center justify-between  ">
      <div className="flex items-center">
        <img
          src={open ? whiteLogo : darkLogo}
          alt={open ? "white logo" : "dark logo"}
          className="h-6 w-auto object-contain z-40"
        />
      </div>

      <ul className="hidden md:block">
        <li className="flex items-center justify-center md:gap-4 xl:gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm py-1 ${isActive ? "border-y-2 border-black" : "hover:border-y-2 hover:border-black"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm py-1 ${isActive ? "border-y-2 border-black" : "hover:border-y-2 hover:border-black"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/techstack"
            className={({ isActive }) =>
              `text-sm py-1 ${isActive ? "border-y-2 border-black" : "hover:border-y-2 hover:border-black"}`
            }
          >
            Tech Stack
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-sm py-1 ${isActive ? "border-y-2 border-black" : "hover:border-y-2 hover:border-black"}`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm py-1 ${isActive ? "border-y-2 border-black" : "hover:border-y-2 hover:border-black"}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="flex text-center lg:flex items-center justify-center">
        <a
          href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 xl:w-36 md:w-32 text-white text-center bg-black text-xs hidden md:flex items-center justify-center gap-2 hover:bg-white hover:text-black md:hover:border md:hover:border-black transition-colors duration-300"
        >
          Let's Talk <FaWhatsapp size={15} />
        </a>
      </div>

      <div className="md:hidden">
        <button
          type="button"
          className={open ? "hamburger open" : "hamburger"}
          onClick={handleClick}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls={mobileMenuId}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div
        id={mobileMenuId}
        className={open ? "overlay" : "overlay active"}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <Hamburger onClose={handleClick} isOpen={open} />
      </div>
    </nav>
  );
}

export default Navbar;
