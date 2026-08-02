import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Typewriter({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index++;
      setDisplayedText(text.slice(0, index));

      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval); // cleanup on unmount
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      >
        |
      </motion.span>
    </span>
  );
}

export default Typewriter;
