import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://fvnravhmciyzmhpdukij.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2bnJhdmhtY2l5em1ocGR1a2lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMjUxMDksImV4cCI6MjA2MDkwMTEwOX0.fST90kbD8UJLbxK9KxyZXF9djvzhZnPk6kLFHIy9eYU";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase as s };
