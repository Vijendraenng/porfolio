import { motion } from "framer-motion";
import {
  Code,
  Shield,
  CreditCard,
  Cloud,
  Smartphone,
  Server,
} from "lucide-react";

const highlights = [
  { icon: Shield, label: "Authentication & Authorization" },
  { icon: CreditCard, label: "Razorpay Payment Integration" },
  { icon: Cloud, label: "Cloudinary Media Management" },
  { icon: Server, label: "RESTful API Development" },
  { icon: Smartphone, label: "Responsive UI/UX Design" },
  { icon: Code, label: "Clean & Scalable Code" },
];

const About = () => {
  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4 text-center"
      >
        About <span className="text-cyan-400">Me</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-10 rounded-full"
      />
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 leading-8 text-lg"
        >
          Results-driven{" "}
          <span className="text-cyan-400 font-semibold">
            Full Stack Developer
          </span>{" "}
          specialized in MERN Stack development. I build secure, scalable, and
          high-performance web applications with a strong focus on clean
          architecture, seamless user experience, and real-world functionality —
          from payment integrations to cloud-based media handling.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map(({ icon: Icon, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-slate-800/60 border border-slate-700 rounded-xl p-4 hover:border-cyan-400 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-gray-200 font-medium">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 flex flex-wrap justify-center gap-4"
      >
        <img
          src="https://github-readme-stats.vercel.app/api?username=vijendraenng&show_icons=true&theme=transparent&hide_border=true&title_color=22d3ee&text_color=94a3b8&icon_color=22d3ee"
          alt="GitHub Stats"
          className="rounded-xl"
        />
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=vijendraenng&theme=transparent&hide_border=true&stroke=22d3ee&ring=22d3ee&fire=3b82f6&currStreakLabel=22d3ee"
          alt="GitHub Streak"
          className="rounded-xl"
        />
      </motion.div>
    </section>
  );
};

export default About;
