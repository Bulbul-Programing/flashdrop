import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useGetUserInfoQuery } from "@/redux/features/Auth/authApi";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { Link } from "react-router-dom";

export function NavMain() {
  const { data: userData } = useGetUserInfoQuery(undefined);

  const data = {
    navMain: getSidebarItems(userData?.data?.role),
  };
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {data.navMain.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.url}>{item.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}

          <SidebarGroupContent>
            <SidebarMenu >
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to='/'>Home</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
