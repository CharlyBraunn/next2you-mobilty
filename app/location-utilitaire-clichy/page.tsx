import type { Metadata } from "next"
import { LocalCityPage } from "@/components/local/LocalCityPage"
import type { CityConfig } from "@/components/local/LocalCityPage"

const config: CityConfig = {
    city: "Clichy",
    cityLabel: "Clichy",
    slug: "clichy",
    heroTitle: "Location utilitaire à Clichy — Kangoo 24h/24",
    heroSubtitle: "Réservez un Renault Kangoo utilitaire à Clichy en quelques minutes. Disponible 24h/24 via Getaround, assurance AXA incluse. Idéal pour vos déménagements et transports.",
    description: "Next2You propose un Renault Kangoo Express disponible 24h/24 à Clichy, idéalement situé à proximité du périphérique. Parfait pour vos déménagements et petits transports.",
    getaroundUrl: "https://fr.getaround.com/location-voiture/clichy",
    postalCode: "92110",
    lat: 48.9047,
    lng: 2.3050,
    highlights: [
        "Proche périphérique — accès rapide Paris/banlieue",
        "Siège passager escamotable pour plancher plat",
        "Diable et sangles fournis",
        "Accès autonome 7j/7, sans rendez-vous",
        "Assurance AXA tous risques incluse",
        "Tarif horaire ou journée selon vos besoins",
    ],
    faq: [
        {
            question: "Où se trouve le Kangoo disponible à Clichy ?",
            answer: "Notre Renault Kangoo Express est situé à Clichy, proche des périphériques pour faciliter vos trajets vers Paris et la petite couronne. L'adresse exacte est disponible dans l'annonce Getaround après réservation.",
        },
        {
            question: "Puis-je utiliser le Kangoo de Clichy pour un déménagement ?",
            answer: "Absolument ! Le Kangoo Express de Clichy est idéal pour les petits déménagements et transports. Le siège passager est escamotable pour créer un plancher totalement plat. Un diable, des sangles et une couverture de déménagement sont fournis à bord.",
        },
        {
            question: "Quelle est la capacité de chargement du Kangoo à Clichy ?",
            answer: "Le Renault Kangoo Express offre un volume de 3m³ et peut transporter jusqu'à environ 500kg. Le siège passager escamotable permet un chargement optimisé avec un plancher plat. Idéal pour des cartons, meubles démontés ou petits électroménagers.",
        },
        {
            question: "Puis-je louer le Kangoo de Clichy pour rejoindre Paris ?",
            answer: "Oui, nos véhicules peuvent circuler librement dans tout Paris et la région Île-de-France. Idéalement positionné à Clichy, vous accédez rapidement au périphérique et aux grands axes parisiens.",
        },
        {
            question: "Comment fonctionne la réservation sans agence ?",
            answer: "Tout se passe sur l'application Getaround : choisissez votre créneau, payez en ligne, et déverrouillez le véhicule avec votre smartphone. Aucun rendez-vous nécessaire, aucune clé physique à récupérer. Le véhicule est disponible à l'heure que vous choisissez.",
        },
    ],
}

const siteUrl = "https://www.next2you-mobility.com"

export const metadata: Metadata = {
    title: "Location utilitaire Clichy — Kangoo Express 24h/24 | Next2You",
    description:
        "Louez un Renault Kangoo Express à Clichy, disponible 24h/24 via Getaround. Assurance AXA incluse, diable fourni. Idéal pour vos déménagements et transports en Île-de-France.",
    keywords: [
        "location utilitaire Clichy",
        "louer Kangoo Clichy",
        "camionnette déménagement Clichy",
        "location utilitaire 92110",
        "utilitaire Clichy pas cher",
        "Getaround Clichy",
        "location van Clichy",
    ],
    alternates: { canonical: `${siteUrl}/location-utilitaire-clichy` },
    openGraph: {
        title: "Location utilitaire Clichy — Kangoo Express 24h/24",
        description: "Renault Kangoo Express disponible 24h/24 à Clichy. Accès autonome, assurance incluse.",
        url: `${siteUrl}/location-utilitaire-clichy`,
        images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Location utilitaire Clichy" }],
    },
}

export default function ClicyhPage() {
    return <LocalCityPage config={config} />
}
