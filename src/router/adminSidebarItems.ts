
import AddParcelTable from "@/components/modules/SenderDashborad/AllParcelTable";
import DBAnalytics from "@/components/modules/SenderDashborad/DBAnalytics";
import MyParcel from "@/components/modules/SenderDashborad/MyParcel";
import type { ISidebarItem } from "@/types";


export const adminSidebarItems: ISidebarItem[] = [
    {
        title: "Dashboard",
        items: [
            {
                title: "Analytics",
                url: "/admin/analytics",
                component: DBAnalytics,
            },
        ],
    },
    {
        title: "Parcel Management",
        items: [
            {
                title: "Add New Parcel",
                url: "/admin/add-parcel",
                component: AddParcelTable,
            },
            {
                title: "My Parcel",
                url: "/admin/add-division",
                component: MyParcel,
            },
        ],
    },
];
