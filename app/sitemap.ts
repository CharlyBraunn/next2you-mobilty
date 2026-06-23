import type { MetadataRoute } from "next";

const siteUrl = "https://www.next2you-mobility.com";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${siteUrl}/cgu`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${siteUrl}/mentions-legales`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${siteUrl}/politique-de-confidentialite`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];
}
