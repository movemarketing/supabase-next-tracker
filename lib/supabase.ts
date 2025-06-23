// /lib/supabase.ts
import { createBrowserClient } from "@supabase/ssr";

// Denne client bruges i client components (f.eks. når vi henter data i useEffect)
export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
