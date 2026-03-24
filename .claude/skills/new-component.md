# Skill: Create a New React Component

Creates a new React component for the Auto Boomgaard project following established conventions.

## Usage

When asked to create a new component, follow every step below.

## Inputs

- **name**: Component name in PascalCase (e.g., `PriceCalculator`)
- **category**: One of `ui`, `sections`, `cars`, `admin`, `layout`
- **client**: Whether it needs `"use client"` (required if using hooks, Framer Motion, or event handlers)
- **description**: Brief description of what the component does

## Directory structure

Place the component based on its category:

| Category | Directory | Purpose |
|----------|-----------|---------|
| `ui` | `src/components/ui/` | Reusable primitives (buttons, inputs, cards, modals) |
| `sections` | `src/components/sections/` | Homepage and page-level content sections |
| `cars` | `src/components/cars/` | Car listing, detail, and filter components |
| `admin` | `src/components/admin/` | Admin dashboard components |
| `layout` | `src/components/layout/` | Header, footer, navigation, layout shells |

File naming: kebab-case matching the component name (e.g., `PriceCalculator` -> `price-calculator.tsx`).

## Component template

### Standard client component (with Framer Motion)

```tsx
"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface [Name]Props {
    className?: string
    // Add specific props here
}

export function [Name]({ className, ...props }: [Name]Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn(
                // base styles here
                className
            )}
        >
            {/* Component content */}
        </motion.div>
    )
}
```

### Server component (no interactivity)

```tsx
import { cn } from "@/lib/utils"

interface [Name]Props {
    className?: string
}

export function [Name]({ className }: [Name]Props) {
    return (
        <div className={cn("", className)}>
            {/* Component content */}
        </div>
    )
}
```

### UI component (following shadcn/ui pattern)

```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

interface [Name]Props extends React.HTMLAttributes<HTMLDivElement> {
    // Additional props
}

const [Name] = React.forwardRef<HTMLDivElement, [Name]Props>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("", className)}
                {...props}
            />
        )
    }
)
[Name].displayName = "[Name]"

export { [Name] }
```

## Conventions

### TypeScript
- Always define a props interface, even if only `className`
- Export the interface if other components might need it
- Use `React.ReactNode` for children props
- Use discriminated unions for variant props when appropriate

### Styling
- Always use `cn()` from `@/lib/utils` for className merging
- Accept an optional `className` prop for external customization
- Use Tailwind CSS classes exclusively (no inline styles except for dynamic values)
- Follow the project color scheme:
  - `bg-background` / `bg-muted/30` for section backgrounds
  - `text-foreground` for primary text
  - `text-muted-foreground` for secondary text
  - `text-primary` for accent/gold text
  - `border-border` for borders
- Responsive: mobile-first with `md:` and `lg:` breakpoints
- Container pattern: `<div className="container px-4 mx-auto">`

### Framer Motion
- Use `whileInView` with `viewport={{ once: true }}` for scroll-triggered animations
- Standard fade-in: `initial={{ opacity: 0, y: 20 }}` -> `animate/whileInView={{ opacity: 1, y: 0 }}`
- Stagger children with increasing `delay` values (0.1 increments)
- Hover effects: `whileHover={{ scale: 1.02 }}` or similar subtle transforms
- For lists, use staggered animations:
  ```tsx
  {items.map((item, i) => (
      <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
      >
  ```

### Imports
- Path alias: `@/` maps to `src/`
- Icons: `lucide-react` (e.g., `import { ArrowRight, CheckCircle } from "lucide-react"`)
- UI components: `@/components/ui/button`, `@/components/ui/card`, `@/components/ui/input`, `@/components/ui/textarea`
- Next.js: `next/image` for images, `next/link` for navigation
- Named exports (not default exports) for components

### Content
- All user-facing text in Dutch
- Premium, professional tone
- Use `font-serif` (Playfair Display) for headings, default `font-sans` (Inter) for body

## Available UI components

Existing components you can import and use:

- `Button` (`@/components/ui/button`) - variants: default, destructive, outline, secondary, ghost, link, premium
- `Card` (`@/components/ui/card`) - CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- `Input` (`@/components/ui/input`)
- `Textarea` (`@/components/ui/textarea`)
- `Logo` (`@/components/ui/logo`)
- `WhatsAppButton` (`@/components/ui/whatsapp-button`)
- `MagneticButton` (`@/components/ui/magnetic-button`)

## Checklist

- [ ] File created at `src/components/[category]/[kebab-name].tsx`
- [ ] Props interface defined with at least `className?: string`
- [ ] Uses `cn()` for className merging
- [ ] Named export (not default)
- [ ] `"use client"` added if component uses hooks, motion, or event handlers
- [ ] Framer Motion animations added where appropriate
- [ ] Responsive design with mobile-first approach
- [ ] Dutch language for any user-facing text
- [ ] Consistent with project styling patterns
