import {
  BarChart,
  Bell,
  DollarSign,
  FileText,
  Home,
  LogOut,
  Settings,
  User,
  Users,
} from "lucide-react";

export const MENU_DATA = [
  {
    id: 1,
    title: "Dashboard",
    url: "/dashboard",
    icon: <Home className="h-4 w-4" />,
  },
  {
    id: 2,
    title: "Customers",
    url: "/dashboard/customers",
    icon: <Users className="h-4 w-4" />,
  },
  {
    id: 3,
    title: "Invoices",
    url: "/dashboard/invoices",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    id: 4,
    title: "Payments",
    url: "/dashboard/payments",
    icon: <DollarSign className="h-4 w-4" />,
  },
  {
    id: 5,
    title: "Reports",
    url: "/dashboard/reports",
    icon: <BarChart className="h-4 w-4" />,
  },
  {
    id: 6,
    title: "Notifications",
    url: "/dashboard/notifications",
    icon: <Bell className="h-4 w-4" />,
  },
  {
    id: 7,
    title: "Settings",
    url: "/dashboard/settings",
    icon: <Settings className="h-4 w-4" />,
  },
  {
    id: 8,
    title: "Profile",
    url: "/dashboard/profile",
    icon: <User className="h-4 w-4" />,
  },
  {
    id: 9,
    title: "Logout",
    url: "/dashboard/logout",
    icon: <LogOut className="h-4 w-4" />,
  },
];
