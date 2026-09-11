import React from 'react';
import { Search, BarChart2, ShieldAlert, Users2, ActivitySquare } from 'lucide-react';
import { PROCESS_STEPS } from '../data/companyData';

export default function Process() {
  const stepIcons = [Search, BarChart2, ShieldAlert, Users2, ActivitySquare];

  return (
    <section id="nosotros" className="py-24 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            Metodología de Trabajo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nuestro enfoque
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Un proceso ordenado, transparente y cercano para comprender los requerimientos de su empresa y desplegar medidas preventivas efectivas.
          </p>
        </div>

        {/* 5 Steps Linear Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || Search;
            return (
              <div
                key={step.step}
                className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step number badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-sky-700 font-mono">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 group-hover:border-sky-300 group-hover:bg-sky-50 text-slate-700 group-hover:text-sky-600 flex items-center justify-center transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-800 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/50">
                  <span className="text-[11px] font-semibold text-slate-400 group-hover:text-sky-600 transition-colors">
                    Paso {idx + 1} de 5
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
