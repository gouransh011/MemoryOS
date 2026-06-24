import React from 'react';
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, UploadCloud, MessageSquare, Sparkles } from 'lucide-react';

const DashboardLayout = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Upload Meeting', path: '/upload', icon: UploadCloud },
    { name: 'Company Chat', path: '/chat', icon: MessageSquare }
  ];

  const getPageTitle = () => {
    const path = location.pathname;
    if (path.startsWith('/dashboard')) return 'Dashboard';
    if (path.startsWith('/upload')) return 'Upload Meeting & Files';
    if (path.startsWith('/chat')) return 'Company Chat';
    if (path.startsWith('/meeting')) return 'Meeting Details';
    return 'MemoryOS';
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-primary-950 text-primary-100">
      {/* Sidebar navigation */}
      <aside className="w-64 bg-primary-950 border-r border-primary-900 flex flex-col h-full shrink-0">
        <div className="p-6 border-b border-primary-900">
          <Link to="/" className="font-display font-bold text-lg text-white">
            Memory<span className="text-brand-400 font-extrabold">OS</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-brand-600/15 border border-brand-500/20 text-brand-400'
                      : 'text-primary-400 hover:bg-primary-900/60 hover:text-white border border-transparent'
                  }`
                }
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {/* Main Panel */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar / Header */}
        <header className="h-16 border-b border-primary-900 bg-primary-950/40 backdrop-blur-md px-6 flex items-center justify-between shrink-0">
          <h1 className="font-display font-bold text-sm text-white">
            {getPageTitle()}
          </h1>

          <div className="flex items-center gap-4 text-primary-400 text-xs">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-500/10 border border-brand-500/20 rounded-full text-brand-400 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Mock Mode Active</span>
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
