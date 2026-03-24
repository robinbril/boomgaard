# Supabase Feature Skill - Auto Boomgaard

Voeg een nieuwe Supabase-backed feature toe aan het project.

## Stappen

### 1. Database Schema (SQL migratie)

Voeg toe aan `src/lib/schema.sql`:

```sql
-- [Feature naam] tabel
CREATE TABLE [tabel_naam] (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  -- kolommen hier
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE [tabel_naam] ENABLE ROW LEVEL SECURITY;

-- Public read
CREATE POLICY "[tabel_naam]_public_read" ON [tabel_naam]
  FOR SELECT USING (true);

-- Admin write (pas aan op basis van behoefte)
CREATE POLICY "[tabel_naam]_admin_write" ON [tabel_naam]
  FOR ALL USING (true);

-- Updated_at trigger
CREATE TRIGGER update_[tabel_naam]_updated_at
  BEFORE UPDATE ON [tabel_naam]
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

### 2. TypeScript Types

Voeg toe aan `src/lib/supabase.ts`:

```typescript
export interface [TypeNaam] {
  id: string;
  // velden hier
  created_at: string;
  updated_at: string;
}
```

### 3. Data Fetching

Voeg toe aan `src/lib/data.ts`:

```typescript
export async function get[Items]() {
  const { data, error } = await supabase
    .from("[tabel_naam]")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data as [TypeNaam][];
}
```

### 4. Admin CRUD (optioneel)

Maak pagina in `src/app/admin/[feature]/page.tsx` met:
- Lijst weergave
- Toevoegen formulier (React Hook Form + Zod)
- Bewerken/verwijderen functionaliteit
- Supabase realtime updates (optioneel)

### 5. Frontend Component

Maak display component in `src/components/[feature]/` volgens new-component.md skill.

## Bestaande Patronen
- Supabase client: `import { supabase } from "@/lib/supabase"`
- Error handling: try/catch met user-friendly messages
- Loading states: skeleton of spinner
- Images: Supabase Storage met `supabase.storage.from("bucket")`
