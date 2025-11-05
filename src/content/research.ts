/**
 * Research content configuration
 * Add new research items, papers, blogs, and roadmap versions here
 */

export interface ResearchPaper {
	title: string;
	description: string;
	link: string;
	date: string;
	status: "completed" | "planned" | "inprogress";
	tags: string[];

}

export interface BlogPost {
	title: string;
	description: string;
	link: string;
	date: string;
	author?: string;
}

export interface RoadmapVersion {
	version: string;
	date: string;
	status: "completed" | "planned" | "inprogress";
	items: string[];
}

// Research papers and publications
export const researchPapers: ResearchPaper[] = [
	{
		title: "Local-First AI: Retrieval-Augmented Generation at the Edge",
		description: "Exploring privacy-preserving RAG architectures for enterprise deployments",
		link: "https://github.com/crux-ecosystem/IntraMind-Showcase/wiki",
		date: "2025-11-01", 
		tags: ["RAG", "Privacy", "Edge Computing"],
        status: "inprogress"
	},
	// Add more papers here
];

// Blog posts and articles
export const blogPosts: BlogPost[] = [
	{
		title: "Building IntraMind: A Journey to Local AI",
		description: "Technical deep-dive into architecture decisions and challenges",
		link: "https://github.com/crux-ecosystem/IntraMind-Showcase/wiki",
		date: "2025-10-15",
		author: "CruxLabX Team",
	},
	{
		title: "Why Local LLMs Matter for Enterprise",
		description: "Understanding data privacy and sovereignty in the age of AI",
		link: "https://github.com/crux-ecosystem/IntraMind-Showcase/wiki",
		date: "2025-09-20",
		author: "CruxLabX Team",
	},
	// Add more blog posts here
];

// Development roadmap versions
export const roadmapVersions: RoadmapVersion[] = [
	{
		version: "v1.1.0 - IntraMind",
		date: "Q1 2026",
		status: "completed",
		items: [
			"Multi-user support with authentication",
			"Advanced analytics dashboard",
			"Custom model fine-tuning support",
			"Enhanced security features",
			"Role-based access control (RBAC)",
            "OCR integration for scanned documents",
            "Multi-format document support (PDF, DOCX, images)",
            "ChromaDB vector storage implementation",
		],
	}
	// Add more versions here
];

// Research topics and areas
export const researchTopics = [
	{
		topic: "Retrieval-Augmented Generation",
		description: "Advanced techniques for context-aware AI responses",
		icon: "database",
	},
	{
		topic: "Privacy-Preserving AI",
		description: "Local processing without compromising data",
		icon: "shield",
	},
	{
		topic: "Edge Computing",
		description: "Optimizing AI workloads for local deployment",
		icon: "cpu",
	},
	{
		topic: "Document Intelligence",
		description: "Multi-format parsing and semantic understanding",
		icon: "file",
	},
];
