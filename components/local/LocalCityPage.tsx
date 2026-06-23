"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Star, Fuel, Settings, CheckCircle, Clock, Shield, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { vehicles } from "@/lib/data/vehicles"
import { useState } from "react"

export interface CityConfig {
    city: string
    cityLabel: string
    slug: string
    heroTitle: string
    heroSubtitle: string
    description: string
    getaroundUrl: string
    postalCode: string
    lat: number
    lng: number
    highlights: string[]
    faq: { question: string; answer: string }[]
}

interface LocalCityPageProps {
    config: CityConfig
}

const stats = [
    { value: "5/5", label: "Note moyenne" },
    { value: "548+", label: "Avis vérifiés" },
    { value: "1500+", label: "Locations réalisées" },
    { value: "24h/24", label: "Disponibilité" },
]

export function LocalCityPage({ config }: LocalCityPageProps) {
    const cityVehicles = vehicles.filter(v => v.location === config.city)
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    return (
        <div className="flex flex-col">

            {/* ── HERO ── */}
            <section className="relative overflow-hidden bg-[#1451DF] pt-32 pb-24">
                <div className="absolute inset-0 bg-[url('/images/og-image.jpg')] bg-cover bg-center opacity-10" />
                <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-white opacity-10 blur-[100px]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-6">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-blue-200 text-sm">
                            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                            <span>/</span>
                            <span className="text-white font-medium">{config.cityLabel}</span>
                        </div>

                        {/* Pill */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 backdrop-blur-sm">
                            <MapPin className="h-4 w-4 text-white" />
                            <span className="text-sm font-medium text-white">{config.cityLabel}</span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                            {config.heroTitle}
                        </h1>

                        <p className="max-w-2xl text-lg text-blue-100 md:text-xl">
                            {config.heroSubtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full bg-white text-[var(--color-primary)] hover:bg-gray-100 font-bold"
                            >
                                <a href={config.getaroundUrl} target="_blank" rel="noopener noreferrer">
                                    Voir les véhicules disponibles <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="rounded-full bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white"
                            >
                                <Link href="/">
                                    Toute la flotte
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── STATS ── */}
            <section className="bg-white border-b border-gray-100 py-6">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {stats.map((s, i) => (
                            <div key={i}>
                                <div className="text-2xl font-bold text-[var(--color-primary)]">{s.value}</div>
                                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── VEHICLES ── */}
            {cityVehicles.length > 0 && (
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <div className="mb-4 inline-flex items-center rounded-full bg-[var(--color-primary)] px-5 py-1.5 text-sm font-medium text-white shadow-md shadow-blue-500/20">
                                Nos véhicules à {config.cityLabel}
                            </div>
                            <h2 className="text-3xl font-bold text-[var(--color-secondary)] mt-4">
                                {cityVehicles.length} véhicule{cityVehicles.length > 1 ? "s" : ""} disponible{cityVehicles.length > 1 ? "s" : ""} près de chez vous
                            </h2>
                            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
                                Accès 24h/24 via l&apos;application Getaround. Assurance AXA tous risques incluse.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                            {cityVehicles.map((vehicle, i) => (
                                <a
                                    key={i}
                                    href={vehicle.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-[var(--color-primary)] hover:shadow-xl transition-all flex flex-col"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                        <Image
                                            src={vehicle.image}
                                            alt={`${vehicle.name} à ${config.cityLabel}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                        <div className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-[var(--color-secondary)] shadow-sm">
                                            {vehicle.volume}
                                        </div>
                                    </div>
                                    <div className="p-5 flex flex-col flex-1">
                                        <h3 className="text-lg font-bold text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors">
                                            {vehicle.name}
                                        </h3>
                                        <div className="flex items-center gap-1 text-sm text-gray-500 mt-1 mb-3">
                                            <MapPin className="h-3.5 w-3.5 text-red-500" />
                                            {vehicle.location}
                                        </div>
                                        <div className="flex gap-4 text-sm text-gray-600 mb-4">
                                            <div className="flex items-center gap-1.5">
                                                <Fuel className="h-4 w-4 text-[var(--color-primary)]" />
                                                {vehicle.fuel}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Settings className="h-4 w-4 text-[var(--color-primary)]" />
                                                {vehicle.transmission}
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-1">
                                            {vehicle.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {vehicle.features.slice(0, 3).map((f, j) => (
                                                <span key={j} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-md font-medium ring-1 ring-inset ring-blue-700/10">
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-auto">
                                            <span className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-sm font-bold text-white group-hover:bg-blue-700 transition-colors">
                                                Réserver sur Getaround <ArrowRight className="h-4 w-4" />
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── WHY NEXT2YOU ── */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[var(--color-secondary)]">
                            Pourquoi choisir Next2You à {config.cityLabel} ?
                        </h2>
                        <p className="mt-3 text-gray-500 max-w-xl mx-auto">{config.description}</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            { icon: Clock, title: "Disponible 24h/24", desc: "Réservez et accédez au véhicule à toute heure, sans clé physique ni rendez-vous." },
                            { icon: Shield, title: "Assurance AXA incluse", desc: "Tous nos véhicules sont couverts tous risques par AXA. Roulez l'esprit libre." },
                            { icon: Star, title: "5/5 sur 548 avis", desc: "Des centaines de locataires satisfaits depuis 2020. Notre réputation parle pour nous." },
                            ...config.highlights.map(h => ({ icon: CheckCircle, title: h, desc: "" })).slice(0, 3),
                        ].slice(0, 6).map((item, i) => (
                            <div key={i} className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-[var(--color-primary)]">
                                    <item.icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[var(--color-secondary)] text-sm">{item.title}</h3>
                                    {item.desc && <p className="text-xs text-gray-500 mt-1">{item.desc}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[var(--color-secondary)]">
                            Questions fréquentes — Location à {config.cityLabel}
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {config.faq.map((item, i) => (
                            <div key={i} className={`rounded-2xl border transition-all ${openFaq === i ? "border-[var(--color-primary)] bg-blue-50/30" : "border-gray-200 bg-white"}`}>
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="flex w-full items-center justify-between p-5 text-left"
                                    aria-expanded={openFaq === i}
                                >
                                    <span className={`font-bold text-sm ${openFaq === i ? "text-[var(--color-primary)]" : "text-[var(--color-secondary)]"}`}>
                                        {item.question}
                                    </span>
                                    <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform flex-shrink-0 ml-4 ${openFaq === i ? "rotate-180 text-[var(--color-primary)]" : ""}`} />
                                </button>
                                {openFaq === i && (
                                    <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-blue-100/50 pt-3">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-20 bg-[#1451DF]">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Prêt à louer à {config.cityLabel} ?
                        </h2>
                        <p className="text-blue-100 mb-8">
                            Réservez en quelques minutes directement sur Getaround. Accès immédiat, sans paperasse.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full bg-white text-[var(--color-primary)] hover:bg-gray-100 font-bold"
                            >
                                <a href={config.getaroundUrl} target="_blank" rel="noopener noreferrer">
                                    Réserver maintenant <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="rounded-full bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white"
                            >
                                <Link href="/#avis">Voir les avis</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INTERNAL LINKS ── */}
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <p className="text-center text-sm text-gray-500 mb-6">Nous intervenons aussi dans les villes voisines :</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { label: "Bois-Colombes", href: "/location-utilitaire-bois-colombes" },
                            { label: "Clichy", href: "/location-utilitaire-clichy" },
                            { label: "Paris 18ème", href: "/location-utilitaire-paris-18" },
                            { label: "Toute la flotte", href: "/" },
                        ]
                            .filter(l => !l.href.includes(config.slug))
                            .map((l, i) => (
                                <Link
                                    key={i}
                                    href={l.href}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
                                >
                                    <MapPin className="h-3.5 w-3.5" />
                                    {l.label}
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
