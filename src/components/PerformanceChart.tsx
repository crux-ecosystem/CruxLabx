"use client";

import { motion } from "framer-motion";

interface ChartBarProps {
	label: string;
	value: number;
	maxValue: number;
	color: string;
	delay: number;
}

function ChartBar({ label, value, maxValue, color, delay }: ChartBarProps) {
	const percentage = (value / maxValue) * 100;

	return (
		<div className="flex flex-col items-center gap-2">
			<div className="relative w-full h-48 bg-white/5 rounded-lg overflow-hidden border border-white/10">
				<motion.div
					className={`absolute bottom-0 w-full bg-gradient-to-t ${color} rounded-t-lg`}
					initial={{ height: 0 }}
					animate={{ height: `${percentage}%` }}
					transition={{ duration: 1, delay, ease: "easeOut" }}
				/>
				<div className="absolute inset-0 flex items-end justify-center pb-2">
					<span className="text-xs font-semibold">{value}ms</span>
				</div>
			</div>
			<p className="text-sm font-medium">{label}</p>
		</div>
	);
}

export default function PerformanceChart() {
	const metrics = [
		{ label: "Embedding", value: 45, maxValue: 200, color: "from-blue-500 to-blue-600" },
		{ label: "Search", value: 120, maxValue: 200, color: "from-purple-500 to-purple-600" },
		{ label: "LLM", value: 180, maxValue: 200, color: "from-green-500 to-green-600" },
		{ label: "Total", value: 345, maxValue: 500, color: "from-[#66FCF1] to-[#66FCF1]/80" },
	];

	return (
		<div className="w-full py-8">
			<h3 className="text-xl font-semibold mb-6 text-center">Query Performance</h3>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				{metrics.map((metric, index) => (
					<ChartBar
						key={metric.label}
						label={metric.label}
						value={metric.value}
						maxValue={metric.maxValue}
						color={metric.color}
						delay={index * 0.2}
					/>
				))}
			</div>
			<p className="text-sm text-foreground/60 text-center mt-4">
				Average response time: &lt;350ms (local deployment)
			</p>
		</div>
	);
}

