"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageSquare, FileText, BarChart3, CheckCircle, ArrowRight } from "lucide-react"

const steps = [
    {
        number: "1",
        title: "Gesprek",
        icon: MessageSquare,
        description:
            "Wat is je situatie, wat wil je bereiken? Vrijblijvend, op kantoor, telefonisch of via videocall. In een vrijblijvend gesprek brengen we je situatie in kaart. Wat voor pand, wat is je budget, welke structuur past? Na een gesprek weet je waar je staat.",
    },
    {
        number: "2",
        title: "Krediet Memorandum",
        icon: FileText,
        description:
            "Samen met jou maken wij dit document waarin de financieringsaanvraag onderbouwt wordt. Cruciaal om de haalbaarheid richting de geldverstrekkers inzichtelijk te maken.",
    },
    {
        number: "3",
        title: "Voorstel",
        icon: BarChart3,
        description:
            "Wij leggen het aanbod van tientallen geldverstrekkers naast elkaar. Banken, vastgoedfondsen, alternatieve financiers. Op rente, maar ook op voorwaarden en snelheid.",
    },
    {
        number: "4",
        title: "Financiering",
        icon: CheckCircle,
        description:
            "Wij stellen het dossier samen, dienen de aanvraag in, begeleiden de taxatie en onderhouden het contact met de geldverstrekker. Jij houdt overzicht zonder in de details te hoeven duiken. Dossier compleet, offerte getekend, notaris ingepland. Wij regelen het.",
    },
]

export function ProcessSteps() {
    return (
        <section className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-medium tracking-[0.3em] text-primary uppercase mb-4">
                        Stap voor stap
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                        Hoe het werkt
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative"
                        >
                            <div className="h-full p-8 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300">
                                {/* Step Number */}
                                <div className="text-6xl font-serif font-bold text-primary/20 mb-4">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                    <step.icon className="w-6 h-6 text-primary" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stappenplan Link */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/kennisbank/zakelijke-hypotheek-aanvragen"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                        Lees het volledige stappenplan
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
