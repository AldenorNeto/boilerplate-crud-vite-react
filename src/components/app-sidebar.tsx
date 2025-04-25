import {
  BarChart3,
  ChevronRight,
  Home,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const navigation = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/",
  },
  {
    title: "Products",
    icon: Package,
    items: [
      {
        title: "All Products",
        href: "/products",
      },
      {
        title: "Categories",
        href: "/products/categories",
      },
      {
        title: "Inventory",
        href: "/products/inventory",
      },
    ],
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    items: [
      {
        title: "All Orders",
        href: "/orders",
      },
      {
        title: "Pending",
        href: "/orders/pending",
      },
      {
        title: "Completed",
        href: "/orders/completed",
      },
    ],
  },
  {
    title: "Customers",
    icon: Users,
    items: [
      {
        title: "All Customers",
        href: "/customers",
      },
      {
        title: "Segments",
        href: "/customers/segments",
      },
    ],
  },
  {
    title: "Analytics",
    icon: BarChart3,
    items: [
      {
        title: "Overview",
        href: "/analytics",
      },
      {
        title: "Reports",
        href: "/analytics/reports",
      },
    ],
  },
];

export function AppSidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Package className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">CRUD App</span>
                  <span className="text-xs text-muted-foreground">v1.0.0</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigation.map((item) => {
            const isActive = item.href ? pathname === item.href : false;
            const hasSubItems = !!item.items?.length;

            if (!hasSubItems) {
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive}>
                    <Link to={item.href || "#"}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            }

            const isSubActive = item.items?.some(
              (subItem) => pathname === subItem.href
            );

            return (
              <Collapsible
                key={item.title}
                defaultOpen={isSubActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => {
                        const isSubItemActive = pathname === subItem.href;
                        return (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={isSubItemActive}
                            >
                              <Link to={subItem.href}>{subItem.title}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 text-xs text-muted-foreground">
          <p>© 2024 CRUD App</p>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
