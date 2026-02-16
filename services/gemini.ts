
import { GoogleGenAI, Type } from "@google/genai";

// Injected at build time by Vite from GEMINI_API_KEY env var
const API_KEY = process.env.API_KEY || '';

export const getBeautyAdvice = async (concerns: string) => {
  if (!API_KEY) {
    console.warn('Gemini API key not configured. Add GEMINI_API_KEY in Vercel Environment Variables.');
    return {
      opening: "Our AI consultant is being configured. Please contact us directly for personalized recommendations!",
      recommendations: [
        { service: "Glow Radiance Facial", benefit: "Premium organic serums for instant luminosity" },
        { service: "Silk Gel Manicure", benefit: "Long-lasting silk-infused gel polish" }
      ],
      homeCareTip: "Stay hydrated and use gentle, nourishing skincare. Book a consultation for tailored advice.",
      closing: "We look forward to welcoming you."
    };
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide a luxurious, personalized beauty recommendation for a client with these concerns: "${concerns}". 
                 The tone should be elegant, professional, and sophisticated. 
                 Suggest 2 services from our list (Hair, Skin, Nails) and a home care tip.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            opening: { type: Type.STRING },
            recommendations: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  service: { type: Type.STRING },
                  benefit: { type: Type.STRING }
                }
              }
            },
            homeCareTip: { type: Type.STRING },
            closing: { type: Type.STRING }
          },
          required: ["opening", "recommendations", "homeCareTip", "closing"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
