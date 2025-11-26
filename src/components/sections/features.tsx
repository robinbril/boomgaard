"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Star, Users, Clock } from "lucide-react"

const FEATURES = [
    {
        title: "6 Maanden Garantie",
        description: "Zorgeloos rijden met BOVAG garantie en mobiliteitsservice inbegrepen.",
        icon: ShieldCheck
    },
    {
        title: "Streng Geselecteerd",
        description: "Alleen de beste exemplaren. Wij checken historie, staat en uitvoering tot in detail.",
        icon: Star
    },
    {
        title: "Familiebedrijf",
        description: "Persoonlijk contact, korte lijnen. Geen verkooppraatjes maar eerlijk advies.",
        icon: Users
    },
    {
        title: "Direct Beschikbaar",
        description: "Geen wachttijden. Alles staat rijklaar in onze showroom.",
        icon: Clock
    }
]

export function FeaturesSection() {
    return (
        <section className="py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            {/* Golden accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURES.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                                <feature.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-white">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
