import { botContext } from "../data/chatbotContext";

const BASE_URL = import.meta.env.VITE_API_URL;

export const sendChatMessage = async (userMessage, chatHistory = []) => {
  try {
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

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || "Server error");
    }

    const data = await response.json();
    return data.reply;
  } catch (err) {
    // Log exact error so you can debug
    console.error("Chat API error:", err.message);

    if (err.message === "Failed to fetch") {
      throw new Error("Cannot connect to backend. Is your server running?");
    }

    throw new Error(err.message || "Chatbot error. Please try again.");
  }
};
