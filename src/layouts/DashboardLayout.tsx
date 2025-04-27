import { Outlet } from "react-router-dom";
import { AppSidebar } from "../components/app-sidebar";
import { Header } from "../components/header";
import { SidebarInset, SidebarProvider } from "../components/ui/sidebar";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
