import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiArrowLeft } from 'react-icons/fi';

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Head>
        <title>Politique de Confidentialité | Wev IA Consulting</title>
        <meta name="description" content="Politique de confidentialité du site Wev IA Consulting - Protection de vos données personnelles" />
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
                Politique de Confidentialité
              </h1>
              <p className="text-gray-500">
                Dernière mise à jour : Janvier 2025
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">

              {/* Introduction */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  1. Introduction
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Wev IA Consulting accorde une grande importance à la protection de vos données personnelles.
                    Cette politique de confidentialité vous informe sur la manière dont nous collectons,
                    utilisons et protégeons vos informations lorsque vous utilisez notre site web.
                  </p>
                  <p>
                    En utilisant notre site, vous acceptez les pratiques décrites dans cette politique.
                  </p>
                </div>
              </section>

              {/* Responsable du traitement */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  2. Responsable du traitement
                </h2>
                <div className="text-gray-600 space-y-2">
                  <p><span className="font-medium text-gray-900">Responsable :</span> Wev IA Consulting</p>
                  <p><span className="font-medium text-gray-900">Email :</span> wev.ia.org@gmail.com</p>
                </div>
              </section>

              {/* Données collectées */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  3. Données collectées
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>Nous collectons les données suivantes :</p>

                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-2">Données fournies volontairement :</h3>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone</li>
                      <li>Nom de l'entreprise (optionnel)</li>
                      <li>Message ou description de votre projet</li>
                      <li>Créneaux horaires de disponibilité</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-2">Données collectées automatiquement :</h3>
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
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  4. Finalités du traitement
                </h2>
                <div className="text-gray-600 space-y-4">
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
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  5. Base légale du traitement
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>Le traitement de vos données repose sur :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><span className="font-medium text-gray-900">Votre consentement</span> : lorsque vous remplissez un formulaire de contact ou de réservation</li>
                    <li><span className="font-medium text-gray-900">L'exécution d'un contrat</span> : pour la réalisation de prestations</li>
                    <li><span className="font-medium text-gray-900">L'intérêt légitime</span> : pour l'amélioration de nos services</li>
                  </ul>
                </div>
              </section>

              {/* Durée de conservation */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  6. Durée de conservation
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>Vos données sont conservées pendant :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><span className="font-medium text-gray-900">Demandes de contact</span> : 3 ans à compter du dernier contact</li>
                    <li><span className="font-medium text-gray-900">Données clients</span> : durée de la relation commerciale + 5 ans (obligations légales)</li>
                    <li><span className="font-medium text-gray-900">Données de navigation</span> : 13 mois maximum</li>
                  </ul>
                </div>
              </section>

              {/* Destinataires */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  7. Destinataires des données
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>Vos données peuvent être partagées avec :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><span className="font-medium text-gray-900">Notre hébergeur</span> : Vercel Inc. (hébergement du site)</li>
                    <li><span className="font-medium text-gray-900">Notre base de données</span> : MongoDB Atlas (stockage sécurisé)</li>
                    <li><span className="font-medium text-gray-900">Service d'emailing</span> : Gmail (envoi de notifications)</li>
                  </ul>
                  <p className="mt-4">
                    Nous ne vendons jamais vos données à des tiers. Les données peuvent être transférées
                    hors UE uniquement vers des prestataires offrant des garanties de protection adéquates
                    (clauses contractuelles types, Privacy Shield).
                  </p>
                </div>
              </section>

              {/* Vos droits */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  8. Vos droits
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><span className="font-medium text-gray-900">Droit d'accès</span> : obtenir une copie de vos données</li>
                    <li><span className="font-medium text-gray-900">Droit de rectification</span> : corriger des données inexactes</li>
                    <li><span className="font-medium text-gray-900">Droit à l'effacement</span> : demander la suppression de vos données</li>
                    <li><span className="font-medium text-gray-900">Droit à la limitation</span> : restreindre le traitement de vos données</li>
                    <li><span className="font-medium text-gray-900">Droit à la portabilité</span> : recevoir vos données dans un format structuré</li>
                    <li><span className="font-medium text-gray-900">Droit d'opposition</span> : vous opposer au traitement de vos données</li>
                  </ul>
                  <p className="mt-4">
                    Pour exercer ces droits, contactez-nous à :
                    <a href="mailto:wev.ia.org@gmail.com" className="text-gray-900 hover:underline ml-1 font-medium">
                      wev.ia.org@gmail.com
                    </a>
                  </p>
                  <p>
                    Vous pouvez également introduire une réclamation auprès de la CNIL :
                    <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline ml-1 font-medium">
                      www.cnil.fr
                    </a>
                  </p>
                </div>
              </section>

              {/* Cookies */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  9. Cookies
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>Notre site utilise des cookies pour :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><span className="font-medium text-gray-900">Cookies essentiels</span> : nécessaires au fonctionnement du site</li>
                    <li><span className="font-medium text-gray-900">Cookies analytiques</span> : mesure d'audience (anonymisés)</li>
                  </ul>
                  <p className="mt-4">
                    Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté
                    lorsqu'un cookie est envoyé.
                  </p>
                </div>
              </section>

              {/* Sécurité */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  10. Sécurité
                </h2>
                <div className="text-gray-600 space-y-4">
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
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  11. Modifications
                </h2>
                <div className="text-gray-600">
                  <p>
                    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
                    Les modifications prennent effet dès leur publication sur cette page.
                    Nous vous encourageons à consulter régulièrement cette page.
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
