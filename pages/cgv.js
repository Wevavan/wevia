import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiArrowLeft } from 'react-icons/fi';

export default function CGV() {
  return (
    <>
      <Head>
        <title>Conditions Générales de Vente | Wev IA Consulting</title>
        <meta name="description" content="Conditions générales de vente des services Wev IA Consulting - Développement web et solutions d'intelligence artificielle" />
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
                Conditions Générales de Vente
              </h1>
              <p className="text-gray-500">
                Dernière mise à jour : Janvier 2025
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">

              {/* Préambule */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  1. Préambule
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les prestations
                    de services conclues entre Wev IA Consulting et ses clients. Elles définissent les conditions dans
                    lesquelles Wev IA Consulting fournit ses services de développement web, d'applications mobiles,
                    de référencement SEO et de solutions d'intelligence artificielle.
                  </p>
                  <p>
                    Toute commande de prestation implique l'acceptation sans réserve des présentes CGV.
                  </p>
                </div>
              </section>

              {/* Identification */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  2. Identification du prestataire
                </h2>
                <div className="text-gray-600 space-y-2">
                  <p><span className="font-medium text-gray-900">Raison sociale :</span> Wev IA Consulting</p>
                  <p><span className="font-medium text-gray-900">Statut :</span> Auto-entrepreneur</p>
                  <p><span className="font-medium text-gray-900">Email :</span> wev.ia.org@gmail.com</p>
                  <p><span className="font-medium text-gray-900">Téléphone :</span> +33 6 67 48 39 23</p>
                  <p><span className="font-medium text-gray-900">SIRET :</span> 94975847800026</p>
                </div>
              </section>

              {/* Services proposés */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  3. Services proposés
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>Wev IA Consulting propose les services suivants :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><span className="font-medium text-gray-900">Développement web</span> : création de sites vitrines, e-commerce, applications web</li>
                    <li><span className="font-medium text-gray-900">Applications mobiles</span> : développement iOS et Android</li>
                    <li><span className="font-medium text-gray-900">SEO & Référencement</span> : optimisation pour les moteurs de recherche</li>
                    <li><span className="font-medium text-gray-900">Intelligence artificielle</span> : intégration de solutions IA, chatbots, automatisation</li>
                    <li><span className="font-medium text-gray-900">Consultation</span> : audit technique, stratégie digitale</li>
                    <li><span className="font-medium text-gray-900">Maintenance</span> : support technique et mises à jour</li>
                  </ul>
                </div>
              </section>

              {/* Devis et commande */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  4. Devis et commande
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    <span className="font-medium text-gray-900">4.1 Devis :</span> Un devis détaillé est établi gratuitement
                    avant toute prestation. Il précise la nature des travaux, les délais indicatifs et le prix.
                    Le devis est valable 30 jours à compter de sa date d'émission.
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">4.2 Validation :</span> La commande est considérée comme
                    validée après acceptation écrite du devis (email, signature) et versement de l'acompte prévu.
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">4.3 Modifications :</span> Toute modification demandée
                    après validation du devis fera l'objet d'un avenant tarifé.
                  </p>
                </div>
              </section>

              {/* Tarifs */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  5. Tarifs et modalités de paiement
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    <span className="font-medium text-gray-900">5.1 Prix :</span> Les prix sont exprimés en euros TTC.
                    En tant qu'auto-entrepreneur, Wev IA Consulting n'est pas assujetti à la TVA (article 293 B du CGI).
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">5.2 Acompte :</span> Un acompte de 30% du montant total
                    est demandé à la commande, sauf accord particulier.
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">5.3 Solde :</span> Le solde est payable à la livraison
                    du projet, avant mise en production.
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">5.4 Moyens de paiement :</span> Virement bancaire, PayPal
                    ou tout autre moyen convenu entre les parties.
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">5.5 Retard de paiement :</span> En cas de retard de paiement,
                    des pénalités de retard seront appliquées au taux légal en vigueur. Une indemnité forfaitaire
                    de 40€ pour frais de recouvrement sera également due.
                  </p>
                </div>
              </section>

              {/* Délais */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  6. Délais de réalisation
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    <span className="font-medium text-gray-900">6.1 Estimation :</span> Les délais communiqués sont
                    des estimations données à titre indicatif. Ils courent à compter de la réception de
                    l'acompte et de tous les éléments nécessaires au démarrage du projet.
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">6.2 Retards :</span> Les retards éventuels ne peuvent
                    donner lieu à des dommages et intérêts, pénalités ou annulation de la commande, sauf
                    accord contraire écrit.
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">6.3 Collaboration :</span> Le respect des délais est
                    conditionné par la fourniture des éléments et validations du client dans les temps convenus.
                  </p>
                </div>
              </section>

              {/* Propriété intellectuelle */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  7. Propriété intellectuelle
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    <span className="font-medium text-gray-900">7.1 Transfert :</span> Le transfert de propriété des
                    créations au client s'effectue après paiement intégral du prix convenu.
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">7.2 Droits conservés :</span> Wev IA Consulting conserve le droit
                    d'utiliser les réalisations à des fins de promotion (portfolio, références) sauf demande
                    contraire écrite du client.
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">7.3 Composants tiers :</span> Les librairies, frameworks
                    et outils open-source utilisés restent soumis à leurs licences respectives.
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">7.4 Garantie :</span> Le client garantit détenir les
                    droits sur les contenus fournis (textes, images, logos) pour leur utilisation.
                  </p>
                </div>
              </section>

              {/* Responsabilité */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  8. Responsabilité
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    <span className="font-medium text-gray-900">8.1 Obligation de moyens :</span> Wev IA Consulting s'engage à
                    mettre en oeuvre tous les moyens nécessaires à la bonne réalisation de ses prestations.
                    Il s'agit d'une obligation de moyens et non de résultat.
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">8.2 Limitations :</span> La responsabilité de Wev IA Consulting
                    ne pourra être engagée en cas de :
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Force majeure ou fait indépendant de sa volonté</li>
                    <li>Mauvaise utilisation des livrables par le client</li>
                    <li>Non-respect des préconisations techniques</li>
                    <li>Modification des livrables par le client ou un tiers</li>
                  </ul>
                  <p>
                    <span className="font-medium text-gray-900">8.3 Plafond :</span> En tout état de cause, la
                    responsabilité de Wev IA Consulting est limitée au montant des sommes effectivement versées par
                    le client pour la prestation concernée.
                  </p>
                </div>
              </section>

              {/* Garantie */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  9. Garantie et maintenance
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    <span className="font-medium text-gray-900">9.1 Garantie :</span> Une garantie de correction des
                    anomalies de 30 jours est incluse après la livraison. Elle couvre les dysfonctionnements
                    par rapport au cahier des charges validé.
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">9.2 Exclusions :</span> Ne sont pas couverts :
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Les demandes d'évolution ou nouvelles fonctionnalités</li>
                    <li>Les problèmes liés à l'hébergement ou services tiers</li>
                    <li>Les modifications effectuées par le client</li>
                  </ul>
                  <p>
                    <span className="font-medium text-gray-900">9.3 Maintenance :</span> Des contrats de maintenance
                    peuvent être proposés séparément pour assurer le suivi et les mises à jour.
                  </p>
                </div>
              </section>

              {/* Confidentialité */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  10. Confidentialité
                </h2>
                <div className="text-gray-600">
                  <p>
                    Chaque partie s'engage à traiter comme confidentielles toutes les informations
                    échangées dans le cadre du projet et à ne pas les divulguer à des tiers sans
                    autorisation préalable, sauf obligation légale.
                  </p>
                </div>
              </section>

              {/* Résiliation */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  11. Résiliation
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    <span className="font-medium text-gray-900">11.1 Par le client :</span> Le client peut résilier
                    la commande à tout moment. L'acompte versé reste acquis à Wev IA Consulting. Les travaux déjà
                    réalisés seront facturés au prorata.
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">11.2 Par Wev IA Consulting :</span> En cas de non-respect des
                    obligations par le client (notamment de paiement), Wev IA Consulting pourra suspendre ou résilier
                    la prestation après mise en demeure restée sans effet pendant 15 jours.
                  </p>
                </div>
              </section>

              {/* Droit de rétractation */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  12. Droit de rétractation
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    <span className="font-medium text-gray-900">Consommateurs :</span> Conformément à l'article L221-28
                    du Code de la consommation, le droit de rétractation ne peut être exercé pour les
                    prestations de services pleinement exécutées avant la fin du délai de rétractation,
                    ou pour les contenus numériques fournis sur un support immatériel dont l'exécution a
                    commencé avec l'accord du consommateur.
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Professionnels :</span> Les clients professionnels
                    ne bénéficient pas du droit de rétractation.
                  </p>
                </div>
              </section>

              {/* Litiges */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  13. Litiges et droit applicable
                </h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    <span className="font-medium text-gray-900">13.1 Médiation :</span> En cas de litige, une solution
                    amiable sera recherchée en priorité. Le client consommateur peut recourir gratuitement
                    au médiateur de la consommation.
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">13.2 Droit applicable :</span> Les présentes CGV sont
                    régies par le droit français.
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">13.3 Juridiction :</span> À défaut de résolution amiable,
                    tout litige sera soumis aux tribunaux compétents de Paris.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  14. Contact
                </h2>
                <div className="text-gray-600">
                  <p>
                    Pour toute question concernant ces conditions, contactez-nous :
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
