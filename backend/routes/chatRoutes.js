require("dotenv").config();

const express = require("express");
const router = express.Router();
const OpenAI = require("openai");

// Initialize NVIDIA client
const openai = new OpenAI({
  apiKey: process.env.NVIDIA_API_KEY,
  baseURL: "https://integrate.api.nvidia.com/v1",
});

router.post("/", async (req, res, next) => {
  try {
    const { messages } = req.body;

    console.log("📨 Chat request received");
    console.log(
      "🔑 NVIDIA Key:",
      process.env.NVIDIA_API_KEY ? "✅ Loaded" : "❌ Missing",
    );

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({
        success: false,
        message: "Messages array is required.",
      });
    }

    const completion = await openai.chat.completions.create({
      model: "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
      messages,
      temperature: 0.6,
      top_p: 0.95,
      max_tokens: 1024,
      stream: false,
    });

    const reply = completion.choices[0]?.message?.content;

    if (!reply) {
      throw new Error("No reply received from NVIDIA");
    }

    console.log("✅ Reply generated successfully");

    res.status(200).json({
      success: true,
      reply,
    });
  } catch (err) {
    console.error("❌ Chat route error:", err.message);
    next(err);
  }
});

module.exports = router;
