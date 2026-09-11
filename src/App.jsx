import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Services from './components/Services';
import BusinessSolutions from './components/BusinessSolutions';
import Prevention from './components/Prevention';
import Wellbeing from './components/Wellbeing';
import SafetyHealth from './components/SafetyHealth';
import Technology from './components/Technology';
import Process from './components/Process';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LegalModal from './components/LegalModal';

export default function App() {
  const [legalModal, setLegalModal] = useState({
    isOpen: false,
    type: 'privacy', // 'privacy' | 'terms'
  });

  const handleOpenLegal = (type) => {
    setLegalModal({
      isOpen: true,
      type,
    });
  };

  const handleCloseLegal = () => {
    setLegalModal((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white font-sans antialiased">
      {/* Sticky Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 5. Hero */}
        <Hero />

        {/* 6. Propuesta de Valor (4 Pilares) */}
        <ValueProposition />

        {/* 7. Servicios */}
        <Services />

        {/* 8. Empresas (B2B Flow) */}
        <BusinessSolutions />

        {/* 9. Prevención (Prevenir antes de corregir) */}
        <Prevention />

        {/* 10. Bienestar Laboral */}
        <Wellbeing />

        {/* 11. Seguridad y Salud en el Trabajo */}
        <SafetyHealth />

        {/* 12. Tecnología para una gestión más inteligente */}
        <Technology />

        {/* 13. Proceso (Nuestro Enfoque) */}
        <Process />

        {/* 14. CTA Principal */}
        <CallToAction />

        {/* 15. Contacto */}
        <Contact />
      </main>

      {/* 17. Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* 18. Botón Flotante WhatsApp */}
      <WhatsAppButton />

      {/* 19. Modales Legales */}
      <LegalModal
        isOpen={legalModal.isOpen}
        type={legalModal.type}
        onClose={handleCloseLegal}
      />
    </div>
  );
}
