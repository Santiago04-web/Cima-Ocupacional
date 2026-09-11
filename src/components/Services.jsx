import React from 'react';
import { Activity, ShieldCheck, HardHat, Sparkles, Building2, Check, ArrowRight, MessageSquare } from 'lucide-react';
import { SERVICES, COMPANY_DATA } from '../data/companyData';

export default function Services() {
  const iconMap = {
    Activity: Activity,
    ShieldCheck: ShieldCheck,
    HardHat: HardHat,
    Sparkles: Sparkles,
    Building2: Building2,
  };

  return (
    <section id="servicios" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/60 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            Portafolio Corporativo
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Soluciones de salud ocupacional
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Servicios estructurados para acompañar a las organizaciones en la preservación de la salud, el control de riesgos laborales y la consolidación de entornos de trabajo seguros.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComp = iconMap[service.icon] || Activity;
            const isFeatured = index === 0;

            return (
              <div
                key={service.id}
                className={`relative rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between border ${
                  isFeatured
                    ? 'bg-gradient-to-b from-slate-900 to-slate-800 text-white border-slate-700 shadow-xl'
                    : 'bg-white text-slate-900 border-slate-200 hover:border-sky-300 hover:shadow-xl'
                }`}
              >
                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
                        isFeatured
                          ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {service.category}
                    </span>

                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isFeatured
                          ? 'bg-sky-600/30 text-sky-300 border border-sky-500/30'
                          : 'bg-sky-50 text-sky-600 border border-sky-100'
                      }`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-xl font-bold mb-3 ${isFeatured ? 'text-white' : 'text-slate-900'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${isFeatured ? 'text-slate-300' : 'text-slate-600'}`}>
                    {service.description}
                  </p>

                  {/* Highlights List */}
                  <ul className="space-y-2.5 mb-8">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs font-medium">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isFeatured ? 'text-emerald-400' : 'text-emerald-600'
                          }`}
                        />
                        <span className={isFeatured ? 'text-slate-200' : 'text-slate-700'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-slate-200/20">
                  <a
                    href={COMPANY_DATA.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                      isFeatured
                        ? 'bg-sky-600 hover:bg-sky-500 text-white'
                        : 'bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-700'
                    }`}
                  >
                    <span>Consultar con un asesor</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}

          {/* Dedicated B2B Card Callout */}
          <div className="relative rounded-2xl p-8 bg-gradient-to-br from-sky-800 via-sky-900 to-slate-950 text-white border border-sky-700/50 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 inline-block">
                Atención Corporativa
              </span>
              <h3 className="text-2xl font-bold">
                ¿Tu empresa requiere un esquema de acompañamiento integral?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Diseñamos una atención personalizada según las necesidades y el volumen de colaboradores de su organización.
              </p>
            </div>

            <div className="pt-6">
              <a
                href={COMPANY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm transition-colors shadow"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Hablar con un asesor</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
