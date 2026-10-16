import React from 'react';
import { MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenWhatsApp: (customMessage?: string) => void;
  onSelectService: (service: 'pos' | 'loans' | 'savings' | 'moniebook') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsApp, onSelectService }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single line, no attached pill badges) */}
        <a 
          href="#home" 
          className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-blue-700 transition-colors"
        >
          Kenny Olu Digital
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a
            href="#pos-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('pos-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0"
          >
            POS Terminals
          </a>
          <a
            href="#loans-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('loans-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0"
          >
            Business Loans
          </a>
          <a
            href="#savings-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('savings-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0"
          >
            Business Savings
          </a>
          <a
            href="#moniebook-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('moniebook-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0"
          >
            Moniebook
          </a>
          <a
            href="#contact-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0"
          >
            Contact Agent
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenWhatsApp('Hello Kenny Olu Digital, I want to get started with Moniepoint services for my business.')}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-700"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </div>
    </header>
  );
};
