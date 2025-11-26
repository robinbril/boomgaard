"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function CTASection() {
    return (
        <section className="relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury car background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-gray-900/90" />
            </div>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            {/* Golden accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="container px-4 mx-auto relative z-10 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center space-y-8"
                >
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Op zoek naar je volgende auto?
                    </h2>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Kom langs in onze showroom in Uithoorn of neem contact op.
                        We helpen je graag verder.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                        <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-black font-semibold px-8 h-14 text-lg min-w-[220px] group shadow-lg">
                            <Link href="/aanbod" className="flex items-center gap-2">
                                Bekijk collectie
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-black font-semibold px-8 h-14 text-lg min-w-[220px] shadow-lg">
                            <Link href="/contact">
                                Neem contact op
                            </Link>
                        </Button>
                    </div>

                    {/* Contact Info - Simplified */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <a
                            href="tel:+31611715810"
                            className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                        >
                            <div className="p-4 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                                <p className="text-white/70 text-sm mb-1">Bel ons direct</p>
                                <p className="text-white font-semibold text-lg">+31 (0)6 11715810</p>
                            </div>
                        </a>

                        <a
                            href="mailto:info@autoboomgaard.nl"
                            className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                        >
                            <div className="p-4 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                                <p className="text-white/70 text-sm mb-1">Email ons</p>
                                <p className="text-white font-semibold text-lg">info@autoboomgaard.nl</p>
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
