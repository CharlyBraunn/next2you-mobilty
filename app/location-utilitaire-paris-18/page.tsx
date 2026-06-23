import type { Metadata } from "next"
import { LocalCityPage } from "@/components/local/LocalCityPage"
import type { CityConfig } from "@/components/local/LocalCityPage"

const config: CityConfig = {
    city: "Paris 18ème",
    cityLabel: "Paris 18ème",
    slug: "paris-18",
    heroTitle: "Location utilitaire Paris 18ème — Kangoo 24h/24",
    heroSubtitle: "Louez un Renault Kangoo Express en plein cœur du 18ème arrondissement. Disponible 24h/24 via Getaround, assurance AXA tous risques incluse.",
    description: "Next2You propose un Kangoo Express situé près de la Mairie du 18ème, idéal pour vos transports parisiens. Bluetooth, régulateur de vitesse et accessoires de déménagement inclus.",
    getaroundUrl: "https://fr.getaround.com/location-voiture/paris/renault-kangoo-express-1302570",
    postalCode: "75018",
    lat: 48.8924,
    lng: 2.3444,
    highlights: [
        "Situé au cœur du 18ème (proche Mairie)",
        "Bluetooth & régulateur de vitesse",
        "Diable, tendeurs et couverture de déménagement",
        "Support téléphone fourni",
        "Idéal pour les transports parisiens",
        "Accès autonome, sans clé physique",
    ],
    faq: [
        {
            question: "Où se trouve le Kangoo disponible dans le 18ème arrondissement ?",
            answer: "Notre Renault Kangoo Express est situé au cœur du 18ème, à proximité de la Mairie. L'adresse précise vous est communiquée via l'application Getaround après réservation.",
        },
        {
            question: "Puis-je circuler dans tout Paris avec ce véhicule ?",
            answer: "Oui, absolument. Le Kangoo peut circuler dans tout Paris et l'Île-de-France. Attention aux restrictions de circulation ZFE : notre véhicule Diesel respecte les normes en vigueur. Vérifiez votre créneau sur le site de la Ville de Paris si vous planifiez une circulation certains jours.",
        },
        {
            question: "Le Kangoo du 18ème est-il équipé pour un déménagement ?",
            answer: "Oui ! Vous trouverez à bord un diable de transport, des tendeurs, une couverture de déménagement, un support de téléphone et un câble Lightning. Tout le nécessaire pour un déménagement en toute sérénité.",
        },
        {
            question: "Quelle est la capacité du Kangoo du 18ème ?",
            answer: "Le Renault Kangoo Express du 18ème offre un volume de 3m³. Il peut transporter une vingtaine de cartons standards ou des meubles de taille moyenne. Parfait pour un déménagement de studio ou de chambre.",
        },
        {
            question: "Comment se passe le stationnement après la location dans Paris ?",
            answer: "Le véhicule doit être restitué dans un rayon de 400m autour de son emplacement d'origine, ou sur sa place attitrée si elle est précisée dans l'annonce. Les frais de stationnement pendant votre trajet sont à votre charge.",
        },
    ],
}

const siteUrl = "https://www.next2you-mobility.com"

export const metadata: Metadata = {
    title: "Location utilitaire Paris 18ème — Kangoo Express 24h/24 | Next2You",
    description:
        "Louez un Renault Kangoo Express dans le 18ème arrondissement de Paris, disponible 24h/24 via Getaround. Assurance AXA, diable et accessoires fournis. Idéal déménagement et transport à Paris.",
    keywords: [
        "location utilitaire Paris 18",
        "louer Kangoo Paris 18ème",
        "camionnette déménagement Paris 18",
        "location utilitaire 75018",
        "utilitaire Paris 18 pas cher",
        "Getaround Paris 18",
        "location van Paris 18ème arrondissement",
    ],
    alternates: { canonical: `${siteUrl}/location-utilitaire-paris-18` },
    openGraph: {
        title: "Location utilitaire Paris 18ème — Kangoo Express 24h/24",
        description: "Renault Kangoo Express disponible 24h/24 dans le 18ème. Accès autonome, assurance incluse.",
        url: `${siteUrl}/location-utilitaire-paris-18`,
        images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Location utilitaire Paris 18" }],
    },
}

export default function Paris18Page() {
    return <LocalCityPage config={config} />
}
