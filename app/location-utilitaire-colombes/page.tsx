import type { Metadata } from "next"
import { LocalCityPage } from "@/components/local/LocalCityPage"
import { LocalPageSEO } from "@/components/seo/LocalPageSEO"
import type { CityConfig } from "@/components/local/LocalCityPage"

const config: CityConfig = {
    city: "Colombes",
    cityLabel: "Colombes",
    slug: "colombes",
    heroTitle: "Location utilitaire à Colombes — 24h/24",
    heroSubtitle: "Louez un utilitaire à Colombes en quelques minutes. Accès autonome via Getaround, assurance AXA tous risques incluse.",
    description: "Besoin d'un utilitaire pour un déménagement ou transporter des objets encombrants ? Next2You met à votre disposition des véhicules pratiques et équipés à Colombes.",
    getaroundUrl: "https://fr.getaround.com/location-voiture/colombes",
    postalCode: "92700",
    lat: 48.9229,
    lng: 2.2542,
    highlights: [
        "Véhicules disponibles 24h/24",
        "Proche des grands axes",
        "Assurance tous risques AXA incluse",
        "Place de parking réservée",
        "Diable et sangles fournis",
    ],
    faq: [
        {
            question: "Où sont situés les véhicules à Colombes ?",
            answer: "Nos véhicules sont idéalement placés à Colombes, pour un accès rapide. L'emplacement exact est indiqué sur l'application Getaround.",
        },
        {
            question: "Puis-je louer un utilitaire à Colombes pour un déménagement ?",
            answer: "Oui, nos véhicules sont équipés (diable, sangles, etc.) et parfaitement adaptés pour transporter des meubles ou vider un appartement.",
        },
        {
            question: "Y a-t-il une place de parking réservée ?",
            answer: "Oui, nos véhicules à Colombes disposent d'une place attitrée pour faciliter votre restitution.",
        },
        {
            question: "Comment déverrouiller le véhicule ?",
            answer: "Grâce à Getaround Connect, le véhicule s'ouvre avec votre smartphone. Aucune remise de clé physique, vous êtes 100% autonome.",
        },
    ],
}

const siteUrl = "https://www.next2you-mobility.com"

export const metadata: Metadata = {
    title: "Location utilitaire Colombes 24h/24 | Next2You",
    description: "Louez un utilitaire à Colombes 24h/24. Accès autonome, assurance incluse. Idéal déménagement, transport de meubles et Ikea.",
    keywords: ["location utilitaire Colombes", "louer utilitaire Colombes", "camionnette déménagement Colombes", "Getaround Colombes", "utilitaire 92700"],
    alternates: { canonical: `${siteUrl}/location-utilitaire-colombes` },
    openGraph: {
        title: "Location utilitaire Colombes 24h/24",
        description: "Utilitaires disponibles à Colombes. Accès autonome, assurance incluse.",
        url: `${siteUrl}/location-utilitaire-colombes`,
        images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Location utilitaire Colombes" }],
    },
}

export default function ColombesPage() {
    return (
        <>
            <LocalPageSEO config={config} />
            <LocalCityPage config={config} />
        </>
    )
}
