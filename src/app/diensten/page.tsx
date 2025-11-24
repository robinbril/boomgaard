import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServicesSection } from "@/components/sections/services"

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <div className="pt-20">
                <ServicesSection />
            </div>
            <Footer />
        </main>
    )
}
