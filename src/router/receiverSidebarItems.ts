
import AddParcelTable from "@/components/modules/SenderDashborad/AllParcelTable";
import DBAnalytics from "@/components/modules/SenderDashborad/DBAnalytics";
import Profile from "@/pages/Profile/Profile";
import type { ISidebarItem } from "@/types";


export const receiverSidebarItems: ISidebarItem[] = [
    {
        title: "Dashboard",
        items: [
            {
                title: "Analytics",
                url: "/receiver/analytics",
                component: DBAnalytics,
            },
        ],
    },
    {
        title: "Profile",
        items: [
            {
                title: "Profile",
                url: "/receiver/profile",
                component: Profile,
            },
        ],
    },
    {
        title: "Parcel Management",
        items: [
            {
                title: "All Parcel",
                url: "/receiver/add-parcel",
                component: AddParcelTable,
            },
        ],
    },
];
