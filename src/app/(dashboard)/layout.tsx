import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        <div className="mx-auto max-w-7xl p-8">{children}</div>
      </main>
    </div>
  );
}
