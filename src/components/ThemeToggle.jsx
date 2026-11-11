import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle({ className = "" }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-surface ${className}`}
    >
      {isDark ? <HiOutlineSun size={20} aria-hidden="true" /> : <HiOutlineMoon size={20} aria-hidden="true" />}
    </button>
  );
}

export default ThemeToggle;
