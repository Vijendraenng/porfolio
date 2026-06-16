import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  Mail as MailIcon,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { sendContactMessage } from "../api/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      await sendContactMessage(formData);
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto px-5">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4 text-center"
      >
        Get In <span className="text-cyan-400">Touch</span>
      </motion.h2>

      {/* Underline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4 rounded-full"
      />

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-gray-400 text-center max-w-xl mx-auto mb-4"
      >
        Have a project in mind or just want to say hi? Fill out the form below
        and I'll get back to you as soon as possible.
      </motion.p>

      {/* Email Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.18 }}
        className="flex justify-center mb-12"
      >
        <a
          href="mailto:vijendra.nbj04@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
        >
          <MailIcon size={16} />
          vijendra.nbj04@gmail.com
        </a>
      </motion.div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="space-y-5 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-lg"
      >
        {/* Name & Email Row */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full pl-10 p-3 rounded-lg bg-slate-900/70 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-colors duration-300 text-gray-200 placeholder-gray-500"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full pl-10 p-3 rounded-lg bg-slate-900/70 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-colors duration-300 text-gray-200 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Message */}
        <div className="relative">
          <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-500" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            required
            className="w-full pl-10 p-3 rounded-lg bg-slate-900/70 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-colors duration-300 text-gray-200 placeholder-gray-500 resize-none"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={status === "sending" || status === "sent"}
          whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
          whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
          className={`w-full flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300
            ${
              status === "sent"
                ? "bg-green-500 text-white shadow-green-500/20 cursor-default"
                : status === "error"
                  ? "bg-red-500 hover:bg-red-400 text-white shadow-red-500/20"
                  : "bg-cyan-500 hover:bg-cyan-400 text-slate-900 shadow-cyan-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
            }`}
        >
          {status === "sending" ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              Sending...
            </span>
          ) : status === "sent" ? (
            <span className="flex items-center gap-2">✓ Message Sent!</span>
          ) : status === "error" ? (
            <span className="flex items-center gap-2">
              <Send size={18} />
              Try Again
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send size={18} />
              Send Message
            </span>
          )}
        </motion.button>

        {/* Success Message */}
        {status === "sent" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 justify-center bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-3"
          >
            <span className="text-green-400 text-sm">
              ✓ Thanks for reaching out! I'll get back to you soon.
            </span>
          </motion.div>
        )}

        {/* Error Message */}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 justify-center bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3"
          >
            <span className="text-red-400 text-sm">
              ✕ {errorMsg || "Something went wrong. Please try again."}
            </span>
          </motion.div>
        )}
      </motion.form>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-center gap-6 mt-10"
      >
        <a
          href="https://github.com/vijendraenng"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="mailto:vijendra.nbj04@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
        >
          <MailIcon size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
