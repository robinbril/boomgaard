import Link from "next/link"

interface LogoProps {
    variant?: "light" | "dark"
    className?: string
}

export function Logo({ variant = "light", className }: LogoProps) {
    return (
        <Link href="/" className={`flex items-center ${className}`}>
            <div className="text-2xl md:text-3xl font-bold text-white hover:text-white/80 transition-colors tracking-tight">
                Auto Boomgaard
            </div>
        </Link>
    )
}
