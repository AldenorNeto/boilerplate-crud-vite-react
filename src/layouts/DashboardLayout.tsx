import { Outlet } from "react-router-dom";
import { AppSidebar } from "../components/app-sidebar";
import { Header } from "../components/header";
import { SidebarInset, SidebarProvider } from "../components/ui/sidebar";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="">
        <Header />
        <main className="flex flex-1 max-h-[calc(100vh-56px)]">
          <div className="p-4 w-[calc(100%-5px)] overflow-auto">
            <Outlet />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
