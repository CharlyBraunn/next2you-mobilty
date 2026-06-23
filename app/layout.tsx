import type { Metadata } from "next";
import { Epilogue, Archivo } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/seo/StructuredData";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.next2you-mobility.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Next2You — Location d'utilitaires 24h/24 à Bois-Colombes, Clichy & Paris",
    template: "%s | Next2You Mobility",
  },
  description:
    "Louez un utilitaire ou une citadine en bas de chez vous. Accès 100% autonome via Getaround, assurance AXA tous risques incluse. Disponible à Bois-Colombes, Clichy, Paris 18ème. Réservez en quelques minutes.",
  keywords: [
    "location utilitaire",
    "location voiture",
    "Bois-Colombes",
    "Clichy",
    "Paris 18",
    "Kangoo",
    "Trafic",
    "Getaround",
    "location sans agence",
    "utilitaire pas cher",
    "déménagement",
    "location 24h",
  ],
  authors: [{ name: "Next2You Mobility" }],
  creator: "Next2You Mobility",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Next2You Mobility",
    title: "Next2You — Location d'utilitaires 24h/24 à Bois-Colombes, Clichy & Paris",
    description:
      "Louez un utilitaire ou une citadine en bas de chez vous. Accès autonome via Getaround, assurance AXA incluse. Disponible à Bois-Colombes, Clichy et Paris.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Next2You — Location de véhicules utilitaires en Île-de-France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next2You — Location d'utilitaires 24h/24",
    description:
      "Louez un Kangoo, Trafic ou citadine près de chez vous. Accès autonome, assurance AXA incluse.",
    images: ["/images/og-image.jpg"],
  },
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${epilogue.variable} ${archivo.variable} antialiased flex flex-col min-h-screen font-sans`}
      >
        <StructuredData />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
