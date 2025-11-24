import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContactForm } from "@/components/sections/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Page Header */}
            <div className="bg-muted/30 pt-32 pb-16">
                <div className="container px-4 mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Heeft u interesse in een van onze auto's of wilt u een afspraak maken?
                        Neem gerust contact met ons op.
                    </p>
                </div>
            </div>

            <div className="container px-4 mx-auto py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Details */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-6">Bezoek onze showroom</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Adres</h3>
                                        <p className="text-muted-foreground">
                                            Dijkstraat 12<br />
                                            5684 VR Best<br />
                                            Nederland
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Telefoon</h3>
                                        <p className="text-muted-foreground">+31 (0)499 33 18 81</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">E-mail</h3>
                                        <p className="text-muted-foreground">info@akker.nl</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Openingstijden</h3>
                                        <div className="text-muted-foreground grid grid-cols-2 gap-x-8 gap-y-1">
                                            <span>Maandag - Vrijdag</span>
                                            <span>09:00 - 18:00</span>
                                            <span>Zaterdag</span>
                                            <span>10:00 - 16:00</span>
                                            <span>Zondag</span>
                                            <span>Gesloten</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                <span className="flex items-center gap-2">
                                    <MapPin className="w-6 h-6" />
                                    Google Maps Embed
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card border border-border rounded-lg p-8">
                        <h2 className="text-2xl font-serif font-bold mb-6">Stuur een bericht</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
