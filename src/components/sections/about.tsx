"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Shield, Star } from "lucide-react"

export function AboutSection() {
    return (
        <section className="py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c0a060' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Content First */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <p className="text-sm font-medium tracking-[0.3em] text-primary uppercase mb-4">
                                Ons Aanbod
                            </p>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
                                Audi & Mercedes-Benz Specialist
                            </h2>
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
                                Geselecteerde occasions
                            </h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Jonge auto's met lage kilometers en topuitrusting. Auto's die simpelweg kloppen.
                                Wij zijn gespecialiseerd in jonge modellen van Audi en Mercedes-Benz.
                                Elke auto wordt geselecteerd op historie, uitvoering en staat.
                            </p>
                        </div>

                        {/* Premium USPs */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-1">Volledige onderhoudshistorie</h4>
                                    <p className="text-sm text-muted-foreground">BOVAG garantie en NAP-geregistreerd</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-1">RDW gekeurd</h4>
                                    <p className="text-sm text-muted-foreground">Gecertificeerd en betrouwbaar</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                                    <Star className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-1">Alleen topspecificaties</h4>
                                    <p className="text-sm text-muted-foreground">Complete uitrusting en opties</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button asChild variant="premium" size="lg" className="uppercase tracking-wider">
                                <Link href="/occasions">Bekijk collectie</Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Image Second */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl border border-primary/20">
                            <Image
                                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop"
                                alt="Auto Boomgaard - Mercedes Premium Collection"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Subtle overlay only */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
