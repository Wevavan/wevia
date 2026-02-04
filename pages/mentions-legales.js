import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiArrowLeft } from 'react-icons/fi';

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions Légales | Wev IA Consulting</title>
        <meta name="description" content="Mentions légales du site Wev IA Consulting - Développement web et solutions d'intelligence artificielle" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gray-50 pt-28">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <a
                href="/"
                className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors mb-6"
              >
                <FiArrowLeft className="w-4 h-4 mr-2" />
                Retour à l'accueil
              </a>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Mentions Légales
              </h1>
              <p className="text-gray-500">
                Dernière mise à jour : Janvier 2025
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">

              {/* Éditeur du site */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  1. Éditeur du site
                </h2>
                <div className="text-gray-600 space-y-2">
                  <p><span className="font-medium text-gray-900">Raison sociale :</span> Wev IA Consulting</p>
                  <p><span className="font-medium text-gray-900">Statut :</span> Auto-entrepreneur</p>
                  <p><span className="font-medium text-gray-900">Email :</span> wev.ia.org@gmail.com</p>
                  <p><span className="font-medium text-gray-900">Téléphone :</span> +33 6 67 48 39 23</p>
                  <p><span className="font-medium text-gray-900">SIRET :</span> 94975847800026</p>
                </div>
              </section>

              {/* Hébergement */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  2. Hébergement
                </h2>
                <div className="text-gray-600 space-y-2">
                  <p><span className="font-medium text-gray-900">Hébergeur :</span> Vercel Inc.</p>
                  <p><span className="font-medium text-gray-900">Adresse :</span> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                  <p><span className="font-medium text-gray-900">Site web :</span> https://vercel.com</p>
                </div>
              </section>

              {/* Propriété intellectuelle */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  3. Propriété intellectuelle
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.)
                    est la propriété exclusive de Wev IA Consulting ou de ses partenaires et est protégé par les lois françaises
                    et internationales relatives à la propriété intellectuelle.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie
                    des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite,
                    sauf autorisation écrite préalable de Wev IA Consulting.
                  </p>
                  <p>
                    Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient
                    sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux
                    dispositions des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
                  </p>
                </div>
              </section>

              {/* Limitation de responsabilité */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  4. Limitation de responsabilité
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Wev IA Consulting s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour
                    des informations diffusées sur ce site. Toutefois, Wev IA Consulting ne peut garantir l'exactitude,
                    la précision ou l'exhaustivité des informations mises à disposition sur ce site.
                  </p>
                  <p>En conséquence, Wev IA Consulting décline toute responsabilité :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site</li>
                    <li>Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers</li>
                    <li>Pour tous dommages, directs ou indirects, quelles qu'en soient les causes, origines, natures ou conséquences</li>
                  </ul>
                </div>
              </section>

              {/* Liens hypertextes */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  5. Liens hypertextes
                </h2>
                <div className="text-gray-600">
                  <p>
                    Le site peut contenir des liens hypertextes vers d'autres sites. Wev IA Consulting n'exerce aucun
                    contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou aux
                    éventuels collectes et traitements de données personnelles effectués par ces sites.
                  </p>
                </div>
              </section>

              {/* Droit applicable */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  6. Droit applicable
                </h2>
                <div className="text-gray-600">
                  <p>
                    Les présentes mentions légales sont régies par le droit français. En cas de litige,
                    les tribunaux français seront seuls compétents.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  7. Contact
                </h2>
                <div className="text-gray-600">
                  <p>
                    Pour toute question concernant ces mentions légales, vous pouvez nous contacter à l'adresse :
                    <a href="mailto:wev.ia.org@gmail.com" className="text-gray-900 hover:underline ml-1 font-medium">
                      wev.ia.org@gmail.com
                    </a>
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
