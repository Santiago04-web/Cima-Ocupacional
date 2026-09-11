import React from 'react';
import { AlertCircle, ShieldCheck, CheckCircle2, UserCheck, Eye, Sparkles } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

export default function Prevention() {
  const points = [
    {
      title: "Identificación temprana de riesgos",
      description: "Detectar de manera oportuna aquellas condiciones en el ambiente de trabajo que puedan ocasionar incidentes o afectar la salud del colaborador.",
      icon: Eye
    },
    {
      title: "Cuidado integral de los equipos",
      description: "Promover hábitos laborales saludables, posturas adecuadas y pautas preventivas que favorezcan el bienestar cotidiano.",
      icon: UserCheck
    },
    {
      title: "Consolidación de cultura preventiva",
      description: "Construir una conciencia colectiva donde cada integrante de la empresa reconozca el valor del autocuidado y la prevención activa.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="prevencion" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Visual background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core message */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Criterio Preventivo</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Prevenir antes de{' '}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                corregir.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              En la gestión laboral moderna, anticiparse es la decisión más acertada. Adoptar medidas preventivas no solo protege la salud y la vida de las personas, sino que reduce imprevistos, disminuye costos operativos y fortalece la confianza dentro de toda la empresa.
            </p>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-sm text-slate-300 flex items-start gap-3.5">
              <AlertCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <p>
                Una cultura de prevención estructurada permite a las organizaciones orientar sus esfuerzos de forma proactiva, garantizando entornos laborales ordenados, dignos y seguros.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-colors shadow-md"
              >
                <span>Conocer cómo asesoramos a su empresa</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key pillars cards */}
          <div className="lg:col-span-6 space-y-5">
            {points.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <div
                  key={point.title}
                  className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-sky-400/50 hover:bg-slate-800 transition-all duration-300 flex gap-4 items-start group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
