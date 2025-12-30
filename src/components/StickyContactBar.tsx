import { Phone, Clock, MapPin } from "lucide-react";

const StickyContactBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary border-t border-primary-foreground/10 py-3 md:hidden">
      <div className="container-custom">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-primary-foreground text-sm">
            <Clock className="h-4 w-4 text-accent" />
            <span>24/7 Service</span>
          </div>
          <a
            href="tel:6028303232"
            className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground py-2.5 px-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyContactBar;
