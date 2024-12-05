import { createClient } from "@supabase/supabase-js";

// Use `import.meta.env` to access Vite environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create and export Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
