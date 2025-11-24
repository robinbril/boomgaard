"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"

const navigation = [
    { name: "Home", href: "/" },
    { name: "Aanbod", href: "/aanbod" },
    { name: "Diensten", href: "/diensten" },
    { name: "Over ons", href: "/over-ons" },
    { name: "Contact", href: "/contact" },
]

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/95 backdrop-blur-xl border-b border-primary/20 py-4 shadow-lg shadow-primary/5"
                    : "bg-black/60 backdrop-blur-md py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Logo />

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors uppercase tracking-wide hover:text-primary",
                                isScrolled ? "text-white/90 hover:text-primary" : "text-white hover:text-primary"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button
                        variant="premium"
                        size="sm"
                        className="shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 font-semibold px-6"
                    >
                        Maak afspraak
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={cn(
                        "md:hidden",
                        isScrolled ? "text-foreground" : "text-white"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[300px] bg-background border-l border-border z-50 md:hidden p-6 shadow-2xl"
                        >
                            <div className="flex justify-end mb-8">
                                <button onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <nav className="flex flex-col gap-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-xl font-medium text-foreground hover:text-primary transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <div className="pt-6 border-t border-border">
                                    <Button variant="premium" className="w-full">
                                        Maak afspraak
                                    </Button>
                                </div>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    )
}
