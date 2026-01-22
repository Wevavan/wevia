import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Head>
        <title>Politique de Confidentialité | WevIA</title>
        <meta name="description" content="Politique de confidentialité du site WevIA - Protection de vos données personnelles" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-24">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Politique de Confidentialité
              </h1>
              <p className="text-gray-400">
                Dernière mise à jour : Janvier 2025
              </p>
            </div>

            {/* Content */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 space-y-8">

              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">1</span>
                  Introduction
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>
                    WevIA accorde une grande importance à la protection de vos données personnelles.
                    Cette politique de confidentialité vous informe sur la manière dont nous collectons,
                    utilisons et protégeons vos informations lorsque vous utilisez notre site web wevia.com.
                  </p>
                  <p>
                    En utilisant notre site, vous acceptez les pratiques décrites dans cette politique.
                  </p>
                </div>
              </section>

              {/* Responsable du traitement */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">2</span>
                  Responsable du traitement
                </h2>
                <div className="text-gray-300 space-y-2 pl-11">
                  <p><strong className="text-white">Responsable :</strong> WevIA - Wevavan GBENOU</p>
                  <p><strong className="text-white">Adresse :</strong> Paris, France</p>
                  <p><strong className="text-white">Email :</strong> contact@wevia.com</p>
                </div>
              </section>

              {/* Données collectées */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">3</span>
                  Données collectées
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>Nous collectons les données suivantes :</p>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-white font-semibold mb-2">Données fournies volontairement :</h3>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone</li>
                      <li>Nom de l'entreprise (optionnel)</li>
                      <li>Message ou description de votre projet</li>
                      <li>Créneaux horaires de disponibilité</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-white font-semibold mb-2">Données collectées automatiquement :</h3>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Adresse IP</li>
                      <li>Type de navigateur</li>
                      <li>Pages visitées et durée de visite</li>
                      <li>Source de trafic</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Finalités */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">4</span>
                  Finalités du traitement
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>Vos données sont utilisées pour :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Répondre à vos demandes de contact et de devis</li>
                    <li>Planifier et gérer les consultations</li>
                    <li>Vous envoyer des informations sur l'avancement de votre projet</li>
                    <li>Améliorer nos services et l'expérience utilisateur</li>
                    <li>Établir des statistiques de fréquentation</li>
                    <li>Respecter nos obligations légales</li>
                  </ul>
                </div>
              </section>

              {/* Base légale */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">5</span>
                  Base légale du traitement
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>Le traitement de vos données repose sur :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-white">Votre consentement</strong> : lorsque vous remplissez un formulaire de contact ou de réservation</li>
                    <li><strong className="text-white">L'exécution d'un contrat</strong> : pour la réalisation de prestations</li>
                    <li><strong className="text-white">L'intérêt légitime</strong> : pour l'amélioration de nos services</li>
                  </ul>
                </div>
              </section>

              {/* Durée de conservation */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">6</span>
                  Durée de conservation
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>Vos données sont conservées pendant :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-white">Demandes de contact</strong> : 3 ans à compter du dernier contact</li>
                    <li><strong className="text-white">Données clients</strong> : durée de la relation commerciale + 5 ans (obligations légales)</li>
                    <li><strong className="text-white">Données de navigation</strong> : 13 mois maximum</li>
                  </ul>
                </div>
              </section>

              {/* Destinataires */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">7</span>
                  Destinataires des données
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>Vos données peuvent être partagées avec :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-white">Notre hébergeur</strong> : Vercel Inc. (hébergement du site)</li>
                    <li><strong className="text-white">Notre base de données</strong> : MongoDB Atlas (stockage sécurisé)</li>
                    <li><strong className="text-white">Service d'emailing</strong> : Gmail (envoi de notifications)</li>
                  </ul>
                  <p className="mt-4">
                    Nous ne vendons jamais vos données à des tiers. Les données peuvent être transférées
                    hors UE uniquement vers des prestataires offrant des garanties de protection adéquates
                    (clauses contractuelles types, Privacy Shield).
                  </p>
                </div>
              </section>

              {/* Vos droits */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">8</span>
                  Vos droits
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-white">Droit d'accès</strong> : obtenir une copie de vos données</li>
                    <li><strong className="text-white">Droit de rectification</strong> : corriger des données inexactes</li>
                    <li><strong className="text-white">Droit à l'effacement</strong> : demander la suppression de vos données</li>
                    <li><strong className="text-white">Droit à la limitation</strong> : restreindre le traitement de vos données</li>
                    <li><strong className="text-white">Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
                    <li><strong className="text-white">Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
                  </ul>
                  <p className="mt-4">
                    Pour exercer ces droits, contactez-nous à :
                    <a href="mailto:contact@wevia.com" className="text-blue-400 hover:text-blue-300 ml-1">
                      contact@wevia.com
                    </a>
                  </p>
                  <p>
                    Vous pouvez également introduire une réclamation auprès de la CNIL :
                    <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 ml-1">
                      www.cnil.fr
                    </a>
                  </p>
                </div>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">9</span>
                  Cookies
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>Notre site utilise des cookies pour :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-white">Cookies essentiels</strong> : nécessaires au fonctionnement du site</li>
                    <li><strong className="text-white">Cookies analytiques</strong> : mesure d'audience (anonymisés)</li>
                  </ul>
                  <p className="mt-4">
                    Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté
                    lorsqu'un cookie est envoyé.
                  </p>
                </div>
              </section>

              {/* Sécurité */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">10</span>
                  Sécurité
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>
                    Nous mettons en oeuvre des mesures techniques et organisationnelles appropriées
                    pour protéger vos données contre tout accès non autorisé, modification, divulgation
                    ou destruction :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Connexion HTTPS sécurisée</li>
                    <li>Chiffrement des données sensibles</li>
                    <li>Accès restreint aux données personnelles</li>
                    <li>Sauvegardes régulières</li>
                  </ul>
                </div>
              </section>

              {/* Modifications */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">11</span>
                  Modifications
                </h2>
                <div className="text-gray-300 pl-11">
                  <p>
                    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
                    Les modifications prennent effet dès leur publication sur cette page.
                    Nous vous encourageons à consulter régulièrement cette page.
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
