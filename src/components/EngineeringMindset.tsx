import { motion } from 'framer-motion';
import { engineeringPrinciples } from '../data/projects';

export default function EngineeringMindset() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="monospace text-accent text-xs tracking-wider mb-3 block">
            03 / ENGINEERING APPROACH
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How I Approach AI Engineering
          </h2>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringPrinciples.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 bg-surface border border-border-subtle rounded-lg group hover:border-accent/30 transition-colors"
            >
              {/* Number */}
              <span className="monospace text-4xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
                {principle.number}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold mt-4 mb-2">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed">
                {principle.description}
              </p>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
