"use client";

import { motion } from "framer-motion";
import { FileText, Search, Database, Cpu, Network, Zap } from "lucide-react";

export default function ArchitectureDiagram() {
	const stages = [
		{ icon: FileText, label: "Documents", color: "blue", delay: 0 },
		{ icon: Zap, label: "Ingestion", color: "yellow", delay: 0.2 },
		{ icon: Database, label: "Embeddings", color: "purple", delay: 0.4 },
		{ icon: Database, label: "Vector DB", color: "green", delay: 0.6 },
		{ icon: Search, label: "Query", color: "cyan", delay: 0.8 },
		{ icon: Cpu, label: "LLM", color: "red", delay: 1.0 },
		{ icon: Network, label: "Response", color: "primary", delay: 1.2 },
	];

	return (
		<div className="w-full py-12">
			<div className="relative">
				{/* Connection Lines */}
				<svg className="absolute inset-0 w-full h-20 pointer-events-none hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
					{stages.slice(0, -1).map((_, i) => {
						const startX = (i / (stages.length - 1)) * 100;
						const endX = ((i + 1) / (stages.length - 1)) * 100;
						return (
							<motion.path
								key={i}
								d={`M ${startX} 50 L ${endX} 50`}
								stroke="url(#gradient)"
								strokeWidth="0.5"
								fill="none"
								initial={{ pathLength: 0, opacity: 0 }}
								animate={{ pathLength: 1, opacity: 0.6 }}
								transition={{ duration: 1, delay: i * 0.2 }}
							/>
						);
					})}
					<defs>
						<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#66FCF1" stopOpacity="0.3" />
							<stop offset="100%" stopColor="#66FCF1" stopOpacity="0.8" />
						</linearGradient>
					</defs>
				</svg>

				{/* Stages */}
				<div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 relative z-10">
					{stages.map((stage, index) => {
						const Icon = stage.icon;
						const colors = {
							blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400",
							yellow: "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 text-yellow-400",
							purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400",
							green: "from-green-500/20 to-green-600/20 border-green-500/30 text-green-400",
							cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 text-cyan-400",
							red: "from-red-500/20 to-red-600/20 border-red-500/30 text-red-400",
							primary: "from-primary/20 to-primary/40 border-primary/50 text-primary",
						};

						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.5, y: 20 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: stage.delay,
									type: "spring",
									stiffness: 200,
								}}
								className="flex flex-col items-center gap-3 flex-1"
							>
								<motion.div
									className={`relative rounded-xl border-2 bg-gradient-to-br ${colors[stage.color as keyof typeof colors]} p-6 w-24 h-24 flex items-center justify-center`}
									whileHover={{ scale: 1.1, rotate: 5 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<Icon className="h-10 w-10" />
									<motion.div
										className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colors[stage.color as keyof typeof colors]} opacity-0`}
										animate={{
											opacity: [0, 0.5, 0],
											scale: [1, 1.2, 1],
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
											delay: stage.delay,
										}}
									/>
								</motion.div>
								<p className="text-sm font-medium text-center">{stage.label}</p>
							</motion.div>
						);
					})}
				</div>

				{/* Arrow indicators for mobile */}
				<div className="md:hidden flex flex-col items-center gap-2 mt-4">
					{stages.slice(0, -1).map((_, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: stages[i].delay + 0.3 }}
							className="text-primary"
						>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path
									d="M12 4 L12 20 M12 20 L8 16 M12 20 L16 16"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}

