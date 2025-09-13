import { MessageCircle, Heart, Repeat2 } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      username: "CryptoWhale_Alex",
      handle: "@cryptowhale_alex",
      content: "ValexTools literally saved me $50k last week. The rugpull detection caught a honeypot that would have drained my entire position. This tool pays for itself instantly.",
      timestamp: "2h",
      likes: 127,
      retweets: 43,
      verified: true
    },
    {
      username: "MemeKing2024",
      handle: "@memeking2024",
      content: "Been using ValexTools for 3 months now. My win rate went from 40% to 78%. The early sniping feature is absolutely insane - got into $PEPE2 at $50k mcap 🚀",
      timestamp: "4h",
      likes: 89,
      retweets: 22,
      verified: false
    },
    {
      username: "DeFi_Sarah",
      handle: "@defi_sarah",
      content: "As someone who trades 12+ hours a day, the speed improvement with ValexTools is game-changing. Transactions that used to take 30 seconds now execute in under 3 seconds.",
      timestamp: "6h",
      likes: 156,
      retweets: 67,
      verified: true
    },
    {
      username: "SolanaDegenApe",
      handle: "@solanadegenape",
      content: "Made 25x on $BONK thanks to ValexTools early sniping. This bookmarklet is literally free money if you know how to use it. Best investment I've made this year tbh",
      timestamp: "8h",
      likes: 203,
      retweets: 91,
      verified: false
    },
    {
      username: "CryptoAnalyst_J",
      handle: "@cryptoanalyst_j",
      content: "The risk management features in ValexTools are next level. Auto stop-loss saved me during the flash crash last month. Professional grade tools for serious traders.",
      timestamp: "12h",
      likes: 94,
      retweets: 31,
      verified: true
    },
    {
      username: "MoonBoyMike",
      handle: "@moonboymike",
      content: "Went from losing $5k/month to making $15k/month after switching to ValexTools. The learning curve is worth it - this isn't just a tool, it's a trading superpower 💪",
      timestamp: "1d",
      likes: 178,
      retweets: 54,
      verified: false
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Traders Are <span className="text-primary">Saying</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real testimonials from real traders who've transformed their trading with ValexTools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((tweet, index) => (
            <div
              key={index}
              className="bg-gradient-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Tweet Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {tweet.username.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-foreground">
                      {tweet.username}
                    </span>
                    {tweet.verified && (
                      <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-xs text-primary-foreground">✓</span>
                      </div>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {tweet.handle}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {tweet.timestamp}
                </span>
              </div>

              {/* Tweet Content */}
              <p className="text-foreground mb-4 leading-relaxed">
                {tweet.content}
              </p>

              {/* Tweet Actions */}
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                  <MessageCircle size={16} />
                  <span className="text-sm">Reply</span>
                </div>
                <div className="flex items-center gap-2 hover:text-success transition-colors cursor-pointer">
                  <Repeat2 size={16} />
                  <span className="text-sm">{tweet.retweets}</span>
                </div>
                <div className="flex items-center gap-2 hover:text-destructive transition-colors cursor-pointer">
                  <Heart size={16} />
                  <span className="text-sm">{tweet.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;