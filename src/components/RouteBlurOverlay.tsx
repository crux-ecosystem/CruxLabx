"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteBlurOverlay() {
	const pathname = usePathname();
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (!pathname) return;
		setVisible(true);
		const t = setTimeout(() => setVisible(false), 250);
		return () => clearTimeout(t);
	}, [pathname]);

	if (!visible) return null;
	return (
		<div className="fixed inset-0 z-[70] backdrop-blur-sm bg-black/10" aria-hidden />
	);
}
