import { GitHub, LinkedIn, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="monospace text-lg font-semibold mb-2">MAHMUDUL HASAN SHIBLEE</h3>
            <p className="text-sm text-text-secondary">AI Engineer</p>
            <p className="text-sm text-text-muted mt-2">
              Building intelligent systems, one experiment at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <a href="#work" className="text-sm text-text-secondary hover:text-accent transition-colors">Work</a>
            <a href="#about" className="text-sm text-text-secondary hover:text-accent transition-colors">About</a>
            <a href="#research" className="text-sm text-text-secondary hover:text-accent transition-colors">Research</a>
            <a href="#stack" className="text-sm text-text-secondary hover:text-accent transition-colors">Stack</a>
            <a href="#contact" className="text-sm text-text-secondary hover:text-accent transition-colors">Contact</a>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://github.com/shiblee"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <GitHub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/shiblee"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedIn className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@shiblee.dev"
              className="p-2 text-text-secondary hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            © {currentYear} Mahmudul Hasan Shiblee. All rights reserved.
          </p>
          <p className="text-xs text-text-muted monospace">
            Built with React + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
