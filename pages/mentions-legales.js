import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions Légales | WevIA</title>
        <meta name="description" content="Mentions légales du site WevIA - Développement web et solutions d'intelligence artificielle" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-24">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Mentions Légales
              </h1>
              <p className="text-gray-400">
                Dernière mise à jour : Janvier 2025
              </p>
            </div>

            {/* Content */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 space-y-8">

              {/* Éditeur du site */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">1</span>
                  Éditeur du site
                </h2>
                <div className="text-gray-300 space-y-2 pl-11">
                  <p><strong className="text-white">Raison sociale :</strong> Wev IA Consulting</p>
                  <p><strong className="text-white">Statut :</strong> Auto-entrepreneur</p>
                  <p><strong className="text-white">Email :</strong> wev.ia.org@gmail.com</p>
                  <p><strong className="text-white">Téléphone :</strong> +33 6 67 48 39 23</p>
                  <p><strong className="text-white">SIRET :</strong> 94975847800026</p>
                </div>
              </section>

              {/* Hébergement */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">2</span>
                  Hébergement
                </h2>
                <div className="text-gray-300 space-y-2 pl-11">
                  <p><strong className="text-white">Hébergeur :</strong> Vercel Inc.</p>
                  <p><strong className="text-white">Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                  <p><strong className="text-white">Site web :</strong> https://vercel.com</p>
                </div>
              </section>

              {/* Propriété intellectuelle */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">3</span>
                  Propriété intellectuelle
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>
                    L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.)
                    est la propriété exclusive de WevIA ou de ses partenaires et est protégé par les lois françaises
                    et internationales relatives à la propriété intellectuelle.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie
                    des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite,
                    sauf autorisation écrite préalable de WevIA.
                  </p>
                  <p>
                    Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient
                    sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux
                    dispositions des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
                  </p>
                </div>
              </section>

              {/* Limitation de responsabilité */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">4</span>
                  Limitation de responsabilité
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>
                    WevIA s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour
                    des informations diffusées sur ce site. Toutefois, WevIA ne peut garantir l'exactitude,
                    la précision ou l'exhaustivité des informations mises à disposition sur ce site.
                  </p>
                  <p>
                    En conséquence, WevIA décline toute responsabilité :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site</li>
                    <li>Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers</li>
                    <li>Pour tous dommages, directs ou indirects, quelles qu'en soient les causes, origines, natures ou conséquences</li>
                  </ul>
                </div>
              </section>

              {/* Liens hypertextes */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">5</span>
                  Liens hypertextes
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>
                    Le site peut contenir des liens hypertextes vers d'autres sites. WevIA n'exerce aucun
                    contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou aux
                    éventuels collectes et traitements de données personnelles effectués par ces sites.
                  </p>
                </div>
              </section>

              {/* Droit applicable */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">6</span>
                  Droit applicable
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>
                    Les présentes mentions légales sont régies par le droit français. En cas de litige,
                    les tribunaux français seront seuls compétents.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">7</span>
                  Contact
                </h2>
                <div className="text-gray-300 pl-11">
                  <p>
                    Pour toute question concernant ces mentions légales, vous pouvez nous contacter à l'adresse :
                    <a href="mailto:wev.ia.org@gmail.com" className="text-blue-400 hover:text-blue-300 ml-1">
                      wev.ia.org@gmail.com
                    </a>
                  </p>
                </div>
              </section>

            </div>

            {/* Back link */}
            <div className="text-center mt-8">
              <a
                href="/"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour à l'accueil
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
