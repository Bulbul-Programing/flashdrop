
import AddParcelTable from "@/components/modules/SenderDashborad/AllParcelTable";
import DBAnalytics from "@/components/modules/SenderDashborad/DBAnalytics";
import Profile from "@/pages/Profile/Profile";
import type { ISidebarItem } from "@/types";


export const senderSidebarItems: ISidebarItem[] = [
    {
        title: "Dashboard",
        items: [
            {
                title: "Analytics",
                url: "/sender/analytics",
                component: DBAnalytics,
            },
        ],
    },
    {
        title: "Profile",
        items: [
            {
                title: "Profile",
                url: "/sender/profile",
                component: Profile,
            },
        ],
    },
    {
        title: "Parcel Management",
        items: [
            {
                title: "Add New Parcel",
                url: "/sender/add-parcel",
                component: AddParcelTable,
            },
        ],
    },
];
