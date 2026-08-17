import { motion } from 'framer-motion';
import { techStack } from '../data/projects';

interface TechCategoryProps {
  title: string;
  items: string[];
  delay: number;
}

function TechCategory({ title, items, delay }: TechCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-6 bg-surface border border-border-subtle rounded-lg"
    >
      <h3 className="text-sm font-semibold mb-4 text-accent">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 bg-background border border-border-subtle rounded-md text-sm hover:border-accent/50 hover:text-accent transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const categories = [
    { title: 'Languages', items: techStack.languages, key: 'languages' },
    { title: 'AI / ML', items: techStack.aiML, key: 'aiML' },
    { title: 'Generative AI', items: techStack.generativeAI, key: 'generativeAI' },
    { title: 'Backend', items: techStack.backend, key: 'backend' },
    { title: 'Frontend', items: techStack.frontend, key: 'frontend' },
    { title: 'Infrastructure', items: techStack.infrastructure, key: 'infrastructure' }
  ];

  return (
    <section id="stack" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="monospace text-accent text-xs tracking-wider mb-3 block">
            05 / TECHNICAL STACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tools & Technologies
          </h2>
          <p className="text-text-secondary max-w-2xl">
            A curated set of technologies I use to build production-ready AI systems.
          </p>
        </motion.div>

        {/* Stack Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <TechCategory
              key={category.key}
              title={category.title}
              items={category.items}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
