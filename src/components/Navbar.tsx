import { Menu, X, Terminal } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Terminal className="text-primary w-6 h-6" />
            <span className="font-bold text-xl tracking-tight uppercase">Dominova</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#services" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#about" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#contact" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-muted">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-muted">Home</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-muted">Services</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-muted">About</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-muted">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
