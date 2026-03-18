"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionInView } from "@/components/ui/SectionInView"
import { faqData } from "@/lib/data/faq"
import { cn } from "@/lib/utils"

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="py-24 bg-white scroll-mt-28">
            <div className="container mx-auto px-4">
                <SectionInView>
                    <div className="mb-16 text-center">
                        <div className="mb-6 inline-flex items-center rounded-full bg-[var(--color-primary)] px-6 py-2 text-base font-medium text-white shadow-md shadow-blue-500/20">
                            FAQ
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter text-[var(--color-secondary)] sm:text-4xl font-heading">
                            Questions Fréquentes
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Retrouvez les réponses aux questions les plus courantes pour préparer votre location en toute sérénité.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "rounded-2xl border transition-all duration-300",
                                    openIndex === index 
                                        ? "border-[var(--color-primary)] bg-blue-50/30" 
                                        : "border-gray-100 bg-white hover:border-gray-200"
                                )}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className={cn(
                                        "text-lg font-bold transition-colors",
                                        openIndex === index ? "text-[var(--color-primary)]" : "text-[var(--color-secondary)]"
                                    )}>
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={cn(
                                            "h-5 w-5 text-gray-400 transition-transform duration-300",
                                            openIndex === index && "rotate-180 text-[var(--color-primary)]"
                                        )}
                                    />
                                </button>
                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-blue-100/50 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </SectionInView>
            </div>
        </section>
    )
}
