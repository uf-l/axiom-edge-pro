import { Zap, Shield, Target, TrendingUp, Clock, AlertTriangle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning-Fast Execution",
      description: "Execute trades in milliseconds with our optimized transaction pipeline. No more missed opportunities.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Rugpull Protection",
      description: "Advanced contract analysis detects potential scams before you trade. Stay safe in the wild west of DeFi.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "Early Coin Sniping",
      description: "Get in before the crowd with automated sniping tools. First-mover advantage on every launch.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Real-Time Monitoring",
      description: "Track wallet movements, large transactions, and market sentiment in real-time.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Profit Optimization",
      description: "Smart algorithms help you maximize gains and minimize losses with precision timing.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: AlertTriangle,
      title: "Risk Management",
      description: "Built-in stop-loss, take-profit, and position sizing tools to protect your capital.",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built for <span className="text-primary">Professional</span> Traders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every feature is designed to give you an edge in the fast-paced world of memecoin trading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-gradient-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 glow-card"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;