"use client"

import Link from "next/link"
import { Phone, Mail, MessageCircle, Navigation } from "lucide-react"

const navigation = {
    main: [
        { name: "Home", href: "/" },
        { name: "Mogelijkheden", href: "/mogelijkheden" },
        { name: "Rente", href: "/rente" },
        { name: "Kennisbank", href: "/kennisbank" },
        { name: "Begrippen", href: "/begrippen" },
        { name: "Over Ons", href: "/over-ons" },
        { name: "Contact", href: "/contact" },
    ],
    legal: [
        { name: "Algemene Voorwaarden", href: "/voorwaarden" },
        { name: "Privacyverklaring", href: "/privacy" },
        { name: "Disclaimer", href: "/disclaimer" },
    ],
}

export function Footer() {
    return (
        <footer className="bg-[#050505] text-white py-24 border-t border-white/5">
            {/* Contact Buttons */}
            <div className="border-b border-white/[0.08]">
                <div className="container px-4 mx-auto py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
                        <a
                            href="https://wa.me/31646056382"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center justify-center gap-3 p-8 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-xl border border-white/[0.12] hover:border-[#25D366]/60 transition-all duration-300"
                        >
                            <MessageCircle className="w-7 h-7 text-white/85 group-hover:text-[#25D366] transition-colors duration-300" />
                            <span className="text-sm font-medium text-white/90">WhatsApp</span>
                        </a>

                        <a
                            href="tel:0297820200"
                            className="group flex flex-col items-center justify-center gap-3 p-8 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-xl border border-white/[0.12] hover:border-primary/60 transition-all duration-300"
                        >
                            <Phone className="w-7 h-7 text-white/85 group-hover:text-primary transition-colors duration-300" />
                            <span className="text-sm font-medium text-white/90">Bel ons</span>
                        </a>

                        <a
                            href="mailto:info@boomgaardfinancieel.nl"
                            className="group flex flex-col items-center justify-center gap-3 p-8 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-xl border border-white/[0.12] hover:border-primary/60 transition-all duration-300"
                        >
                            <Mail className="w-7 h-7 text-white/85 group-hover:text-primary transition-colors duration-300" />
                            <span className="text-sm font-medium text-white/90">E-mail</span>
                        </a>

                        <a
                            href="https://maps.google.com/?q=Bruine+Lijster+57+Uithoorn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center justify-center gap-3 p-8 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-xl border border-white/[0.12] hover:border-primary/60 transition-all duration-300"
                        >
                            <Navigation className="w-7 h-7 text-white/85 group-hover:text-primary transition-colors duration-300" />
                            <span className="text-sm font-medium text-white/90">Route</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container px-4 mx-auto py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    {/* Address & Contact */}
                    <div className="space-y-6">
                        <h3 className="text-base font-semibold text-white/95">Adres</h3>
                        <div className="space-y-1 text-sm text-white/70 leading-relaxed">
                            <p>Bruine Lijster 57</p>
                            <p>1423 RV Uithoorn</p>
                        </div>

                        <div className="pt-6 space-y-4">
                            <h4 className="text-sm font-semibold text-white/90">Contactgegevens</h4>
                            <div className="space-y-2 text-sm text-white/70">
                                <p>t: 0297-820 200</p>
                                <p>e: info@boomgaardfinancieel.nl</p>
                                <p>WhatsApp: 06-46 05 63 82</p>
                            </div>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="space-y-6">
                        <h3 className="text-base font-semibold text-white/95">Openingstijden</h3>
                        <div className="space-y-3 text-sm text-white/70 leading-relaxed">
                            <p>Bellen kan van maandag t/m zaterdag, wij zijn tenslotte ook ondernemer.</p>
                            <p>Afspraak bij ons kan van maandag t/m zaterdag.</p>
                            <p>Tevens de keuze om een afspraak via video bellen in te plannen.</p>
                            <p>Behoefte aan een gesprek bij jou dan kan dit in overleg.</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-6">
                        <h3 className="text-base font-semibold text-white/95">Navigatie</h3>
                        <ul className="space-y-3">
                            {navigation.main.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-white/70 hover:text-primary transition-colors duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kennisbank Link */}
                    <div className="space-y-6">
                        <h3 className="text-base font-semibold text-white/95">Kennisbank</h3>
                        <p className="text-sm text-white/70 leading-relaxed">
                            Alles over zakelijk vastgoed financieren. Helder, zonder jargon.
                        </p>
                        <Link
                            href="/kennisbank"
                            className="inline-block text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                            Kennisbank — 15 artikelen over zakelijk vastgoed →
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/[0.08]">
                <div className="container px-4 mx-auto py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-sm text-white/60">
                            © {new Date().getFullYear()} Boomgaard&Munnik. Alle rechten voorbehouden. Uithoorn
                        </p>

                        <div className="flex items-center gap-6">
                            {navigation.legal.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-xs text-white/60 hover:text-white/90 transition-colors duration-300"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <p className="text-xs text-white/40">
                            KvK 99244136
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
