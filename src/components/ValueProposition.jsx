import React from 'react';
import { ShieldCheck, HeartPulse, HardHat, Layers } from 'lucide-react';
import { PILLARS } from '../data/companyData';

export default function ValueProposition() {
  const iconMap = {
    ShieldAlert: ShieldCheck,
    HeartPulse: HeartPulse,
    ShieldCheck: HardHat,
    Layers: Layers,
  };

  return (
    <section className="py-20 bg-white relative border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            Propuesta de Valor
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Prevenir es cuidar el futuro de tu empresa.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Estructuramos nuestras soluciones sobre cuatro pilares esenciales para respaldar la estabilidad, la tranquilidad y el desarrollo del talento de las organizaciones.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PILLARS.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || ShieldCheck;
            return (
              <div
                key={pillar.number}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/70 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Pillar Number Top Accent */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-slate-200 group-hover:text-sky-500/30 transition-colors font-mono">
                    {pillar.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200/80 group-hover:border-sky-200 group-hover:bg-sky-50 flex items-center justify-center text-slate-700 group-hover:text-sky-600 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle indicator bar */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="h-1 w-8 bg-slate-200 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-cyan-500 rounded-full transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
