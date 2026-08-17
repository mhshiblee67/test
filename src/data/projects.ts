export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  approach: string;
  technologies: string[];
  architecture?: { nodes: string[]; connections: string[] };
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "bubt-ai-chatbot",
    title: "BUBT AI Chatbot",
    category: "Generative AI / RAG",
    description: "A conversational university knowledge assistant built around retrieval-augmented generation.",
    problem: "Students and faculty needed quick access to university information without navigating complex documentation.",
    approach: "Built a RAG system that processes university documents, creates semantic embeddings, and retrieves relevant information to answer queries accurately.",
    technologies: ["LangChain", "FAISS", "Sentence Transformers", "Groq", "LLaMA 3.1"],
    architecture: {
      nodes: ["University Data", "Data Processing", "Semantic Chunking", "Sentence Transformers", "FAISS", "Retriever", "LLM", "Response"],
      connections: ["University Data → Data Processing", "Data Processing → Semantic Chunking", "Semantic Chunking → Sentence Transformers", "Sentence Transformers → FAISS", "FAISS → Retriever", "Retriever → LLM", "LLM → Response"]
    },
    github: "https://github.com/shiblee",
    featured: true
  },
  {
    id: "local-ocr-rag",
    title: "Local OCR & Dynamic RAG System",
    category: "Document Intelligence",
    description: "Fully local document processing pipeline with Bangla and English OCR support and semantic search capabilities.",
    problem: "Existing OCR solutions required external APIs, raising privacy concerns and limiting offline functionality for Bangla documents.",
    approach: "Implemented a complete local OCR pipeline using Surya OCR, combined with ChromaDB for semantic search and metadata filtering, exposed via FastAPI backend with Streamlit interface.",
    technologies: ["Surya OCR", "ChromaDB", "FastAPI", "Streamlit", "Sentence Transformers"],
    architecture: {
      nodes: ["PDF", "Surya OCR", "Bangla/English Text", "Document Processing", "Embeddings", "ChromaDB", "Semantic Search", "Metadata Filtering", "FastAPI", "Streamlit"],
      connections: ["PDF → Surya OCR", "Surya OCR → Bangla/English Text", "Bangla/English Text → Document Processing", "Document Processing → Embeddings", "Embeddings → ChromaDB", "ChromaDB → Semantic Search", "ChromaDB → Metadata Filtering", "Semantic Search → Retrieval", "Metadata Filtering → Retrieval", "Retrieval → FastAPI", "FastAPI → Streamlit"]
    },
    github: "https://github.com/shiblee",
    featured: true
  },
  {
    id: "personal-ai-assistant",
    title: "Personal AI Assistant",
    category: "AI Automation",
    description: "Intelligent automation system integrating Google Workspace tools through n8n workflows.",
    problem: "Managing multiple productivity tools manually was time-consuming and fragmented.",
    approach: "Created an AI-powered assistant using n8n automation workflows connecting Gmail, Google Calendar, Tasks, Docs, and Sheets through a unified React interface.",
    technologies: ["React", "Node.js", "Express", "n8n", "Google APIs"],
    architecture: {
      nodes: ["React Frontend", "Node.js/Express", "Webhook", "n8n", "Gmail", "Google Calendar", "Google Tasks", "Google Docs", "Google Sheets"],
      connections: ["React Frontend → Node.js/Express", "Node.js/Express → Webhook", "Webhook → n8n", "n8n → Gmail", "n8n → Google Calendar", "n8n → Google Tasks", "n8n → Google Docs", "n8n → Google Sheets"]
    },
    github: "https://github.com/shiblee",
    featured: true
  },
  {
    id: "skin-cancer-detection",
    title: "Skin Cancer Detection Using Hybrid Vision Transformer",
    category: "Computer Vision",
    description: "Deep learning system for multi-class skin lesion classification using hybrid vision transformer architecture.",
    problem: "Early detection of skin cancer requires accurate classification of skin lesions across multiple categories.",
    approach: "Developed a hybrid vision transformer model with preprocessing, augmentation, and class balancing techniques for 8-class skin lesion classification.",
    technologies: ["PyTorch", "Vision Transformers", "CNN", "Data Augmentation", "Class Balancing"],
    architecture: {
      nodes: ["Image Dataset", "Preprocessing", "Augmentation", "Class Balancing", "Hybrid Vision Transformer", "8-Class Classification", "Evaluation"],
      connections: ["Image Dataset → Preprocessing", "Preprocessing → Augmentation", "Augmentation → Class Balancing", "Class Balancing → Hybrid Vision Transformer", "Hybrid Vision Transformer → 8-Class Classification", "8-Class Classification → Evaluation"]
    },
    github: "https://github.com/shiblee",
    featured: true
  },
  {
    id: "ecommerce-web",
    title: "E-Commerce Web Application",
    category: "Full Stack Development",
    description: "Modern e-commerce platform with product management, cart functionality, and secure checkout.",
    problem: "Small businesses need affordable, customizable e-commerce solutions with modern features.",
    approach: "Built a full-stack e-commerce application with responsive design, product catalog, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    github: "https://github.com/shiblee",
    featured: false
  }
];

export const capabilities = [
  {
    title: "Generative AI",
    description: "LLMs, RAG pipelines, prompt engineering, and conversational AI systems.",
    icon: "Brain",
    tags: ["LLMs", "RAG", "LangChain", "Prompt Engineering"]
  },
  {
    title: "Document Intelligence",
    description: "OCR, PDF processing, semantic search, and document question answering systems.",
    icon: "FileText",
    tags: ["OCR", "Surya", "Semantic Search", "ChromaDB"]
  },
  {
    title: "Computer Vision",
    description: "Vision Transformers, image classification, segmentation, and evaluation pipelines.",
    icon: "Eye",
    tags: ["ViT", "CNN", "PyTorch", "Image Analysis"]
  },
  {
    title: "AI Automation",
    description: "LLM-powered workflows, API integrations, and intelligent process automation.",
    icon: "Zap",
    tags: ["n8n", "APIs", "Workflow", "Integration"]
  }
];

export const techStack = {
  languages: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  aiML: ["PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "CNN", "Vision Transformers", "XAI"],
  generativeAI: ["LLMs", "RAG", "Prompt Engineering", "LangChain", "FAISS", "Sentence Transformers", "ChromaDB"],
  backend: ["FastAPI", "Node.js", "Express", "Pydantic"],
  frontend: ["React", "Tailwind CSS", "Streamlit"],
  infrastructure: ["Docker", "Git", "n8n"]
};

export const education = [
  {
    period: "2022 — 2026",
    degree: "B.Sc. in Computer Science and Engineering",
    specialization: "AI Major",
    institution: "Bangladesh University of Business & Technology",
    gpa: "CGPA: 3.67"
  }
];

export const certifications = [
  "AI & ML Engineering Bootcamp — OSTAD",
  "Computer Science for Python Programming — HarvardX via UNDP Bangladesh",
  "Computer Science for Artificial Intelligence — HarvardX via UNDP Bangladesh",
  "Certificate of Presentation of the Paper — QPAIN 2026"
];

export const research = [
  {
    title: "Comparative Analysis of Transformer and U-Net-Based Architectures for Skin Lesion Segmentation",
    status: "Accepted — IEEE QPAIN 2026",
    note: "IEEE Xplore publication pending"
  },
  {
    title: "Skin Cancer Detection Using Hybrid Vision Transformer",
    status: "Research Project",
    note: "8-class classification using hybrid vision transformer architecture"
  }
];

export const engineeringPrinciples = [
  {
    number: "01",
    title: "Start With the Problem",
    description: "Technology comes after understanding the problem."
  },
  {
    number: "02",
    title: "Build End-to-End",
    description: "From data ingestion to model inference to usable interfaces."
  },
  {
    number: "03",
    title: "Measure and Iterate",
    description: "Experiment, evaluate, identify weaknesses, improve."
  },
  {
    number: "04",
    title: "Make AI Useful",
    description: "The goal is not simply to use an LLM or ML model. The goal is to build something people can actually use."
  }
];
