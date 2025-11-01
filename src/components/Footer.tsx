import Link from "next/link";
import { Bolt } from "lucide-react";

export default function Footer() {
	return (
		<footer className="border-t mt-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-foreground/80">
				<div className="flex flex-col items-center gap-4">
					<div className="inline-flex items-center gap-2">
						<Bolt className="h-4 w-4 text-primary" />
						<span>CruxLabx-powered</span>
					</div>
					<nav className="flex items-center gap-6">
						<Link href="/docs" className="hover:text-primary">Docs</Link>
						<Link href="/research" className="hover:text-primary">Research</Link>
						<Link href="https://github.com/crux-ecosystem/IntraMind-Showcase" className="hover:text-primary" target="_blank" rel="noopener noreferrer">GitHub</Link>
						<Link href="/contact" className="hover:text-primary">Contact</Link>
					</nav>
					<p className="text-center opacity-80">© 2025 CruxLabx — Engineering Intelligence from Within</p>
				</div>
			</div>
		</footer>
	);
}
