"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function AnimatedBackground() {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const x = useSpring(mouseX, { stiffness: 300, damping: 40, mass: 0.5 });
	const y = useSpring(mouseY, { stiffness: 300, damping: 40, mass: 0.5 });

	useEffect(() => {
		const handle = (e: MouseEvent) => {
			mouseX.set(e.clientX);
			mouseY.set(e.clientY);
		};
		window.addEventListener("mousemove", handle);
		return () => window.removeEventListener("mousemove", handle);
	}, [mouseX, mouseY]);

	const bg = useMotionTemplate`radial-gradient(600px 300px at ${x}px ${y}px, rgba(102,252,241,0.15), transparent 60%), radial-gradient(800px 400px at ${x}px ${y}px, rgba(168,85,247,0.08), transparent 70%)`;

	return (
		<motion.div
			aria-hidden
			style={{ backgroundImage: bg }}
			className="pointer-events-none fixed inset-0 -z-10"
		/>
	);
}
