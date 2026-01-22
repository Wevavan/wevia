import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { HiOutlineCpuChip } from 'react-icons/hi2';

import ConsultationModal from './ConsultationModal';

export default function PremiumHeaderHero() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('header');
  const [activeSection, setActiveSection] = useState('/');

  // Détecter les changements de route et extraire l'ancre de l'URL
  useEffect(() => {
    const handleRouteChange = () => {
      // Utiliser router.asPath pour obtenir le chemin complet avec hash
      const fullPath = router.asPath;
      const hashIndex = fullPath.indexOf('#');

      if (hashIndex !== -1) {
        const hash = fullPath.substring(hashIndex);
        setActiveSection(hash);
      } else if (router.pathname === '/blog') {
        setActiveSection('/blog');
      } else {
        setActiveSection('/');
      }
    };

    // Vérifier au montage
    handleRouteChange();

    // Écouter les changements de route
    router.events?.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events?.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 20;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    setIsVisible(true);
    
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [handleScroll]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleCTAClick = (ctaType) => {
    console.log('CTA clicked:', ctaType);

    // Analytics
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'cta_click',
        ctaType: ctaType,
        page: 'home',
        section: 'header'
      })
    });

    // Ouvrir la modal de consultation
    setModalSource(ctaType);
    setIsConsultationModalOpen(true);
  };

  const handleNavigationClick = (e, href) => {
    const currentPath = router.pathname;

    // Si le lien est vers /blog
    if (href === '/blog') {
      // Si on est déjà sur /blog, empêcher la navigation
      if (currentPath === '/blog') {
        e.preventDefault();
        return;
      }
      // Sinon, navigation normale vers /blog (Next.js gère)
      setActiveSection('/blog');
      return;
    }

    // Si c'est un lien vers la home
    if (href === '/') {
      setActiveSection('/');
      return;
    }

    // Si c'est un lien avec ancre (#)
    if (href.startsWith('#')) {
      // Mettre à jour la section active
      setActiveSection(href);

      // Si on est sur /blog, rediriger vers la home avec l'ancre
      if (currentPath === '/blog') {
        e.preventDefault();
        // Utiliser router.push avec un callback pour maintenir la section active
        router.push(`/${href}`).then(() => {
          // La section active est déjà définie ci-dessus
          setIsMenuOpen(false);
        });
        return;
      }
      // Si on est sur la home, scroll normal
      // Le comportement par défaut des ancres fonctionnera
      setIsMenuOpen(false);
    }
  };

  // Déterminer quel item est actif
  const isItemActive = (href) => {
    const currentPath = router.pathname;

    // Si on est sur une page différente de la home
    if (currentPath === '/blog') {
      return href === '/blog';
    }

    // Sur la home, comparer avec activeSection
    return activeSection === href;
  };

  const navigationItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Projets', href: '#projects' },
    { name: 'À propos', href: '#about' },
    { name: 'Tarifs', href: '#pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact'}
  ];

  return (
    <>
      {/* HEADER PREMIUM CLEAN */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-100' 
            : 'bg-transparent'
        } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
        role="banner"
      >
        {/* Top Bar Premium */}
        <div className={`border-b transition-all duration-500 ${
          isScrolled ? 'border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50' : 'border-white/20 bg-white/10 backdrop-blur-sm'
        }`}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-10 sm:h-10">
              {/* Left - Status Disponible */}
              <div className={`flex items-center space-x-2 text-xs sm:text-sm ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                <span className="font-semibold">Disponible</span>
                <span className="hidden sm:inline font-medium">maintenant</span>
              </div>

              {/* Right - Phone Number */}
              <a
                href="tel:+33667483923"
                className={`flex items-center space-x-2 text-xs sm:text-sm font-semibold transition-colors ${
                  isScrolled
                    ? 'text-blue-600 hover:text-blue-700'
                    : 'text-white hover:text-cyan-300'
                }`}
              >
                <FiPhone className="w-4 h-4" />
                <span>+33 6 67 48 39 23</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="container mx-auto px-6" role="navigation">
          <div className="flex items-center justify-between h-20">
            {/* Logo Premium */}
            <a 
              href="/" 
              className="flex items-center group -ml-6"
              aria-label="WEV-IA - Accueil"
            >
              <img src="/logo_wev_ia.png" alt="WEV-IA Logo" className="h-32" />
            </a>

            {/* Desktop Navigation Clean */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => {
                const active = isItemActive(item.href);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavigationClick(e, item.href)}
                    className={`relative py-3 px-2 font-medium transition-all duration-300 ${
                      isScrolled
                        ? active
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                        : active
                          ? 'text-cyan-400'
                          : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${
                      active
                        ? isScrolled
                          ? 'bg-blue-600 scale-x-100'
                          : 'bg-cyan-400 scale-x-100'
                        : 'bg-current scale-x-0 hover:scale-x-100'
                    }`} />
                  </a>
                );
              })}
            </div>

            {/* CTA Clean */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => handleCTAClick('header_consultation')}
                className={`group relative overflow-hidden px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20'
                }`}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Consultation Gratuite</span>
                  <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'
                }`}>
                  <FiMenu className="w-6 h-6" />
                </span>
                <span className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0'
                }`}>
                  <FiX className="w-6 h-6" />
                </span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Premium Full Screen - OUTSIDE header for proper z-index */}
      <div
        className={`lg:hidden fixed inset-0 z-[9999] transition-all duration-500 ${
          isMenuOpen ? 'visible' : 'invisible pointer-events-none'
        }`}
      >
        {/* Backdrop - Solid opaque background */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: '#0f172a'
          }}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(30,58,95,1) 50%, rgba(49,46,129,1) 100%)'
          }}
        />

        {/* Content */}
        <div className={`relative h-full flex flex-col transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Fermer le menu"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center px-6 -mt-4">
            <div className="space-y-0.5">
              {navigationItems.map((item, index) => {
                const active = isItemActive(item.href);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleNavigationClick(e, item.href);
                      setIsMenuOpen(false);
                    }}
                    className={`block py-2.5 transition-all duration-500 ${
                      isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${100 + index * 40}ms` : '0ms'
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className={`text-xl font-bold transition-colors ${
                        active ? 'text-cyan-400' : 'text-white hover:text-cyan-300'
                      }`}>
                        {item.name}
                      </span>
                      {active && (
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                      )}
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Mobile CTA - Plus visible */}
            <div className={`mt-6 transition-all duration-500 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: isMenuOpen ? `${100 + navigationItems.length * 40}ms` : '0ms' }}>
              <button
                onClick={() => {
                  handleCTAClick('mobile_consultation');
                  setIsMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-base">Consultation Gratuite</span>
                  <FiArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </nav>

          {/* Bottom Contact Info - Compact */}
          <div className={`px-6 py-4 border-t border-white/10 transition-all duration-500 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: isMenuOpen ? `${200 + navigationItems.length * 40}ms` : '0ms' }}>
            <div className="flex items-center justify-between">
              <a
                href="tel:+33667483923"
                className="flex items-center space-x-2 text-white/80 hover:text-cyan-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <FiPhone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">+33 6 67 48 39 23</span>
              </a>
              <a
                href="mailto:wev.ia.org@gmail.com"
                className="flex items-center space-x-2 text-white/80 hover:text-cyan-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <FiMail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>

            {/* Status indicator */}
            <div className="flex items-center justify-center space-x-2 mt-3 text-white/60">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs">Disponible pour nouveaux projets</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Consultation */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        source="website"
        sourceSection={modalSource}
      />
    </>
  );
}