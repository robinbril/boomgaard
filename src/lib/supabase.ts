// Supabase client configuration
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export type Car = {
    id: string
    brand: string
    model: string
    variant: string
    price: number
    year: number
    mileage: number
    fuel_type: 'Benzine' | 'Diesel' | 'Hybride' | 'Elektrisch'
    transmission: 'Automaat' | 'Handgeschakeld'
    color: string
    description: string
    status: 'Beschikbaar' | 'Verkocht' | 'Gereserveerd'
    created_at: string
    updated_at: string
}

export type CarImage = {
    id: string
    car_id: string
    url: string
    order: number
    is_primary: boolean
    created_at: string
}
