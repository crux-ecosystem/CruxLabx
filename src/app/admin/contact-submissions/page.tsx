import { prisma } from "@/lib/db";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Calendar, User } from "lucide-react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getContactSubmissions() {
	try {
		const submissions = await prisma.contactSubmission.findMany({
			orderBy: { createdAt: "desc" },
			take: 50,
		});
		return submissions;
	} catch (error) {
		console.error("Failed to fetch submissions:", error);
		return [];
	}
}

export default async function ContactSubmissionsPage() {
	const submissions = await getContactSubmissions();

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
			<div className="mb-8">
				<h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
					Contact Submissions
				</h1>
				<p className="mt-2 text-foreground/70">
					Total submissions: {submissions.length}
				</p>
			</div>

			{submissions.length === 0 ? (
				<Card className="p-8 text-center">
					<p className="text-foreground/60">No submissions yet.</p>
				</Card>
			) : (
				<div className="space-y-4">
					{submissions.map((submission: {
						id: string;
						name: string;
						email: string;
						message: string;
						createdAt: Date;
						updatedAt: Date;
					}) => (
						<Card key={submission.id} className="p-6 hover:border-primary/50 transition-colors">
							<div className="space-y-4">
								{/* Header */}
								<div className="flex items-start justify-between gap-4">
									<div className="flex items-start gap-3 flex-1">
										<User className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
										<div className="flex-1 min-w-0">
											<h3 className="font-semibold text-lg">{submission.name}</h3>
											<a
												href={`mailto:${submission.email}`}
												className="text-sm text-primary hover:underline flex items-center gap-1 mt-1"
											>
												<Mail className="h-4 w-4" />
												{submission.email}
											</a>
										</div>
									</div>
									<div className="flex items-center gap-2 text-xs text-foreground/50 flex-shrink-0">
										<Calendar className="h-3 w-3" />
										{new Date(submission.createdAt).toLocaleDateString("en-US", {
											year: "numeric",
											month: "short",
											day: "numeric",
											hour: "2-digit",
											minute: "2-digit",
										})}
									</div>
								</div>

								{/* Message */}
								<div className="bg-muted/50 rounded-lg p-4 border border-border/50">
									<p className="text-sm leading-relaxed whitespace-pre-wrap">
										{submission.message}
									</p>
								</div>

								{/* Footer */}
								<div className="flex items-center justify-between pt-2 border-t border-border/30">
									<Badge variant="secondary" className="text-xs">
										ID: {submission.id.slice(0, 8)}...
									</Badge>
									<a
										href={`mailto:${submission.email}?subject=Re: Your message to CruxLabX`}
										className="text-sm text-primary hover:underline"
									>
										Reply →
									</a>
								</div>
							</div>
						</Card>
					))}
				</div>
			)}
		</div>
	);
}
