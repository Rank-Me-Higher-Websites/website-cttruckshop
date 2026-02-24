import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Services from "./pages/Services";
import RealServicePage from "./pages/RealServicePage";
import Locations from "./pages/Locations";
import LocationPage from "./pages/LocationPage";
import MobileRepair from "./pages/MobileRepair";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            {/* Real service pages with old URLs */}
            <Route path="/emergency-truck-repair-phoenix" element={<RealServicePage />} />
            <Route path="/truck-breakdown-service-phoenix" element={<RealServicePage />} />
            <Route path="/semi-truck-ac-repair-services" element={<RealServicePage />} />
            <Route path="/semi-truck-tire-and-brake-repair-services-phoenix-az" element={<RealServicePage />} />
            <Route path="/semi-truck-diagnostics-in-phoenix-az" element={<RealServicePage />} />
            <Route path="/semi-truck-engine-repairs-in-phoenix-az" element={<RealServicePage />} />
            <Route path="/semi-trailer-electrical-repair-services-phoenix-az" element={<RealServicePage />} />
            <Route path="/semi-trailer-brake-and-tire-repair-services-in-phoenix-az" element={<RealServicePage />} />
            <Route path="/semi-trailer-suspension-repair-services-phoenix-az" element={<RealServicePage />} />
            <Route path="/full-body-semi-trailer-repair-in-phoenix-az" element={<RealServicePage />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:locationSlug" element={<LocationPage />} />
            <Route path="/mobile-repair" element={<MobileRepair />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
