"use client"

import Link from "next/link"
import { Facebook, Instagram, Phone, Mail, MessageCircle, Navigation, Lock } from "lucide-react"
import { useState } from "react"
import { LoginModal } from "@/components/LoginModal"

const navigation = {
    main: [
        { name: "Home", href: "/" },
        { name: "Aanbod", href: "/aanbod" },
        { name: "Diensten", href: "/diensten" },
        { name: "Over Ons", href: "/over-ons" },
        { name: "Contact", href: "/contact" },
    ],
    legal: [
        { name: "Algemene voorwaarden", href: "#" },
        { name: "Privacybeleid", href: "#" },
        { name: "Disclaimer", href: "#" },
    ],
}

const openingHours = [
    { day: "Maandag", hours: "op afspraak" },
    { day: "Dinsdag", hours: "op afspraak" },
    { day: "Woensdag", hours: "op afspraak" },
    { day: "Donderdag", hours: "op afspraak" },
    { day: "Vrijdag", hours: "op afspraak" },
    { day: "Zaterdag", hours: "op afspraak" },
    { day: "Zondag", hours: "gesloten" },
]

export function Footer() {
    const [isLoginOpen, setIsLoginOpen] = useState(false)

    return (
        <>
            <footer className="bg-[#050505] text-white py-24 border-t border-white/5">
                {/* Premium Contact Buttons */}
                <div className="border-b border-white/[0.08]">
                    <div className="container px-4 mx-auto py-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
                            <a
                                href="https://wa.me/31611715810"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center justify-center gap-3 p-8 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-xl border border-white/[0.12] hover:border-[#25D366]/60 transition-all duration-300"
                            >
                                <MessageCircle className="w-7 h-7 text-white/85 group-hover:text-[#25D366] transition-colors duration-300" />
                                <span className="text-sm font-medium text-white/90">WhatsApp</span>
                            </a>

                            <a
                                href="tel:+31611715810"
                                className="group flex flex-col items-center justify-center gap-3 p-8 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-xl border border-white/[0.12] hover:border-primary/60 transition-all duration-300"
                            >
                                <Phone className="w-7 h-7 text-white/85 group-hover:text-primary transition-colors duration-300" />
                                <span className="text-sm font-medium text-white/90">Bel ons</span>
                            </a>

                            <a
                                href="mailto:info@autoboomgaard.nl"
                                className="group flex flex-col items-center justify-center gap-3 p-8 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-xl border border-white/[0.12] hover:border-primary/60 transition-all duration-300"
                            >
                                <Mail className="w-7 h-7 text-white/85 group-hover:text-primary transition-colors duration-300" />
                                <span className="text-sm font-medium text-white/90">E-mail</span>
                            </a>

                            <a
                                href="https://maps.google.com/?q=Ondernemingsweg+56c+Uithoorn"
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
                        <div className="space-y-6">
                            <h3 className="text-base font-semibold text-white/95">Adres</h3>
                            <div className="space-y-3 text-sm text-white/70 leading-relaxed">
                                <p>Ondernemingsweg 56c</p>
                                <p>1422 DZ Uithoorn</p>
                            </div>

                            <div className="pt-6 space-y-4">
                                <h4 className="text-sm font-semibold text-white/90">Contact</h4>
                                <div className="space-y-2 text-sm text-white/70">
                                    <p>+31 (0)6 11715810</p>
                                    <p>info@autoboomgaard.nl</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-base font-semibold text-white/95">Openingstijden</h3>
                            <div className="space-y-3">
                                {openingHours.map((item) => (
                                    <div key={item.day} className="flex justify-between text-sm">
                                        <span className="text-white/60">{item.day}</span>
                                        <span className="text-white/85 font-medium">{item.hours}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

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

                        <div className="space-y-6">
                            <h3 className="text-base font-semibold text-white/95">Locatie</h3>
                            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/[0.12] bg-white/[0.03]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.7!2d4.826!3d52.247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDE0JzQ5LjIiTiA0wrA0OSczMy42IkU!5e0!3m2!1sen!2snl!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="opacity-70 hover:opacity-90 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/[0.08]">
                    <div className="container px-4 mx-auto py-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <p className="text-sm text-white/60">
                                © {new Date().getFullYear()} Auto Boomgaard
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

                            <div className="flex items-center gap-3">
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.12] flex items-center justify-center hover:bg-white/[0.12] hover:border-white/[0.2] transition-all duration-300 group"
                                >
                                    <Instagram className="w-4 h-4 text-white/60 group-hover:text-white/90 transition-colors" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.12] flex items-center justify-center hover:bg-white/[0.12] hover:border-white/[0.2] transition-all duration-300 group"
                                >
                                    <Facebook className="w-4 h-4 text-white/60 group-hover:text-white/90 transition-colors" />
                                </a>
                                {/* Admin Login Trigger - Discrete */}
                                <button
                                    onClick={() => setIsLoginOpen(true)}
                                    className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.12] flex items-center justify-center hover:bg-white/[0.12] hover:border-primary/60 transition-all duration-300 group"
                                    aria-label="Admin login"
                                >
                                    <Lock className="w-4 h-4 text-white/40 group-hover:text-primary transition-colors" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Login Modal */}
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    )
}
