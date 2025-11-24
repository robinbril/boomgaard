"use client"

import { CarCard } from "@/components/cars/car-card"
import { motion, AnimatePresence } from "framer-motion"
import { CARS } from "@/lib/data"
import { useSearchParams } from "next/navigation"

export function CarGrid() {
  const searchParams = useSearchParams()

  const search = searchParams.get("search")?.toLowerCase()
  const brands = searchParams.get("brands")?.split(",").filter(Boolean)
  const minPrice = Number(searchParams.get("minPrice")) || 0
  const maxPrice = Number(searchParams.get("maxPrice")) || Infinity
  const minYear = Number(searchParams.get("minYear")) || 0
  const maxYear = Number(searchParams.get("maxYear")) || Infinity

  const filteredCars = CARS.filter((car) => {
    // Search
    if (search && !car.title.toLowerCase().includes(search)) return false

    // Brands
    if (brands && brands.length > 0) {
      const carBrand = car.title.split(" ")[0]
      if (!brands.some(b => car.title.includes(b))) return false
    }

    // Price
    if (car.price < minPrice || car.price > maxPrice) return false

    // Year
    if (car.year < minYear || car.year > maxYear) return false

    return true
  })

  if (filteredCars.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">Geen auto's gevonden die aan uw criteria voldoen.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence mode="popLayout">
        {filteredCars.map((car) => (
          <motion.div
            key={car.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <CarCard car={car} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
