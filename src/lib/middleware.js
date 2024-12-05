import React, { useEffect, useState } from "react";
import { supabase } from "./client/client"; // Supabase client
import { useNavigate } from "react-router-dom";
import { LoaderPinwheel } from "lucide-react";

const ProtectedRoute = ({ children, role }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();

      if (error || !user) {
        // Redirect unauthenticated users to login
        navigate("/");
        return;
      }

      // Handle role-based authorization
      if (role === "admin") {
        const { data: adminData, error: adminError } = await supabase
          .from("admins")
          .select("email")
          .eq("email", user.email.toLowerCase())
          .single();

        if (!adminData || adminError) {
          navigate("/employee"); // Redirect non-admins to their dashboard
          return;
        }
      } else if (role === "hr") {
        const { data: hrData, error: hrError } = await supabase
          .from("hr") // Replace with your actual table name for HR
          .select("email")
          .eq("email", user.email.toLowerCase())
          .single();

        if (!hrData || hrError) {
          navigate("/employee"); // Redirect non-HR users to their dashboard
          return;
        }
      }

      setIsAuthorized(true);
      setIsLoading(false);
    };

    checkAuth();
  }, [navigate, role]);

  if (isLoading) {
    return (
      <div>
        <LoaderPinwheel />
        Loading...
      </div>
    ); // Loading spinner or placeholder
  }

  return isAuthorized ? children : null;
};

export default ProtectedRoute;
