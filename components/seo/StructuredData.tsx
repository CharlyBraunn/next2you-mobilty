import { faqData } from "@/lib/data/faq";
import { vehicles } from "@/lib/data/vehicles";

const siteUrl = "https://www.next2you-mobility.com";

export function StructuredData() {
    const localBusiness = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#business`,
        name: "Next2You Mobility",
        description:
            "Location de véhicules utilitaires et citadines en libre-service 24h/24 via Getaround à Bois-Colombes, Clichy et Paris.",
        url: siteUrl,
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
            ratingCount: "622",
            reviewCount: "622",
        },
        sameAs: [
            "https://fr.getaround.com/users/3551826",
            "https://www.google.com/maps/search/Next2You+Mobility+Bois-Colombes",
        ],
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
                brand: { "@type": "Brand", name: v.name.split(" ")[0] },
                offers: {
                    "@type": "Offer",
                    url: v.link,
                    seller: { "@type": "Organization", name: "Next2You Mobility" },
                    availability: "https://schema.org/InStock",
                    priceCurrency: "EUR",
                    areaServed: v.location,
                },
            },
        })),
    };

    const howTo = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Comment louer un véhicule avec Next2You Mobility",
        description: "Réservez et déverrouillez votre véhicule utilitaire ou citadine en 4 étapes via l'application Getaround.",
        totalTime: "PT5M",
        step: [
            {
                "@type": "HowToStep",
                position: 1,
                name: "Réservez",
                text: "Choisissez le véhicule et la durée de location sur l'application Getaround.",
                url: `${siteUrl}/#comment-ca-marche`,
            },
            {
                "@type": "HowToStep",
                position: 2,
                name: "Déverrouillez",
                text: "Utilisez votre smartphone pour géolocaliser et ouvrir le véhicule.",
                url: `${siteUrl}/#comment-ca-marche`,
            },
            {
                "@type": "HowToStep",
                position: 3,
                name: "Roulez",
                text: "Faites votre trajet en toute sérénité, l'assurance tous risques AXA est incluse.",
                url: `${siteUrl}/#comment-ca-marche`,
            },
            {
                "@type": "HowToStep",
                position: 4,
                name: "Restituez",
                text: "Restituez le véhicule dans le périmètre initial en respectant les instructions communiquées.",
                url: `${siteUrl}/#comment-ca-marche`,
            },
        ],
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
            />
        </>
    );
}
