import AppSidebar from '@/components/ui/app-sidebar'
import {Calendar, Home, Inbox, Search, Settings, User} from 'lucide-react'
import React from 'react'

const Admin_COO = () => {
    // Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Employees",
    url: "#",
    icon: User,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]
  return (
    <div>Admin_COO</div>
  )
}

export default Admin_COO