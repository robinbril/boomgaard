"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Users, BarChart3 } from "lucide-react"
import type { Metadata } from "next"

export default function OverOnsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Zakelijk vastgoed"
                        fill
                        className="object-cover brightness-[0.3]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
                </div>

                <div className="container px-4 mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
                            Wie wij zijn
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 md:py-32 bg-background">
                <div className="container px-4 mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                            Binnen ons familiebedrijf staat kwaliteit voorop en is persoonlijk contact snel mogelijk.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Het financieren van vastgoed kan complex en onoverzichtelijk zijn.
                            Banken, investeerders, adviseurs en andere geldverstrekkers vallen over elkaar heen met op het eerste gezicht de beste rente en financieringsvorm. Maar wat is nu écht de beste keuze voor jou.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Wij als onafhankelijke specialist bieden uitkomst en werken uitsluitend voor jou om samen tot de beste oplossing te komen.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Met onze eigen ruime ervaring als ondernemer en het zelf aankopen van vastgoed begrijpen wij wat er op je afkomt en kunnen wij uitstekend ondersteunen bij het financieren van zakelijk vastgoed.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Wij zijn duidelijk, denken mee, bieden gepaste snelheid, zekerheid en komen onze afspraken na. Gedurende het traject dat wij samen ingaan wordt je op de hoogte gehouden van de voortgang. Is het je eerste pand dat je privé of via de BV wilt financieren of heb je al meerder panden in bezit, voor iedereen hebben wij een passende oplossing.
                        </p>
                    </motion.div>

                    {/* USPs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 rounded-2xl bg-white/[0.03] border border-white/10"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Onafhankelijk</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Wij werken uitsluitend voor jou, niet voor banken of geldverstrekkers. Zo weet je zeker dat ons advies altijd in jouw belang is.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-2xl bg-white/[0.03] border border-white/10"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Geldverstrekkers</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Samenwerking met meerdere geldverstrekkers stelt ons in staat om rente, voorwaarden en snelheid naast elkaar te leggen.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
