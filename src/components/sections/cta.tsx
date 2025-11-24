"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"

export function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c0a060' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Animated Circles */}
            <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center space-y-8"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                        Klaar om uw droomauto<br />
                        <span className="text-primary">te ontdekken?</span>
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Neem vandaag nog contact met ons op of bezoek onze showroom in Uithoorn.
                        Wij helpen u graag bij het vinden van de perfecte auto.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button asChild variant="premium" size="lg" className="min-w-[220px] text-base uppercase tracking-wider group">
                            <Link href="/aanbod" className="flex items-center gap-2">
                                Bekijk ons aanbod
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="min-w-[220px] text-base uppercase tracking-wider border-primary/20 hover:bg-primary hover:text-white hover:border-primary">
                            <Link href="/contact">
                                Neem contact op
                            </Link>
                        </Button>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 max-w-2xl mx-auto border-t border-border/30">
                        <motion.a
                            href="tel:+31297123456"
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-card/50 backdrop-blur-md border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Phone className="w-5 h-5 text-primary" />
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-muted-foreground uppercase tracking-wider">Bel ons</div>
                                <div className="font-medium text-foreground">+31 (0)297 123 456</div>
                            </div>
                        </motion.a>

                        <motion.a
                            href="mailto:info@autoboomgaard.nl"
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-card/50 backdrop-blur-md border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Mail className="w-5 h-5 text-primary" />
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-muted-foreground uppercase tracking-wider">Email ons</div>
                                <div className="font-medium text-foreground">info@autoboomgaard.nl</div>
                            </div>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
