import Link from "next/link"

export function Logo() {
    return (
        <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-white tracking-tight">
                AUTO BOOMGAARD
            </div>
        </Link>
    )
}
