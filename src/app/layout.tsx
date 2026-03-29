import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { CustomCursor } from "@/components/ui/custom-cursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Boomgaard & Munnik | Zakelijk Vastgoed Financiering Specialist",
    template: "%s | Boomgaard & Munnik",
  },
  description:
    "Onafhankelijk specialist in zakelijk vastgoed financiering. Zakelijke hypotheek, bedrijfspand financiering en bedrijfshypotheek. Actief in Uithoorn, Mijdrecht, De Kwakel, Aalsmeer en Amstelveen.",
  keywords: [
    "zakelijk vastgoed",
    "zakelijk vastgoed financiering",
    "zakelijke hypotheek",
    "zakelijk vastgoed hypotheek",
    "zakelijk vastgoed lening",
    "bedrijfspand financiering",
    "bedrijfspand hypotheek",
    "bedrijfspand lening",
    "zakelijke financiering",
    "zakelijke lening",
    "bedrijfshypotheek",
    "ondernemers hypotheek",
    "zakelijke hypotheek Uithoorn",
    "zakelijke hypotheek Mijdrecht",
    "zakelijke hypotheek De Kwakel",
    "zakelijke hypotheek Aalsmeer",
    "zakelijke hypotheek Amstelveen",
    "bedrijfspand financieren Uithoorn",
    "bedrijfspand financieren Mijdrecht",
    "bedrijfspand financieren De Kwakel",
    "bedrijfspand financieren Aalsmeer",
    "bedrijfspand financieren Amstelveen",
  ],
  openGraph: {
    title: "Boomgaard & Munnik | Zakelijk Vastgoed Financiering Specialist",
    description:
      "Onafhankelijk specialist in zakelijk vastgoed financiering. Zakelijke hypotheek en bedrijfspand financiering in Uithoorn en omgeving.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={cn(
          inter.variable,
          playfair.variable,
          "antialiased bg-background text-foreground font-sans"
        )}
      >
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
