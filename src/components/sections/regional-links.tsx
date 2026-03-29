"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const regions = [
    { name: "Zakelijke hypotheek Uithoorn", href: "/regio/zakelijke-hypotheek-uithoorn" },
    { name: "Zakelijke hypotheek Aalsmeer", href: "/regio/zakelijke-hypotheek-aalsmeer" },
    { name: "Zakelijke hypotheek Amstelveen", href: "/regio/zakelijke-hypotheek-amstelveen" },
    { name: "Zakelijke hypotheek Mijdrecht", href: "/regio/zakelijke-hypotheek-mijdrecht" },
    { name: "Zakelijke hypotheek De Kwakel", href: "/regio/zakelijke-hypotheek-de-kwakel" },
    { name: "Bedrijfspand financieren Uithoorn", href: "/regio/bedrijfspand-financieren-uithoorn" },
    { name: "Bedrijfspand financieren Aalsmeer", href: "/regio/bedrijfspand-financieren-aalsmeer" },
    { name: "Bedrijfspand financieren Amstelveen", href: "/regio/bedrijfspand-financieren-amstelveen" },
]

export function RegionalLinks() {
    return (
        <section className="py-16 md:py-20 bg-background border-t border-white/5">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h3 className="text-lg font-semibold text-white/80">
                        Actief in de regio
                    </h3>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                    {regions.map((region) => (
                        <Link
                            key={region.name}
                            href={region.href}
                            className="px-4 py-2 rounded-full text-sm text-white/60 border border-white/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
                        >
                            {region.name}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
