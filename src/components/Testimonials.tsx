"use client";

import Reveal from "@/components/Reveal";

export default function Testimonials() {
	return (
		<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
			<h2 className="text-xl md:text-2xl font-semibold">What People Say</h2>
			<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
				<Quote text="CruxLabx is redefining local AI for secure infrastructures." author="Advisor, AI Systems" />
				<Quote text="IntraMind’s modular design made integration straightforward." author="Partner Engineer" />
				<Quote text="A thoughtful approach to privacy-first intelligence." author="Research Collaborator" />
			</div>
			<div className="mt-10 rounded-xl border bg-white/5 p-6">
				<h3 className="font-semibold">Founder’s Note</h3>
				<p className="mt-2 text-sm text-foreground/80">We’re building intelligence from within—systems that respect boundaries, improve workflows, and elevate organizational cognition.</p>
			</div>
		</section>
	);
}

function Quote({ text, author }: { text: string; author: string }) {
	return (
		<div className="rounded-xl border bg-black/40 p-5 text-sm">
			<p>“{text}”</p>
			<p className="mt-3 text-foreground/60">— {author}</p>
		</div>
	);
}
