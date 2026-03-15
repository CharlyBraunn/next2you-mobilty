"use client"

import { Button } from "@/components/ui/Button"
import { ArrowRight, Fuel, Settings, MapPin, ChevronRight, Search } from "lucide-react"
import Image from "next/image"
import { SectionInView } from "@/components/ui/SectionInView"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { vehicles, Vehicle } from "@/lib/data/vehicles"
import { VehicleModal } from "@/components/ui/VehicleModal"

const categories = [
    { id: "all", label: "Tout" },
    { id: "utilitaire", label: "Utilitaires" },
    { id: "citadine", label: "Citadines" },
]

const ITEMS_PER_PAGE = 6

export function Fleet() {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

    const filteredVehicles = vehicles.filter(
        (vehicle) => selectedCategory === "all" || vehicle.category === selectedCategory
    )

    useEffect(() => {
        setVisibleCount(ITEMS_PER_PAGE)
    }, [selectedCategory])

    const displayedVehicles = filteredVehicles.slice(0, visibleCount)

    const openDetails = (vehicle: Vehicle) => {
        setSelectedVehicle(vehicle)
        setIsModalOpen(true)
    }

    return (
        <section id="flotte" className="py-24 bg-gray-50 scroll-mt-28">
            <div className="container mx-auto px-4">
                <SectionInView>
                    <div className="mb-12 text-center">
                        <div className="mb-6 inline-flex items-center rounded-full bg-[var(--color-primary)] px-6 py-2 text-base font-medium text-white shadow-md shadow-blue-500/20">
                            Véhicules
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter text-[var(--color-secondary)] sm:text-4xl font-heading">
                            Notre Flotte
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Des véhicules régulièrement entretenus, pour tous vos besoins.
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex justify-center flex-wrap gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={cn(
                                    "px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 active:scale-95",
                                    selectedCategory === category.id
                                        ? "bg-[var(--color-primary)] text-white shadow-md"
                                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                )}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    <div className="relative max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {displayedVehicles.map((vehicle, index) => (
                                <div
                                    key={index}
                                    onClick={() => openDetails(vehicle)}
                                    className="group h-full overflow-hidden rounded-2xl bg-white border border-gray-200 flex flex-col transition-all hover:border-[var(--color-primary)] hover:shadow-xl cursor-pointer"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                        <Image
                                            src={vehicle.image}
                                            alt={vehicle.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-[var(--color-secondary)] backdrop-blur-sm shadow-sm">
                                            {vehicle.volume}
                                        </div>
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-[var(--color-secondary)]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <div className="bg-white p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                                <Search className="h-6 w-6 text-[var(--color-primary)]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="mb-4">
                                            <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-1 font-heading group-hover:text-[var(--color-primary)] transition-colors">{vehicle.name}</h3>
                                            <div className="flex items-center gap-1 text-sm text-gray-500">
                                                <MapPin className="h-4 w-4 text-red-500" />
                                                {vehicle.location}
                                            </div>
                                        </div>

                                        <div className="mb-6 flex items-center gap-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-1.5">
                                                <Fuel className="h-4 w-4 text-[var(--color-primary)]" />
                                                {vehicle.fuel}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Settings className="h-4 w-4 text-[var(--color-primary)]" />
                                                {vehicle.transmission}
                                            </div>
                                        </div>

                                        <p className="mb-6 text-sm text-gray-600 line-clamp-2 flex-grow">
                                            {vehicle.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {vehicle.features.slice(0, 3).map((feature, i) => (
                                                <span key={i} className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                                    {feature}
                                                </span>
                                            ))}
                                            {vehicle.features.length > 3 && (
                                                <span className="text-xs text-gray-400 self-center">+{vehicle.features.length - 3}</span>
                                            )}
                                        </div>

                                        <div className="flex gap-2 mt-auto">
                                            <Button variant="outline" className="flex-1 text-xs px-2" onClick={(e) => {
                                                e.stopPropagation()
                                                openDetails(vehicle)
                                            }}>
                                                Détails
                                            </Button>
                                            <Button asChild className="flex-[2] gap-2">
                                                <a
                                                    href={vehicle.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    Réserver <ArrowRight className="h-4 w-4" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Show More UI */}
                        {visibleCount < filteredVehicles.length && (
                            <div className="flex justify-center mt-12">
                                <Button
                                    variant="outline"
                                    onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
                                    className="px-8 py-6 rounded-full font-medium shadow-sm hover:shadow-md transition-all text-sm group"
                                >
                                    Afficher plus <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        )}
                    </div>

                    {filteredVehicles.length === 0 && (
                        <div className="text-center text-gray-500 py-12">
                            Aucun véhicule disponible dans cette catégorie pour le moment.
                        </div>
                    )}
                </SectionInView>
            </div>

            <VehicleModal
                vehicle={selectedVehicle}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    )
}
