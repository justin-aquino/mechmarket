import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://oxmufbmzpuegkvrytjhk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94bXVmYm16cHVlZ2t2cnl0amhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIxMTA5MTgsImV4cCI6MTk5NzY4NjkxOH0._tFll6F5r_nqQWfcEYoccJ8GkjBm5WL8SnhVTEXAbsQ"
);
