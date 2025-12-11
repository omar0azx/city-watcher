import { Car } from "lucide-react";

interface AlertCardProps {
  plateNumber: string;
  carType: string;
  timeToCheckpoint: string;
  onClick: () => void;
}

const AlertCard = ({ plateNumber, carType, timeToCheckpoint, onClick }: AlertCardProps) => {
  return (
    <div 
      onClick={onClick}
      className="bg-card rounded-xl p-4 shadow-card cursor-pointer hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] border border-border animate-slide-in-right"
    >
      <div className="flex items-start gap-3">
        <div className="w-3 h-3 bg-destructive rounded-full animate-pulse-alert mt-1" />
        <div className="flex-1">
          <div className="flex gap-4 mb-3">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">نوع السيارة</p>
              <p className="font-semibold text-sm text-foreground">{carType}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">رقم اللوحة</p>
              <p className="font-semibold text-sm text-foreground">{plateNumber}</p>
            </div>
          </div>
          <div className="bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-lg text-center">
            {timeToCheckpoint}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
