import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Bell,
  ChevronDown,
  ChevronRight,
  ListPlus,
  Menu,
  MonitorSmartphone,
  Search,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Cadastro",
    icon: ListPlus,
    items: [
      { title: "Sistemas", href: "/cadastro" },
      { title: "Perfil", href: "/cadastro/perfil" },
    ],
  },
  {
    title: "Consultas",
    icon: Search,
    items: [
      { title: "Histórico Notificações", href: "/consultas" },
      { title: "Dispositivos Online", href: "/consultas/dispOnline" },
    ],
  },
  {
    title: "Notificação",
    icon: Bell,
    items: [{ title: "Notificação Manual", href: "/notificacao" }],
  },
];

function getInitials(text: string) {
  return text
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase())
    .join("");
}

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const collapsedMobile = collapsed && mobileOpen ? false : collapsed;

  const [openStates, setOpenStates] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    navigation.forEach((item) => {
      init[item.title] = !!item.items?.some((sub) => pathname === sub.href);
    });
    return init;
  });

  useEffect(() => {
    setOpenStates((prev) => {
      const next = { ...prev };
      navigation.forEach((item) => {
        if (item.items) {
          next[item.title] = item.items.some((sub) => pathname === sub.href);
        }
      });
      return next;
    });
  }, [pathname]);

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
          collapsedMobile ? "w-14" : "max-w-52 w-52 min-w-52"
        } ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
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
                    open={openStates[item.title]}
                    onOpenChange={(open) =>
                      setOpenStates((prev) => ({
                        ...prev,
                        [item.title]: open,
                      }))
                    }
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        className="w-full justify-start h-10 px-2"
                        variant="ghost"
                      >
                        <item.icon className="w-4 h-4 shrink-0" />
                        {!collapsedMobile && (
                          <>
                            <span className="ml-2">{item.title}</span>
                            {openStates[item.title] ? (
                              <ChevronDown className="ml-auto w-4 h-4" />
                            ) : (
                              <ChevronRight className="ml-auto w-4 h-4" />
                            )}
                          </>
                        )}
                      </Button>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="collapsibleContent pl-2 overflow-hidden data-[state=open]:animate-open data-[state=closed]:animate-closed">
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
                            {collapsedMobile ? (
                              <span className="ml-4">
                                {getInitials(sub.title)}
                              </span>
                            ) : (
                              <span className="ml-4">{sub.title}</span>
                            )}
                          </Link>
                        </Button>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Button
                    className="w-full justify-start h-10 px-2"
                    variant="ghost"
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
            © TI4.0 SignalGRE
          </div>
        )}
      </div>
    </>
  );
}
