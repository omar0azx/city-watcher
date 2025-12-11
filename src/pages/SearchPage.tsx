import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Bell } from "lucide-react";
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-hero opacity-90 rounded-br-[100px]" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 min-h-screen flex">
        {/* Alerts Panel */}
        <div className="w-80 p-6 flex flex-col">
          <div className="bg-card rounded-2xl shadow-elevated p-4 flex-1 max-h-[500px] overflow-hidden">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
              <h2 className="font-bold text-lg text-foreground">الحالات الطارئة</h2>
              <div className="relative">
                <Bell className="w-5 h-5 text-primary" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full text-[10px] text-destructive-foreground flex items-center justify-center">
                  {mockAlerts.length}
                </span>
              </div>
            </div>
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

        {/* Main Search Area */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="bg-card rounded-3xl shadow-elevated p-10 max-w-md w-full animate-fade-in-up">
            <div className="flex justify-center mb-8">
              <Logo size="lg" />
            </div>
            
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              بحث عن السيارة
            </h2>
            
            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="ادخل رقم اللوحة"
                  value={plateNumber}
                  onChange={(e) => setPlateNumber(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="h-12 text-center text-lg border-2 border-primary/30 focus:border-primary rounded-xl bg-background"
                />
              </div>
              
              <Button
                onClick={handleSearch}
                className="w-full"
                size="lg"
                variant="hero"
              >
                <Search className="w-5 h-5" />
                بحث
              </Button>
              
              <p className="text-center text-sm text-muted-foreground mt-4">
                ليس لدي رقم السيارة؟{" "}
                <button className="text-primary hover:underline font-medium">
                  بحث بطريقة أخرى
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
