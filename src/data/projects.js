import famiglia from "../assets/famiglia.webp";
import fastReactPizza from "../assets/fastReactPizza.webp";
import productCart from "../assets/productCart.webp";
import vane from "../assets/vane.webp";
import dayform from "../assets/dayform.webp";
import elite from "../assets/elite.webp";
import forma from "../assets/forma.webp";
import goalLine from "../assets/goalLine.webp";
import matchHub from "../assets/matchHub.jpg";

export const projects = [
  {
    id: 1,
    title: "MatchHub: Post a match. Find an opponent. Share the result.",
    category: "Web Application",
    image: matchHub,
    link: "https://match-hub-three.vercel.app/",
    description:
      "MatchHub is a football match coordination platform built to make it easier for teams to find opponents, organise games, and keep track of results. Teams can create matches with their venue, kickoff time and team details, then share them with other teams who can join using a secure access code. Once an opponent joins, the match moves from “Waiting for an opponent” to “Game On!”. After the game, either team can submit the result, with a 48-hour window for corrections. MatchHub also includes previous and saved matches, match sharing, private contact details, responsive layouts, and light/dark themes. Built with Next.js and React, the app uses Supabase and PostgreSQL for data storage, bcryptjs for secure access-code hashing, Tailwind CSS for responsive styling, and Framer Motion for interface animations.",
    tech: [
      "Next.js",

      "React",

      "Supabase / PostgreSQL",

      "Tailwind CSS",

      "Framer Motion",

      "JavaScript",

      "bcryptjs",
    ],
  },
  {
    id: 2,
    title: "GoalLine Turf",
    category: "Web Application",
    image: goalLine,
    link: "https://goal-line-self.vercel.app",
    description:
      "A full-featured turf booking platform for a private football facility in Abuja, Nigeria, built as a self-directed project to demonstrate production-ready, real-world functionality. The platform features a multi-step booking flow with live availability checking, private vs. open-to-others booking conflict detection, dynamic time-based pricing, promo codes, booking validation, and downloadable and shareable confirmation tickets. Private bookings are secured with full online payment through Paystack: the slot is held while the customer pays and is confirmed only after the payment is verified server-side via webhook and callback checks. A transparent refund policy (a ₦500 charge, or as determined by management) is built into the booking policy, terms and privacy pages, and is shown to customers at the review step. A role-based admin dashboard provides real-time booking statistics, payment and refund management, and pricing, promo and settings controls. It also includes automated booking lifecycle email notifications powered by Resend, secure server-side validation, and responsive interfaces optimized for desktop and mobile, down to small 320px screens.",
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
    id: 3,
    title: "Formato Famiglia",
    category: "Website",
    image: famiglia,
    link: "https://formatofamigliascs.com/",
    description:
      "A WordPress site for an Italian social cooperative supporting migrants and families. Featuring multi-level navigation, news/resources section, and a multi-year event gallery",
    tech: ["WordPress", "CSS3"],
  },
  {
    id: 4,
    title: "Fast React Pizza",
    category: "Web Application",
    image: fastReactPizza,
    link: "https://fast-react-pizza-gold-one.vercel.app/",
    description:
      "An online pizza ordering app where customers browse the menu, build an order, and track it in real time from kitchen to doorstep",
    tech: ["React", "React Router", "Redux", "TailwindCSS"],
  },
  {
    id: 5,
    title: "Product Cart Mart",
    category: "Web Application",
    image: productCart,
    link: "https://product-cart-mart.netlify.app/",
    description:
      "A dessert shop product list with an interactive cart, live order total, and order confirmation flow.",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },

  {
    id: 6,
    title: "Vane: Weather, Hour by Hour",
    category: "Web Application",
    image: vane,
    link: "https://vane-ochre.vercel.app/",
    description:
      "Vane is a weather app I rebuilt from a Frontend Mentor challenge into a full product. The hero panel changes colour and animation with the conditions, from amber sun to rainy slate to a starry night. Underneath it you get an interactive hourly chart with a “best window outside” highlight, a 7-day forecast, air quality, a sun and moon card, and saved places with live temperatures. It has light, dark and auto themes, a centred floating nav pill with an animated mobile menu, search with autocomplete, and “use my location”. It is fully responsive, keyboard and screen-reader friendly, respects reduced motion, and loads instantly from cache on repeat visits. It’s built with vanilla JavaScript ES modules, hand-drawn SVG charts and icons, and the Open-Meteo API, with no frameworks, build step or API keys.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript (ES modules)",
      "Open-Meteo API",
      "SVG",
      "Accessibility",
      "Responsive design",
    ],
  },
  {
    id: 7,
    title: "Dayform",
    category: "Web Application",
    image: dayform,
    link: "https://day-form.vercel.app/index.html",
    description:
      "Dayform is a privacy-first age and milestone app that turns a simple age calculator into a clearer picture of the time you’ve lived and the moments ahead. Enter your date of birth and Dayform shows your exact age in years, months and days, the total days, weeks and hours you’ve lived, and a countdown to your next birthday. A “This year, so far” card visualises the year as 52 weekly dots with an animated progress bar, and a cosmic season card gives a full star-sign profile with element, ruling planet, traits and pairings. A milestones page generates the age landmarks still to come and lets you add, filter and delete personal dates, with undo. Everything is calculated and saved on the user’s device, so there are no accounts, no tracking and no server. Dayform also includes a floating navigation pill and full-screen mobile menu, a Quick jump command palette (Ctrl/⌘ K), light and dark themes with no flash on load, responsive layouts, and reduced-motion support. It’s built with semantic HTML, hand-written CSS and vanilla JavaScript ES modules, with self-hosted Poppins fonts, browser local storage for persistence, and no build step or third-party runtime dependencies.",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 8,
    title: "Elite FC All Stars",
    category: "Website",
    image: elite,
    link: "https://elite-five-rouge.vercel.app/",
    description:
      "A full-featured concept website for a football academy in Abuja, Nigeria — built as a self-directed project to demonstrate real-world functionality including dynamic filtering, an interactive league table, a swipeable photo/video gallery with YouTube integration, and a complete registration system with automated email notifications via Resend.",
    tech: ["React", "Next.js", "TailwindCSS", "Radix UI", "Framer Motion"],
  },
  {
    id: 9,
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
