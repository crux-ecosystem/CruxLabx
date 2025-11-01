"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
	children: ReactNode;
	direction?: "left" | "right" | "up" | "down";
	delay?: number;
}

export default function ScrollReveal({
	children,
	direction = "up",
	delay = 0,
}: ScrollRevealProps) {
	const variants = {
		left: { x: -50, opacity: 0 },
		right: { x: 50, opacity: 0 },
		up: { y: 50, opacity: 0 },
		down: { y: -50, opacity: 0 },
	};

	return (
		<motion.div
			initial={variants[direction]}
			whileInView={{ x: 0, y: 0, opacity: 1 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6, delay, ease: "easeOut" }}
		>
			{children}
		</motion.div>
	);
}

