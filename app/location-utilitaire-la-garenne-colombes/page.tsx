import type { Metadata } from "next"
import { LocalCityPage } from "@/components/local/LocalCityPage"
import { LocalPageSEO } from "@/components/seo/LocalPageSEO"
import type { CityConfig } from "@/components/local/LocalCityPage"

const config: CityConfig = {
    city: "La Garenne-Colombes",
    cityLabel: "La Garenne-Colombes",
    slug: "la-garenne-colombes",
    heroTitle: "Location utilitaire à La Garenne-Colombes — 24h/24",
    heroSubtitle: "Besoin de volume ? Louez notre grand fourgon Peugeot Boxer 10m³ à La Garenne-Colombes. Accès autonome 100% mobile et assurance AXA incluse.",
    description: "Avec notre Peugeot Boxer 10m³ stationné en parking souterrain à La Garenne-Colombes, réalisez vos plus grands déménagements et transports de meubles sans difficulté.",
    getaroundUrl: "https://fr.getaround.com/location-voiture/la-garenne-colombes/peugeot-boxer-1959495",
    postalCode: "92250",
    lat: 48.9056,
    lng: 2.2448,
    highlights: [
        "Fourgon 10m³ disponible",
        "Stationnement sécurisé en sous-sol",
        "Idéal grand déménagement",
        "Diable et sangles fournis",
        "Ouverture via smartphone 24h/24",
    ],
    faq: [
        {
            question: "Quel véhicule proposez-vous à La Garenne-Colombes ?",
            answer: "Nous mettons à disposition un grand fourgon Peugeot Boxer d'un volume de 10m³, idéal pour les déménagements importants ou le transport de matériel volumineux.",
        },
        {
            question: "Le parking est-il facile d'accès ?",
            answer: "Le véhicule est stationné dans un parking souterrain sécurisé à La Garenne-Colombes. Il dispose de sa place réservée. Attention à bien vérifier la hauteur de 2,5m du véhicule avant toute manœuvre.",
        },
        {
            question: "Fournissez-vous des équipements pour le transport ?",
            answer: "Oui, le fourgon est équipé gratuitement d'un diable, de sangles, d'un support de téléphone et d'un chargeur.",
        },
    ],
}

const siteUrl = "https://www.next2you-mobility.com"

export const metadata: Metadata = {
    title: "Location utilitaire La Garenne-Colombes | Peugeot Boxer 10m³",
    description: "Louez un fourgon utilitaire 10m³ à La Garenne-Colombes 24h/24. Déménagement facile avec Getaround Connect. Assurance AXA incluse.",
    keywords: ["location utilitaire La Garenne-Colombes", "louer fourgon La Garenne-Colombes", "camion déménagement La Garenne-Colombes", "utilitaire 10m3", "utilitaire 92250"],
    alternates: { canonical: `${siteUrl}/location-utilitaire-la-garenne-colombes` },
    openGraph: {
        title: "Location utilitaire La Garenne-Colombes | Fourgon 10m³",
        description: "Peugeot Boxer 10m³ disponible 24h/24 à La Garenne-Colombes.",
        url: `${siteUrl}/location-utilitaire-la-garenne-colombes`,
        images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Location utilitaire La Garenne-Colombes" }],
    },
}

export default function LaGarenneColombesPage() {
    return (
        <>
            <LocalPageSEO config={config} />
            <LocalCityPage config={config} />
        </>
    )
}
