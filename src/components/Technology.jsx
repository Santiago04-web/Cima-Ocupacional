import React from 'react';
import { BarChart3, LineChart, Cpu, RefreshCw, Database, Search, ArrowUpRight } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

export default function Technology() {
  const techFeatures = [
    {
      title: "Datos y Organización",
      description: "Estructuración ordenada de la información para facilitar la toma de decisiones informadas en salud ocupacional.",
      icon: Database,
    },
    {
      title: "Monitoreo Constante",
      description: "Supervisión metódica de los indicadores preventivos para identificar oportunamente áreas de mejora.",
      icon: LineChart,
    },
    {
      title: "Análisis Integral",
      description: "Evaluación rigurosa del comportamiento de los riesgos para anticiparse a situaciones imprevistas.",
      icon: BarChart3,
    },
    {
      title: "Seguimiento Empresarial",
      description: "Acompañamiento documentado y oportuno de cada una de las acciones preventivas trazadas.",
      icon: RefreshCw,
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-24 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Innovación y Precisión</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Tecnología para una gestión más inteligente.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            La recopilación clara de datos, el análisis preventivo y el monitoreo estructurado permiten que las empresas tomen decisiones acertadas y oportunas en materia de salud y seguridad.
          </p>
        </div>

        {/* Visual Dashboard Representation (Abstract Data & Analytics Mockup) */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-slate-950/70 border border-slate-800 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800/80 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">Gestión de Información</span>
              <h3 className="text-xl font-bold text-white mt-1">Panel de Seguimiento y Monitoreo Preventivo</h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Actualización Continua</span>
            </div>
          </div>

          {/* Abstract Data Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>Enfoque Preventivo</span>
                  <BarChart3 className="w-4 h-4 text-cyan-400" />
                </div>
                <h4 className="text-lg font-bold text-white">Análisis de Condiciones</h4>
                <p className="text-xs text-slate-400 mt-1">Evaluación de factores de riesgo en puestos de trabajo.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-300">
                <span>Criterio Técnico</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>Monitoreo Periódico</span>
                  <LineChart className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="text-lg font-bold text-white">Seguimiento de Acciones</h4>
                <p className="text-xs text-slate-400 mt-1">Control constante sobre las recomendaciones implementadas.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-emerald-300">
                <span>Evolución Sistemática</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>Información Empresarial</span>
                  <Database className="w-4 h-4 text-sky-400" />
                </div>
                <h4 className="text-lg font-bold text-white">Centralización de Datos</h4>
                <p className="text-xs text-slate-400 mt-1">Registro organizado de soporte e historial preventivo.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-sky-300">
                <span>Respaldo Institucional</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

          </div>

          {/* Abstract Status Bar */}
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span>Facilitamos la comprensión de prioridades preventivas en su empresa.</span>
            </span>
            <span className="font-semibold text-slate-300">CIMA OCUPACIONAL S.A.S.</span>
          </div>
        </div>

        {/* 4 Feature Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techFeatures.map((feat) => {
            const IconComp = feat.icon;
            return (
              <div
                key={feat.title}
                className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-cyan-400/40 hover:bg-slate-800/80 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center mb-4">
                  <IconComp className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">{feat.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{feat.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
