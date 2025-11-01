"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterRevealProps {
	text: string;
	speed?: number;
	className?: string;
}

export default function TypewriterReveal({ text, speed = 50, className = "" }: TypewriterRevealProps) {
	const [displayedText, setDisplayedText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (currentIndex < text.length) {
			const timer = setTimeout(() => {
				setDisplayedText((prev) => prev + text[currentIndex]);
				setCurrentIndex((prev) => prev + 1);
			}, speed);

			return () => clearTimeout(timer);
		}
	}, [currentIndex, text, speed]);

	return (
		<motion.span
			className={className}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
		>
			{displayedText}
			<motion.span
				animate={{ opacity: [1, 0] }}
				transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
				className="inline-block w-0.5 h-5 bg-primary ml-1"
			/>
		</motion.span>
	);
}

