"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import HCaptcha from "@/components/HCaptcha";
import { useState } from "react";

export default function ContactPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState<string | null>(null);

	async function onSubmit() {
		setStatus(null);
		const captchaEl = document.querySelector<HTMLDivElement>(".h-captcha iframe");
		const hcaptchaToken = (window as any).hcaptcha?.getResponse() || "";
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email, message, hcaptchaToken }),
			});
			const data = await res.json();
			if (data?.ok) {
				setStatus(data?.message || "Message sent successfully!");
				setName(""); setEmail(""); setMessage("");
				// Reset hCaptcha if available
				if ((window as any).hcaptcha) {
					(window as any).hcaptcha.reset();
				}
			} else {
				setStatus(data?.error || "Failed to send message. Please try again.");
			}
		} catch {
			setStatus("Failed to send.");
		}
	}

	return (
		<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
			<h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact</h1>
			<p className="mt-4 text-foreground/80">
				Collaborations, internships, and research partnerships are welcome.
			</p>
			<div className="mt-8 space-y-4">
				<div>
					<label className="text-sm" htmlFor="name">Name</label>
					<Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
				</div>
				<div>
					<label className="text-sm" htmlFor="email">Email</label>
					<Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div>
					<label className="text-sm" htmlFor="message">Message</label>
					<Textarea id="message" placeholder="How can we collaborate?" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} />
				</div>
				<HCaptcha />
				<Button type="button" onClick={onSubmit} className="bg-primary text-primary-foreground hover:opacity-90">Send</Button>
				{status && <p className="text-sm text-foreground/70">{status}</p>}
				<p className="text-sm text-foreground/70">
					Or email directly:{" "}
					<a className="text-primary hover:underline" href="mailto:cruxlabx@gmail.com">
						cruxlabx@gmail.com
					</a>
				</p>
			</div>
		</div>
	);
}
