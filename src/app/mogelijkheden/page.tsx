"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Building2, TrendingUp, RefreshCw, Key, Hammer, HelpCircle, Home, FileSearch, ArrowRight, Briefcase } from "lucide-react"

const services = [
    {
        title: "Eigen gebruik",
        description: "Kantoor, werkplaats, winkel of praktijkruimte. Deels verhuur mogelijk.",
        icon: Building2,
        href: "/kennisbank/bedrijfspand-kopen-als-ondernemer",
    },
    {
        title: "Verhuur met huurcontract",
        description: "Vastgoed dat al verhuurd is. Meer zekerheid voor de geldverstrekker, lagere rente.",
        icon: Key,
        href: "/kennisbank/beleggingspand-financieren",
    },
    {
        title: "Verhuur zonder huurcontract",
        description: "Te verhuren vastgoed waar nog geen huurder in zit. Andere voorwaarden, maar zeker mogelijk.",
        icon: TrendingUp,
        href: "/kennisbank/beleggingspand-financieren",
    },
    {
        title: "Herfinanciering",
        description: "Pand al in bezit en toe aan betere voorwaarden of lagere rente? Wij zoeken het uit.",
        icon: RefreshCw,
        href: "/kennisbank/herfinanciering-zakelijk-vastgoed",
    },
    {
        title: "Doorverkoop",
        description: "Vastgoed aankopen, eventueel verbeteren en weer doorverkopen.",
        icon: Briefcase,
        href: "/contact",
    },
    {
        title: "Projectontwikkeling",
        description: "Nieuwbouw of herontwikkeling van zakelijk vastgoed. Van grondaankoop tot oplevering.",
        icon: Hammer,
        href: "/contact",
    },
    {
        title: "Zonder directe bestemming",
        description: "Pand op het oog maar nog geen concrete plannen? Wij bekijken de mogelijkheden.",
        icon: HelpCircle,
        href: "/contact",
    },
    {
        title: "Woningen voor verhuur",
        description: "Individuele woningen of portefeuilles bestemd voor de verhuurmarkt.",
        icon: Home,
        href: "/contact",
    },
    {
        title: "Second opinion",
        description: "Al een voorstel ontvangen? Wij beoordelen het en kijken of het beter kan.",
        icon: FileSearch,
        href: "/kennisbank/second-opinion-zakelijke-hypotheek",
    },
]

export default function MogelijkhedenPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Zakelijk vastgoed"
                        fill
                        className="object-cover brightness-[0.3]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
                </div>

                <div className="relative z-10 container px-4 mx-auto text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6"
                    >
                        Mogelijkheden
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
                    >
                        Elke aanvraag is anders. Wij beginnen altijd met het begrijpen van jouw situatie.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 md:py-32 bg-background">
                <div className="container px-4 mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                            >
                                <Link href={service.href} className="block h-full">
                                    <div className="h-full p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/30 hover:bg-white/[0.06] transition-all duration-300 group">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-primary group-hover:bg-primary/20 transition-colors">
                                            <service.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                            {service.description}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                                            Meer info <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
