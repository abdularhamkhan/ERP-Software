import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client with the Service Role Key
const supabase = createClient("https://yazxdmzjqeugyidasrng.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhenhkbXpqcWV1Z3lpZGFzcm5nIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyODQ5NTMxNCwiZXhwIjoyMDQ0MDcxMzE0fQ.sBWlB2Na4y8ko-EPgo8JNoRDIjt47ZPDRbIndSCLxS0");

async function addAdminUser() {
  const { data, error } = await supabase.auth.admin.createUser({
    email: "l217728@lhr.nu.edu.pk",
    password: "Arham@786",
    user_metadata: {
      role: "admin", // Custom metadata
      name: "Abdul Arham",
    },
  });

  if (error) {
    console.error("Error adding user:", error);
  } else {
    console.log("User added successfully:", data);
  }
}

addAdminUser();
