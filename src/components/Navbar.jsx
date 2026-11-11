import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineEnvelope, HiOutlineArrowUpRight } from "react-icons/hi2";

import ThemeToggle from "./ThemeToggle";
import ResumeButton from "./ResumeButton";
import { navLinks, site, whatsappUrl } from "../data/site";

function Logo({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label={`${site.name} — home`}
      className="font-display text-[15px] font-extrabold tracking-tight text-ink"
    >
      {site.shortName}
    </Link>
  );
}

function Burger({ open, onClick, controls, buttonRef }) {
  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls={controls}
      data-burger=""
      className="relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-surface lg:hidden"
    >
      <span className="sr-only">{open ? "Close" : "Menu"}</span>
      <span aria-hidden="true" className="relative block h-3 w-5">
        <span
          className={`absolute left-0 h-[1.5px] w-full rounded bg-ink transition-all duration-300 ${
            open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
          }`}
        />
        <span
          className={`absolute left-0 h-[1.5px] w-full rounded bg-ink transition-all duration-300 ${
            open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
          }`}
        />
      </span>
    </button>
  );
}

function MobileMenu({ open, onClose }) {
  const reduce = useReducedMotion();
  const panelRef = useRef(null);

  // Escape to close + keep Tab focus inside the menu.
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const focusables = () =>
      panel
        ? [...panel.querySelectorAll("a[href], button:not([disabled])")]
        : [];
    focusables()[0]?.focus();

    function onKey(e) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      // The pill's burger button sits outside the panel, so include it in the loop.
      const burger = document.querySelector("[data-burger]");
      const all = burger ? [burger, ...items] : items;
      const first = all[0];
      const last = all[all.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.25 }}
          className="fixed inset-0 z-40 overflow-y-auto bg-bg/95 backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto flex min-h-full w-full max-w-xl flex-col px-6 pb-8 pt-28 md:px-8 md:pt-32">
            <nav aria-label="Main">
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduce ? 0 : 0.05 + i * 0.04, duration: 0.3 }}
                    className="border-b border-line first:border-t"
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `flex min-h-16 items-center justify-between font-display text-3xl font-semibold tracking-tight transition-colors md:text-4xl ${
                          isActive ? "text-ink" : "text-muted hover:text-ink"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {link.label}
                          {isActive && (
                            <span
                              aria-hidden="true"
                              className="h-2 w-2 rounded-full bg-ink"
                            />
                          )}
                        </>
                      )}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 flex flex-col gap-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary min-h-12 w-full"
              >
                <FaWhatsapp size={18} aria-hidden="true" />
                Let&rsquo;s talk on WhatsApp
                <span className="sr-only"> (opens in a new tab)</span>
              </a>

              <ResumeButton variant="ghost" className="min-h-12 w-full" />

              <div className="flex items-center gap-2">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub (opens in a new tab)"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition hover:bg-surface"
                >
                  <FaGithub size={18} aria-hidden="true" />
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn (opens in a new tab)"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition hover:bg-surface"
                >
                  <FaLinkedin size={18} aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${site.email}`}
                  aria-label="Email"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition hover:bg-surface"
                >
                  <HiOutlineEnvelope size={20} aria-hidden="true" />
                </a>
              </div>
            </div>

            <p className="mt-auto pt-10 text-sm text-muted">
              &copy; {new Date().getFullYear()} {site.name}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const burgerRef = useRef(null);
  const reduce = useReducedMotion();

  // Close the menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Lock page scroll while the menu is open.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Close if the viewport grows into the desktop layout.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function close() {
    setOpen(false);
    burgerRef.current?.focus();
  }

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-[max(1rem,env(safe-area-inset-top))]">
        <div
          className={`pointer-events-auto flex h-14 items-center gap-1 rounded-full border bg-bg/80 pl-5 pr-2 backdrop-blur-xl transition-shadow duration-300 max-lg:w-full max-lg:max-w-md max-lg:justify-between md:max-lg:max-w-lg lg:pl-6 ${
            scrolled || open
              ? "border-line shadow-[0_8px_30px_-12px_rgb(0_0_0/0.25)]"
              : "border-line"
          }`}
        >
          <Logo onClick={() => setOpen(false)} />

          {/* Desktop links */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="mx-6 flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `relative block rounded-full px-3.5 py-2 text-sm xl:px-4 transition-colors ${
                        isActive ? "text-on-inverse" : "text-muted hover:text-ink"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.span
                            layoutId="nav-active"
                            transition={
                              reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }
                            }
                            className="absolute inset-0 rounded-full bg-inverse"
                          />
                        )}
                        <span className="relative">{link.label}</span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 hidden min-h-10 items-center gap-1.5 rounded-full border border-line px-4 text-sm font-medium transition hover:bg-surface lg:inline-flex"
            >
              Let&rsquo;s talk
              <HiOutlineArrowUpRight size={14} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <Burger open={open} onClick={() => setOpen((o) => !o)} controls="mobile-menu" buttonRef={burgerRef} />
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={close} />
    </>
  );
}

export default Navbar;
