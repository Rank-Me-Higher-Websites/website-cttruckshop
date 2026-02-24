import { useEffect } from "react";
import { X } from "lucide-react";
import { useQuoteModal } from "@/contexts/QuoteModalContext";
import LeadForm from "@/components/LeadForm";

const QuoteModal = () => {
  const { isOpen, close } = useQuoteModal();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
      />
      <div className="relative w-full max-w-md animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={close}
          className="absolute -top-3 -right-3 z-10 bg-primary text-primary-foreground rounded-full p-1.5 border border-accent/30 hover:bg-primary/80 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        <LeadForm />
      </div>
    </div>
  );
};

export default QuoteModal;
