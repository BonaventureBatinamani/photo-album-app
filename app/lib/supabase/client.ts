import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.STORAGE_POSTGRES_SUPABASE_URL!,
    process.env.STORAGE_POSTGRES_SUPABASE_PUBLISHABLE_KEY!
  )
}