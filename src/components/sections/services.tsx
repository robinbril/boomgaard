"use client"

import { motion } from "framer-motion"
import { Car, Search, ShieldCheck, RefreshCw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const SERVICES = [
    {
        title: "Premium Occasions",
        description: "Exclusief aanbod van jonge Audi & Mercedes-Benz modellen met lage kilometers en topuitrusting.",
        icon: Car,
    },
    {
        title: "Fair Trade-In",
        description: "Eerlijke taxatie van uw huidige auto. Wij bieden een correcte inruilprijs gebaseerd op marktwaarde.",
        icon: RefreshCw,
    },
    {
        title: "Persoonlijk Advies",
        description: "Als familiebedrijf nemen we de tijd voor persoonlijk contact en advies op maat.",
        icon: Search,
    },
    {
        title: "Garantie & Nazorg",
        description: "Alle auto's worden professioneel voorbereid. Garantiemogelijkheden en nazorg beschikbaar.",
        icon: ShieldCheck,
    },
]

export function ServicesSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-sm font-medium tracking-[0.3em] text-primary uppercase">
                        Onze Diensten
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                        Alles onder één dak
                    </h3>
                    <p className="text-muted-foreground text-lg">
                        Van aankoop tot nazorg, wij verzorgen het allemaal voor u.
                    </p>
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
                            <Card className="h-full border border-border/50 shadow-lg hover:shadow-xl hover:shadow-primary/10 bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-300 group hover:border-primary/30">
                                <CardHeader>
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 shadow-sm">
                                        <service.icon className="w-7 h-7" />
                                    </div>
                                    <CardTitle className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">{service.title}</CardTitle>
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
