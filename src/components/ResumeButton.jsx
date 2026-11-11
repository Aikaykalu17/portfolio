import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { resume } from "../data/site";

function ResumeButton({ variant = "primary", className = "" }) {
  const styles = {
    primary: "btn-primary min-h-12 px-7",
    ghost: "btn-ghost min-h-12 px-7",
    link: "inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-medium underline underline-offset-4 hover:opacity-70",
  };
  return (
    <a href={resume.href} download={resume.filename} className={`${styles[variant]} ${className}`}>
      <HiOutlineArrowDownTray size={18} aria-hidden="true" />
      Download resume
      <span className="sr-only"> (PDF)</span>
    </a>
  );
}

export default ResumeButton;
