import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const securityHeaders = [
	{
		key: "Content-Security-Policy",
		value: [
			"default-src 'self'",
			"script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.hcaptcha.com",
			"style-src 'self' 'unsafe-inline'",
			"img-src 'self' data: blob:",
			"connect-src 'self' https://api.github.com https://generativelanguage.googleapis.com https://api.resend.com",
			"font-src 'self' data:",
			"frame-src https://hcaptcha.com https://*.hcaptcha.com",
		].join("; "),
	},
	{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
	{ key: "X-Frame-Options", value: "DENY" },
	{ key: "X-Content-Type-Options", value: "nosniff" },
	{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
	// Explicitly set Turbopack root to avoid multi-lockfile inference warning
	turbopack: {
		root: __dirname,
	},
	headers: async () => [
		{
			source: "/(.*)",
			headers: securityHeaders,
		},
	],
};

export default withMDX(nextConfig);
