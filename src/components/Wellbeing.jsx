import React from 'react';
import { Users, Smile, Laptop, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

export default function Wellbeing() {
  const wellbeingAspects = [
    {
      title: "Equipos de Trabajo Armónicos",
      description: "Ambientes colaborativos donde las personas se sienten escuchadas, protegidas y valoradas.",
      icon: Users,
    },
    {
      title: "Entornos y Oficinas Saludables",
      description: "Puestos de trabajo ordenados, ergonómicos y diseñados para proteger la salud física del colaborador.",
      icon: Laptop,
    },
    {
      title: "Tecnología y Monitoreo",
      description: "Herramientas que facilitan el seguimiento de condiciones laborales de manera clara y eficiente.",
      icon: Sparkles,
    },
    {
      title: "Prevención Integral",
      description: "Estrategias continuas orientadas a evitar el agotamiento y promover el equilibrio saludable.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-sky-50/40 to-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-emerald-600" />
            <span>Bienestar Laboral Corporativo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            El bienestar también hace parte de la productividad.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Las empresas que priorizan la salud y la calidad del ambiente de trabajo construyen organizaciones más resilientes, comprometidas y orientadas a resultados sostenibles.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wellbeingAspects.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                  <span>Enfoque CIMA</span>
                  <Smile className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote Block */}
        <div className="mt-14 max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-sky-900 via-slate-900 to-slate-900 text-white border border-sky-800/40 text-center shadow-lg">
          <p className="text-lg sm:text-xl font-medium italic text-sky-100 mb-3">
            “Cuidar a las personas no es solo un deber de seguridad, es el motor principal que impulsa el crecimiento de las empresas.”
          </p>
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            {COMPANY_DATA.name}
          </span>
        </div>

      </div>
    </section>
  );
}
