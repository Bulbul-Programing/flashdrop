import { role } from "@/constants/role";
import { receiverSidebarItems } from "@/router/receiverSidebarItems";
import { senderSidebarItems } from "@/router/senderSidebarItems";
import type { TRole } from "@/types/TRole";


export const getSidebarItems = (userRole: TRole) => {
    switch (userRole) {
        case role.sender:
            return [...senderSidebarItems];
        case role.receiver:
            return [...receiverSidebarItems];
        default:
            return [];
    }
};
