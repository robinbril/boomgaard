import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            <div className="flex flex-col lg:flex-row min-h-screen pt-20">
                {/* Left Column: Content */}
                <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-background relative z-10">
                    <div className="max-w-xl mx-auto w-full space-y-12">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground">
                                Kom langs in <br />
                                <span className="text-primary">Uithoorn</span>
                            </h1>
                            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                                Ervaar onze collectie in het echt. We nemen graag de tijd voor u,
                                daarom werken we bij voorkeur op afspraak.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* Contact Details List */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Adres</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Ondernemingsweg 56c<br />
                                            1422 DZ Uithoorn
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Openingstijden</h3>
                                        <div className="text-muted-foreground grid grid-cols-[100px_1fr] gap-y-1">
                                            <span>Ma - Vr</span>
                                            <span>09:00 - 18:00</span>
                                            <span>Za</span>
                                            <span>10:00 - 16:00</span>
                                            <span>Zo</span>
                                            <span>Gesloten</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Contact</h3>
                                        <div className="space-y-1">
                                            <a href="tel:+31611715810" className="block text-muted-foreground hover:text-primary transition-colors">+31 6 11715810</a>
                                            <a href="mailto:info@autoboomgaard.nl" className="block text-muted-foreground hover:text-primary transition-colors">info@autoboomgaard.nl</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Primary Actions */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="h-14 px-8 text-base font-semibold rounded-xl bg-foreground text-background hover:bg-foreground/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <a
                                        href="https://www.google.com/maps/dir//Ondernemingsweg+56c,+1422+DZ+Uithoorn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        Plan Route
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </Button>

                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="h-14 px-8 text-base font-semibold rounded-xl border-2 border-muted hover:border-primary/20 hover:bg-primary/5 text-foreground shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                >
                                    <a
                                        href="https://wa.me/31611715810"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <MessageCircle className="w-5 h-5 text-[#25D366]" />
                                        WhatsApp Ons
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Visuals */}
                <div className="w-full lg:w-1/2 bg-muted relative min-h-[50vh] lg:min-h-screen">
                    {/* Showroom Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://primary.jwwb.nl/public/i/m/q/temp-xhbhavtjycnhbxjzwcok/dsc08053-high-6cr156.jpg"
                            alt="Auto Boomgaard Showroom"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:bg-gradient-to-l lg:from-background/0 lg:via-background/0 lg:to-background" />
                    </div>

                    {/* Map Overlay Card */}
                    <div className="absolute bottom-8 right-8 left-8 lg:left-auto lg:w-96 bg-card/90 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl z-10 hidden md:block">
                        <div className="aspect-video w-full rounded-xl overflow-hidden relative bg-muted grayscale hover:grayscale-0 transition-all duration-500">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.963968278664!2d4.829166976953125!3d52.23722217198854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5dd7a5a5a5a5d%3A0x5a5a5a5a5a5a5a5a!2sOndernemingsweg%2056c%2C%201422%20DZ%20Uithoorn!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <div className="text-xs font-medium text-muted-foreground">Uithoorn, Noord-Holland</div>
                            <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs font-medium text-green-500">Nu geopend</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
