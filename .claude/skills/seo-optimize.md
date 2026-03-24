# Skill: SEO Optimization

Optimizes Auto Boomgaard pages for search engines, focusing on the Dutch automotive market and local SEO for the Uithoorn/Amsterdam area.

## Usage

When asked to optimize SEO for a page or the entire site, follow the relevant steps below.

## Project context

- Language: Dutch (`lang="nl"` set in root layout)
- Root metadata: defined in `src/app/layout.tsx`
- Business: Auto Boomgaard, premium used car dealer in Uithoorn (near Amsterdam)
- Brands: Audi, Mercedes-Benz (primary focus)
- Tech: Next.js 16, React 19, `next/font` for Inter and Playfair Display

## 1. Page metadata optimization

For server components, export metadata directly:

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "[Paginatitel] | Auto Boomgaard - Premium Occasions Uithoorn",
    description: "[150-160 karakter beschrijving met zoekwoorden: premium occasions, Audi, Mercedes, Uithoorn, Amsterdam]",
    keywords: ["premium occasions", "Audi occasions", "Mercedes occasions", "auto dealer Uithoorn", "occasions Amsterdam"],
    openGraph: {
        title: "[Paginatitel] | Auto Boomgaard",
        description: "[Beschrijving voor social media]",
        url: "https://autoboomgaard.nl/[route]",
        siteName: "Auto Boomgaard",
        locale: "nl_NL",
        type: "website",
        images: [
            {
                url: "https://autoboomgaard.nl/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Auto Boomgaard - Premium Occasions",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "[Paginatitel] | Auto Boomgaard",
        description: "[Beschrijving]",
        images: ["https://autoboomgaard.nl/og-image.jpg"],
    },
    alternates: {
        canonical: "https://autoboomgaard.nl/[route]",
    },
}
```

For client component pages, create a `layout.tsx` in the route folder to hold metadata:

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "...",
    description: "...",
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
```

### Root layout metadata enhancement

Update `src/app/layout.tsx` metadata for site-wide defaults:

```tsx
export const metadata: Metadata = {
    metadataBase: new URL("https://autoboomgaard.nl"),
    title: {
        default: "Auto Boomgaard - Premium Occasions Uithoorn | Audi & Mercedes",
        template: "%s | Auto Boomgaard",
    },
    description: "Premium occasions bij Auto Boomgaard in Uithoorn. Exclusieve Audi en Mercedes-Benz met volledige garantie en service. Bezoek onze showroom nabij Amsterdam.",
    keywords: [
        "premium occasions",
        "occasions Uithoorn",
        "auto dealer Amsterdam",
        "Audi occasions",
        "Mercedes occasions",
        "tweedehands auto",
        "occasion kopen",
        "Auto Boomgaard",
    ],
    authors: [{ name: "Auto Boomgaard" }],
    creator: "Auto Boomgaard",
    openGraph: {
        type: "website",
        locale: "nl_NL",
        url: "https://autoboomgaard.nl",
        siteName: "Auto Boomgaard",
        title: "Auto Boomgaard - Premium Occasions Uithoorn",
        description: "Exclusieve occasions met premium service en garantie.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Auto Boomgaard - Premium Occasions Uithoorn",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Auto Boomgaard - Premium Occasions",
        description: "Exclusieve occasions met premium service en garantie.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
}
```

## 2. Schema.org structured data

### Organization (add to root layout)

Create `src/components/seo/json-ld.tsx`:

```tsx
export function OrganizationJsonLd() {
    const data = {
        "@context": "https://schema.org",
        "@type": "AutoDealer",
        name: "Auto Boomgaard",
        description: "Premium occasions dealer gespecialiseerd in Audi en Mercedes-Benz",
        url: "https://autoboomgaard.nl",
        logo: "https://autoboomgaard.nl/logo.png",
        image: "https://autoboomgaard.nl/showroom.jpg",
        address: {
            "@type": "PostalAddress",
            streetAddress: "[Straatnaam]",
            addressLocality: "Uithoorn",
            addressRegion: "Noord-Holland",
            postalCode: "[Postcode]",
            addressCountry: "NL",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 52.2340,
            longitude: 4.8270,
        },
        telephone: "[Telefoonnummer]",
        email: "[Email]",
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "10:00",
                closes: "16:00",
            },
        ],
        areaServed: [
            { "@type": "City", name: "Uithoorn" },
            { "@type": "City", name: "Amsterdam" },
            { "@type": "City", name: "Amstelveen" },
            { "@type": "State", name: "Noord-Holland" },
        ],
        priceRange: "$$$$",
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}
```

### Car listing structured data

Create `src/components/seo/car-json-ld.tsx`:

```tsx
import type { Car } from "@/lib/supabase"

export function CarJsonLd({ car }: { car: Car }) {
    const data = {
        "@context": "https://schema.org",
        "@type": "Car",
        name: `${car.brand} ${car.model} ${car.variant || ""}`.trim(),
        brand: {
            "@type": "Brand",
            name: car.brand,
        },
        model: car.model,
        vehicleModelDate: car.year.toString(),
        mileageFromOdometer: {
            "@type": "QuantitativeValue",
            value: car.mileage,
            unitCode: "KMT",
        },
        fuelType: car.fuel_type,
        vehicleTransmission: car.transmission,
        color: car.color,
        description: car.description,
        offers: {
            "@type": "Offer",
            price: car.price,
            priceCurrency: "EUR",
            availability: car.status === "Beschikbaar"
                ? "https://schema.org/InStock"
                : car.status === "Gereserveerd"
                    ? "https://schema.org/LimitedAvailability"
                    : "https://schema.org/SoldOut",
            seller: {
                "@type": "AutoDealer",
                name: "Auto Boomgaard",
                url: "https://autoboomgaard.nl",
            },
        },
        vehicleConfiguration: car.variant,
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}
```

### Breadcrumb structured data

```tsx
export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
    const data = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}
```

## 3. Sitemap generation

Create `src/app/sitemap.ts`:

```tsx
import { MetadataRoute } from "next"
import { supabase } from "@/lib/supabase"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://autoboomgaard.nl"

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
        { url: `${baseUrl}/aanbod`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
        { url: `${baseUrl}/diensten`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${baseUrl}/over-ons`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    ]

    // Dynamic car pages (if individual car pages exist)
    const { data: cars } = await supabase
        .from("cars")
        .select("id, updated_at")
        .eq("status", "Beschikbaar")

    const carPages: MetadataRoute.Sitemap = (cars || []).map((car) => ({
        url: `${baseUrl}/aanbod/${car.id}`,
        lastModified: new Date(car.updated_at),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }))

    return [...staticPages, ...carPages]
}
```

## 4. Robots.txt

Create `src/app/robots.ts`:

```tsx
import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin/", "/api/"],
            },
        ],
        sitemap: "https://autoboomgaard.nl/sitemap.xml",
    }
}
```

## 5. Local SEO checklist

- [ ] Google Business Profile configured with correct NAP (Name, Address, Phone)
- [ ] Consistent NAP across all pages (footer, contact, structured data)
- [ ] `AutoDealer` schema.org type used (not generic `Organization`)
- [ ] `areaServed` includes Uithoorn, Amsterdam, Amstelveen, Noord-Holland
- [ ] Dutch language meta descriptions (150-160 characters)
- [ ] Location-specific keywords: "occasions Uithoorn", "auto dealer bij Amsterdam", "premium occasions Noord-Holland"
- [ ] Google Maps embed on contact page
- [ ] Reviews/testimonials with `Review` structured data

## 6. Performance optimization checklist

These affect Core Web Vitals and thus SEO ranking:

- [ ] Images use `next/image` with proper `width`, `height`, or `fill` + `sizes`
- [ ] Hero images have `priority` prop
- [ ] Non-critical images use `loading="lazy"` (Next.js default)
- [ ] Fonts loaded via `next/font` (already configured: Inter, Playfair Display)
- [ ] No layout shift from dynamic content (use skeleton loaders or fixed dimensions)
- [ ] Framer Motion animations don't block LCP (use `whileInView` instead of `animate` for below-fold content)
- [ ] `<Image>` components include `alt` text with descriptive Dutch text
- [ ] CSS is minimal (Tailwind purges unused styles)
- [ ] Third-party scripts loaded with `next/script` strategy `afterInteractive` or `lazyOnload`

## 7. Page-specific SEO keywords

| Page | Primary keywords (NL) |
|------|----------------------|
| Home | premium occasions, auto dealer Uithoorn, Audi Mercedes occasions |
| Aanbod | occasions kopen, tweedehands Audi, tweedehands Mercedes, auto aanbod |
| Diensten | auto inruil, zoekopdracht auto, auto financiering |
| Over ons | auto dealer betrouwbaar, auto Boomgaard ervaring |
| Contact | afspraak auto dealer, showroom Uithoorn, contact auto dealer |

## Checklist

- [ ] Root layout metadata enhanced with full SEO fields
- [ ] Each page has unique `title` and `description`
- [ ] Open Graph tags on all pages
- [ ] `OrganizationJsonLd` added to root layout
- [ ] `CarJsonLd` added to car detail pages
- [ ] `sitemap.ts` created and generates dynamic entries
- [ ] `robots.ts` created with admin/api disallowed
- [ ] Canonical URLs set on all pages
- [ ] All images have descriptive Dutch `alt` text
- [ ] Performance checklist reviewed
