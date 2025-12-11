interface VehicleCardProps {
  carType: string;
  plateNumber: string;
  imageUrl?: string;
}

const VehicleCard = ({ carType, plateNumber, imageUrl }: VehicleCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-4 shadow-card border border-border">
      <div className="flex gap-4 items-center">
        <div className="w-32 h-24 bg-muted rounded-xl overflow-hidden flex items-center justify-center">
          {imageUrl ? (
            <img src={imageUrl} alt={carType} className="w-full h-full object-cover" />
          ) : (
            <div className="text-muted-foreground text-xs">صورة السيارة</div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-secondary rounded-lg px-4 py-2 text-center">
            <p className="text-xs text-muted-foreground mb-0.5">نوع السيارة</p>
            <p className="font-bold text-foreground">{carType}</p>
          </div>
          <div className="bg-secondary rounded-lg px-4 py-2 text-center">
            <p className="text-xs text-muted-foreground mb-0.5">رقم اللوحة</p>
            <p className="font-bold text-foreground">{plateNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
