import { portfolioData } from "../data";
import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench } from "lucide-react";

const categoryIcons = {
  frontend: Code2,
  backend: Server,
  database: Database,
  tools: Wrench,
};

const categoryColors = {
  frontend: "from-blue-500 to-cyan-400",
  backend: "from-purple-500 to-pink-400",
  database: "from-green-500 to-emerald-400",
  tools: "from-orange-500 to-amber-400",
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        My <span className="text-cyan-400">Skills</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(portfolioData.skills).map(
          ([category, skills], index) => {
            const Icon = categoryIcons[category] || Code2;
            const gradient =
              categoryColors[category] || "from-gray-500 to-gray-400";

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:border-slate-500 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-md`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-4 capitalize text-white">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-slate-700/70 text-gray-200 border border-slate-600 hover:bg-slate-600 hover:border-cyan-400 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          },
        )}
      </div>
    </section>
  );
};

export default Skills;
