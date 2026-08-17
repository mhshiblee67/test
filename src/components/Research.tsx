import { motion } from 'framer-motion';
import { research } from '../data/projects';

export default function Research() {
  return (
    <section id="research" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="monospace text-accent text-xs tracking-wider mb-3 block">
            04 / RESEARCH & COMPUTER VISION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Research & Computer Vision
          </h2>
        </motion.div>

        {/* Research Items */}
        <div className="space-y-6">
          {research.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-surface border border-border-subtle rounded-lg hover:border-accent/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Status Badge */}
                <div className="flex-shrink-0">
                  <span className={`inline-block px-3 py-1 text-xs monospace rounded-full ${
                    item.status.includes('Accepted') 
                      ? 'bg-accent/10 text-accent' 
                      : 'bg-text-muted/10 text-text-muted'
                  }`}>
                    {item.status}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.note}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CV Pipeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-surface-elevated border border-border-subtle rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Skin Cancer Detection Pipeline</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
            {['Image Dataset', 'Preprocessing', 'Augmentation', 'Class Balancing', 'Hybrid ViT', '8-Class Classification', 'Evaluation'].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center"
              >
                <div className="px-4 py-2 bg-background border border-border rounded-md monospace text-xs text-center">
                  {step}
                </div>
                {index < 6 && (
                  <div className="hidden md:block w-8 h-px bg-border mt-2"></div>
                )}
                {index < 6 && (
                  <div className="md:hidden w-px h-4 bg-border my-1"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
