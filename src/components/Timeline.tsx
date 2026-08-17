import { motion } from 'framer-motion';
import { education, certifications } from '../data/projects';

export default function Timeline() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="monospace text-accent text-xs tracking-wider mb-3 block">
            06 / EDUCATION & CERTIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Background
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border-subtle transform md:-translate-x-1/2"></div>

          {/* Education */}
          {education.map((edu, index) => (
            <motion.div
              key={edu.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0"
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 mt-1.5 md:mt-0 z-10"></div>

              {/* Content */}
              <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <span className="monospace text-xs text-accent">{edu.period}</span>
                <h3 className="text-lg font-semibold mt-1">{edu.degree}</h3>
                <p className="text-text-secondary text-sm">{edu.specialization}</p>
                <p className="text-text-secondary text-sm">{edu.institution}</p>
                <p className="text-text-muted text-sm mt-1">{edu.gpa}</p>
              </div>

              {/* Empty space for opposite side */}
              <div className="hidden md:block flex-1"></div>
            </motion.div>
          ))}

          {/* Certifications */}
          {certifications.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (education.length + index) * 0.1 }}
              className="relative flex flex-col md:flex-row gap-8 mb-8 last:mb-0"
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-border rounded-full transform -translate-x-1/2 mt-1.5 md:mt-0 z-10"></div>

              {/* Content */}
              <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <p className="text-text-secondary text-sm">{cert}</p>
              </div>

              {/* Empty space for opposite side */}
              <div className="hidden md:block flex-1"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
