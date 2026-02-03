import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are 'Sureya AI', the official academic advisor for Sureya Academy.
Your goal is to help prospective and current students.
Provide information about the academy based on these facts:
1. Location: New Horizon City.
2. Founded: 2010.
3. Values: Integrity, Innovation, Excellence.
4. Courses: Science, Arts, Technology, Commerce.
5. Faculty: World-class PhD holders and industry leaders.
Be professional, encouraging, and concise. If you don't know an answer, suggest they contact info@sureya.edu.
`;

/**
 * Gets a response from the AI advisor.
 * Uses gemini-3-flash-preview for basic academic advising tasks.
 */
export async function getAIAdvisorResponse(prompt: string, history: {role: string, parts: {text: string}[]}[]) {
  try {
    // Standard initialization using named parameter and process.env.API_KEY.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      }
    });

    // Directly access text property from response
    return response.text || "I'm sorry, I'm having trouble connecting right now. Please try again shortly.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our systems are currently busy. Please contact admissions directly at +1 (555) SUREYA.";
  }
}