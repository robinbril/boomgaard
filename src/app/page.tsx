import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { MogelijkhedenSection } from "@/components/sections/mogelijkheden";
import { CTASection } from "@/components/sections/cta";
import { RegionalLinks } from "@/components/sections/regional-links";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProcessSteps />
      <MogelijkhedenSection />
      <CTASection />
      <RegionalLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
