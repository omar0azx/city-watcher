import { Home, LogOut } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";

interface SidebarProps {
  onExit: () => void;
}

const Sidebar = ({ onExit }: SidebarProps) => {
  return (
    <aside className="w-20 bg-card border-l border-border h-screen flex flex-col items-center py-6 shadow-card">
      <Logo size="sm" showText={false} />
      
      <nav className="flex-1 flex flex-col items-center mt-8 gap-2">
        <div className="flex flex-col items-center gap-1 p-3 bg-primary/10 rounded-xl">
          <Home className="w-5 h-5 text-primary" />
          <span className="text-xs text-primary font-medium">لوحة القيادة</span>
        </div>
      </nav>
      
      <Button
        variant="alert"
        size="sm"
        onClick={onExit}
        className="flex flex-col items-center gap-1 h-auto py-2 px-3"
      >
        <LogOut className="w-5 h-5" />
        <span className="text-xs">الخروج</span>
      </Button>
    </aside>
  );
};

export default Sidebar;
