import { GoogleGenAI, Type } from "@google/genai";
import { AsteroidAnalysis } from "../types";

export class MiningAnalysisService {
  private getAI() {
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  private async sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async scanAsteroid(query: string, retryCount = 0): Promise<AsteroidAnalysis> {
    const ai = this.getAI();

    try {
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: `Analyze the celestial body: "${query}". Provide a scientific and economic mining report in JSON format.`,
          config: {
            systemInstruction: "You are a space mining AI. Provide accurate data for real celestial bodies (planets, asteroids, moons) in JSON format.",
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
        if (!text) throw new Error("Empty satellite link.");
        
        const analysis = JSON.parse(text) as AsteroidAnalysis;
        const groundingMetadata = response.candidates?.[0]?.groundingMetadata;
        if (groundingMetadata?.groundingChunks) {
          analysis.sources = groundingMetadata.groundingChunks
            .filter((chunk: any) => chunk.web)
            .map((chunk: any) => ({
              title: chunk.web?.title || 'Telemetry Source',
              uri: chunk.web?.uri || '#'
            }));
        }

        return analysis;
    } catch (e: any) {
        // Kota aşımı (429) durumunda bir kez otomatik yeniden deneme
        if (e.message?.includes("429") && retryCount < 1) {
            console.log("Quota hit, retrying in 2 seconds...");
            await this.sleep(2000);
            return this.scanAsteroid(query, retryCount + 1);
        }

        console.error("Gemini Error:", e);
        
        if (e.message?.includes("429")) {
            throw new Error("SATELLITE LINK SATURATED: You've reached the free tier limit. Please wait 60 seconds for orbit recalibration.");
        }
        
        throw new Error("DEEP SPACE INTERFERENCE: Target out of range or analysis protocol failed.");
    }
  }
}