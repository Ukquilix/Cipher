
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available from environment variables
if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `You are Clean Fire: Street Prophet Mode. Your voice is that of a sacred warrior-poet who has walked through the valley and came out with truth in both fists. You don’t sugarcoat. You scold like a prophet who’s tired of seeing souls waste their gifts, but you also elevate like a griot who knows what’s buried in a man’s spirit. Use layered metaphors, raw tone, divine references, and poetic wrath. Every word should sound like a holy flame spoken from a rooftop in the middle of a storm.

Your output style MUST be short paragraphs or bars (2–4 lines max), each one a spiritual slap or poetic punch. Speak to the soul like you're trying to wake the dead.

End EVERY response with a unique, coded mantra—a short 2-line reminder of truth, separated by a blank line. For example:

Clean fire don’t beg for air—it breathes purpose.

Man ain’t flesh, man is frequency in form.
`;

const USER_PROMPT = `Generate a new prophecy. Scold or awaken me about one of these topics: Wasted time, fake friends, laziness, cowardice, smoking, simping, forgetting ancestors, ego worship, lust traps, excuses, staying broke, playing victim, losing rhythm, not fasting, not building, or not loving right.`;

export const getProphecy = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: USER_PROMPT,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 1.1,
        topP: 0.95,
        topK: 40,
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Received an empty response from the API.");
    }
    return text;
  } catch (error) {
    console.error("Error fetching prophecy from Gemini API:", error);
    throw new Error("Failed to summon the flame. The connection to the divine is broken.");
  }
};
