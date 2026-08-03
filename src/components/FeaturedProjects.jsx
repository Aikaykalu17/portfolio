import famiglia from "../assets/famiglia.webp";
import manageLanding from "../assets/manageLanding.webp";
import fastReactPizza from "../assets/fastReactPizza.webp";
import { Link } from "react-router-dom";

function FeaturedProjects() {
  return (
    <section className="w-full flex items-center justify-center border border-t border-#E5E7EB py-4">
      <div className="w-[90%] featured-projects flex flex-col gap-4">
        <span className="text-sm font-semibold text-neutral-600 ">
          FEATURED PROJECTS
        </span>
        <div className="flex items-center justify-center gap-4">
          <h2 className="font-semibold">Some Things I've Built</h2>
          <Link to="/projects" className="underline">
            View all projects &rarr;
          </Link>
        </div>
        <div className="flex gap-4">
          <a
            href="https://formatofamigliascs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start"
          >
            <img
              src={famiglia}
              alt="Formato Famiglia"
              className="hover:scale-105 transition-transform "
            />
          </a>
          <a
            href="https://manage-landing-webpage.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block"
          >
            <img
              src={manageLanding}
              alt="Manage Landing Page"
              className="hover:scale-105 transition-transform "
            />
          </a>
          <a
            href="https://fast-react-pizza-gold-one.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block"
          >
            <img
              src={fastReactPizza}
              alt="Fast React Pizza Page"
              className="hover:scale-105 transition-transform "
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
