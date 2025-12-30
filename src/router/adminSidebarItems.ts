
import AdminAllParcel from "@/components/modules/AdminDahsboard/AdminAllParcel";
import AdminDBAnalytics from "@/components/modules/AdminDahsboard/AdminDBAnalytics";
import AllUsers from "@/components/modules/AdminDahsboard/AllUsers";
import Profile from "@/pages/Profile/Profile";
import type { ISidebarItem } from "@/types";


export const adminSidebarItems: ISidebarItem[] = [
    {
        title: "Dashboard",
        items: [
            {
                title: "Analytics",
                url: "/admin/analytics",
                component: AdminDBAnalytics,
            },
        ],
    },
    {
        title: "Profile",
        items: [
            {
                title: "Profile",
                url: "/admin/profile",
                component: Profile,
            },
        ],
    },
    {
        title: "Parcel Management",
        items: [
            {
                title: "Add New Parcel",
                url: "/admin/add-parcel",
                component: AdminAllParcel,
            },
        ],
    },
    {
        title: "User Management",
        items: [
            {
                title: "Users",
                url: "/admin/users",
                component: AllUsers,
            },
        ],
    },
];
