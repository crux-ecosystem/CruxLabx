"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroRevealProps {
	children: ReactNode;
	delay?: number;
}

export default function HeroReveal({ children, delay = 0 }: HeroRevealProps) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
			animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
			transition={{ duration: 1, delay, ease: [0.34, 1.56, 0.64, 1] }}
		>
			{children}
		</motion.div>
	);
}

