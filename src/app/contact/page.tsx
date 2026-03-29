"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle, MapPin, Video, Clock } from "lucide-react"

export default function ContactPage() {
    return (
        <main className="bg-background min-h-screen">
            <Header />

            <section className="py-32 relative">
                <div className="container px-4 mx-auto">
                    <div className="max-w-5xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm font-medium tracking-[0.3em] text-primary uppercase mb-4"
                            >
                                Contact
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6"
                            >
                                Neem contact op
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-muted-foreground max-w-2xl mx-auto"
                            >
                                Bereikbaar van maandag tot en met zaterdag.
                            </motion.p>
                        </div>

                        {/* Contact Methods Grid */}
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {/* Phone */}
                            <motion.a
                                href="tel:0297820200"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                            >
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                                        <Phone className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Bel ons</h3>
                                    <p className="text-gray-400 mb-4">Ma - Za bereikbaar</p>
                                    <p className="text-xl font-semibold text-white">0297-820 200</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.a>

                            {/* WhatsApp */}
                            <motion.a
                                href="https://wa.me/31646056382"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 to-green-700 p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                            >
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                                        <MessageCircle className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">WhatsApp</h3>
                                    <p className="text-green-100 mb-4">Stuur een bericht</p>
                                    <p className="text-lg font-semibold text-white">Start gesprek →</p>
                                </div>
                            </motion.a>

                            {/* Email */}
                            <motion.a
                                href="mailto:info@boomgaardfinancieel.nl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                            >
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                                        <Mail className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
                                    <p className="text-gray-400 mb-4">Stuur ons een bericht</p>
                                    <p className="text-xl font-semibold text-white">info@boomgaardfinancieel.nl</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.a>

                            {/* Location */}
                            <motion.a
                                href="https://maps.google.com/?q=Bruine+Lijster+57+Uithoorn"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                            >
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-black/20 flex items-center justify-center mb-6 group-hover:bg-black/30 transition-colors">
                                        <MapPin className="w-7 h-7 text-black" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-black mb-2">Bezoek kantoor</h3>
                                    <p className="text-black/80 mb-4">Bruine Lijster 57</p>
                                    <p className="text-lg font-semibold text-black">1423 RV Uithoorn →</p>
                                </div>
                            </motion.a>
                        </div>

                        {/* Availability Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="grid md:grid-cols-2 gap-6"
                        >
                            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                                <div className="flex items-start gap-4">
                                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-white mb-2">Openingstijden</h4>
                                        <div className="space-y-1 text-sm text-muted-foreground">
                                            <p>Bellen kan van maandag t/m zaterdag, wij zijn tenslotte ook ondernemer.</p>
                                            <p>Afspraak bij ons kan van maandag t/m zaterdag.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                                <div className="flex items-start gap-4">
                                    <Video className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-white mb-2">Flexibel overleg</h4>
                                        <div className="space-y-1 text-sm text-muted-foreground">
                                            <p>Tevens de keuze om een afspraak via video bellen in te plannen.</p>
                                            <p>Behoefte aan een gesprek bij jou dan kan dit in overleg.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
