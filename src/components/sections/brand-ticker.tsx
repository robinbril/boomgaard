"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const BRANDS = [
    { name: "Audi", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/2560px-Audi-Logo_2016.svg.png" },
    { name: "Mercedes-Benz", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png" },
    // Duplicate for smooth infinite loop
    { name: "Audi", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/2560px-Audi-Logo_2016.svg.png" },
    { name: "Mercedes-Benz", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png" },
]

export function BrandTicker() {
    return (
        <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background border-y border-border/40 overflow-hidden relative">
            {/* Subtle accent lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container px-4 mx-auto mb-12 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-medium tracking-[0.3em] text-primary uppercase mb-2"
                >
                    Gespecialiseerd in
                </motion.p>
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl md:text-3xl font-serif font-bold text-foreground"
                >
                    Premium Duitse merken
                </motion.h3>
            </div>

            <div className="flex overflow-hidden relative">
                <motion.div
                    className="flex gap-16 md:gap-32 items-center px-8"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                    style={{ width: "fit-content" }}
                >
                    {[...BRANDS, ...BRANDS].map((brand, index) => (
                        <div key={`${brand.name}-${index}`} className="relative w-32 h-16 md:w-40 md:h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 shrink-0">
                            <Image
                                src={brand.logo}
                                alt={brand.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </motion.div>

                {/* Fade Edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            </div>
        </section>
    )
}
