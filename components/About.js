import { FiCode, FiDatabase, FiLayout, FiCpu, FiServer, FiSearch } from 'react-icons/fi';
import AnimatedSection, { AnimatedCard } from './AnimatedSection';

export default function About() {
  const skills = [
    { icon: FiCode, name: "Développement Web", items: ["React / Next.js", "HTML / CSS / JavaScript", "Tailwind CSS"] },
    { icon: FiServer, name: "Backend", items: ["Node.js", "Python", "API REST"] },
    { icon: FiDatabase, name: "Base de données", items: ["MongoDB", "PostgreSQL", "MySQL"] },
    { icon: FiCpu, name: "Intelligence Artificielle", items: ["GPT / LLMs", "Automatisation", "Chatbots"] },
    { icon: FiLayout, name: "CMS", items: ["WordPress", "Prestashop", "Webflow"] },
    { icon: FiSearch, name: "SEO", items: ["Référencement naturel", "Analytics", "Optimisation"] }
  ];

  return (
    <section id="apropos" className="py-10 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Content */}
          <AnimatedSection animation="fade-left">
            <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider block text-left">À propos</span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-1 sm:mt-2 mb-3 sm:mb-6 text-left">
              Développeur passionné
            </h2>

            <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
              <p>
                Passionné par le développement web et les nouvelles technologies,
                je mets mon expertise au service de votre projet.
              </p>
              <p className="hidden sm:block">
                Mon approche : comprendre vos objectifs, proposer des solutions
                concrètes et vous accompagner tout au long du projet.
              </p>
              <p>
                Spécialisé dans l'intégration de l'intelligence artificielle,
                je vous aide à automatiser vos processus.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="group">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 transition-transform group-hover:scale-110">1</div>
                <div className="text-[10px] sm:text-sm text-gray-500">Projet livré</div>
              </div>
              <div className="group">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 transition-transform group-hover:scale-110">100%</div>
                <div className="text-[10px] sm:text-sm text-gray-500">Satisfaction</div>
              </div>
              <div className="group">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 transition-transform group-hover:scale-110">3+</div>
                <div className="text-[10px] sm:text-sm text-gray-500">Ans d'expérience</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Skills - Horizontal scroll on mobile */}
          <div className="sm:hidden -mx-4 px-4">
            <div className="flex overflow-x-auto gap-3 pb-3 snap-x snap-mandatory scrollbar-hide">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[140px] snap-start bg-gray-50 p-3 rounded-xl border border-gray-200 active:scale-[0.98] transition-transform"
                >
                  <skill.icon className="w-6 h-6 text-gray-900 mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1 text-xs">{skill.name}</h3>
                  <ul className="space-y-0.5">
                    {skill.items.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="text-[10px] text-gray-500">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <AnimatedCard
                key={index}
                delay={index * 100}
                hoverEffect="lift"
                className="bg-gray-50 p-5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300"
              >
                <skill.icon className="w-8 h-8 text-gray-900 mb-3 transition-transform hover:scale-110" />
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{skill.name}</h3>
                <ul className="space-y-1">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-xs text-gray-500">{item}</li>
                  ))}
                </ul>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
