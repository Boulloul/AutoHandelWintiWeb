import { Home, Car, Info, Mail } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import logo from "@/assets/AutohandelWintiLogo.png";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Cars", url: "/cars", icon: Car },
  { title: "Contact", url: "/contact", icon: Mail },
  { title: "About Us", url: "/about", icon: Info },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar collapsible="icon" >
      <SidebarContent >
        <SidebarGroup className="p-2">
          {state === "collapsed" ? (
            <div className="flex justify-center mb-4">
              <img
                src={logo}
                className="w-12 h-12 transition-all duration-200"
                alt="AutoDrive Logo"
              />
            </div>
          ) : (
            <SidebarGroupLabel className="text-sidebar-foreground/80 font-semibold text-lg tracking-wider gap-2 m-2">
              <img src={logo} className="w-10 h-10" alt="AutoDrive Logo" />
              Autohandel Winti
            </SidebarGroupLabel>
          )}

          <SidebarGroupContent className="mt-4">
            <SidebarMenu>
              {items.map((item) => {
                const active = isActive(item.url);

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      size={"lg"}
                      asChild
                      isActive={active}
                      tooltip={item.title}
                      className="transition-all hover:bg-sidebar-accent p-2 font-semibold text-md"
                    >
                      <NavLink
                        to={item.url}
                        end
                        className={`flex items-center gap-3 px-3 py-2 ${
                          active ? "text-orange-500 font-semibold" : "text-sidebar-foreground"
                        }`}
                      >
                        <item.icon
                          className={`${
                            state === "collapsed" ? "mx-auto" : ""
                          } h-6 w-6 ${
                            active ? "text-white" : "text-orange-400 "
                          }`}
                        />
                        {state !== "collapsed" && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
