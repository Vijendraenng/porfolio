import { botContext } from "../data/chatbotContext";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const sendChatMessage = async (userMessage, chatHistory = []) => {
  try {
    // Debug
    console.log("🌐 BASE_URL:", BASE_URL);
    console.log("💬 Sending message:", userMessage);

    if (!BASE_URL) {
      throw new Error("VITE_API_URL is not set in .env");
    }

    const messages = [
      {
        role: "system",
        content: botContext,
      },
      ...chatHistory,
      {
        role: "user",
        content: userMessage,
      },
    ];

    const response = await fetch(`${BASE_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    });

    console.log("📡 Response status:", response.status);

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.message || "Server error");
    }

    const data = await response.json();

    if (!data.reply) {
      throw new Error("No reply received from server");
    }

    return data.reply;
  } catch (err) {
    console.error("❌ Chat API error:", err.message);

    if (err.message === "Failed to fetch") {
      throw new Error("Backend is not running. Start your server.");
    }

    throw new Error(err.message || "Chatbot error. Please try again.");
  }
};
