const nodemailer = require("nodemailer");

// Debug — print to confirm env is loaded
console.log("📧 Email User:", process.env.EMAIL_USER);
console.log(
  "🔑 Email Pass:",
  process.env.EMAIL_PASS ? "✅ Loaded" : "❌ Missing",
);

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("❌ EMAIL_USER or EMAIL_PASS missing in .env");
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error("❌ Email transporter error:", error.message);
  } else {
    console.log("✅ Email transporter ready");
  }
});

module.exports = transporter;
