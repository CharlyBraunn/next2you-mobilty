import { faqData } from "@/lib/data/faq";
import { vehicles } from "@/lib/data/vehicles";

const siteUrl = "https://www.next2you-mobility.com";

export function StructuredData() {
    const localBusiness = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": siteUrl,
        name: "Next2You Mobility",
        description:
            "Location de véhicules utilitaires et citadines en libre-service 24h/24 via Getaround à Bois-Colombes, Clichy et Paris.",
        url: siteUrl,
        telephone: "",
        email: "",
        image: `${siteUrl}/images/og-image.jpg`,
        logo: `${siteUrl}/icon.png`,
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Credit Card, Debit Card",
        openingHours: "Mo-Su 00:00-24:00",
        areaServed: [
            { "@type": "City", name: "Bois-Colombes" },
            { "@type": "City", name: "Clichy" },
            { "@type": "City", name: "Paris" },
            { "@type": "AdministrativeArea", name: "Île-de-France" },
        ],
        address: {
            "@type": "PostalAddress",
            addressLocality: "Bois-Colombes",
            addressRegion: "Hauts-de-Seine",
            postalCode: "92270",
            addressCountry: "FR",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 48.9166,
            longitude: 2.3333,
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            bestRating: "5",
            ratingCount: "500",
            reviewCount: "500",
        },
        sameAs: [],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqData.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };

    const vehicleList = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Flotte Next2You Mobility",
        description: "Véhicules utilitaires et citadines disponibles à la location en Île-de-France",
        numberOfItems: vehicles.length,
        itemListElement: vehicles.map((v, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
                "@type": "Product",
                name: v.name,
                description: v.description,
                image: `${siteUrl}${v.image}`,
                brand: { "@type": "Brand", name: "Renault" },
                offers: {
                    "@type": "Offer",
                    seller: { "@type": "Organization", name: "Next2You Mobility" },
                    availability: "https://schema.org/InStock",
                    priceCurrency: "EUR",
                    areaServed: v.location,
                },
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleList) }}
            />
        </>
    );
}
