import { Zap, Shield, Target, TrendingUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and description */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary"
                 style={{
                   clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                 }} />
            <div>
              <span className="text-xl font-bold text-foreground">ValexTools</span>
              <p className="text-sm text-muted-foreground">Professional trading tools for axiom.trade</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 ValexTools. Built for traders, by traders. Not affiliated with axiom.trade.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Trade responsibly. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;