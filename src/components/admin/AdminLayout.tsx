"use client"

import { LayoutDashboard, Car, LogOut, Settings, User, TrendingUp } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Auto's Beheren", href: "/admin/cars", icon: Car },
    { name: "Analytics", href: "/admin/analytics", icon: TrendingUp },
    { name: "Instellingen", href: "/admin/settings", icon: Settings },
]

export function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const router = useRouter()

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" })
        router.push("/")
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Sidebar */}
            <div className="fixed inset-y-0 left-0 w-72 bg-gradient-to-b from-gray-900 via-black to-gray-900 shadow-2xl">
                <div className="flex flex-col h-full">
                    {/* Logo & Branding */}
                    <div className="p-8 border-b border-white/10">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                                <Car className="w-6 h-6 text-black" />
                            </div>
                            <div>
                                <h1 className="text-xl font-serif font-bold text-white">
                                    Auto Boomgaard
                                </h1>
                                <p className="text-xs text-gray-400">Admin CMS</p>
                            </div>
                        </div>
                    </div>

                    {/* User Profile */}
                    <div className="px-6 py-4 border-b border-white/10">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                                <User className="w-5 h-5 text-black" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-white">Admin User</p>
                                <p className="text-xs text-gray-400">test@admin</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
                        {navigation.map((item, index) => {
                            const isActive = pathname === item.href
                            return (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all group relative overflow-hidden ${isActive
                                                ? "bg-primary text-black shadow-lg shadow-primary/20"
                                                : "text-gray-300 hover:bg-white/5 hover:text-white"
                                            }`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeNav"
                                                className="absolute inset-0 bg-primary rounded-xl"
                                                transition={{ type: "spring", duration: 0.5 }}
                                            />
                                        )}
                                        <item.icon className={`w-5 h-5 relative z-10 ${isActive ? "" : "group-hover:scale-110 transition-transform"}`} />
                                        <span className="font-medium relative z-10">{item.name}</span>
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </nav>

                    {/* Logout */}
                    <div className="p-6 border-t border-white/10">
                        <Button
                            onClick={handleLogout}
                            variant="outline"
                            className="w-full justify-start gap-3 border-white/20 text-gray-300 hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-400 transition-all"
                        >
                            <LogOut className="w-5 h-5" />
                            Uitloggen
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="pl-72">
                <div className="p-8 min-h-screen">
                    {children}
                </div>
            </div>
        </div>
    )
}
