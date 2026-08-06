import { FaWhatsapp, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import {
  HiOutlineEnvelope,
  HiOutlineChatBubbleLeftRight,
  HiOutlineArrowUpRight,
} from "react-icons/hi2";

function Contact() {
  const phone = "2348101375140";
  const message = "Hi! I saw your portfolio and would like to chat.";

  return (
    <section className="pt-4 md:h-full" id="contact">
      <div className="flex flex-col w-[90%] mx-auto border-t py-4 gap-4 md:h-full md:justify-between xl:h-dvh">
        <div className="flex flex-col justify-between gap-4 border-slate-200 md:h-full md:justify-around xl:flex xl:flex-row xl:justify-between">
          <div className="flex flex-col gap-6">
            <p className="font-bold text-black ">LETS CONNECT</p>
            <h1 className="text-3xl font-bold">
              Let's build something great together.
            </h1>
            <p className="text-stone-500 font-medium text-xs">
              I'm always open to discussing new projects, partnerships,or
              opportunities. <br /> Feel free to reach out!
            </p>

            <FaPaperPlane size={50} />
          </div>

          <div className="flex flex-col gap-4 ">
            <h2 className="font-bold">Get in touch</h2>
            <p className="text-stone-500 font-medium text-xs">
              Choose the best way to reach me. I usually reply within 24 hours.
            </p>
            {/* Grid on large screens */}
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:justify-center">
              <div className="border border-slate-500 p-2 rounded-lg flex gap-4 items-center lg:flex lg:flex-col lg:items-start lg:py-4">
                <div className=" bg-slate-200 w-max h-max rounded-lg p-4">
                  <HiOutlineEnvelope size={20} title="Email" color="#6F55EF" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold">Email</h3>
                  <p className="text-stone-500 text-[0.6rem]">
                    Send me an Email anytime.
                  </p>
                  <p className="text-xs text-slate-800 font-medium">
                    ikegod4luv@gmail.com
                  </p>
                </div>
              </div>
              <div className="border border-slate-500 p-2 items-center rounded-lg flex gap-4 lg:flex lg:flex-col lg:items-start lg:py-4">
                <div className=" bg-slate-200 w-max h-max rounded-lg p-4">
                  <FaWhatsapp size={20} title="WhatsApp" color="#6F55EF" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold">WhatsApp</h3>
                  <p className="text-stone-500 text-[0.6rem]">
                    Chat with me on WhatsApp.
                  </p>
                  <p className="text-xs text-slate-800 font-medium">
                    +2348101375140
                  </p>
                </div>
              </div>
              <div className="border border-slate-500 p-2 items-center rounded-lg flex gap-4 lg:flex lg:flex-col lg:items-start lg:py-4">
                <div className=" bg-slate-200 w-max h-max rounded-lg p-4">
                  <FaLinkedin size={20} title="LinkedIn" color="#6F55EF" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold">LinkedIn</h3>
                  <p className="text-stone-500 text-[0.6rem]">
                    Let's connect professionally.
                  </p>
                  <p className="text-xs text-slate-800 font-medium">
                    ikechukwu.kalu.amogu
                  </p>
                </div>
              </div>
              <div className="border border-slate-500 p-2 items-center rounded-lg flex gap-4 lg:flex lg:flex-col lg:items-start lg:py-4">
                <div className=" bg-slate-200 w-max h-max rounded-lg p-4">
                  <FaGithub size={20} title="Github" color="#6F55EF" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold">GitHub</h3>
                  <p className="text-stone-500 text-[0.6rem]">
                    Check out my projects.
                  </p>
                  <p className="text-xs text-slate-800 font-medium">
                    github.com/Aikaykalu17
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center px-4 h-40 bg-slate-100 lg:flex lg:flex-row lg:justify-between w-full lg:h-32 rounded-lg lg:px-20">
          <div className="flex items-center gap-4">
            <HiOutlineChatBubbleLeftRight size={50} color="#6F55EF " />
            <div className="flex flex-col">
              <h4 className="font-bold">Have a project idea?</h4>
              <p className="text-stone-500 font-medium text-xs">
                I'd love to hear about it and how I can help.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full h-10  bg-black text-white items-center justify-center text-xs rounded-lg gap-2 lg:h-10 lg:w-36 hover:bg-white hover:text-black md:hover:border md:hover:border-black transition-colors duration-300"
            >
              Let's Talk <HiOutlineArrowUpRight title="Arrow Right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
