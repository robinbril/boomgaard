import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { BrandTicker } from "@/components/sections/brand-ticker";
import { FeaturedCarsSection } from "@/components/sections/featured-cars";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { ReviewCarousel } from "@/components/sections/review-carousel";
import { CTASection } from "@/components/sections/cta";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div className="bg-background">
        <FeaturesSection />
      </div>
      <BrandTicker />
      <div className="bg-muted/30">
        <FeaturedCarsSection />
      </div>
      <div className="bg-background">
        <AboutSection />
      </div>
      <div className="bg-muted/30">
        <ServicesSection />
      </div>
      <div className="bg-background">
        <ReviewCarousel />
      </div>
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
