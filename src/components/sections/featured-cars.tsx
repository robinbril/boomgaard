"use client"

import { motion } from "framer-motion"
import { CarCard } from "@/components/cars/car-card"
import { CARS } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FeaturedCarsSection() {
    const featuredCars = CARS.slice(0, 3)

    return (
        <section className="py-24 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />

            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-16 space-y-4"
                >
                    <h2 className="text-sm font-medium tracking-[0.3em] text-primary uppercase">
                        Onze Collectie
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                        Premium occasions in voorraad
                    </h3>
                    <p className="text-muted-foreground text-lg">
                        Een zorgvuldig geselecteerde collectie van jonge Audi en Mercedes-Benz modellen
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredCars.map((car, index) => (
                        <motion.div
                            key={car.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.15,
                                duration: 0.6,
                                ease: "easeOut"
                            }}
                        >
                            <CarCard car={car} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-center"
                >
                    <Button asChild variant="outline" size="lg" className="min-w-[240px] uppercase tracking-wider border-primary/20 hover:bg-primary hover:text-white hover:border-primary group">
                        <Link href="/aanbod" className="flex items-center gap-2">
                            Bekijk alle auto's
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
