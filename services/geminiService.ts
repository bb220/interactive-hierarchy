import { GoogleGenAI } from "@google/genai";
import { LevelData } from "../types";

export const generateExample = async (topic: string, level: LevelData): Promise<string> => {
  try {
    // Ensure API key is present (in a real env, this checks process.env.API_KEY)
    if (!process.env.API_KEY) {
      throw new Error("API Key is missing.");
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
      Topic: "${topic}"
      
      Task: Write a short disagreement argument (1-3 sentences) against this topic that strictly falls into the category of Graham's Hierarchy Level: ${level.id} - "${level.name}".
      
      Definition of this level: ${level.summary}
      
      Output rules:
      - Do not explain the level.
      - Just write the argument/comment as if it were a comment on an internet forum or essay.
      - Be creative but strictly adhere to the definition of the disagreement level.
      - For DH0, use mild name-calling (avoid extreme profanity, keep it PG-13 but illustrative).
      - For DH6, be precise and logical.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Could not generate an example.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate example. Please try again.");
  }
};