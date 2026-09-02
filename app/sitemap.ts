import type { MetadataRoute } from "next";

const siteUrl = "https://www.next2you-mobility.com";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteUrl,
            lastModified: new Date("2026-09-02"),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${siteUrl}/location-utilitaire-bois-colombes`,
            lastModified: new Date("2026-06-24"),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/location-utilitaire-clichy`,
            lastModified: new Date("2026-06-24"),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/location-utilitaire-paris-18`,
            lastModified: new Date("2026-06-24"),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/cgu`,
            lastModified: new Date("2026-01-01"),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${siteUrl}/mentions-legales`,
            lastModified: new Date("2026-01-01"),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${siteUrl}/politique-de-confidentialite`,
            lastModified: new Date("2026-01-01"),
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];
}
