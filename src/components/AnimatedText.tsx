"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
	text: string;
	className?: string;
	delay?: number;
	speed?: number;
}

export default function AnimatedText({ text, className = "", delay = 0, speed = 30 }: AnimatedTextProps) {
	const [displayedText, setDisplayedText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (currentIndex < text.length) {
				setDisplayedText((prev) => prev + text[currentIndex]);
				setCurrentIndex((prev) => prev + 1);
			}
		}, delay + currentIndex * speed);

		return () => clearTimeout(timeout);
	}, [currentIndex, text, delay, speed]);

	return (
		<motion.span
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
			className={className}
		>
			{displayedText}
			{currentIndex < text.length && <span className="animate-pulse">|</span>}
		</motion.span>
	);
}
