"use client";

import { motion } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";

interface SequentialHighlightProps {
	children: ReactNode[];
	delay?: number;
}

export default function SequentialHighlight({
	children,
	delay = 0.2,
}: SequentialHighlightProps) {
	const [highlightedIndex, setHighlightedIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setHighlightedIndex((prev) => (prev + 1) % children.length);
		}, 1000 + delay * 1000);

		return () => clearInterval(interval);
	}, [children.length, delay]);

	return (
		<div className="relative">
			{children.map((child, index) => (
				<motion.div
					key={index}
					animate={{
						filter: highlightedIndex === index ? "drop-shadow(0 0 20px rgba(102, 252, 241, 0.6))" : "none",
						scale: highlightedIndex === index ? 1.05 : 1,
					}}
					transition={{ duration: 0.5 }}
				>
					{child}
				</motion.div>
			))}
		</div>
	);
}

