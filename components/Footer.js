import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  const quickLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Tarifs', href: '#tarifs' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Site Vitrine',
    'E-commerce',
    'Application Web',
    'Intégration IA',
    'Référencement SEO',
    'Maintenance'
  ];

  const handleLinkClick = (e, href) => {
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
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="inline-block mb-4">
              <img
                src="/logo_wev_ia.png"
                alt="WevIA Consulting"
                className="h-24 w-auto"
              />
            </a>
            <p className="text-gray-400 text-sm mb-6">
              Développeur Web & Expert IA. Je crée des solutions digitales
              performantes pour votre business.
            </p>
            <div className="space-y-3">
              <a href="mailto:wev.ia.org@gmail.com" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors text-sm">
                <FiMail className="w-4 h-4" />
                <span>wev.ia.org@gmail.com</span>
              </a>
              <a href="tel:+33667483923" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors text-sm">
                <FiPhone className="w-4 h-4" />
                <span>+33 6 67 48 39 23</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <FiMapPin className="w-4 h-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <a href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="/politique-confidentialite" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="/cgv" className="text-gray-400 hover:text-white transition-colors text-sm">
                  CGV
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-800">
              <p className="text-gray-500 text-xs">
                SIRET: 94975847800026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <p className="text-gray-500 text-sm text-center">
            © 2026 weviaconsulting. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
