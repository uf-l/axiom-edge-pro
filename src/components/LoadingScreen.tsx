import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 200);
          return 100;
        }
        const diff = Math.random() * 25;
        return Math.min(oldProgress + diff, 100);
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center">
        {/* Geometric logo similar to axiom.trade */}
        <div className="relative mb-8">
          <div className="w-16 h-16 mx-auto bg-gradient-primary animate-glow-pulse" 
               style={{
                 clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
               }} />
          <div className="absolute inset-0 w-16 h-16 mx-auto bg-primary/20 animate-pulse"
               style={{
                 clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
               }} />
        </div>
        
        <h1 className="text-2xl font-bold mb-2 text-foreground">ValexTools</h1>
        <p className="text-sm text-muted-foreground mb-8">Loading trading tools...</p>
        
        {/* Progress bar */}
        <div className="w-64 h-2 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-xs text-muted-foreground mt-4">{Math.round(progress)}%</p>
        
        {/* Loading dots */}
        <div className="flex justify-center space-x-1 mt-6">
          <div className="w-2 h-2 bg-primary rounded-full loading-dot" />
          <div className="w-2 h-2 bg-primary rounded-full loading-dot" />
          <div className="w-2 h-2 bg-primary rounded-full loading-dot" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;