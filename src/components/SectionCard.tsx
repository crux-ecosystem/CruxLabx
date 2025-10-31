import { ReactNode } from "react";

export default function SectionCard({ title, description, cta, href, icon }: {
	title: string;
	description: string;
	cta: string;
	href: string;
	icon?: ReactNode;
}) {
	return (
		<a
			href={href}
			className="group relative block rounded-xl border bg-white/5 backdrop-blur transition hover:border-primary/40 hover:bg-white/10 p-5 md:p-6"
		>
			<div className="flex items-start gap-4">
				<div className="h-10 w-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
					{icon}
				</div>
				<div>
					<h3 className="text-lg font-semibold tracking-tight group-hover:text-primary">{title}</h3>
					<p className="mt-1 text-sm text-foreground/75 max-w-prose">{description}</p>
					<p className="mt-3 text-sm font-medium text-primary">{cta} →</p>
				</div>
			</div>
		</a>
	);
}
