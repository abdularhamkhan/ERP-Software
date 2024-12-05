import { supabase } from "./client/client";

export const handleRoleRedirect = async (navigate) => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      navigate("/"); // Redirect to login if no user is authenticated
      return;
    }

    // Check for admin role
    const { data: adminData, error: adminError } = await supabase
      .from("admins")
      .select("email")
      .eq("email", user.email.toLowerCase())
      .single();

    if (adminData && !adminError) {
      navigate("/admin"); // Redirect to admin dashboard
      return;
    }

    // Check for HR role
    const { data: hrData, error: hrError } = await supabase
      .from("hr") // Replace with your HR table name
      .select("email")
      .eq("email", user.email.toLowerCase())
      .single();

    if (hrData && !hrError) {
      navigate("/hr/manager"); // Redirect to HR manager dashboard
      return;
    }

    // Default redirection for other authenticated users
    navigate("/employee"); // Redirect to employee dashboard
  } catch (err) {
    console.error("Error in handleRoleRedirect:", err);
    navigate("/"); // Redirect to login in case of unexpected errors
  }
};
