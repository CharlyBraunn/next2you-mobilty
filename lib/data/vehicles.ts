export interface Vehicle {
    name: string;
    location: string;
    image: string;
    images?: string[];
    volume: string;
    fuel: string;
    transmission: string;
    description: string;
    features: string[];
    link: string;
    category: "utilitaire" | "citadine";
    details?: string;
}

export const vehicles: Vehicle[] = [
    {
        name: "Renault Kangoo Express",
        location: "Paris 18ème",
        image: "/images/fleet/kangoo-bleu-1.jpg",
        images: ["/images/fleet/kangoo-bleu-1.jpg", "/images/fleet/kangoo-bleu-2.jpg", "/images/fleet/kangoo-bleu-3.jpg", "/images/fleet/kangoo-bleu-4.jpg", "/images/fleet/kangoo-bleu-5.jpg"],
        volume: "3m³",
        fuel: "Diesel",
        transmission: "Manuelle",
        description: "Le compagnon idéal pour vos transports en plein cœur de Paris.",
        details: "Situé au cœur du 18ème (Mairie). Bluetooth, Régulateur & Limiteur de vitesse. Accessoires fournis : diable de transport, tendeurs, couverture de déménagement, support de téléphone, câble iPhone Lightning.",
        features: ["Bluetooth", "Diable", "Régulateur", "Climatisation"],
        link: "https://fr.getaround.com/location-voiture/paris/renault-kangoo-express-1302570",
        category: "utilitaire",
    },
    {
        name: "Renault Kangoo Express",
        location: "Clichy",
        image: "/images/fleet/kangoo-clichy-1.jpg",
        images: ["/images/fleet/kangoo-clichy-1.jpg", "/images/fleet/kangoo-clichy-2.jpg", "/images/fleet/kangoo-clichy-3.jpg", "/images/fleet/kangoo-clichy-4.jpg", "/images/fleet/kangoo-clichy-5.jpg"],
        volume: "3m³",
        fuel: "Diesel",
        transmission: "Manuelle",
        description: "Utilitaire compact parfait pour la ville et petits déménagements.",
        details: "Disponible 24/7 via Getaround Connect. Idéalement situé à Clichy proche périphériques. Siège passager escamotable pour plancher plat. Accessoires fournis : diable, tendeurs, couverture de déménagement, support de téléphone, câble iPhone Lightning.",
        features: ["Bluetooth", "Diable inclus"],
        link: "https://fr.getaround.com/location-voiture/clichy/renault-kangoo-express-1411186",
        category: "utilitaire",
    },
    {
        name: "Renault Kangoo Express",
        location: "Bois-Colombes",
        image: "/images/fleet/kangoo-blanc-1.jpg",
        images: ["/images/fleet/kangoo-blanc-1.jpg", "/images/fleet/kangoo-blanc-2.jpg", "/images/fleet/kangoo-blanc-3.jpg"],
        volume: "3m³",
        fuel: "Diesel",
        transmission: "Manuelle",
        description: "Kangoo 90cv polyvalent et suréquipé pour tous vos volumes.",
        details: "Disponible 24/7 (Connect) à 2min de la gare de Bois-Colombes. Place réservée tout au long de la location. État mécanique irréprochable. Accessoires fournis : diable, tendeurs, couverture de déménagement, support de téléphone, câble iPhone Lightning.",
        features: ["Régulateur", "Place réservée", "Climatisation"],
        link: "https://fr.getaround.com/location-voiture/bois-colombes/renault-kangoo-express-1656292",
        category: "utilitaire",
    },
    {
        name: "Renault Kangoo Express",
        location: "Courbevoie",
        image: "/images/fleet/kangoo-courbevoie-2.jpg",
        images: ["/images/fleet/kangoo-courbevoie-2.jpg", "/images/fleet/kangoo-courbevoie-1.jpg", "/images/fleet/kangoo-courbevoie-3.jpg"],
        volume: "3m³",
        fuel: "Diesel",
        transmission: "Manuelle",
        description: "Fiable et pratique, idéal pour vos besoins au centre de Courbevoie.",
        details: "Disponible 24/7 (Connect) proche gare SNCF. Très économique (~5L/100km). Siège passager escamotable (plancher plat). Accessoires fournis : diable, tendeurs, couverture de déménagement, support de téléphone, câble iPhone Lightning. (Vitesse bridée à 110km/h).",
        features: ["Proche Gare", "Diable inclus"],
        link: "https://fr.getaround.com/location-voiture/courbevoie/renault-kangoo-express-1624627",
        category: "utilitaire",
    },
    {
        name: "Renault Trafic",
        location: "Bois-Colombes",
        image: "/images/fleet/trafic-6m3-1.jpg",
        images: ["/images/fleet/trafic-6m3-1.jpg", "/images/fleet/trafic-6m3-2.jpg", "/images/fleet/trafic-6m3-3.jpg", "/images/fleet/trafic-6m3-4.jpg"],
        volume: "6m³",
        fuel: "Diesel",
        transmission: "Manuelle",
        description: "Volume de 6m³ idéal pour vos déménagements moyens et meubles volumineux.",
        details: "Modèle récent (2019) Grand Confort. Hauteur < 2m (accès parkings). Longueur utile 2,53m. Situé sur place réservée tout au long de la location à Bois-Colombes Mairie. Kit de nettoyage complet. Accessoires fournis : diable (70kg), tendeurs, couverture de déménagement, support de téléphone, câble iPhone Lightning.",
        features: ["6m³ (40 cartons)", "Hauteur < 2m", "Place réservée", "Diable", "Régulateur"],
        link: "https://fr.getaround.com/location-voiture/bois-colombes/renault-trafic-1763253",
        category: "utilitaire",
    },
    {
        name: "Renault Twingo III",
        location: "Bois-Colombes",
        image: "/images/fleet/twingo-1.jpg",
        images: ["/images/fleet/twingo-1.jpg", "/images/fleet/twingo-2.jpg", "/images/fleet/twingo-3.jpg"],
        volume: "Citadine",
        fuel: "Essence",
        transmission: "Manuelle",
        description: "L'agilité urbaine par excellence, ultra maniable et moderne.",
        details: "Disponible 24/7 (Connect) proche gare Bois-Colombes. Format compact idéal pour Paris. Compatible ISOFIX pour les familles. Accessoires fournis : support de téléphone, câble iPhone Lightning.",
        features: ["Ultra Maniable", "ISOFIX", "Bluetooth"],
        link: "https://fr.getaround.com/location-voiture/bois-colombes/renault-twingo-iii-1710998",
        category: "citadine",
    },
    {
        name: "Nissan Micra",
        location: "Bois-Colombes",
        image: "/images/fleet/micra-1.jpg",
        images: ["/images/fleet/micra-1.jpg", "/images/fleet/micra-2.jpg", "/images/fleet/micra-3.jpg"],
        volume: "Citadine",
        fuel: "Essence",
        transmission: "Automatique",
        description: "Citadine agile en boîte automatique, confort maximal en ville.",
        details: "Disponible 24/7 (Connect) à 2min de la gare de Bois-Colombes. État quasi neuf. Kit de nettoyage complet. Accessoires fournis : support de téléphone, câble iPhone Lightning.",
        features: ["Automatique", "Bluetooth", "Régulateur", "Climatisation"],
        link: "https://fr.getaround.com/location-voiture/bois-colombes/nissan-micra-1424334",
        category: "citadine",
    },
];
