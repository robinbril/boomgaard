# SEO Optimalisatie Skill - Auto Boomgaard

Optimaliseer pagina's voor zoekmachines, specifiek voor de Nederlandse automotive markt.

## Metadata Template

```tsx
export const metadata: Metadata = {
  title: "[Pagina] | Auto Boomgaard - Premium Occasions Uithoorn",
  description: "[150-160 karakters, Nederlands, inclusief kernwoorden]",
  keywords: ["auto boomgaard", "occasions uithoorn", "audi occasions", "mercedes occasions", ...],
  openGraph: {
    title: "[Pagina Titel]",
    description: "[Korte beschrijving]",
    url: "https://autoboomgaard.nl/[pad]",
    siteName: "Auto Boomgaard",
    locale: "nl_NL",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "[Titel]",
    description: "[Beschrijving]",
  },
};
```

## Structured Data (JSON-LD)

### Auto Dealer
```tsx
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  "name": "Auto Boomgaard",
  "url": "https://autoboomgaard.nl",
  "telephone": "+31297560422",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Wiegerbruinlaan 75",
    "addressLocality": "Uithoorn",
    "postalCode": "1422 CB",
    "addressCountry": "NL"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 52.2382, "longitude": 4.8283 },
  "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "18:00" }
})}
</script>
```

### Auto Listing (per auto)
```tsx
{
  "@context": "https://schema.org",
  "@type": "Car",
  "name": "[Merk] [Model] [Variant]",
  "brand": { "@type": "Brand", "name": "[Merk]" },
  "model": "[Model]",
  "vehicleConfiguration": "[Variant]",
  "modelDate": "[Bouwjaar]",
  "mileageFromOdometer": { "@type": "QuantitativeValue", "value": "[km]", "unitCode": "KMT" },
  "fuelType": "[Brandstof]",
  "vehicleTransmission": "[Transmissie]",
  "color": "[Kleur]",
  "offers": {
    "@type": "Offer",
    "price": "[Prijs]",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "seller": { "@type": "AutoDealer", "name": "Auto Boomgaard" }
  }
}
```

## Kernwoorden (Nederlands)

### Primair
- auto boomgaard
- occasions uithoorn
- premium occasions
- audi occasions
- mercedes occasions
- tweedehands auto uithoorn

### Secundair
- audi a4 occasion
- mercedes c-klasse occasion
- auto kopen uithoorn
- occasions amsterdam
- jonge occasions audi
- premium auto dealer

### Long-tail
- betrouwbare tweedehands audi kopen
- mercedes occasion met garantie
- auto dealer uithoorn amstelveen
- premium occasions in de buurt

## Technische SEO Checklist
- [ ] Sitemap.xml genereren (next-sitemap)
- [ ] robots.txt configureren
- [ ] Canonical URLs op alle pagina's
- [ ] Alt-teksten op alle afbeeldingen (Nederlands)
- [ ] Interne links tussen pagina's
- [ ] Mobile-first responsive design ✅
- [ ] Core Web Vitals optimaliseren (LCP, FID, CLS)
- [ ] Next.js Image component voor optimalisatie ✅
- [ ] Structured data op elke autopagina
- [ ] Hreflang tag (nl-NL)

## Lokale SEO
- Google Mijn Bedrijf profiel optimaliseren
- NAP (Naam, Adres, Telefoon) consistent op alle pagina's
- Lokale backlinks verzamelen (Uithoorn, Amstelveen, Amsterdam)
- Reviews verzamelen op Google
- Registratie bij AutoTrack, Marktplaats, AutoScout24
