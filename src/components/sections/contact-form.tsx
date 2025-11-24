"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react"

export function ContactForm() {
    const phoneNumber = "+31611715810"
    const email = "info@autoboomgaard.nl"

    const handleWhatsApp = () => {
        const message = "Hallo, ik heb interesse in jullie aanbod en zou graag meer informatie ontvangen."
        window.open(`https://wa.me/${phoneNumber.replace(/\s/g, '')}?text=${encodeURIComponent(message)}`, '_blank')
    }

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`
    }

    const handleEmail = () => {
        window.location.href = `mailto:${email}`
    }

    return (
        <div className="space-y-6">
            {/* Primary Action - WhatsApp */}
            <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] p-8 text-left shadow-lg hover:shadow-xl transition-all"
            >
                <div className="relative z-10 flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all">
                        <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                        <div className="text-sm font-medium text-white/90 mb-1 uppercase tracking-wider">Snelste reactie</div>
                        <div className="text-2xl font-semibold text-white mb-1">Chat via WhatsApp</div>
                        <div className="text-sm text-white/80">Direct antwoord op al uw vragen</div>
                    </div>
                    <div className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all">
                        →
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>

            {/* Secondary Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Phone */}
                <motion.button
                    onClick={handleCall}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 text-left shadow-md hover:shadow-lg transition-all"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                            <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Bel direct</div>
                            <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{phoneNumber}</div>
                        </div>
                    </div>
                </motion.button>

                {/* Email */}
                <motion.button
                    onClick={handleEmail}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 text-left shadow-md hover:shadow-lg transition-all"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                            <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Stuur een mail</div>
                            <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors break-all">{email}</div>
                        </div>
                    </div>
                </motion.button>
            </div>

            {/* Visit Info */}
            <div className="p-6 rounded-2xl bg-muted/30 border border-border/50">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-foreground mb-2">Bezoek onze showroom</div>
                        <div className="text-sm text-muted-foreground space-y-1">
                            <p>Ondernemingsweg 56c</p>
                            <p>1422 DZ Uithoorn</p>
                            <p className="pt-2 text-xs">Op afspraak. Bel of app ons voor beschikbaarheid.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
