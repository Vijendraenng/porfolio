import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../data";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-12 pb-6 px-5">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-cyan-400 mb-2">
          {portfolioData.name}
        </h3>
        <p className="text-gray-400 text-sm mb-6">Software Developer</p>

        <div className="flex gap-4 mb-8">
          <a
            href="https://github.com/vijendraenng"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/in/vijendraenng"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="mailto:vijendra.nbj04@gmail.com"
            aria-label="Email Vijendra Kumar"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-6" />

        <p className="text-gray-500 text-sm flex items-center gap-1.5">
          © 2026 {portfolioData.name} — Built with
          <Heart size={14} className="text-cyan-400 fill-cyan-400" />
          using React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
