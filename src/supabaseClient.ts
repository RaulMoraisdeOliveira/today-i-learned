import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_SUPABSE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

createClient(supabaseURL, supabaseKey);
