import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TerminalCard from "@/components/TerminalCard";
import { ExternalLink, GitBranch, FileText, Cpu, Database, Network, BookOpen, Calendar } from "lucide-react";
import { researchPapers, blogPosts, roadmapVersions } from "@/content/research";

async function getReleases() {
	try {
		const res = await fetch("https://api.github.com/repos/crux-ecosystem/IntraMind-Showcase/releases?per_page=5", {
			next: { revalidate: 3600 },
			headers: { Accept: "application/vnd.github+json" },
		});
		if (!res.ok) return [] as any[];
		return (await res.json()) as any[];
	} catch {
		return [] as any[];
	}
}

export default async function ResearchPage() {
	const releases = await getReleases();
	return (
		<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
			<Reveal>
				<h1 className="text-3xl md:text-4xl font-semibold tracking-tight">IntraMind Research</h1>
				<p className="mt-4 text-foreground/80 max-w-3xl">
					Exploring localized intelligence: technical insights, architecture decisions, and development progress for IntraMind.
				</p>
			</Reveal>

			{/* Technical Overview */}
			<section className="mt-12">
				<Reveal>
					<h2 className="text-2xl md:text-3xl font-semibold font-[var(--font-display)] mb-6">Technical Overview</h2>
				</Reveal>
				<Reveal delay={0.05}>
					<Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
						<p className="text-foreground/90 leading-relaxed mb-4">
							IntraMind represents a paradigm shift in organizational knowledge management. Unlike cloud-based solutions that compromise data privacy, IntraMind operates entirely within your local network, ensuring complete data sovereignty while delivering enterprise-grade AI capabilities.
						</p>
						<p className="text-foreground/90 leading-relaxed">
							The system leverages state-of-the-art retrieval-augmented generation (RAG) techniques, combining dense vector embeddings with local large language models to provide accurate, contextual answers from your organization's document corpus.
						</p>
					</Card>
				</Reveal>
			</section>

			{/* Architecture Highlights */}
			<section className="mt-12">
				<Reveal>
					<h2 className="text-2xl md:text-3xl font-semibold font-[var(--font-display)] mb-6">Architecture Highlights</h2>
				</Reveal>
				<Reveal delay={0.05}>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<TechCard
							icon={<FileText className="h-5 w-5" />}
							title="Document Processing Pipeline"
							description="Multi-format ingestion with OCR support for scanned documents"
							technologies={["PyPDF2", "python-docx", "Tesseract OCR"]}
						/>
						<TechCard
							icon={<Database className="h-5 w-5" />}
							title="Vector Storage"
							description="Efficient similarity search with ChromaDB"
							technologies={["ChromaDB", "FAISS", "Sentence Transformers"]}
						/>
						<TechCard
							icon={<Cpu className="h-5 w-5" />}
							title="Local LLM Integration"
							description="Ollama-powered inference with multiple model support"
							technologies={["Ollama", "Llama 3", "Mistral"]}
						/>
						<TechCard
							icon={<Network className="h-5 w-5" />}
							title="RAG Engine"
							description="Context-aware retrieval and generation"
							technologies={["LangChain", "Custom RAG", "Prompt Engineering"]}
						/>
						<TechCard
							icon={<GitBranch className="h-5 w-5" />}
							title="Modular Design"
							description="Pluggable components for easy customization"
							technologies={["Python", "FastAPI", "React"]}
						/>
						<TechCard
							icon={<ExternalLink className="h-5 w-5" />}
							title="API Layer"
							description="RESTful API for integration"
							technologies={["FastAPI", "Pydantic", "OpenAPI"]}
						/>
					</div>
				</Reveal>
			</section>

			{/* Code Examples */}
			<section className="mt-12">
				<Reveal>
					<h2 className="text-2xl md:text-3xl font-semibold font-[var(--font-display)] mb-6">Implementation Examples</h2>
				</Reveal>
				<Reveal delay={0.05}>
					<div className="space-y-6">
						<TerminalCard
							title="Document Ingestion"
							showLineNumbers
							code={`from intramind import DocumentProcessor

# Initialize processor
processor = DocumentProcessor(
    embedding_model="all-MiniLM-L6-v2",
    chunk_size=512
)

# Process documents
documents = processor.ingest_folder("./documents")
print(f"Processed {len(documents)} documents")`}
						/>
						
						<TerminalCard
							title="Query Processing"
							showLineNumbers
							code={`from intramind import QueryEngine

# Initialize engine
engine = QueryEngine(
    vector_db="chromadb",
    llm_model="llama3"
)

# Query documents
response = engine.query(
    "What is our remote work policy?",
    max_results=5
)

print(response.answer)
for source in response.sources:
    print(f"Source: {source.document} (page {source.page})")`}
						/>
					</div>
				</Reveal>
			</section>

			{/* Releases */}
			<section className="mt-12">
				<Reveal>
					<h2 className="text-2xl md:text-3xl font-semibold font-[var(--font-display)] mb-6">GitHub Releases</h2>
				</Reveal>
				<Reveal delay={0.05}>
					{releases.length === 0 ? (
						<Card className="p-6">
							<p className="text-sm text-foreground/70">
								No releases found yet. Visit the repository:{" "}
								<Link 
									className="text-primary hover:underline inline-flex items-center gap-1" 
									href="https://github.com/crux-ecosystem/IntraMind-Showcase" 
									target="_blank" 
									rel="noopener noreferrer"
								>
									crux-ecosystem/IntraMind-Showcase
									<ExternalLink className="h-3 w-3" />
								</Link>
							</p>
						</Card>
					) : (
						<div className="space-y-3">
							{releases.map((r) => (
								<Card key={r.id} className="p-4 hover:border-primary/50 transition-colors">
									<div className="flex items-center justify-between">
										<div>
											<div className="flex items-center gap-2">
												<Badge variant="secondary">{r.tag_name}</Badge>
												<h3 className="font-semibold">{r.name || r.tag_name}</h3>
											</div>
											{r.body && (
												<p className="text-sm text-foreground/70 mt-2 line-clamp-2">{r.body}</p>
											)}
										</div>
										<Link 
											className="text-primary hover:underline flex items-center gap-1" 
											href={r.html_url} 
											target="_blank" 
											rel="noopener noreferrer"
										>
											View
											<ExternalLink className="h-4 w-4" />
										</Link>
									</div>
								</Card>
							))}
						</div>
					)}
				</Reveal>
			</section>

			{/* Research Papers */}
			{researchPapers.length > 0 && (
				<section className="mt-12">
					<Reveal>
						<h2 className="text-2xl md:text-3xl font-semibold font-[var(--font-display)] mb-6">Research Papers</h2>
					</Reveal>
					<Reveal delay={0.05}>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{researchPapers.map((paper, idx) => (
								<Card key={idx} className="p-5 hover:border-primary/50 transition-colors">
									<div className="flex items-start gap-3">
										<BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
										<div className="flex-1">
											<h3 className="font-semibold mb-2">{paper.title}</h3>
											<p className="text-sm text-foreground/70 mb-3">{paper.description}</p>
											<div className="flex items-center justify-between">
												<div className="flex flex-wrap gap-1">
													{paper.tags.map((tag) => (
														<Badge key={tag} variant="secondary" className="text-xs">
															{tag}
														</Badge>
													))}
												</div>
												<Link 
													href={paper.link} 
													target="_blank" 
													rel="noopener noreferrer"
													className="text-primary hover:underline flex items-center gap-1 text-sm"
												>
													Read
													<ExternalLink className="h-3 w-3" />
												</Link>
											</div>
											<p className="text-xs text-foreground/50 mt-2 flex items-center gap-1">
												<Calendar className="h-3 w-3" />
												{paper.date}
											</p>
										</div>
									</div>
								</Card>
							))}
						</div>
					</Reveal>
				</section>
			)}

			{/* Blog Posts */}
			{blogPosts.length > 0 && (
				<section className="mt-12">
					<Reveal>
						<h2 className="text-2xl md:text-3xl font-semibold font-[var(--font-display)] mb-6">Blog & Articles</h2>
					</Reveal>
					<Reveal delay={0.05}>
						<div className="space-y-3">
							{blogPosts.map((post, idx) => (
								<Card key={idx} className="p-5 hover:border-primary/50 transition-colors">
									<div className="flex items-start justify-between gap-4">
										<div className="flex-1">
											<h3 className="font-semibold mb-1">{post.title}</h3>
											<p className="text-sm text-foreground/70 mb-2">{post.description}</p>
											<div className="flex items-center gap-3 text-xs text-foreground/50">
												<span className="flex items-center gap-1">
													<Calendar className="h-3 w-3" />
													{post.date}
												</span>
												{post.author && <span>• {post.author}</span>}
											</div>
										</div>
										<Link 
											href={post.link} 
											target="_blank" 
											rel="noopener noreferrer"
											className="text-primary hover:underline flex items-center gap-1 text-sm flex-shrink-0"
										>
											Read
											<ExternalLink className="h-4 w-4" />
										</Link>
									</div>
								</Card>
							))}
						</div>
					</Reveal>
				</section>
			)}

			{/* Version Changelog */}
			<section className="mt-12">
				<Reveal>
					<h2 className="text-2xl md:text-3xl font-semibold font-[var(--font-display)] mb-6">Development Roadmap</h2>
				</Reveal>
				<Reveal delay={0.05}>
					<div className="space-y-4">
						{roadmapVersions.map((version, idx) => (
							<ChangeItem 
								key={idx}
								version={version.version} 
								date={version.date} 
								status={version.status}
								items={version.items} 
							/>
						))}
					</div>
				</Reveal>
			</section>

			{/* Research Links */}
			<section className="mt-12">
				<Reveal>
					<h2 className="text-2xl md:text-3xl font-semibold font-[var(--font-display)] mb-6">Resources</h2>
				</Reveal>
				<Reveal delay={0.05}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<ResourceCard
							title="GitHub Repository"
							description="Source code, issues, and contributions"
							link="https://github.com/crux-ecosystem/IntraMind-Showcase"
						/>
						<ResourceCard
							title="Documentation"
							description="Complete setup and usage guide"
							link="/docs"
							internal
						/>
						<ResourceCard
							title="Model Showcase"
							description="See IntraMind in action"
							link="/models"
							internal
						/>
						<ResourceCard
							title="Technical Blog"
							description="Deep dives into architecture decisions"
							link="https://github.com/crux-ecosystem/IntraMind-Showcase/wiki"
						/>
					</div>
				</Reveal>
			</section>
		</div>
	);
}

function PaperCard({ title, desc, link }: { title: string; desc: string; link: string }) {
	return (
		<div className="rounded-xl border bg-white/5 p-5">
			<h3 className="text-lg font-semibold">{title}</h3>
			<p className="mt-1 text-sm text-foreground/75">{desc}</p>
			<div className="mt-3">
				<Link href={link} className="text-primary" target="_blank" rel="noopener noreferrer">
					View on arXiv/IEEE →
				</Link>
			</div>
		</div>
	);
}

function ChangeItem({ version, date, items, status }: { version: string; date: string; items: string[]; status?: string }) {
	const statusColors = {
		completed: "bg-green-500/20 text-green-400 border-green-500/30",
		planned: "bg-blue-500/20 text-blue-400 border-blue-500/30",
		inprogress: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
	};
	
	return (
		<Card className="p-5">
			<div className="flex items-center justify-between mb-3">
				<div className="flex items-center gap-3">
					<h3 className="font-semibold text-lg">{version}</h3>
					{status && (
						<Badge className={statusColors[status as keyof typeof statusColors] || ""} variant="outline">
							{status}
						</Badge>
					)}
				</div>
				<p className="text-xs text-foreground/60">{date}</p>
			</div>
			<ul className="space-y-2 text-sm text-foreground/80">
				{items.map((it, index) => (
					<li key={index} className="flex items-start gap-2">
						<span className="text-primary mt-1">•</span>
						<span>{it}</span>
					</li>
				))}
			</ul>
		</Card>
	);
}

function TechCard({ icon, title, description, technologies }: { icon: React.ReactNode; title: string; description: string; technologies: string[] }) {
	return (
		<Card className="p-5 hover:shadow-lg transition-shadow">
			<div className="flex items-start gap-3 mb-3">
				<div className="p-2 rounded-md bg-primary/15 text-primary">
					{icon}
				</div>
				<div>
					<h3 className="font-semibold mb-1">{title}</h3>
					<p className="text-sm text-foreground/70">{description}</p>
				</div>
			</div>
			<div className="flex flex-wrap gap-2 mt-3">
				{technologies.map((tech) => (
					<Badge key={tech} variant="secondary" className="text-xs">
						{tech}
					</Badge>
				))}
			</div>
		</Card>
	);
}

function ResourceCard({ title, description, link, internal }: { title: string; description: string; link: string; internal?: boolean }) {
	const content = (
		<Card className="p-5 hover:border-primary/50 transition-colors cursor-pointer h-full">
			<div className="flex items-start justify-between">
				<div>
					<h3 className="font-semibold mb-2">{title}</h3>
					<p className="text-sm text-foreground/70">{description}</p>
				</div>
				<ExternalLink className="h-4 w-4 text-primary flex-shrink-0" />
			</div>
		</Card>
	);

	if (internal) {
		return <Link href={link}>{content}</Link>;
	}

	return (
		<Link href={link} target="_blank" rel="noopener noreferrer">
			{content}
		</Link>
	);
}
