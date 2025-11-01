"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AskIntraMind() {
	const [query, setQuery] = useState("");
	const [loading, setLoading] = useState(false);
	const [answer, setAnswer] = useState<string | null>(null);
	const [mode, setMode] = useState<"gemini" | "fallback">("fallback");

	useEffect(() => {
		fetch("/api/ask/status").then(async (r) => {
			try {
				const data = await r.json();
				if (data?.mode === "gemini") setMode("gemini");
			} catch {}
		});
	}, []);

	async function onAsk() {
		if (!query.trim()) return;
		setLoading(true);
		setAnswer(null);
		try {
			const res = await fetch("/api/ask", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ query }),
			});
			const data = await res.json();
			setAnswer(data.answer ?? "No answer");
		} catch {
			setAnswer("Error: Could not reach IntraMind API.");
		} finally {
			setLoading(false);
		}
	}

	return (
		<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
			<div className="flex items-center justify-between">
				<h2 className="text-xl md:text-2xl font-semibold font-[var(--font-display)]">Ask IntraMind</h2>
				<span className="text-xs rounded-md border px-2 py-1 text-foreground/80">Mode: {mode === "gemini" ? "Gemini" : "Local demo"}</span>
			</div>
			<p className="mt-2 text-xs text-foreground/60">Learn more in the Showcase repo: <a className="text-primary" href="https://github.com/crux-ecosystem/IntraMind-Showcase" target="_blank" rel="noreferrer">IntraMind-Showcase</a></p>
			<div className="mt-4 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3">
				<Input
					placeholder="Ask about how IntraMind works…"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<Button onClick={onAsk} disabled={loading} className="bg-primary text-primary-foreground">{loading ? "Thinking…" : "Ask"}</Button>
			</div>
			{answer && (
				<div className="mt-4 rounded-xl border bg-white/5 p-4 text-sm">
					{answer}
				</div>
			)}
		</section>
	);
}
