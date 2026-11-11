import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineEnvelope, HiOutlineArrowUpRight } from "react-icons/hi2";

import PageHeader from "./PageHeader";
import ResumeButton from "./ResumeButton";
import { site, whatsappUrl } from "../data/site";

const channels = [
  {
    icon: HiOutlineEnvelope,
    title: "Email",
    note: "Send me an email anytime.",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    note: "Chat with me directly.",
    value: site.phoneDisplay,
    href: whatsappUrl,
    external: true,
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    note: "Let’s connect professionally.",
    value: site.linkedinHandle,
    href: site.linkedin,
    external: true,
  },
  {
    icon: FaGithub,
    title: "GitHub",
    note: "Browse my code.",
    value: site.githubHandle,
    href: site.github,
    external: true,
  },
];

function Contact() {
  return (
    <section className="container-x pb-16 pt-6 md:pb-24 md:pt-10">
      <PageHeader title="Let’s build something great together.">
        I&rsquo;m open to new projects, partnerships and opportunities. Pick whatever
        is easiest for you. I usually reply within 24 hours.
      </PageHeader>

      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {channels.map(({ icon: Icon, title, note, value, href, external }) => (
          <li key={title}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="card group flex h-full items-center gap-4 p-5 transition hover:bg-raised md:p-6"
            >
              <span
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-bg"
              >
                <Icon size={22} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-lg font-bold">{title}</span>
                <span className="block text-sm text-muted">{note}</span>
                <span className="mt-1 block break-words text-[15px] font-medium">{value}</span>
              </span>
              <HiOutlineArrowUpRight
                size={20}
                aria-hidden="true"
                className="shrink-0 text-muted transition group-hover:text-ink"
              />
              {external && <span className="sr-only">(opens in a new tab)</span>}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center md:p-8">
        <div>
          <h2 className="text-xl font-bold">Want the full picture?</h2>
          <p className="mt-1 text-muted">Download my CV for experience, skills and education.</p>
        </div>
        <ResumeButton variant="ghost" className="w-full sm:w-auto" />
      </div>

      <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-3xl bg-inverse p-6 text-on-inverse md:flex-row md:items-center md:p-10">
        <div>
          <h2 className="text-2xl font-bold">Have a project idea?</h2>
          <p className="mt-1 opacity-70">I&rsquo;d love to hear about it and how I can help.</p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn min-h-12 w-full bg-bg px-8 text-ink hover:opacity-90 md:w-auto"
        >
          Let&rsquo;s talk
          <HiOutlineArrowUpRight size={16} aria-hidden="true" />
          <span className="sr-only">(opens WhatsApp in a new tab)</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
