import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "CruxLabx — Engineering Intelligence from Within",
	description:
		"CruxLabx is a frontier R&D venture building self-contained intelligent systems like IntraMind.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={`${spaceGrotesk.variable} antialiased bg-background text-foreground`}> 
				<div className="min-h-dvh flex flex-col">
					<Navbar />
					<main className="flex-1">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
