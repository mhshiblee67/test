import { motion } from 'framer-motion';
import { Mail, LinkedIn, GitHub, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="monospace text-accent text-xs tracking-wider mb-3 block">
            07 / GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Have an AI problem worth solving?
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            I'm interested in building practical AI systems, experimenting with new ideas, 
            and working on challenging engineering problems.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:contact@shiblee.dev"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-md font-medium transition-all duration-200 hover:gap-3"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/shiblee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent/50 text-text-primary rounded-md font-medium transition-colors"
          >
            <LinkedIn className="w-4 h-4" />
            LinkedIn
          </a>

          <a
            href="https://github.com/shiblee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent/50 text-text-primary rounded-md font-medium transition-colors"
          >
            <GitHub className="w-4 h-4" />
            GitHub
          </a>
        </motion.div>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-sm text-text-muted"
        >
          Open to opportunities in AI Engineering, ML Engineering, and Research roles.
        </motion.p>
      </div>
    </section>
  );
}
