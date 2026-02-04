import { useState, useEffect, useCallback } from 'react';
import { FiMenu, FiX, FiPhone, FiMail, FiHome, FiGrid, FiBriefcase, FiDollarSign, FiUser, FiEdit3, FiMessageCircle } from 'react-icons/fi';
import ConsultationModal from './ConsultationModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleCTAClick = () => {
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'cta_click',
        ctaType: 'header_cta',
        page: 'home',
        section: 'header'
      })
    });
    setIsConsultationModalOpen(true);
    setIsMenuOpen(false);
  };

  const handleNavigationClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();

      // Check if we're on the home page
      const isHomePage = window.location.pathname === '/';

      if (!isHomePage) {
        // Redirect to home page with anchor
        window.location.href = href === '#' ? '/' : '/' + href;
        return;
      }

      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - headerHeight,
            behavior: 'smooth'
          });
        }
      }
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { name: 'Accueil', href: '#', icon: FiHome },
    { name: 'Services', href: '#services', icon: FiGrid },
    { name: 'Portfolio', href: '#portfolio', icon: FiBriefcase },
    { name: 'Tarifs', href: '#tarifs', icon: FiDollarSign },
    { name: 'À propos', href: '#apropos', icon: FiUser },
    { name: 'Blog', href: '/blog', icon: FiEdit3 },
    { name: 'Contact', href: '#contact', icon: FiMessageCircle }
  ];

  // Bottom nav items for mobile (limited selection)
  const bottomNavItems = [
    { name: 'Accueil', href: '#', icon: FiHome },
    { name: 'Services', href: '#services', icon: FiGrid },
    { name: 'Portfolio', href: '#portfolio', icon: FiBriefcase },
    { name: 'Tarifs', href: '#tarifs', icon: FiDollarSign },
    { name: 'Contact', href: '#contact', icon: FiMessageCircle }
  ];

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111827] shadow-md'
            : 'bg-[#111827]'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src="/logo_wev_ia.png"
                alt="WevIA Consulting"
                className="h-40 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigationClick(e, item.href)}
                  className="text-gray-300 hover:text-white font-medium transition-all px-3 py-2 rounded-lg hover:bg-white/10"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button
                onClick={handleCTAClick}
                className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-2.5 px-6 rounded-lg transition-colors"
              >
                Devis gratuit
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Full Screen App-like */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-gray-50 z-40 overflow-y-auto">
            <div className="container mx-auto px-4 py-6 pb-32">
              {/* Navigation Grid - App Style */}
              <nav className="grid grid-cols-2 gap-3 mb-6">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavigationClick(e, item.href)}
                      className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-200 active:scale-95 transition-transform"
                    >
                      <IconComponent className="w-7 h-7 text-gray-900 mb-2" />
                      <span className="text-sm font-medium text-gray-900">{item.name}</span>
                    </a>
                  );
                })}
              </nav>

              {/* CTA Button */}
              <button
                onClick={handleCTAClick}
                className="w-full bg-gray-900 active:bg-gray-800 text-white font-semibold py-4 px-6 rounded-2xl transition-all active:scale-[0.98] mb-6"
              >
                Demander un devis gratuit
              </button>

              {/* Contact Cards */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+33667483923"
                  className="flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-200 active:scale-95 transition-transform"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                    <FiPhone className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-xs text-gray-500">Téléphone</span>
                  <span className="text-sm font-medium text-gray-900">Appeler</span>
                </a>
                <a
                  href="mailto:wev.ia.org@gmail.com"
                  className="flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-200 active:scale-95 transition-transform"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                    <FiMail className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-xs text-gray-500">Email</span>
                  <span className="text-sm font-medium text-gray-900">Écrire</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Bottom Navigation Bar - Mobile Only */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 safe-area-bottom">
        <div className="flex justify-around items-center h-16">
          {bottomNavItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavigationClick(e, item.href)}
                className="flex flex-col items-center justify-center flex-1 h-full active:bg-gray-100 transition-colors"
              >
                <IconComponent className="w-5 h-5 text-gray-600 mb-1" />
                <span className="text-[10px] text-gray-600 font-medium">{item.name}</span>
              </a>
            );
          })}
        </div>
      </nav>

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        source="website"
        sourceSection="header"
      />
    </>
  );
}
