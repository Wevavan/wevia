import { useState } from 'react';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import ConsultationModal from './ConsultationModal';
import AnimatedSection, { AnimatedCard } from './AnimatedSection';

export default function Pricing() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('pricing');

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

  const pricingPlans = [
    {
      name: "Site Vitrine Standard",
      price: "1 299",
      unit: "€ HT",
      description: "Idéal pour présenter votre activité",
      features: [
        "Design responsive (mobile, tablette, PC)",
        "Jusqu'à 5 pages",
        "Formulaire de contact",
        "Optimisation SEO de base",
        "Hébergement + domaine inclus (1 an)",
        "Formation à l'utilisation",
        "Livraison sous 2-3 semaines"
      ],
      popular: false
    },
    {
      name: "Site Vitrine Personnalisé",
      price: "1 800",
      unit: "€ HT",
      description: "Pour une présence web sur mesure",
      features: [
        "Design 100% personnalisé",
        "Jusqu'à 10 pages",
        "Animations et effets modernes",
        "Optimisation SEO avancée",
        "Intégration réseaux sociaux",
        "Interface administrateur",
        "Proposition de logo",
        "Livraison sous 3-4 semaines"
      ],
      popular: true
    },
    {
      name: "Plateforme E-commerce",
      price: "3 000",
      unit: "€ HT",
      description: "Vendez en ligne efficacement",
      features: [
        "Boutique complète personnalisée",
        "Paiement sécurisé (CB, PayPal)",
        "Gestion des stocks intégrée",
        "Tableau de bord vendeur",
        "Optimisation SEO e-commerce",
        "Formation complète",
        "Support prioritaire",
        "Livraison sous 4-6 semaines"
      ],
      popular: false
    }
  ];

  const additionalServices = [
    {
      name: "Maintenance & Support",
      price: "50€/heure ou 400€/an HT",
      description: "Mises à jour, modifications, sauvegardes mensuelles"
    },
    {
      name: "Développements Spécifiques",
      price: "500€/jour",
      description: "Fonctionnalités sur mesure et intégrations"
    },
    {
      name: "Consultation IA",
      price: "À discuter",
      description: "Audit et conseil pour intégrer l'IA dans votre business"
    },
    {
      name: "Automatisation IA",
      price: "À discuter",
      description: "Mise en place de solutions d'automatisation intelligente"
    }
  ];

  return (
    <section id="tarifs" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection animation="fade-right" className="text-right mb-12 sm:mb-16">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Tarifs</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Des prix transparents
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl ml-auto">
            Des tarifs clairs et sans surprise. Chaque projet est unique,
            n'hésitez pas à demander un devis personnalisé gratuit.
          </p>
        </AnimatedSection>

        {/* Pricing Cards - Horizontal scroll on mobile */}
        <div className="md:hidden -mx-4 px-4 mb-16">
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[300px] snap-center relative bg-white rounded-2xl p-6 border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'border-gray-900 shadow-xl'
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Populaire
                    </span>
                  </div>
                )}

                <div className="text-center mb-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-xs text-gray-500">À partir de</span>
                  </div>
                  <div className="flex items-baseline justify-center mt-1">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-sm text-gray-500 ml-1">{plan.unit}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.slice(0, 5).map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FiCheck className="w-4 h-4 text-gray-900 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-600">{feature}</span>
                    </li>
                  ))}
                  {plan.features.length > 5 && (
                    <li className="text-xs text-gray-400 text-center">
                      +{plan.features.length - 5} autres fonctionnalités
                    </li>
                  )}
                </ul>

                <button
                  onClick={() => handleCTAClick(`pricing_${plan.name.toLowerCase().replace(/ /g, '_')}`)}
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center active:scale-[0.98] ${
                    plan.popular
                      ? 'bg-gray-900 text-white active:bg-gray-800'
                      : 'bg-gray-100 text-gray-900 active:bg-gray-200'
                  }`}
                >
                  <span>Demander un devis</span>
                </button>
              </div>
            ))}
          </div>
          {/* Scroll indicator */}
          <div className="flex justify-center gap-1 mt-2">
            <span className="text-xs text-gray-400">Glissez pour comparer</span>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <AnimatedCard
              key={index}
              delay={index * 150}
              hoverEffect={plan.popular ? 'glow' : 'lift'}
              className={`relative bg-white rounded-2xl p-6 sm:p-8 border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-gray-900 shadow-xl md:scale-105'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gray-900 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-sm text-gray-500">À partir de</span>
                </div>
                <div className="flex items-baseline justify-center mt-1">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-lg text-gray-500 ml-1">{plan.unit}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <FiCheck className="w-5 h-5 text-gray-900 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCTAClick(`pricing_${plan.name.toLowerCase().replace(/ /g, '_')}`)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group ${
                  plan.popular
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                <span>Demander un devis</span>
                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </AnimatedCard>
          ))}
        </div>

        {/* Additional Services */}
        <AnimatedSection animation="fade-up" className="bg-gray-50 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
            Services complémentaires
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl border border-gray-200 hover-lift transition-all duration-300"
              >
                <h4 className="font-semibold text-gray-900 mb-1">{service.name}</h4>
                <p className="text-lg font-bold text-gray-900 mb-2">{service.price}</p>
                <p className="text-sm text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fade-up" className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Vous avez un projet spécifique ? Demandez un devis personnalisé.
          </p>
          <button
            onClick={() => handleCTAClick('pricing_custom_quote')}
            className="inline-flex items-center bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition-all hover:scale-105 hover:shadow-lg group"
          >
            Devis gratuit
            <FiArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </AnimatedSection>
      </div>

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        source="website"
        sourceSection={modalSource}
      />
    </section>
  );
}
