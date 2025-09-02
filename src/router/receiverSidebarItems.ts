
import AddParcelTable from "@/components/modules/SenderDashborad/AllParcelTable";
import DBAnalytics from "@/components/modules/SenderDashborad/DBAnalytics";
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
