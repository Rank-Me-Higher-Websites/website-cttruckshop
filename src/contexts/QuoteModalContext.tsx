import { createContext, useContext, useState, ReactNode } from "react";

interface QuoteModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export const useQuoteModal = () => useContext(QuoteModalContext);

export const QuoteModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <QuoteModalContext.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </QuoteModalContext.Provider>
  );
};
