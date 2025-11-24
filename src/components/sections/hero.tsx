"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center">
            {/* Background Image/Video Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10" />
                <div
                    className="w-full h-full bg-cover bg-center brightness-90"
                    style={{
                        backgroundImage: "url('https://primary.jwwb.nl/public/i/m/q/temp-xhbhavtjycnhbxjzwcok/dsc08053-high-6cr156.jpg')",
                        backgroundPosition: "center 60%"
                    }}
                />

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
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto bg-white text-black hover:bg-white/95 rounded-full px-10 py-7 text-lg font-semibold shadow-[0_8px_30px_rgb(255,255,255,0.3)] hover:shadow-[0_8px_40px_rgb(255,255,255,0.4)] hover:scale-[1.02] transition-all duration-300"
                        >
                            <Link href="/aanbod">Bekijk voorraad</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto border-2 border-white/50 text-white hover:bg-white/20 hover:border-white/80 rounded-full px-10 py-7 text-lg font-semibold backdrop-blur-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                        >
                            <Link href="/contact">Plan proefrit</Link>
                        </Button>
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
