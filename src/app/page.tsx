import Hero from "@/components/Hero";
import SectionCard from "@/components/SectionCard";
import { BookOpen, FlaskConical, Rocket, Users } from "lucide-react";

export default function Home() {
	return (
		<div>
			<Hero />
			<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
					<SectionCard
						title="IntraMind MVP"
						description="Explore architecture, subsystem logs, and demo info for our localized AI system."
						cta="View Project"
						href="/projects"
						icon={<Rocket className="h-5 w-5" />}
					/>
					<SectionCard
						title="Documentation"
						description="Read specs, APIs, and internal design notes written in MDX."
						cta="Read Docs"
						href="/docs"
						icon={<BookOpen className="h-5 w-5" />}
					/>
					<SectionCard
						title="Research"
						description="Papers, abstracts, and experiments powering our intranet-to-intelligence vision."
						cta="Browse Research"
						href="/research"
						icon={<FlaskConical className="h-5 w-5" />}
					/>
					<SectionCard
						title="About CruxLabx"
						description="Founding story, mission, and the student innovation background."
						cta="Learn More"
						href="/about"
						icon={<Users className="h-5 w-5" />}
					/>
				</div>
			</section>
		</div>
	);
}
