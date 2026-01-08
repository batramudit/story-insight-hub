import { Home, Store, Clapperboard, User, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'search', label: 'Search', icon: Search },
  { id: 'store', label: 'Store', icon: Store },
  { id: 'studio', label: 'Studio', icon: Clapperboard },
];

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <div className="w-16 h-full bg-sidebar border-r border-sidebar-border flex flex-col items-center py-4">
      {/* Logo */}
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-crimson flex items-center justify-center mb-8 blood-glow">
        <span className="text-xl">🩸</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                'w-12 h-12 rounded-xl flex flex-col items-center justify-center gap-1 transition-all',
                activeTab === item.id
                  ? 'bg-sidebar-accent text-sidebar-primary'
                  : 'text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/50'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px]">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* User */}
      <button className="w-12 h-12 rounded-xl flex flex-col items-center justify-center gap-1 text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-all">
        <User className="w-5 h-5" />
        <span className="text-[10px]">Login</span>
      </button>
    </div>
  );
}
