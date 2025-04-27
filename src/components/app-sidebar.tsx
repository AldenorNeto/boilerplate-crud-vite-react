import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  BarChart3,
  ChevronRight,
  Menu,
  MonitorSmartphone,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Products",
    icon: Package,
    items: [
      { title: "All Products", href: "/products" },
      { title: "Categories", href: "/products/categories" },
      { title: "Inventory", href: "/products/inventory" },
    ],
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    items: [
      { title: "All Orders", href: "/orders" },
      { title: "Pending", href: "/orders/pending" },
      { title: "Completed", href: "/orders/completed" },
    ],
  },
  {
    title: "Customers",
    icon: Users,
    items: [
      { title: "All Customers", href: "/customers" },
      { title: "Segments", href: "/customers/segments" },
    ],
  },
  {
    title: "Analytics",
    icon: BarChart3,
    items: [
      { title: "Overview", href: "/analytics" },
      { title: "Reports", href: "/analytics/reports" },
    ],
  },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const collapsedMobile = collapsed && mobileOpen ? false : collapsed;

  return (
    <>
      <div className="lg:hidden fixed top-4 left-4 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-20"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={`flex flex-col bg-background h-screen border-r fixed lg:relative z-30 transition-all duration-300 ease-in-out ${
          collapsedMobile ? "w-16" : "w-64"
        } ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="flex items-center justify-between p-2 border-b h-14">
          <Link to="/" className="flex items-center gap-2 overflow-hidden">
            <div className="flex aspect-square w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0">
              <MonitorSmartphone className="w-4 h-4" />
            </div>
            {!collapsedMobile && (
              <div className="flex flex-col">
                <span className="font-semibold leading-none">SignalGRE</span>
                <span className="text-xs text-muted-foreground">v1.0.0</span>
              </div>
            )}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsedMobile)}
            className="hidden lg:inline-flex shrink-0"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto py-2">
          <nav>
            {navigation.map((item) => (
              <div key={item.title} className="px-2">
                {item.items ? (
                  <Collapsible
                    defaultOpen={item.items.some(
                      (sub) => pathname === sub.href
                    )}
                  >
                    <div className="group/collapsible">
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-start h-10 px-2"
                        >
                          <item.icon className="w-4 h-4 shrink-0" />
                          {!collapsedMobile && (
                            <>
                              <span className="ml-2">{item.title}</span>
                              <ChevronRight className="ml-auto w-4 h-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                            </>
                          )}
                        </Button>
                      </CollapsibleTrigger>

                      <CollapsibleContent className="pl-2">
                        {item.items.map((sub) => (
                          <Button
                            key={sub.title}
                            variant={
                              pathname === sub.href ? "secondary" : "ghost"
                            }
                            asChild
                            className="w-full justify-start h-8 px-2"
                          >
                            <Link to={sub.href}>
                              {!collapsedMobile && (
                                <span className="ml-4">{sub.title}</span>
                              )}
                            </Link>
                          </Button>
                        ))}
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                ) : (
                  <Button
                    variant="ghost"
                    className="w-full justify-start h-10 px-2"
                    asChild
                  >
                    <div>
                      <item.icon className="w-4 h-4" />
                      {!collapsedMobile && (
                        <span className="ml-2">{item.title}</span>
                      )}
                    </div>
                  </Button>
                )}
              </div>
            ))}
          </nav>
        </div>

        {!collapsedMobile && (
          <div className="p-4 text-xs text-muted-foreground border-t">
            <p>© TI4.0 SignalGRE</p>
          </div>
        )}
      </div>
    </>
  );
}
