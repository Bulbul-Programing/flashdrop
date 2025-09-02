import type { ComponentType } from "react";

export type ISidebarItem = {
    title: string;
    items: {
        title: string;
        url: string;
        component: ComponentType;
    }[];
}

export type TReceiverUserForCreateParcel = {
    _id: string;
    name: string;
    phone: string;
}