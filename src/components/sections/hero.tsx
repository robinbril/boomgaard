"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Parallax & Zoom */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                >
                    <Image
                        src="https://primary.jwwb.nl/public/i/m/q/temp-xhbhavtjycnhbxjzwcok/mb-c300e-lv-standard.jpg"
                        alt="Mercedes-Benz Premium"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                {/* Animated gradient orbs for depth */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.4, 0.3]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.3, 0.2]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                        className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="container relative z-20 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <h2 className="text-xs md:text-sm font-semibold tracking-[0.3em] text-white/80 uppercase">
                        Audi & Mercedes-Benz Specialist
                    </h2>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white leading-[0.9] tracking-[-0.02em] drop-shadow-2xl">
                        Premium<br />
                        Occasions
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/95 font-light leading-relaxed drop-shadow-lg">
                        Jonge auto's met lage kilometers en topuitrusting.
                        Auto's die simpelweg kloppen.
                    </p>

                    {/* CTAs - Apple Style */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center items-center">
                        <MagneticButton>
                            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] hover:scale-105 border-0">
                                <Link href="/aanbod" className="flex items-center gap-2">
                                    Bekijk Collectie
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </Button>
                        </MagneticButton>

                        <MagneticButton>
                            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105">
                                <Link href="/contact">
                                    Maak Afspraak
                                </Link>
                            </Button>
                        </MagneticButton>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/80"
            >
                <span className="text-xs uppercase tracking-widest drop-shadow-lg">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ArrowRight className="rotate-90 w-5 h-5 drop-shadow-lg" />
                </motion.div>
            </motion.div>
        </section>
    )
}
