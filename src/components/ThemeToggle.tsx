"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState(true);
	useEffect(() => {
		const saved = localStorage.getItem("theme");
		const preferDark = saved ? saved === "dark" : true;
		document.documentElement.classList.toggle("dark", preferDark);
		setIsDark(preferDark);
	}, []);

	function toggle() {
		const next = !isDark;
		document.documentElement.classList.toggle("dark", next);
		localStorage.setItem("theme", next ? "dark" : "light");
		setIsDark(next);
	}

	return (
		<button
			onClick={toggle}
			className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-foreground/5"
			aria-label="Toggle theme"
		>
			{isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
			<span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
		</button>
	);
}
