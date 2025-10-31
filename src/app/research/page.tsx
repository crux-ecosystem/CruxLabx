export default function ResearchPage() {
	return (
		<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
			<h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Research</h1>
			<p className="mt-4 text-foreground/80">
				We will list abstracts, architecture notes, and links to papers (arXiv/IEEE) here.
			</p>
			<ul className="mt-6 space-y-4 text-sm">
				<li className="border rounded-lg p-4 bg-white/5">
					<p className="font-medium">Intranet to Intelligence — The Crux Way</p>
					<p className="text-foreground/75 mt-1">A position paper on localized AI and organizational cognition.</p>
				</li>
				<li className="border rounded-lg p-4 bg-white/5">
					<p className="font-medium">IntraMind: A Modular Local Intelligence System</p>
					<p className="text-foreground/75 mt-1">Architecture and subsystem interfaces for secure, on-prem inference.</p>
				</li>
			</ul>
		</div>
	);
}
