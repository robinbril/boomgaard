"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react"

export default function ContactPage() {
    return (
        <main className="bg-background min-h-screen">
            <Header />

            {/* Contact Section - Modern & Sleek */}
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
                                We helpen je graag verder. Kies je favoriete contactmethode.
                            </motion.p>
                        </div>

                        {/* Contact Buttons Grid */}
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {/* Phone */}
                            <motion.a
                                href="tel:+31297560422"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                            >
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                                        <Phone className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Bel ons</h3>
                                    <p className="text-gray-400 mb-4">Bereikbaar op werkdagen</p>
                                    <p className="text-xl font-semibold text-white">+31 (0)297 56 04 22</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.a>

                            {/* WhatsApp */}
                            <motion.a
                                href="https://wa.me/31297560422"
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
                                    <p className="text-green-100 mb-4">Direct contact</p>
                                    <p className="text-lg font-semibold text-white">Start gesprek →</p>
                                </div>
                            </motion.a>

                            {/* Email */}
                            <motion.a
                                href="mailto:info@autoboomgaard.nl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                            >
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                                        <Mail className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
                                    <p className="text-gray-400 mb-4">Stuur ons een bericht</p>
                                    <p className="text-xl font-semibold text-white">info@autoboomgaard.nl</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.a>

                            {/* Location */}
                            <motion.a
                                href="https://maps.google.com/?q=Wiegerbruinlaan+75+Uithoorn"
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
                                    <h3 className="text-2xl font-bold text-black mb-2">Bezoek showroom</h3>
                                    <p className="text-black/80 mb-4">Wiegerbruinlaan 75</p>
                                    <p className="text-lg font-semibold text-black">1422 CB Uithoorn →</p>
                                </div>
                            </motion.a>
                        </div>

                        {/* Response Time Notice */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-center py-8 px-6 rounded-2xl bg-muted/30"
                        >
                            <p className="text-sm text-muted-foreground">
                                ✓ Reactie binnen 1 werkdag
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
