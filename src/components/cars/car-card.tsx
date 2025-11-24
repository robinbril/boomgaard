"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Gauge, Fuel, MessageCircle, Heart } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car } from "@/lib/data"
import { motion } from "framer-motion"

interface CarCardProps {
    car: Car
}

export function CarCard({ car }: CarCardProps) {
    // Check if car is new (you can add a `is New` field to the data later)
    const isNew = car.slug === 'audi-q5-s-line' || car.slug === 'mercedes-gle-coupe'
    const handleWhatsApp = (e: React.MouseEvent) => {
        e.preventDefault()
        const message = `Hallo, ik heb interesse in de ${car.title} (€${car.price.toLocaleString("nl-NL")}). Kunnen we meer informatie krijgen?`
        window.open(`https://wa.me/31611715810?text=${encodeURIComponent(message)}`, '_blank')
    }

    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <Card className="overflow-hidden border border-border/50 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group relative hover:border-primary/30">
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <Image
                        src={car.image}
                        alt={car.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-300" />

                    {/* NEW Badge */}
                    {isNew && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/30 border border-primary/20"
                        >
                            Nieuw binnen
                        </motion.div>
                    )}

                    {/* Quick Actions - appear on hover */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                        <button
                            onClick={handleWhatsApp}
                            className="w-11 h-11 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
                            title="Chat via WhatsApp"
                        >
                            <MessageCircle className="w-5 h-5" />
                        </button>
                        <button
                            className="w-11 h-11 rounded-full bg-white text-gray-900 shadow-lg hover:scale-110 hover:text-red-500 transition-all flex items-center justify-center"
                            title="Bewaar favoriet"
                        >
                            <Heart className="w-5 h-5" />
                        </button>
                    </motion.div>

                    {/* Price with gradient background */}
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="inline-block bg-gradient-to-r from-black/95 via-black/90 to-black/80 px-4 py-2.5 rounded-xl backdrop-blur-md border border-white/10 shadow-xl">
                            <p className="text-2xl font-serif font-bold text-white mb-0.5 drop-shadow-lg">
                                € {car.price.toLocaleString("nl-NL")}
                            </p>
                            <p className="text-xs text-white/90 uppercase tracking-wide">All-in prijs</p>
                        </div>
                    </div>
                </div>

                <CardHeader className="p-5 pb-2">
                    <CardTitle className="text-lg font-medium line-clamp-1 text-foreground group-hover:text-primary transition-colors">
                        {car.title}
                    </CardTitle>
                </CardHeader>

                <CardContent className="p-5 pt-2">
                    <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground border-t border-border pt-4">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-wider opacity-70">Bouwjaar</span>
                            <span className="font-medium text-foreground">{car.year}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-wider opacity-70">Km stand</span>
                            <span className="font-medium text-foreground">{car.mileage.toLocaleString("nl-NL")}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-wider opacity-70">Brandstof</span>
                            <span className="font-medium text-foreground">{car.fuel}</span>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="p-5 pt-0">
                    <Button asChild variant="outline" className="w-full border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all uppercase tracking-widest text-xs h-11 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/20">
                        <Link href={`/aanbod/${car.slug}`}>Bekijk details</Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
