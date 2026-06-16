const messages = require("../data/messages");

const submitMessage = (req, res) => {
  const name = req.body.name?.trim();
  const email = req.body.email?.trim();
  const subject = req.body.subject?.trim() || "";
  const message = req.body.message?.trim();

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required",
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address",
    });
  }

  const newMessage = {
    id: Date.now(),
    name,
    email,
    subject,
    message,
    createdAt: new Date(),
  };

  messages.push(newMessage);

  res.status(201).json({
    success: true,
    message: "Message sent successfully",
  });
};

const getMessages = (req, res) => {
  const adminKey = process.env.CONTACT_ADMIN_KEY;

  if (!adminKey || req.headers["x-admin-key"] !== adminKey) {
    return res.status(403).json({
      success: false,
      message: "Not authorized to view messages",
    });
  }

  res.status(200).json({
    success: true,
    total: messages.length,
    messages,
  });
};

module.exports = {
  submitMessage,
  getMessages,
};
