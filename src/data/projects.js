import famiglia from "../assets/famiglia.webp";
import manageLanding from "../assets/ManageLanding.webp";
import fastReactPizza from "../assets/fastReactPizza.webp";
import productCart from "../assets/productCart.webp";
import weatherMockup from "../assets/weatherMockup.webp";
import ageCalculator from "../assets/ageCalculator.webp";
import wildOasis from "../assets/wildOasis.webp";

export const projects = [
  {
    id: 1,
    title: "Manage Landing Page",
    category: "Landing Pages",
    image: manageLanding,
    link: "https://manage-landing-webpage.netlify.app/",
    description: "A responsive marketing site for a team productivity tool.",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 2,
    title: "Formato Famiglia",
    category: "Other",
    image: famiglia,
    link: "https://formatofamigliascs.com/",
    description:
      "A WordPress site for an Italian social coorperative supporting migrants and families. Featuring multi-level navigation, news/resources section, and a multi-year event gallery",
    tech: ["WordPress, CSS3"],
  },
  {
    id: 3,
    title: "Fast React Pizza",
    category: "Web Application",
    image: fastReactPizza,
    link: "https://fast-react-pizza-gold-one.vercel.app/",
    description:
      "An online pizza ordering app where customers browse the menu, build an order, and tract it in real time from kitchen to doorstep",
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
      "A weather-checking app with real-time search, daily/hourly forecast with customizable units (⁰C/⁰F, km/h/mph)..",
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
    title: "The Wild Oasis",
    category: "Web Application",
    image: wildOasis,
    link: "https://the-wild-oasis-eight-gilt.vercel.app/",
    description:
      "WildOasis is a full-stack booking platform for cabin rentals. It allows users to browse cabins, make sure bookings, and manage their reservations. It also includes an admin dashboard for managing cabins, bookings, and users.",
    tech: ["React", "React Query", "Supabase", "Styled Components"],
  },
];
