import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase environment variables (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY) are missing. ' +
    'Reviews will fall back to local simulation.'
  );
}

// Instantiate the real client if credentials exist, otherwise use a safe Mock Proxy to prevent build-time crashes
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : new Proxy({} as any, {
      get(target, prop) {
        // Return a mock function that intercepts chain calls (e.g. from().select().order())
        return () => ({
          select: () => ({
            order: () => Promise.resolve({ data: [], error: null })
          }),
          insert: () => Promise.resolve({ error: new Error("Supabase credentials not configured.") })
        });
      }
    });

