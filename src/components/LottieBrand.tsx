"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function LottieBrand() {
	// The file should be placed at public/animations/brand.json
	const src = "/animations/brand.json";
	return (
		<div className="w-40 h-40">
			<Lottie loop play path={src} style={{ width: "100%", height: "100%" }} />
		</div>
	);
}
