import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-white tracking-tight">
              Ameer Suhail
            </h3>
            <p className="mt-1 text-neutral-400 text-sm">
              Web Developer · Fullstack Engineer
            </p>
            <p className="mt-2 text-neutral-500 text-sm">
              suhailgti12@gmail.com
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">

            <a
              href="https://www.linkedin.com/in/ameer-suhail-78aa40303/"
              target="_blank"
              aria-label="LinkedIn"
              className="group flex items-center justify-center w-11 h-11 
              rounded-full bg-neutral-900 border border-neutral-800 
              hover:border-purple-500/60 hover:bg-purple-500/10 transition-all"
            >
              <FaLinkedinIn className="text-lg text-neutral-300 group-hover:text-purple-400 transition" />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              aria-label="GitHub"
              className="group flex items-center justify-center w-11 h-11 
              rounded-full bg-neutral-900 border border-neutral-800 
              hover:border-purple-500/60 hover:bg-purple-500/10 transition-all"
            >
              <FaGithub className="text-lg text-neutral-300 group-hover:text-purple-400 transition" />
            </a>

            <a
              href="mailto:suhailgti12@gmail.com"
              aria-label="Email"
              className="group flex items-center justify-center w-11 h-11 
              rounded-full bg-neutral-900 border border-neutral-800 
              hover:border-purple-500/60 hover:bg-purple-500/10 transition-all"
            >
              <HiOutlineMail className="text-xl text-neutral-300 group-hover:text-purple-400 transition" />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="group flex items-center justify-center w-11 h-11 
              rounded-full bg-neutral-900 border border-neutral-800 
              hover:border-purple-500/60 hover:bg-purple-500/10 transition-all"
            >
              <FaInstagram className="text-lg text-neutral-300 group-hover:text-purple-400 transition" />
            </a>

          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Ameer Suhail. Crafted with precision.
        </div>

      </div>
    </footer>
  );
}
