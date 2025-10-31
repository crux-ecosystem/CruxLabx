import Link from "next/link";

export default function Footer() {
	return (
		<footer className="border-t mt-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-foreground/70">
				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					<p>
						© {new Date().getFullYear()} CruxLabx. All rights reserved.
					</p>
					<nav className="flex items-center gap-4">
						<Link href="/privacy" className="hover:text-primary">Privacy</Link>
						<Link href="/terms" className="hover:text-primary">Terms</Link>
						<Link href="https://github.com/" className="hover:text-primary" target="_blank" rel="noopener noreferrer">GitHub</Link>
					</nav>
				</div>
			</div>
		</footer>
	);
}
