"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-muted/20 via-background to-muted/30 relative">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c0a060' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center border border-primary/10">
                            <div className="text-center p-12">
                                <div className="text-6xl font-serif font-bold text-primary mb-4 drop-shadow-2xl">Auto Boomgaard</div>
                                <div className="text-xl text-gray-300">Exclusieve occasions sinds 1962</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-sm font-medium tracking-[0.3em] text-primary uppercase">
                            Over Auto Boomgaard
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                            Familiebedrijf met passie voor<br />
                            <span className="text-primary">kwaliteit & exclusiviteit</span>
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Binnen ons familiebedrijf staan kwaliteit en exclusiviteit voorop, dit ziet u terug in onze collectie.
                            De juiste opties maken de rijbeleving anders, wij zoeken daarom alleen naar jonge auto's met een
                            hoog uitrustingsniveau en lage kilometerstanden.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Auto's die simpelweg kloppen. We zijn gespecialiseerd in Audi en Mercedes-Benz, merken die staan
                            voor innovatie, luxe en rijplezier. Elk voertuig wordt met zorg geselecteerd en vakkundig voorbereid
                            voordat het onze showroom in Uithoorn binnenkomt.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                            <div>
                                <div className="text-3xl font-serif font-bold text-primary">15+</div>
                                <div className="text-sm text-muted-foreground uppercase tracking-wider">Jaren ervaring</div>
                            </div>
                            <div>
                                <div className="text-3xl font-serif font-bold text-primary">500+</div>
                                <div className="text-sm text-muted-foreground uppercase tracking-wider">Tevreden klanten</div>
                            </div>
                            <div>
                                <div className="text-3xl font-serif font-bold text-primary">100%</div>
                                <div className="text-sm text-muted-foreground uppercase tracking-wider">Premium kwaliteit</div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Button asChild variant="premium" size="lg" className="uppercase tracking-wider">
                                <Link href="/over-ons">Ons verhaal</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
