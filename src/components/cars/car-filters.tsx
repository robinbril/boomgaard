"use client"

import { Search, X, ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CarFilters() {
    return (
        <Card className="p-6 sticky top-24 space-y-6">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-lg">Filters</h3>
                    <button className="text-xs text-primary hover:underline">Reset alle filters</button>
                </div>

                {/* Sort Dropdown - NEW */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Sorteer op</label>
                    <select className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:border-primary transition-colors cursor-pointer">
                        <option>Prijs: laag → hoog</option>
                        <option>Prijs: hoog → laag</option>
                        <option>Nieuwste eerst</option>
                        <option>Km stand: laag → hoog</option>
                        <option>Bouwjaar: nieuw → oud</option>
                    </select>
                </div>

                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Zoek op merk of model..."
                        className="pl-10"
                    />
                </div>

                {/* Brand Filter */}
                <div className="space-y-2">
                    <label className="text-sm font-medium">Merk</label>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                            <span className="text-sm">Audi</span>
                            <span className="text-xs text-muted-foreground ml-auto">(4)</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                            <span className="text-sm">Mercedes-Benz</span>
                            <span className="text-xs text-muted-foreground ml-auto">(2)</span>
                        </label>
                    </div>
                </div>

                {/* Price Range */}
                <div className="space-y-2">
                    <label className="text-sm font-medium">Prijsrange</label>
                    <div className="grid grid-cols-2 gap-2">
                        <Input type="number" placeholder="Min" />
                        <Input type="number" placeholder="Max" />
                    </div>
                </div>

                {/* Year Filter */}
                <div className="space-y-2">
                    <label className="text-sm font-medium">Bouwjaar</label>
                    <div className="grid grid-cols-2 gap-2">
                        <Input type="number" placeholder="Vanaf" />
                        <Input type="number" placeholder="Tot" />
                    </div>
                </div>

                {/* Fuel Type */}
                <div className="space-y-2">
                    <label className="text-sm font-medium">Brandstof</label>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                            <span className="text-sm">Benzine</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                            <span className="text-sm">Diesel</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                            <span className="text-sm">Hybride</span>
                        </label>
                    </div>
                </div>
            </div>

            <Button className="w-full" variant="premium">
                Toon resultaten
            </Button>
        </Card>
    )
}
