import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiReactquery,
  SiJavascript,
  SiRedux,
  SiFramer,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const techGroups = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript, note: "Interactive, dynamic experiences." },
      { name: "TypeScript", icon: SiTypescript, note: "Type safety for larger codebases." },
      { name: "HTML5", icon: FaHtml5, note: "Semantic, accessible markup." },
      { name: "CSS3", icon: FaCss3Alt, note: "Responsive, carefully styled interfaces." },
    ],
  },
  {
    title: "Frameworks & libraries",
    items: [
      { name: "React", icon: FaReact, note: "Component-based user interfaces." },
      { name: "Next.js", icon: SiNextdotjs, note: "The React framework for production." },
      { name: "Tailwind CSS", icon: SiTailwindcss, note: "Utility-first styling." },
      { name: "React Query", icon: SiReactquery, note: "Data fetching and caching." },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, note: "Version control and collaboration." },
      { name: "GitHub", icon: FaGithub, note: "Hosting repositories and code review." },
      { name: "VS Code", icon: VscVscode, note: "My editor of choice." },
      { name: "Figma", icon: FaFigma, note: "Designing and prototyping interfaces." },
    ],
  },
];

export const heroTech = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Redux", icon: SiRedux },
  { name: "React Query", icon: SiReactquery },
  { name: "Framer Motion", icon: SiFramer },
];
