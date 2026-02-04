import { FiGlobe, FiShoppingCart, FiSearch, FiCode, FiZap, FiTool, FiCpu, FiMessageSquare } from 'react-icons/fi';
import AnimatedSection, { AnimatedCard } from './AnimatedSection';

export default function Services() {
  const services = [
    {
      icon: FiGlobe,
      title: "Site Vitrine",
      description: "Site web professionnel pour présenter votre activité et attirer de nouveaux clients."
    },
    {
      icon: FiShoppingCart,
      title: "E-commerce",
      description: "Boutique en ligne complète avec paiement sécurisé et gestion des stocks."
    },
    {
      icon: FiCode,
      title: "Application Web",
      description: "Applications sur mesure pour digitaliser et optimiser vos processus métier."
    },
    {
      icon: FiSearch,
      title: "Référencement SEO",
      description: "Optimisation pour les moteurs de recherche et amélioration de votre visibilité."
    },
    {
      icon: FiCpu,
      title: "Intégration IA",
      description: "Solutions d'intelligence artificielle adaptées à vos besoins spécifiques."
    },
    {
      icon: FiMessageSquare,
      title: "Chatbot IA",
      description: "Assistant virtuel intelligent pour automatiser votre service client."
    },
    {
      icon: FiZap,
      title: "Automatisation",
      description: "Automatisation de vos tâches répétitives pour gagner du temps."
    },
    {
      icon: FiTool,
      title: "Maintenance",
      description: "Support technique, mises à jour et évolutions de votre site web."
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-left mb-6 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">Services</span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-1 sm:mt-2 mb-2 sm:mb-4">
            Ce que je propose
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl">
            Des solutions digitales complètes pour développer votre présence en ligne
            et automatiser votre activité.
          </p>
        </AnimatedSection>

        {/* Services - Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="sm:hidden -mx-4 px-4">
          <div className="flex overflow-x-auto gap-3 pb-3 snap-x snap-mandatory scrollbar-hide">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[200px] snap-start bg-white p-4 rounded-2xl border border-gray-200 active:scale-[0.98] transition-transform"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                  <service.icon className="w-5 h-5 text-gray-900" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{service.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">{service.description}</p>
              </div>
            ))}
          </div>
          {/* Scroll indicator */}
          <div className="flex justify-center gap-1 mt-1">
            <span className="text-[10px] text-gray-400">Glissez pour voir plus</span>
            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedCard
              key={index}
              delay={index * 100}
              hoverEffect="lift"
              className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-900 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gray-100 group-hover:bg-gray-900 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </AnimatedCard>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={400} className="text-center mt-12">
          <a
            href="#tarifs"
            className="inline-flex items-center text-gray-900 font-semibold hover:underline group"
          >
            Voir les tarifs
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
