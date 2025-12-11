import { MapPin } from "lucide-react";

interface PredictedStationsProps {
  stations: string[];
}

const PredictedStations = ({ stations }: PredictedStationsProps) => {
  return (
    <div className="bg-card rounded-2xl p-4 shadow-card border border-border">
      <p className="text-sm font-semibold text-foreground mb-3 text-center">
        من المتوقع مرور المركبة من خلال<br />
        {stations.length} محطات هما:
      </p>
      <div className="space-y-2">
        {stations.map((station, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>- {station}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PredictedStations;
