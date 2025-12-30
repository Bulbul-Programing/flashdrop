import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";

const SidebarSkeleton = () => {
    return (
        <SidebarGroup className="overflow-x-hidden">
            <SidebarGroupContent className="flex flex-col gap-4">
                <SidebarMenu>
                    {/* Group 1 */}
                    <SidebarGroup>
                        <SidebarGroupLabel>
                            <Skeleton className="h-4 w-24" />
                        </SidebarGroupLabel>

                        <SidebarGroupContent>
                            <SidebarMenu>
                                {[...Array(3)].map((_, index) => (
                                    <SidebarMenuItem key={index}>
                                        <Skeleton className="h-9 w-full rounded-md" />
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>

                    {/* Group 2 */}
                    <SidebarGroup>
                        <SidebarGroupLabel>
                            <Skeleton className="h-4 w-20" />
                        </SidebarGroupLabel>

                        <SidebarGroupContent>
                            <SidebarMenu>
                                {[...Array(2)].map((_, index) => (
                                    <SidebarMenuItem key={index}>
                                        <Skeleton className="h-9 w-full rounded-md" />
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>

                    {/* Home Button */}
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <Skeleton className="h-9 w-full rounded-md" />
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
};

export default SidebarSkeleton;
