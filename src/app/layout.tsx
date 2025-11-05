import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RouteBlurOverlay from "@/components/RouteBlurOverlay";
import AdminConsoleAccess from "@/components/AdminConsoleAccess";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
	variable: "--font-sans",
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "CruxLabx — Engineering Intelligence from Within",
	description:
		"CruxLabx is a frontier R&D venture building self-contained intelligent systems like IntraMind.",
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://cruxlabx.vercel.app"),
	openGraph: {
		title: "CruxLabx — Engineering Intelligence from Within",
		description: "Intranet to Intelligence — The Crux Way.",
		url: "/",
		siteName: "CruxLabx",
		images: [{ url: "/vercel.svg", width: 1200, height: 630 }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "CruxLabx",
		description: "Building the Brains of Tomorrow.",
		images: ["/vercel.svg"],
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en" className="dark">
			<body suppressHydrationWarning className={`${spaceGrotesk.variable} antialiased bg-background text-foreground`}> 
				<AdminConsoleAccess />
				<RouteBlurOverlay />
				<div className="relative min-h-dvh flex flex-col">
					<Navbar />
					<main className="flex-1">{children}</main>
					<Footer />
				</div>
      </body>
    </html>
  );
}
