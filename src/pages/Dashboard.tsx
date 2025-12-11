import { useSearchParams, useNavigate } from "react-router-dom";
import { Search, Bell, MapPin, Navigation, Gauge } from "lucide-react";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";
import StatCard from "@/components/StatCard";
import VehicleCard from "@/components/VehicleCard";
import PredictedStations from "@/components/PredictedStations";
import MapPlaceholder from "@/components/MapPlaceholder";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";

// Mock data
const vehicleData = {
  plateNumber: "123 ABC",
  carType: "BMW",
  passedStations: 15,
  predictedStations: 2,
  speed: 120,
  predictedStationNames: ["محطة الملقا", "محطة النرجس"],
};

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const plateNumber = searchParams.get("plate") || vehicleData.plateNumber;

  const handleExit = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex" dir="rtl">
      {/* Sidebar */}
      <Sidebar onExit={handleExit} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-card border-b border-border px-6 flex items-center justify-between shadow-sm">
          <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Navigation className="w-5 h-5 text-primary" />
            لوحة القيادة
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="بحث"
                className="w-64 pr-10 h-10 rounded-xl border-border"
              />
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </Button>
          </div>
          
          <div className="flex items-center gap-3">
            <Logo size="sm" showText={false} />
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <StatCard
              icon={MapPin}
              value={`${vehicleData.predictedStations} محطة`}
              label="عدد المحطات المتوقع"
              sublabel="المرور منها"
            />
            <StatCard
              icon={Navigation}
              value={`${vehicleData.passedStations} محطة`}
              label="عدد المحطات"
              sublabel="السابقة"
            />
            <StatCard
              icon={Gauge}
              value={`${vehicleData.speed} كم/س`}
              label="سرعة المركبة"
            />
          </div>

          {/* Map Description */}
          <div className="mb-4">
            <p className="text-muted-foreground text-center">
              معلومات وموقع السيارة بالخريطة مع تحديد النقاط السابقة والنقاط المتوقع الذهاب اليها
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Map Section */}
            <div className="lg:col-span-3">
              <div className="mb-4">
                <Button variant="default" size="sm" className="rounded-lg">
                  تفاصيل المركبة
                </Button>
              </div>
              <MapPlaceholder />
            </div>

            {/* Vehicle Info Sidebar */}
            <div className="space-y-4">
              <VehicleCard
                carType={vehicleData.carType}
                plateNumber={plateNumber}
              />
              <PredictedStations stations={vehicleData.predictedStationNames} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
