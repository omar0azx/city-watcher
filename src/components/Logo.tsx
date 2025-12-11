import { Shield } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ size = "md", showText = true }: LogoProps) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`${sizeClasses[size]} bg-primary rounded-full flex items-center justify-center shadow-elevated`}>
        <Shield className="w-1/2 h-1/2 text-primary-foreground" />
      </div>
      {showText && (
        <h1 className={`${textSizes[size]} font-bold text-primary`}>رصد</h1>
      )}
    </div>
  );
};

export default Logo;
