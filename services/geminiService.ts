

import { GoogleGenAI, GenerateContentResponse, Chat } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: `You are the AI Assistant for ADA (Albanian Design Academy), a prestigious fashion school in Tirana, Albania.
      
      KEY FACTS:
      - ADA has been a leader for over 10 years in Tirana.
      - Program duration: 2 Academic Years (Sept-June).
      - Year 1: Basics of Sketching, Sewing, and Textiles (Merceologji).
      - Year 2: Advanced realization, artistic expression, final collection.
      - Final Event: Grand Fashion Show. Top designs go to Milan/Paris Fashion Weeks.
      - Requirements: Age 16+, Passion, Ambition. No previous diploma needed.
      
      TEACHERS:
      - Elsida Pepa (Owner/Prof): 11 years exp, teaches sewing/cutting/CAD.
      - Lije Gurthi (Mentor): 35+ years exp, 30 years own atelier.
      - Ardi Asllani (Prof): Notable designer for public figures, teaches design/sketching.
      - Flutura Zake (Prof): Textile expert, 25 years exp.
      
      INSTRUCTIONS:
      - Be professional, short, and catchy.
      - DO NOT use any markdown formatting (no bold, italics, or asterisks).
      - Write in plain text only.
      - If asked about irrelevant topics, politely redirect to fashion or suggest contacting us on social media.
      - Keep responses encouraging for young people.`,
    },
  });
};

export const sendMessageToChat = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "I apologize, I could not generate a response.";
  } catch (error) {
    console.error("Chat Error:", error);
    return "An error occurred while communicating with the AI.";
  }
};

export const editImageWithGemini = async (imageBase64: string, prompt: string): Promise<string | null> => {
  try {
    // Extract base64 data and mimeType
    const matches = imageBase64.match(/^data:(.+);base64,(.+)$/);
    if (!matches) {
      console.error("Invalid image format");
      return null;
    }
    const mimeType = matches[1];
    const data = matches[2];

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
            {
                inlineData: {
                    mimeType,
                    data
                }
            },
            { text: prompt }
        ]
      }
    });

    const part = response.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
    if (part && part.inlineData && part.inlineData.data) {
        return `data:image/png;base64,${part.inlineData.data}`;
    }
    
    return null;
  } catch (error) {
    console.error("Edit Image Error:", error);
    return null;
  }
};