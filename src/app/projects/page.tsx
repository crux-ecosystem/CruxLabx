import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TerminalCard from "@/components/TerminalCard";
import { ExternalLink, Github, BookOpen, Rocket } from "lucide-react";

export default function ProjectsPage() {
	return (
		<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
			<Reveal>
				<div className="text-center max-w-3xl mx-auto mb-12">
					<Badge className="mb-4" variant="secondary">Featured Project</Badge>
					<h1 className="text-3xl md:text-4xl font-semibold tracking-tight">IntraMind</h1>
					<p className="mt-4 text-foreground/80">
						Our flagship project: A localized, modular AI system designed to operate securely inside organizational networks.
					</p>
					<div className="flex items-center justify-center gap-4 mt-6">
						<Link href="https://github.com/crux-ecosystem/IntraMind-Showcase" target="_blank" rel="noopener noreferrer">
							<Button variant="default" className="gap-2">
								<Github className="h-4 w-4" />
								View on GitHub
							</Button>
						</Link>
						<Link href="/docs">
							<Button variant="outline" className="gap-2">
								<BookOpen className="h-4 w-4" />
								Documentation
							</Button>
						</Link>
					</div>
				</div>
			</Reveal>

			{/* Quick Demo */}
			<section className="mt-12">
				<Reveal>
					<h2 className="text-2xl md:text-3xl font-semibold font-[var(--font-display)] mb-6">Quick Demo</h2>
				</Reveal>
				<Reveal delay={0.05}>
					<TerminalCard
						title="IntraMind in Action"
						code={`$ python main.py
[INFO] Starting IntraMind...
[INFO] Loading embedding model: all-MiniLM-L6-v2
[INFO] Connecting to vector database: ChromaDB
[INFO] Initializing LLM: llama3
[INFO] Processing documents from ./documents
[INFO] Indexed 127 documents (2,543 chunks)
[INFO] Server running at http://localhost:8080
[INFO] Ready to answer queries!

> What is our company's remote work policy?
[SEARCH] Finding relevant documents...
[FOUND] 5 relevant chunks from 3 documents
[LLM] Generating answer...

Answer: Based on your company documents, the remote work 
policy allows employees to work remotely up to 3 days per 
week with manager approval. Full-time remote work requires 
VP approval and is evaluated on a case-by-case basis.

Sources:
- HR_Policy_2024.pdf (page 12)
- Employee_Handbook.docx (section 4.2)
- Remote_Work_Guidelines.pdf (page 3)`}
					/>
				</Reveal>
			</section>

			{/* Architecture Overview */}
			<section className="mt-12">
				<Reveal>
					<h2 className="text-2xl md:text-3xl font-semibold font-[var(--font-display)] mb-6">System Architecture</h2>
				</Reveal>
				<Reveal delay={0.05}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<Card>
							<CardHeader>
								<CardTitle>Data Flow</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-3 text-sm">
									<FlowStep number={1} title="Document Ingestion" description="Upload PDFs, DOCX, images" />
									<FlowStep number={2} title="Text Extraction" description="OCR + parsing + chunking" />
									<FlowStep number={3} title="Embedding Generation" description="Convert to vector representations" />
									<FlowStep number={4} title="Vector Storage" description="Store in ChromaDB" />
									<FlowStep number={5} title="Query Processing" description="Semantic search + LLM generation" />
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Key Components</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-3">
									<ComponentItem name="Document Processor" tech="PyPDF2, python-docx" />
									<ComponentItem name="Embedding Engine" tech="Sentence Transformers" />
									<ComponentItem name="Vector Database" tech="ChromaDB" />
									<ComponentItem name="LLM Interface" tech="Ollama (Llama 3)" />
									<ComponentItem name="API Server" tech="FastAPI" />
									<ComponentItem name="Web Interface" tech="React + TailwindCSS" />
								</div>
							</CardContent>
						</Card>
					</div>
				</Reveal>
			</section>

			{/* Features */}
			<section className="mt-12">
				<Reveal>
					<h2 className="text-2xl md:text-3xl font-semibold font-[var(--font-display)] mb-6">Key Features</h2>
				</Reveal>
				<Reveal delay={0.05}>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<FeatureBox
							title="Privacy First"
							description="All data stays on your infrastructure. Zero cloud dependencies."
							icon="🔒"
						/>
						<FeatureBox
							title="Offline Capable"
							description="Works without internet. Perfect for secure environments."
							icon="⚡"
						/>
						<FeatureBox
							title="Multi-Format"
							description="Supports PDF, DOCX, images, and scanned documents."
							icon="📄"
						/>
						<FeatureBox
							title="Smart Search"
							description="Semantic search powered by vector embeddings."
							icon="🔍"
						/>
						<FeatureBox
							title="Contextual Answers"
							description="AI-generated responses with source citations."
							icon="🧠"
						/>
						<FeatureBox
							title="Easy Deployment"
							description="Simple setup with Docker or Python."
							icon="🚀"
						/>
					</div>
				</Reveal>
			</section>

			{/* Getting Started */}
			<section className="mt-12">
				<Reveal>
					<h2 className="text-2xl md:text-3xl font-semibold font-[var(--font-display)] mb-6">Get Started</h2>
				</Reveal>
				<Reveal delay={0.05}>
					<Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
						<div className="flex items-start gap-4">
							<Rocket className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
							<div>
								<h3 className="text-xl font-semibold mb-3">Ready to try IntraMind?</h3>
								<p className="text-foreground/80 mb-4">
									Follow our comprehensive documentation to set up IntraMind in your organization. 
									It takes less than 10 minutes to get started.
								</p>
								<div className="flex gap-3">
									<Link href="/docs">
										<Button variant="default">Read Documentation</Button>
									</Link>
									<Link href="/models">
										<Button variant="outline">View Model Details</Button>
									</Link>
								</div>
							</div>
						</div>
					</Card>
				</Reveal>
			</section>
		</div>
	);
}

function FlowStep({ number, title, description }: { number: number; title: string; description: string }) {
	return (
		<div className="flex items-start gap-3">
			<div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold">
				{number}
			</div>
			<div>
				<p className="font-medium text-sm">{title}</p>
				<p className="text-xs text-foreground/60">{description}</p>
			</div>
		</div>
	);
}

function ComponentItem({ name, tech }: { name: string; tech: string }) {
	return (
		<div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
			<span className="text-sm font-medium">{name}</span>
			<Badge variant="secondary" className="text-xs">{tech}</Badge>
		</div>
	);
}

function FeatureBox({ title, description, icon }: { title: string; description: string; icon: string }) {
	return (
		<Card className="p-5 hover:border-primary/50 transition-colors">
			<div className="text-3xl mb-3">{icon}</div>
			<h3 className="font-semibold mb-2">{title}</h3>
			<p className="text-sm text-foreground/70">{description}</p>
		</Card>
	);
}
