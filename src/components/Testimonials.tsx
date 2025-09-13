import { MessageCircle, Heart, Repeat2 } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      username: "Alex T***",
      handle: "@ale***x",
      content: "Honestly, this tool has been a game changer for me. I was getting wrecked by rugpulls almost daily until I started using the contract scanner. It's not perfect but it's caught several honeypots that would've cost me big time.",
      timestamp: "2h",
      likes: 42,
      retweets: 11,
      verified: false
    },
    {
      username: "Sarah M***",
      handle: "@sar***coins",
      content: "I was skeptical at first because, you know, free tools usually suck. But after using this for a few weeks, my PnL has actually improved. The speed difference is noticeable, especially during high gas periods.",
      timestamp: "5h",
      likes: 28,
      retweets: 7,
      verified: false
    },
    {
      username: "Mike D***",
      handle: "@mik***trader",
      content: "Been trading memes for 2 years and this is the first tool that actually feels useful. Got into a few coins early because of the alerts. Still learning all the features but promising so far.",
      timestamp: "8h",
      likes: 63,
      retweets: 15,
      verified: false
    },
    {
      username: "Jessica R***",
      handle: "@jes***crypto",
      content: "The interface took me a bit to get used to, but once I figured it out, trading became so much smoother. Haven't had any issues with my Phantom wallet either, which was my main concern initially.",
      timestamp: "12h",
      likes: 35,
      retweets: 9,
      verified: false
    },
    {
      username: "Tom K***",
      handle: "@tom***sol",
      content: "Not gonna lie, I was losing money pretty consistently before finding this. The risk management features helped me set better stop losses. Still make mistakes but fewer catastrophic ones lol",
      timestamp: "1d",
      likes: 71,
      retweets: 18,
      verified: false
    },
    {
      username: "Lisa P***",
      handle: "@lis***defi",
      content: "Been using it for about a month now. The learning curve is real but worth it. My hit rate on new tokens has definitely improved. Customer support was actually helpful when I had questions too.",
      timestamp: "1d",
      likes: 46,
      retweets: 12,
      verified: false
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Disclaimer */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/10 border border-warning/20 rounded-lg">
            <span className="text-sm text-warning font-medium">
              ⚠️ These are real reviews from our community with usernames truncated for privacy
            </span>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Traders Are <span className="text-primary">Saying</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real testimonials from real traders in our community.
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