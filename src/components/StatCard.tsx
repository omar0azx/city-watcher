import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  sublabel?: string;
}

const StatCard = ({ icon: Icon, value, label, sublabel }: StatCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated transition-all duration-300 animate-fade-in-up">
      <div className="flex items-center justify-between">
        <div className="text-right flex-1">
          <p className="text-3xl font-bold text-foreground mb-1">{value}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
          {sublabel && (
            <p className="text-xs text-muted-foreground mt-0.5">{sublabel}</p>
          )}
        </div>
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
