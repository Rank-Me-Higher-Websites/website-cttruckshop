import { Phone, MessageSquare, X } from "lucide-react";
import { useState, useEffect } from "react";
import LeadForm from "@/components/LeadForm";

const StickyContactBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
      
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        setIsFooterVisible(footerRect.top < window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showQuoteModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showQuoteModal]);

  return (
    <>
      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowQuoteModal(false)}
          />
          <div className="relative w-full max-w-md animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowQuoteModal(false)}
              className="absolute -top-3 -right-3 z-10 bg-primary text-primary-foreground rounded-full p-1.5 border border-accent/30 hover:bg-primary/80 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <LeadForm />
          </div>
        </div>
      )}

      {/* Mobile Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-primary border-t border-accent/20 safe-area-bottom">
        <div className="flex gap-2 p-3">
          <button
            onClick={() => setShowQuoteModal(true)}
            className="flex-1 flex items-center justify-center gap-2 bg-primary-foreground/10 border border-accent/30 text-primary-foreground py-3 rounded-lg font-semibold text-sm transition-all"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Get a Quote</span>
          </button>
          <a
            href="tel:6028303232"
            className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground py-3 rounded-lg font-semibold text-sm transition-all"
          >
            <Phone className="h-4 w-4" />
            <span>Call Now</span>
          </a>
        </div>
      </div>

      {/* Desktop/Tablet Floating Buttons - Bottom Right */}
      <div className={`fixed right-6 bottom-6 z-40 hidden md:flex flex-row gap-2 transition-all duration-300 ${isVisible && !isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <button
          onClick={() => setShowQuoteModal(true)}
          className="flex items-center gap-2 bg-primary text-primary-foreground py-2.5 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl border border-accent/30 group text-sm"
        >
          <MessageSquare className="h-4 w-4" />
          <span className="whitespace-nowrap">Get a Quote</span>
        </button>
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
