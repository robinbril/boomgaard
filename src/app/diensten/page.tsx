import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Search, RefreshCw, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Full-Width Hero */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/showroom_interior_1763981283525.png"
                    alt="Auto Boomgaard Showroom"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

                {/* Hero Content */}
                <div className="relative z-10 container px-4 mx-auto text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-6"
                    >
                        Onze Diensten
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
                    >
                        Van selectie tot aflevering, alles geregeld.
                    </motion.p>
                </div>
            </section>

            {/* Services - Asymmetric Layout */}
            <section className="py-32 bg-background">
                <div className="container px-4 mx-auto">
                    {/* Premium Occasions - Large Featured */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <div className="grid lg:grid-cols-2 gap-16 items-center bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 lg:p-16 border border-gray-100 shadow-xl">
                            {/* Content */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                                        <CheckCircle className="w-7 h-7 text-black" />
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
                                        Premium Occasions
                                    </h2>
                                </div>

                                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                    Jonge Audi's en Mercedessen met volledige historie en scherpe kilometers.
                                    Elk exemplaar wordt gecheckt op staat, uitvoering en onderhoudsverleden.
                                </p>

                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 text-lg">Volledige onderhoudshistorie</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 text-lg">Gegarandeerde kilometerstanden</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 text-lg">Hoogwaardige opties & uitvoeringen</span>
                                    </li>
                                </ul>

                                <Button asChild size="lg" className="bg-gray-900 hover:bg-black text-white h-14 px-8 text-base group">
                                    <Link href="/aanbod" className="flex items-center gap-2">
                                        Bekijk collectie
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </div>

                            {/* Image */}
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/car_detail_luxury_1763981365783.png"
                                    alt="Premium Occasions"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Two Smaller Services Side-by-Side */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Inruil & Inkoop */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white rounded-2xl p-10 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                <RefreshCw className="w-6 h-6 text-primary" />
                            </div>

                            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                                Inruil & Inkoop
                            </h3>

                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Auto inruilen of verkopen? Eerlijke taxatie, directe vrijwaring, geen gedoe.
                            </p>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                    <span className="text-gray-600">Directe taxatie</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                    <span className="text-gray-600">Snelle afhandeling</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                    <span className="text-gray-600">Volledige vrijwaring</span>
                                </li>
                            </ul>

                            <Button asChild variant="outline" className="w-full h-12 text-base">
                                <Link href="/contact">
                                    Vraag taxatie aan
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Zoekopdracht */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-10 text-white shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                                <Search className="w-6 h-6 text-primary" />
                            </div>

                            <h3 className="text-3xl font-serif font-bold mb-4">
                                Zoekopdracht
                            </h3>

                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                Niet gevonden wat je zoekt? Wij zoeken door ons netwerk in binnen- en buitenland.
                                Inclusief inspectie en volledige aflevering.
                            </p>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                    <span className="text-gray-300">Nederland & Europa</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                    <span className="text-gray-300">Volledige inspectie</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                    <span className="text-gray-300">Import & aflevering</span>
                                </li>
                            </ul>

                            <Button asChild className="w-full h-12 bg-primary hover:bg-primary/90 text-black font-semibold text-base">
                                <Link href="/contact">
                                    Start zoekopdracht
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
