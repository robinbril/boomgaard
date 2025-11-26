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
            <Card className="overflow-hidden border-0 bg-transparent shadow-none group relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black mb-4">
                    <Image
                        src={car.image}
                        alt={car.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* NEW Badge */}
                    {isNew && (
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                            Nieuw
                        </div>
                    )}

                    {/* Price - Elegant & Minimal */}
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <p className="text-2xl font-serif font-medium">
                            € {car.price.toLocaleString("nl-NL")}
                        </p>
                    </div>
                </div>

                <div className="space-y-2 px-1">
                    <div className="flex justify-between items-start">
                        <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                            {car.title}
                        </h3>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{car.year}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span>{car.mileage.toLocaleString("nl-NL")} km</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span>{car.fuel}</span>
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}
