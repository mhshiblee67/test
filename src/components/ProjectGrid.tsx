import { motion } from 'framer-motion';
import { ArrowRight, GitHub, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-surface border border-border-subtle rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300"
    >
      <div className="p-6 sm:p-8">
        {/* Project Number */}
        <span className="monospace text-xs text-text-muted mb-4 block">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Title & Category */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-accent">{project.category}</p>
        </div>

        {/* Problem Statement */}
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {project.problem}
        </p>

        {/* Description */}
        <p className="text-sm mb-6 pb-6 border-b border-border-subtle">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="monospace text-xs px-2 py-1 bg-background rounded text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
          >
            <GitHub className="w-4 h-4" />
            Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          <a
            href={`#work/${project.id}`}
            className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            Explore Case Study
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Hover Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </motion.div>
  );
}

export default function ProjectGrid() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="monospace text-accent text-xs tracking-wider mb-3 block">
            02 / SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Projects that demonstrate engineering depth
          </h2>
          <p className="text-text-secondary max-w-2xl">
            Each project represents a complete system — from problem definition through 
            implementation to deployment. These are not tutorials or toy examples.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
