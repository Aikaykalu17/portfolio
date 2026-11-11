export const site = {
  name: "Ikechukwu Kalu Amogu",
  shortName: "Ikechukwu K.",
  email: "ikegod4luv@gmail.com",
  phone: "2348101375140",
  phoneDisplay: "+234 810 137 5140",
  github: "https://github.com/Aikaykalu17",
  githubHandle: "github.com/Aikaykalu17",
  linkedin: "https://www.linkedin.com/in/ikechukwu-kalu-amogu/",
  linkedinHandle: "ikechukwu-kalu-amogu",
  message: "Hi! I saw your portfolio and would like to chat.",
};

export const whatsappUrl = `https://wa.me/${site.phone}?text=${encodeURIComponent(site.message)}`;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/techstack", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export const resume = {
  href: "/Ikechukwu_Kalu_Amogu_CV.pdf",
  filename: "Ikechukwu_Kalu_Amogu_CV.pdf",
};
