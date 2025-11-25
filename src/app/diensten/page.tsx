import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServicesSection } from "@/components/sections/services"

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            {/* Page Header */}
            <div className="bg-background pt-32 pb-12 border-b border-border/40">
                <div className="container px-4 mx-auto">
                    <h1 className="text-4xl md:text-5xl font-sans font-bold mb-4 tracking-tight">Onze Diensten</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                        Van aankoopkeuring tot financiering, wij ontzorgen u volledig.
                    </p>
                </div>
            </div>

            <div className="pt-12">
                <ServicesSection />
            </div>
            <Footer />
        </main>
    )
}
