"use client";

import { motion } from "framer-motion";

export default function HeroVisual() {
	return (
		<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
			<motion.div
				className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full"
				style={{ background: "radial-gradient(circle, rgba(102,252,241,0.12), transparent 60%)" }}
				animate={{ scale: [1, 1.05, 1] }}
				transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
			/>
			<Orb radius={160} delay={0} />
			<Orb radius={200} delay={0.4} />
			<Orb radius={240} delay={0.8} />
		</div>
	);
}

function Orb({ radius, delay }: { radius: number; delay: number }) {
	return (
		<motion.div
			className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-primary shadow-[0_0_20px_rgba(102,252,241,0.6)]"
			style={{ marginLeft: -1, marginTop: -1 }}
			animate={{ rotate: 360 }}
			transition={{ repeat: Infinity, duration: 12 + radius / 80, ease: "linear", delay }}
		>
			<div
				className="absolute -left-1/2 -top-1/2"
				style={{ transform: `translate(-${radius}px, 0)` }}
			/>
		</motion.div>
	);
}
