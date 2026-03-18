export interface FAQItem {
    question: string;
    answer: string;
}

export const faqData: FAQItem[] = [
    {
        question: "Comment se passe la gestion du carburant ?",
        answer: "Le véhicule doit être restitué avec le même niveau de carburant qu’au départ. Une photo de la jauge vous est demandée au début et à la fin de la location via l’application. Si le niveau est inférieur, un ajustement automatique sera appliqué ; s'il est supérieur, vous serez remboursé. En cas d'imprécision, n'hésitez pas à nous contacter pour trouver une solution.",
    },
    {
        question: "Que faire en cas de retard pour la restitution ?",
        answer: "Tout dépassement de la durée de location entraîne des frais de temps supplémentaire et des pénalités de retard. Si vous avez besoin de plus de temps, nous vous conseillons vivement de prolonger votre location directement via l'application Getaround avant la fin prévue, sous réserve qu'aucune autre réservation ne démarre juste après.",
    },
    {
        question: "Quelles sont les attentes en matière de propreté ?",
        answer: "Le véhicule doit être rendu dans un état de propreté correct pour le locataire suivant. Des frais peuvent être appliqués en cas de saleté excessive, de déchets laissés à bord ou d’odeurs persistantes (tabac, animaux non autorisés).",
    },
    {
        question: "Est-il permis de fumer dans le véhicule ?",
        answer: "Non, tous nos véhicules sont strictement non-fumeurs. Des frais de nettoyage et de désodorisation importants seront appliqués en cas de non-respect de cette règle.",
    },
    {
        question: "Les animaux sont-ils autorisés ?",
        answer: "Les animaux ne sont pas autorisés dans nos véhicules, sauf accord préalable spécifique de notre part. Des frais de nettoyage seront systématiquement appliqués si des poils ou des dégradations sont constatés.",
    },
    {
        question: "Où dois-je restituer le véhicule ?",
        answer: "Le véhicule doit être garé à l'emplacement indiqué dans les consignes de l'application, généralement dans un rayon de 400m autour du point de départ, ou sur sa place attitrée s'il en possède une. Une mauvaise restitution peut entraîner des frais de rapatriement et des frais supplémentaires selon la distance.",
    },
    {
        question: "Que faire en cas de panne ?",
        answer: "En cas de problème technique, vous bénéficiez de l'assistance AXA. Contactez immédiatement l'assistance via l'application, tenez notre équipe informée et ne tentez aucune réparation par vous-même. Une assistance dédiée vous guidera dans les étapes à suivre.",
    },
    {
        question: "Quelle est la procédure en cas d'accident ?",
        answer: "En cas d'accident : 1. Sécurisez les lieux. 2. Remplissez scrupuleusement le constat amiable. 3. Prenez des photos globales de l'incident. 4. Contactez l'assistance via l'application. 5. Déclarez le sinistre sur Getaround. Tout incident, même mineur, doit impérativement nous être signalé.",
    },
    {
        question: "Y a-t-il une caution à prévoir ?",
        answer: "Aucune somme n'est débitée à l'avance au titre de la caution. Une simple empreinte bancaire temporaire est réalisée au moment de la réservation. Elle est automatiquement libérée après la location si aucune dégradation ou manquement n'est constaté.",
    },
    {
        question: "Quels documents sont nécessaires pour louer ?",
        answer: "Vous devez être titulaire d'un permis de conduire valide accepté par Getaround, respecter les conditions d'âge et d'expérience (qui varient selon le modèle de véhicule) et disposer d'un moyen de paiement valide à votre nom.",
    },
    {
        question: "Puis-je prolonger ma location en cours ?",
        answer: "Oui, la prolongation est possible tant que le véhicule reste disponible sur la durée souhaitée. Vous pouvez effectuer cette modification directement depuis l'application Getaround en quelques clics.",
    },
    {
        question: "J'ai oublié un objet dans le véhicule, que faire ?",
        answer: "Si vous avez oublié un objet, contactez-nous au plus vite via la messagerie de l'application. Nous ferons notre maximum pour vous aider à le récupérer, bien que nous ne puissions garantir la conservation ou la sécurité des objets oubliés.",
    },
    {
        question: "Pourquoi ces règles sont-elles importantes ?",
        answer: "Le respect de ces consignes nous permet de garantir un service fiable et sécurisé pour tous nos clients, de maintenir nos véhicules dans un état irréprochable et de vous proposer des tarifs compétitifs tout au long de l'année.",
    },
];
