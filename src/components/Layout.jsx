import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Home, Folder, Sparkles, Settings } from 'lucide-react';

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Overview', icon: Home, path: '/overview' },
    { name: 'Archive', icon: Folder, path: '/archive' },
    { name: 'Query', icon: Sparkles, path: '/query' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Outlet /> {/* This is where Overview.jsx will load */}

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 flex justify-around py-4">
        {navItems.map((item) => (
          <button 
            key={item.name}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 ${location.pathname === item.path ? 'text-blue-600' : 'text-slate-400'}`}
          >
            <item.icon size={22} />
            <span className="text-[10px] font-bold">{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}