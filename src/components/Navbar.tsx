"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "Community" },
	{ href: "/models", label: "Models" },
	{ href: "/docs", label: "Docs" },
	{ href: "/research", label: "Research" },
	{ href: "/contact", label: "Contact" },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<header className="sticky top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]:bg-background/70">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="h-16 flex items-center justify-between">
					<Link href="/" className="flex items-center gap-3">
						<span className="text-2xl font-semibold tracking-tight">
							<span className="text-foreground">Crux</span>
							<span className="text-red-500">Labx</span>
						</span>
					</Link>
					<nav className="hidden md:flex items-center gap-6 text-sm">
						{navItems.map((item) => (
							<Link key={item.href} href={item.href} className="text-foreground/80 hover:text-primary transition-colors">
								{item.label}
							</Link>
						))}
						<ThemeToggle />
					</nav>
					<button
						className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:text-primary"
						aria-label="Open menu"
						onClick={() => setOpen((v) => !v)}
					>
						<Menu className="h-6 w-6" />
					</button>
				</div>
			</div>
			{open && (
				<div className="md:hidden border-t bg-background/95">
					<div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="py-1 text-foreground/90 hover:text-primary"
								onClick={() => setOpen(false)}
							>
								{item.label}
							</Link>
						))}
						<div className="pt-2"><ThemeToggle /></div>
					</div>
				</div>
			)}
		</header>
	);
}
