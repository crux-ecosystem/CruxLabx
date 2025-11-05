"use client";

import { useEffect, useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	const [isAuthorized, setIsAuthorized] = useState(false);

	useEffect(() => {
		// Immediate check on mount
		const checkAuth = () => {
			const authorized = sessionStorage.getItem("adminAuthorized");
			if (authorized === "true") {
				// Set cookie for middleware
				document.cookie = "adminToken=authenticated; path=/; max-age=86400; SameSite=Strict";
				setIsAuthorized(true);
			} else {
				// Clear cookie and redirect
				document.cookie = "adminToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
				window.location.replace("/");
			}
		};

		checkAuth();

		// Add global function to console
		(window as any).show = (page: string) => {
			if (page === "adminPage") {
				const input = prompt("Enter admin password:");
				if (input === "adminranenu") {
					sessionStorage.setItem("adminAuthorized", "true");
					// Set cookie for middleware
					document.cookie = "adminToken=authenticated; path=/; max-age=86400; SameSite=Strict";
					console.log("✅ Admin access granted!");
					console.log("🔗 Redirecting to admin panel...");
					window.location.href = "/admin/contact-submissions";
				} else {
					console.log("❌ password tappu 😮‍💨!");
					alert("Incorrect password!");
				}
			}
		};

		console.log("💡 Tip: Type show('adminPage') in console to access admin panel");
	}, []);

	const handleLogout = () => {
		sessionStorage.removeItem("adminAuthorized");
		// Clear cookie
		document.cookie = "adminToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
		setIsAuthorized(false);
		console.log("👋 Logged out from admin panel");
		window.location.replace("/");
	};

	// Don't render anything until authorized
	if (!isAuthorized) {
		return null;
	}

	return (
		<div>
			<div className="bg-card border-b border-border sticky top-0 z-10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="flex items-center gap-2">
							<svg
								className="w-5 h-5 text-primary"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
								/>
							</svg>
							<span className="text-sm font-semibold">Admin Panel</span>
						</div>
						<span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
							Authorized
						</span>
					</div>
					<button
						onClick={handleLogout}
						className="text-sm text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2"
					>
						<svg
							className="w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
							/>
						</svg>
						Logout
					</button>
				</div>
			</div>
			{children}
		</div>
	);
}
