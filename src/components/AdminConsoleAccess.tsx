"use client";

import { useEffect } from "react";

export default function AdminConsoleAccess() {
	useEffect(() => {
		// Add global function to console on every page
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
					console.log("❌ Incorrect password!");
					alert("Incorrect password!");
				}
			}
		};

		console.log("💡 Tip: Type show('adminPage') in console to access admin panel");
	}, []);

	return null; // This component renders nothing
}
