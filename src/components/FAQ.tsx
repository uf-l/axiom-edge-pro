import { useState } from 'react';
import { ChevronDown, Chrome, Globe, Apple, Download, Shield, Zap, AlertCircle } from 'lucide-react';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is it safe to use a bookmarklet?",
      answer: "Yes, bookmarklets are completely safe. They run JavaScript in your browser's context and cannot access your private keys or sensitive data. ValexTools only interacts with the axiom.trade interface to speed up your trading - it never touches your wallet directly."
    },
    {
      question: "Will this void my axiom.trade account?",
      answer: "No, ValexTools is a client-side tool that enhances the existing axiom.trade interface. It doesn't violate any terms of service and works entirely within your browser. Thousands of traders use it daily without issues."
    },
    {
      question: "How does the rugpull protection work?",
      answer: "Our advanced contract analysis scans token contracts in real-time for common honeypot patterns, unusual mint functions, and suspicious ownership structures. It cross-references data from multiple sources to warn you before you trade."
    },
    {
      question: "Can I use this on mobile?",
      answer: "While technically possible, ValexTools is optimized for desktop trading. The complex interface and rapid execution features work best on larger screens with keyboard shortcuts."
    },
    {
      question: "Do you store my trading data?",
      answer: "No, ValexTools runs entirely in your browser. We don't collect, store, or transmit any of your trading data, wallet addresses, or personal information. Your privacy and security are paramount."
    },
    {
      question: "How often is the tool updated?",
      answer: "We release updates regularly to stay ahead of new scam patterns and improve performance. Updates are automatic - just refresh the bookmarklet occasionally to get the latest version."
    }
  ];

  const browsers = [
    {
      name: "Chrome",
      icon: Chrome,
      steps: [
        "Go to the top of this page",
        "Drag the 'Install Bookmarklet' button to your bookmarks bar",
        "The bookmark will be automatically named 'ValexTools'",
        "Navigate to axiom.trade",
        "Click the ValexTools bookmark to activate the tool"
      ]
    },
    {
      name: "Firefox",
      icon: Globe,
      steps: [
        "Press Ctrl+Shift+B to show bookmarks bar",
        "Go to the top of this page",
        "Drag the 'Install Bookmarklet' button to your bookmarks bar",
        "Navigate to axiom.trade",
        "Click the ValexTools bookmark to activate the tool"
      ]
    },
    {
      name: "Safari",
      icon: Apple,
      steps: [
        "Show the bookmarks bar (View → Show Bookmarks Bar)",
        "Go to the top of this page",
        "Drag the 'Install Bookmarklet' button to your bookmarks bar",
        "Navigate to axiom.trade",
        "Click the ValexTools bookmark to activate the tool"
      ]
    }
  ];

  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Installation & <span className="text-primary">FAQ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know to get started with ValexTools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Installation Guide */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Download className="text-primary" />
              Installation Guide
            </h3>
            
            <div className="space-y-6">
              {browsers.map((browser, index) => (
                <div key={index} className="bg-gradient-card border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <browser.icon className="w-6 h-6 text-primary" />
                    <h4 className="text-lg font-semibold text-foreground">{browser.name}</h4>
                  </div>
                  
                  <ol className="space-y-2">
                    {browser.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-semibold">
                          {stepIndex + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>

          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <AlertCircle className="text-primary" />
              Frequently Asked Questions
            </h3>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gradient-card border border-border rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary/20 transition-colors"
                  >
                    <span className="font-semibold text-foreground">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-primary transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;