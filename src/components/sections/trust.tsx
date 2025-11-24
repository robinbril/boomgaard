"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const TESTIMONIALS = [
    {
        name: "Yahya Kara",
        location: "Google Review",
        rating: 5,
        text: "Vandaag mijn Audi Q3 opgehaald. Ik ben super blij met de service van Mick en zijn vader. Vanaf het eerste moment waren ze al heel vriendelijk.",
        car: "Audi Q3",
        verified: true
    },
    {
        name: "Marcel vg",
        location: "Google Review",
        rating: 5,
        text: "Ik ben erg goed en vriendelijk geholpen door René en Mick. Goed advies en leuk contact! Binnen een week kon ik mijn auto al ophalen! Ik zou ze zeker aan iedereen aanraden.",
        car: "Audi Q3",
        verified: true
    },
    {
        name: "Shiwi K",
        location: "Google Review",
        rating: 5,
        text: "Wat een top bedrijf, top ervaring! Heel goed geholpen door de mannen, antwoorden snel, en zijn behoorlijk technisch. De mannen bevatten alle kennis over de auto's die ze verkopen. Klasse.",
        car: "",
        verified: true
    }
]

export function TrustSection() {
    return (
        <section className="py-24 bg-muted/30 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-sm font-medium tracking-[0.3em] text-primary uppercase">
                        Klantbeoordelingen
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                        Wat onze klanten zeggen
                    </h3>
                    <p className="text-muted-foreground text-lg">
                        Echte ervaringen van tevreden klanten
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                        >
                            <Card className="h-full border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 bg-background">
                                <CardContent className="p-6 space-y-4">
                                    <Quote className="w-10 h-10 text-primary/30" />

                                    <div className="flex gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                        ))}
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed">
                                        "{testimonial.text}"
                                    </p>

                                    <div className="border-t border-border pt-4">
                                        <div className="font-medium text-foreground">{testimonial.name}</div>
                                        <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                                        {testimonial.car && (
                                            <div className="text-xs text-primary font-medium mt-1">{testimonial.car}</div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                >
                    <div className="text-center space-y-2">
                        <div className="text-4xl font-serif font-bold text-primary">4.6</div>
                        <div className="text-sm text-muted-foreground">Google Reviews (29)</div>
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
                        <div className="text-4xl font-serif font-bold text-primary">15+</div>
                        <div className="text-sm text-muted-foreground">Jaar ervaring</div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
