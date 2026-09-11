import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Activity, Users, CheckCircle2 } from 'lucide-react';
import heroBannerImg from '../assets/hero-banner.jpg';
import { COMPANY_DATA } from '../data/companyData';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/30 to-white">
      {/* Decorative ambient background */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-sky-100/50 via-cyan-50/30 to-transparent pointer-events-none -z-10" />
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-sky-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200/80 text-sky-900 text-xs md:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
              <span>{COMPANY_DATA.shortName}</span>
              <span className="text-slate-300">•</span>
              <span className="text-sky-700 font-normal">Gestión Preventiva y SST</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Protegemos la salud de quienes hacen{' '}
              <span className="bg-gradient-to-r from-sky-800 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
                crecer tu empresa.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal">
              {COMPANY_DATA.subconcept}
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Enfoque preventivo y continuo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Acompañamiento B2B especializado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cuidado del bienestar de los equipos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Gestión orientada a la seguridad</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200 group text-center"
              >
                <span>Conoce nuestros servicios</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={COMPANY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200 text-center"
              >
                <MessageSquare className="w-5 h-5 text-emerald-100" />
                <span>Hablar con un asesor</span>
              </a>
            </div>

            {/* Official trust statement */}
            <div className="pt-3 border-t border-slate-200/70 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">{COMPANY_DATA.name}</span>
              <span>NIT: {COMPANY_DATA.nit}</span>
              <span>{COMPANY_DATA.city}</span>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-5 relative">
            
            {/* Glow backdrop */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-sky-400/20 via-cyan-300/30 to-emerald-400/20 rounded-3xl blur-xl" />

            {/* Main Visual Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white">
              <img
                src={heroBannerImg}
                alt="CIMA Ocupacional - Salud y Seguridad en el Trabajo en Entornos Corporativos"
                className="w-full h-auto object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
                loading="eager"
              />

              {/* Bottom glass overlay on image */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950/80 via-slate-900/50 to-transparent text-white">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="text-xs text-sky-300 font-semibold tracking-wider uppercase">CIMA OCUPACIONAL</p>
                    <p className="text-sm font-bold">Salud • Prevención • Seguridad</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-medium backdrop-blur-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Asesoría B2B</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge top right */}
            <div className="hidden sm:flex items-center gap-3 absolute -top-5 -right-5 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-100 z-10">
              <div className="p-2 rounded-lg bg-sky-100 text-sky-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Cultura Preventiva</p>
                <p className="text-xs font-bold text-slate-800">Protección y Continuidad</p>
              </div>
            </div>

            {/* Floating badge bottom left */}
            <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-100 z-10">
              <div className="p-2 rounded-lg bg-cyan-100 text-cyan-700">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Seguridad Laboral</p>
                <p className="text-xs font-bold text-slate-800">Cuidado Integral del Equipo</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
