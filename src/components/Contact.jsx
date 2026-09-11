import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, MapPin, Globe, FileText, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    correo: '',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build direct WhatsApp message with form parameters
    const text = `Hola, me contacto desde la web de CIMA Ocupacional.%0A%0A*Nombre:* ${encodeURIComponent(formData.nombre)}%0A*Empresa:* ${encodeURIComponent(formData.empresa || 'No especificada')}%0A*Teléfono:* ${encodeURIComponent(formData.telefono)}%0A*Correo:* ${encodeURIComponent(formData.correo)}%0A*Mensaje:* ${encodeURIComponent(formData.mensaje)}`;
    const url = `https://wa.me/${COMPANY_DATA.whatsappNumber}?text=${text}`;
    
    setSubmitted(true);
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            Canales de Atención
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Información y Contacto Directo
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Estamos disponibles para atender los requerimientos preventivos de su organización.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Exact Official Details & Quick Buttons */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-sky-600 font-bold">Datos Oficiales</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  {COMPANY_DATA.name}
                </h3>
                <p className="text-sm font-semibold text-slate-500 mt-0.5">
                  NIT: {COMPANY_DATA.nit}
                </p>
              </div>

              {/* Exact Details List */}
              <div className="space-y-4 pt-4 border-t border-slate-100 text-sm">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block uppercase">Dirección</span>
                    <p className="font-medium text-slate-800">{COMPANY_DATA.address}</p>
                    <p className="text-xs text-slate-500">{COMPANY_DATA.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block uppercase">Teléfono comercial</span>
                    <a
                      href={`tel:+${COMPANY_DATA.phoneRaw}`}
                      className="font-medium text-slate-800 hover:text-sky-700 transition-colors"
                    >
                      {COMPANY_DATA.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block uppercase">Correo electrónico</span>
                    <a
                      href={`mailto:${COMPANY_DATA.email}`}
                      className="font-medium text-slate-800 hover:text-sky-700 transition-colors"
                    >
                      {COMPANY_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block uppercase">Sitio web oficial</span>
                    <a
                      href={COMPANY_DATA.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-slate-800 hover:text-sky-700 transition-colors"
                    >
                      {COMPANY_DATA.website}
                    </a>
                  </div>
                </div>

              </div>

              {/* 3 Dedicated Action Buttons */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={COMPANY_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-sm text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:+${COMPANY_DATA.phoneRaw}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-sky-700 hover:bg-sky-600 text-white font-semibold text-xs transition-colors shadow-sm text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Llamar</span>
                </a>

                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors shadow-sm text-center"
                >
                  <Mail className="w-4 h-4" />
                  <span>Correo</span>
                </a>
              </div>

            </div>

            {/* Official Certification Notice */}
            <div className="p-4 rounded-2xl bg-white/70 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
              <FileText className="w-4 h-4 text-sky-600 shrink-0" />
              <span>
                Empresa registrada legalmente ante la Cámara de Comercio de Medellín para Antioquia con matrícula activa.
              </span>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Solicitar información para su empresa
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Complete el formulario y le responderemos con la información que su organización requiere.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-900">Mensaje enviado</h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Hemos abierto su consulta en WhatsApp para conectarlo con nuestro asesor comercial directamente.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-emerald-700 font-semibold underline mt-2"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm outline-hidden transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Empresa u organización
                      </label>
                      <input
                        type="text"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        placeholder="Nombre de la empresa"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Teléfono de contacto *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="Ej. 300 000 0000"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm outline-hidden transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Correo corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.correo}
                        onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                        placeholder="correo@empresa.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mensaje o requerimiento *
                    </label>
                    <textarea
                      rows="4"
                      required
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Describa brevemente en qué podemos apoyar a su organización..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm outline-hidden transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-sky-700 text-white font-semibold text-sm transition-colors shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar consulta</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Sus datos serán tratados de conformidad con nuestra política de privacidad.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
