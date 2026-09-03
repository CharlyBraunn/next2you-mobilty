import type { Metadata } from "next"
import { LocalCityPage } from "@/components/local/LocalCityPage"
import { LocalPageSEO } from "@/components/seo/LocalPageSEO"
import type { CityConfig } from "@/components/local/LocalCityPage"

const config: CityConfig = {
    city: "Neuilly-sur-Seine",
    cityLabel: "Neuilly-sur-Seine",
    slug: "neuilly-sur-seine",
    heroTitle: "Location utilitaire à Neuilly-sur-Seine — 24h/24",
    heroSubtitle: "Louez un utilitaire à Neuilly-sur-Seine en toute simplicité. Accès autonome via Getaround, assurance AXA tous risques incluse.",
    description: "Découvrez notre flotte de véhicules utilitaires à Neuilly-sur-Seine. Idéal pour vos achats volumineux, vos déménagements, ou pour des besoins ponctuels.",
    getaroundUrl: "https://fr.getaround.com/location-voiture/neuilly-sur-seine",
    postalCode: "92200",
    lat: 48.8833,
    lng: 2.2667,
    highlights: [
        "Véhicules utilitaires 24h/24",
        "Emplacement premium à Neuilly-sur-Seine",
        "Assurance tous risques AXA incluse",
        "Diable et couverture fournis",
        "Ouverture via smartphone",
    ],
    faq: [
        {
            question: "Où se trouve l'utilitaire à Neuilly-sur-Seine ?",
            answer: "Nos utilitaires sont situés à des endroits stratégiques dans Neuilly-sur-Seine pour vous offrir la meilleure accessibilité. L'adresse exacte sera disponible sur Getaround après réservation.",
        },
        {
            question: "L'assurance est-elle incluse pour la location à Neuilly-sur-Seine ?",
            answer: "Oui, tous nos véhicules sont couverts par une assurance tous risques AXA via la plateforme Getaround, pour votre tranquillité d'esprit.",
        },
        {
            question: "Le matériel de déménagement est-il fourni ?",
            answer: "Absolument. Nous fournissons gratuitement diable, sangles, et couvertures de déménagement dans nos utilitaires pour faciliter votre transport.",
        },
    ],
}

const siteUrl = "https://www.next2you-mobility.com"

export const metadata: Metadata = {
    title: "Location utilitaire Neuilly-sur-Seine 24h/24 | Next2You",
    description: "Location d'utilitaires à Neuilly-sur-Seine. Ouverts 24h/24 grâce à l'application Getaround. Assurance AXA incluse. Parfait pour un déménagement.",
    keywords: ["location utilitaire Neuilly-sur-Seine", "louer utilitaire Neuilly", "camionnette déménagement Neuilly-sur-Seine", "utilitaire 92200", "Getaround Neuilly-sur-Seine"],
    alternates: { canonical: `${siteUrl}/location-utilitaire-neuilly-sur-seine` },
    openGraph: {
        title: "Location utilitaire Neuilly-sur-Seine 24h/24",
        description: "Location d'utilitaires 24h/24 à Neuilly-sur-Seine. Accès autonome et matériel inclus.",
        url: `${siteUrl}/location-utilitaire-neuilly-sur-seine`,
        images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Location utilitaire Neuilly-sur-Seine" }],
    },
}

export default function NeuillySurSeinePage() {
    return (
        <>
            <LocalPageSEO config={config} />
            <LocalCityPage config={config} />
        </>
    )
}
