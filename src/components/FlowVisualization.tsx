"use client";

export default function FlowVisualization() {
	return (
		<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
			<h2 className="text-xl md:text-2xl font-semibold">See How IntraMind Thinks</h2>
			<div className="mt-6 rounded-xl border bg-white/5 p-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
					<Box label="User Query" />
					<Arrow />
					<Box label="Retrieval" />
					<Arrow />
					<Box label="Context Engine" />
					<Arrow />
					<Box label="Response" />
				</div>
			</div>
		</section>
	);
}

function Box({ label }: { label: string }) {
	return (
		<div className="rounded-lg border bg-black/40 p-4 text-center">
			<p className="text-sm font-medium">{label}</p>
		</div>
	);
}

function Arrow() {
	return (
		<div className="hidden md:flex items-center justify-center">
			<svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 12 H48" stroke="currentColor" strokeOpacity="0.6" />
				<path d="M48 4 L60 12 L48 20" fill="none" stroke="currentColor" strokeOpacity="0.8" />
			</svg>
		</div>
	);
}
