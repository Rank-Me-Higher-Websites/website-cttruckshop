import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QuoteModalProvider } from "@/contexts/QuoteModalContext";
import QuoteModal from "@/components/QuoteModal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "./components/ScrollToTop";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const EmergencyTruckRepairPhoenix = lazy(() => import("./pages/EmergencyTruckRepairPhoenix"));
const TruckBreakdownServicePhoenix = lazy(() => import("./pages/TruckBreakdownServicePhoenix"));
const SemiTruckAcRepair = lazy(() => import("./pages/SemiTruckAcRepair"));
const SemiTruckTireBrakeRepair = lazy(() => import("./pages/SemiTruckTireBrakeRepair"));
const SemiTruckDiagnostics = lazy(() => import("./pages/SemiTruckDiagnostics"));
const SemiTruckEngineRepairs = lazy(() => import("./pages/SemiTruckEngineRepairs"));
const SemiTrailerElectricalRepair = lazy(() => import("./pages/SemiTrailerElectricalRepair"));
const SemiTrailerBrakeTireRepair = lazy(() => import("./pages/SemiTrailerBrakeTireRepair"));
const SemiTrailerSuspensionRepair = lazy(() => import("./pages/SemiTrailerSuspensionRepair"));
const FullBodySemiTrailerRepair = lazy(() => import("./pages/FullBodySemiTrailerRepair"));
const Locations = lazy(() => import("./pages/Locations"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const MobileRepair = lazy(() => import("./pages/MobileRepair"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center" aria-busy="true">
      <span className="text-muted-foreground text-sm">Loading…</span>
    </div>
  );
}

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <QuoteModalProvider>
            <Toaster />
            <Sonner />
            <QuoteModal />
            <ScrollToTop />
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/emergency-truck-repair-phoenix" element={<EmergencyTruckRepairPhoenix />} />
                <Route path="/truck-breakdown-service-phoenix" element={<TruckBreakdownServicePhoenix />} />
                <Route path="/semi-truck-ac-repair-services" element={<SemiTruckAcRepair />} />
                <Route path="/semi-truck-tire-and-brake-repair-services-phoenix-az" element={<SemiTruckTireBrakeRepair />} />
                <Route path="/semi-truck-diagnostics-in-phoenix-az" element={<SemiTruckDiagnostics />} />
                <Route path="/semi-truck-engine-repairs-in-phoenix-az" element={<SemiTruckEngineRepairs />} />
                <Route path="/semi-trailer-electrical-repair-services-phoenix-az" element={<SemiTrailerElectricalRepair />} />
                <Route path="/semi-trailer-brake-and-tire-repair-services-in-phoenix-az" element={<SemiTrailerBrakeTireRepair />} />
                <Route path="/semi-trailer-suspension-repair-services-phoenix-az" element={<SemiTrailerSuspensionRepair />} />
                <Route path="/full-body-semi-trailer-repair-in-phoenix-az" element={<FullBodySemiTrailerRepair />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/locations/:locationSlug" element={<LocationPage />} />
                <Route path="/mobile-repair" element={<MobileRepair />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </QuoteModalProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
