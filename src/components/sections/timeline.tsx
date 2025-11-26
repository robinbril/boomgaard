"use client"

import { motion } from "framer-motion"

const MILESTONES = [
    {
        year: "1962",
        title: "De Oprichting",
        description: "Grootvader Boomgaard start het bedrijf met een passie voor techniek en een kleine werkplaats in het hart van Uithoorn."
    },
    {
        year: "1985",
        title: "Tweede Generatie",
        description: "De focus verschuift naar de verkoop van kwaliteitsoccasions. De eerste stappen richting het premium segment worden gezet."
    },
    {
        year: "2005",
        title: "Audi & Mercedes Specialisatie",
        description: "Besluit om volledig te focussen op Duitse premium merken. Kennis en expertise worden hierdoor naar een topniveau getild."
    },
    {
        year: "2024",
        title: "De Nieuwe Standaard",
        description: "Auto Boomgaard staat synoniem voor kwaliteit en betrouwbaarheid. Een moderne showroom en een selectie die tot de top van Nederland behoort."
    }
]

export function Timeline() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-sm font-medium tracking-[0.3em] text-primary uppercase mb-4">Onze Historie</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Van werkplaats tot showroom</h3>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border hidden md:block" />

                    <div className="space-y-12 md:space-y-24">
                        {MILESTONES.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                            >
                                {/* Year Bubble (Center) */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10 hidden md:flex shadow-lg">
                                    <div className="w-3 h-3 rounded-full bg-primary" />
                                </div>

                                {/* Content Side */}
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                                    <span className="text-6xl font-serif font-bold text-primary/10 block mb-2">{milestone.year}</span>
                                    <h4 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {milestone.description}
                                    </p>
                                </div>

                                {/* Empty Side for Balance */}
                                <div className="w-full md:w-1/2 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
