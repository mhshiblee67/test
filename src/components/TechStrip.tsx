import { motion } from 'framer-motion';

const technologies = [
  'PYTHON',
  'PYTORCH',
  'LLMs',
  'RAG',
  'FASTAPI',
  'COMPUTER_VISION',
  'OCR',
  'DOCKER',
  'REACT',
  'n8n',
  'LANGCHAIN',
  'FAISS',
  'TRANSFORMERS',
  'STREAMLIT'
];

export default function TechStrip() {
  return (
    <section className="border-y border-border-subtle bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: [0, -50] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="monospace text-xs text-text-muted tracking-wider hover:text-accent transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
