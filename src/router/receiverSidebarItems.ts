
import AddParcel from "@/components/modules/SenderDashborad/AddParcel";
import DBAnalytics from "@/components/modules/SenderDashborad/DBAnalytics";
import MyParcel from "@/components/modules/SenderDashborad/MyParcel";
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
                title: "Add New Parcel",
                url: "/receiver/add-parcel",
                component: AddParcel,
            },
            {
                title: "My Parcel",
                url: "/receiver/add-division",
                component: MyParcel,
            },
        ],
    },
];
