"use client";

import Link from "next/link";
import LottieBrand from "@/components/LottieBrand";

export default function Hero() {
	return (
		<section className="relative">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
				<p className="text-primary text-sm font-medium tracking-widest">ENGINEERING INTELLIGENCE FROM WITHIN</p>
				<h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
					CruxLabx — Building the Brains of Tomorrow
				</h1>
				<p className="mt-6 max-w-2xl text-foreground/80 text-base md:text-lg">
					A frontier R&D venture building self-contained intelligent systems like IntraMind that redefine how localized AI operates inside networks and organizations.
				</p>
				<div className="mt-8">
					<LottieBrand />
				</div>
				<div className="mt-10 flex flex-col sm:flex-row gap-3">
					<Link href="/models" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 font-medium">
						Explore IntraMind
					</Link>
					<Link href="/research" className="inline-flex items-center justify-center rounded-md border px-5 py-3 font-medium">
						Research Hub
					</Link>
				</div>
			</div>
		</section>
	);
}
