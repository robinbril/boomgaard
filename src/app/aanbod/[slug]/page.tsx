import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { CARS } from "@/lib/data"
import { ArrowLeft, Calendar, Gauge, Fuel, Zap, Settings, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Generate static params for all cars
export function generateStaticParams() {
    return CARS.map((car) => ({
        slug: car.slug,
    }))
}

export default function CarDetailPage({ params }: { params: { slug: string } }) {
    const car = CARS.find((c) => c.slug === params.slug)

    if (!car) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-background">
            <Header />

            <div className="pt-24 pb-12">
                <div className="container px-4 mx-auto">
                    {/* Back Link */}
                    <Link
                        href="/aanbod"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Terug naar aanbod
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column: Images */}
                        <div className="space-y-4">
                            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border">
                                <Image
                                    src={car.image}
                                    alt={car.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {car.images?.slice(0, 3).map((img, idx) => (
                                    <div key={idx} className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border cursor-pointer hover:opacity-80 transition-opacity">
                                        <Image
                                            src={img}
                                            alt={`${car.title} ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Details */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">{car.title}</h1>
                                <p className="text-2xl font-bold text-primary">€ {car.price.toLocaleString("nl-NL")}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 p-6 bg-card rounded-lg border border-border">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-muted-foreground" />
                                    <div>
                                        <p className="text-xs text-muted-foreground">Bouwjaar</p>
                                        <p className="font-medium">{car.year}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Gauge className="w-5 h-5 text-muted-foreground" />
                                    <div>
                                        <p className="text-xs text-muted-foreground">Kilometerstand</p>
                                        <p className="font-medium">{car.mileage.toLocaleString("nl-NL")} km</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Fuel className="w-5 h-5 text-muted-foreground" />
                                    <div>
                                        <p className="text-xs text-muted-foreground">Brandstof</p>
                                        <p className="font-medium">{car.fuel}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Settings className="w-5 h-5 text-muted-foreground" />
                                    <div>
                                        <p className="text-xs text-muted-foreground">Transmissie</p>
                                        <p className="font-medium">{car.transmission}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Zap className="w-5 h-5 text-muted-foreground" />
                                    <div>
                                        <p className="text-xs text-muted-foreground">Vermogen</p>
                                        <p className="font-medium">{car.power}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Settings className="w-5 h-5 text-muted-foreground" />
                                    <div>
                                        <p className="text-xs text-muted-foreground">Motor</p>
                                        <p className="font-medium">{car.engine}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-serif font-bold">Omschrijving</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {car.description}
                                </p>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-border">
                                <h3 className="text-xl font-serif font-bold">Zekerheden</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {["6 maanden garantie", "Onderhoudshistorie aanwezig", "Nieuwe APK", "Professioneel gereinigd"].map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col gap-3 pt-4">
                                <Button size="lg" className="w-full text-base">
                                    Neem contact op
                                </Button>
                                <Button variant="outline" size="lg" className="w-full text-base">
                                    Inruilvoorstel aanvragen
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Related Cars */}
                    <div className="mt-24">
                        <h2 className="text-2xl font-serif font-bold mb-8">Bekijk ook</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {CARS.filter(c => c.id !== car.id).slice(0, 3).map((relatedCar) => (
                                <div key={relatedCar.id} className="group relative">
                                    <div className="aspect-[16/10] overflow-hidden rounded-lg mb-3">
                                        <Image
                                            src={relatedCar.image}
                                            alt={relatedCar.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <h3 className="font-medium truncate">{relatedCar.title}</h3>
                                    <p className="text-primary font-bold">€ {relatedCar.price.toLocaleString("nl-NL")}</p>
                                    <Link href={`/aanbod/${relatedCar.slug}`} className="absolute inset-0">
                                        <span className="sr-only">Bekijk {relatedCar.title}</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
