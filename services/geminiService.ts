import { GoogleGenAI, Type } from "@google/genai";
import { AsteroidAnalysis } from "../types";

export class MiningAnalysisService {
  private getAI() {
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async scanAsteroid(query: string): Promise<AsteroidAnalysis> {
    const ai = this.getAI();

    try {
        const response = await ai.models.generateContent({
          // gemini-3-flash-preview daha yüksek hız limitlerine sahiptir
          model: "gemini-3-flash-preview",
          contents: `Analyze the celestial body: "${query}". Provide a scientific and economic mining report in JSON format.`,
          config: {
            systemInstruction: "You are a space mining AI. Provide accurate data for real celestial bodies (planets, asteroids, moons) in JSON format. If it's not a real space body, return an error message in scientific tone.",
            responseMimeType: "application/json",
            tools: [{ googleSearch: {} }],
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                type: { type: Type.STRING },
                estimatedValue: { type: Type.STRING },
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

        const text = response.text;
        if (!text) throw new Error("Empty AI response.");
        const analysis = JSON.parse(text) as AsteroidAnalysis;

        const groundingMetadata = response.candidates?.[0]?.groundingMetadata;
        if (groundingMetadata?.groundingChunks) {
          analysis.sources = groundingMetadata.groundingChunks
            .filter((chunk: any) => chunk.web)
            .map((chunk: any) => ({
              title: chunk.web?.title || 'Scientific Source',
              uri: chunk.web?.uri || '#'
            }));
        }

        return analysis;
    } catch (e: any) {
        console.error("Gemini Error:", e);
        throw new Error(`Analysis failed for '${query}'. Target may be out of range or unknown.`);
    }
  }
}