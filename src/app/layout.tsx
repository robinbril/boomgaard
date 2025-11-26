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
  title: "Auto Boomgaard",
  description: "Exclusieve occasions: premium service en garantie.",
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
