import { Zap, Shield, Target, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Geometric accent */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-primary animate-glow-pulse" 
               style={{
                 clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
               }} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-slide-up">
          The Ultimate Trading
          <span className="block bg-gradient-primary bg-clip-text text-transparent">
            Bookmarklet
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
          Supercharge your axiom.trade experience with lightning-fast transactions, 
          rugpull protection, and early coin sniping. Built for serious memecoin traders.
        </p>
        
        {/* Feature highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in">
          <div className="text-center">
            <Zap className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-sm text-muted-foreground">Lightning Fast</p>
          </div>
          <div className="text-center">
            <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-sm text-muted-foreground">Rugpull Protection</p>
          </div>
          <div className="text-center">
            <Target className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-sm text-muted-foreground">Early Sniping</p>
          </div>
          <div className="text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-sm text-muted-foreground">Profit Maximized</p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <button className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity glow-primary">
            Install Bookmarklet
          </button>
          <button className="border border-border text-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary transition-colors">
            Watch Demo
          </button>
        </div>
        
        {/* Trust indicator */}
        <p className="text-sm text-muted-foreground mt-8">
          Trusted by <span className="text-primary font-semibold">10,000+</span> memecoin traders
        </p>
      </div>
    </section>
  );
};

export default Hero;