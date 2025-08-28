import type { ComponentType } from "react";

export type ISidebarItem = {
    title: string;
    items: {
        title: string;
        url: string;
        component: ComponentType;
    }[];
}