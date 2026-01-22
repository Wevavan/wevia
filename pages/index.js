// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';
import About from '../components/About';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import PremiumHeaderHero from '@/components/Header';

export default function Home() {
  useEffect(() => {
    // Track page view
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'page_view', page: 'home' })
    });
  }, []);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>WevIA - Je crée des sites web qui rapportent | Développeur Web & IA</title>
        <meta name="title" content="WevIA - Je crée des sites web qui rapportent | Développeur Web & IA" />
        <meta name="description" content="Besoin d'un site qui génère des clients ? Je crée des sites web modernes, optimisés pour Google et qui automatisent votre business avec l'IA. Résultats concrets : +280% ROI, 5K+ utilisateurs, €60K de revenus générés pour mes clients." />
        <meta name="keywords" content="développeur web, développeur IA, Next.js, React, intelligence artificielle, SaaS, OpenAI, développement full-stack, site vitrine, plateforme réservation, freelance développeur, France" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="French" />
        <meta name="author" content="WevIA" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wevia.com/" />
        <meta property="og:title" content="WevIA - Je crée des sites web qui rapportent | Développeur Web & IA" />
        <meta property="og:description" content="Besoin d'un site qui génère des clients ? Je crée des sites optimisés Google et automatisés avec l'IA. Résultats concrets : +280% ROI, 5K+ utilisateurs." />
        <meta property="og:image" content="https://wevia.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="WevIA Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://wevia.com/" />
        <meta name="twitter:title" content="WevIA - Sites web qui rapportent" />
        <meta name="twitter:description" content="Je crée des sites optimisés Google et automatisés avec l'IA. Résultats réels : +280% ROI, 5K+ utilisateurs." />
        <meta name="twitter:image" content="https://wevia.com/twitter-image.jpg" />
        <meta name="twitter:creator" content="@wevia_dev" />

        {/* Additional SEO */}
        <link rel="canonical" href="https://wevia.com/" />
        <link rel="alternate" hrefLang="fr" href="https://wevia.com/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Geo Tags */}
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />

        {/* Business Info */}
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "WevIA",
              "description": "Je crée des sites web qui génèrent des clients. Optimisation Google, automatisation IA, résultats concrets pour votre business.",
              "url": "https://wevia.com",
              "logo": "https://wevia.com/logo.png",
              "image": "https://wevia.com/og-image.jpg",
              "priceRange": "€€€",
              "telephone": "+33-X-XX-XX-XX-XX",
              "email": "contact@wevia.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "FR",
                "addressLocality": "France"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "addressCountry": "FR"
              },
              "sameAs": [
                "https://github.com/wevia",
                "https://linkedin.com/in/wevia",
                "https://twitter.com/wevia_dev"
              ],
              "serviceType": [
                "Développement Web",
                "Intelligence Artificielle",
                "Applications SaaS",
                "Sites Vitrines Premium",
                "Plateformes de Réservation"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services de Développement",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Développement Web Full-Stack",
                      "description": "Création d'applications web modernes avec Next.js, React et Node.js"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Intégration Intelligence Artificielle",
                      "description": "Développement de solutions IA avec OpenAI GPT-4 et machine learning"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Applications SaaS",
                      "description": "Création de plateformes SaaS complètes avec authentification et paiements"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "50",
                "bestRating": "5",
                "worstRating": "1"
              },
              "founder": {
                "@type": "Person",
                "name": "WevIA",
                "jobTitle": "Développeur Web & IA Full-Stack",
                "url": "https://wevia.com"
              }
            })
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "WevIA",
              "url": "https://wevia.com",
              "logo": "https://wevia.com/logo.png",
              "description": "Développeur Web & IA Full-Stack spécialisé en Next.js, React et Intelligence Artificielle",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+33-X-XX-XX-XX-XX",
                "contactType": "customer service",
                "email": "contact@wevia.com",
                "availableLanguage": ["French", "English"]
              }
            })
          }}
        />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "WevIA Portfolio",
              "url": "https://wevia.com",
              "description": "Portfolio professionnel de développement web et IA",
              "inLanguage": "fr-FR",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://wevia.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "WevIA",
              "jobTitle": "Développeur Web & IA Full-Stack",
              "url": "https://wevia.com",
              "image": "https://wevia.com/profile.jpg",
              "sameAs": [
                "https://github.com/wevia",
                "https://linkedin.com/in/wevia",
                "https://twitter.com/wevia_dev"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "WevIA"
              },
              "knowsAbout": [
                "Développement Web",
                "Intelligence Artificielle",
                "Next.js",
                "React",
                "Node.js",
                "OpenAI",
                "SaaS Development"
              ]
            })
          }}
        />
      </Head>

      <PremiumHeaderHero />

      <main className="min-h-screen bg-gray-50">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Pricing />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}