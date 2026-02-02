import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CGV() {
  return (
    <>
      <Head>
        <title>Conditions Générales de Vente | WevIA</title>
        <meta name="description" content="Conditions générales de vente des services WevIA - Développement web et solutions d'intelligence artificielle" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-24">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Conditions Générales de Vente
              </h1>
              <p className="text-gray-400">
                Dernière mise à jour : Janvier 2025
              </p>
            </div>

            {/* Content */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 space-y-8">

              {/* Préambule */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">1</span>
                  Préambule
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>
                    Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les prestations
                    de services conclues entre WevIA et ses clients. Elles définissent les conditions dans
                    lesquelles WevIA fournit ses services de développement web, d'applications mobiles,
                    de référencement SEO et de solutions d'intelligence artificielle.
                  </p>
                  <p>
                    Toute commande de prestation implique l'acceptation sans réserve des présentes CGV.
                  </p>
                </div>
              </section>

              {/* Identification */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">2</span>
                  Identification du prestataire
                </h2>
                <div className="text-gray-300 space-y-2 pl-11">
                  <p><strong className="text-white">Raison sociale :</strong> Wev IA Consulting</p>
                  <p><strong className="text-white">Statut :</strong> Auto-entrepreneur</p>
                  <p><strong className="text-white">Email :</strong> wev.ia.org@gmail.com</p>
                  <p><strong className="text-white">Téléphone :</strong> +33 6 67 48 39 23</p>
                  <p><strong className="text-white">SIRET :</strong> 94975847800026</p>
                </div>
              </section>

              {/* Services proposés */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">3</span>
                  Services proposés
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>WevIA propose les services suivants :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-white">Développement web</strong> : création de sites vitrines, e-commerce, applications web</li>
                    <li><strong className="text-white">Applications mobiles</strong> : développement iOS et Android</li>
                    <li><strong className="text-white">SEO & Référencement</strong> : optimisation pour les moteurs de recherche</li>
                    <li><strong className="text-white">Intelligence artificielle</strong> : intégration de solutions IA, chatbots, automatisation</li>
                    <li><strong className="text-white">Consultation</strong> : audit technique, stratégie digitale</li>
                    <li><strong className="text-white">Maintenance</strong> : support technique et mises à jour</li>
                  </ul>
                </div>
              </section>

              {/* Devis et commande */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">4</span>
                  Devis et commande
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>
                    <strong className="text-white">4.1 Devis :</strong> Un devis détaillé est établi gratuitement
                    avant toute prestation. Il précise la nature des travaux, les délais indicatifs et le prix.
                    Le devis est valable 30 jours à compter de sa date d'émission.
                  </p>
                  <p>
                    <strong className="text-white">4.2 Validation :</strong> La commande est considérée comme
                    validée après acceptation écrite du devis (email, signature) et versement de l'acompte prévu.
                  </p>
                  <p>
                    <strong className="text-white">4.3 Modifications :</strong> Toute modification demandée
                    après validation du devis fera l'objet d'un avenant tarifé.
                  </p>
                </div>
              </section>

              {/* Tarifs */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">5</span>
                  Tarifs et modalités de paiement
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>
                    <strong className="text-white">5.1 Prix :</strong> Les prix sont exprimés en euros TTC.
                    En tant qu'auto-entrepreneur, WevIA n'est pas assujetti à la TVA (article 293 B du CGI).
                  </p>
                  <p>
                    <strong className="text-white">5.2 Acompte :</strong> Un acompte de 30% du montant total
                    est demandé à la commande, sauf accord particulier.
                  </p>
                  <p>
                    <strong className="text-white">5.3 Solde :</strong> Le solde est payable à la livraison
                    du projet, avant mise en production.
                  </p>
                  <p>
                    <strong className="text-white">5.4 Moyens de paiement :</strong> Virement bancaire, PayPal
                    ou tout autre moyen convenu entre les parties.
                  </p>
                  <p>
                    <strong className="text-white">5.5 Retard de paiement :</strong> En cas de retard de paiement,
                    des pénalités de retard seront appliquées au taux légal en vigueur. Une indemnité forfaitaire
                    de 40€ pour frais de recouvrement sera également due.
                  </p>
                </div>
              </section>

              {/* Délais */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">6</span>
                  Délais de réalisation
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>
                    <strong className="text-white">6.1 Estimation :</strong> Les délais communiqués sont
                    des estimations données à titre indicatif. Ils courent à compter de la réception de
                    l'acompte et de tous les éléments nécessaires au démarrage du projet.
                  </p>
                  <p>
                    <strong className="text-white">6.2 Retards :</strong> Les retards éventuels ne peuvent
                    donner lieu à des dommages et intérêts, pénalités ou annulation de la commande, sauf
                    accord contraire écrit.
                  </p>
                  <p>
                    <strong className="text-white">6.3 Collaboration :</strong> Le respect des délais est
                    conditionné par la fourniture des éléments et validations du client dans les temps convenus.
                  </p>
                </div>
              </section>

              {/* Propriété intellectuelle */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">7</span>
                  Propriété intellectuelle
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>
                    <strong className="text-white">7.1 Transfert :</strong> Le transfert de propriété des
                    créations au client s'effectue après paiement intégral du prix convenu.
                  </p>
                  <p>
                    <strong className="text-white">7.2 Droits conservés :</strong> WevIA conserve le droit
                    d'utiliser les réalisations à des fins de promotion (portfolio, références) sauf demande
                    contraire écrite du client.
                  </p>
                  <p>
                    <strong className="text-white">7.3 Composants tiers :</strong> Les librairies, frameworks
                    et outils open-source utilisés restent soumis à leurs licences respectives.
                  </p>
                  <p>
                    <strong className="text-white">7.4 Garantie :</strong> Le client garantit détenir les
                    droits sur les contenus fournis (textes, images, logos) pour leur utilisation.
                  </p>
                </div>
              </section>

              {/* Responsabilité */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">8</span>
                  Responsabilité
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>
                    <strong className="text-white">8.1 Obligation de moyens :</strong> WevIA s'engage à
                    mettre en oeuvre tous les moyens nécessaires à la bonne réalisation de ses prestations.
                    Il s'agit d'une obligation de moyens et non de résultat.
                  </p>
                  <p>
                    <strong className="text-white">8.2 Limitations :</strong> La responsabilité de WevIA
                    ne pourra être engagée en cas de :
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Force majeure ou fait indépendant de sa volonté</li>
                    <li>Mauvaise utilisation des livrables par le client</li>
                    <li>Non-respect des préconisations techniques</li>
                    <li>Modification des livrables par le client ou un tiers</li>
                  </ul>
                  <p>
                    <strong className="text-white">8.3 Plafond :</strong> En tout état de cause, la
                    responsabilité de WevIA est limitée au montant des sommes effectivement versées par
                    le client pour la prestation concernée.
                  </p>
                </div>
              </section>

              {/* Garantie */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">9</span>
                  Garantie et maintenance
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>
                    <strong className="text-white">9.1 Garantie :</strong> Une garantie de correction des
                    anomalies de 30 jours est incluse après la livraison. Elle couvre les dysfonctionnements
                    par rapport au cahier des charges validé.
                  </p>
                  <p>
                    <strong className="text-white">9.2 Exclusions :</strong> Ne sont pas couverts :
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Les demandes d'évolution ou nouvelles fonctionnalités</li>
                    <li>Les problèmes liés à l'hébergement ou services tiers</li>
                    <li>Les modifications effectuées par le client</li>
                  </ul>
                  <p>
                    <strong className="text-white">9.3 Maintenance :</strong> Des contrats de maintenance
                    peuvent être proposés séparément pour assurer le suivi et les mises à jour.
                  </p>
                </div>
              </section>

              {/* Confidentialité */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">10</span>
                  Confidentialité
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>
                    Chaque partie s'engage à traiter comme confidentielles toutes les informations
                    échangées dans le cadre du projet et à ne pas les divulguer à des tiers sans
                    autorisation préalable, sauf obligation légale.
                  </p>
                </div>
              </section>

              {/* Résiliation */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">11</span>
                  Résiliation
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>
                    <strong className="text-white">11.1 Par le client :</strong> Le client peut résilier
                    la commande à tout moment. L'acompte versé reste acquis à WevIA. Les travaux déjà
                    réalisés seront facturés au prorata.
                  </p>
                  <p>
                    <strong className="text-white">11.2 Par WevIA :</strong> En cas de non-respect des
                    obligations par le client (notamment de paiement), WevIA pourra suspendre ou résilier
                    la prestation après mise en demeure restée sans effet pendant 15 jours.
                  </p>
                </div>
              </section>

              {/* Droit de rétractation */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">12</span>
                  Droit de rétractation
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>
                    <strong className="text-white">Consommateurs :</strong> Conformément à l'article L221-28
                    du Code de la consommation, le droit de rétractation ne peut être exercé pour les
                    prestations de services pleinement exécutées avant la fin du délai de rétractation,
                    ou pour les contenus numériques fournis sur un support immatériel dont l'exécution a
                    commencé avec l'accord du consommateur.
                  </p>
                  <p>
                    <strong className="text-white">Professionnels :</strong> Les clients professionnels
                    ne bénéficient pas du droit de rétractation.
                  </p>
                </div>
              </section>

              {/* Litiges */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">13</span>
                  Litiges et droit applicable
                </h2>
                <div className="text-gray-300 space-y-4 pl-11">
                  <p>
                    <strong className="text-white">13.1 Médiation :</strong> En cas de litige, une solution
                    amiable sera recherchée en priorité. Le client consommateur peut recourir gratuitement
                    au médiateur de la consommation.
                  </p>
                  <p>
                    <strong className="text-white">13.2 Droit applicable :</strong> Les présentes CGV sont
                    régies par le droit français.
                  </p>
                  <p>
                    <strong className="text-white">13.3 Juridiction :</strong> À défaut de résolution amiable,
                    tout litige sera soumis aux tribunaux compétents de Paris.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-sm">14</span>
                  Contact
                </h2>
                <div className="text-gray-300 pl-11">
                  <p>
                    Pour toute question concernant ces conditions, contactez-nous :
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
