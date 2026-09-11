import React from 'react';
import { Building2, ShieldCheck, HeartPulse, HardHat, TrendingUp, ArrowDown, ArrowRight } from 'lucide-react';
import { B2B_FLOW, COMPANY_DATA } from '../data/companyData';

export default function BusinessSolutions() {
  const steps = [
    {
      title: "Empresa",
      subtitle: "Organización sólida y visión de futuro",
      description: "Toda organización requiere un esquema confiable que priorice el cuidado de su talento humano.",
      icon: Building2,
      color: "from-sky-500 to-blue-600",
    },
    {
      title: "Prevención",
      subtitle: "Anticipación a riesgos",
      description: "Identificación oportuna de factores que puedan comprometer la salud laboral o la seguridad.",
      icon: ShieldCheck,
      color: "from-cyan-500 to-sky-600",
    },
    {
      title: "Bienestar",
      subtitle: "Equipos sanos y motivados",
      description: "Ambientes de trabajo favorables que impulsan el confort físico, mental y emocional.",
      icon: HeartPulse,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Seguridad",
      subtitle: "Ambientes controlados",
      description: "Prácticas de seguridad en el trabajo que garantizan operaciones estables y protegidas.",
      icon: HardHat,
      color: "from-amber-500 to-orange-600",
    },
    {
      title: "Continuidad",
      subtitle: "Productividad sostenible",
      description: "La protección del equipo humano se traduce en estabilidad, retención y crecimiento continuo.",
      icon: TrendingUp,
      color: "from-blue-600 to-indigo-700",
    },
  ];

  return (
    <section id="empresas" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradient accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            Enfoque Corporativo B2B
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Soluciones para empresas
          </h2>
          <p className="text-lg sm:text-xl text-slate-700 font-medium max-w-2xl mx-auto">
            "Una gestión preventiva adecuada protege a las personas y fortalece la operación."
          </p>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Acompañamos a las organizaciones en Medellín y Colombia a consolidar una cultura donde la prevención y la seguridad sean pilares fundamentales de la estrategia corporativa.
          </p>
        </div>

        {/* Sophisticated Interactive Flow Diagram */}
        <div className="relative my-12">
          
          {/* Desktop flow connector line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-sky-400 via-emerald-400 to-indigo-500 -translate-y-1/2 z-0 opacity-60 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => {
              const IconComp = step.icon;
              return (
                <div key={step.title} className="flex flex-col items-center">
                  
                  {/* Step Card */}
                  <div className="w-full bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group">
                    
                    {/* Step number */}
                    <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-3">
                      Etapa 0{index + 1}
                    </span>

                    {/* Step Icon with gradient badge */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.color} text-white flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComp className="w-7 h-7" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {step.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-xs font-semibold text-sky-700 mb-3">
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Down arrow for mobile/tablet */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden my-2 text-sky-500">
                      <ArrowDown className="w-5 h-5 animate-bounce" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Corporate Value Strip */}
        <div className="mt-16 p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold">¿Listo para estructurar el plan preventivo de su organización?</h4>
            <p className="text-sm text-slate-300">
              Nuestro equipo brinda atención especializada y transparente para su empresa.
            </p>
          </div>
          <a
            href={COMPANY_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md transition-all shrink-0"
          >
            <span>Consultar con un asesor B2B</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
