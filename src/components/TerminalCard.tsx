"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";

interface TerminalCardProps {
	title?: string;
	code: string;
	language?: string;
	showLineNumbers?: boolean;
	animated?: boolean;
}

export default function TerminalCard({
	title = "Terminal",
	code,
	language = "bash",
	showLineNumbers = false,
	animated = false,
}: TerminalCardProps) {
	const [copied, setCopied] = useState(false);
	const [displayedCode, setDisplayedCode] = useState(animated ? "" : code);

	useEffect(() => {
		if (animated && code) {
			let currentIndex = 0;
			const interval = setInterval(() => {
				if (currentIndex <= code.length) {
					setDisplayedCode(code.slice(0, currentIndex));
					currentIndex++;
				} else {
					clearInterval(interval);
				}
			}, 20);
			return () => clearInterval(interval);
		}
	}, [code, animated]);

	const handleCopy = async () => {
		await navigator.clipboard.writeText(code);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const lines = (displayedCode || code).split("\n");

	return (
		<Card className="overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
			{/* Terminal Header */}
			<div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-slate-700">
				<div className="flex items-center gap-2">
					<div className="flex gap-1.5">
						<div className="w-3 h-3 rounded-full bg-red-500/80" />
						<div className="w-3 h-3 rounded-full bg-yellow-500/80" />
						<div className="w-3 h-3 rounded-full bg-green-500/80" />
					</div>
					<span className="text-xs text-slate-400 ml-2 font-mono">{title}</span>
				</div>
				<button
					onClick={handleCopy}
					className="p-1.5 hover:bg-slate-700 rounded transition-colors"
					aria-label="Copy code"
				>
					{copied ? (
						<Check className="w-4 h-4 text-green-400" />
					) : (
						<Copy className="w-4 h-4 text-slate-400" />
					)}
				</button>
			</div>

			{/* Terminal Content */}
			<div className="p-4 overflow-x-auto">
				<pre className="font-mono text-sm">
					{lines.map((line, index) => (
						<div key={index} className="flex">
							{showLineNumbers && (
								<span className="text-slate-600 select-none mr-4 text-right" style={{ minWidth: "2ch" }}>
									{index + 1}
								</span>
							)}
							<code className="text-slate-200">
								{line.startsWith("$") || line.startsWith(">") ? (
									<>
										<span className="text-green-400">{line.substring(0, 1)}</span>
										<span className="text-slate-300">{line.substring(1)}</span>
									</>
								) : line.startsWith("#") ? (
									<span className="text-slate-500">{line}</span>
								) : (
									<span className="text-blue-300">{line}</span>
								)}
							</code>
						</div>
					))}
					{animated && displayedCode.length < code.length && (
						<span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1" />
					)}
				</pre>
			</div>
		</Card>
	);
}
