"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Building2, TrendingUp, RefreshCw, ArrowRight } from "lucide-react"

const services = [
    {
        title: "Eigen gebruik",
        description: "Kantoor, werkplaats, winkel of praktijkruimte. Deels verhuur mogelijk.",
        icon: Building2,
        href: "/kennisbank/bedrijfspand-kopen-als-ondernemer",
    },
    {
        title: "Verhuur",
        description: "Beleggingspand kopen, met of zonder huurcontract. Privé of via de BV.",
        icon: TrendingUp,
        href: "/kennisbank/beleggingspand-financieren",
    },
    {
        title: "Herfinanciering",
        description: "Hypotheek loopt af of de rente kan beter. Wij zoeken het uit.",
        icon: RefreshCw,
        href: "/kennisbank/herfinanciering-zakelijk-vastgoed",
    },
]

export function MogelijkhedenSection() {
    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container px-4 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-medium tracking-[0.3em] text-primary uppercase"
                    >
                        Voor wie
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-foreground"
                    >
                        Mogelijkheden
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg"
                    >
                        Voor wie is de zakelijke hypotheek?
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Link href={service.href} className="block h-full">
                                <div className="h-full p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/30 hover:bg-white/[0.06] transition-all duration-300 group">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        {service.description}
                                    </p>
                                    <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                                        Meer info <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
