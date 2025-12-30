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
      {/* Mobile Bottom Bar - hidden when footer is visible */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 bg-primary border-t border-primary-foreground/10 py-3 md:hidden transition-transform duration-300 ${isFooterVisible ? 'translate-y-full' : 'translate-y-0'}`}>
        <div className="container-custom">
          <div className="flex items-center gap-3">
            <a
              href="tel:6028303232"
              className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground py-2.5 px-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
            <a
              href="/contact"
              className="flex-1 flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground py-2.5 px-4 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Get Quote</span>
            </a>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet Floating Buttons - Right Side */}
      <div className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3 transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 pointer-events-none'}`}>
        <a
          href="tel:6028303232"
          className="flex items-center gap-2 bg-accent text-accent-foreground py-3 px-4 rounded-xl font-semibold hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl group"
        >
          <Phone className="h-5 w-5" />
          <span className="whitespace-nowrap">Call Now</span>
        </a>
        <a
          href="/contact"
          className="flex items-center gap-2 bg-primary text-primary-foreground py-3 px-4 rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl border border-accent/30 group"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="whitespace-nowrap">Get a Quote</span>
        </a>
      </div>
    </>
  );
};

export default StickyContactBar;
