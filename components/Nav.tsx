'use client';

import { useState } from 'react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-slate-900 font-bold text-lg tracking-tight">
            Praful Jagriya
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors">About</a>
            <a href="#expertise" className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors">Expertise</a>
            <a href="#portfolio" className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors">Portfolio</a>
            <a href="#ask" className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors">Ask Praful</a>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 flex flex-col gap-4">
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-slate-600 text-sm font-medium">About</a>
            <a href="#expertise" onClick={() => setMenuOpen(false)} className="text-slate-600 text-sm font-medium">Expertise</a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)} className="text-slate-600 text-sm font-medium">Portfolio</a>
            <a href="#ask" onClick={() => setMenuOpen(false)} className="text-slate-600 text-sm font-medium">Ask Praful</a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center"
            >
              Let&apos;s Talk
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
