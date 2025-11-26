"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Car, Package, CheckCircle, Clock, Plus, ArrowUpRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const stats = [
    { title: "Totaal Auto's", value: 0, icon: Package, color: "from-blue-500 to-blue-600", bgColor: "bg-blue-50" },
    { title: "Beschikbaar", value: 0, icon: CheckCircle, color: "from-green-500 to-green-600", bgColor: "bg-green-50" },
    { title: "Verkocht", value: 0, icon: Car, color: "from-purple-500 to-purple-600", bgColor: "bg-purple-50" },
    { title: "Gereserveerd", value: 0, icon: Clock, color: "from-orange-500 to-orange-600", bgColor: "bg-orange-50" },
]

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-4xl font-serif font-bold text-gray-900">Dashboard</h1>
                        <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-gray-600 text-lg">Welkom terug! Beheer je inventory met gemak.</p>
                </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                            {/* Gradient background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

                            <CardHeader className="pb-3">
                                <div className="flex items-center justify-between">
                                    <CardDescription className="text-gray-600 font-medium">{stat.title}</CardDescription>
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                                        <stat.icon className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Quick Actions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                    <CardHeader className="relative">
                        <CardTitle className="text-2xl">Snelle Acties</CardTitle>
                        <CardDescription className="text-gray-400">Beheer je inventory efficiënt</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link href="/admin/cars/new">
                                <Button className="w-full h-16 text-base bg-primary hover:bg-primary/90 text-black font-semibold group">
                                    <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform" />
                                    Nieuwe Auto Toevoegen
                                    <ArrowUpRight className="w-5 h-5 ml-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link href="/admin/cars">
                                <Button variant="outline" className="w-full h-16 text-base border-white/20 hover:bg-white/10 text-white font-semibold group">
                                    <Package className="w-5 h-5 mr-2" />
                                    Alle Auto's Bekijken
                                    <ArrowUpRight className="w-5 h-5 ml-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Setup Guide */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-lg">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <CardTitle className="text-blue-900 text-xl">Kom aan de slag met Supabase</CardTitle>
                                <CardDescription className="text-blue-700">
                                    Volg deze stappen om je database te configureren
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Step 1 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                                1
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-blue-900 mb-1">Maak een Supabase project</p>
                                <p className="text-sm text-blue-700">
                                    Ga naar <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold">supabase.com</a> en maak een nieuw project aan.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                                2
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-blue-900 mb-1">Voer database schema uit</p>
                                <p className="text-sm text-blue-700 mb-2">
                                    Kopieer de SQL uit <code className="bg-blue-100 px-2 py-1 rounded font-mono text-xs">/src/lib/schema.sql</code>
                                </p>
                                <p className="text-sm text-blue-700">
                                    Plak en voer uit in de Supabase SQL Editor
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                                3
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-blue-900 mb-2">Environment variabelen</p>
                                <div className="bg-blue-900 rounded-lg p-4">
                                    <pre className="text-xs text-blue-100 font-mono whitespace-pre-wrap">
                                        NEXT_PUBLIC_SUPABASE_URL=your_url
                                        NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
                                    </pre>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                                4
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-blue-900 mb-1">Maak Storage bucket</p>
                                <p className="text-sm text-blue-700">
                                    Ga naar Storage → Nieuwe bucket → naam: <code className="bg-blue-100 px-2 py-1 rounded font-mono text-xs">cars</code>
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}
