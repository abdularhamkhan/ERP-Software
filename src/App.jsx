import { useRoutes, useLocation, useNavigate } from "react-router-dom";
import routes from "./Routes/routes";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./components/ui/app-sidebar";
import { useEffect, useState } from "react";
import ProtectedRoute from "@/lib/middleware"; // Import ProtectedRoute logic
import { handleRoleRedirect } from "@/lib/roleRedirect"; // Import role-based redirection logic
import { supabase } from "@/lib/client/client"; // Supabase client

const App = () => {
  const routing = useRoutes(routes);
  const location = useLocation();
  const navigate = useNavigate();

  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check the current route
  const isLoginRoute = location.pathname === "/";
  const isWelcomeRoute = location.pathname === "/welcome";
  const isNotFoundRoute = location.pathname === "/*";

  useEffect(() => {
    // Authenticate the user and set the role
    const checkAuth = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();

        if (error || !user) {
          setIsAuthenticated(false);
          setIsLoading(false);
          return;
        }

        setIsAuthenticated(true);

        // Determine user role (admin or employee)
        const { data: adminData } = await supabase
          .from("admins")
          .select("email")
          .eq("email", user.email.toLowerCase())
          .single();

        setUserRole(adminData ? "admin" : "employee");
        setIsLoading(false);
      } catch (err) {
        console.error("Error checking authentication:", err);
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    // Handle role-based redirection on specific routes
    if (isWelcomeRoute && !isLoading) {
      handleRoleRedirect(navigate);
    }

    // Redirect unauthenticated users away from protected routes
    if (!isAuthenticated && !isLoading) {
      const protectedRoutes = [
        "/admin",
        "/hr/manager",
        "/employee",
        // Add other protected routes here
      ];

      if (protectedRoutes.some((route) => location.pathname.startsWith(route))) {
        navigate("/");
      }
    }
  }, [isAuthenticated, isLoading, isWelcomeRoute, navigate, location.pathname]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <SidebarProvider>
      {/* Conditionally render the sidebar and trigger */}
      {!isLoginRoute && !isWelcomeRoute && !isNotFoundRoute && <AppSidebar />}
      <main>
        {!isLoginRoute && !isWelcomeRoute && !isNotFoundRoute && <SidebarTrigger />}
        {isAuthenticated && (
          // Wrap routing dynamically for role-based restrictions
          <ProtectedRoute role={userRole}>{routing}</ProtectedRoute>
        )}
        {!isAuthenticated && routing}
      </main>
    </SidebarProvider>
  );
};

export default App;
