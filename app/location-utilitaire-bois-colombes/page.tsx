import type { Metadata } from "next"
import { LocalCityPage } from "@/components/local/LocalCityPage"
import type { CityConfig } from "@/components/local/LocalCityPage"

const config: CityConfig = {
    city: "Bois-Colombes",
    cityLabel: "Bois-Colombes",
    slug: "bois-colombes",
    heroTitle: "Location utilitaire à Bois-Colombes — 24h/24",
    heroSubtitle: "Louez un Kangoo, Trafic ou citadine à Bois-Colombes en quelques minutes. Accès autonome via Getaround, assurance AXA tous risques incluse.",
    description: "Avec 4 véhicules disponibles à Bois-Colombes (dont un Trafic 6m³), Next2You est le partenaire de mobilité le plus complet de la commune. Proche gare et mairie.",
    getaroundUrl: "https://fr.getaround.com/location-voiture/bois-colombes",
    postalCode: "92270",
    lat: 48.9158,
    lng: 2.2714,
    highlights: [
        "4 véhicules disponibles à Bois-Colombes",
        "Proche gare de Bois-Colombes",
        "Trafic 6m³ pour les grands déménagements",
        "Place de parking réservée incluse",
        "Diable et sangles fournis",
        "Idéal pour Ikea et les transports volumineux",
    ],
    faq: [
        {
            question: "Où sont situés les véhicules à Bois-Colombes ?",
            answer: "Nos véhicules sont disponibles à différents points stratégiques de Bois-Colombes, dont certains à 2 minutes à pied de la gare SNCF. L'emplacement exact est indiqué dans chaque annonce Getaround.",
        },
        {
            question: "Puis-je louer un utilitaire à Bois-Colombes pour un déménagement ?",
            answer: "Oui, nous disposons d'un Renault Kangoo Express (3m³) et d'un Renault Trafic (6m³) à Bois-Colombes. Les deux sont équipés d'un diable, de sangles et d'une couverture de déménagement. Parfaits pour vider un appartement ou transporter des meubles Ikea.",
        },
        {
            question: "Quelle est la différence entre le Kangoo et le Trafic à Bois-Colombes ?",
            answer: "Le Kangoo Express propose un volume de 3m³, idéal pour les petits déménagements, transports de meubles et achats en magasin. Le Renault Trafic offre 6m³ de volume utile avec une hauteur inférieure à 2m (accès aux parkings souterrains), parfait pour les déménagements complets.",
        },
        {
            question: "Y a-t-il une place de parking réservée pour la restitution ?",
            answer: "Oui, plusieurs de nos véhicules à Bois-Colombes bénéficient d'une place de parking attitrée tout au long de la location. Pas de stress pour garer le véhicule à votre retour.",
        },
        {
            question: "Comment accéder au véhicule sans clé physique ?",
            answer: "Nos véhicules sont équipés de la technologie Getaround Connect. Téléchargez l'application Getaround, réservez votre créneau, et déverrouillez le véhicule directement depuis votre smartphone. 100% autonome, 24h/24.",
        },
    ],
}

const siteUrl = "https://www.next2you-mobility.com"

export const metadata: Metadata = {
    title: "Location utilitaire Bois-Colombes — Kangoo & Trafic 24h/24 | Next2You",
    description:
        "Louez un utilitaire à Bois-Colombes : Renault Kangoo 3m³ ou Trafic 6m³, disponibles 24h/24 via Getaround. Assurance AXA incluse. Idéal déménagement, Ikea, transport volumineux.",
    keywords: [
        "location utilitaire Bois-Colombes",
        "louer Kangoo Bois-Colombes",
        "camionnette déménagement Bois-Colombes",
        "location Trafic Bois-Colombes",
        "utilitaire 92270",
        "location van Bois-Colombes",
        "Getaround Bois-Colombes",
    ],
    alternates: { canonical: `${siteUrl}/location-utilitaire-bois-colombes` },
    openGraph: {
        title: "Location utilitaire Bois-Colombes — Kangoo & Trafic 24h/24",
        description: "Kangoo 3m³ et Trafic 6m³ disponibles à Bois-Colombes. Accès autonome, assurance incluse.",
        url: `${siteUrl}/location-utilitaire-bois-colombes`,
        images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Location utilitaire Bois-Colombes" }],
    },
}

export default function BoisColombesPage() {
    return <LocalCityPage config={config} />
}
