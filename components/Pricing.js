import { useState, useEffect, useRef } from 'react';
import { FiCheck, FiZap, FiTrendingUp, FiDollarSign } from 'react-icons/fi';
import { servicesContent } from '../content/servicesContent';
import ConsultationModal from './ConsultationModal';

export default function Pricing() {
  const [visibleRows, setVisibleRows] = useState([]);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('pricing');
  const sectionRef = useRef(null);

  const handleCTAClick = (ctaType) => {
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'cta_click',
        ctaType: ctaType,
        page: 'home',
        section: 'pricing'
      })
    });

    setModalSource(ctaType);
    setIsConsultationModalOpen(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleRows(prev => [...prev, index]);
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const rows = sectionRef.current?.querySelectorAll('[data-index]');
    rows?.forEach(row => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-white" id="pricing">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-start justify-between gap-8 mb-6">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Des Tarifs
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Transparents & Justes
                </span>
              </h2>
            </div>

            {/* Badge à droite */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3 flex-shrink-0">
              <FiDollarSign className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-700 font-bold">TARIFS</span>
            </div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Investissez intelligemment dans votre présence digitale.
            <span className="font-semibold text-blue-600"> Des prix clairs, sans surprise</span>.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {servicesContent.pricing.services.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`group relative bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-blue-500 hover:shadow-2xl transition-all duration-500 ${
                visibleRows.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Badge for featured */}
              {index === 2 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg flex items-center space-x-1">
                    <FiZap className="w-3 h-3" />
                    <span>POPULAIRE</span>
                  </div>
                </div>
              )}

              {/* Service Name */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.service}</h3>
                <p className="text-gray-600 text-sm">{item.positioning}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {item.price.split('→')[0].trim()}
                  </span>
                  {item.price.includes('→') && (
                    <>
                      <span className="text-gray-400">→</span>
                      <span className="text-3xl font-bold text-gray-700">
                        {item.price.split('→')[1].trim()}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Features - Extract from positioning */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-2 text-gray-600">
                  <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Design responsive & moderne</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Optimisation SEO incluse</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Support & maintenance</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleCTAClick(`pricing_${item.service.replace(/\s+/g, '_').toLowerCase()}`)}
                className={`block w-full text-center py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                  index === 2
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Demander un devis
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <FiZap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Paiement Flexible</h3>
                <p className="text-gray-600">
                  Possibilité de paiement en plusieurs fois. Des solutions adaptées à votre budget pour démarrer votre projet sans contraintes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <FiTrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Devis Sur-Mesure</h3>
                <p className="text-gray-600">
                  Chaque projet est unique. Contactez-moi pour un devis personnalisé et adapté précisément à vos besoins spécifiques.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            * Les tarifs affichés sont indicatifs et peuvent varier selon la complexité du projet
          </p>
        </div>
      </div>

      {/* Modal de Consultation */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        source="website"
        sourceSection={modalSource}
      />
    </section>
  );
}
