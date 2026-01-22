import { FiTool, FiArrowLeft, FiClock, FiBell } from 'react-icons/fi';
import { MdRocket } from 'react-icons/md';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Blog() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10" />

          {/* Floating Orbs */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Icon animé */}
            <div className="relative mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
                <FiTool className="w-16 h-16 text-cyan-400 animate-bounce" />
              </div>

              {/* Petits éléments flottants autour */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <MdRocket className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -bottom-2 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping" />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-8">
              <FiClock className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-bold text-orange-300">BIENTÔT DISPONIBLE</span>
            </div>

            {/* Titre principal */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Blog en cours
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                de construction
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Je prépare des articles de qualité sur le <span className="text-cyan-400 font-semibold">développement web</span>,
              l'<span className="text-purple-400 font-semibold">intelligence artificielle</span> et
              le <span className="text-blue-400 font-semibold">SEO</span>.
            </p>

            <p className="text-lg text-gray-400 mb-12">
              Revenez bientôt pour découvrir des conseils concrets et des insights tech !
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/">
                <span className="group inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 cursor-pointer">
                  <FiArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                  <span>Retour à l'accueil</span>
                </span>
              </Link>

              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#contact';
                  }
                }}
                className="group inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:bg-white/20 hover:border-white/50"
              >
                <FiBell className="w-5 h-5" />
                <span>Me contacter</span>
              </button>
            </div>

            {/* Progress indicator */}
            <div className="mt-16 max-w-md mx-auto">
              <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                <span>Progression</span>
                <span className="text-cyan-400 font-bold">75%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                  style={{ width: '75%' }}
                />
              </div>
              <p className="text-gray-500 text-sm mt-3">
                Les premiers articles arrivent très bientôt...
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
