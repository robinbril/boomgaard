import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CarFilters } from "@/components/cars/car-filters"
import { CarGrid } from "@/components/cars/car-grid"
import { Suspense } from "react"

export default function InventoryPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Page Header */}
            <div className="bg-muted/30 pt-32 pb-16">
                <div className="container px-4 mx-auto">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Onze Collectie</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Bekijk ons actuele aanbod van exclusieve automobielen.
                        Staat uw droomauto er niet tussen? Wij zoeken graag voor u.
                    </p>
                </div>
            </div>

            <div className="container px-4 mx-auto py-12">
                <Suspense fallback={<div className="text-center py-12">Laden...</div>}>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <CarFilters />
                        </aside>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <CarGrid />
                        </div>
                    </div>
                </Suspense>
            </div>

            <Footer />
        </main>
    )
}
