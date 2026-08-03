/**
 * Canonical service-family architecture — sourced from approved JSON.
 * Do not edit counts or mappings here; update docs/website JSON first.
 */

import architectureJson from "../docs/website/OCTUS_SERVICE_FAMILY_ARCHITECTURE_V1.json";
import placementJson from "../docs/website/OCTUS_SEVEN_AREAS_SERVICE_PLACEMENT_MATRIX_V3.json";

export type ServiceFamily = {
  id: string;
  name: string;
  description: string;
  area_id: string;
  area_name: string;
  area_hub: string;
  service_ids: string[];
  display_depth: string;
};

export type ArchitectureArea = {
  id: string;
  name: string;
  hub: string;
  families: ServiceFamily[];
};

export type PlacedService = {
  id: string;
  exact_public_name: string;
  primary_area: string;
  primary_area_id: string;
  service_family_id: string;
  service_family_name: string;
  supporting_areas: string[];
  cross_cutting_capability: string | null;
  evidence_source: string;
  responsible_substantive_owner: string;
  current_route: string | null;
  recommended_route: string | null;
  display_depth: string;
};

export type ServiceArchitecture = {
  version: string;
  date: string;
  family_count: number;
  service_count: number;
  areas: ArchitectureArea[];
};

export const SERVICE_ARCHITECTURE = architectureJson as ServiceArchitecture;
export const SERVICE_PLACEMENT = placementJson as {
  version: string;
  date: string;
  supersedes: string;
  public_areas: { id: string; name: string; hub: string }[];
  family_count: number;
  service_count: number;
  services: PlacedService[];
  tax_services: string[];
  banking_cross_cutting_services: string[];
};

export const FAMILY_COUNT = SERVICE_ARCHITECTURE.family_count;
export const SERVICE_COUNT = SERVICE_ARCHITECTURE.service_count;

export function getArchitectureArea(areaId: string): ArchitectureArea | undefined {
  return SERVICE_ARCHITECTURE.areas.find((a) => a.id === areaId);
}

export function getPlacedService(serviceId: string): PlacedService | undefined {
  return SERVICE_PLACEMENT.services.find((s) => s.id === serviceId);
}

export function getServicesForFamily(familyId: string): PlacedService[] {
  return SERVICE_PLACEMENT.services.filter((s) => s.service_family_id === familyId);
}

export function getDeepServicesForArea(areaId: string): PlacedService[] {
  return SERVICE_PLACEMENT.services.filter(
    (s) => s.primary_area_id === areaId && s.display_depth === "deep-service page" && s.recommended_route
  );
}
