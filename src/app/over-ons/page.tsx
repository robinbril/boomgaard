"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, Star } from "lucide-react"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section - Concise */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop"
                        alt="Mercedes AMG GT"
                        fill
                        className="object-cover"
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
                            Audi & Mercedes-Benz<br />Specialist
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
                            Familiebedrijf in Uithoorn. Geselecteerde occasions met volledige historie.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content - Clean Cards */}
            <section className="py-32 bg-gray-50">
                <div className="container px-4 mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        {/* Left: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                                Waarom Auto Boomgaard?
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Wij zijn gespecialiseerd in jonge modellen van Audi en Mercedes-Benz.
                                Elke auto wordt geselecteerd op historie, uitvoering en staat.
                                Voor ons is een auto meer dan vervoer.
                            </p>

                            {/* USPs - Clean List */}
                            <div className="space-y-4 mb-10">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Volledige onderhoudshistorie</h4>
                                        <p className="text-sm text-gray-600">BOVAG garantie en NAP-geregistreerd</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">RDW gekeurd</h4>
                                        <p className="text-sm text-gray-600">Gecertificeerd en betrouwbaar</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Star className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Alleen topspecificaties</h4>
                                        <p className="text-sm text-gray-600">Complete uitrusting en opties</p>
                                    </div>
                                </div>
                            </div>

                            {/* Better Button Placement */}
                            <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 h-14 text-lg">
                                <Link href="/occasions">Bekijk collectie →</Link>
                            </Button>
                        </motion.div>

                        {/* Right: Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2070&auto=format&fit=crop"
                                alt="Showroom"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Quote Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 md:p-16 text-center"
                    >
                        <blockquote className="text-3xl md:text-4xl font-serif italic text-white mb-6">
                            "Auto's die simpelweg kloppen"
                        </blockquote>
                        <p className="text-gray-400 text-lg">
                            Persoonlijk contact en eerlijk advies. Geen verkooppraatjes.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
