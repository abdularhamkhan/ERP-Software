import React from "react";
import AppSidebar from "@/components/ui/app-sidebar";
import { Home, User, Crown } from "lucide-react";
import CreateAdmins from "./AdminCreation";

const Admin_CEO = () => {
  // Menu items for the CEO.
  const items = [
    {
      title: "Home",
      url: "home", // Section ID
      icon: Home,
    },
    {
      title: "Employees",
      url: "employees", // Section ID
      icon: User,
    },
    {
      title: "Admins",
      url: "admins", // Section ID
      icon: Crown,
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <AppSidebar items={items} />

      {/* Main content */}
      <div className="flex-1 p-4">
        <section id="home" className="h-screen">
          <h1 className="text-2xl">Home Section</h1>
          <p>Welcome to the Home section.</p>
        </section>

        <section id="employees" className="h-screen">
          <h1 className="text-2xl">Employees Section</h1>
          <p>Manage employees here.</p>
        </section>

        <section id="reports" className="h-screen">
          <h1 className="text-2xl">Admins Section</h1>
          <CreateAdmins/>
        </section>
      </div>
    </div>
  );
};

export default Admin_CEO;
