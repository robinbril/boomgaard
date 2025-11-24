import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AboutSection } from "@/components/sections/about"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <div className="pt-20">
                <AboutSection />
            </div>
            <Footer />
        </main>
    )
}
