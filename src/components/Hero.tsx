
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background styling elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Empowering the <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-200">
              Next Generation of IT
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
        >
          Expert-led workshops, guest lectures, and hackathon guidance for engineering colleges across India.
          Specializing in AI, Python, Testing, and modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-all animate-glow"
          >
            Partner With Us
            <ChevronRight className="ml-2 w-5 h-5" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-foreground border border-muted hover:border-primary hover:bg-muted/50 transition-all"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
