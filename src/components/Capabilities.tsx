import { motion } from 'framer-motion';
import { Brain, FileText, Eye, Zap } from 'lucide-react';
import { capabilities } from '../data/projects';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  FileText,
  Eye,
  Zap
};

export default function Capabilities() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="monospace text-accent text-xs tracking-wider mb-3 block">
            01 / WHAT I BUILD
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Building AI systems across multiple domains
          </h2>
        </motion.div>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left - Statement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold leading-snug">
              I like turning complex AI concepts into usable systems.
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Mahmudul Hasan Shiblee is a Computer Science graduate with an AI major and experience 
              building end-to-end AI applications including RAG pipelines, LLM-based tools, 
              API-driven systems, OCR pipelines, and automation workflows.
            </p>
            
            {/* Education */}
            <div className="pt-6 border-t border-border-subtle">
              <div className="space-y-2">
                <div className="monospace text-xs text-text-muted">EDUCATION</div>
                <div className="font-medium">B.Sc. in Computer Science and Engineering — AI Major</div>
                <div className="text-sm text-text-secondary">Bangladesh University of Business & Technology</div>
                <div className="text-sm text-text-secondary">CGPA: 3.67</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Capability Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {capabilities.map((capability, index) => {
              const Icon = iconMap[capability.icon] || Brain;
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group p-5 bg-surface border border-border-subtle rounded-lg hover:border-accent/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-md group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium mb-1">{capability.title}</h4>
                      <p className="text-sm text-text-secondary mb-3">{capability.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {capability.tags.map((tag) => (
                          <span
                            key={tag}
                            className="monospace text-xs px-2 py-1 bg-background rounded text-text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
