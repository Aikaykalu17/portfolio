import { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFoundPage from "./components/NotFoundPage";

const TITLES = {
  "/": "Ikechukwu Kalu Amogu — Frontend Developer",
  "/about": "About — Ikechukwu Kalu Amogu",
  "/techstack": "Skills — Ikechukwu Kalu Amogu",
  "/projects": "Projects — Ikechukwu Kalu Amogu",
  "/contact": "Contact — Ikechukwu Kalu Amogu",
};

function App() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);
  const first = useRef(true);

  // On route change: reset scroll, update the title and move focus for screen readers.
  useEffect(() => {
    document.title = TITLES[pathname] ?? "Page not found — Ikechukwu Kalu Amogu";
    window.scrollTo({ top: 0, behavior: "instant" });
    if (first.current) {
      first.current = false;
      return;
    }
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname]);

  const isKnownRoute = pathname in TITLES;

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-inverse px-4 py-2 text-sm text-on-inverse focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" ref={mainRef} tabIndex={-1} className="min-h-screen pt-24 outline-none md:pt-28">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/techstack" element={<TechStack />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {isKnownRoute && <Footer />}
    </>
  );
}

export default App;
