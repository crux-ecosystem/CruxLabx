"use client";

import { Card as UICard } from "@/components/ui/card";
import TerminalCard from "@/components/TerminalCard";
import { Badge } from "@/components/ui/badge";
import { 
	FileText, 
	Search, 
	Database, 
	Cpu, 
	Shield, 
	Server, 
	Zap, 
	Lock, 
	Download,
	Code,
	Settings,
	Network
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import PerformanceChart from "@/components/PerformanceChart";
import Link from "next/link";

export default function DocsPage() {
	return (
		<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
			{/* Hero */}
			<ScrollReveal direction="up">
				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
						IntraMind Documentation
					</h1>
					<p className="text-lg text-foreground/80 max-w-2xl mx-auto">
						Complete guide to deploying, configuring, and using IntraMind for your organization
					</p>
					<div className="flex items-center justify-center gap-4 mt-6">
						<Link
							href="https://github.com/crux-ecosystem/IntraMind-Showcase"
							target="_blank"
							rel="noopener noreferrer"
							className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
						>
							View on GitHub →
						</Link>
					</div>
				</div>
			</ScrollReveal>

			{/* Overview */}
			<section className="mt-16">
				<ScrollReveal direction="up">
					<h2 className="text-3xl font-semibold mb-6">What is IntraMind?</h2>
				</ScrollReveal>
				<ScrollReveal direction="up" delay={0.1}>
					<UICard className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
						<p className="text-foreground/90 leading-relaxed mb-4">
							IntraMind is a <span className="font-semibold text-primary">local intelligence system</span> that transforms your organization's internal documents into a smart, searchable knowledge network. It runs entirely on your infrastructure, ensuring complete data privacy while delivering AI-powered insights.
						</p>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
							<FeatureBadge icon={<Lock />} label="Privacy-First" />
							<FeatureBadge icon={<Zap />} label="Offline-Capable" />
							<FeatureBadge icon={<Cpu />} label="AI-Powered" />
							<FeatureBadge icon={<FileText />} label="Multi-Format" />
						</div>
					</UICard>
				</ScrollReveal>
			</section>

			{/* Architecture Diagram */}
			<section className="mt-16">
				<ScrollReveal direction="up">
					<h2 className="text-3xl font-semibold mb-6">System Architecture</h2>
				</ScrollReveal>
				<ScrollReveal direction="up" delay={0.1}>
					<UICard className="p-8 bg-white/5 border-primary/20">
						<ArchitectureDiagram />
					</UICard>
				</ScrollReveal>
			</section>

			{/* Installation */}
			<section className="mt-16">
				<ScrollReveal direction="up">
					<h2 className="text-3xl font-semibold mb-6">Installation</h2>
				</ScrollReveal>
				<div className="space-y-6">
					<ScrollReveal direction="up" delay={0.1}>
						<UICard className="p-6">
							<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<Download className="h-5 w-5 text-primary" />
								Prerequisites
							</h3>
							<ul className="space-y-2 text-foreground/80">
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-primary" />
									Python 3.9 or higher
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-primary" />
									8GB RAM minimum (16GB recommended)
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-primary" />
									10GB free disk space
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-primary" />
									Ollama installed (for local LLM)
								</li>
							</ul>
						</UICard>
					</ScrollReveal>
					<ScrollReveal direction="up" delay={0.2}>
						<TerminalCard
							title="Quick Start"
							code={`# Clone the repository
git clone https://github.com/crux-ecosystem/IntraMind-Showcase.git
cd IntraMind-Showcase

# Install dependencies
pip install -r requirements.txt

# Configure your settings
cp config.example.yaml config.yaml

# Start IntraMind
python main.py`}
						/>
					</ScrollReveal>
				</div>
			</section>

			{/* Configuration */}
			<section className="mt-16">
				<ScrollReveal direction="up">
					<h2 className="text-3xl font-semibold mb-6">Configuration</h2>
				</ScrollReveal>
				<div className="grid md:grid-cols-2 gap-6">
					<ScrollReveal direction="left" delay={0.1}>
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
					<ScrollReveal direction="right" delay={0.2}>
						<UICard className="p-6">
							<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<Settings className="h-5 w-5 text-primary" />
								Model Options
							</h3>
							<div className="space-y-4">
								<div>
									<p className="font-medium mb-2">Embedding Models:</p>
									<ul className="space-y-1 text-sm text-foreground/70">
										<li>• all-MiniLM-L6-v2 (Fast, 80MB)</li>
										<li>• all-mpnet-base-v2 (Higher quality, 420MB)</li>
										<li>• multi-qa-MiniLM-L6-cos-v1 (Q&A optimized)</li>
									</ul>
								</div>
								<div>
									<p className="font-medium mb-2">LLM Models:</p>
									<ul className="space-y-1 text-sm text-foreground/70">
										<li>• llama3 (Balanced, 8B)</li>
										<li>• mistral (Faster, 7B)</li>
										<li>• llama3:70b (Highest quality, 70B)</li>
										<li>• codellama (Technical docs)</li>
									</ul>
								</div>
							</div>
						</UICard>
					</ScrollReveal>
				</div>
			</section>

			{/* Performance Chart */}
			<section className="mt-16">
				<ScrollReveal direction="up">
					<h2 className="text-3xl font-semibold mb-6">Performance Metrics</h2>
				</ScrollReveal>
				<ScrollReveal direction="up" delay={0.1}>
					<UICard className="p-8 bg-white/5 border-primary/20">
						<PerformanceChart />
					</UICard>
				</ScrollReveal>
			</section>

			{/* Usage */}
			<section className="mt-16">
				<ScrollReveal direction="up">
					<h2 className="text-3xl font-semibold mb-6">Usage</h2>
				</ScrollReveal>
				<div className="grid md:grid-cols-2 gap-6">
					<ScrollReveal direction="left" delay={0.1}>
						<UICard className="p-6">
							<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<FileText className="h-5 w-5 text-primary" />
								Adding Documents
							</h3>
							<TerminalCard
								code={`# Add documents to the folder
cp /path/to/documents/* ./documents/

# Trigger re-indexing
python main.py --reindex`}
							/>
						</UICard>
					</ScrollReveal>
					<ScrollReveal direction="right" delay={0.2}>
						<UICard className="p-6">
							<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<Code className="h-5 w-5 text-primary" />
								API Example
							</h3>
							<TerminalCard
								language="python"
								code={`import requests

response = requests.post(
    'http://localhost:8080/api/query',
    json={'query': 'What is our policy?'}
)

print(response.json()['answer'])`}
							/>
						</UICard>
					</ScrollReveal>
				</div>
			</section>

			{/* System Components */}
			<section className="mt-16">
				<ScrollReveal direction="up">
					<h2 className="text-3xl font-semibold mb-6">System Components</h2>
				</ScrollReveal>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
					{[
						{ icon: FileText, title: "Document Ingestion", desc: "Processes PDFs, DOCX, images with OCR" },
						{ icon: Search, title: "Text Extraction", desc: "Normalizes and chunks documents" },
						{ icon: Database, title: "Embedding Generation", desc: "Creates vector representations" },
						{ icon: Database, title: "Vector Storage", desc: "Stores in ChromaDB" },
						{ icon: Cpu, title: "Query Engine", desc: "Retrieves relevant context" },
						{ icon: Cpu, title: "LLM Inference", desc: "Generates answers using local models" },
						{ icon: Network, title: "Response Formatting", desc: "Presents results with citations" },
					].map((component, index) => {
						const Icon = component.icon;
						return (
							<ScrollReveal key={index} direction="up" delay={index * 0.1}>
								<UICard className="p-5 hover:border-primary/50 transition-colors">
									<div className="flex items-start gap-3">
										<div className="p-2 rounded-md bg-primary/15 text-primary">
											<Icon className="h-5 w-5" />
										</div>
										<div>
											<h3 className="font-semibold mb-1">{component.title}</h3>
											<p className="text-sm text-foreground/70">{component.desc}</p>
										</div>
									</div>
								</UICard>
							</ScrollReveal>
						);
					})}
				</div>
			</section>

			{/* Deployment */}
			<section className="mt-16">
				<ScrollReveal direction="up">
					<h2 className="text-3xl font-semibold mb-6">Deployment</h2>
				</ScrollReveal>
				<div className="grid md:grid-cols-2 gap-6">
					<ScrollReveal direction="left" delay={0.1}>
						<UICard className="p-6">
							<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<Network className="h-5 w-5 text-primary" />
								LAN Deployment
							</h3>
							<ol className="space-y-2 text-foreground/80 list-decimal list-inside">
								<li>Set <code className="px-1 py-0.5 bg-white/10 rounded">lan_only: true</code> in config</li>
								<li>Configure firewall rules</li>
								<li>Set up SSL certificates (optional)</li>
								<li>Deploy on internal server</li>
							</ol>
						</UICard>
					</ScrollReveal>
					<ScrollReveal direction="right" delay={0.2}>
						<UICard className="p-6">
							<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<Server className="h-5 w-5 text-primary" />
								Docker Deployment
							</h3>
							<TerminalCard
								code={`# Build the image
docker build -t intramind .

# Run the container
docker run -d -p 8080:8080 \\
  -v ./documents:/app/documents \\
  intramind`}
							/>
						</UICard>
					</ScrollReveal>
				</div>
			</section>

			{/* API Reference */}
			<section className="mt-16">
				<ScrollReveal direction="up">
					<h2 className="text-3xl font-semibold mb-6">API Reference</h2>
				</ScrollReveal>
				<ScrollReveal direction="up" delay={0.1}>
					<UICard className="p-6">
						<h3 className="text-xl font-semibold mb-4">POST /api/query</h3>
						<div className="space-y-4">
							<div>
								<p className="font-medium mb-2">Request:</p>
								<TerminalCard
									language="json"
									code={`{
  "query": "Your question here",
  "max_results": 5
}`}
								/>
							</div>
							<div>
								<p className="font-medium mb-2">Response:</p>
								<TerminalCard
									language="json"
									code={`{
  "answer": "Generated answer",
  "sources": [
    {
      "document": "filename.pdf",
      "page": 3,
      "relevance": 0.95
    }
  ]
}`}
								/>
							</div>
						</div>
					</UICard>
				</ScrollReveal>
			</section>

			{/* Best Practices & Troubleshooting */}
			<section className="mt-16">
				<ScrollReveal direction="up">
					<h2 className="text-3xl font-semibold mb-6">Best Practices & Troubleshooting</h2>
				</ScrollReveal>
				<div className="grid md:grid-cols-2 gap-6">
					<ScrollReveal direction="left" delay={0.1}>
						<UICard className="p-6">
							<h3 className="text-xl font-semibold mb-4">Best Practices</h3>
							<ul className="space-y-2 text-foreground/80">
								<li className="flex items-start gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
									<span>Structure documents in logical folders</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
									<span>Re-index when adding new documents</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
									<span>Choose models based on your hardware</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
									<span>Regularly backup vector database</span>
								</li>
							</ul>
						</UICard>
					</ScrollReveal>
					<ScrollReveal direction="right" delay={0.2}>
						<UICard className="p-6">
							<h3 className="text-xl font-semibold mb-4">Troubleshooting</h3>
							<div className="space-y-4">
								<div>
									<p className="font-medium">Slow query responses</p>
									<p className="text-sm text-foreground/70">Reduce chunk size or use smaller embedding model</p>
								</div>
								<div>
									<p className="font-medium">Out of memory</p>
									<p className="text-sm text-foreground/70">Increase RAM or use smaller LLM model</p>
								</div>
								<div>
									<p className="font-medium">Documents not indexing</p>
									<p className="text-sm text-foreground/70">Check file permissions and supported formats</p>
								</div>
							</div>
						</UICard>
					</ScrollReveal>
			</div>
			</section>

			{/* Support */}
			<section className="mt-16">
				<ScrollReveal direction="up">
					<UICard className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 text-center">
						<h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
						<p className="text-foreground/80 mb-6">
							Visit our GitHub repository for issues, documentation, and updates
						</p>
						<Link
							href="https://github.com/crux-ecosystem/IntraMind-Showcase"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
						>
							View GitHub Repository →
						</Link>
					</UICard>
				</ScrollReveal>
			</section>
		</div>
	);
}

function FeatureBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
	return (
		<div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
			<div className="text-primary">{icon}</div>
			<p className="text-xs font-medium text-center">{label}</p>
		</div>
	);
}
