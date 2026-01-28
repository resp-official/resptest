import { GoogleGenAI, Type } from "@google/genai";
import { AsteroidAnalysis } from "../types";

export class MiningAnalysisService {
  private ai: GoogleGenAI;

  constructor() {
    // Vite config define üzerinden gelen API_KEY'i kullanıyoruz
    const apiKey = process.env.API_KEY || '';
    this.ai = new GoogleGenAI({ apiKey });
  }

  async scanAsteroid(query: string): Promise<AsteroidAnalysis> {
    const apiKey = process.env.API_KEY;
    
    if (!apiKey || apiKey === '') {
      throw new Error("Gemini API Key eksik. Lütfen Vercel ayarlarına API_KEY ekleyin.");
    }

    const response = await this.ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze the celestial body: "${query}". Provide a scientific and economic mining report in JSON format.`,
      config: {
        systemInstruction: "You are a space mining AI. Provide accurate data for real celestial bodies in JSON format. Use scientific spectral types.",
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

    try {
        const text = response.text;
        if (!text) throw new Error("AI yanıt veremedi.");
        return JSON.parse(text) as AsteroidAnalysis;
    } catch (e) {
        console.error("AI parse error:", response.text);
        throw new Error("Analiz başarısız oldu. Lütfen geçerli bir gök cismi ismi girin (Örn: Mars, Psyche, Ceres).");
    }
  }
}