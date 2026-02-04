import { useState, useEffect } from 'react';
import { FiExternalLink, FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ConsultationModal from './ConsultationModal';
import AnimatedSection from './AnimatedSection';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('projects');
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;

  const handleCTAClick = (ctaType) => {
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'cta_click',
        ctaType: ctaType,
        page: 'home',
        section: 'projects'
      })
    });
    setModalSource(ctaType);
    setIsConsultationModalOpen(true);
  };

  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'web', label: 'Sites Web' },
    { id: 'ia', label: 'IA' }
  ];

  const projects = [
    {
      id: 1,
      title: "La Chrysbelle",
      category: "web",
      description: "Plateforme de réservation pour appartement haut de gamme avec piscine chauffée, jacuzzi et sauna. Système de réservation en 3 étapes avec paiement sécurisé.",
      image: "/images/projects/chrysbelle.png",
      tags: ["Next.js", "React", "Stripe"],
      year: "2024",
      link: "https://www.lachrysbelle.com/",
      metrics: "98% satisfaction"
    },
    {
      id: 2,
      title: "CVBuilder Pro",
      category: "ia",
      description: "Plateforme IA de création de CV et suivi de candidatures. Génération automatique par IA avec templates ATS-friendly et analytics.",
      image: "/images/projects/cvbuilder.png",
      tags: ["React", "OpenAI GPT-4", "Node.js"],
      year: "2024",
      link: "https://cv-assistant-three.vercel.app/",
      metrics: "15K+ utilisateurs"
    },
    {
      id: 3,
      title: "Pose Toit",
      category: "web",
      description: "Site web professionnel pour entreprise de couverture et rénovation de toiture. Design moderne avec demande de devis intégrée.",
      image: "/images/projects/posetoit.png",
      tags: ["Next.js", "React", "Tailwind CSS"],
      year: "2024",
      link: "https://posetoit.vercel.app/",
      metrics: "+65% demandes devis"
    },
    {
      id: 4,
      title: "Jardins d'Eden",
      category: "web",
      description: "Site vitrine pour entreprise de paysagisme avec 25 ans d'expérience. Présentation des services et portfolio de réalisations.",
      image: "/images/projects/jardinsdeden.png",
      tags: ["Next.js", "React", "SSR/SSG"],
      year: "2023",
      link: "https://paysagiste-com.vercel.app/",
      metrics: "500+ projets"
    },
    {
      id: 5,
      title: "La Chrysbelle Home",
      category: "web",
      description: "Site vitrine élégant pour location saisonnière premium. Présentation immersive avec galerie photos et informations détaillées.",
      image: "/images/projects/chrysbelle-home.png",
      tags: ["Next.js", "React", "Vercel"],
      year: "2024",
      link: "https://lachrysbelle.vercel.app/",
      metrics: "5.0★ rating"
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const displayedProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(0);
  }, [activeFilter]);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection animation="fade-right" className="text-right mb-12">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Mes réalisations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl ml-auto">
            Découvrez quelques-uns de mes projets récents
          </p>
        </AnimatedSection>

        {/* Filters - Horizontal scroll on mobile */}
        <div className="mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex sm:flex-wrap sm:justify-center gap-2 overflow-x-auto pb-2 sm:pb-0 snap-x snap-mandatory scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex-shrink-0 snap-start px-5 py-3 sm:py-2 rounded-full text-sm font-medium transition-all duration-300 active:scale-95 ${
                  activeFilter === filter.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl sm:rounded-xl overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300 hover-lift active:scale-[0.98]"
            >
              {/* Image - Real Website Preview */}
              <div className="aspect-video bg-gray-100 relative overflow-hidden">
                {project.image && (
                  <img
                    src={project.image}
                    alt={`Aperçu de ${project.title}`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                )}
                {/* Overlay - Hidden on mobile, shown on hover for desktop */}
                <div className="hidden sm:flex absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-80 transition-opacity duration-300 items-center justify-center">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium flex items-center space-x-2"
                    >
                      <span>Voir le projet</span>
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium">
                      Projet privé
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">{project.year}</span>
                  {project.metrics && (
                    <span className="text-xs text-green-600 font-medium">{project.metrics}</span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Mobile CTA Button */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:hidden flex items-center justify-center w-full mt-4 bg-gray-900 text-white py-3 rounded-xl font-medium active:bg-gray-800 transition-colors"
                  >
                    <span>Voir le projet</span>
                    <FiExternalLink className="w-4 h-4 ml-2" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentPage === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
              aria-label="Page précédente"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? 'bg-gray-900 w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentPage === totalPages - 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
              aria-label="Page suivante"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* CTA */}
        <AnimatedSection animation="fade-up" className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Vous avez un projet similaire en tête ?
          </p>
          <button
            onClick={() => handleCTAClick('portfolio_cta')}
            className="inline-flex items-center bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition-all hover:scale-105 hover:shadow-lg"
          >
            Discutons de votre projet
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
