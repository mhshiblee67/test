import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GitHub, ArrowRight } from 'lucide-react';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find active section
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass border-b border-border-subtle' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="monospace text-lg font-semibold tracking-tight hover:text-accent transition-colors">
              SHIBLEE
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm transition-colors duration-200 ${
                    activeSection === item.href.slice(1)
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              
              <a
                href="https://github.com/shiblee"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-secondary hover:text-text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <GitHub className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 z-40 glass border-b border-border-subtle md:hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-base ${
                    activeSection === item.href.slice(1)
                      ? 'text-accent'
                      : 'text-text-secondary'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://github.com/shiblee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 text-text-secondary"
              >
                <GitHub className="w-5 h-5" />
                <span>GitHub</span>
                <ArrowRight className="w-4 h-4 ml-auto" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
