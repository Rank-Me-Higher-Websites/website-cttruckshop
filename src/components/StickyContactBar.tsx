import { Phone, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const StickyContactBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
      
      // Check if footer is visible (for mobile)
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        setIsFooterVisible(footerRect.top < window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Floating Call Button - appears when scrolling, hidden when footer visible */}
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden transition-all duration-300 ${isVisible && !isFooterVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}>
        <a
          href="tel:6028303232"
          className="flex items-center justify-center gap-2 bg-accent text-accent-foreground py-3 px-5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all animate-pulse"
          style={{
            boxShadow: '0 0 20px hsl(var(--accent) / 0.6), 0 0 40px hsl(var(--accent) / 0.3)'
          }}
        >
          <Phone className="h-5 w-5" />
          <span>Call Now</span>
        </a>
      </div>

      {/* Desktop/Tablet Floating Buttons - Bottom Right - hidden when footer is visible */}
      <div className={`fixed right-6 bottom-6 z-40 hidden md:flex flex-row gap-2 transition-all duration-300 ${isVisible && !isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <a
          href="/contact"
          className="flex items-center gap-2 bg-primary text-primary-foreground py-2.5 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl border border-accent/30 group text-sm"
        >
          <MessageSquare className="h-4 w-4" />
          <span className="whitespace-nowrap">Get a Quote</span>
        </a>
        <a
          href="tel:6028303232"
          className="flex items-center gap-2 bg-accent text-accent-foreground py-2.5 px-4 rounded-lg font-semibold hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl group text-sm"
        >
          <Phone className="h-4 w-4" />
          <span className="whitespace-nowrap">Call Now</span>
        </a>
      </div>
    </>
  );
};

export default StickyContactBar;
