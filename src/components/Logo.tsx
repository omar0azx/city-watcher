import logoImage from "@/assets/logo.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ size = "md", showText = true }: LogoProps) => {
  const sizeClasses = {
    sm: "h-10",
    md: "h-16",
    lg: "h-24",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <img 
        src={logoImage} 
        alt="شعار رصد" 
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
      {showText && (
        <h1 className={`${textSizes[size]} font-bold text-primary`}>رصد</h1>
      )}
    </div>
  );
};

export default Logo;
