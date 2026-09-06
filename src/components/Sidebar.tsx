import Link from 'next/link';
import { Home, Folder, FileText, Image as ImageIcon, Users, Settings } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 text-slate-200 min-h-screen p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-8 text-white px-2">Choutuppal Admin</h2>
      <nav className="space-y-1 flex-1">
        <Link href="/" className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded-md transition-colors">
          <Home size={18} /> Dashboard
        </Link>
        
        <div className="pt-4">
          <span className="flex items-center gap-2 p-2 text-slate-400 text-xs font-semibold uppercase tracking-wider">
            <Folder size={14} /> Directory
          </span>
          <div className="pl-4 space-y-1 mt-1 border-l border-slate-800 ml-3">
            <Link href="/listings" className="block p-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Listings</Link>
            <Link href="/real-estate" className="block p-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Real Estate</Link>
            <Link href="/villages" className="block p-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Villages</Link>
          </div>
        </div>

        <div className="pt-4">
          <span className="flex items-center gap-2 p-2 text-slate-400 text-xs font-semibold uppercase tracking-wider">
            <FileText size={14} /> Content
          </span>
          <div className="pl-4 space-y-1 mt-1 border-l border-slate-800 ml-3">
            <Link href="/news" className="block p-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">News</Link>
            <Link href="/blogs" className="block p-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Blogs</Link>
            <Link href="/categories" className="block p-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Categories</Link>
          </div>
        </div>

        <div className="pt-4">
          <span className="flex items-center gap-2 p-2 text-slate-400 text-xs font-semibold uppercase tracking-wider">
            <ImageIcon size={14} /> Media
          </span>
          <div className="pl-4 space-y-1 mt-1 border-l border-slate-800 ml-3">
            <Link href="/banners" className="block p-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Banners</Link>
            <Link href="/stories" className="block p-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Stories</Link>
          </div>
        </div>

        <div className="pt-4 space-y-1">
          <Link href="/users" className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded-md transition-colors">
            <Users size={18} /> Users
          </Link>
          <Link href="/settings" className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded-md transition-colors">
            <Settings size={18} /> Settings
          </Link>
        </div>
      </nav>
    </div>
  );
}
