import { useState, useEffect, useCallback } from 'react';
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiGlobe, FiShoppingCart, FiCode, FiSearch, FiCpu, FiMessageSquare, FiZap, FiTool } from 'react-icons/fi';
import ConsultationModal from './ConsultationModal';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('hero');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const services = [
    {
      icon: FiGlobe,
      title: "Site Vitrine",
      description: "Sites web professionnels pour présenter votre activité",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
    },
    {
      icon: FiShoppingCart,
      title: "E-commerce",
      description: "Boutiques en ligne avec paiement sécurisé",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80"
    },
    {
      icon: FiCode,
      title: "Application Web",
      description: "Applications sur mesure pour votre métier",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80"
    },
    {
      icon: FiSearch,
      title: "Référencement SEO",
      description: "Visibilité optimale sur les moteurs de recherche",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1920&q=80"
    },
    {
      icon: FiCpu,
      title: "Intégration IA",
      description: "Solutions d'intelligence artificielle sur mesure",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80"
    },
    {
      icon: FiMessageSquare,
      title: "Chatbot IA",
      description: "Assistants virtuels pour votre service client",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1920&q=80"
    },
    {
      icon: FiZap,
      title: "Automatisation",
      description: "Automatisation de vos tâches répétitives",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1920&q=80"
    },
    {
      icon: FiTool,
      title: "Maintenance",
      description: "Support technique et évolutions continues",
      image: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?w=1920&q=80"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCTAClick = (ctaType) => {
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'cta_click',
        ctaType: ctaType,
        page: 'home',
        section: 'hero'
      })
    });
    setModalSource(ctaType);
    setIsConsultationModalOpen(true);
  };

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % services.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, services.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, services.length]);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const currentService = services[currentSlide];
  const CurrentIcon = currentService.icon;

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Carousel Images with Zoom Animation */}
        {services.map((service, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center ${
                index === currentSlide ? 'animate-zoom' : ''
              }`}
              style={{ backgroundImage: `url(${service.image})` }}
            />
          </div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90" />

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Main Content */}
            <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {/* Service Carousel Card - Main Title */}
              <div className="relative max-w-2xl mx-auto mb-10">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-white/20">
                  {/* Current Service */}
                  <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <CurrentIcon className="w-10 h-10 text-gray-900" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{currentService.title}</h1>
                    <p className="text-lg text-gray-300 max-w-lg mx-auto">{currentService.description}</p>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
                    <button
                      onClick={prevSlide}
                      className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
                      aria-label="Service précédent"
                    >
                      <FiChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Dots */}
                    <div className="flex gap-2">
                      {services.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            if (!isAnimating && index !== currentSlide) {
                              setIsAnimating(true);
                              setCurrentSlide(index);
                              setTimeout(() => setIsAnimating(false), 500);
                            }
                          }}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentSlide
                              ? 'w-8 bg-white'
                              : 'w-2 bg-white/40 hover:bg-white/60'
                          }`}
                          aria-label={`Aller au service ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextSlide}
                      className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
                      aria-label="Service suivant"
                    >
                      <FiChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 px-4">
                <button
                  onClick={() => handleCTAClick('hero_devis')}
                  className="group bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Demander un devis gratuit</span>
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#services"
                  className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-all duration-300"
                >
                  Voir mes services
                </a>
              </div>

              {/* Stats */}
              <div className={`grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto pt-8 border-t border-white/20 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">1</div>
                  <div className="text-xs sm:text-sm text-gray-400">Projet livré</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                  <div className="text-xs sm:text-sm text-gray-400">Clients satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">&lt;48h</div>
                  <div className="text-xs sm:text-sm text-gray-400">Délai réponse</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        source="website"
        sourceSection={modalSource}
      />

      {/* Custom CSS for zoom animation */}
      <style jsx>{`
        @keyframes zoomAnimation {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.15);
          }
        }
        .animate-zoom {
          animation: zoomAnimation 5s ease-out forwards;
        }
      `}</style>
    </>
  );
}
