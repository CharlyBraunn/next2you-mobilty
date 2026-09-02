import type { CityConfig } from "@/components/local/LocalCityPage"

interface LocalPageSEOProps {
    config: CityConfig
}

const siteUrl = "https://www.next2you-mobility.com"

export function LocalPageSEO({ config }: LocalPageSEOProps) {
    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Accueil",
                item: siteUrl,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: `Location utilitaire ${config.cityLabel}`,
                item: `${siteUrl}/location-utilitaire-${config.slug}`,
            },
        ],
    }

    const localBusiness = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/location-utilitaire-${config.slug}/#business`,
        name: `Next2You Mobility — ${config.cityLabel}`,
        description: config.description,
        url: `${siteUrl}/location-utilitaire-${config.slug}`,
        image: `${siteUrl}/images/og-image.jpg`,
        priceRange: "€€",
        openingHours: "Mo-Su 00:00-24:00",
        address: {
            "@type": "PostalAddress",
            addressLocality: config.city,
            addressRegion: config.postalCode.startsWith("75") ? "Île-de-France" : "Hauts-de-Seine",
            postalCode: config.postalCode,
            addressCountry: "FR",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: config.lat,
            longitude: config.lng,
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            bestRating: "5",
            ratingCount: "622",
            reviewCount: "622",
        },
        areaServed: {
            "@type": "City",
            name: config.city,
        },
        parentOrganization: {
            "@type": "Organization",
            "@id": `${siteUrl}/#business`,
            name: "Next2You Mobility",
        },
        hasMap: `https://www.google.com/maps/search/Next2You+Mobility+${encodeURIComponent(config.city)}`,
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: config.faq.map(item => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    )
}
