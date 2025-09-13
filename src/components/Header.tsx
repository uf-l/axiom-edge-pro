import { Monitor } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary"
                 style={{
                   clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                 }} />
            <span className="text-xl font-bold text-foreground">ValexTools</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ & Install
            </a>
          </nav>
          
          {/* CTA Button */}
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setTimeout(() => {
                const installBtn = document.getElementById('install-bookmarklet-btn');
                if (installBtn) {
                  installBtn.style.animation = 'pulse 2s ease-in-out 3';
                }
              }, 500);
            }}
            className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity glow-primary"
          >
            Install Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;