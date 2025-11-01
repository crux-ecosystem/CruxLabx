"use client";

import { Badge } from "@/components/ui/badge";
import { Card as UICard } from "@/components/ui/card";
import TerminalCard from "@/components/TerminalCard";
import { Lock, Zap, Brain, Building2, FileText, Search, Database, Cpu, Shield, Server } from "lucide-react";
import Link from "next/link";
import HeroReveal from "@/components/animations/HeroReveal";
import LightSweep from "@/components/animations/LightSweep";
import TypewriterReveal from "@/components/animations/TypewriterReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GradientPulse from "@/components/animations/GradientPulse";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

export default function ModelsPage() {
	return (
		<div className="min-h-screen">
			{/* Hero Section with Animations */}
			<section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 overflow-hidden">
				<GradientPulse className="absolute inset-0 -z-10 rounded-3xl" />
				<div className="text-center max-w-4xl mx-auto relative z-10">
					<HeroReveal>
						<Badge className="mb-6" variant="secondary">
							Offline-First AI Knowledge Base
						</Badge>
					</HeroReveal>
					
					<HeroReveal delay={0.2}>
						<LightSweep>
							<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-6">
								IntraMind
							</h1>
						</LightSweep>
					</HeroReveal>

					<HeroReveal delay={0.4}>
						<div className="mt-8 mb-12">
							<TypewriterReveal
								text="To empower institutions and private organizations with secure, offline-first AI systems that make every internal document instantly searchable, understandable, and actionable — without relying on the cloud."
								speed={30}
								className="text-lg md:text-xl text-foreground/90 leading-relaxed"
							/>
						</div>
					</HeroReveal>

					<HeroReveal delay={0.6}>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Link
								href="https://github.com/crux-ecosystem/IntraMind-Showcase"
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
							>
								View on GitHub →
							</Link>
							<Link
								href="/docs"
								className="px-6 py-3 rounded-lg border border-primary/50 text-primary hover:bg-primary/10 transition-colors font-medium"
							>
								Documentation
							</Link>
						</div>
					</HeroReveal>
				</div>
			</section>

			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
				{/* What is IntraMind */}
				<section className="mt-16">
					<ScrollReveal direction="up">
						<h2 className="text-3xl md:text-4xl font-semibold font-[var(--font-display)] mb-8 text-center">
							What is IntraMind?
						</h2>
					</ScrollReveal>
					<ScrollReveal direction="up" delay={0.1}>
						<UICard className="p-8 md:p-10 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
							<p className="text-lg text-foreground/90 leading-relaxed mb-4">
								IntraMind is a <span className="font-semibold text-primary">local intelligence system</span> that transforms an organization's internal documents — PDFs, Word files, reports, and even scanned papers — into a smart, searchable knowledge network.
							</p>
							<p className="text-lg text-foreground/90 leading-relaxed">
								It runs securely inside the company's own network (LAN), ensuring full data privacy while delivering AI-powered answers and insights in real time.
							</p>
						</UICard>
					</ScrollReveal>
				</section>

				{/* Why It Matters */}
				<section className="mt-20">
					<ScrollReveal direction="up">
						<h2 className="text-3xl md:text-4xl font-semibold font-[var(--font-display)] mb-12 text-center">
							Why It Matters
						</h2>
					</ScrollReveal>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<ScrollReveal direction="left" delay={0.1}>
							<FeatureCard
								icon={<Lock className="h-6 w-6" />}
								title="Private"
								description="Runs inside your local servers; no data ever leaves the network."
								gradient="from-blue-500/10 to-blue-600/10"
								iconColor="text-blue-400"
							/>
						</ScrollReveal>
						<ScrollReveal direction="right" delay={0.2}>
							<FeatureCard
								icon={<Zap className="h-6 w-6" />}
								title="Fast"
								description="Delivers results instantly, even when completely offline."
								gradient="from-yellow-500/10 to-yellow-600/10"
								iconColor="text-yellow-400"
							/>
						</ScrollReveal>
						<ScrollReveal direction="left" delay={0.3}>
							<FeatureCard
								icon={<Brain className="h-6 w-6" />}
								title="Smart"
								description="Combines powerful document retrieval with AI-driven reasoning."
								gradient="from-purple-500/10 to-purple-600/10"
								iconColor="text-purple-400"
							/>
						</ScrollReveal>
						<ScrollReveal direction="right" delay={0.4}>
							<FeatureCard
								icon={<Building2 className="h-6 w-6" />}
								title="Adaptable"
								description="A single solution for colleges, corporate offices, R&D labs, and government departments."
								gradient="from-green-500/10 to-green-600/10"
								iconColor="text-green-400"
							/>
						</ScrollReveal>
					</div>
				</section>

				{/* System Architecture */}
				<section className="mt-20">
					<ScrollReveal direction="up">
						<h2 className="text-3xl md:text-4xl font-semibold font-[var(--font-display)] mb-12 text-center">
							System Architecture
						</h2>
					</ScrollReveal>
					<ScrollReveal direction="up" delay={0.1}>
						<UICard className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 mb-12">
							<ArchitectureDiagram />
						</UICard>
					</ScrollReveal>
					<ScrollReveal direction="up" delay={0.2}>
						<h3 className="text-2xl font-semibold mb-6 text-center">Architecture Components</h3>
					</ScrollReveal>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<ScrollReveal direction="up" delay={0.1}>
							<ArchitectureCard
								icon={<FileText className="h-5 w-5" />}
								title="Document Ingestion"
								description="Supports PDF, DOCX, images, and scanned documents with OCR"
							/>
						</ScrollReveal>
						<ScrollReveal direction="up" delay={0.2}>
							<ArchitectureCard
								icon={<Search className="h-5 w-5" />}
								title="Smart Retrieval"
								description="Vector embeddings and semantic search for accurate context"
							/>
						</ScrollReveal>
						<ScrollReveal direction="up" delay={0.3}>
							<ArchitectureCard
								icon={<Database className="h-5 w-5" />}
								title="Local Storage"
								description="All data stored securely on your infrastructure"
							/>
						</ScrollReveal>
						<ScrollReveal direction="up" delay={0.4}>
							<ArchitectureCard
								icon={<Cpu className="h-5 w-5" />}
								title="Local LLM"
								description="Runs models like Llama 3, Mistral via Ollama"
							/>
						</ScrollReveal>
						<ScrollReveal direction="up" delay={0.5}>
							<ArchitectureCard
								icon={<Shield className="h-5 w-5" />}
								title="Privacy First"
								description="Zero external API calls, complete data sovereignty"
							/>
						</ScrollReveal>
						<ScrollReveal direction="up" delay={0.6}>
							<ArchitectureCard
								icon={<Server className="h-5 w-5" />}
								title="LAN Deployment"
								description="Deploy on your internal network infrastructure"
							/>
						</ScrollReveal>
					</div>
				</section>

				{/* Quick Start */}
				<section className="mt-20">
					<ScrollReveal direction="up">
						<h2 className="text-3xl md:text-4xl font-semibold font-[var(--font-display)] mb-8 text-center">
							Quick Start
						</h2>
					</ScrollReveal>
					<ScrollReveal direction="up" delay={0.1}>
						<TerminalCard
							title="Installation"
							code={`# Clone the repository
$ git clone https://github.com/crux-ecosystem/IntraMind-Showcase.git
$ cd IntraMind-Showcase

# Install dependencies
$ pip install -r requirements.txt

# Start IntraMind
$ python main.py`}
						/>
					</ScrollReveal>
				</section>

				{/* Configuration Example */}
				<section className="mt-20">
					<ScrollReveal direction="up">
						<h2 className="text-3xl md:text-4xl font-semibold font-[var(--font-display)] mb-8 text-center">
							Configuration
						</h2>
					</ScrollReveal>
					<ScrollReveal direction="up" delay={0.1}>
						<TerminalCard
							title="config.yaml"
							showLineNumbers
							code={`# IntraMind Configuration
model:
  embedding: "all-MiniLM-L6-v2"
  llm: "llama3"
  
storage:
  vector_db: "chromadb"
  documents_path: "./documents"
  
server:
  host: "0.0.0.0"
  port: 8080
  lan_only: true`}
						/>
					</ScrollReveal>
				</section>

				{/* Use Cases */}
				<section className="mt-20">
					<ScrollReveal direction="up">
						<h2 className="text-3xl md:text-4xl font-semibold font-[var(--font-display)] mb-12 text-center">
							Use Cases
						</h2>
					</ScrollReveal>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<ScrollReveal direction="left" delay={0.1}>
							<UseCaseCard
								title="Educational Institutions"
								description="Search through research papers, course materials, and administrative documents instantly."
								examples={["Library management", "Research assistance", "Course material search"]}
							/>
						</ScrollReveal>
						<ScrollReveal direction="right" delay={0.2}>
							<UseCaseCard
								title="Corporate Offices"
								description="Access company policies, reports, and internal documentation with AI-powered search."
								examples={["Policy lookup", "Report analysis", "Knowledge management"]}
							/>
						</ScrollReveal>
						<ScrollReveal direction="left" delay={0.3}>
							<UseCaseCard
								title="R&D Laboratories"
								description="Query technical documents, research papers, and experimental data securely."
								examples={["Patent search", "Literature review", "Data analysis"]}
							/>
						</ScrollReveal>
						<ScrollReveal direction="right" delay={0.4}>
							<UseCaseCard
								title="Government Departments"
								description="Secure document management and retrieval for sensitive information."
								examples={["Compliance checks", "Document retrieval", "Policy analysis"]}
							/>
						</ScrollReveal>
					</div>
				</section>
			</div>
		</div>
	);
}

function FeatureCard({
	icon,
	title,
	description,
	gradient,
	iconColor,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
	gradient: string;
	iconColor: string;
}) {
	return (
		<UICard className={`p-6 bg-gradient-to-br ${gradient} border-primary/20 hover:scale-105 transition-transform duration-300`}>
			<div className="flex items-start gap-4">
				<div className={`p-3 rounded-lg bg-white/10 ${iconColor}`}>
					{icon}
				</div>
				<div>
					<h3 className="text-lg font-semibold mb-2">{title}</h3>
					<p className="text-sm text-foreground/80">{description}</p>
				</div>
			</div>
		</UICard>
	);
}

function ArchitectureCard({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<UICard className="p-5 hover:shadow-lg transition-shadow duration-300 hover:border-primary/50">
			<div className="flex items-start gap-3">
				<div className="p-2 rounded-md bg-primary/15 text-primary">
					{icon}
				</div>
				<div>
					<h3 className="font-semibold mb-1">{title}</h3>
					<p className="text-sm text-foreground/70">{description}</p>
				</div>
			</div>
		</UICard>
	);
}

function UseCaseCard({
	title,
	description,
	examples,
}: {
	title: string;
	description: string;
	examples: string[];
}) {
	return (
		<UICard className="p-6 hover:border-primary/50 transition-colors duration-300">
			<h3 className="text-xl font-semibold mb-3">{title}</h3>
			<p className="text-foreground/80 mb-4">{description}</p>
			<div className="space-y-2">
				<p className="text-sm font-medium text-foreground/70">Examples:</p>
				<ul className="space-y-1">
					{examples.map((example, index) => (
						<li key={index} className="text-sm text-foreground/70 flex items-center gap-2">
							<span className="w-1.5 h-1.5 rounded-full bg-primary" />
							{example}
						</li>
					))}
				</ul>
			</div>
		</UICard>
	);
}
