import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateResponse(prompt: string) {
  const systemPrompt = `
    You are an assistant for an employee tasked with answering a prompt for an office-related incident.
    The employee is stuck and needs your help to generate a response to the task in their own words.
  `;
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: prompt },
    ],
  });

  return completion.choices[0].message;
}