import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectsPage() {
	return (
		<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
			<h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Projects</h1>
			<p className="mt-4 text-foreground/80 max-w-2xl">
				IntraMind MVP: localized, modular AI designed to operate securely inside organizational networks. Below are placeholders for the interactive demo, logs, and architecture views.
			</p>
			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card>
					<CardHeader>
						<CardTitle>Architecture Overview</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="aspect-video rounded-lg bg-white/5" />
						<p className="mt-3 text-sm text-foreground/70">System diagram or interactive architecture will be embedded here.</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Runtime Logs</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="h-48 rounded-lg bg-black/60 font-mono text-xs p-3 overflow-auto border">
							<span className="opacity-60">[placeholder] IntraMind subsystems emitting structured logs…</span>
						</div>
						<p className="mt-3 text-sm text-foreground/70">Stream or mock data can be wired later.</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
