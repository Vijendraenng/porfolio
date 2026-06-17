const express = require("express");
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({
        success: false,
        message: "Messages array is required.",
      });
    }

    const response = await fetch(
      "https://integrate.api.nvidia.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NVIDIA_API_KEY}`,
        },
        body: JSON.stringify({
          model: "meta/llama-3.3-70b-instruct",
          messages,
          temperature: 0.3,
          max_tokens: 400,
          stream: false,
        }),
      },
    );

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.detail || err.message || "NVIDIA API error");
    }

    const data = await response.json();

    res.status(200).json({
      success: true,
      reply: data.choices[0].message.content,
    });
  } catch (err) {
    console.error("❌ Chat route error:", err.message);
    next(err);
  }
});

module.exports = router;
