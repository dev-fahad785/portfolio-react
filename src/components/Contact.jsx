
import { FaInstagram, FaGithub, FaLinkedin,FaTiktok } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import Heading from "./Heading";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <Heading
          heading="Contact Me"
          subHeading="Let's build something amazing together"
        />

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900/60">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            Open to junior software engineer, frontend, and full-stack roles.
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Based in Pakistan. Available for remote collaboration, internships, and entry-level engineering opportunities.
          </p>
          <a
            href="mailto:devfahad785@gmail.com"
            className="mt-5 inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Email Me
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-8">
          {/* Social Links Container */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/fahadgul.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-gray-50 dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              aria-label="Instagram"
            >
              <FaInstagram className="text-3xl text-gray-700 dark:text-gray-300 group-hover:text-[#E1306C] transition-colors duration-300" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/dev-fahad785"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-gray-50 dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <FaGithub className="text-3xl text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/fahad785"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-gray-50 dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-3xl text-gray-700 dark:text-gray-300 group-hover:text-[#0077B5] transition-colors duration-300" />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@fahadgul.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-gray-50 dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              aria-label="TikTok"
            >
              <FaTiktok className="text-3xl text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Email/Action CTA */}
        {/* <div className="text-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
           <a 
              href="mailto:contact@rfgul.live"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800 md:py-4 md:text-lg md:px-10 transition-transform hover:scale-105 shadow-lg"
           >
              Say Hello
           </a>
        </div> */}
      </div>
    </section>
  );
};


import SectionWrapper from './SectionWrapper';
export default SectionWrapper(Contact, "contact");
