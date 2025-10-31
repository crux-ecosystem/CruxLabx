import Link from "next/link";

export default function Hero() {
	return (
		<section className="relative overflow-hidden">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_-30%,_color-mix(in_oklch,var(--primary)_40%,transparent),_transparent)]" />
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
				<p className="text-primary text-sm font-medium tracking-widest">ENGINEERING INTELLIGENCE FROM WITHIN</p>
				<h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
					CruxLabx — Building the Brains of Tomorrow
				</h1>
				<p className="mt-6 max-w-2xl text-foreground/80 text-base md:text-lg">
					A frontier R&D venture building self-contained intelligent systems like IntraMind that redefine how localized AI operates inside networks and organizations.
				</p>
				<div className="mt-10 flex flex-col sm:flex-row gap-3">
					<Link href="/projects" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 font-medium hover:opacity-90">
						Explore IntraMind
					</Link>
					<Link href="/docs" className="inline-flex items-center justify-center rounded-md border px-5 py-3 font-medium hover:bg-foreground/5">
						Read the Docs
					</Link>
				</div>
			</div>
		</section>
	);
}
