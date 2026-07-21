/** Wave 4 People & Trust — single source for /team profiles. Soft IA: no redirects. */

export type PeopleGroup = "leadership" | "core_specialists" | "operations_delivery";

export type PersonProfile = {
  id: string;
  name: string;
  title: string;
  group: PeopleGroup;
  bio: string;
  photo: string;
  /** CSS object-position for circular crop centering */
  photoPosition?: string;
  linkedin?: string;
  publish: boolean;
};

export const GROUP_LABELS: Record<PeopleGroup, string> = {
  leadership: "Leadership",
  core_specialists: "Core Specialists",
  operations_delivery: "Operations & Delivery",
};

export const GROUP_ORDER: PeopleGroup[] = [
  "leadership",
  "core_specialists",
  "operations_delivery",
];

/**
 * temporary_photo_waiver: APPROVED
 * minimum_interim_portrait: 600x600
 * final_master_standard: 1200x1200 (future acquisition — not a Wave 4 blocker)
 */
export const TEMPORARY_PHOTO_WAIVER = {
  temporary_photo_waiver: "APPROVED" as const,
  minimum_interim_portrait: "600x600",
  final_master_standard: "1200x1200",
};

export const PEOPLE: PersonProfile[] = [
  {
    id: "rubio-teixeira",
    name: "Rubio Teixeira",
    title: "Founder & Managing Partner",
    group: "leadership",
    bio: "Founder and Managing Partner of Octus, responsible for the firm’s strategic direction and its work as an execution partner for regulated operations. Coordinates regulatory strategy, international market entry and cross-border structures.",
    photo: "/team/rubio-teixeira.jpg",
    photoPosition: "50% 30%",
    publish: true,
  },
  {
    id: "maria-cristina",
    name: "Maria Cristina",
    title: "Managing Director",
    group: "leadership",
    bio: "Leads operational coordination and client delivery across Octus mandates, connecting regulatory, compliance, corporate and commercial workstreams throughout execution.",
    photo: "/team/maria-cristina.jpg",
    photoPosition: "50% 30%",
    linkedin: "https://www.linkedin.com/in/maria-cristina-060241b6/",
    publish: true,
  },
  {
    id: "esther-vendrami",
    name: "Esther Vendrami",
    title: "International Regulatory & Compliance Lead",
    group: "core_specialists",
    bio: "Leads international regulatory and compliance coordination for regulated operations, including licensing pathways, compliance structures and ongoing operational requirements across multiple markets.",
    photo: "/team/esther-vendrami.jpg",
    photoPosition: "50% 45%",
    linkedin: "https://www.linkedin.com/in/esthervendrami/",
    publish: true,
  },
  {
    id: "caroline-giovanetti",
    name: "Caroline Giovanetti",
    title: "Brazil Regulatory Lead",
    group: "core_specialists",
    bio: "Leads regulatory and licensing coordination in Brazil, supporting operators entering or operating under Brazilian regulatory frameworks as part of Octus’ international execution model.",
    photo: "/team/caroline-giovanetti.jpg",
    photoPosition: "50% 32%",
    linkedin: "https://www.linkedin.com/in/caroline-cubas-giovanetti-400820144/",
    publish: true,
  },
  {
    id: "larissa-carvalho",
    name: "Larissa Carvalho",
    title: "Regulatory & Compliance Specialist",
    group: "core_specialists",
    bio: "Supports regulatory and compliance execution through documentation, process coordination and delivery management across client mandates.",
    photo: "/team/larissa-carvalho.jpg",
    photoPosition: "50% 38%",
    linkedin: "https://www.linkedin.com/in/larissaocarvalho/",
    publish: true,
  },
  {
    id: "milla-ludovico",
    name: "Milla Ludovico",
    title: "Client Development & Partnerships Lead",
    group: "core_specialists",
    bio: "Leads client development, commercial intake and partnership coordination, connecting new mandates and strategic relationships with Octus’ execution teams.",
    photo: "/team/milla-ludovico.jpg",
    photoPosition: "50% 36%",
    linkedin: "https://www.linkedin.com/in/milla-ludovico-6a9945a2/",
    publish: true,
  },
  {
    id: "bianca-carolina-oliveira-andrade",
    name: "Bianca Carolina Oliveira Andrade",
    title: "People & Operations",
    group: "operations_delivery",
    bio: "Coordinates people operations and internal processes that support consistent delivery across Octus mandates and teams.",
    photo: "/team/bianca-carolina-oliveira-andrade.jpg",
    photoPosition: "50% 30%",
    linkedin: "https://www.linkedin.com/in/rh2463365recursoshumanos/",
    publish: true,
  },
  // Unpublished — HUMAN_CONFIRMATION_REQUIRED (assets retained; publish false)
  {
    id: "rodrigo-coelho-lopes",
    name: "Rodrigo Coelho Lopes",
    title: "Legal Architecture Lead",
    group: "core_specialists",
    bio: "Legal strategy and coordination across the group's regulatory and corporate mandates.",
    photo: "/team/rodrigo-lopes.jpg",
    publish: false,
  },
  {
    id: "claudia-nery",
    name: "Claudia Nery",
    title: "Chief Financial Officer",
    group: "leadership",
    bio: "Corporate and financial architecture. Financial governance, group structuring and reporting across jurisdictions.",
    photo: "/team/claudia-nery.jpg",
    linkedin: "https://www.linkedin.com/in/claudia-nery/",
    publish: false,
  },
  {
    id: "daniel-cruz-fonseca",
    name: "Daniel Cruz Fonseca",
    title: "Regulatory & Compliance Specialist",
    group: "core_specialists",
    bio: "Regulatory and compliance structuring across regulated operators.",
    photo: "/team-daniel.jpg",
    publish: false,
  },
  {
    id: "luciana-santos-veloso",
    name: "Luciana Santos Veloso",
    title: "Operations Coordinator",
    group: "operations_delivery",
    bio: "Operational workflows, client documentation and cross-functional coordination.",
    photo: "/team-luciana.jpg",
    publish: false,
  },
];

export function getPublishedPeople(): PersonProfile[] {
  return PEOPLE.filter((p) => p.publish === true);
}

export function getPublishedByGroup(group: PeopleGroup): PersonProfile[] {
  return getPublishedPeople().filter((p) => p.group === group);
}

export function personAlt(person: Pick<PersonProfile, "name" | "title">): string {
  return `${person.name}, ${person.title}, Octus Consulting`;
}
