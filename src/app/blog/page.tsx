export default function BlogPage() {
	return (
		<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
			<h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Insights</h1>
			<p className="mt-4 text-foreground/80">Stories from the field, design notes, and AI philosophy.</p>
			<ul className="mt-6 space-y-4 text-sm">
				<li className="rounded-xl border bg-white/5 p-5">
					<p className="font-medium">Local-first AI: Why it matters</p>
					<p className="text-foreground/70 mt-1">Thoughts on data boundaries and organizational cognition.</p>
				</li>
				<li className="rounded-xl border bg-white/5 p-5">
					<p className="font-medium">Designing modular intelligence</p>
					<p className="text-foreground/70 mt-1">Subsystems that compose: ingest, memory, reasoning, tools.</p>
				</li>
			</ul>
		</div>
	);
}
