export interface Review {
    name: string;
    role: string;
    content: string;
    rating: number;
    avatar: string;
    vehicle: string;
}

export const reviews: Review[] = [
    {
        name: "Marc A.",
        role: "Déménagement",
        content: "Véhicule conforme à la description. Le parking est vraiment pratique, surtout à Bois-Colombes. Le propriétaire est très réactif et disponible.",
        rating: 5,
        avatar: "/images/avatars/avatar-1.png",
        vehicle: "Renault Trafic",
    },
    {
        name: "Sophie R.",
        role: "Transport",
        content: "Propriétaire disponible et sympathique qui a su trouver une solution en direct concernant un problème lié au parking. Je recommande vivement !",
        rating: 5,
        avatar: "/images/avatars/avatar-2.png",
        vehicle: "Renault Trafic",
    },
    {
        name: "Julie B.",
        role: "Trajet urbain",
        content: "Tout s'est très bien passé ! La voiture est facile à prendre en main et très propre. Idéal pour circuler en ville sans stress.",
        rating: 5,
        avatar: "/images/avatars/avatar-3.png",
        vehicle: "Nissan Micra",
    },
    {
        name: "Nicolas P.",
        role: "Week-end",
        content: "Véhicule très bien entretenu. Le kit de nettoyage et le support téléphone sont des petits plus très appréciables. Expérience parfaite.",
        rating: 5,
        avatar: "/images/avatars/avatar-1.png",
        vehicle: "Renault Twingo III",
    },
    {
        name: "Thomas L.",
        role: "Petit déménagement",
        content: "Kangoo très pratique. Le diable et les tendeurs fournis ont sauvé mon après-midi ! Communication au top avec Next2You.",
        rating: 5,
        avatar: "/images/avatars/avatar-2.png",
        vehicle: "Renault Kangoo Express",
    },
    {
        name: "Inès M.",
        role: "Location pro",
        content: "Service impeccable. La place de parking réservée est un vrai luxe en région parisienne. Je relouerai sans hésiter.",
        rating: 5,
        avatar: "/images/avatars/avatar-3.png",
        vehicle: "Renault Kangoo Express",
    },
];
