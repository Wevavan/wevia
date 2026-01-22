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
          isScrolled ? 'border-gray-100' : 'border-white/20'
        }`}>
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-10">
              {/* Left - Contact Info */}
              <div className="flex items-center space-x-8">
                <div className={`flex items-center space-x-2 text-sm ${
                  isScrolled ? 'text-gray-600' : 'text-white/80'
                }`}>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="hidden sm:inline font-medium">Disponible maintenant</span>
                </div>
                <a
                  href="tel:+33662704580"
                  className={`hidden md:flex items-center space-x-2 text-sm font-medium transition-colors ${
                    isScrolled
                      ? 'text-gray-600 hover:text-blue-600'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <FiPhone className="w-4 h-4" />
                  <span>+33 6 62 70 45 80</span>
                </a>
              </div>

              {/* Right - Social & Status */}
              <div className="flex items-center space-x-4">
                <div className={`hidden lg:flex items-center space-x-2 text-sm ${
                    isScrolled ? 'text-gray-500' : 'text-white/60'
                }`}>                    
                </div>
                </div>
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

        {/* Mobile Menu Clean */}
        <div 
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-xl">
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-1">
                {navigationItems.map((item, index) => {
                  const active = isItemActive(item.href);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavigationClick(e, item.href)}
                      className={`block py-4 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 font-medium ${
                        isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      }`}
                      style={{
                        transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg">{item.name}</span>
                        {active && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        )}
                      </div>
                    </a>
                  );
                })}

                {/* Mobile CTA */}
                <div className="pt-6 border-t border-gray-200 mt-4">
                  <button
                    onClick={() => {
                      handleCTAClick('mobile_consultation');
                      setIsMenuOpen(false);
                    }}
                    className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 ${
                      isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${navigationItems.length * 50}ms` : '0ms'
                    }}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span>Consultation Gratuite</span>
                      <FiArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                </div>

                {/* Mobile Contact */}
                <div className="pt-6 space-y-4">
                  <a
                    href="tel:+33662704580"
                    className={`flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors p-3 rounded-lg hover:bg-blue-50 ${
                      isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${(navigationItems.length + 2) * 50}ms` : '0ms'
                    }}
                  >
                    <FiPhone className="w-5 h-5" />
                    <span className="font-medium">+33 6 62 70 45 80</span>
                  </a>
                  <a
                    href="mailto:contact@WevIA-pro.fr"
                    className={`flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors p-3 rounded-lg hover:bg-blue-50 ${
                      isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${(navigationItems.length + 3) * 50}ms` : '0ms'
                    }}
                  >
                    <FiMail className="w-5 h-5" />
                    <span className="font-medium">contact@WevIA-pro.fr</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

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