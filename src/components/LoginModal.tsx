"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Lock, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            })

            if (response.ok) {
                router.push("/admin")
                onClose()
            } else {
                setError("Ongeldige gebruikersnaam of wachtwoord")
            }
        } catch (err) {
            setError("Er is een fout opgetreden")
        } finally {
            setLoading(false)
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop with blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-md"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Glassmorphism card */}
                            <div className="relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                                {/* Animated gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-50" />

                                {/* Floating orbs */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.5, 0.3],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
                                />
                                <motion.div
                                    animate={{
                                        scale: [1.2, 1, 1.2],
                                        opacity: [0.5, 0.3, 0.5],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
                                />

                                <div className="relative p-8">
                                    {/* Close button */}
                                    <button
                                        onClick={onClose}
                                        className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>

                                    {/* Header */}
                                    <div className="mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-900 to-black flex items-center justify-center mb-6 shadow-lg">
                                            <Lock className="w-8 h-8 text-primary" />
                                        </div>
                                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                                            Admin Portal
                                        </h2>
                                        <p className="text-gray-600 flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 text-primary" />
                                            Toegang tot dashboard
                                        </p>
                                    </div>

                                    {/* Form */}
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="space-y-2">
                                            <label htmlFor="username" className="text-sm font-semibold text-gray-700">
                                                Gebruikersnaam
                                            </label>
                                            <Input
                                                id="username"
                                                type="text"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                placeholder="Voer gebruikersnaam in"
                                                className="h-12 bg-white/50 border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="password" className="text-sm font-semibold text-gray-700">
                                                Wachtwoord
                                            </label>
                                            <Input
                                                id="password"
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Voer wachtwoord in"
                                                className="h-12 bg-white/50 border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                                required
                                            />
                                        </div>

                                        {error && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="p-4 rounded-xl bg-red-50 border border-red-200"
                                            >
                                                <p className="text-sm text-red-600 font-medium">{error}</p>
                                            </motion.div>
                                        )}

                                        <Button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full h-14 bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 text-white font-semibold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                                        >
                                            {loading ? (
                                                <span className="flex items-center gap-2">
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                    />
                                                    Inloggen...
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-2">
                                                    Toegang Krijgen
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            )}
                                        </Button>
                                    </form>

                                    {/* Footer hint */}
                                    <div className="mt-6 text-center">
                                        <p className="text-xs text-gray-500">
                                            Dev: test / test
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
