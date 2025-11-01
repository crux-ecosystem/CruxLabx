"use client";

import { ShieldCheck, Boxes, Lock } from "lucide-react";

const items = [
	{ icon: ShieldCheck, title: "Private AI", desc: "Built for secure networks and on-prem data." },
	{ icon: Boxes, title: "Modular Intelligence", desc: "Plug-in subsystems for ingest, memory, reasoning." },
	{ icon: Lock, title: "Local-first", desc: "Keep control with local LLMs and selective fallback." },
];

export default function HomeBenefits() {
	return (
		<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
			<h2 className="text-xl md:text-2xl font-semibold">Why CruxLabx</h2>
			<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
				{items.map(({ icon: Icon, title, desc }) => (
					<div key={title} className="rounded-xl border bg-white/5 p-5">
						<div className="h-10 w-10 rounded-lg bg-primary/15 text-primary grid place-items-center">
							<Icon className="h-5 w-5" />
						</div>
						<h3 className="mt-3 font-semibold">{title}</h3>
						<p className="mt-1 text-sm text-foreground/75">{desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
