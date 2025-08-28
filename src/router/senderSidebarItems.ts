
import AddParcel from "@/components/modules/SenderDashborad/AddParcel";
import DBAnalytics from "@/components/modules/SenderDashborad/DBAnalytics";
import MyParcel from "@/components/modules/SenderDashborad/MyParcel";
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
        title: "Parcel Management",
        items: [
            {
                title: "Add New Parcel",
                url: "/sender/add-parcel",
                component: AddParcel,
            },
            {
                title: "My Parcel",
                url: "/sender/add-division",
                component: MyParcel,
            },
        ],
    },
];
