import { MapPin, Navigation } from "lucide-react";

const MapPlaceholder = () => {
  return (
    <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden h-[400px] relative">
      {/* Map background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent opacity-50" />
      
      {/* Grid pattern to simulate map */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Route visualization */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Passed route (solid green) */}
        <path
          d="M 100 350 Q 150 300 200 280 T 300 220 T 400 180"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Predicted route (dashed) */}
        <path
          d="M 400 180 Q 500 150 600 120 T 750 100"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="10 10"
        />
      </svg>
      
      {/* Checkpoint markers */}
      <div className="absolute top-[85%] right-[12%]">
        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg">
          <MapPin className="w-4 h-4 text-primary-foreground" />
        </div>
      </div>
      <div className="absolute top-[55%] right-[35%]">
        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg">
          <MapPin className="w-4 h-4 text-primary-foreground" />
        </div>
      </div>
      <div className="absolute top-[45%] right-[50%]">
        <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center shadow-lg animate-pulse">
          <Navigation className="w-5 h-5 text-destructive-foreground" />
        </div>
      </div>
      {/* Predicted checkpoints */}
      <div className="absolute top-[30%] right-[70%]">
        <div className="w-6 h-6 bg-primary/50 rounded-full flex items-center justify-center shadow-lg border-2 border-dashed border-primary">
          <MapPin className="w-4 h-4 text-primary" />
        </div>
      </div>
      <div className="absolute top-[25%] right-[85%]">
        <div className="w-6 h-6 bg-primary/50 rounded-full flex items-center justify-center shadow-lg border-2 border-dashed border-primary">
          <MapPin className="w-4 h-4 text-primary" />
        </div>
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="flex flex-col gap-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-primary rounded" />
            <span className="text-muted-foreground">المسار المكتشف</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-primary rounded border-dashed" style={{ borderTop: '2px dashed hsl(var(--primary))' }} />
            <span className="text-muted-foreground">المسار المتوقع</span>
          </div>
        </div>
      </div>
      
      {/* Map controls placeholder */}
      <div className="absolute bottom-4 left-4 flex flex-col gap-2">
        <button className="w-8 h-8 bg-card rounded-lg shadow-md flex items-center justify-center text-foreground hover:bg-accent transition-colors">
          +
        </button>
        <button className="w-8 h-8 bg-card rounded-lg shadow-md flex items-center justify-center text-foreground hover:bg-accent transition-colors">
          −
        </button>
      </div>
    </div>
  );
};

export default MapPlaceholder;
