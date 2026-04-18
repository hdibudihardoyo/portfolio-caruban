import { SYSTEM_PROMPT } from "@/constants/ai-prompt";
import Groq from "groq-sdk";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.GROQ_API_KEY || process.env.NEXT_PUBLIC_GROK_GENERATIVE_AI_API_KEY;
    
    if (!apiKey) {
      console.error("API Key missing");
      return new Response(JSON.stringify({ error: "Konfigurasi API AI tidak ditemukan" }), { status: 500 });
    }

    const groq = new Groq({
      apiKey: apiKey,
    });

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        ...messages,
      ],
      model: "llama-3.3-70b-versatile",
      stream: true,
      temperature: 0.7,
      max_completion_tokens: 500,
    });

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of chatCompletion) {
            const text = chunk.choices[0]?.delta?.content || "";
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Gagal" }), { status: 500 });
  }
}