"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).tagName === "A" || (e.target as HTMLElement).tagName === "BUTTON" || (e.target as HTMLElement).closest("a") || (e.target as HTMLElement).closest("button")) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener("mousemove", updateMousePosition)
        window.addEventListener("mouseover", handleMouseOver)

        return () => {
            window.removeEventListener("mousemove", updateMousePosition)
            window.removeEventListener("mouseover", handleMouseOver)
        }
    }, [])

    return (
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
            animate={{
                x: mousePosition.x - (isHovering ? 16 : 8),
                y: mousePosition.y - (isHovering ? 16 : 8),
                scale: isHovering ? 2.5 : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1
            }}
        />
    )
}
