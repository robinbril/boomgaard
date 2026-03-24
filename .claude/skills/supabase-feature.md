# Skill: Add a Supabase-Backed Feature

Adds a complete feature backed by Supabase, including schema, queries, API routes, admin interface, and frontend display.

## Usage

When asked to add a new Supabase-backed feature, follow every step below.

## Inputs

- **feature_name**: Name of the feature (e.g., `reviews`, `appointments`, `trade_ins`)
- **table_name**: Supabase table name (snake_case, plural)
- **fields**: List of fields with types
- **needs_admin**: Whether an admin CRUD interface is needed
- **needs_public_display**: Whether a public-facing display component is needed

## Project context

- Supabase client: `src/lib/supabase.ts` (single client instance using `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
- Existing schema: `src/lib/schema.sql` (cars, car_images tables)
- Existing types: `Car` and `CarImage` types in `src/lib/supabase.ts`
- Admin area: `src/app/admin/` with `src/components/admin/AdminLayout.tsx`
- Auth routes: `src/app/api/auth/login/` and `src/app/api/auth/logout/`

## Steps

### 1. Define the SQL migration

Append to `src/lib/schema.sql` (or create a separate migration file). Follow the existing pattern:

```sql
-- [Feature name] table
CREATE TABLE IF NOT EXISTS [table_name] (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  -- feature-specific columns
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_[table_name]_[column] ON [table_name]([column]);

-- Enable Row Level Security
ALTER TABLE [table_name] ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Allow public read access to [table_name]" ON [table_name]
  FOR SELECT USING (true);

-- Authenticated write access (admin)
CREATE POLICY "Allow authenticated insert on [table_name]" ON [table_name]
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated update on [table_name]" ON [table_name]
  FOR UPDATE USING (true);

CREATE POLICY "Allow authenticated delete on [table_name]" ON [table_name]
  FOR DELETE USING (true);
```

Key patterns from existing schema:
- UUIDs for primary keys (`gen_random_uuid()`)
- Always include `created_at` and `updated_at` timestamps
- RLS enabled on all tables
- Public read, authenticated write policies
- Indexes on columns used in WHERE clauses and foreign keys
- Foreign keys with `ON DELETE CASCADE` for child tables

### 2. Add TypeScript types

Add to `src/lib/supabase.ts` alongside existing `Car` and `CarImage` types:

```tsx
export type [TypeName] = {
    id: string
    // fields matching SQL columns
    created_at: string
    updated_at: string
}
```

Type mapping:
- `VARCHAR` / `TEXT` -> `string`
- `INTEGER` / `DECIMAL` -> `number`
- `BOOLEAN` -> `boolean`
- `UUID` (foreign key) -> `string`
- `TIMESTAMP WITH TIME ZONE` -> `string`
- Enum-like columns -> string union type (e.g., `'Benzine' | 'Diesel'`)

### 3. Create query helper functions

Add a new file `src/lib/[feature].ts` or add functions to `src/lib/supabase.ts`:

```tsx
import { supabase } from './supabase'
import type { [TypeName] } from './supabase'

// Fetch all records
export async function get[PluralName]() {
    const { data, error } = await supabase
        .from('[table_name]')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) throw error
    return data as [TypeName][]
}

// Fetch single record
export async function get[SingularName](id: string) {
    const { data, error } = await supabase
        .from('[table_name]')
        .select('*')
        .eq('id', id)
        .single()

    if (error) throw error
    return data as [TypeName]
}

// Create record
export async function create[SingularName](record: Omit<[TypeName], 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
        .from('[table_name]')
        .insert(record)
        .select()
        .single()

    if (error) throw error
    return data as [TypeName]
}

// Update record
export async function update[SingularName](id: string, updates: Partial<Omit<[TypeName], 'id' | 'created_at' | 'updated_at'>>) {
    const { data, error } = await supabase
        .from('[table_name]')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single()

    if (error) throw error
    return data as [TypeName]
}

// Delete record
export async function delete[SingularName](id: string) {
    const { error } = await supabase
        .from('[table_name]')
        .delete()
        .eq('id', id)

    if (error) throw error
}
```

### 4. Create API route (if needed)

Create `src/app/api/[feature]/route.ts` for any operations that should happen server-side:

```tsx
import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
    const { data, error } = await supabase
        .from('[table_name]')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
    const body = await request.json()

    const { data, error } = await supabase
        .from('[table_name]')
        .insert(body)
        .select()
        .single()

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data, { status: 201 })
}
```

### 5. Create admin CRUD interface (if needed)

Create `src/app/admin/[feature]/page.tsx`:

```tsx
"use client"

import { useState, useEffect } from "react"
import { AdminLayout } from "@/components/admin/AdminLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/supabase"
import type { [TypeName] } from "@/lib/supabase"

export default function Admin[Feature]Page() {
    const [items, setItems] = useState<[TypeName][]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchItems()
    }, [])

    async function fetchItems() {
        setLoading(true)
        const { data, error } = await supabase
            .from('[table_name]')
            .select('*')
            .order('created_at', { ascending: false })

        if (!error && data) setItems(data)
        setLoading(false)
    }

    // Add create, update, delete handlers...

    return (
        <AdminLayout>
            <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-bold">[Feature Name]</h1>
                    <Button>Toevoegen</Button>
                </div>
                {/* Table or card list of items */}
                {/* Add/Edit modal or form */}
            </div>
        </AdminLayout>
    )
}
```

### 6. Create frontend display component (if needed)

Create a component in the appropriate directory following the new-component skill conventions. Use Framer Motion for animations, Dutch text, premium styling.

Typical data fetching pattern in a client component:

```tsx
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { supabase } from "@/lib/supabase"
import type { [TypeName] } from "@/lib/supabase"
import { cn } from "@/lib/utils"

interface [Component]Props {
    className?: string
}

export function [Component]({ className }: [Component]Props) {
    const [items, setItems] = useState<[TypeName][]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase
                .from('[table_name]')
                .select('*')
                .order('created_at', { ascending: false })

            if (!error && data) setItems(data)
            setLoading(false)
        }
        fetchData()
    }, [])

    if (loading) {
        return <div className="text-center py-12 text-muted-foreground">Laden...</div>
    }

    return (
        <div className={cn("", className)}>
            {items.map((item, i) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                    {/* Render item */}
                </motion.div>
            ))}
        </div>
    )
}
```

## Checklist

- [ ] SQL migration written (appended to `src/lib/schema.sql` or separate file)
- [ ] RLS policies follow existing pattern (public read, authenticated write)
- [ ] TypeScript type added to `src/lib/supabase.ts`
- [ ] Query helper functions created
- [ ] API route created (if server-side operations needed)
- [ ] Admin page created at `src/app/admin/[feature]/page.tsx` (if needed)
- [ ] Frontend display component created (if needed)
- [ ] Loading states handled (`Laden...` in Dutch)
- [ ] Error states handled gracefully
- [ ] SQL migration tested in Supabase dashboard or via CLI
