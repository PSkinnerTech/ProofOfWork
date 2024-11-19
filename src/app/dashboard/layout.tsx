import { RequireAuth } from "@/components/app/RequireAuth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RequireAuth>
      {children}
    </RequireAuth>
  );
}