
import { GoogleGenAI, Type } from "@google/genai";
import { AsteroidAnalysis } from "../types";

export class MiningAnalysisService {
  private ai: GoogleGenAI;

  constructor() {
    // Vite build sürecinde API anahtarını process.env.API_KEY olarak mapliyoruz
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("RESP: Gemini API Key not found in environment variables.");
    }
    this.ai = new GoogleGenAI({ apiKey: apiKey || '' });
  }

  async scanAsteroid(query: string): Promise<AsteroidAnalysis> {
    if (!process.env.API_KEY) {
      throw new Error("API Key is missing. Please configure your environment variables.");
    }

    const response = await this.ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Perform a detailed analysis of the real celestial body: "${query}". Provide a professional spectroscopic and geological mining report based on actual scientific data, including its real spectral type, known or estimated composition (e.g., metals, volatiles), and its estimated economic value in current markets.`,
      config: {
        systemInstruction: "You are an AI Deep-Space Spectroscopist and Astro-Economist. Your task is to generate accurate analysis reports for real celestial bodies (asteroids, planets, moons) in JSON format. Use scientifically accurate Spectral classifications (M-type, S-type, C-type, etc.). If a body is famous (like Psyche or Bennu), use its known data. For value, provide a realistic estimate in USD. The 'description' should be a professional briefing for a mining executive.",
        responseMimeType: "application/json",
        tools: [{ googleSearch: {} }],
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING, description: "Official name of the body (e.g., '16 Psyche', 'Mars', 'Bennu')" },
            type: { type: Type.STRING, description: "Spectral class or Planet type (e.g., M-Type Metallic, Terrestrial Planet)" },
            estimatedValue: { type: Type.STRING, description: "Estimated market value in USD (e.g., '$10 Quintillion' or '$0 - Research Only')" },
            composition: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  material: { type: Type.STRING },
                  percentage: { type: Type.NUMBER }
                }
              }
            },
            miningDifficulty: { 
                type: Type.STRING, 
                description: "Must be 'Low', 'Medium', 'High', or 'Extreme'" 
            },
            description: { type: Type.STRING }
          },
          required: ["name", "type", "estimatedValue", "composition", "miningDifficulty", "description"]
        }
      }
    });

    try {
        const text = response.text;
        if (!text) throw new Error("Empty response from AI");
        return JSON.parse(text) as AsteroidAnalysis;
    } catch (e) {
        console.error("Failed to parse AI response:", response.text);
        throw new Error("Analysis failed. Please try a different target.");
    }
  }
}
