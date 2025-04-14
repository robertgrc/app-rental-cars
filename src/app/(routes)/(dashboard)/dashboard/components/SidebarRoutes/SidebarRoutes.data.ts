import { Briefcase, Calendar, Car, Heart, Inbox } from "lucide-react";

export const dataGeneralSidebar = [
    {
        icon: Car,
        label: "Cars",
        href: "/dashboard"
    },
    {
        icon: Calendar,
        label: "Cars Reserves",
        href: "/reserves"
    },
    {
        icon: Heart,
        label: "Loved Cars",
        href: "/loved-cars"
    },
]

export const dataAdminSidebar = [
    {
      icon: Briefcase,
      label: "Manage your cars",
      href: "/dashboard/admin/cars-manager"
    },
    {
      icon: Inbox,
      label: "All reserves",
      href: "/dashboard/admin/all-reserves"
    },
  ]