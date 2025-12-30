import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useGetUserInfoQuery } from "@/redux/features/Auth/authApi";
import SidebarSkeleton from "@/Skeleton/SidebarSkeleton";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { Link, useLocation } from "react-router-dom";

export function NavMain() {
  const { data: userData, isLoading } = useGetUserInfoQuery(undefined);
  const location = useLocation()
  const data = {
    navMain: getSidebarItems(userData?.data?.role),
  };

  if (isLoading) {
    return <SidebarSkeleton />
  }

  return (
    <SidebarGroup className="overflow-x-hidden">
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {data.navMain.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel className="">{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton className={`${location.pathname === item.url ? "font-semibold bg-[#F5AB35] " : "bg-[#ffeccd] text-black"} border  hover:bg-[#F5AB35] transition-all`} asChild>
                        <Link to={item.url}>{item.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu >
                <SidebarMenuItem>
                  <SidebarMenuButton className={` font-semibold bg-[#ffeccd] text-black border  hover:bg-[#F5AB35] transition-all`} asChild>
                    <Link to='/'>Home</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
