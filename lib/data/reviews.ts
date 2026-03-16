export interface Review {
    name: string;
    role: string;
    content: string;
    rating: number;
    vehicle: string;
    date: string;
}

export const reviews: Review[] = [
    {
        name: "Marc A.",
        role: "Déménagement",
        content: "Véhicule conforme à la description. Le parking est vraiment pratique, surtout à Bois-Colombes. Le propriétaire est très réactif et disponible.",
        rating: 5,
        vehicle: "Renault Trafic",
        date: "Mars 2025",
    },
    {
        name: "Sophie R.",
        role: "Transport",
        content: "Propriétaire disponible et sympathique qui a su trouver une solution en direct concernant un problème lié au parking. Je recommande vivement !",
        rating: 5,
        vehicle: "Renault Trafic",
        date: "Mars 2025",
    },
    {
        name: "Julie B.",
        role: "Trajet urbain",
        content: "Tout s'est très bien passé ! La voiture est facile à prendre en main et très propre. Idéal pour circuler en ville sans stress.",
        rating: 5,
        vehicle: "Nissan Micra",
        date: "Février 2025",
    },
    {
        name: "Nicolas P.",
        role: "Week-end",
        content: "Véhicule très bien entretenu. Le kit de nettoyage et le support téléphone sont des petits plus très appréciables. Expérience parfaite.",
        rating: 5,
        vehicle: "Renault Twingo III",
        date: "Février 2025",
    },
    {
        name: "Thomas L.",
        role: "Petit déménagement",
        content: "Kangoo très pratique. Le diable et les tendeurs fournis ont sauvé mon après-midi ! Communication au top avec Next2You.",
        rating: 5,
        vehicle: "Renault Kangoo Express",
        date: "Janvier 2025",
    },
    {
        name: "Inès M.",
        role: "Location pro",
        content: "Service impeccable. La place de parking réservée est un vrai luxe en région parisienne. Je relouerai sans hésiter.",
        rating: 5,
        vehicle: "Renault Kangoo Express",
        date: "Janvier 2025",
    },
    {
        name: "Antoine G.",
        role: "Déménagement",
        content: "Ras merci pour la location. Tout s'est passé facilement. Un petit plus : le diable et la couverture dans le véhicule qui nous ont bien aidés.",
        rating: 5,
        vehicle: "Renault Kangoo Express",
        date: "Décembre 2024",
    },
    {
        name: "Claire D.",
        role: "Transport meubles",
        content: "Très bien - propriétaire disponible et réactif. A recommander. La camionnette fonctionne bien, que ce soit sur routes droites que sur routes sinueuses.",
        rating: 5,
        vehicle: "Renault Kangoo Express",
        date: "Décembre 2024",
    },
    {
        name: "Kevin M.",
        role: "Utilitaire",
        content: "La voiture fonctionne très bien. Le lieu de récupération est pratique. Elle est très propre. Le support de téléphone est pratique.",
        rating: 5,
        vehicle: "Renault Kangoo Express",
        date: "Novembre 2024",
    },
    {
        name: "Marie-Laure H.",
        role: "Sortie ville",
        content: "Tout s'est bien passé maintenant que je connais mieux la voiture ! Très maniable et agréable à conduire.",
        rating: 5,
        vehicle: "Nissan Micra",
        date: "Novembre 2024",
    },
    {
        name: "David S.",
        role: "Transport",
        content: "Véhicule propre et conforme. Propriétaire ponctuel et arrangeant pour le retour. Rien à redire !",
        rating: 5,
        vehicle: "Renault Trafic",
        date: "Octobre 2024",
    },
    {
        name: "Amélie V.",
        role: "Déménagement étudiant",
        content: "Super expérience pour mon premier déménagement seule. Le petit Kangoo se gare partout et loge énormément de choses.",
        rating: 5,
        vehicle: "Renault Kangoo Express",
        date: "Octobre 2024",
    },
];
