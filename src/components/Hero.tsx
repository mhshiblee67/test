import { motion } from 'framer-motion';
import { ArrowRight, GitHub } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="monospace text-accent text-sm tracking-wider mb-2">
              MAHMUDUL HASAN SHIBLEE
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              AI Engineer building intelligent systems that actually work.
            </h1>
            
            <p className="text-lg text-text-secondary max-w-xl">
              I build practical AI applications across LLMs, RAG, document intelligence, 
              computer vision, automation, and backend systems.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-md font-medium transition-all duration-200 hover:gap-3"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a
                href="https://github.com/shiblee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-text-muted text-text-primary rounded-md font-medium transition-colors"
              >
                GitHub
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Terminal Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-surface-elevated border border-border rounded-lg overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-background border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                <span className="monospace text-xs text-text-muted ml-2">ai_engineer — bash</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 space-y-4 monospace text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-accent">$</span>
                  <span>whoami</span>
                </div>
                
                <div className="pl-4 space-y-3 text-text-secondary">
                  <div>
                    <span className="text-text-primary">mahmudul.hasan.shiblee</span>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-text-muted text-xs">ROLE</div>
                    <div className="text-text-primary">AI_ENGINEER</div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-text-muted text-xs">FOCUS</div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      <span>LLM / RAG</span>
                      <span>DOCUMENT_AI</span>
                      <span>COMPUTER_VISION</span>
                      <span>AI_AUTOMATION</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-text-muted text-xs">STATUS</div>
                    <div className="text-accent">BUILDING_INTELLIGENT_SYSTEMS</div>
                  </div>
                </div>
                
                {/* Blinking cursor */}
                <div className="flex items-center gap-2">
                  <span className="text-accent">$</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2 h-4 bg-accent inline-block"
                  ></motion.span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
