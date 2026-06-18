const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const transporter = require("../config/mailer");

// Helper — email to YOU
const ownerEmailOptions = (name, email, message) => ({
  from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,
  subject: `📬 New Message from ${name}`,
  html: `
    <div style="
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: auto;
      background: #0f172a;
      color: #e2e8f0;
      border-radius: 16px;
      overflow: hidden;
    ">
      <div style="
        background: linear-gradient(135deg, #06b6d4, #3b82f6);
        padding: 32px 24px;
        text-align: center;
      ">
        <h1 style="margin: 0; color: #fff; font-size: 24px;">
          📬 New Portfolio Message
        </h1>
      </div>

      <div style="padding: 32px 24px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #94a3b8; width: 80px;">Name</td>
            <td style="padding: 10px 0; color: #f1f5f9; font-weight: bold;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #94a3b8;">Email</td>
            <td style="padding: 10px 0;">
              <a href="mailto:${email}" style="color: #22d3ee;">${email}</a>
            </td>
          </tr>
        </table>

        <div style="margin-top: 20px;">
          <p style="color: #94a3b8; margin-bottom: 8px;">Message</p>
          <div style="
            background: #1e293b;
            border-left: 4px solid #22d3ee;
            border-radius: 8px;
            padding: 16px;
            color: #e2e8f0;
            line-height: 1.6;
          ">${message}</div>
        </div>

        <div style="margin-top: 24px; text-align: center;">
          <a href="mailto:${email}" style="
            display: inline-block;
            background: linear-gradient(135deg, #06b6d4, #3b82f6);
            color: #fff;
            padding: 12px 28px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: bold;
          ">Reply to ${name}</a>
        </div>
      </div>

      <div style="
        padding: 16px 24px;
        text-align: center;
        border-top: 1px solid #1e293b;
        color: #475569;
        font-size: 12px;
      ">
        Received from your portfolio contact form • ${new Date().toLocaleString()}
      </div>
    </div>
  `,
});

// Helper — confirmation email to SENDER
const senderEmailOptions = (name, email, message) => ({
  from: `"Vijendra Kumar" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "✅ Got your message — I'll be in touch soon!",
  html: `
    <div style="
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: auto;
      background: #0f172a;
      color: #e2e8f0;
      border-radius: 16px;
      overflow: hidden;
    ">
      <div style="
        background: linear-gradient(135deg, #06b6d4, #3b82f6);
        padding: 32px 24px;
        text-align: center;
      ">
        <h1 style="margin: 0; color: #fff; font-size: 24px;">
          Thanks for reaching out! 👋
        </h1>
      </div>

      <div style="padding: 32px 24px;">
        <p style="color: #e2e8f0; font-size: 16px; line-height: 1.6;">
          Hey <strong style="color: #22d3ee;">${name}</strong>,
        </p>
        <p style="color: #cbd5e1; line-height: 1.6;">
          I've received your message and will get back to you as soon as possible.
          Here's a copy of what you sent:
        </p>

        <div style="
          background: #1e293b;
          border-left: 4px solid #22d3ee;
          border-radius: 8px;
          padding: 16px;
          margin: 20px 0;
          color: #e2e8f0;
          line-height: 1.6;
        ">${message}</div>

        <p style="color: #cbd5e1; line-height: 1.6;">
          Best regards,<br/>
          <strong style="color: #22d3ee;">Vijendra Kumar</strong><br/>
          <span style="color: #64748b;">Software Developer</span>
        </p>
      </div>

      <div style="
        padding: 16px 24px;
        text-align: center;
        border-top: 1px solid #1e293b;
        color: #475569;
        font-size: 12px;
      ">
        This is an automated confirmation from vijendra.nbj04@gmail.com
      </div>
    </div>
  `,
});

// POST /api/contact
router.post("/", async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // ✅ Step 1 — Save to DB first (fast)
    const contact = await Contact.create({ name, email, message });
    console.log("✅ Saved to DB:", contact._id);

    // ✅ Step 2 — Respond to user IMMEDIATELY (don't wait for emails)
    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
    });

    // ✅ Step 3 — Send BOTH emails in parallel AFTER responding
    Promise.all([
      transporter.sendMail(ownerEmailOptions(name, email, message)),
      transporter.sendMail(senderEmailOptions(name, email, message)),
    ])
      .then(() => console.log("✅ Both emails sent"))
      .catch((err) => console.error("❌ Email error:", err.message));
  } catch (err) {
    console.error("❌ Contact error:", err.message);
    next(err);
  }
});

module.exports = router;
