"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"

export function CTASection() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-gray-900/90" />

            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="container px-4 mx-auto relative z-10 py-24 md:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center space-y-8"
                >
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Vrijblijvend kennismaken?
                    </h2>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Op kantoor in Uithoorn, bij jou of via videocall.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                        <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-black font-semibold px-8 h-14 text-lg min-w-[220px] shadow-lg">
                            <Link href="/contact">
                                Neem contact op
                            </Link>
                        </Button>
                        <a
                            href="tel:0297820200"
                            className="flex items-center gap-3 px-8 h-14 rounded-md text-lg font-semibold text-white border border-white/20 hover:bg-white/10 transition-all duration-300"
                        >
                            <Phone className="w-5 h-5" />
                            0297-820 200
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
