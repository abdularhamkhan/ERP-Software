import AppSidebar from '@/components/ui/app-sidebar'
import {Calendar, Home, Inbox, Search, Settings, User} from 'lucide-react'
import React from 'react'

const Admin_CFO = () => {
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
    <div>
      <AppSidebar items={items}/>
      Admin_CFO
      </div>
  )
}

export default Admin_CFO