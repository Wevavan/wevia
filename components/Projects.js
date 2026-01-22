import { useState, useEffect, useRef } from 'react';
import {
  FiEye,
  FiArrowRight,
  FiGlobe,
  FiCheckCircle,
  FiZap
} from 'react-icons/fi';
import {
  MdRocket,
  MdStar,
  MdHome,
  MdDescription,
  MdCalendarToday
} from 'react-icons/md';
import { RiRobot2Fill } from 'react-icons/ri';

import ConsultationModal from './ConsultationModal'; // Import de la modal de consultation

// Animated Counter Component - défini en dehors pour éviter les re-renders
const AnimatedCounter = ({ end, duration = 2000, suffix = '', isActive }) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime = null;
    const endValue = parseFloat(end.toString().replace(/[^0-9.]/g, ''));

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * endValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isActive, end, duration]);

  return <span>{count}{suffix}</span>;
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('projects');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const [statsAnimated, setStatsAnimated] = useState(false);

  // Mouse tracking pour les effets premium
  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

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
        section: 'projects'
      })
    });

    // Ouvrir la modal de consultation
    setModalSource(ctaType);
    setIsConsultationModalOpen(true);
  };

  // Gestion de la touche Escape
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

  const projects = [
    {
      id: 1,
      title: "La Chrysbelle - Location Premium",
      subtitle: "Réservation d'appartement nouvelle génération",
      description: "Plateforme de réservation pour un appartement haut de gamme avec piscine chauffée, jacuzzi et sauna. Système de réservation en 3 étapes, gestion des créneaux horaires, paiement sécurisé et interface utilisateur optimale. Havre de bien-être accessible 24h/24.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&crop=center",
      tags: ["Next.js", "React", "Stripe", "Réservation", "Auth"],
      type: "Web",
      category: "immobilier",
      color: "from-blue-500 to-cyan-500",
      icon: MdHome,
      metrics: { services: "3", tarif: "25€+", satisfaction: "98%" },
      featured: true,
      technologies: ["Réservation 3 Étapes", "Paiement Stripe", "Gestion Créneaux", "Auth Sécurisé"],
      url: "https://www.lachrysbelle.com/",
      testimonial: {
        text: "Un système de réservation intuitif et fluide. Nos clients apprécient la simplicité du processus et le design élégant.",
        author: "Marie D.",
        role: "Propriétaire"
      }
    },
    {
      id: 2,
      title: "CVBuilder Pro",
      subtitle: "Plateforme IA de création CV & suivi candidatures",
      description: "Solution complète avec génération automatique de CV/LM par IA, templates premium ATS-friendly, suivi intelligent des candidatures et analytics de performance. Taux d'embauche +180%.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop&crop=center",
      tags: ["React", "OpenAI GPT-4", "Node.js", "PostgreSQL", "PDF.js"],
      type: "IA + SaaS",
      category: "rh",
      color: "from-purple-500 to-pink-500",
      icon: MdDescription,
      metrics: { users: "15K+", success: "+180%", cvs: "50K+" },
      featured: true,
      technologies: ["IA GPT-4", "ATS Optimize", "Analytics Pro", "Multi-export"],
      url: "https://cv-assistant-three.vercel.app/",
      testimonial: {
        text: "L'IA a révolutionné notre processus de candidature. J'ai reçu 3 fois plus d'entretiens grâce aux CV optimisés ATS !",
        author: "Thomas L.",
        role: "Développeur Full-Stack"
      }
    },
    {
      id: 3,
      title: "Pose Toit",
      subtitle: "Plateforme moderne pour services de toiture",
      description: "Site web professionnel pour entreprise de couverture et rénovation de toiture. Interface moderne et responsive avec présentation des services, portfolio de réalisations et système de contact pour devis. Design optimisé pour convertir les visiteurs en clients.",
      image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&h=600&fit=crop&crop=center",
      tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      type: "Web",
      category: "construction",
      color: "from-slate-600 to-gray-700",
      icon: MdHome,
      metrics: { projects: "150+", experience: "10 ans", rating: "4.8★" },
      featured: false,
      technologies: ["Design Moderne", "Portfolio", "Contact Pro", "SEO Local"],
      url: "https://posetoit.vercel.app/",
      testimonial: {
        text: "Site professionnel qui inspire confiance. Les demandes de devis ont augmenté de 65% depuis le lancement !",
        author: "Pierre M.",
        role: "Gérant Pose Toit"
      }
    },
    {
      id: 4,
      title: "Jardins d'Eden",
      subtitle: "Site vitrine premium paysagiste haut-de-gamme",
      description: "Site web de prestige pour entreprise de paysagisme d'exception établie depuis 1998. Portfolio interactif filtrable, processus créatif en 5 étapes, formulaire de consultation VIP et témoignages clients. Design luxueux minimaliste ciblant une clientèle fortunée (villas, châteaux, hôtels 5★).",
      image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop&crop=center",
      tags: ["Next.js", "React", "SSR/SSG", "Analytics", "CSS Variables"],
      type: "Web",
      category: "luxe",
      color: "from-emerald-600 to-green-600",
      icon: MdStar,
      metrics: { projects: "500+", years: "25 ans", satisfaction: "98%" },
      featured: false,
      technologies: ["Portfolio Pro", "Lead Generation", "SSR Optimisé", "Design Luxe"],
      url: "https://paysagiste-com.vercel.app/",
      testimonial: {
        text: "Le site reflète parfaitement l'excellence de nos prestations. Nos clients haut de gamme sont impressionnés par le portfolio.",
        author: "Jean-Philippe R.",
        role: "Fondateur Jardins d'Eden"
      }
    },
    {
      id: 5,
      title: "La Chrysbelle",
      subtitle: "Plateforme de réservation appartement de charme",
      description: "Site de location d'appartement haut de gamme de 85m² avec jacuzzi, sauna et équipements premium. Galerie photo filtrée par pièces, système de réservation intégré, authentification utilisateur et moteur de recherche de disponibilités. Design luxueux et élégant à 120€/nuit.",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&crop=center",
      tags: ["Next.js", "React", "Auth", "Réservation", "Multi-langue"],
      type: "Web",
      category: "immobilier",
      color: "from-amber-500 to-orange-500",
      icon: MdHome,
      metrics: { surface: "85m²", tarif: "120€/nuit", rating: "5.0★" },
      featured: false,
      technologies: ["Galerie Filtrable", "Auth User", "Réservation Pro", "FR/EN Support"],
      url: "https://lachrysbelle.vercel.app/",
      testimonial: {
        text: "Interface élégante et intuitive. La galerie photo et le système de réservation séduisent nos locataires internationaux.",
        author: "Sophie B.",
        role: "Hôte Airbnb"
      }
    },
  ];

  const filters = [
    { id: 'all', label: 'Tops projets', count: projects.length, icon: FiZap },
    { id: 'featured', label: 'Projets Phares', count: projects.filter(p => p.featured).length, icon: MdStar },
    { id: 'ai', label: 'Intelligence IA', count: projects.filter(p => p.type.includes('IA')).length, icon: RiRobot2Fill },
    { id: 'web', label: 'Web Premium', count: projects.filter(p => p.type.includes('Web')).length, icon: FiGlobe }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    if (activeFilter === 'ai') return project.type.includes('IA');
    if (activeFilter === 'web') return project.type.includes('Web');
    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
    setVisibleCards([]);
  }, [activeFilter]);

  // Intersection Observer pour les animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [currentProjects]);

  // Animated Stats Counter
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsAnimated) {
            setStatsAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [statsAnimated]);

  
  const handleProjectClick = (project) => {
    console.log('Project clicked:', project.id);

    // Analytics tracking
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'project_click',
        projectId: project.id,
        projectTitle: project.title
      })
    }).catch(err => console.error('Analytics error:', err));

    // Open project URL in new window if available
    if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className="relative py-32 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Background Ultra Premium */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
          
          {/* Mouse Glow Effect */}
          <div 
            className="absolute w-96 h-96 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.08), transparent 70%)`,
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
              transition: 'all 0.1s ease-out'
            }}
          />
          
          {/* Floating Orbs */}
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section Ultra Premium */}
          <div className="mb-20">
            <div className="flex items-start justify-between gap-8 mb-8">
              {/* Badge à gauche */}
              <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-xl border border-white/50 rounded-full px-6 py-3 shadow-lg flex-shrink-0">
                <MdRocket className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-bold text-gray-900">PORTFOLIO</span>
              </div>

              <div className="flex-1 text-right">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
                  Projets Qui Transforment
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Les Business en Succès
                  </span>
                </h2>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 max-w-5xl leading-relaxed mb-8 text-right">
              Vous voulez un site qui rapporte ? Voici ce que je construis pour mes clients :
              <span className="text-blue-600 font-semibold"> des plateformes qui génèrent des ventes</span>,
              <span className="text-purple-600 font-semibold"> attirent du trafic qualifié</span> et
              <span className="text-green-600 font-semibold"> automatisent leur business</span>.
            </p>

            {/* Stats rapides animées */}
            <div ref={statsRef} className="flex flex-wrap justify-center gap-8 text-center">
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/50">
                <div className="text-2xl font-black text-blue-600">
                  <AnimatedCounter end={60} suffix="K€" isActive={statsAnimated} />
                </div>
                <div className="text-sm text-gray-600">Revenus générés</div>
              </div>
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/50">
                <div className="text-2xl font-black text-purple-600">
                  <AnimatedCounter end={5} suffix="K+" isActive={statsAnimated} />
                </div>
                <div className="text-sm text-gray-600">Utilisateurs actifs</div>
              </div>
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/50">
                <div className="text-2xl font-black text-green-600">
                  <AnimatedCounter end={280} suffix="%" isActive={statsAnimated} />
                </div>
                <div className="text-sm text-gray-600">ROI moyen</div>
              </div>
            </div>
          </div>

          {/* Filters Ultra Premium */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group relative px-8 py-4 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl scale-105'
                    : 'bg-white/90 backdrop-blur-xl text-gray-700 hover:bg-white hover:text-blue-600 border border-white/50 hover:border-blue-200 shadow-lg hover:shadow-xl'
                }`}
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <filter.icon className="w-5 h-5" />
                  <span>{filter.label}</span>
                  <span className={`text-xs px-3 py-1 rounded-full font-black ${
                    activeFilter === filter.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                  }`}>
                    {filter.count}
                  </span>
                </span>
                
                {/* Glow effect */}
                {activeFilter === filter.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-30 -z-10" />
                )}
              </button>
            ))}
          </div>

          {/* Projects Grid Ultra Premium */}
          <div className="grid lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <div
                key={project.id}
                data-index={index}
                className={`group relative transition-all duration-700 cursor-pointer ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                onClick={() => handleProjectClick(project)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Featured Badge Reduced */}
                {project.featured && (
                  <div className="absolute -top-3 -right-3 z-30 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-4 py-2 rounded-xl text-xs font-black shadow-xl transform rotate-6 group-hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center space-x-1">
                      <MdStar className="w-3 h-3 fill-current" />
                      <span>TOP</span>
                    </div>
                  </div>
                )}

                {/* Card Container Ultra Premium */}
                <div className="relative h-full bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-4xl transition-all duration-700 border border-white/50 group-hover:border-white/80 transform group-hover:scale-105 group-hover:-translate-y-4">

                  {/* Image Section avec vraies images */}
                  <div className="relative h-64 overflow-hidden">
                    {/* Image Background */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-90 transition-opacity duration-500`} />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                        <project.icon className="w-10 h-10" />
                      </div>
                      <span className="text-sm font-black bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full shadow-lg">
                        {project.type}
                      </span>
                    </div>

                    {/* Hover Action Overlay */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <FiEye className="w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <span className="text-lg font-black">Découvrir le Projet</span>
                        <div className="text-sm opacity-80 mt-1">Cliquez pour voir les détails</div>
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  {/* Content Section Ultra Premium */}
                  <div className="p-8 relative">
                    {/* Title & Subtitle */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className={`text-sm font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent uppercase tracking-wide`}>
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics Ultra Premium */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-inner border border-gray-100/50 group-hover:shadow-md transition-shadow">
                          <div className={`text-lg font-black bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 capitalize font-medium">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-900 mb-3">Technologies Clés :</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.technologies.map((tech, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs">
                            <FiCheckCircle className="w-3 h-3 text-green-500" />
                            <span className="text-gray-600 font-medium">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-full font-bold transition-all duration-300 hover:scale-105"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-bold">
                          +{project.tags.length - 3} techs
                        </span>
                      )}
                    </div>

                    {/* Testimonial Section */}
                    {project.testimonial && (
                      <div className="mb-6 p-4 bg-blue-50/50 rounded-xl border-l-4 border-blue-600">
                        <div className="flex items-start space-x-3">
                          <svg className="w-8 h-8 text-blue-600 flex-shrink-0 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                          <div className="flex-1">
                            <p className="text-sm italic text-gray-700 mb-2">
                              "{project.testimonial.text}"
                            </p>
                            <div className="text-xs font-bold text-gray-600">
                              {project.testimonial.author}
                              <span className="font-normal"> • {project.testimonial.role}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* CTA Button Ultra Premium */}
                    <button className={`w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-2xl font-black transition-all duration-500 group/btn relative overflow-hidden ${
                      hoveredProject === project.id
                        ? `bg-gradient-to-r ${project.color} text-white shadow-2xl transform scale-105`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-lg hover:shadow-xl'
                    }`}>
                      <span className="relative z-10">Explorer ce Projet</span>
                      <FiArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover/btn:translate-x-2" />
                      
                      {/* Animated background */}
                      {hoveredProject === project.id && (
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                      )}
                    </button>
                  </div>

                  {/* Card Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500 -z-10`} />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-16">
              {/* Previous Button */}
              <button
                onClick={() => {
                  setCurrentPage(prev => Math.max(prev - 1, 1));
                  setVisibleCards([]);
                }}
                disabled={currentPage === 1}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white/90 backdrop-blur-xl text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white shadow-lg hover:shadow-2xl transform hover:scale-105 border border-white/50'
                }`}
              >
                ← Précédent
              </button>

              {/* Page Numbers */}
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentPage(idx + 1);
                      setVisibleCards([]);
                    }}
                    className={`w-12 h-12 rounded-xl font-bold transition-all duration-300 ${
                      currentPage === idx + 1
                        ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl scale-110'
                        : 'bg-white/90 backdrop-blur-xl text-gray-700 hover:bg-gray-100 shadow-lg hover:shadow-xl border border-white/50 hover:scale-105'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => {
                  setCurrentPage(prev => Math.min(prev + 1, totalPages));
                  setVisibleCards([]);
                }}
                disabled={currentPage === totalPages}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white/90 backdrop-blur-xl text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white shadow-lg hover:shadow-2xl transform hover:scale-105 border border-white/50'
                }`}
              >
                Suivant →
              </button>
            </div>
          )}

          {/* Bottom CTA Ultra Premium */}
          <div className="text-center mt-24">
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8 bg-white/95 backdrop-blur-xl border border-white/50 rounded-3xl p-10 shadow-2xl hover:shadow-4xl transition-all duration-500">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-black text-gray-900 mb-3">Vous avez un projet ? Parlons-en.</h3>
                <p className="text-gray-600 text-lg">Je vous aide à passer de l'idée au site qui tourne et qui rapporte</p>
                <div className="flex items-center justify-center lg:justify-start space-x-4 mt-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <FiCheckCircle className="w-4 h-4 text-green-500" />
                    <span>Consultation gratuite</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiCheckCircle className="w-4 h-4 text-green-500" />
                    <span>Devis sous 24h</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleCTAClick('projects_launch_project')}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-black py-5 px-10 rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-4xl whitespace-nowrap relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <MdRocket className="w-6 h-6" />
                  <span>Lancer Mon Projet</span>
                  <FiArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                </span>
                
                {/* Animated shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </div>
          </div>
        </div>
      </section>

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