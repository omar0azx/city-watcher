import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";
import AlertCard from "@/components/AlertCard";

const mockAlerts = [
  {
    id: 1,
    plateNumber: "123 ABC",
    carType: "BMW",
    timeToCheckpoint: "قادم للمحطة خلال 5 دقائق",
  },
  {
    id: 2,
    plateNumber: "456 XYZ",
    carType: "Toyota",
    timeToCheckpoint: "قادم للمحطة خلال 8 دقائق",
  },
  {
    id: 3,
    plateNumber: "789 DEF",
    carType: "Mercedes",
    timeToCheckpoint: "قادم للمحطة خلال 12 دقائق",
  },
];

const SearchPage = () => {
  const [plateNumber, setPlateNumber] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (plateNumber.trim()) {
      navigate(`/dashboard?plate=${encodeURIComponent(plateNumber)}`);
    }
  };

  const handleAlertClick = (alert: typeof mockAlerts[0]) => {
    navigate(`/dashboard?plate=${encodeURIComponent(alert.plateNumber)}`);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Green Background with Alerts */}
      <div className="w-1/2 bg-primary relative flex items-center justify-center">
        {/* Curved edge */}
        <div className="absolute top-0 bottom-0 -left-1 right-0 bg-primary rounded-bl-[80px]" />
        
        {/* Alerts Panel - Centered */}
        <div className="relative z-10 bg-card rounded-2xl shadow-elevated p-6 w-[380px] max-h-[500px] overflow-hidden">
          <h2 className="font-bold text-xl text-foreground mb-4 text-center">الحالات الطارئة</h2>
          <div className="space-y-3 overflow-y-auto max-h-[380px] pr-1">
            {mockAlerts.map((alert, index) => (
              <div key={alert.id} style={{ animationDelay: `${index * 100}ms` }}>
                <AlertCard
                  plateNumber={alert.plateNumber}
                  carType={alert.carType}
                  timeToCheckpoint={alert.timeToCheckpoint}
                  onClick={() => handleAlertClick(alert)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Search Section */}
      <div className="w-1/2 flex flex-col items-center justify-center p-8">
        <div className="max-w-md w-full flex flex-col items-center">
          <div className="mb-8">
            <Logo size="lg" />
          </div>
          
          <h2 className="text-4xl font-bold text-foreground mb-10">
            بحث عن السيارة
          </h2>
          
          <div className="space-y-4 w-full">
            <Input
              type="text"
              placeholder="ادخل رقم اللوحة"
              value={plateNumber}
              onChange={(e) => setPlateNumber(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="h-14 text-center text-lg border-2 border-primary rounded-full bg-background"
            />
            
            <Button
              onClick={handleSearch}
              className="w-full h-14 rounded-full text-lg"
              size="lg"
              variant="hero"
            >
              بحث
            </Button>
            
            <p className="text-center text-sm text-muted-foreground mt-6">
              ليس لدي رقم السيارة؟{" "}
              <button className="text-primary hover:underline font-medium">
                بحث بطريقة أخرى
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
