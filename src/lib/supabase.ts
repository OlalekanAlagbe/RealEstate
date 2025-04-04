import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseUrl = 'postgresql://postgres:[YOUR-PASSWORD]@db.ycyjeeseaekuaplzcndv.supabase.co:5432/postgres';
const supabaseUrl = 'https://ycyjeeseaekuaplzcndv.supabase.co';
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljeWplZXNlYWVrdWFwbHpjbmR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2ODkyNzcsImV4cCI6MjA1OTI2NTI3N30.ig9i40V-qhDIDbuUYBb3PMvThY-UnRUn2mEA8YDVl7U';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please connect to Supabase using the "Connect to Supabase" button.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);