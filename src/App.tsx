import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import EmergencyTruckRepairPhoenix from "./pages/EmergencyTruckRepairPhoenix";
import TruckBreakdownServicePhoenix from "./pages/TruckBreakdownServicePhoenix";
import SemiTruckAcRepair from "./pages/SemiTruckAcRepair";
import SemiTruckTireBrakeRepair from "./pages/SemiTruckTireBrakeRepair";
import SemiTruckDiagnostics from "./pages/SemiTruckDiagnostics";
import SemiTruckEngineRepairs from "./pages/SemiTruckEngineRepairs";
import SemiTrailerElectricalRepair from "./pages/SemiTrailerElectricalRepair";
import SemiTrailerBrakeTireRepair from "./pages/SemiTrailerBrakeTireRepair";
import SemiTrailerSuspensionRepair from "./pages/SemiTrailerSuspensionRepair";
import FullBodySemiTrailerRepair from "./pages/FullBodySemiTrailerRepair";
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
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
