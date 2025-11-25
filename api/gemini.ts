// api/gemini.ts
import { GoogleGenerativeAI } from "@google/genai";

// Vercel sẽ gọi hàm default export này khi có request tới /api/gemini
export default async function handler(req: any, res: any) {
  // Chỉ cho phép POST
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { prompt } = req.body || {};

    if (!prompt || typeof prompt !== "string") {
      res.status(400).json({ error: "Missing or invalid 'prompt'" });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is not set in environment variables");
      res.status(500).json({ error: "Server misconfiguration: missing API key" });
      return;
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.status(200).json({ text });
  } catch (error: any) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({
      error: "Internal server error when calling Gemini",
      details: error?.message ?? String(error),
    });
  }
}
