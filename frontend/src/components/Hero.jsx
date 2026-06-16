import { portfolioData } from "../data";
import { motion } from "framer-motion";
import { Download, Briefcase } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-5 relative z-10"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-sm font-medium"
        >
          👋 Welcome to my portfolio
        </motion.span>

        <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Hi, I'm{" "}
          <span className="text-cyan-400">{portfolioData.name}</span>
        </h2>

        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
          Software Developer
        </h3>

        <p className="max-w-xl mx-auto text-gray-400 text-lg leading-relaxed">
          {portfolioData.summary}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-lg font-medium text-slate-900 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/20"
          >
            <Briefcase size={18} />
            View Projects
          </a>

          <a
            href="https://drive.google.com/file/d/1Sw80Lizo8snDcb9rvoJYCKesGXL-socO/view?usp=drivesdk"
            download
            className="flex items-center gap-2 border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            <Download size={18} />
            Download Resume
          </a>

          <a
            href="#contact"
            className="border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Hire Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
