import { portfolioData } from "../data";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4 text-center"
      >
        My <span className="text-cyan-400">Projects</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12 rounded-full"
      />

      <div className="grid md:grid-cols-2 gap-8">
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -8 }}
            className="group bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:border-cyan-400/50 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shrink-0 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
            </div>

            <p className="text-gray-300 leading-7 mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm rounded-full bg-slate-700/70 text-gray-200 border border-slate-600 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-300 transition-colors duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-4 border-t border-slate-700">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-sm"
              >
                <FaGithub size={18} />
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-sm"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
