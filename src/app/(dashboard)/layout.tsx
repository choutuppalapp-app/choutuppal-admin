import Link from "next/link";
import {
  LayoutDashboard,
  List,
  Newspaper,
  BookOpen,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 flex-col bg-gray-900 text-white flex">
        <div className="flex h-16 items-center px-6 text-xl font-bold border-b border-gray-800">
          Admin Panel
        </div>
        <nav className="flex-1 space-y-2 px-4 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
          <Link
            href="/listings"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
          >
            <List size={20} />
            Listings
          </Link>
          <Link
            href="/news"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
          >
            <Newspaper size={20} />
            News
          </Link>
          <Link
            href="/blogs"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
          >
            <BookOpen size={20} />
            Blogs
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        <div className="mx-auto max-w-7xl p-8">{children}</div>
      </main>
    </div>
  );
}
