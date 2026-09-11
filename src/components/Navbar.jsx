import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Phone, ChevronRight } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_DATA, NAVIGATION_LINKS } from '../data/companyData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-200/60 py-3'
          : 'bg-white/70 backdrop-blur-xs py-4 md:py-5 border-b border-slate-100/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="group flex items-center transition-transform hover:scale-[1.01]">
            <Logo imgClassName="h-9 w-9 md:h-11 md:w-11" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/50">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-slate-700 hover:text-sky-700 hover:bg-white rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:+${COMPANY_DATA.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-sky-700 px-3 py-2 rounded-lg transition-colors"
              title="Llamar a CIMA Ocupacional"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>310 437 9409</span>
            </a>

            <a
              href={COMPANY_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-sky-700 text-white text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 group"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>Hablar con un asesor</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={COMPANY_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors focus:outline-hidden"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[61px] bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl animate-fadeIn">
          <div className="px-5 pt-4 pb-6 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 pb-1">
              Navegación
            </div>
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-medium text-slate-800 hover:bg-sky-50 hover:text-sky-700 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <a
                href={COMPANY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-medium shadow-sm transition-colors text-center"
              >
                <MessageSquare className="w-5 h-5 text-emerald-300" />
                <span>Hablar con un asesor</span>
              </a>

              <a
                href={`tel:+${COMPANY_DATA.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors text-sm text-center"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Llamar al 310 437 9409</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
