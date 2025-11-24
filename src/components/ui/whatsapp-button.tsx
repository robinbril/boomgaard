"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function WhatsAppButton() {
    const [isOpen, setIsOpen] = useState(false)
    const phoneNumber = "31611715810" // Auto Boomgaard nummer
    const defaultMessage = "Hallo, ik heb interesse in een auto van Auto Boomgaard. Kunnen we meer informatie krijgen?"

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
        window.open(url, '_blank')
    }

    return (
        <>
            {/* Floating WhatsApp Button */}
            <motion.button
                onClick={handleClick}
                className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-[#20BA5A] transition-colors group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            >
                {/* Pulse animation ring */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping" />

                <MessageCircle className="w-8 h-8 relative z-10" />

                {/* Tooltip */}
                <span className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Chat met René op WhatsApp
                </span>
            </motion.button>

            {/* Online indicator - repositioned */}
            <motion.div
                className="fixed bottom-[116px] right-6 z-40 bg-white rounded-full px-4 py-2 shadow-xl text-xs font-medium text-gray-700 flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                René is online
            </motion.div>
        </>
    )
}
