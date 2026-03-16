"use client"

import { X, Check, Fuel, Settings, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Vehicle } from "@/lib/data/vehicles"
import { useEffect, useState } from "react"
import React from "react"
import useEmblaCarousel from "embla-carousel-react"

interface VehicleModalProps {
    vehicle: Vehicle | null
    isOpen: boolean
    onClose: () => void
}

export function VehicleModal({ vehicle, isOpen, onClose }: VehicleModalProps) {
    const hasMultipleImages = vehicle?.images && vehicle.images.length > 1
    const images = hasMultipleImages ? vehicle.images! : (vehicle?.image ? [vehicle.image] : [])
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => {
            setCurrentImageIndex(emblaApi.selectedScrollSnap())
        }

        emblaApi.on("select", onSelect)
        onSelect()

        return () => {
            emblaApi.off("select", onSelect)
        }
    }, [emblaApi])

    const scrollPrev = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (emblaApi) emblaApi.scrollPrev()
    }

    const scrollNext = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (emblaApi) emblaApi.scrollNext()
    }

    const scrollTo = (index: number, e: React.MouseEvent) => {
        e.stopPropagation()
        if (emblaApi) emblaApi.scrollTo(index)
    }

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
            // Reset image index when modal opens
            setCurrentImageIndex(0)
            if (emblaApi) emblaApi.scrollTo(0, true)
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen, emblaApi])

    if (!vehicle) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[var(--color-secondary)]/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-gray-500 hover:text-gray-700 shadow-sm transition-colors"
                        >
                            <span className="sr-only">Fermer</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Slider Section */}
                        <div className="md:w-[60%] relative bg-gray-900 aspect-[4/3] md:aspect-auto group overflow-hidden">
                            <div className="h-full w-full relative" ref={hasMultipleImages ? emblaRef : null}>
                                <div className="flex h-full w-full">
                                    {images.map((imgSrc, index) => (
                                        <div className="relative min-w-full h-full flex-[0_0_100%]" key={index}>
                                            <Image
                                                src={imgSrc}
                                                alt={`${vehicle.name} - Vue ${index + 1}`}
                                                fill
                                                className="object-contain md:object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {hasMultipleImages && (
                                    <>
                                        {/* Navigation Arrows */}
                                        <button
                                            onClick={scrollPrev}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-gray-800 shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white focus:outline-none z-10"
                                            aria-label="Image précédente"
                                        >
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={scrollNext}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-gray-800 shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white focus:outline-none z-10"
                                            aria-label="Image suivante"
                                        >
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>

                                        {/* Dots Indicators */}
                                        <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-1.5 z-10">
                                            {images.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={(e) => scrollTo(idx, e)}
                                                    className={`h-2 rounded-full transition-all ${idx === currentImageIndex ? "w-4 bg-[var(--color-primary)]" : "w-2 bg-white/60 hover:bg-white"
                                                        }`}
                                                    aria-label={`Aller à l'image ${idx + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-bold text-[var(--color-secondary)] backdrop-blur-sm shadow-sm">
                                {vehicle.volume}
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="md:w-[40%] p-8 md:p-10 overflow-y-auto">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-[var(--color-secondary)] mb-2 font-heading">{vehicle.name}</h3>
                                <div className="flex items-center gap-1.5 text-gray-500">
                                    <MapPin className="h-4 w-4" />
                                    {vehicle.location}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[var(--color-primary)]">
                                        <Fuel className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Carburant</p>
                                        <p className="font-bold text-sm text-[var(--color-secondary)]">{vehicle.fuel}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[var(--color-primary)]">
                                        <Settings className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Transmission</p>
                                        <p className="font-bold text-sm text-[var(--color-secondary)]">{vehicle.transmission}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-bold text-[var(--color-secondary)] mb-3">Description</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {vehicle.details || vehicle.description}
                                </p>
                            </div>

                            <div className="mb-10">
                                <h4 className="font-bold text-[var(--color-secondary)] mb-3">Équipements</h4>
                                <div className="grid grid-cols-2 gap-y-2.5">
                                    {vehicle.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="flex-shrink-0 h-4 w-4 rounded-full bg-green-100 flex items-center justify-center">
                                                <Check className="h-2.5 w-2.5 text-green-600" />
                                            </div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Button asChild className="w-full gap-2 h-12 text-base">
                                <a href={vehicle.link} target="_blank" rel="noopener noreferrer">
                                    Réserver sur Getaround <ExternalLink className="h-4 w-4" />
                                </a>
                            </Button>

                            <p className="mt-4 text-center text-xs text-gray-400">
                                La réservation s&apos;effectue sur la plateforme sécurisée Getaround.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
