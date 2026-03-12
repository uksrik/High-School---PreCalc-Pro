
import React from 'react';

interface NavItemProps {
  label: string;
  icon: string;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
      active 
        ? 'bg-indigo-600 text-white shadow-md' 
        : 'text-slate-600 hover:bg-indigo-50 hover:text-indigo-600'
    }`}
  >
    <span className="text-xl">{icon}</span>
    <span className="font-medium">{label}</span>
  </button>
);

interface NavigationProps {
  currentView: string;
  setView: (view: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'curriculum', label: 'Curriculum', icon: '📚' },
    { id: 'study', label: 'Study Center', icon: '🎓' },
    { id: 'lens', label: 'Larson Lens', icon: '🔍' },
    { id: 'cheatsheets', label: 'Cheat Sheets', icon: '📝' },
  ];

  return (
    <nav className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 h-screen p-4 sticky top-0">
      <div className="flex items-center space-x-2 px-4 mb-8">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">P</div>
        <h1 className="text-xl font-bold text-indigo-900 tracking-tight">PreCalc Pro</h1>
      </div>
      
      <div className="space-y-1 flex-1">
        {navItems.map(item => (
          <NavItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            active={currentView === item.id}
            onClick={() => setView(item.id)}
          />
        ))}
      </div>

      <div className="mt-auto p-4 bg-indigo-50 rounded-xl">
        <p className="text-xs font-semibold text-indigo-600 uppercase mb-1">Status</p>
        <p className="text-sm font-bold text-indigo-900">Multi-Source Ready</p>
        <div className="w-full bg-indigo-200 h-1 rounded-full mt-2 overflow-hidden">
          <div className="bg-indigo-600 h-full w-[65%]" />
        </div>
        <p className="text-[10px] text-slate-500 mt-1">Unified Teaching Hub</p>
      </div>
    </nav>
  );
};

export default Navigation;
