import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `You are IntraMind's explainer. Only answer questions about how IntraMind works.
Decline other topics. Keep answers short and precise (2-5 sentences).
Focus on: docs intake -> OCR -> embeddings/vector store -> query/RAG -> local LLM (Ollama) -> cloud fallback -> answer/UI display.
You may reference IntraMind Showcase public details.`;

export async function POST(req: Request) {
	try {
		const url = new URL(req.url);
		const streamMode = url.searchParams.get("stream") === "1";
		const { query } = await req.json();
		const key = process.env.GEMINI_API_KEY;

		async function getText(): Promise<string> {
			if (!key) {
				return "IntraMind ingests docs (PDF/DOCX/Images), extracts text (OCR), builds embeddings and stores them in a vector DB. A RAG engine retrieves context for your query, runs a local LLM via Ollama, falls back to cloud if needed, and returns a concise answer.";
			}
			const genAI = new GoogleGenerativeAI(key);
			const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
			const prompt = `${SYSTEM_PROMPT}\n\nUser question: ${query}`;
			const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }] });
			return result.response.text();
		}

		if (!streamMode) {
			const text = await getText();
			return NextResponse.json({ answer: text });
		}

		const encoder = new TextEncoder();
		const stream = new ReadableStream({
			start: async (controller) => {
				try {
					const text = await getText();
					const chunks = text.split(/(?<=[.!?])\s+/);
					for (const chunk of chunks) {
						controller.enqueue(encoder.encode(chunk + " "));
						await new Promise((r) => setTimeout(r, 120));
					}
					controller.close();
				} catch (e) {
					controller.error(e);
				}
			},
		});
		return new Response(stream, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
	} catch (e) {
		return NextResponse.json({ error: "Request failed" }, { status: 500 });
	}
}
