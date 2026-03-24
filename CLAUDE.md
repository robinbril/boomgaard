# CLAUDE.md - Auto Boomgaard

## Projectoverzicht

Auto Boomgaard is een premium autohandel gevestigd in Uithoorn, Nederland. De website presenteert exclusieve occasions van merken als Audi en Mercedes-Benz met een luxe, donker design. De UI is volledig Nederlandstalig.

**Contact:** René | WhatsApp +31 6 1171 5810 | info@autoboomgaard.nl

---

## Tech Stack

| Categorie       | Technologie                              |
|-----------------|------------------------------------------|
| Framework       | Next.js 16 (App Router)                  |
| UI Library      | React 19                                 |
| Taal            | TypeScript 5                             |
| Styling         | Tailwind CSS 4, PostCSS                  |
| Animaties       | Framer Motion 12                         |
| Backend/DB      | Supabase (PostgreSQL, Storage, RLS)      |
| UI Components   | Radix UI, Lucide icons, shadcn/ui patroon|
| Formulieren     | React Hook Form + Zod validatie          |
| Carousel        | Embla Carousel + Autoplay                |
| Rich Text       | TipTap editor (admin)                    |
| Smooth Scroll   | Lenis                                    |
| Image Handling  | Sharp (Next.js Image Optimization)       |
| Fonts           | Inter (sans), Playfair Display (serif)   |

---

## Architectuur

### App Router structuur

```
src/
├── app/
│   ├── page.tsx                 # Homepage (hero, featured cars, sections)
│   ├── layout.tsx               # Root layout (fonts, Lenis, custom cursor)
│   ├── template.tsx             # Page transition animations
│   ├── globals.css              # Tailwind + custom CSS variables
│   ├── aanbod/
│   │   ├── page.tsx             # Voorraadpagina met filters
│   │   └── [slug]/page.tsx      # Auto detailpagina
│   ├── over-ons/page.tsx        # Over ons pagina
│   ├── diensten/page.tsx        # Diensten pagina
│   ├── contact/page.tsx         # Contact pagina
│   ├── admin/
│   │   ├── page.tsx             # Admin dashboard
│   │   ├── layout.tsx           # Admin layout
│   │   └── cars/page.tsx        # Auto's beheren (CRUD)
│   └── api/auth/
│       ├── login/route.ts       # Login API route
│       └── logout/route.ts      # Logout API route
├── components/
│   ├── layout/
│   │   ├── header.tsx           # Navigatie header
│   │   └── footer.tsx           # Footer
│   ├── sections/                # Homepage secties
│   │   ├── hero.tsx
│   │   ├── featured-cars.tsx
│   │   ├── about.tsx
│   │   ├── services.tsx
│   │   ├── services-detailed.tsx
│   │   ├── features.tsx
│   │   ├── trust.tsx
│   │   ├── review-carousel.tsx
│   │   ├── timeline.tsx
│   │   ├── brand-ticker.tsx
│   │   ├── contact-form.tsx
│   │   └── cta.tsx
│   ├── cars/
│   │   ├── car-card.tsx
│   │   ├── car-filters.tsx
│   │   └── car-grid.tsx
│   ├── admin/
│   │   └── AdminLayout.tsx
│   ├── ui/                      # Herbruikbare UI componenten
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── logo.tsx
│   │   ├── whatsapp-button.tsx
│   │   ├── magnetic-button.tsx
│   │   ├── custom-cursor.tsx
│   │   └── smooth-scroll.tsx
│   └── LoginModal.tsx
├── lib/
│   ├── supabase.ts              # Supabase client + TypeScript types
│   ├── data.ts                  # Data fetching helpers
│   ├── utils.ts                 # cn() utility (clsx + tailwind-merge)
│   └── schema.sql               # Database schema (referentie)
└── middleware.ts                 # Admin route bescherming (cookie auth)
```

### Admin authenticatie

Cookie-based auth via middleware. De `admin-session` cookie wordt gecontroleerd op waarde `authenticated`. Ongeldige sessies worden doorgestuurd naar `/?login=true` wat een login modal triggert.

### Supabase configuratie

Env variabelen benodigd:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## Database Schema

### `cars` tabel

| Kolom        | Type                  | Notities                                    |
|--------------|-----------------------|---------------------------------------------|
| id           | UUID (PK)             | Auto-generated                              |
| brand        | VARCHAR(100)          | Bijv. "Audi", "Mercedes-Benz"              |
| model        | VARCHAR(100)          | Bijv. "A4", "C-Klasse"                     |
| variant      | VARCHAR(200)          | Optioneel, bijv. "35 TFSI S-Line"          |
| price        | DECIMAL(10,2)         |                                             |
| year         | INTEGER               | Bouwjaar                                    |
| mileage      | INTEGER               | Kilometerstand                              |
| fuel_type    | VARCHAR(50)           | Benzine / Diesel / Hybride / Elektrisch     |
| transmission | VARCHAR(50)           | Automaat / Handgeschakeld                   |
| color        | VARCHAR(100)          |                                             |
| description  | TEXT                  |                                             |
| status       | VARCHAR(50)           | Beschikbaar / Verkocht / Gereserveerd       |
| created_at   | TIMESTAMPTZ           |                                             |
| updated_at   | TIMESTAMPTZ           |                                             |

### `car_images` tabel

| Kolom      | Type     | Notities                              |
|------------|----------|---------------------------------------|
| id         | UUID (PK)|                                       |
| car_id     | UUID (FK)| CASCADE delete met cars               |
| url        | TEXT     | Supabase Storage URL                  |
| order      | INTEGER  | Sorteervolgorde                       |
| is_primary | BOOLEAN  | Hoofdafbeelding voor card/listing     |

**RLS:** Enabled op beide tabellen. Public read access, write policies open (afgestemd op admin-only gebruik).

---

## Development Commands

```bash
npm run dev       # Start development server (Turbopack)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint
```

---

## Stijlgids

- **Thema:** Donker/premium luxe uitstraling
- **Fonts:** Inter (body/UI), Playfair Display (headings/accent)
- **Animaties:** Framer Motion voor page transitions, scroll reveals, hover effects
- **Scroll:** Lenis smooth scrolling
- **Cursor:** Custom cursor component (desktop)
- **Interactie:** Magnetic buttons, hover animaties
- **Carousel:** Embla Carousel met autoplay voor reviews/afbeeldingen
- **Icons:** Lucide React
- **Taal UI:** Nederlands (content, labels, navigation)
- **Taal code:** Engels (variabelen, componenten, comments)

---

## TODO / Bekende Issues

- [ ] Instagram link configureren (nu `#` placeholder)
- [ ] Facebook link configureren (nu `#` placeholder)

---

## Werkwijze

De eigenaar (René) bouwt premium web experiences en gebruikt Claude voor:
- Full-stack development
- UI/UX design en iteratie
- Content creatie (Nederlands)
- Social media strategie
- Business automatisering

**Voorkeur:** Nederlandse taal voor content en communicatie, Engelse taal voor code.
