import { portfolioData } from "../data";
import { motion } from "framer-motion";
import { Download, Briefcase, ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import ParticleBackground from "./ParticleBackground";
import resumePDF from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content — everything inside one centered div */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-5 relative z-10 max-w-3xl mx-auto"
      >
        {/* Welcome Badge */}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-sm font-medium"
        >
          👋 Welcome to my portfolio
        </motion.span>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-cyan-400 relative">
            {portfolioData.name}
            {/* Underline accent */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 origin-left rounded-full"
            />
          </span>
        </motion.h1>

        {/* Typing Animation — FIXED: moved inside motion.div */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6 h-10 flex items-center justify-center"
        >
          <TypeAnimation
            sequence={[
              "Software Developer", 2000,
              "MERN Stack Developer", 2000,
              "React Developer", 2000,
              "Full Stack Developer", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl font-semibold text-cyan-400"
          />
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-xl mx-auto text-gray-400 text-lg leading-relaxed mb-10"
        >
          {portfolioData.summary}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-lg font-medium text-slate-900 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/20"
          >
            <Briefcase size={18} />
            View Projects
          </a>
          <a
            href={resumePDF}
            download="Vijendra_Kumar_Resume.pdf"
            className="flex items-center gap-2 border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            <Download size={18} />
            Download Resume
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Hire Me
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 grid grid-cols-3 gap-4 max-w-sm mx-auto"
        >
          {[
            { value: "3+", label: "Projects" },
            { value: "1+", label: "Years Exp." },
            { value: "10+", label: "Technologies" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-2 text-center hover:border-cyan-400/50 transition-colors duration-300"
            >
              <p className="text-xl font-bold text-cyan-400">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500"
      >
        <span className="text-xs">Scroll down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          <ArrowDown size={16} className="text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
