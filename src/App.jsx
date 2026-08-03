import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import useHeaderVisibility from "./hooks/useHeaderVisibility";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  const { showHeader, targetRef } = useHeaderVisibility();

  const location = useLocation();

  const isKnownRoute = [
    "/",
    "/about",
    "/techstack",
    "/projects",
    "/contact",
  ].includes(location.pathname);

  return (
    <>
      <AnimatePresence>
        {showHeader && isKnownRoute && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
          </motion.div>
        )}
      </AnimatePresence>

      <main className="bg-white w-[95%] mx-auto pt-4 flex flex-col gap-8 lg:w-full lg:gap-8 border-t border-[#E5E7EB]">
        <div ref={targetRef}></div> {/* invisible marker */}
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
