"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from "react"

const TESTIMONIALS = [
    {
        name: "Yahya Kara",
        initials: "YK",
        location: "Google Review",
        rating: 5,
        text: "Vandaag mijn Audi Q3 opgehaald. Ik ben super blij met de service van Mick en zijn vader. Vanaf het eerste moment waren ze al heel vriendelijk.",
        car: "Audi Q3",
        verified: true,
        color: "from-blue-500 to-blue-600"
    },
    {
        name: "Marcel vg",
        initials: "MV",
        location: "Google Review",
        rating: 5,
        text: "Ik ben erg goed en vriendelijk geholpen door René en Mick. Goed advies en leuk contact! Binnen een week kon ik mijn auto al ophalen! Ik zou ze zeker aan iedereen aanraden.",
        car: "Audi Q3",
        verified: true,
        color: "from-green-500 to-green-600"
    },
    {
        name: "Shiwi K",
        initials: "SK",
        location: "Google Review",
        rating: 5,
        text: "Wat een top bedrijf, top ervaring! Heel goed geholpen door de mannen, antwoorden snel, en zijn behoorlijk technisch. De mannen bevatten alle kennis over de auto's die ze verkopen. Klasse.",
        car: "",
        verified: true,
        color: "from-purple-500 to-purple-600"
    },
    {
        name: "Michael de Regt",
        initials: "MR",
        location: "Google Review",
        rating: 5,
        text: "Vandaag mijn Volvo XC90 opgehaald bij Auto Boomgaard. Dank voor de fijne service en heldere communicatie. Alles ging soepel en flexibel.",
        car: "Volvo XC90",
        verified: true,
        color: "from-orange-500 to-orange-600"
    },
    {
        name: "Jochem van Leeuwen",
        initials: "JL",
        location: "Google Review",
        rating: 5,
        text: "Onlangs mijn nieuwe Audi gekocht bij Auto Boomgaard en ik ben ontzettend tevreden! De service was uitstekend: vriendelijk, deskundig en betrouwbaar.",
        car: "Audi",
        verified: true,
        color: "from-red-500 to-red-600"
    }
]

export function ReviewCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            skipSnaps: false
        },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    )

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section className="py-24 bg-muted/30 relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-sm font-medium tracking-[0.3em] text-primary uppercase">
                        Klantbeoordelingen
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                        Wat onze klanten zeggen
                    </h3>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                            ))}
                        </div>
                        <span className="text-xl font-bold text-foreground">4.6</span>
                        <span className="text-muted-foreground">op Google (29 reviews)</span>
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative max-w-6xl mx-auto">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-6">
                            {TESTIMONIALS.map((testimonial, index) => (
                                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                                    <Card className="h-full border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 bg-background">
                                        <CardContent className="p-6 space-y-4">
                                            {/* Profile Image/Initial */}
                                            <div className="flex items-start gap-4">
                                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center flex-shrink-0`}>
                                                    <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="font-medium text-foreground">{testimonial.name}</div>
                                                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                                                </div>
                                            </div>

                                            <div className="flex gap-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                                ))}
                                            </div>

                                            <p className="text-muted-foreground leading-relaxed min-h-[100px]">
                                                "{testimonial.text}"
                                            </p>

                                            {testimonial.car && (
                                                <div className="pt-4 border-t border-border">
                                                    <div className="text-xs text-primary font-medium">{testimonial.car}</div>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
                    <div className="text-center space-y-2">
                        <div className="text-4xl font-serif font-bold text-primary">4.6</div>
                        <div className="text-sm text-muted-foreground">Google Reviews</div>
                    </div>
                    <div className="text-center space-y-2">
                        <div className="text-4xl font-serif font-bold text-primary">500+</div>
                        <div className="text-sm text-muted-foreground">Tevreden klanten</div>
                    </div>
                    <div className="text-center space-y-2">
                        <div className="text-4xl font-serif font-bold text-primary">100%</div>
                        <div className="text-sm text-muted-foreground">Garantie</div>
                    </div>
                    <div className="text-center space-y-2">
                        <div className="text-4xl font-serif font-bold text-primary">60+</div>
                        <div className="text-sm text-muted-foreground">Jaar ervaring</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
