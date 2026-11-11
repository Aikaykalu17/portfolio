import { NavLink } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineEnvelope, HiOutlineArrowUp } from "react-icons/hi2";

import { navLinks, site } from "../data/site";
import ResumeButton from "./ResumeButton";

const socialClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-line transition duration-200 hover:-translate-y-0.5 hover:bg-surface motion-reduce:hover:translate-y-0";

function Footer() {
  const reduce = useReducedMotion();

  return (
    <footer className="mt-8 border-t border-line bg-surface">
      <div className="container-x flex flex-col gap-10 py-12 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <p className="font-display text-xl font-extrabold">{site.shortName}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Frontend developer crafting clean, responsive, user-friendly websites and web apps.
            </p>
            <ResumeButton variant="link" className="mt-4" />
          </div>

          <nav aria-label="Footer" className="md:max-w-md">
            <p className="mb-4 text-sm font-medium text-muted">Explore</p>
            <ul className="flex flex-wrap gap-2.5">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                  transition={{ duration: 0.4, delay: reduce ? 0 : i * 0.07, ease: "easeOut" }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) =>
                      `group relative inline-flex min-h-11 items-center overflow-hidden rounded-full border px-5 text-sm font-medium transition duration-200 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 ${
                        isActive
                          ? "border-transparent bg-inverse text-on-inverse"
                          : "border-line bg-bg text-ink hover:border-ink"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {!isActive && (
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 origin-left scale-x-0 rounded-full bg-inverse transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                          />
                        )}
                        <span
                          className={`relative transition-colors duration-300 ${
                            isActive ? "" : "group-hover:text-on-inverse"
                          }`}
                        >
                          {l.label}
                        </span>
                      </>
                    )}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className={socialClass}>
              <FaGithub size={18} aria-hidden="true" />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className={socialClass}>
              <FaLinkedin size={18} aria-hidden="true" />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email" className={socialClass}>
              <HiOutlineEnvelope size={20} aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className={`${socialClass} ml-2`}
            >
              <HiOutlineArrowUp size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
