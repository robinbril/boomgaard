# Skill: Scaffold a New Page

Creates a new page in the Auto Boomgaard Next.js application following established project conventions.

## Usage

When asked to create a new page, follow every step below.

## Inputs

- **route**: The URL path segment (e.g., `financiering`, `garantie`). Must be lowercase, Dutch, hyphen-separated.
- **title**: Dutch page title (e.g., `Financiering`)
- **subtitle**: Dutch subtitle/description for the hero area
- **hero_style**: Either `image` (full-width hero with overlay, like `/diensten`) or `minimal` (text-only header, like `/aanbod`)

## Steps

### 1. Create the page file

Create `src/app/[route]/page.tsx`. Follow these conventions exactly:

- Always `"use client"` at top (Framer Motion requires it)
- Component name: PascalCase + `Page` suffix (e.g., `FinancieringPage`)
- Wrap in `<main className="min-h-screen bg-background">`
- Always include `<Header />` and `<Footer />`
- The root layout's `template.tsx` already handles page transition animation (fade in + slide up), so no need to animate the entire page wrapper

Standard imports:

    "use client"
    
    import { Header } from "@/components/layout/header"
    import { Footer } from "@/components/layout/footer"
    import { motion } from "framer-motion"
    import Image from "next/image"
    import Link from "next/link"
    import { Button } from "@/components/ui/button"
    // Add lucide icons as needed: import { CheckCircle, ArrowRight } from "lucide-react"

Component structure:

    export default function [Name]Page() {
        return (
            <main className="min-h-screen bg-background">
                <Header />
                {/* Hero / Page Header section */}
                {/* ... content sections ... */}
                <Footer />
            </main>
        )
    }

### 2. Hero section patterns

**Image hero** (like `/diensten`, `/over-ons`):

Use a `<section>` with `className="relative h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden"`.

Inside, place:
1. A `motion.div` with `initial={{ scale: 1.05 }}` and `animate={{ scale: 1 }}` containing a `next/image` with `fill`, `priority`, `quality={100}`, `sizes="100vw"`
2. An overlay div: `className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"`
3. Content container: `className="relative z-10 container px-4 mx-auto text-center text-white"`
4. `motion.h1` with fade-in-up: `initial={{ opacity: 0, y: 30 }}`, `animate={{ opacity: 1, y: 0 }}`, class `text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 md:mb-6`
5. `motion.p` with delay 0.2: class `text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto`

**Minimal header** (like `/aanbod`):

    <div className="bg-background pt-32 pb-12 border-b border-border/40">
        <div className="container px-4 mx-auto">
            <h1 className="text-4xl md:text-5xl font-sans font-bold mb-4 tracking-tight">{title}</h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        </div>
    </div>

### 3. Content section patterns

Use `motion.div` with viewport-triggered animations for content sections:

    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
    >

Alternate section backgrounds: `bg-background` and `bg-muted/30`.

Standard section padding: `py-32` for desktop sections, `py-20` for tighter sections.

Container: `<div className="container px-4 mx-auto">`.

Premium card styles:
- Light: `bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-100 shadow-xl`
- Dark: `bg-gradient-to-br from-gray-900 to-black rounded-2xl p-10 text-white`

Stagger child animations with `delay: 0.1` increments.

### 4. Add navigation link

Edit `src/components/layout/header.tsx`. Add the new page to the `navigation` array:

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Aanbod", href: "/aanbod" },
        { name: "Diensten", href: "/diensten" },
        // Add new page here in logical order
        { name: "[Dutch Name]", href: "/[route]" },
        { name: "Over ons", href: "/over-ons" },
        { name: "Contact", href: "/contact" },
    ]

Keep "Contact" last. Place the new item in a logical position.

### 5. Add metadata

For client component pages, create a `layout.tsx` in the route folder:

    import type { Metadata } from "next"

    export const metadata: Metadata = {
        title: "[Title] | Auto Boomgaard",
        description: "[Dutch description for SEO, 150-160 chars]",
    }

    export default function Layout({ children }: { children: React.ReactNode }) {
        return children
    }

If the page does not need Framer Motion at the top level, you can make it a server component and export metadata directly from `page.tsx`.

## Style reference

- Fonts: `font-serif` for headings (Playfair Display), `font-sans` for body (Inter)
- Primary color: `text-primary`, `bg-primary` (gold/amber tone)
- Buttons: Use `<Button>` component with variants: `default`, `outline`, `premium`, `ghost`
- Icons: Import from `lucide-react`
- All user-facing text must be in Dutch
- Language attribute is already `lang="nl"` in root layout

## Checklist

- [ ] File created at `src/app/[route]/page.tsx`
- [ ] Uses `"use client"` directive
- [ ] Includes `<Header />` and `<Footer />`
- [ ] Hero section follows one of the two patterns
- [ ] Content sections use Framer Motion viewport animations
- [ ] Navigation link added to `src/components/layout/header.tsx`
- [ ] All text is in Dutch
- [ ] Premium styling consistent with existing pages
