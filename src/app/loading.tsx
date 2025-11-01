export default function Loading() {
	return (
		<div className="fixed inset-0 z-[60] grid place-items-center bg-background/60 backdrop-blur">
			<div className="relative h-10 w-10">
				<div className="absolute inset-0 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
			</div>
			<span className="sr-only">Loading…</span>
		</div>
	);
}
