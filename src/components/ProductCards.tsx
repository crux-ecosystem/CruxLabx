"use client";

import { Brain, Network, Cpu } from "lucide-react";
import Link from "next/link";

const items = [
	{
		title: "IntraMind",
		desc: "Localized, modular AI designed for secure, on-prem intelligence.",
		icon: Brain,
		href: "/models",
	},
	{
		title: "IntraLink",
		desc: "Future: knowledge routing layer across private networks.",
		icon: Network,
		href: "/models",
	},
	{
		title: "IntraNetCore",
		desc: "Future: inference fabric for edge nodes and services.",
		icon: Cpu,
		href: "/models",
	},
];

export default function ProductCards() {
	return (
		<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
			<h2 className="text-xl md:text-2xl font-semibold">Our Intelligence Systems</h2>
			<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
				{items.map(({ title, desc, icon: Icon, href }) => (
					<Link key={title} href={href}>
						<div className="relative rounded-xl border bg-white/5 p-5 md:p-6">
							<div className="flex items-start gap-4">
								<div className="h-10 w-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
									<Icon className="h-5 w-5" />
								</div>
								<div>
									<h3 className="text-lg font-semibold">{title}</h3>
									<p className="mt-1 text-sm text-foreground/75">{desc}</p>
									<p className="mt-3 text-sm font-medium text-primary">Learn more →</p>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
