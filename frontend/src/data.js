export const portfolioData = {
  name: "Vijendra Kumar",

  role: "Full Stack MERN Developer",

  summary:
    "Building Scalable Web Applications with React, Node.js and MongoDB.",

  skills: {
    frontend: [
      "React ⚛️",
      "Next.js ▲",
      "HTML5 🌐",
      "CSS3 🎨",
      "Tailwind 🌊",
      "Bootstrap 🅱️",
    ],

    backend: ["Node.js 🚀", "Express ⚡", "REST APIs 🔗", "Socket.IO 🔌"],

    database: ["MongoDB 🍃", "Mongoose 🧩", "PostgreSQL 🐘"],

    tools: ["Git 🌳", "GitHub 🐙", "Postman 📮", "VS Code 💻"],
  },

  projects: [
    {
      title: "Prescripto",
      description:
        "Built a Doctor Appointment System with secure JWT authentication, online payments using Razorpay, and image management through Cloudinary. The platform allows users to book appointments, manage profiles, and make seamless payments in real time.",
      tech: ["React ⚛️", "Node.js 🚀", "MongoDB 🍃", "JWT 🔐", "Razorpay 💳"],
      github:
        "https://github.com/Vijendraenng/Doctor-appointment-full-stack-app",
      live: "https://doctor-appointment-full-frontend.onrender.com",
    },
    {
      title: "Skribbl Clone",
      description:
        "Real-time multiplayer drawing and guessing game. Players draw words on a shared canvas while others guess in live chat. Features public rooms, invite links, speed-based scoring, progressive hints, and page-refresh reconnection.",
      tech: [
        "React ⚛️",
        "TypeScript 🔷",
        "Node.js 🚀",
        "Socket.IO 🔌",
        "PostgreSQL 🐘",
        "Tailwind 🌊",
      ],
      github: "https://github.com/Vijendraenng/skribbl.io-clone",
      live: "https://skribbl-io-clone-px77.vercel.app/",
    },
  ],
};
