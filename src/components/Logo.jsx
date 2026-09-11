import React from 'react';
import logoImg from '../assets/logo-oficial.jpg';

export default function Logo({ variant = 'full', className = '', imgClassName = 'h-10 w-10' }) {
  if (variant === 'icon-only') {
    return (
      <img
        src={logoImg}
        alt="CIMA OCUPACIONAL"
        className={`object-contain rounded-lg shadow-xs ${imgClassName} ${className}`}
      />
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="relative flex items-center justify-center p-1 rounded-xl bg-gradient-to-br from-white to-slate-100 shadow-sm border border-slate-200/80">
        <img
          src={logoImg}
          alt="CIMA OCUPACIONAL Isotipo"
          className={`object-contain rounded-lg ${imgClassName}`}
        />
      </div>
      <div className="flex flex-col text-left">
        <span className="font-extrabold tracking-tight text-slate-900 text-lg md:text-xl leading-none">
          CIMA
        </span>
        <span className="font-bold text-[10px] md:text-xs tracking-widest text-sky-700 uppercase leading-tight mt-0.5">
          OCUPACIONAL
        </span>
      </div>
    </div>
  );
}
