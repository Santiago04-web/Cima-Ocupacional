import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

export default function LegalModal({ isOpen, onClose, type = 'privacy' }) {
  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-100 text-sky-700">
              {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {isPrivacy ? 'Política de Privacidad y Tratamiento de Datos' : 'Términos y Condiciones de Uso'}
              </h3>
              <p className="text-xs text-slate-500">{COMPANY_DATA.name}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-600 leading-relaxed">
          {isPrivacy ? (
            <>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">1. Identificación del Responsable</h4>
                <p>
                  <strong>{COMPANY_DATA.name}</strong>, identificada con NIT <strong>{COMPANY_DATA.nit}</strong>, con domicilio principal en <strong>{COMPANY_DATA.address}</strong>, Medellín, Colombia, sitio web <strong>{COMPANY_DATA.website}</strong> y correo electrónico de contacto <strong>{COMPANY_DATA.email}</strong>, actúa como responsable del tratamiento de datos personales conforme a la legislación colombiana (Ley 1581 de 2012 y normas complementarias).
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">2. Finalidad de la Recolección</h4>
                <p>
                  Los datos suministrados a través de nuestros formularios o canales de comunicación oficiales (teléfono {COMPANY_DATA.phone}, WhatsApp o correo {COMPANY_DATA.email}) serán utilizados exclusivamente para:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Atención y respuesta de solicitudes comerciales y de información.</li>
                  <li>Contacto institucional sobre soluciones de salud ocupacional y prevención.</li>
                  <li>Cumplimiento de las obligaciones contractuales y legales aplicables.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">3. Derechos del Titular</h4>
                <p>
                  El titular de la información tiene derecho a conocer, actualizar, rectificar y solicitar la supresión de sus datos personales en cualquier momento mediante comunicación dirigida a <strong>{COMPANY_DATA.email}</strong>.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">4. Seguridad de la Información</h4>
                <p>
                  {COMPANY_DATA.name} adopta medidas técnicas y organizativas para preservar la confidencialidad, integridad y seguridad de la información suministrada.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">1. Disposiciones Generales</h4>
                <p>
                  El presente sitio web es propiedad oficial de <strong>{COMPANY_DATA.name}</strong> (NIT {COMPANY_DATA.nit}), con sede en {COMPANY_DATA.address}, Medellín, Colombia. El acceso y navegación por este sitio web implica la aceptación de los presentes términos de uso.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">2. Naturaleza de la Información</h4>
                <p>
                  El contenido informativo publicado en <strong>{COMPANY_DATA.domain}</strong> tiene un carácter exclusivamente informativo y corporativo sobre los servicios en prevención, bienestar, y seguridad y salud en el trabajo ofrecidos a empresas y organizaciones. No constituye diagnóstico médico directo ni sustituye la valoración médica individualizada requerida por la normativa aplicable.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">3. Propiedad Intelectual</h4>
                <p>
                  Todos los signos distintivos, logotipos, textos, elementos gráficos y contenidos de este portal son propiedad de {COMPANY_DATA.name} o se utilizan con la debida autorización, encontrándose protegidos por las leyes de propiedad intelectual.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">4. Canales de Contacto</h4>
                <p>
                  Para cualquier consulta, requerimiento o aclaración institucional, puede comunicarse al canal telefónico comercial <strong>{COMPANY_DATA.phone}</strong> o al correo electrónico <strong>{COMPANY_DATA.email}</strong>.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            {COMPANY_DATA.domain} • Todos los derechos reservados
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
}
