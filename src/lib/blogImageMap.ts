// Maps WordPress image URLs to local assets for blog posts
import towingRecovery from "@/assets/towing-recovery.jpg";
import nightTowing from "@/assets/night-towing.jpg";
import towService from "@/assets/tow-service.png";
import aboutTowTruck from "@/assets/about-tow-truck.jpg";
import engineRepair from "@/assets/engine-repair.jpg";
import dieselEngineRepair from "@/assets/diesel-engine-repair.png";
import truckDiagnostics from "@/assets/truck-diagnostics.jpg";
import mechanicEngineWork from "@/assets/mechanic-engine-work.jpg";
import engineBrakeRepair from "@/assets/engine-brake-repair.jpg";
import trailerBrakeShop from "@/assets/trailer-brake-shop.jpg";
import tireTechThumbsup from "@/assets/tire-tech-thumbsup.jpg";
import trailerAxleRepair from "@/assets/trailer-axle-repair.jpg";
import trailerWeldingRepair from "@/assets/trailer-welding-repair.jpg";
import shopInterior from "@/assets/shop-interior.jpg";
import shopBayOverview from "@/assets/shop-bay-overview.jpg";
import facility from "@/assets/facility.jpg";
import ctShopTeam from "@/assets/ct-shop-team.jpg";
import mobileRepair from "@/assets/mobile-repair.jpg";
import fleetElectricalWork from "@/assets/fleet-electrical-work.jpg";
import truckEngineWide from "@/assets/truck-engine-wide.jpg";
import transmissionRebuild from "@/assets/transmission-rebuild.jpg";
import truckLaptopDiagnostics from "@/assets/truck-laptop-diagnostics.jpg";
import mechanicHubRepair from "@/assets/mechanic-hub-repair.jpg";
import blueCascadiaRepair from "@/assets/blue-cascadia-repair.jpg";
import twoMechanicsPeterbilt from "@/assets/two-mechanics-peterbilt.jpg";
import differentialCraneLift from "@/assets/differential-crane-lift.jpg";
import craneLift from "@/assets/crane-lift.png";
import kenworthShopFront from "@/assets/kenworth-shop-front.jpg";
import expertTechnician from "@/assets/expert-technician.png";
import truckYard from "@/assets/truck-yard.png";
import aboutEngineRepair from "@/assets/about-engine-repair.png";
import mechanicsWork from "@/assets/mechanics-work.jpeg";
import teamWork from "@/assets/team-work.jpeg";

// Blog-specific images
import emergencyTruckRepair from "@/assets/blog/emergency-truck-repair.jpg";
import fastTruckRepair from "@/assets/blog/fast-truck-repair.png";
import mobileTruckRepair from "@/assets/blog/mobile-truck-repair.jpg";
import semiTruckDiagnosticsBlog from "@/assets/blog/semi-truck-diagnostics.jpg";
import semiTruckService from "@/assets/blog/semi-truck-service.png";
import truckMechanic from "@/assets/blog/truck-mechanic.jpg";

// Pool of images by category for round-robin assignment
const categoryPools: Record<string, string[]> = {
  towing: [towingRecovery, nightTowing, towService, aboutTowTruck, craneLift],
  engine: [engineRepair, dieselEngineRepair, mechanicEngineWork, truckEngineWide, aboutEngineRepair],
  diagnostics: [truckDiagnostics, truckLaptopDiagnostics, semiTruckDiagnosticsBlog],
  brake: [engineBrakeRepair, trailerBrakeShop, tireTechThumbsup],
  trailer: [trailerAxleRepair, trailerWeldingRepair, trailerBrakeShop, mechanicHubRepair],
  shop: [shopInterior, shopBayOverview, facility, ctShopTeam, kenworthShopFront],
  mobile: [mobileRepair, mobileTruckRepair, emergencyTruckRepair],
  electrical: [fleetElectricalWork, expertTechnician],
  general: [blueCascadiaRepair, twoMechanicsPeterbilt, truckYard, mechanicsWork, teamWork, semiTruckService, truckMechanic, fastTruckRepair],
};

// Slug-to-featured-image mapping
const slugFeaturedMap: Record<string, string> = {
  "truck-and-trailer-repair-partner": shopInterior,
  "emergency-repair-services": towingRecovery,
  "preventative-brake-maintenance": engineBrakeRepair,
  "semi-towing-sevice-tips": towService,
  "semi-trailer-mechanic-services": trailerAxleRepair,
  "semi-ac-repair-and-cost": expertTechnician,
  "semi-trailer-tires-types": tireTechThumbsup,
  "common-semi-truck-problems": engineRepair,
  "semi-truck-fuel-efficiency": truckYard,
  "semi-trailer-maintenance-tips": trailerWeldingRepair,
  "24h-towing-services-benefits": nightTowing,
  "heavy-duty-towing-phoenix": aboutTowTruck,
  "semi-trailer-electrical-repair": fleetElectricalWork,
  "semi-towing-frequently-asked-questions": craneLift,
  "rollover-recovery-understanding": towingRecovery,
  "semi-truck-towing-arizona": towService,
  "semi-trailer-suspension-fix-tips": mechanicHubRepair,
  "tow-truck-near-me-arizona": nightTowing,
  "heavy-duty-truck-diagnostic-tips": truckDiagnostics,
  "semi-truck-transmission-repair-guide": transmissionRebuild,
  "open-deck-trailers-towing": craneLift,
  "semi-trailer-suspension-repair-arizona": differentialCraneLift,
  "tips-for-heavy-duty-drivers": twoMechanicsPeterbilt,
  "diesel-engine-mechanics": dieselEngineRepair,
  "clever-trans-towing-partnership": towingRecovery,
  "semi-truck-full-diagnostics-tips": truckLaptopDiagnostics,
  "semi-truck-prices-2023-guide": blueCascadiaRepair,
  "trailer-repair-and-maintenance": trailerWeldingRepair,
  "heavy-duty-and-medium-duty-towing-services": aboutTowTruck,
  "synchronized-symphony-semi-towing": towService,
  "overnight-heavy-duty-towing-challenges": nightTowing,
  "day-in-the-life-of-a-tow-truck-driver": craneLift,
  "regular-pm-service-arizona": shopBayOverview,
  "trailer-air-system-issues": trailerAxleRepair,
  "trailer-lights-repairs": fleetElectricalWork,
  "reliable-semi-truck-service-in-phoenix-arizona": semiTruckService,
  "local-truck-repair-partner-phoenix": kenworthShopFront,
  "emergency-truck-repair-phoenix-arizona": emergencyTruckRepair,
  "truck-diagnostics-guide-for-owner-operators": semiTruckDiagnosticsBlog,
  "emergency-truck-repair-solutions": fastTruckRepair,
  "semi-truck-brake-repair-phoenix": engineBrakeRepair,
  "diesel-truck-repair-phoenix": dieselEngineRepair,
  "mobile-truck-repair-phoenix": mobileTruckRepair,
  "semi-truck-engine-repair-cost-guide": truckEngineWide,
  "fleet-truck-repair-services-phoenix": ctShopTeam,
  "truck-and-trailer-repair-near-me-shop-tips": truckMechanic,
  "truck-alignment-service-phoenix": mechanicHubRepair,
};

/** Get the correct local featured image for a blog post by slug */
export function getFeaturedImage(slug: string): string {
  return slugFeaturedMap[slug] || shopInterior;
}

// Counter for round-robin inline image replacement
let inlineCounter = 0;
const allInlineImages = [
  ...categoryPools.shop,
  ...categoryPools.engine,
  ...categoryPools.trailer,
  ...categoryPools.towing,
  ...categoryPools.general,
  ...categoryPools.diagnostics,
  ...categoryPools.brake,
  ...categoryPools.mobile,
  ...categoryPools.electrical,
];

/** Replace all WordPress image URLs in HTML content with local assets */
export function replaceContentImages(html: string): string {
  // Replace all WordPress image src URLs
  return html.replace(
    /https?:\/\/cttruckshop\.com\/wp-content\/uploads\/[^"'\s)]+/g,
    () => {
      const img = allInlineImages[inlineCounter % allInlineImages.length];
      inlineCounter++;
      return img;
    }
  );
}
