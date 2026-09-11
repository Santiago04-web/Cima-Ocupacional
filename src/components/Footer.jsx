import React from 'react';
import { Phone, Mail, MapPin, Globe, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_DATA, NAVIGATION_LINKS } from '../data/companyData';

export default function Footer({ onOpenLegal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white relative border-t border-slate-800">
      {/* Decorative top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Slogan (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo className="brightness-125" />
            </div>

            <p className="text-sm font-semibold text-cyan-400 tracking-wide">
              {COMPANY_DATA.tagline}
            </p>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Protegemos la salud de las personas que hacen crecer las empresas. Soluciones profesionales en salud ocupacional, prevención y seguridad laboral.
            </p>

            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p className="font-semibold text-slate-300">{COMPANY_DATA.name}</p>
              <p>NIT: {COMPANY_DATA.nit}</p>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Navegación</p>
            <ul className="space-y-2.5 text-sm">
              {NAVIGATION_LINKS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Official Contact Data (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Ubicación y Contacto</p>
            
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200">{COMPANY_DATA.address}</p>
                  <p className="text-xs">{COMPANY_DATA.city}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:+${COMPANY_DATA.phoneRaw}`}
                  className="text-slate-200 hover:text-emerald-400 transition-colors"
                >
                  {COMPANY_DATA.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  className="text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  {COMPANY_DATA.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-indigo-400 shrink-0" />
                <a
                  href={COMPANY_DATA.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 hover:text-indigo-400 transition-colors"
                >
                  {COMPANY_DATA.website}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600/30 transition-colors"
              >
                <span>WhatsApp: +{COMPANY_DATA.whatsappNumber}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Legals and Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_DATA.name} • Todos los derechos reservados.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
            >
              Política de privacidad
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
            >
              Términos y condiciones
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Volver arriba"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
