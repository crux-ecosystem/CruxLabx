import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
	return (
		<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
			<h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact</h1>
			<p className="mt-4 text-foreground/80">
				Collaborations, internships, and research partnerships are welcome. For now, this form is a UI only.
			</p>
			<form className="mt-8 space-y-4">
				<div>
					<label className="text-sm" htmlFor="name">Name</label>
					<Input id="name" placeholder="Your name" />
				</div>
				<div>
					<label className="text-sm" htmlFor="email">Email</label>
					<Input id="email" type="email" placeholder="you@example.com" />
				</div>
				<div>
					<label className="text-sm" htmlFor="message">Message</label>
					<Textarea id="message" placeholder="How can we collaborate?" rows={6} />
				</div>
				<Button type="button" className="bg-primary text-primary-foreground hover:opacity-90">Send</Button>
				<p className="text-sm text-foreground/70">Or email: <a className="text-primary" href="mailto:hello@cruxlabx.com">hello@cruxlabx.com</a></p>
			</form>
		</div>
	);
}
