"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface LightSweepProps {
	children: ReactNode;
	duration?: number;
}

export default function LightSweep({ children, duration = 3 }: LightSweepProps) {
	const ref = useRef<HTMLDivElement>(null);

	return (
		<div ref={ref} className="relative overflow-hidden">
			{children}
			<motion.div
				className="absolute inset-0 pointer-events-none"
				initial={{ x: "-100%", opacity: 0 }}
				animate={{
					x: ["-100%", "200%"],
					opacity: [0, 0.6, 0],
				}}
				transition={{
					duration,
					repeat: Infinity,
					repeatDelay: 2,
					ease: "easeInOut",
				}}
				style={{
					background: "linear-gradient(90deg, transparent, rgba(102, 252, 241, 0.4), transparent)",
					width: "50%",
					transform: "skewX(-20deg)",
				}}
			/>
		</div>
	);
}

