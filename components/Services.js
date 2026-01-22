import { useState, useEffect, useRef } from 'react';
import { FiZap, FiTrendingUp, FiArrowRight, FiSmartphone, FiSettings } from 'react-icons/fi';
import { MdRocket } from 'react-icons/md';

import ConsultationModal from './ConsultationModal';
import { servicesContent } from '../content/servicesContent';

export default function Services() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeTab, setActiveTab] = useState('webDev');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('services');
  const sectionRef = useRef(null);

  const tabs = [
    {
      id: 'webDev',
      name: 'Développement Web',
      icon: MdRocket
    },
    {
      id: 'mobile',
      name: 'Applications Mobile',
      icon: FiSmartphone
    },
    {
      id: 'seo',
      name: 'SEO & Référencement',
      icon: FiTrendingUp
    },
    {
      id: 'ia',
      name: 'IA & Automatisation',
      icon: FiZap
    }
  ];

  const handleCTAClick = (ctaType) => {
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'cta_click',
        ctaType: ctaType,
        page: 'home',
        section: 'services'
      })
    });

    setModalSource(ctaType);
    setIsConsultationModalOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isConsultationModalOpen) {
        setIsConsultationModalOpen(false);
      }
    };

    if (isConsultationModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isConsultationModalOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const currentServices = servicesContent[activeTab]?.services || [];
  const currentTitle = servicesContent[activeTab]?.title || '';

  return (
    <>
      <section ref={sectionRef} className="relative overflow-hidden" id="services">
        {/* Background Premium - Desktop only */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* ========== MOBILE APP VERSION ========== */}
        <div className="sm:hidden bg-gradient-to-b from-slate-50 to-white py-8 px-4">
          {/* App Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-3 py-1.5 mb-3">
              <FiSettings className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">Services</span>
            </div>
            <h2 className="text-2xl font-black text-gray-900 leading-tight">
              Vision → <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Succès</span>
            </h2>
          </div>

          {/* App-style Segmented Control for Tabs */}
          <div className="bg-gray-100 rounded-xl p-1 mb-5">
            <div className="flex overflow-x-auto scrollbar-hide gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-fit flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600'
                  }`}
                >
                  <tab.icon className="text-sm" />
                  <span className="whitespace-nowrap">{tab.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Current Category Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 px-1">
            {currentTitle}
          </h3>

          {/* App-style Service Cards - Vertical List */}
          <div className="space-y-3">
            {currentServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 active:scale-[0.98] transition-transform"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-gray-900 leading-tight mb-0.5">
                      {service.name}
                    </h4>
                    {service.tech && (
                      <span className="text-[10px] text-blue-600 font-medium">{service.tech}</span>
                    )}
                    <p className="text-xs text-gray-600 leading-relaxed mt-1.5 line-clamp-2">{service.description}</p>
                  </div>
                  <FiArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                </div>
              </div>
            ))}
          </div>

          {/* Swipe hint */}
          <p className="text-center text-[10px] text-gray-400 mt-4">
            {currentServices.length} services disponibles
          </p>

          {/* App-style CTA Button */}
          <div className="mt-6">
            <button
              onClick={() => handleCTAClick('services_consultation')}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg active:scale-[0.98] transition-transform"
            >
              <span className="flex items-center justify-center space-x-2">
                <span className="text-sm">Consultation Gratuite</span>
                <FiArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>

        {/* ========== DESKTOP VERSION ========== */}
        <div className="hidden sm:block py-32">
          <div className="container mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="mb-16">
              {/* Badge */}
              <div className="flex justify-end mb-6">
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3">
                  <FiSettings className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-bold text-blue-700">NOS SERVICES</span>
                </div>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight text-left">
                Transformez Votre Vision
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  En Succès Digital
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 max-w-5xl leading-relaxed text-left">
                Vous avez une idée ? Je la concrétise. Vous voulez dominer votre marché ?
                Je crée les outils qui feront la différence. Résultats garantis.
              </p>
            </div>

            {/* Tabs */}
            <div className="relative mb-12">
              <div className="flex justify-center gap-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group flex items-center space-x-3 px-6 py-4 rounded-2xl font-bold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105'
                        : 'bg-white/80 backdrop-blur-xl text-gray-700 hover:bg-white hover:shadow-lg border border-gray-100'
                    }`}
                  >
                    <tab.icon className="text-xl" />
                    <span className="text-base">{tab.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-black text-gray-900 mb-8 text-left">
                {currentTitle}
              </h3>

              {/* Desktop: Vertical list */}
              <div className="space-y-6">
                {currentServices.map((service, index) => (
                  <div
                    key={index}
                    data-index={index}
                    className={`group bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                      visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300" />
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">
                          {service.name}
                          {service.tech && (
                            <span className="ml-2 text-base font-normal text-gray-500">{service.tech}</span>
                          )}
                        </h4>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed pl-7 whitespace-pre-line">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-20">
              <div className="flex flex-row items-center justify-between max-w-5xl mx-auto bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-2 text-left">
                  <span className="font-semibold text-gray-900">Prêt à transformer votre projet ?</span>
                </div>
                <button
                  onClick={() => handleCTAClick('services_consultation')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Consultation Gratuite</span>
                    <FiArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        source="website"
        sourceSection={modalSource}
      />
    </>
  );
}