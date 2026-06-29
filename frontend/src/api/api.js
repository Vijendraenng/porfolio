const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const parseJsonResponse = async (res) => {
  const text = await res.text();
  return text ? JSON.parse(text) : {};
};

export const sendContactMessage = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await parseJsonResponse(res);

    if (!res.ok) {
      throw new Error(data.message || "Server error. Please try again.");
    }

    return data;
  } catch (err) {
    // Catches both network errors and server errors
    if (err.message === "Failed to fetch") {
      throw new Error(
        "Cannot connect to server. Make sure backend is running.",
      );
    }
    if (err instanceof SyntaxError) {
      throw new Error("Server returned an invalid response.");
    }
    throw new Error(err.message || "Something went wrong.");
  }
};

export const getPortfolioData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/portfolio`);

    const data = await parseJsonResponse(res);

    if (!res.ok) {
      throw new Error(data.message || "Failed to fetch portfolio data.");
    }

    return data;
  } catch (err) {
    if (err.message === "Failed to fetch") {
      throw new Error("Cannot connect to server.");
    }
    if (err instanceof SyntaxError) {
      throw new Error("Server returned an invalid response.");
    }
    throw new Error(err.message || "Something went wrong.");
  }
};
