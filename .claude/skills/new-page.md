# Nieuwe Pagina Skill - Auto Boomgaard

Maak een nieuwe pagina aan in de Next.js App Router structuur.

## Stappen

1. **Maak de route directory:** `src/app/[route-naam]/`
2. **Maak page.tsx** met het volgende patroon:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "[Pagina Titel] | Auto Boomgaard",
  description: "[SEO beschrijving in het Nederlands]",
};

export default function [PaginaNaam]Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Pagina content hier */}
    </main>
  );
}
```

3. **Voeg navigatie link toe** in `src/components/layout/header.tsx`
4. **Gebruik bestaande componenten** uit `src/components/ui/`
5. **Voeg Framer Motion animaties toe:**

```tsx
"use client";
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

## Conventies
- Route naam in het Nederlands (kebab-case): `/over-ons`, `/aanbod`, `/diensten`
- Metadata altijd in Nederlands
- `"use client"` alleen als Framer Motion of interactie nodig is
- Donkere achtergrond (`bg-black` of `bg-neutral-950`)
- Gebruik `font-serif` (Playfair Display) voor headings
- Gebruik `cn()` uit `@/lib/utils` voor conditional classes
