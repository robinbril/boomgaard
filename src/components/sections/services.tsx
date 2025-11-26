"use client"

import { motion } from "framer-motion"
import { Car, Handshake, MessageCircle, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const SERVICES = [
    {
        title: "Ons Aanbod",
        description: "Jonge Audi's en Mercedessen met lage kilometers en complete uitrusting.",
        icon: Car,
    },
    {
        title: "Inruilen",
        description: "Eerlijke taxatie op basis van marktwaarde. Geen gedoe.",
        icon: Handshake,
    },
    {
        title: "Advies",
        description: "We nemen de tijd. Geen haast, wel eerlijk advies dat bij je past.",
        icon: MessageCircle,
    },
    {
        title: "Nazorg",
        description: "Professionele aflevering, garantie en service na aankoop.",
        icon: ShieldCheck,
    },
]

export function ServicesSection() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Subtle accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container px-4 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-medium tracking-[0.3em] text-primary uppercase"
                    >
                        Onze Diensten
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-foreground"
                    >
                        Alles geregeld
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg"
                    >
                        Van aankoop tot nazorg.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-lg bg-card transition-all duration-300 group">
                                <CardHeader>
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
