import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToContent}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors animate-float"
      aria-label="Scroll to content"
    >
      <span className="text-sm font-medium">Scroll</span>
      <ChevronDown className="h-6 w-6" />
    </button>
  );
};

export default ScrollIndicator;
