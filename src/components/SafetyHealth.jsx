import React from 'react';
import { ShieldCheck, Target, CheckCircle2, Shield, AlertTriangle, FileCheck } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

export default function SafetyHealth() {
  const strategicPoints = [
    {
      title: "Control Sistemático de Condiciones",
      description: "Supervisión metódica de los ambientes de trabajo para mitigar factores que puedan generar accidentes o incidentes laborales.",
      badge: "Control"
    },
    {
      title: "Alineación con la Operación",
      description: "Integrar la prevención en el flujo diario de la empresa para que la seguridad sea un facilitador del trabajo y no un obstáculo.",
      badge: "Estrategia"
    },
    {
      title: "Protección del Talento Humano",
      description: "Resguardar de manera activa la integridad física y mental de cada colaborador en su jornada.",
      badge: "Compromiso"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Abstract Graphic Card with SVG Visualization */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white shadow-2xl border border-slate-700/60 overflow-hidden">
              
              {/* Abstract decorative radar / grid lines */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
              </div>

              {/* Graphic Centerpiece: Shield & Interactive Nodes */}
              <div className="relative z-10 space-y-6">
                
                {/* Header within abstract card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-sky-300 font-semibold">CIMA OCUPACIONAL</p>
                      <p className="text-sm font-bold text-white">Esquema de Seguridad Preventiva</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-medium">
                    Activo
                  </span>
                </div>

                {/* Abstract Visual Indicators */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                    <span className="text-[11px] text-slate-400 font-medium block">Enfoque Operativo</span>
                    <span className="text-base font-bold text-white mt-1 block">Gestión del Riesgo</span>
                    <div className="mt-2 h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-sky-400 rounded-full w-4/5" />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                    <span className="text-[11px] text-slate-400 font-medium block">Cultura Laboral</span>
                    <span className="text-base font-bold text-white mt-1 block">Autocuidado Activo</span>
                    <div className="mt-2 h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full w-11/12" />
                    </div>
                  </div>
                </div>

                {/* Abstract interactive process box */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-900/60 to-slate-800/80 border border-sky-500/30 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-cyan-300 flex items-center justify-center shrink-0">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div className="text-xs space-y-1">
                    <p className="font-bold text-white text-sm">Seguimiento Preventivo Continuo</p>
                    <p className="text-slate-300 leading-relaxed">
                      Orientación técnica estructurada para proteger tanto las áreas administrativas como operativas.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Text & Strategy */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              Estrategia Organizacional
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Seguridad y salud en el trabajo como parte de la estrategia empresarial.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              La seguridad laboral no debe concebirse como un requerimiento aislado, sino como un pilar fundamental para la sostenibilidad de la compañía. Una organización que cuida de su gente opera con mayor certidumbre y eficiencia.
            </p>

            <div className="space-y-4 pt-2">
              {strategicPoints.map((point) => (
                <div key={point.title} className="flex items-start gap-3.5 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-slate-900">{point.title}</h3>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-slate-100 text-slate-600">
                        {point.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
