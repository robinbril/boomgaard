"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                >
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Zakelijk vastgoed"
                        fill
                        className="object-cover brightness-[0.3]"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="container relative z-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[0.95] tracking-[-0.02em]">
                            Zakelijk vastgoed<br />
                            <span className="text-primary">financiering specialist</span>
                        </h1>

                        <div className="max-w-2xl space-y-6">
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                                Vastgoed financieren kan ingewikkeld zijn. Banken, investeerders en geldverstrekkers vallen over elkaar heen met ogenschijnlijk de beste rente.
                            </p>
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                                Als onafhankelijke specialist werken wij alleen voor jou. <strong className="text-white">Niet voor de financier.</strong>
                            </p>
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                                Wij zijn duidelijk, denken mee en komen onze afspraken na. Of het je eerste pand is of dat je er al meerder in bezit hebt, wij begrijpen jou.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-0">
                                <Link href="/contact" className="flex items-center gap-2">
                                    Neem contact op
                                </Link>
                            </Button>

                            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105">
                                <Link href="/mogelijkheden" className="flex items-center gap-2">
                                    Bekijk mogelijkheden
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/80"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ArrowRight className="rotate-90 w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    )
}
