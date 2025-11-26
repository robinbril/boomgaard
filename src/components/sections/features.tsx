import { Shield, Star, Users, Zap } from "lucide-react"

const features = [
    {
        icon: Shield,
        title: "6 Maanden Garantie",
        description: "Zorgeloos rijden met BOVAG garantie en mobiliteitsservice inbegrepen."
    },
    {
        icon: Star,
        title: "Streng Geselecteerd",
        description: "Alleen de beste exemplaren. Wij checken historie, staat en uitvoering tot in detail."
    },
    {
        icon: Users,
        title: "Familiebedrijf",
        description: "Persoonlijk contact, korte lijnen. Geen verkooppraatjes maar eerlijk advies."
    },
    {
        icon: Zap,
        title: "Direct Beschikbaar",
        description: "Geen wachttijden. Alles staat rijklaar in onze showroom."
    }
]

export function FeaturesSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
            {/* Subtle pattern overlay - static, no animation */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group"
                        >
                            {/* Card - No hover animations, clean transitions only */}
                            <div className="h-full p-8 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors duration-300">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
