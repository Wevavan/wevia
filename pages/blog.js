import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiArrowLeft, FiEdit3 } from 'react-icons/fi';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Wev IA Consulting</title>
        <meta name="description" content="Blog de Wev IA Consulting - Articles sur le développement web, l'intelligence artificielle et les tendances tech" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gray-50 pt-28">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-2xl mx-auto text-center">
            {/* Back link */}
            <a
              href="/"
              className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors mb-12"
            >
              <FiArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </a>

            {/* Icon */}
            <div className="w-24 h-24 bg-gray-900 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <FiEdit3 className="w-12 h-12 text-white" />
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Blog en construction
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8">
              Je prépare des articles passionnants sur le développement web,
              l'intelligence artificielle et les dernières tendances tech.
            </p>

            {/* Coming soon badge */}
            <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">Bientôt disponible</span>
            </div>

            {/* Topics preview */}
            <div className="mt-16">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                Sujets à venir
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Next.js & React',
                  'Intelligence Artificielle',
                  'SEO & Performance',
                  'Design UI/UX',
                  'E-commerce',
                  'Automatisation'
                ].map((topic) => (
                  <span
                    key={topic}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 p-6 bg-white border border-gray-200 rounded-2xl">
              <p className="text-gray-600 mb-4">
                Vous avez un projet en tête ? N'attendez pas !
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
