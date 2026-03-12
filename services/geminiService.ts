
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "PreCalc Pro AI", a world-class tutor specializing in Larson: Precalculus with Limits (2007 Edition) and California Common Core Standards.
Your goals:
1. Provide step-by-step help for precalculus problems.
2. Align explanations with CA standard codes (e.g., F-TF.5).
3. Identify "California Common Mistakes".
4. Use LaTeX for math formatting. Wrap formulas in double dollar signs $$ for block or single $ for inline.
`;

export const getAITutorResponse = async (prompt: string, imageData?: string) => {
  const parts: any[] = [{ text: prompt }];
  if (imageData) {
    parts.push({
      inlineData: {
        mimeType: 'image/jpeg',
        data: imageData.split(',')[1] || imageData,
      },
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: { parts },
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Tutor Error:", error);
    return "I'm having trouble connecting to the math engine.";
  }
};

export const generateStructuredLesson = async (chapterId: number, title: string, focus: string, standards: string[]) => {
  const prompt = `
    Generate a multi-source precalculus lesson for Chapter ${chapterId}: ${title} based on Larson 2007.
    Focus areas: ${focus}
    California Standards: ${standards.join(', ')}

    Return a JSON object with four sections:
    1. "textbookExcerpt": A high-fidelity simulation of the Larson 2007 "Concept Summary" for this chapter.
    2. "standardsConnection": A deep dive into how this chapter specifically meets CA CCSS ${standards.join(', ')}.
    3. "aiSynthesis": A "Mastery Note" that synthesizes the concepts with a complex example.
    4. "videoTutorial": An object containing a "title", "description", and a "searchQuery" for finding the best video explanation on YouTube for this specific Larson section.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            textbookExcerpt: { type: Type.STRING },
            standardsConnection: { type: Type.STRING },
            aiSynthesis: { type: Type.STRING },
            videoTutorial: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                searchQuery: { type: Type.STRING }
              },
              required: ["title", "description", "searchQuery"]
            }
          },
          required: ["textbookExcerpt", "standardsConnection", "aiSynthesis", "videoTutorial"]
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Lesson Generation Error:", error);
    return null;
  }
};

export const generatePracticeTest = async (chapterTitle: string, standard: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate a 3-question CAASPP-style practice test for ${chapterTitle} focusing on CA Standard ${standard}. Return as JSON.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          questions: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                question: { type: Type.STRING },
                options: { type: Type.ARRAY, items: { type: Type.STRING } },
                correctAnswer: { type: Type.INTEGER },
                explanation: { type: Type.STRING },
                standard: { type: Type.STRING }
              },
              required: ["id", "question", "options", "correctAnswer", "explanation", "standard"]
            }
          }
        },
        required: ["questions"]
      }
    }
  });
  return JSON.parse(response.text).questions;
};

export const generateChapterQuiz = async (chapterId: number, title: string, focus: string) => {
  const prompt = `Generate a 10-question multiple-choice quiz for Larson Precalculus Chapter ${chapterId}: ${title}. 
  Focus on: ${focus}. 
  Include complex math problems using LaTeX. 
  Each question must have 4 options and a clear explanation for the correct answer. 
  Target rigor: High School Honors / University Placement (ALEKS style).`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  question: { type: Type.STRING },
                  options: { type: Type.ARRAY, items: { type: Type.STRING } },
                  correctAnswer: { type: Type.INTEGER },
                  explanation: { type: Type.STRING },
                  standard: { type: Type.STRING }
                },
                required: ["id", "question", "options", "correctAnswer", "explanation", "standard"]
              }
            }
          },
          required: ["questions"]
        }
      }
    });
    return JSON.parse(response.text).questions;
  } catch (error) {
    console.error("Chapter Quiz Generation Error:", error);
    return null;
  }
};
