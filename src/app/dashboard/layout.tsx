import { DashboardNavbar } from "@/components/app/dashboard/Navbar";
import { RequireAuth } from "@/components/app/RequireAuth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RequireAuth>
      <div className="flex">
        <DashboardNavbar />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </RequireAuth>
  );
}