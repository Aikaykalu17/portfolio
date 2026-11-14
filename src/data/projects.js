import famiglia from "../assets/famiglia.webp";
import fastReactPizza from "../assets/fastReactPizza.webp";
import productCart from "../assets/productCart.webp";
import weatherMockup from "../assets/weatherMockup.webp";
import ageCalculator from "../assets/ageCalculator.webp";
import eliteMockup from "../assets/eliteMockup.webp";
import forma from "../assets/forma.webp";
import goalLineTurfMockup from "../assets/goalLineTurfMockup.webp";

export const projects = [
  {
    id: 1,
    title: "GoalLine Turf",
    category: "Web Application",
    image: goalLineTurfMockup,
    link: "https://goal-line-self.vercel.app",
    description:
      "A full-featured turf booking platform for a private football facility in Abuja, Nigeria, built as a self-directed project to demonstrate production-ready, real-world functionality. The platform features a multi-step booking flow with live availability checking, private vs. open-to-others booking conflict detection, dynamic time-based pricing, promo codes, booking validation, downloadable and shareable confirmation tickets, and a role-based admin dashboard with real-time booking statistics and management tools. It also includes automated booking lifecycle email notifications powered by Resend, secure server-side validation, and responsive interfaces optimized for desktop and mobile.",
    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "Supabase",
      "Tailwind CSS",
      "Framer Motion",
      "Resend",
      "date-fns",
      "Headless UI",
      "Radix UI",
      "Font Awesome",
      "HTML2Canvas",
      "jsPDF",
      "Vercel",
    ],
  },
  {
    id: 2,
    title: "Formato Famiglia",
    category: "Website",
    image: famiglia,
    link: "https://formatofamigliascs.com/",
    description:
      "A WordPress site for an Italian social cooperative supporting migrants and families. Featuring multi-level navigation, news/resources section, and a multi-year event gallery",
    tech: ["WordPress", "CSS3"],
  },
  {
    id: 3,
    title: "Fast React Pizza",
    category: "Web Application",
    image: fastReactPizza,
    link: "https://fast-react-pizza-gold-one.vercel.app/",
    description:
      "An online pizza ordering app where customers browse the menu, build an order, and track it in real time from kitchen to doorstep",
    tech: ["React", "React Router", "Redux", "TailwindCSS"],
  },
  {
    id: 4,
    title: "Product Cart Mart",
    category: "Web Application",
    image: productCart,
    link: "https://product-cart-mart.netlify.app/",
    description:
      "A dessert shop product list with an interactive cart, live order total, and order confirmation flow.",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },

  {
    id: 5,
    title: "Weather App",
    category: "Web Application",
    image: weatherMockup,
    link: "https://app-weather-now.netlify.app/",
    description:
      "A weather-checking app with real-time search, daily/hourly forecast with customizable units (°C/°F, km/h/mph).",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 6,
    title: "Age Calculator",
    category: "Web Application",
    image: ageCalculator,
    link: "https://age-calcage.netlify.app/",
    description:
      "Enter your birth date and instantly see your exact age in years, months, and days",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 7,
    title: "Elite FC All Stars",
    category: "Website",
    image: eliteMockup,
    link: "https://elite-five-rouge.vercel.app/",
    description:
      "A full-featured concept website for a football academy in Abuja, Nigeria — built as a self-directed project to demonstrate real-world functionality including dynamic filtering, an interactive league table, a swipeable photo/video gallery with YouTube integration, and a complete registration system with automated email notifications via Resend.",
    tech: ["React", "Next.js", "TailwindCSS", "Radix UI", "Framer Motion"],
  },
  {
    id: 8,
    title: "Forma",
    category: "Website",
    image: forma,
    link: "https://forma-site-snowy.vercel.app/",
    description:
      "Forma is a fully responsive, multi-page marketing site for a fictional project-management SaaS, redesigned and rebranded from an earlier Frontend Mentor landing page challenge. It follows a conversion-focused structure, with a hero and primary call to action, a three-part feature section, a testimonial carousel, a closing call-to-action banner, and a footer with a newsletter signup, plus Product, Pricing, About, Careers, Community, Blog, Contact and Privacy pages that share a single header and footer. The site supports dark and light mode, following the visitor's system setting, remembering their choice and applying it before the page paints to avoid a flash. The testimonial slider is built on native CSS scroll-snap for smooth swipe and trackpad scrolling, with looping arrow buttons, dot navigation and keyboard support, and the sticky navbar includes a clickable logo and a hamburger menu that opens an accessible dropdown panel. The newsletter and contact forms validate input and show inline error messages for empty or invalid emails, while accessibility and performance get attention through semantic HTML, a skip link, visible focus styles, ARIA labels, reduced-motion support, a system font stack, inline SVG and lazy-loaded images. Built with HTML, CSS and vanilla JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export const categories = ["All", "Web Application", "Website", "Landing Page"];
