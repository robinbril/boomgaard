"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const SERVICES = [
    {
        title: "Premium Occasions",
        subtitle: "Onze Collectie",
        description: "Wij zijn gespecialiseerd in jonge, exclusieve modellen van Audi en Mercedes-Benz. Elke auto in onze collectie is zorgvuldig geselecteerd op basis van historie, uitvoering en staat. Wij geloven dat een auto meer is dan vervoer; het is een beleving.",
        features: ["Volledige onderhoudshistorie", "Gegarandeerde kilometerstanden", "Hoogwaardige opties & uitvoeringen"],
        image: "https://images.unsplash.com/photo-1605559424843-9e4c2287f38d?q=80&w=2664&auto=format&fit=crop",
        link: "/aanbod",
        linkText: "Bekijk collectie"
    },
    {
        title: "Inruil & Inkoop",
        subtitle: "Eerlijke Waarde",
        description: "Wilt u uw huidige auto inruilen of verkopen? Wij bieden een transparante en marktconforme prijs. Geen gedoe, maar een eerlijke deal waar beide partijen tevreden mee zijn.",
        features: ["Directe vrijwaring", "Snelle afhandeling", "Transparante taxatie"],
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2671&auto=format&fit=crop",
        link: "/contact",
        linkText: "Taxatie aanvragen"
    },
    {
        title: "Zoekopdracht",
        subtitle: "Uw Droomauto",
        description: "Staat uw gewenste auto niet in onze huidige collectie? Geef ons een zoekopdracht. Dankzij ons uitgebreide netwerk in binnen- en buitenland vinden wij de auto die perfect bij uw wensen past.",
        features: ["Toegang tot exclusief netwerk", "Grondige inspectie vooraf", "Full-service import & aflevering"],
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2583&auto=format&fit=crop",
        link: "/contact",
        linkText: "Start zoekopdracht"
    }
]

export function ServicesDetailed() {
    return (
        <section className="py-24 space-y-32">
            {SERVICES.map((service, index) => (
                <div key={service.title} className="container px-4 mx-auto">
                    <div className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                        </motion.div>

                        {/* Content Side */}
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2 space-y-8"
                        >
                            <div className="space-y-4">
                                <span className="text-primary font-medium tracking-widest uppercase text-sm">{service.subtitle}</span>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">{service.title}</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-foreground/80">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button asChild size="lg" className="rounded-xl px-8 h-12 text-base">
                                <Link href={service.link} className="flex items-center gap-2">
                                    {service.linkText}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            ))}
        </section>
    )
}
