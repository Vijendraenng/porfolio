import { motion } from "framer-motion";
import {
  Download,
  FileText,
  GraduationCap,
  Briefcase,
  Award,
} from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 max-w-6xl mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4 text-center"
      >
        My <span className="text-cyan-400">Resume</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12 rounded-full"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 text-center shadow-lg"
      >
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
          <FileText className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-2xl font-bold mb-3">
          Want to know more about my journey?
        </h3>

        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
          Download my resume to get a detailed overview of my skills,
          experience, education, and the projects I've worked on as a Software
          Developer.
        </p>

        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-4 rounded-lg shadow-lg shadow-cyan-500/20 transition-colors duration-300"
        >
          <Download size={20} />
          Download Resume
        </motion.a>

        <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-700">
          {[
            {
              icon: GraduationCap,
              label: "Education",
              value: "B.Tech / Degree",
            },
            {
              icon: Briefcase,
              label: "Experience",
              value: "Projects & Internships",
            },
            { icon: Award, label: "Specialization", value: "MERN Stack" },
          ].map(({ icon: Icon, label, value }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-700/70 flex items-center justify-center">
                <Icon className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-sm text-gray-400">{label}</span>
              <span className="text-base font-semibold text-white">
                {value}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
