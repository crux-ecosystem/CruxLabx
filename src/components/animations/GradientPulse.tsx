"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientPulseProps {
	children?: ReactNode;
	colors?: string[];
	duration?: number;
	className?: string;
}

export default function GradientPulse({
	children,
	colors = ["#66FCF1", "#1DB9C3", "#66FCF1"],
	duration = 5,
	className,
}: GradientPulseProps) {
	return (
		<motion.div
			animate={{
				background: [
					`linear-gradient(135deg, ${colors[0]}15, ${colors[1]}10)`,
					`linear-gradient(135deg, ${colors[1]}15, ${colors[2]}10)`,
					`linear-gradient(135deg, ${colors[2]}15, ${colors[0]}10)`,
					`linear-gradient(135deg, ${colors[0]}15, ${colors[1]}10)`,
				],
			}}
			transition={{
				duration,
				repeat: Infinity,
				ease: "easeInOut",
			}}
			className={cn("relative", className)}
		>
			{children}
		</motion.div>
	);
}

