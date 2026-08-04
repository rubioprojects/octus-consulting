#!/usr/bin/env node
/**
 * Phase 4 Services — validation closeout (no screenshot recapture).
 *
 * Env:
 *   PHASE4_PREVIEW (required) — immutable closeout URL
 *   PHASE4_DEPLOYED_SHA — deployed application SHA
 *   PHASE4_DEPLOYMENT — dpl_…
 *   PHASE4_APPLICATION_SHA — app closeout commit
 *   PHASE4_TESTED_HEAD — local repo HEAD under test
 *   PHASE4_VALIDATOR_SHA — this script's commit (optional; filled post-commit)
 *   PHASE4_IMPL_SNAPSHOT — impl snapshot reference (optional)
 *   PHASE4_DIFF_BASE — git diff base for frozen-file check (optional)
 *   PHASE4_RETAINED_PUBLIC_PAGES — comma-separated alias paths allowed as 200
 */
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import fs from "fs";
import path from "path";
import { execSync, spawnSync } from "child_process";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const axeCoreVersion = require("axe-core/package.json").version;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const REPO = path.resolve(__dirname, "../../../../../..");
const AUDIT = path.join(ROOT, "audit");

const PREVIEW = process.env.PHASE4_PREVIEW;
if (!PREVIEW) {
  console.error("PHASE4_PREVIEW is required");
  process.exit(1);
}

const DEPLOYED_SHA =
  process.env.PHASE4_DEPLOYED_SHA || "ee8f1d0f7d442482eee99cef927a3389892617b4";
const APPLICATION_SHA =
  process.env.PHASE4_APPLICATION_SHA || "e72d3902670de83573bc32674c3cd02e036b787e";
const DEPLOYMENT_ID = process.env.PHASE4_DEPLOYMENT || "dpl_4mRS5vF2QSS34aJkip3Zn56cUUa5";
const IMPL_SNAPSHOT =
  process.env.PHASE4_IMPL_SNAPSHOT || "8228e342cfc9d3830b4f4a414f2a93ae208e5be1";
const TESTED_HEAD =
  process.env.PHASE4_TESTED_HEAD ||
  execSync("git rev-parse HEAD", { cwd: REPO, encoding: "utf8" }).trim();
const VALIDATOR_SHA = process.env.PHASE4_VALIDATOR_SHA || "(uncommitted-or-tip)";
const DIFF_BASE =
  process.env.PHASE4_DIFF_BASE || "d618067150d2720e7c85ce387c1a02ba3168ae21";

const MANDATORY_ROUTES = [
  "/solutions",
  "/solutions/regulatory-structuring",
  "/solutions/compliance-risk",
  "/solutions/legal-structural-architecture",
  "/solutions/corporate-structuring",
  "/private-clients",
  "/solutions/remediation-readiness",
  "/international-hub",
  "/solutions/banking-payments-infrastructure",
  "/solutions/regulatory/igaming-licensing",
  "/solutions/regulatory/fintech-licensing",
  "/solutions/regulatory/market-entry",
  "/solutions/compliance/aml-kyc",
  "/solutions/compliance/compliance-as-a-service",
  "/solutions/compliance/dpo-as-a-service",
  "/solutions/compliance/gli-readiness",
  "/solutions/compliance/internal-controls",
  "/solutions/corporate/company-formation",
  "/solutions/corporate/holding-design",
  "/solutions/corporate/offshore-structuring",
];

const ALIAS_CHECKS = [
  { alias: "/solutions/regulatory-strategy-licensing", canonical: "/solutions/regulatory-structuring" },
  { alias: "/solutions/compliance-risk-systems", canonical: "/solutions/compliance-risk" },
  { alias: "/solutions/legal-contractual-architecture", canonical: "/solutions/legal-structural-architecture" },
  { alias: "/solutions/corporate-cross-border", canonical: "/solutions/corporate-structuring" },
  { alias: "/solutions/operational-remediation-readiness", canonical: "/solutions/remediation-readiness" },
  { alias: "/solutions/regulatory/banking-payments", canonical: "/solutions/banking-payments-infrastructure" },
  { alias: "/services", canonical: "/solutions" },
  { alias: "/regulatory", canonical: "/solutions/regulatory-structuring" },
  { alias: "/compliance", canonical: "/solutions/compliance-risk" },
  { alias: "/corporate", canonical: "/solutions/corporate-structuring" },
  { alias: "/audit", canonical: "/solutions/remediation-readiness" },
  { alias: "/legal-architecture", canonical: "/solutions/legal-structural-architecture" },
];

const RETAINED_PUBLIC_PAGES = new Set(
  (process.env.PHASE4_RETAINED_PUBLIC_PAGES || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
);

const INSTITUTIONAL_ROUTES = ["/about", "/contact", "/brazil", "/intelligence"];
const EXPECTED_TEAM_NAMES = [
  "Rubio Teixeira",
  "Maria Cristina",
  "Rodrigo Coelho Lopes",
  "Claudia Nery",
  "Esther Vendrami",
  "Caroline Giovanetti",
  "Larissa Carvalho",
  "Milla Ludovico",
  "Bianca Carolina Oliveira Andrade",
  "Luciana Santos Veloso",
];
const HOME_RESIDUAL_SNIPPET = "accountability — not a directory";
const FROZEN_PATH_PATTERNS = [
  "app/page.tsx",
  "app/team/",
  "public/team/",
  "components/Nav.tsx",
  "HomeLeadershipTrust",
  "CookieBanner",
  "app/layout.tsx",
];

const VIEWPORTS = {
  desktop: { width: 1440, height: 1000 },
  mobile: { width: 390, height: 844 },
};

const A11Y_ROUTES = [...MANDATORY_ROUTES, "/"];
const DEEP_ROUTE_PATTERN = /^\/solutions\/(regulatory|compliance|corporate)\/[^/]+$/;

function originBase(url) {
  return String(url).replace(/\/$/, "");
}

function normalizePath(p) {
  if (!p) return "";
  const pathOnly = p.split("→").pop().trim().split(/\s/)[0];
  return pathOnly.replace(/\/$/, "") || "/";
}

function sortedUnique(arr) {
  return [...new Set(arr)].sort();
}

function setEqual(a, b) {
  const sa = sortedUnique(a);
  const sb = sortedUnique(b);
  return sa.length === sb.length && sa.every((x, i) => x === sb[i]);
}

function findDuplicates(ids) {
  const seen = new Set();
  const dups = new Set();
  for (const id of ids) {
    if (seen.has(id)) dups.add(id);
    seen.add(id);
  }
  return [...dups];
}

async function httpMeta(url, follow = false) {
  const res = await fetch(url, { redirect: follow ? "follow" : "manual", method: "GET" });
  return {
    status: res.status,
    location: res.headers.get("location") || "",
    finalUrl: res.url,
    robots: res.headers.get("x-robots-tag") || res.headers.get("robots") || "",
  };
}

function resolveLocation(base, location, canonicalPath) {
  if (!location) return { resolvedPath: "", matchesCanonical: false };
  try {
    const u = new URL(location, base);
    const resolvedPath = u.pathname.replace(/\/$/, "") || "/";
    const canon = (canonicalPath || "/").replace(/\/$/, "") || "/";
    return { resolvedPath, matchesCanonical: resolvedPath === canon, href: u.href };
  } catch {
    return { resolvedPath: "", matchesCanonical: false };
  }
}

async function destinationCanonicalOk(origin, canonicalPath) {
  const url = originBase(origin) + canonicalPath;
  try {
    const html = await fetch(url, { redirect: "follow" }).then((r) => r.text());
    const m =
      html.match(/rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) ||
      html.match(/href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
    if (!m) return { ok: false, canonical: "", reason: "canonical_tag_missing" };
    const canonHref = m[1];
    const pathName = new URL(canonHref, url).pathname.replace(/\/$/, "") || "/";
    const expected = canonicalPath.replace(/\/$/, "") || "/";
    return {
      ok: pathName === expected,
      canonical: canonHref,
      pathName,
      reason: pathName === expected ? "ok" : "canonical_path_mismatch",
    };
  } catch (e) {
    return { ok: false, canonical: "", reason: String(e.message || e) };
  }
}

async function aliasAudit(origin, { alias, canonical }) {
  const base = originBase(origin);
  const aliasUrl = base + alias;
  const manual = await httpMeta(aliasUrl, false);
  const follow = await httpMeta(aliasUrl, true);
  const expectedPath = canonical.replace(/\/$/, "") || "/";
  let resolvedFollowPath = "";
  try {
    resolvedFollowPath = new URL(follow.finalUrl).pathname.replace(/\/$/, "") || "/";
  } catch {
    resolvedFollowPath = "";
  }
  const loc = resolveLocation(base, manual.location, expectedPath);
  const retained = RETAINED_PUBLIC_PAGES.has(alias);
  const redirectOk = [301, 308].includes(manual.status);
  const locationOk = loc.matchesCanonical;
  const followOk = follow.status === 200 && resolvedFollowPath === expectedPath;
  const destCanon = await destinationCanonicalOk(origin, canonical);

  let ok = false;
  let rule = "";
  if (retained) {
    ok = manual.status === 200 && destCanon.ok;
    rule = "retained_public_page_200_with_canonical";
  } else {
    ok = redirectOk && locationOk && followOk && destCanon.ok;
    rule = "require_301_308_location_follow_canonical_tag";
  }

  return {
    alias,
    canonical,
    origin,
    manualStatus: manual.status,
    location: manual.location,
    locationResolvedPath: loc.resolvedPath,
    locationMatchesCanonical: locationOk,
    followStatus: follow.status,
    resolvedPath: resolvedFollowPath,
    canonicalPath: expectedPath,
    destination_canonical: destCanon,
    retained_public_page: retained,
    status: ok ? "PASS" : "FAIL",
    rule,
  };
}

function parsePublicAreasServices() {
  const areasFile = path.join(REPO, "lib/publicAreas.ts");
  const src = fs.readFileSync(areasFile, "utf8");
  const areaIdsRaw = [...src.matchAll(/^\s+id:\s*"(AREA-[^"]+)"/gm)].map((m) => m[1]);
  const serviceIdsRaw = [...src.matchAll(/^\s+id:\s*"(SVC-[^"]+)"/gm)].map((m) => m[1]);
  const serviceToArea = {};
  let currentArea = null;
  for (const line of src.split("\n")) {
    const areaM = line.match(/id:\s*"(AREA-[^"]+)"/);
    if (areaM) currentArea = areaM[1];
    const svcM = line.match(/id:\s*"(SVC-[^"]+)"/);
    if (svcM && currentArea) serviceToArea[svcM[1]] = currentArea;
  }
  return {
    areaIdsRaw,
    areaIds: sortedUnique(areaIdsRaw),
    serviceIdsRaw,
    serviceIds: sortedUnique(serviceIdsRaw),
    serviceToArea,
    source: areasFile,
  };
}

function parseCatalog() {
  const catalogFile = path.join(REPO, "docs/commercial/public-catalog/OCTUS_PUBLIC_SERVICE_CATALOG_V1.json");
  const catalog = JSON.parse(fs.readFileSync(catalogFile, "utf8"));
  const catalogServices = catalog.services || [];
  const serviceIdsRaw = catalogServices.map((s) => s.id);
  const areaIdsRaw = (catalog.public_areas || []).map((a) => a.id);
  const familyIdsRaw = (catalog.service_families || catalog.families || []).map((f) => f.id);
  return {
    catalog,
    catalogServices,
    serviceIdsRaw,
    serviceIds: sortedUnique(serviceIdsRaw),
    areaIdsRaw,
    areaIds: sortedUnique(areaIdsRaw),
    familyIdsRaw,
    familyIds: sortedUnique(familyIdsRaw),
    source: catalogFile,
  };
}

function parseArchitecture() {
  const familyFile = path.join(REPO, "docs/website/OCTUS_SERVICE_FAMILY_ARCHITECTURE_V1.json");
  const familyArch = JSON.parse(fs.readFileSync(familyFile, "utf8"));
  const familyList = familyArch.families || [];
  const archServices = familyArch.services || [];
  const familyIdsRaw = familyList.map((f) => f.id);
  const serviceIdsRaw = archServices.map((s) => s.id);

  const dedicatedRoutes = sortedUnique(
    archServices
      .filter((s) => /deep/i.test(s.display_depth || ""))
      .map((s) => s.recommended_route || s.current_route || "")
      .filter((r) => DEEP_ROUTE_PATTERN.test(normalizePath(r)))
  );

  return {
    familyArch,
    familyList,
    archServices,
    familyIdsRaw,
    familyIds: sortedUnique(familyIdsRaw),
    serviceIdsRaw,
    serviceIds: sortedUnique(serviceIdsRaw),
    dedicatedRoutes,
    source: familyFile,
  };
}

function parseRegisterIds() {
  const regFile = path.join(ROOT, "PHASE4_PUBLIC_SERVICE_REGISTER.md");
  const md = fs.readFileSync(regFile, "utf8");
  const idsRaw = [...md.matchAll(/\|\s*(SVC-[A-Z0-9-]+)\s*\|/g)].map((m) => m[1]);
  const rows = [];
  for (const line of md.split("\n")) {
    if (!line.startsWith("| SVC-")) continue;
    const cols = line.split("|").map((c) => c.trim()).filter(Boolean);
    if (cols.length < 5) continue;
    rows.push({
      id: cols[0],
      name: cols[1],
      area: cols[2],
      publicUrl: cols[3],
      canonical: cols[4],
      dedicated: (cols[9] || "").toLowerCase().startsWith("yes"),
      duplicate: (cols[11] || "").trim(),
      orphan: cols[12] || "",
    });
  }
  return { idsRaw, ids: sortedUnique(idsRaw), rows, source: regFile };
}

function parseRouteInventoryDeepRoutes() {
  const invFile = path.join(ROOT, "PHASE4_ROUTE_INVENTORY.md");
  const md = fs.readFileSync(invFile, "utf8");
  const deepSection = md.split("### Deep services")[1]?.split("##")[0] || md;
  const routesRaw = [];
  for (const line of deepSection.split("\n")) {
    if (!line.startsWith("| `/")) continue;
    const m = line.match(/\|\s*`(\/[^`]+)`/);
    if (m && DEEP_ROUTE_PATTERN.test(normalizePath(m[1]))) routesRaw.push(normalizePath(m[1]));
  }
  return {
    routesRaw,
    routes: sortedUnique(routesRaw),
    source: invFile,
  };
}

function catalogueIntegrity() {
  const discrepancies = [];
  const mappings = [];

  const areas = parsePublicAreasServices();
  const catalog = parseCatalog();
  const architecture = parseArchitecture();
  const register = parseRegisterIds();
  const inventory = parseRouteInventoryDeepRoutes();

  const registerDedicatedRoutes = sortedUnique(
    register.rows.filter((r) => r.dedicated).map((r) => normalizePath(r.publicUrl)).filter((r) => DEEP_ROUTE_PATTERN.test(r))
  );

  const perSource = {
    publicAreas: {
      raw_service_ids: areas.serviceIdsRaw.length,
      unique_service_ids: areas.serviceIds.length,
      duplicate_service_ids: findDuplicates(areas.serviceIdsRaw),
      raw_area_ids: areas.areaIdsRaw.length,
      unique_area_ids: areas.areaIds.length,
      duplicate_area_ids: findDuplicates(areas.areaIdsRaw),
    },
    catalog: {
      raw_service_ids: catalog.serviceIdsRaw.length,
      unique_service_ids: catalog.serviceIds.length,
      duplicate_service_ids: findDuplicates(catalog.serviceIdsRaw),
      raw_area_ids: catalog.areaIdsRaw.length,
      unique_area_ids: catalog.areaIds.length,
      duplicate_area_ids: findDuplicates(catalog.areaIdsRaw),
      raw_family_ids: catalog.familyIdsRaw.length,
      unique_family_ids: catalog.familyIds.length,
      duplicate_family_ids: findDuplicates(catalog.familyIdsRaw),
    },
    architecture: {
      raw_service_ids: architecture.serviceIdsRaw.length,
      unique_service_ids: architecture.serviceIds.length,
      duplicate_service_ids: findDuplicates(architecture.serviceIdsRaw),
      raw_family_ids: architecture.familyIdsRaw.length,
      unique_family_ids: architecture.familyIds.length,
      duplicate_family_ids: findDuplicates(architecture.familyIdsRaw),
      dedicated_routes: architecture.dedicatedRoutes,
    },
    register: {
      raw_service_ids: register.idsRaw.length,
      unique_service_ids: register.ids.length,
      duplicate_service_ids: findDuplicates(register.idsRaw),
      dedicated_deep_routes: registerDedicatedRoutes,
    },
    inventory: {
      raw_deep_routes: inventory.routesRaw.length,
      unique_deep_routes: inventory.routes.length,
      duplicate_deep_routes: findDuplicates(inventory.routesRaw),
      deep_routes: inventory.routes,
    },
  };

  for (const [source, dupKey] of [
    ["publicAreas", "duplicate_service_ids"],
    ["catalog", "duplicate_service_ids"],
    ["register", "duplicate_service_ids"],
    ["architecture", "duplicate_service_ids"],
  ]) {
    const dups = perSource[source][dupKey];
    if (dups.length) {
      discrepancies.push({ code: `${source}_duplicate_service_ids`, duplicates: dups });
    }
  }
  if (perSource.catalog.duplicate_family_ids.length) {
    discrepancies.push({
      code: "catalog_duplicate_family_ids",
      duplicates: perSource.catalog.duplicate_family_ids,
    });
  }
  if (perSource.architecture.duplicate_family_ids.length) {
    discrepancies.push({
      code: "architecture_duplicate_family_ids",
      duplicates: perSource.architecture.duplicate_family_ids,
    });
  }
  if (perSource.inventory.duplicate_deep_routes.length) {
    discrepancies.push({
      code: "inventory_duplicate_deep_routes",
      duplicates: perSource.inventory.duplicate_deep_routes,
    });
  }

  const expected = { areas: 7, services: 39, families: 34, deep: 11, orphans: 0, unintentional_duplicates: 0 };

  if (areas.areaIds.length !== expected.areas) {
    discrepancies.push({ code: "publicAreas_area_count", actual: areas.areaIds.length, expected: expected.areas });
  }
  if (areas.serviceIds.length !== expected.services) {
    discrepancies.push({ code: "publicAreas_service_count", actual: areas.serviceIds.length, expected: expected.services });
  }
  if (catalog.serviceIds.length !== expected.services) {
    discrepancies.push({ code: "catalog_service_count", actual: catalog.serviceIds.length, expected: expected.services });
  }
  if (register.ids.length !== expected.services) {
    discrepancies.push({ code: "register_service_count", actual: register.ids.length, expected: expected.services });
  }
  if (architecture.serviceIds.length !== expected.services) {
    discrepancies.push({
      code: "architecture_service_count",
      actual: architecture.serviceIds.length,
      expected: expected.services,
    });
  }
  if (catalog.areaIds.length !== expected.areas) {
    discrepancies.push({ code: "catalog_area_count", actual: catalog.areaIds.length, expected: expected.areas });
  }
  if (architecture.familyIds.length !== expected.families) {
    discrepancies.push({ code: "family_count", actual: architecture.familyIds.length, expected: expected.families });
  }

  const idSets = {
    publicAreas: areas.serviceIds,
    catalog: catalog.serviceIds,
    register: register.ids,
    architecture: architecture.serviceIds,
  };
  for (const [a, b] of [
    ["publicAreas", "catalog"],
    ["catalog", "register"],
    ["catalog", "architecture"],
  ]) {
    if (!setEqual(idSets[a], idSets[b])) {
      discrepancies.push({
        code: `${a}_vs_${b}_service_ids`,
        onlyInA: idSets[a].filter((x) => !idSets[b].includes(x)),
        onlyInB: idSets[b].filter((x) => !idSets[a].includes(x)),
      });
    }
  }

  const deepSets = {
    architecture: architecture.dedicatedRoutes,
    register: registerDedicatedRoutes,
    inventory: inventory.routes,
  };
  for (const [name, routes] of Object.entries(deepSets)) {
    if (routes.length !== expected.deep) {
      discrepancies.push({ code: `${name}_deep_route_count`, actual: routes.length, expected: expected.deep, routes });
    }
  }
  if (!setEqual(deepSets.architecture, deepSets.register)) {
    discrepancies.push({
      code: "architecture_vs_register_deep_routes",
      architecture_only: deepSets.architecture.filter((x) => !deepSets.register.includes(x)),
      register_only: deepSets.register.filter((x) => !deepSets.architecture.includes(x)),
    });
  }
  if (!setEqual(deepSets.architecture, deepSets.inventory)) {
    discrepancies.push({
      code: "architecture_vs_inventory_deep_routes",
      architecture_only: deepSets.architecture.filter((x) => !deepSets.inventory.includes(x)),
      inventory_only: deepSets.inventory.filter((x) => !deepSets.architecture.includes(x)),
    });
  }
  if (!setEqual(deepSets.register, deepSets.inventory)) {
    discrepancies.push({
      code: "register_vs_inventory_deep_routes",
      register_only: deepSets.register.filter((x) => !deepSets.inventory.includes(x)),
      inventory_only: deepSets.inventory.filter((x) => !deepSets.register.includes(x)),
    });
  }

  const familyServiceMap = new Map();
  for (const fam of architecture.familyList) {
    const ids = fam.service_ids || [];
    if (ids.length === 0) discrepancies.push({ code: "empty_family", family_id: fam.id });
    for (const sid of ids) {
      if (!familyServiceMap.has(sid)) familyServiceMap.set(sid, []);
      familyServiceMap.get(sid).push(fam.id);
    }
  }

  const orphans = catalog.serviceIds.filter((id) => !familyServiceMap.has(id));
  if (orphans.length) discrepancies.push({ code: "orphan_services_missing_family", orphans });
  for (const [sid, fams] of familyServiceMap) {
    if (fams.length > 1) {
      discrepancies.push({ code: "service_in_multiple_families", service_id: sid, families: fams });
    }
  }

  for (const svc of catalog.catalogServices) {
    if (!svc.primary_area || !String(svc.primary_area).startsWith("AREA-")) {
      discrepancies.push({ code: "service_missing_primary_area", service_id: svc.id });
    }
    const paArea = areas.serviceToArea[svc.id];
    if (paArea && paArea !== svc.primary_area) {
      discrepancies.push({
        code: "area_mismatch_publicAreas_vs_catalog",
        service_id: svc.id,
        publicAreas: paArea,
        catalog: svc.primary_area,
      });
    }
  }

  for (const svc of architecture.archServices) {
    const dest = svc.recommended_route || svc.current_route || "";
    if (!dest) {
      discrepancies.push({ code: "service_missing_destination", service_id: svc.id });
      continue;
    }
    mappings.push({
      service_id: svc.id,
      destination: dest,
      display_depth: svc.display_depth,
      in_architecture_dedicated: architecture.dedicatedRoutes.includes(normalizePath(dest)),
    });
  }

  const catalogById = Object.fromEntries(catalog.catalogServices.map((s) => [s.id, s]));
  for (const row of register.rows) {
    const cat = catalogById[row.id];
    if (!cat) continue;
    if (cat.name !== row.name) {
      discrepancies.push({ code: "register_name_mismatch", service_id: row.id, register: row.name, catalog: cat.name });
    }
    if (cat.primary_area_name !== row.area) {
      discrepancies.push({ code: "register_area_name_mismatch", service_id: row.id, register: row.area, catalog: cat.primary_area_name });
    }
  }

  const urlToServices = {};
  for (const row of register.rows) {
    const url = normalizePath(row.publicUrl);
    if (!url || url.startsWith("/diagnostic") || row.publicUrl.toLowerCase().includes("hub-only")) continue;
    if (!urlToServices[url]) urlToServices[url] = [];
    urlToServices[url].push(row);
  }

  let unintentionalDuplicates = 0;
  for (const [url, rows] of Object.entries(urlToServices)) {
    if (rows.length <= 1) continue;
    const classifications = rows.map((r) => r.duplicate);
    const allClassified = classifications.every((c) => c && c.toLowerCase() !== "none");
    if (!allClassified) {
      unintentionalDuplicates += 1;
      discrepancies.push({
        code: "undocumented_duplicate_public_url",
        url,
        services: rows.map((r) => r.id),
        duplicate_classifications: classifications,
      });
    } else {
      mappings.push({
        note: "shared_public_url_classified",
        url,
        services: rows.map((r) => r.id),
        classifications,
      });
    }
  }

  const computed = {
    areas: areas.areaIds.length,
    services_publicAreas: areas.serviceIds.length,
    services_catalog: catalog.serviceIds.length,
    services_register: register.ids.length,
    services_architecture: architecture.serviceIds.length,
    families: architecture.familyIds.length,
    deep_routes_architecture: architecture.dedicatedRoutes.length,
    deep_routes_register: registerDedicatedRoutes.length,
    deep_routes_inventory: inventory.routes.length,
    orphans: orphans.length,
    unintentional_duplicates: unintentionalDuplicates,
  };

  const countOk =
    computed.areas === expected.areas &&
    computed.services_publicAreas === expected.services &&
    computed.services_catalog === expected.services &&
    computed.services_register === expected.services &&
    computed.services_architecture === expected.services &&
    computed.families === expected.families &&
    computed.deep_routes_architecture === expected.deep &&
    computed.deep_routes_register === expected.deep &&
    computed.deep_routes_inventory === expected.deep &&
    computed.orphans === expected.orphans &&
    computed.unintentional_duplicates === expected.unintentional_duplicates &&
    discrepancies.length === 0;

  return {
    expected,
    computed,
    per_source: perSource,
    deep_routes_reconciliation: deepSets,
    discrepancies,
    mappings,
    sources: {
      publicAreas: areas.source,
      catalog: catalog.source,
      families: architecture.source,
      register: register.source,
      inventory: inventory.source,
    },
    status: countOk ? "PASS" : "FAIL",
  };
}

function mapAxeViolations(results) {
  const violations = (results.violations || []).map((v) => ({
    id: v.id,
    impact: v.impact,
    description: v.description,
    helpUrl: v.helpUrl,
    nodes: v.nodes.length,
    targets: v.nodes.slice(0, 8).map((n) => n.target),
  }));
  return {
    unavailable: false,
    execution_error: false,
    include: "document",
    violations,
    serious: violations.filter((v) => v.impact === "serious"),
    critical: violations.filter((v) => v.impact === "critical"),
    moderate: violations.filter((v) => v.impact === "moderate"),
    minor: violations.filter((v) => v.impact === "minor"),
    incomplete: (results.incomplete || []).map((i) => ({
      id: i.id,
      impact: i.impact,
      description: i.description,
      nodes: i.nodes?.length || 0,
    })),
    incomplete_count: (results.incomplete || []).length,
    passes: (results.passes || []).length,
  };
}

async function runAxeScan(page) {
  try {
    const results = await new AxeBuilder({ page }).analyze();
    return mapAxeViolations(results);
  } catch (e) {
    return {
      unavailable: true,
      execution_error: true,
      error: String(e.message || e),
      serious: [],
      critical: [],
      moderate: [],
      minor: [],
      incomplete: [],
      incomplete_count: 0,
    };
  }
}

async function discoverDisclosureTriggers(page) {
  return page.evaluate(() => {
    function isVisible(el) {
      if (!el) return false;
      const style = window.getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0") return false;
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) return false;
      return true;
    }

    function describe(el) {
      const tag = el.tagName.toLowerCase();
      const id = el.id || null;
      const ariaControls = el.getAttribute("aria-controls");
      const ariaExpanded = el.getAttribute("aria-expanded");
      const text = (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 80);
      return { tag, id, ariaControls, ariaExpanded, text };
    }

    document.querySelectorAll("[data-phase4-trigger]").forEach((el) => el.removeAttribute("data-phase4-trigger"));

    const candidates = [
      ...document.querySelectorAll("button[aria-expanded][aria-controls]"),
      ...document.querySelectorAll("[role='button'][aria-expanded][aria-controls]"),
      ...document.querySelectorAll("summary"),
      ...document.querySelectorAll("button[aria-expanded]"),
      ...document.querySelectorAll("[role='button'][aria-expanded]"),
      ...document.querySelectorAll("details > summary"),
    ];

    const visible = [];
    const seen = new Set();
    for (const el of candidates) {
      if (seen.has(el)) continue;
      seen.add(el);
      if (!isVisible(el)) continue;
      if (el.closest("[hidden]")) continue;
      if (el.hasAttribute("disabled") || el.getAttribute("aria-disabled") === "true") continue;
      visible.push(el);
    }

    return visible.map((el, index) => {
      el.setAttribute("data-phase4-trigger", String(index));
      const kind = el.tagName === "SUMMARY" || el.closest("details") ? "details-summary" : "aria-accordion";
      return { index, kind, ...describe(el) };
    });
  });
}

async function readTriggerState(page, triggerIndex) {
  return page.evaluate((idx) => {
    function isVisible(el) {
      if (!el) return false;
      const style = window.getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden") return false;
      const rect = el.getBoundingClientRect();
      return !(rect.width === 0 && rect.height === 0);
    }

    const el = document.querySelector(`[data-phase4-trigger="${idx}"]`);
    if (!el) return { missing: true };

    const ariaExpanded = el.getAttribute("aria-expanded");
    const ariaControls = el.getAttribute("aria-controls");
    const details = el.closest("details");
    let panelOpen = null;
    let panelVisible = null;

    if (details) {
      panelOpen = details.open;
      const panel = details.querySelector(":scope > *:not(summary)");
      panelVisible = panel ? isVisible(panel) : null;
    } else if (ariaControls) {
      const panel = document.getElementById(ariaControls);
      panelVisible = panel ? isVisible(panel) : null;
      panelOpen = ariaExpanded === "true";
    }

    return {
      ariaExpanded,
      ariaControls,
      panelOpen,
      panelVisible,
      detailsOpen: details ? details.open : null,
    };
  }, triggerIndex);
}

function stateChanged(before, after) {
  if (!before || !after || before.missing || after.missing) return false;
  if (before.ariaExpanded !== after.ariaExpanded) return true;
  if (before.detailsOpen !== after.detailsOpen && after.detailsOpen != null) return true;
  if (before.panelOpen !== after.panelOpen && after.panelOpen != null) return true;
  if (before.panelVisible !== after.panelVisible && after.panelVisible != null) return true;
  return false;
}

async function testTriggerMethod(page, triggerIndex, method) {
  const trigger = page.locator(`[data-phase4-trigger="${triggerIndex}"]`);
  if ((await trigger.count()) === 0) {
    return { method, triggerIndex, status: "FAIL", reason: "trigger_not_found" };
  }

  try {
    const before = await readTriggerState(page, triggerIndex);
    if (before.missing) {
      return { method, triggerIndex, status: "FAIL", reason: "trigger_state_unreadable" };
    }

    if (method === "mouse") {
      await trigger.scrollIntoViewIfNeeded({ timeout: 5000 }).catch(() => {});
      await trigger.click({ timeout: 5000 });
    } else {
      await trigger.scrollIntoViewIfNeeded({ timeout: 5000 }).catch(() => {});
      await trigger.focus({ timeout: 5000 });
      await page.keyboard.press(method === "enter" ? "Enter" : "Space");
    }

    await page.waitForTimeout(200);
    const afterToggle = await readTriggerState(page, triggerIndex);
    const toggled = stateChanged(before, afterToggle);

    let restored = true;
    if (toggled) {
      if (method === "mouse") {
        await trigger.click({ timeout: 5000 }).catch(() => {});
      } else {
        await trigger.focus({ timeout: 5000 }).catch(() => {});
        await page.keyboard.press(method === "enter" ? "Enter" : "Space").catch(() => {});
      }
      await page.waitForTimeout(150);
      const afterRestore = await readTriggerState(page, triggerIndex);
      restored = !stateChanged(before, afterRestore);
    }

    const panelOk =
      afterToggle.panelVisible != null
        ? afterToggle.panelVisible === (afterToggle.ariaExpanded === "true" || afterToggle.detailsOpen === true)
        : true;

    const pass = toggled && restored && panelOk;
    return {
      method,
      triggerIndex,
      status: pass ? "PASS" : "FAIL",
      before,
      afterToggle,
      toggled,
      restored,
      panelOk,
    };
  } catch (e) {
    return { method, triggerIndex, status: "FAIL", error: String(e.message || e) };
  }
}

async function interactAllDisclosures(page) {
  const triggers = await discoverDisclosureTriggers(page);
  const results = {
    visible_triggers: triggers.length,
    tested_triggers: triggers.length,
    triggers,
    per_trigger: [],
    totals: {
      mouse_pass: 0,
      mouse_fail: 0,
      enter_pass: 0,
      enter_fail: 0,
      space_pass: 0,
      space_fail: 0,
      panel_pass: 0,
      panel_fail: 0,
    },
  };

  for (let i = 0; i < triggers.length; i++) {
    const entry = { triggerIndex: i, trigger: triggers[i], methods: {} };
    for (const method of ["mouse", "enter", "space"]) {
      const r = await testTriggerMethod(page, i, method);
      entry.methods[method] = r;
      if (method === "mouse") r.status === "PASS" ? results.totals.mouse_pass++ : results.totals.mouse_fail++;
      if (method === "enter") r.status === "PASS" ? results.totals.enter_pass++ : results.totals.enter_fail++;
      if (method === "space") r.status === "PASS" ? results.totals.space_pass++ : results.totals.space_fail++;
      if (r.panelOk === false) results.totals.panel_fail++;
      else if (r.panelOk === true) results.totals.panel_pass++;
    }
    results.per_trigger.push(entry);
  }

  results.status =
    results.totals.mouse_fail === 0 &&
    results.totals.enter_fail === 0 &&
    results.totals.space_fail === 0 &&
    results.totals.panel_fail === 0
      ? "PASS"
      : "FAIL";

  return results;
}

async function enumerateTabOrder(page) {
  const expected = await page.evaluate(() => {
    function domPath(el) {
      const parts = [];
      let n = el;
      while (n && n.nodeType === 1 && parts.length < 16) {
        const parent = n.parentElement;
        const index = parent ? Array.prototype.indexOf.call(parent.children, n) : 0;
        parts.unshift(`${n.tagName}:${index}`);
        n = parent;
      }
      return parts.join("/");
    }

    function isVisible(el) {
      if (!el) return false;
      if (typeof el.checkVisibility === "function") {
        try {
          // Do not use checkOpacity: below-fold cards can fail opacity/content-visibility
          // probes while remaining keyboard-focusable.
          return el.checkVisibility({ checkOpacity: false, checkVisibilityCSS: true });
        } catch {
          /* fall through */
        }
      }
      const style = window.getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden") return false;
      const rect = el.getBoundingClientRect();
      return rect.width > 0 || rect.height > 0;
    }

    function isFocusable(el) {
      if (!isVisible(el)) return false;
      if (el.hasAttribute("disabled") || el.getAttribute("aria-disabled") === "true") return false;
      if (el.closest("[inert]")) return false;
      if (el.closest("[hidden]")) return false;
      if (el.closest('[aria-hidden="true"]')) return false;
      const details = el.closest("details");
      if (details && !details.open && el.tagName !== "SUMMARY") return false;
      const tabindexAttr = el.getAttribute("tabindex");
      if (tabindexAttr === "-1") return false;
      const tag = el.tagName;
      if (tag === "A" && el.hasAttribute("href")) return true;
      if (tag === "BUTTON" || tag === "SELECT" || tag === "TEXTAREA" || tag === "SUMMARY") return true;
      if (tag === "INPUT") {
        const type = (el.getAttribute("type") || "text").toLowerCase();
        return type !== "hidden";
      }
      if (tabindexAttr !== null && tabindexAttr !== "-1") return true;
      if (el.getAttribute("contenteditable") === "true") return true;
      return false;
    }

    const all = [...document.querySelectorAll("*")].filter(isFocusable);
    return all.map((el, index) => {
      const rect = el.getBoundingClientRect();
      const path = domPath(el);
      return {
        index,
        tag: el.tagName.toLowerCase(),
        id: el.id || null,
        name:
          el.getAttribute("aria-label") ||
          el.getAttribute("title") ||
          (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 60),
        href: el.getAttribute("href") || null,
        role: el.getAttribute("role") || null,
        path,
        selectorHint: el.id ? `#${el.id}` : `${el.tagName.toLowerCase()}:${index}`,
        rect: { x: rect.x, y: rect.y, w: rect.width, h: rect.height },
      };
    });
  });

  await page.evaluate(() => {
    if (document.activeElement && document.activeElement !== document.body) {
      document.activeElement.blur();
    }
  });
  await page.locator("body").click({ position: { x: 2, y: 2 }, timeout: 3000 }).catch(() => {});

  const reached = [];
  const reachedKeys = new Set();
  const maxTabs = Math.max(expected.length * 3, 120);
  let cycled = false;
  let emptyStreak = 0;

  for (let i = 0; i < maxTabs; i++) {
    await page.keyboard.press("Tab").catch(() => {});
    await page.waitForTimeout(30);

    const info = await page.evaluate(() => {
      function domPath(el) {
        const parts = [];
        let n = el;
        while (n && n.nodeType === 1 && parts.length < 16) {
          const parent = n.parentElement;
          const index = parent ? Array.prototype.indexOf.call(parent.children, n) : 0;
          parts.unshift(`${n.tagName}:${index}`);
          n = parent;
        }
        return parts.join("/");
      }

      const el = document.activeElement;
      if (!el || el === document.body || el === document.documentElement) {
        return { empty: true };
      }
      const style = window.getComputedStyle(el);
      const outlineVisible =
        (style.outlineStyle && style.outlineStyle !== "none" && style.outlineWidth !== "0px") ||
        (style.boxShadow && style.boxShadow !== "none") ||
        (style.outlineOffset && style.outlineStyle !== "none");
      return {
        empty: false,
        tag: el.tagName.toLowerCase(),
        id: el.id || null,
        name:
          el.getAttribute("aria-label") ||
          el.getAttribute("title") ||
          (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 60),
        href: el.getAttribute("href") || null,
        outlineStyle: style.outlineStyle,
        outlineWidth: style.outlineWidth,
        boxShadow: style.boxShadow,
        visibleFocus: outlineVisible,
        path: domPath(el),
        key: domPath(el),
      };
    });

    if (info.empty) {
      emptyStreak += 1;
      if (emptyStreak >= 3) break;
      continue;
    }
    emptyStreak = 0;

    if (reachedKeys.has(info.key)) {
      cycled = true;
      break;
    }
    reachedKeys.add(info.key);
    reached.push(info);
  }

  const expectedKeys = new Set(expected.map((e) => e.path));
  const reachedMatchKeys = new Set(reached.map((r) => r.path || r.key));

  const skipped = expected.filter((e) => !reachedMatchKeys.has(e.path));
  const unexpected = reached.filter((r) => !expectedKeys.has(r.path || r.key));
  const focusIndicatorFails = reached.filter((r) => !r.visibleFocus);

  const status =
    skipped.length === 0 && unexpected.length === 0 && focusIndicatorFails.length === 0 ? "PASS" : "FAIL";

  return {
    expected_count: expected.length,
    reached_count: reached.length,
    cycled,
    expected,
    reached,
    skipped,
    unexpected,
    focus_indicator_fails: focusIndicatorFails,
    status,
  };
}

async function fullA11yForRoute(browser, origin, route, viewportName = "desktop") {
  const vp = VIEWPORTS[viewportName];
  const ctx = await browser.newContext({ viewport: vp });
  const page = await ctx.newPage();
  const url = originBase(origin) + route;
  const timestamp = new Date().toISOString();
  let statusCode = 0;

  try {
    const res = await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
    statusCode = res?.status() || 0;
    await page.waitForTimeout(400);
  } catch (e) {
    await ctx.close();
    return {
      route,
      url,
      viewport: viewportName,
      viewport_size: `${vp.width}x${vp.height}`,
      timestamp,
      http_status: statusCode,
      engine: { name: "@axe-core/playwright", axe_core_version: axeCoreVersion },
      status: "FAIL",
      error: String(e.message || e),
      axe: { unavailable: true, execution_error: true, error: String(e.message || e) },
      interactions: { status: "FAIL", error: "page_load_failed" },
      tab_order: { status: "FAIL", error: "page_load_failed" },
    };
  }

  const axe = await runAxeScan(page);
  const interactions = await interactAllDisclosures(page);
  // Reload so disclosure toggles and cookies do not pollute independent tab-order enumeration.
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
    await page.waitForTimeout(300);
  } catch {
    /* keep prior document if reload fails */
  }
  const tabOrder = await enumerateTabOrder(page);
  await ctx.close();

  const axeBlocking =
    axe.unavailable ||
    axe.execution_error ||
    (axe.serious?.length || 0) + (axe.critical?.length || 0) > 0;
  const interactionFail = interactions.status !== "PASS";
  const tabFail = tabOrder.status !== "PASS";

  return {
    route,
    url,
    viewport: viewportName,
    viewport_size: `${vp.width}x${vp.height}`,
    timestamp,
    http_status: statusCode,
    engine: { name: "@axe-core/playwright", axe_core_version: axeCoreVersion },
    axe,
    interactions,
    tab_order: tabOrder,
    accordion_interaction_fail: interactionFail,
    tab_order_fail: tabFail,
    status: !axeBlocking && !interactionFail && !tabFail ? "PASS" : "FAIL",
  };
}

function runExecutionEvidence() {
  const results = [];
  for (const [cmd, args] of [
    ["npm", ["run", "build"]],
    ["npx", ["tsc", "--noEmit"]],
  ]) {
    const started = new Date().toISOString();
    const r = spawnSync(cmd, args, { cwd: REPO, encoding: "utf8", shell: false });
    results.push({
      command: [cmd, ...args].join(" "),
      started_at: started,
      finished_at: new Date().toISOString(),
      exit_code: r.status,
      status: r.status === 0 ? "PASS" : "FAIL",
      stdout_tail: (r.stdout || "").slice(-1500),
      stderr_tail: (r.stderr || "").slice(-1500),
    });
  }
  return {
    generated_at: new Date().toISOString(),
    evidence_reused: false,
    tested_repository_head: TESTED_HEAD,
    deployed_application_sha: DEPLOYED_SHA,
    application_code_sha: APPLICATION_SHA,
    validator_sha: VALIDATOR_SHA,
    phase4_impl_snapshot_reference_only: IMPL_SNAPSHOT,
    note: "Build/typecheck run against local repository HEAD for validation closeout.",
    commands: results,
    overall: results.every((c) => c.status === "PASS") ? "PASS" : "FAIL",
  };
}

function frozenFilesCheck() {
  let diffNames = [];
  try {
    diffNames = execSync(`git diff --name-only ${APPLICATION_SHA}..${TESTED_HEAD}`, {
      cwd: REPO,
      encoding: "utf8",
    })
      .trim()
      .split("\n")
      .filter(Boolean);
  } catch (e) {
    return { status: "FAIL", error: String(e.message || e), hits: ["git_diff_error"] };
  }
  const hits = diffNames.filter((f) =>
    FROZEN_PATH_PATTERNS.some((p) => f === p || f.startsWith(p) || f.includes(p.replace(/\/$/, "")))
  );
  return { status: hits.length === 0 ? "PASS" : "FAIL", diffNames, hits, diff_base: DIFF_BASE };
}

function screenshotManifestAudit() {
  const manifestPath = path.join(ROOT, "SCREENSHOT_MANIFEST.json");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const items = manifest.items || [];
  const missingMeta = items.filter(
    (i) =>
      !i.file ||
      !i.classification ||
      !i.route ||
      !i.chapter ||
      !i.source_url ||
      i.deployment_id == null ||
      i.immutable_commit_sha == null ||
      !i.viewport ||
      !i.scroll_position_or_selector ||
      !i.capture_timestamp ||
      i.http_status == null ||
      !i.sha256 ||
      i.bytes == null ||
      !i.status
  );
  return {
    screenshot_count: items.length,
    screenshot_manifest_metadata_missing: missingMeta.length,
    note: "Screenshot set preserved; no recapture in validation closeout.",
    status: items.length === 272 && missingMeta.length === 0 ? "PASS" : "FAIL",
  };
}

function summarizeA11yByViewport(results, viewportName) {
  const subset = results.filter((r) => r.viewport === viewportName);
  const serious = subset.reduce((n, r) => n + (r.axe?.serious?.length || 0), 0);
  const critical = subset.reduce((n, r) => n + (r.axe?.critical?.length || 0), 0);
  const moderate = subset.reduce((n, r) => n + (r.axe?.moderate?.length || 0), 0);
  const minor = subset.reduce((n, r) => n + (r.axe?.minor?.length || 0), 0);
  const incomplete = subset.reduce((n, r) => n + (r.axe?.incomplete_count || 0), 0);
  const axeErrors = subset.some((r) => r.axe?.unavailable || r.axe?.execution_error);
  const routeFails = subset.some((r) => r.status !== "PASS");
  const interactionFails = subset.some((r) => r.interactions?.status === "FAIL");
  const tabFails = subset.some((r) => r.tab_order?.status === "FAIL");
  const status =
    !axeErrors && serious === 0 && critical === 0 && !routeFails && !interactionFails && !tabFails
      ? "PASS"
      : "FAIL";
  return {
    viewport: viewportName,
    routes_tested: subset.length,
    serious,
    critical,
    moderate,
    minor,
    incomplete,
    axe_execution_errors: axeErrors,
    interaction_fails: interactionFails,
    tab_order_fails: tabFails,
    status,
  };
}

async function main() {
  fs.mkdirSync(AUDIT, { recursive: true });
  console.log("Catalogue integrity (five independent sources)...");
  const catalogue = catalogueIntegrity();

  if (process.env.PHASE4_CATALOGUE_ONLY === "1") {
    fs.writeFileSync(
      path.join(AUDIT, "PHASE4_CATALOGUE_INTEGRITY.json"),
      JSON.stringify(
        {
          generated_at: new Date().toISOString(),
          bound_preview: PREVIEW,
          bound_application_sha: APPLICATION_SHA,
          bound_deployment_id: DEPLOYMENT_ID,
          catalogue,
        },
        null,
        2
      ) + "\n"
    );
    console.log(
      JSON.stringify(
        {
          mode: "catalogue_only",
          status: catalogue.status,
          services: catalogue.unique_services ?? catalogue.expected?.services,
          summary: catalogue.summary || catalogue,
        },
        null,
        2
      )
    );
    process.exit(catalogue.status === "PASS" ? 0 : 1);
  }

  console.log("Alias audit (strict 301/308)...");
  const aliasResults = [];
  for (const spec of ALIAS_CHECKS) {
    aliasResults.push(await aliasAudit(PREVIEW, spec));
  }

  console.log("Launching Chromium — full-document Axe + interactions + tab order...");
  const browser = await chromium.launch();
  const a11yResults = [];

  for (const route of A11Y_ROUTES) {
    for (const viewportName of ["desktop", "mobile"]) {
      process.stdout.write(`  a11y ${route} @ ${viewportName}\n`);
      a11yResults.push(await fullA11yForRoute(browser, PREVIEW, route, viewportName));
    }
  }

  console.log("Homepage / Team / institutional regression...");
  const homeCtx = await browser.newContext({ viewport: VIEWPORTS.desktop });
  const homePage = await homeCtx.newPage();
  await homePage.goto(originBase(PREVIEW) + "/", { waitUntil: "networkidle", timeout: 120000 });
  const homeResidualCount = await homePage.evaluate((snippet) => {
    const re = new RegExp(snippet.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    return ((document.body?.innerText || "").match(re) || []).length;
  }, HOME_RESIDUAL_SNIPPET);
  const homeHeaders = await httpMeta(originBase(PREVIEW) + "/");
  const homeHtml = await fetch(originBase(PREVIEW) + "/").then((r) => r.text());
  const metaNoindex = /noindex/i.test(homeHtml.match(/<meta[^>]+name=["']robots["'][^>]*>/i)?.[0] || "");
  const headerNoindex = /noindex/i.test(homeHeaders.robots || "");
  await homeCtx.close();

  const teamCtx = await browser.newContext({ viewport: VIEWPORTS.desktop });
  const teamPage = await teamCtx.newPage();
  await teamPage.goto(originBase(PREVIEW) + "/team", { waitUntil: "networkidle", timeout: 120000 });
  const teamData = await teamPage.evaluate((expected) => {
    const names = [...document.querySelectorAll("h3")].map((h) => h.textContent.trim()).filter(Boolean);
    return { names, count: names.length, exact: names.length === 10 && expected.every((n, i) => names[i] === n) };
  }, EXPECTED_TEAM_NAMES);
  await teamCtx.close();

  const institutionalCrawl = {};
  for (const r of INSTITUTIONAL_ROUTES) {
    institutionalCrawl[r] = await httpMeta(originBase(PREVIEW) + r, true);
  }

  const crawlStatus = {};
  for (const r of MANDATORY_ROUTES) {
    crawlStatus[r] = (await httpMeta(originBase(PREVIEW) + r, true)).status;
  }

  await browser.close();

  console.log("Execution evidence (fresh build + typecheck)...");
  const executionEvidence = runExecutionEvidence();
  const frozen = frozenFilesCheck();
  const screenshots = screenshotManifestAudit();

  const axeDesktopSummary = summarizeA11yByViewport(a11yResults, "desktop");
  const axeMobileSummary = summarizeA11yByViewport(a11yResults, "mobile");
  const a11yFail = a11yResults.some((a) => a.status !== "PASS");
  const aliasFail = aliasResults.some((a) => a.status !== "PASS");
  const interactionFail = a11yResults.some((r) => r.interactions?.status === "FAIL");
  const tabOrderFail = a11yResults.some((r) => r.tab_order?.status === "FAIL");

  const seriousCount = a11yResults.reduce((n, r) => n + (r.axe?.serious?.length || 0), 0);
  const criticalCount = a11yResults.reduce((n, r) => n + (r.axe?.critical?.length || 0), 0);
  const moderateCount = a11yResults.reduce((n, r) => n + (r.axe?.moderate?.length || 0), 0);
  const minorCount = a11yResults.reduce((n, r) => n + (r.axe?.minor?.length || 0), 0);
  const incompleteCount = a11yResults.reduce((n, r) => n + (r.axe?.incomplete_count || 0), 0);
  const axeUnavailable = a11yResults.some((r) => r.axe?.unavailable || r.axe?.execution_error);

  const checks = {
    axe_desktop: axeDesktopSummary.status,
    axe_mobile: axeMobileSummary.status,
    axe_mandatory_available: axeUnavailable ? "FAIL" : "PASS",
    a11y_routes_and_home: a11yFail ? "FAIL" : "PASS",
    accordion_interactions: interactionFail ? "FAIL" : "PASS",
    tab_order: tabOrderFail ? "FAIL" : "PASS",
    catalogue_integrity_derived: catalogue.status,
    alias_canonicals_strict: aliasFail ? "FAIL" : "PASS",
    execution_build_typecheck: executionEvidence.overall,
    screenshot_manifest_preserved: screenshots.status,
    frozen_files_post_application: frozen.status,
    home_residual: homeResidualCount === 1 ? "PASS" : "FAIL",
    team_regression: teamData.exact ? "PASS" : "FAIL",
    institutional_smoke: INSTITUTIONAL_ROUTES.every((r) => institutionalCrawl[r]?.status === 200)
      ? "PASS"
      : "FAIL",
    noindex: metaNoindex || headerNoindex ? "PASS" : "FAIL",
    mandatory_routes_http_200: MANDATORY_ROUTES.every((r) => crawlStatus[r] === 200) ? "PASS" : "FAIL",
  };

  const failed = Object.entries(checks)
    .filter(([, v]) => v !== "PASS")
    .map(([k]) => k);
  const overall = failed.length === 0 ? "PASS" : "FAIL";

  const report = {
    generated_at: new Date().toISOString(),
    phase: 4,
    validation_closeout: true,
    tested_repository_head: TESTED_HEAD,
    deployed_application_sha: DEPLOYED_SHA,
    application_code_sha: APPLICATION_SHA,
    validator_sha: VALIDATOR_SHA,
    phase4_impl_snapshot_reference_only: IMPL_SNAPSHOT,
    immutable_preview_url: PREVIEW,
    deployment_id: DEPLOYMENT_ID,
    axe_core_version: axeCoreVersion,
    routes_tested_with_axe: A11Y_ROUTES,
    viewports_tested: Object.keys(VIEWPORTS),
    violation_totals: {
      serious: seriousCount,
      critical: criticalCount,
      moderate: moderateCount,
      minor: minorCount,
      incomplete: incompleteCount,
    },
    axe_viewport_summaries: {
      desktop: axeDesktopSummary,
      mobile: axeMobileSummary,
    },
    screenshots,
    checks,
    failed_checks: failed,
    overall,
    results: {
      catalogue,
      aliases: aliasResults,
      a11y: a11yResults,
      crawlStatus,
      homeResidualCount,
      teamData,
      institutionalCrawl,
      frozen,
      executionEvidence,
    },
  };

  fs.writeFileSync(path.join(AUDIT, "PHASE4_VALIDATION_CLOSEOUT.json"), JSON.stringify(report, null, 2));
  fs.writeFileSync(
    path.join(AUDIT, "PHASE4_A11Y_AUDIT.json"),
    JSON.stringify(
      {
        generated_at: new Date().toISOString(),
        engine: "@axe-core/playwright",
        axe_core_version: axeCoreVersion,
        include: "document",
        routes: a11yResults,
        viewport_summaries: { desktop: axeDesktopSummary, mobile: axeMobileSummary },
        overall: a11yFail ? "FAIL" : "PASS",
      },
      null,
      2
    )
  );
  fs.writeFileSync(
    path.join(AUDIT, "PHASE4_ALIAS_AUDIT.json"),
    JSON.stringify(
      {
        generated_at: new Date().toISOString(),
        origin: PREVIEW,
        rule: "require_301_308_location_follow_canonical_tag",
        aliases: aliasResults,
        overall: aliasFail ? "FAIL" : "PASS",
      },
      null,
      2
    )
  );
  fs.writeFileSync(
    path.join(AUDIT, "PHASE4_CATALOGUE_INTEGRITY.json"),
    JSON.stringify({ generated_at: new Date().toISOString(), ...catalogue }, null, 2)
  );
  fs.writeFileSync(path.join(AUDIT, "PHASE4_EXECUTION_EVIDENCE.json"), JSON.stringify(executionEvidence, null, 2));

  console.log(
    JSON.stringify(
      {
        script: "phase4_validation_closeout.mjs",
        overall,
        failed_checks: failed,
        axe_core_version: axeCoreVersion,
        serious: seriousCount,
        critical: criticalCount,
        moderate: moderateCount,
        minor: minorCount,
        incomplete: incompleteCount,
        axe_desktop: axeDesktopSummary.status,
        axe_mobile: axeMobileSummary.status,
        catalogue: catalogue.status,
        aliases_failed: aliasResults.filter((a) => a.status !== "PASS").length,
        screenshots: screenshots.screenshot_count,
      },
      null,
      2
    )
  );

  process.exit(overall === "PASS" ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
