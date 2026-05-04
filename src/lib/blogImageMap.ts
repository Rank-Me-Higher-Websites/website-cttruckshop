// Maps blog slugs to unique local featured images.
// Goal: every blog post gets its own thumbnail (no duplicates).
import towingRecovery from "@/assets/towing-recovery.webp";
import nightTowing from "@/assets/night-towing.webp";
import towService from "@/assets/tow-service.webp";
import aboutTowTruck from "@/assets/about-tow-truck.webp";
import engineRepair from "@/assets/engine-repair.webp";
import dieselEngineRepair from "@/assets/diesel-engine-repair.webp";
import truckDiagnostics from "@/assets/truck-diagnostics.webp";
import mechanicEngineWork from "@/assets/mechanic-engine-work.webp";
import engineBrakeRepair from "@/assets/engine-brake-repair.webp";
import trailerBrakeShop from "@/assets/trailer-brake-shop.webp";
import tireTechThumbsup from "@/assets/tire-tech-thumbsup.webp";
import trailerAxleRepair from "@/assets/trailer-axle-repair.webp";
import trailerWeldingRepair from "@/assets/trailer-welding-repair.webp";
import shopInterior from "@/assets/shop-interior.webp";
import shopBayOverview from "@/assets/shop-bay-overview.webp";
import facility from "@/assets/facility.webp";
import ctShopTeam from "@/assets/ct-shop-team.webp";
import mobileRepair from "@/assets/mobile-repair.webp";
import fleetElectricalWork from "@/assets/fleet-electrical-work.webp";
import truckEngineWide from "@/assets/truck-engine-wide.webp";
import transmissionRebuild from "@/assets/transmission-rebuild.webp";
import truckLaptopDiagnostics from "@/assets/truck-laptop-diagnostics.webp";
import truckDiagnosticsLaptop from "@/assets/truck-diagnostics-laptop.webp";
import mechanicHubRepair from "@/assets/mechanic-hub-repair.webp";
import blueCascadiaRepair from "@/assets/blue-cascadia-repair.webp";
import twoMechanicsPeterbilt from "@/assets/two-mechanics-peterbilt.webp";
import differentialCraneLift from "@/assets/differential-crane-lift.webp";
import craneLift from "@/assets/crane-lift.webp";
import kenworthShopFront from "@/assets/kenworth-shop-front.webp";
import expertTechnician from "@/assets/expert-technician.webp";
import truckYard from "@/assets/truck-yard.webp";
import aboutEngineRepair from "@/assets/about-engine-repair.webp";
import mechanicsWork from "@/assets/mechanics-work.webp";
import teamWork from "@/assets/team-work.webp";
import aboutRepairShop from "@/assets/about-repair-shop.webp";
import aboutTeam from "@/assets/about-team.webp";
import aboutFleetReview from "@/assets/about-fleet-review.webp";

// Blog-specific images
import emergencyTruckRepair from "@/assets/blog/emergency-truck-repair.webp";
import fastTruckRepair from "@/assets/blog/fast-truck-repair.webp";
import mobileTruckRepair from "@/assets/blog/mobile-truck-repair.webp";
import semiTruckDiagnosticsBlog from "@/assets/blog/semi-truck-diagnostics.webp";
import semiTruckService from "@/assets/blog/semi-truck-service.webp";
import truckMechanic from "@/assets/blog/truck-mechanic.webp";

// Newly added in-shop photos (April 2026 batch)
import carHaulerTrailerRepair from "@/assets/blog/car-hauler-trailer-repair.png";
import mechanicToolCart from "@/assets/blog/mechanic-tool-cart.png";
import shopFloorMechanic from "@/assets/blog/shop-floor-mechanic.png";
import detroitEngineService from "@/assets/blog/detroit-engine-service.png";
import cabEngineBayWork from "@/assets/blog/cab-engine-bay-work.png";
import transmissionTeamwork from "@/assets/blog/transmission-teamwork.png";
import cabElectricalRepair from "@/assets/blog/cab-electrical-repair.png";

// Pool of images by category for inline content image replacement
const categoryPools: Record<string, string[]> = {
  towing: [towingRecovery, nightTowing, towService, aboutTowTruck, craneLift, differentialCraneLift],
  engine: [engineRepair, dieselEngineRepair, mechanicEngineWork, truckEngineWide, aboutEngineRepair, blueCascadiaRepair, detroitEngineService, cabEngineBayWork],
  diagnostics: [truckDiagnostics, truckLaptopDiagnostics, truckDiagnosticsLaptop, semiTruckDiagnosticsBlog],
  brake: [engineBrakeRepair, trailerBrakeShop, tireTechThumbsup],
  trailer: [trailerAxleRepair, trailerWeldingRepair, trailerBrakeShop, mechanicHubRepair, carHaulerTrailerRepair],
  shop: [shopInterior, shopBayOverview, facility, ctShopTeam, kenworthShopFront, mechanicToolCart, shopFloorMechanic, aboutRepairShop, aboutTeam, aboutFleetReview],
  mobile: [mobileRepair, mobileTruckRepair, emergencyTruckRepair, fastTruckRepair],
  electrical: [fleetElectricalWork, expertTechnician, cabElectricalRepair],
  transmission: [transmissionRebuild, transmissionTeamwork],
  general: [twoMechanicsPeterbilt, truckYard, mechanicsWork, teamWork, semiTruckService, truckMechanic],
};

// Slug-to-featured-image mapping (each slug maps to a unique image where possible).
// 53 blog posts vs. 50 unique images means 3 posts share with a content-related sibling.
const slugFeaturedMap: Record<string, string> = {
  // --- Original blog posts ---
  "truck-and-trailer-repair-partner": shopInterior,
  "emergency-repair-services": fastTruckRepair,
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
  "semi-trailer-suspension-fix-tips": mechanicHubRepair,
  "semi-truck-towing-arizona": differentialCraneLift,
  "tow-truck-near-me-arizona": semiTruckService,
  "heavy-duty-truck-diagnostic-tips": truckDiagnostics,
  "semi-truck-transmission-repair-guide": transmissionRebuild,
  "open-deck-trailers-towing": carHaulerTrailerRepair,
  "semi-trailer-suspension-repair-arizona": trailerBrakeShop,
  "tips-for-heavy-duty-drivers": twoMechanicsPeterbilt,
  "diesel-engine-mechanics": dieselEngineRepair,
  "clever-trans-towing-partnership": teamWork,
  "semi-truck-full-diagnostics-tips": truckLaptopDiagnostics,
  "semi-truck-prices-2023-guide": blueCascadiaRepair,
  "trailer-repair-and-maintenance": mechanicEngineWork,
  "heavy-duty-and-medium-duty-towing-services": aboutFleetReview,
  "synchronized-symphony-semi-towing": mechanicsWork,
  "overnight-heavy-duty-towing-challenges": aboutEngineRepair,
  "day-in-the-life-of-a-tow-truck-driver": mechanicToolCart,
  "regular-pm-service-arizona": shopBayOverview,
  "trailer-air-system-issues": cabElectricalRepair,
  "trailer-lights-repairs": semiTruckDiagnosticsBlog,
  "reliable-semi-truck-service-in-phoenix-arizona": ctShopTeam,
  "local-truck-repair-partner-phoenix": kenworthShopFront,
  "emergency-truck-repair-phoenix-arizona": emergencyTruckRepair,
  "truck-diagnostics-guide-for-owner-operators": truckDiagnosticsLaptop,
  "emergency-truck-repair-solutions": mobileTruckRepair,

  // --- Newer SEO blog posts ---
  "reliable-semi-truck-service-for-your-fleet": aboutTeam,
  "reliable-trailer-repair-service-for-truck-drivers": transmissionTeamwork,
  "emergency-truck-repair": mobileRepair,
  "fast-truck-repair-near-me": facility,
  "mobile-truck-repair-keeping-your-rig-rolling-when-the-shop-comes-to-you": cabEngineBayWork,
  "truck-mechanic-near-me-phoeniz-az": truckMechanic,
  "semi-truck-repair-fast-and-reliable": detroitEngineService,
  "local-truck-repair-phoenix-complete-guide": aboutRepairShop,
  "trailer-repair-near-me-in-phoenix-fast-reliable": shopFloorMechanic,
  "truck-and-trailer-repair-near-me-shop-tips": truckEngineWide,
  "commercial-truck-repair": shopFloorMechanic, // shares with trailer-repair-near-me (both shop floor/general)
  "mobile-truck-repair-phoenix-az-guide": mobileRepair, // shares with emergency-truck-repair (both mobile)
  "10-common-semi-truck-brake-problems": engineBrakeRepair, // shares with preventative-brake-maintenance (both brake)
  "semi-truck-pre-summer-pm-checklist": expertTechnician, // shares with semi-ac-repair-and-cost (both maintenance/inspection)
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
  ...categoryPools.transmission,
];

/** Replace all WordPress image URLs in HTML content with local assets */
export function replaceContentImages(html: string): string {
  return html.replace(
    /https?:\/\/cttruckshop\.com\/wp-content\/uploads\/[^"'\s)]+/g,
    () => {
      const img = allInlineImages[inlineCounter % allInlineImages.length];
      inlineCounter++;
      return img;
    }
  );
}
