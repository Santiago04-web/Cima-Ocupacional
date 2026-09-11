import React from 'react';
import { MessageSquare, ArrowRight, Phone, Mail, ShieldCheck } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white relative overflow-hidden">
      {/* Visual lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Atención Directa y Personalizada</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
          ¿Quieres fortalecer la gestión de salud ocupacional de tu empresa?
        </h2>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal">
          Conversemos sobre las necesidades de tu organización.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={COMPANY_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <MessageSquare className="w-5 h-5 text-white" />
            <span>Hablar con un asesor</span>
          </a>

          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base transition-all duration-200 backdrop-blur-xs"
          >
            <span>Solicitar información</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Fast contact indicators */}
        <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
          <a
            href={`tel:+${COMPANY_DATA.phoneRaw}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-sky-400" />
            <span>{COMPANY_DATA.phone}</span>
          </a>

          <span className="hidden sm:inline text-slate-700">•</span>

          <a
            href={`mailto:${COMPANY_DATA.email}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>{COMPANY_DATA.email}</span>
          </a>

          <span className="hidden sm:inline text-slate-700">•</span>

          <span className="text-slate-400">
            {COMPANY_DATA.city}
          </span>
        </div>

      </div>
    </section>
  );
}
