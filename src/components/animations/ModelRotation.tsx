"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ModelRotationProps {
	children: ReactNode;
	duration?: number;
}

export default function ModelRotation({ children, duration = 8 }: ModelRotationProps) {
	return (
		<motion.div
			animate={{ rotateY: 360 }}
			transition={{
				duration,
				repeat: Infinity,
				ease: "linear",
			}}
			style={{ transformStyle: "preserve-3d" }}
			className="perspective-1000"
		>
			{children}
		</motion.div>
	);
}

