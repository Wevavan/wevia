import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiArrowRight, FiCheck } from 'react-icons/fi';
import ConsultationModal from './ConsultationModal';
import AnimatedSection, { AnimatedCard } from './AnimatedSection';

export default function ContactForm() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const handleCTAClick = () => {
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'cta_click',
        ctaType: 'contact_section',
        page: 'home',
        section: 'contact'
      })
    });
    setIsConsultationModalOpen(true);
  };

  const contactInfo = [
    { icon: FiMail, label: "Email", value: "wev.ia.org@gmail.com", href: "mailto:wev.ia.org@gmail.com" },
    { icon: FiPhone, label: "Téléphone", value: "+33 6 67 48 39 23", href: "tel:+33667483923" },
    { icon: FiMapPin, label: "Localisation", value: "Paris, France", href: null }
  ];

  const guarantees = [
    "Devis gratuit sous 24h",
    "Accompagnement personnalisé",
    "Satisfaction garantie",
    "Support après livraison"
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Contact</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
              Parlons de votre projet
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Vous avez une idée, un projet ? Contactez-moi pour en discuter.
              Je vous répondrai dans les 24 heures.
            </p>
          </AnimatedSection>

          {/* Main CTA Card */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-white rounded-2xl p-8 sm:p-10 mb-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Demandez votre devis gratuit
                </h3>
                <p className="text-gray-600">
                  Réponse garantie sous 24h - Sans engagement
                </p>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {guarantees.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 group">
                    <FiCheck className="w-5 h-5 text-gray-900 flex-shrink-0 transition-transform group-hover:scale-110" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={handleCTAClick}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-xl sm:rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-[1.02] active:scale-[0.98] active:bg-gray-800"
              >
                <span>Demander un devis gratuit</span>
                <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </AnimatedSection>

          {/* Contact Info - Horizontal scroll on mobile */}
          <div className="sm:hidden -mx-4 px-4">
            <div className="flex overflow-x-auto gap-3 pb-4 snap-x snap-mandatory scrollbar-hide">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href || '#'}
                  className="flex-shrink-0 w-[140px] snap-start bg-gray-800 rounded-2xl p-4 text-center active:scale-95 transition-transform"
                >
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xs text-gray-400 mb-1">{info.label}</div>
                  <div className="text-white font-medium text-xs truncate">{info.value}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-4">
            {contactInfo.map((info, index) => (
              <AnimatedCard
                key={index}
                delay={300 + index * 100}
                hoverEffect="lift"
                className="bg-gray-800 rounded-xl p-5 text-center"
              >
                <info.icon className="w-6 h-6 text-white mx-auto mb-3 transition-transform hover:scale-110" />
                <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-white font-medium hover:underline text-sm"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="text-white font-medium text-sm">{info.value}</span>
                )}
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        source="website"
        sourceSection="contact"
      />
    </section>
  );
}
