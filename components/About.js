import { useState, useEffect, useRef } from 'react';
import { MdRocket, MdStar, MdBusiness } from 'react-icons/md';
import { HiOutlineCpuChip } from 'react-icons/hi2';
import { FiZap, FiCode, FiSmartphone, FiTrendingUp, FiUser } from 'react-icons/fi';
import { RiRobot2Fill } from 'react-icons/ri';

export default function About() {
  const [visibleStats, setVisibleStats] = useState([]);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const sectionRef = useRef(null);

  const stats = [
    {
      label: "Projets Livrés",
      value: "90%",
      icon: MdRocket,
      color: "from-blue-500 to-cyan-500",
      description: "Solutions complètes"
    },
    {
      label: "Clients Satisfaits",
      value: "98%",
      icon: MdStar,
      color: "from-purple-500 to-pink-500",
      description: "Taux de satisfaction"
    },
    {
      label: "Technologies",
      value: "25+",
      icon: HiOutlineCpuChip,
      color: "from-green-500 to-emerald-500",
      description: "Stack technique"
    },
    {
      label: "Années Pro",
      value: "3+",
      icon: MdBusiness,
      color: "from-orange-500 to-red-500",
      description: "Expérience terrain"
    }
  ];

  const mainSkills = [
    { name: "React/Next.js", level: 98, category: "Frontend" },
    { name: "Intelligence Artificielle", level: 95, category: "IA/ML" },
    { name: "Node.js/Backend", level: 92, category: "Backend" },
    { name: "UI/UX Design", level: 85, category: "Design" },
    { name: "Base de données", level: 90, category: "Data" }
  ];

  const hiddenSkills = [
    "TypeScript", "Python", "GraphQL", "Docker", "Kubernetes", 
    "TensorFlow", "OpenAI API", "Stripe", "Firebase", "Vercel",
    "MongoDB", "PostgreSQL", "Redis", "WebSocket", "Three.js",
    "Framer Motion", "Tailwind", "SASS", "Jest", "Cypress"
  ];

  const expertiseAreas = [
    {
      title: "Développement Web",
      description: "Sites et applications web haute performance",
      technologies: ["React", "Next.js", "TypeScript", "Node.js"],
      icon: FiCode,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Applications Mobile",
      description: "Apps natives iOS & Android performantes",
      technologies: ["React Native", "Flutter", "PWA", "API Integration"],
      icon: FiSmartphone,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Référencement SEO / Acquisition",
      description: "Optimisation SEO et stratégies d'acquisition",
      technologies: ["SEO On-page", "SEO Local", "Google Ads", "Analytics"],
      icon: FiTrendingUp,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Intelligence Artificielle",
      description: "Solutions IA sur-mesure et automatisation",
      technologies: ["OpenAI", "TensorFlow", "Python", "Machine Learning"],
      icon: RiRobot2Fill,
      color: "from-purple-500 to-pink-500"
    },
  ];

  // Intersection Observer pour les animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.dataset.type === 'stats') {
              stats.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleStats(prev => [...prev, index]);
                }, index * 200);
              });
            }
            if (entry.target.dataset.type === 'skills') {
              setSkillsVisible(true);
              mainSkills.forEach((_, index) => {
                setTimeout(() => {
                  setAnimatedSkills(prev => [...prev, index]);
                }, index * 150);
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-type]');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white" id="about">

      {/* ========== MOBILE APP VERSION ========== */}
      <div className="sm:hidden py-8 px-4">
        {/* App Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center space-x-2 bg-purple-50 rounded-full px-3 py-1.5 mb-3">
            <FiUser className="w-3.5 h-3.5 text-purple-600" />
            <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">À Propos</span>
          </div>
          <h2 className="text-2xl font-black text-gray-900 leading-tight">
            L'Expert <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Qui Fait La Différence</span>
          </h2>
        </div>

        {/* Mobile Stats Grid */}
        <div data-type="stats" className="grid grid-cols-2 gap-2 mb-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100 transition-all duration-500 ${
                visibleStats.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className={`w-8 h-8 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                <stat.icon className="w-4 h-4 text-white" />
              </div>
              <div className={`text-lg font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-[10px] text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mobile Story Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-5">
          <h3 className="text-sm font-bold text-gray-900 mb-2">Mon Approche</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-900">Passionné par l'innovation</span>, je combine expertise technique
            et vision business pour créer des solutions qui <span className="font-semibold text-blue-600">génèrent de vrais résultats</span>.
          </p>
        </div>

        {/* Mobile Expertise Areas - Horizontal Scroll */}
        <div className="mb-5">
          <h4 className="text-xs font-bold text-gray-900 mb-3 flex items-center space-x-1">
            <FiZap className="w-3 h-3 text-purple-600" />
            <span>Domaines d'Expertise</span>
          </h4>
          <div className="flex overflow-x-auto gap-3 pb-2 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="min-w-[70vw] snap-start flex-shrink-0 bg-white rounded-xl p-4 shadow-sm border border-gray-100 active:scale-[0.98] transition-transform"
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <area.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-bold text-gray-900 mb-0.5">{area.title}</h5>
                    <p className="text-[10px] text-gray-500 mb-2 line-clamp-2">{area.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {area.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-[8px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] text-gray-400 mt-2">← Glissez →</p>
        </div>

        {/* Mobile Skills */}
        <div data-type="skills" className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-5">
          <h4 className="text-sm font-bold text-gray-900 mb-3">Stack Technique</h4>
          <div className="space-y-3">
            {mainSkills.map((skill, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  animatedSkills.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-xs font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {skill.level}%
                  </span>
                </div>
                <div className="relative w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: animatedSkills.includes(index) ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 150}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Hidden Skills Tags */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-xl p-3 border border-gray-100">
          <div className="text-[10px] font-bold text-gray-900 mb-2">+20 autres technologies</div>
          <div className="flex flex-wrap gap-1.5">
            {hiddenSkills.slice(0, 8).map((tech, index) => (
              <span
                key={index}
                className="text-[9px] px-2 py-1 bg-white text-gray-600 rounded-full font-medium border border-gray-200"
              >
                {tech}
              </span>
            ))}
            <span className="text-[9px] px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold">
              +{hiddenSkills.length - 8}
            </span>
          </div>
        </div>
      </div>

      {/* ========== DESKTOP VERSION ========== */}
      <div className="hidden sm:block py-32">
        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="mb-20">
            <div className="flex items-start justify-between gap-8 mb-8">
              {/* Badge à gauche */}
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 flex-shrink-0">
                <FiUser className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-700 font-bold">À PROPOS</span>
              </div>

              <div className="flex-1 text-right">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
                  L'Expert Qui Fait
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    La Différence
                  </span>
                </h2>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed text-right">
              Des années d'expertise, une seule obsession :
              <span className="font-semibold text-blue-600"> transformer vos ambitions en succès digitaux mesurables</span>.
            </p>
          </div>

        {/* Stats Premium */}
        <div data-type="stats" className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group text-center transition-all duration-700 ${
                visibleStats.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`} />
              </div>
              <div className={`text-4xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-lg font-bold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left - Story */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Mon Approche Unique</h3>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  <span className="font-semibold text-gray-900">Passionné par l'innovation</span>, je combine expertise technique avancée 
                  et vision business pour créer des solutions qui <span className="font-semibold text-blue-600">génèrent de vrais résultats</span>.
                </p>
                <p>
                  Spécialisé dans l'<span className="font-semibold text-purple-600">intelligence artificielle</span> et le 
                  <span className="font-semibold text-cyan-600"> développement web</span>, j'accompagne les entreprises 
                  ambitieuses dans leur transformation digitale.
                </p>
                <p>
                  De la startup au grand groupe, chaque projet est une opportunité de 
                  <span className="font-semibold text-gray-900"> dépasser les attentes</span> et de créer de la valeur durable.
                </p>
              </div>
            </div>

            {/* Expertise Areas */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900">Domaines d'Expertise</h4>
              <div className="space-y-4">
                {expertiseAreas.map((area, index) => (
                  <div 
                    key={index}
                    className="group p-6 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 hover:border-white/80 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <area.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 mb-1">{area.title}</h5>
                        <p className="text-gray-600 mb-3">{area.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {area.technologies.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Skills */}
          <div data-type="skills" className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Stack Technique</h3>
              <p className="text-gray-600 mb-8">Technologies maîtrisées pour des résultats exceptionnels</p>
            </div>

            {/* Main Skills */}
            <div className="space-y-6">
              {mainSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    animatedSkills.includes(index) 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div>
                        <span className="text-lg font-bold text-gray-900">{skill.name}</span>
                        <span className="block text-sm text-gray-500">{skill.category}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1500 ease-out relative"
                      style={{
                        width: animatedSkills.includes(index) ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hidden Skills Reveal */}
            <div className="mt-8 p-6 bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-2xl border-2 border-gray-100">
              <div className="flex items-center space-x-2 mb-4">
                {/* <FiZap className="w-5 h-5 text-amber-500" /> */}
                <span className="font-bold text-gray-900">+ 20 autres technologies maîtrisées</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {hiddenSkills.slice(0, 12).map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 bg-white text-gray-600 rounded-full font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer border border-gray-200"
                    style={{
                      animationDelay: `${skillsVisible ? index * 50 : 0}ms`,
                      animation: skillsVisible ? 'fadeInScale 0.5s ease-out forwards' : 'none'
                    }}
                  >
                    {tech}
                  </span>
                ))}
                <span className="text-xs px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold">
                  +{hiddenSkills.length - 12} autres...
                </span>
              </div>
            </div>

            {/* Certifications */}
            {/* <div className="p-6 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 shadow-lg">
              <div className="flex items-center space-x-2 mb-4">
                <ShieldCheckIcon className="w-5 h-5 text-green-500" />
                <span className="font-bold text-gray-900">Certifications & Formations</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  <span>OpenAI API Specialist Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  <span>AWS Solutions Architect</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  <span>Google Cloud ML Engineer</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}