import { portfolioData } from "../data";
import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench } from "lucide-react";

const categoryIcons = {
  frontend: Code2,
  backend: Server,
  database: Database,
  tools: Wrench,
};
const skillBars = [
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Express.js", level: 78 },
];

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
                // Inside your Skills section add this below the cards:
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Proficiency <span className="text-cyan-400">Levels</span>
                  </h3>
                  <div className="space-y-4 max-w-2xl mx-auto">
                    {skillBars.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex justify-between mb-1.5">
                          <span className="text-gray-200 text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-cyan-400 text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: index * 0.1,
                              ease: "easeOut",
                            }}
                            className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
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
