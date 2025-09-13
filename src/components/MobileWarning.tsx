import { useState, useEffect } from 'react';
import { X, Monitor } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const MobileWarning = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      const hasSeenWarning = localStorage.getItem('valex-mobile-warning-seen');
      if (!hasSeenWarning) {
        setIsVisible(true);
      }
    }
  }, [isMobile]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('valex-mobile-warning-seen', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-sm bg-gradient-card border border-border rounded-2xl p-6 text-center glow-card animate-slide-up">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="mb-4">
          <Monitor className="w-12 h-12 mx-auto text-primary mb-3" />
          <h3 className="text-lg font-semibold text-foreground">Better on Desktop</h3>
        </div>
        
        <p className="text-sm text-muted-foreground mb-6">
          ValexTools is optimized for desktop trading. For the best experience, please visit us on a computer or laptop.
        </p>
        
        <button
          onClick={handleClose}
          className="w-full bg-gradient-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Continue Anyway
        </button>
      </div>
    </div>
  );
};

export default MobileWarning;