import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VD AKKER | Exclusieve Occasions",
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
          manrope.variable,
          "antialiased bg-background text-foreground font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
