import { client } from "@/sanity/lib/client";
import { projectBySlugQuery, adjacentProjectsQuery } from "@/sanity/queries";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";

const fallback: Record<string, {
  _id: string; title: string; slug: string; client: string; category: string;
  year: string; imageUrl: string; summary: string; challenge: string;
  solution: string; outcome: string; services: string[]; gallery: string[];
}> = {
  "grupo-meridian": {
    _id: "1", title: "Grupo Meridian M&A", slug: "grupo-meridian",
    client: "Grupo Meridian", category: "Mergers & Acquisitions", year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=85",
    summary: "Full advisory for a $120M cross-border acquisition.",
    challenge: "Grupo Meridian sought to acquire a competitor operating across three Latin American markets. The deal faced complex regulatory environments, misaligned shareholder structures, and tight confidentiality requirements that demanded a highly coordinated legal strategy.",
    solution: "Betancur CS assembled a multidisciplinary team combining M&A law, tax structuring, and regulatory affairs. We conducted parallel due diligence across all three jurisdictions, structured a holding vehicle to optimize tax exposure, and managed antitrust filings in Colombia, Peru and Chile simultaneously.",
    outcome: "The acquisition closed in 14 weeks — 30% faster than industry average — at a final valuation 8% below initial asking price. Post-merger integration governance was designed and delivered as part of the engagement.",
    services: ["M&A Legal Advisory", "Tax Structuring", "Antitrust Filings", "Due Diligence", "Post-merger Governance"],
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&q=80",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
    ],
  },
  "constructora-andina": {
    _id: "2", title: "Constructora Andina Restructuring", slug: "constructora-andina",
    client: "Constructora Andina", category: "Corporate Restructuring", year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1400&q=85",
    summary: "Debt restructuring and governance redesign for a regional leader.",
    challenge: "Constructora Andina accumulated $80M in short-term debt following a delayed infrastructure project. Creditors were pressing for liquidation while the core business remained fundamentally sound.",
    solution: "We negotiated a creditor standstill agreement within 30 days, renegotiated terms with 12 financial institutions, and designed a new corporate governance structure that gave creditors board representation as part of the settlement.",
    outcome: "100% of the debt was restructured into a 7-year repayment plan. The company avoided insolvency proceedings, retained 340 employees, and returned to profitability within 18 months.",
    services: ["Debt Restructuring", "Creditor Negotiations", "Corporate Governance", "Insolvency Advisory"],
    gallery: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
    ],
  },
  "techventures": {
    _id: "3", title: "TechVentures Compliance", slug: "techventures",
    client: "TechVentures SA", category: "Regulatory Compliance", year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1400&q=85",
    summary: "Full compliance program for fintech operations in 4 countries.",
    challenge: "TechVentures was expanding its payment platform across Colombia, Mexico, Panama and the USA while facing distinct AML, KYC and data privacy regulations in each market.",
    solution: "We built a unified compliance framework adaptable to each jurisdiction's requirements, implemented automated monitoring systems, trained 120 staff members, and managed regulatory filings across all four markets.",
    outcome: "TechVentures received operating licenses in all four markets within 9 months with zero regulatory sanctions. The compliance infrastructure is now a competitive differentiator in their sales process.",
    services: ["AML/KYC Programs", "Regulatory Licensing", "Data Privacy", "Staff Training", "Compliance Monitoring"],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
    ],
  },
  "inversiones-pacifico": {
    _id: "4", title: "Inversiones Pacífico Due Diligence", slug: "inversiones-pacifico",
    client: "Inversiones Pacífico", category: "Legal Due Diligence", year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=85",
    summary: "Legal and financial due diligence for a $45M real estate portfolio.",
    challenge: "A private equity fund needed a full legal assessment of a 23-property real estate portfolio before closing a $45M acquisition. Title discrepancies and environmental liabilities were suspected.",
    solution: "Betancur CS deployed a dedicated team to examine all property titles, zoning permits, environmental certificates, tenant contracts and pending litigation across all 23 assets in a 3-week window.",
    outcome: "We identified 4 properties with material title defects and 2 with undisclosed environmental liabilities. The client renegotiated a $4.2M price reduction and excluded 2 properties from the deal.",
    services: ["Legal Due Diligence", "Title Review", "Environmental Liability Assessment", "Contract Analysis"],
    gallery: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    ],
  },
  "energia-global": {
    _id: "5", title: "Energía Global Governance", slug: "energia-global",
    client: "Energía Global", category: "Corporate Governance", year: "2022",
    imageUrl: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=1400&q=85",
    summary: "Board restructuring and governance framework for an energy conglomerate.",
    challenge: "Energía Global, a conglomerate with 6 subsidiaries across the energy sector, lacked a unified governance structure. Overlapping board mandates, unclear decision rights and related-party transaction risks were creating friction with international investors.",
    solution: "We designed an integrated governance framework covering board composition, committee charters, related-party transaction policies and a tiered delegation-of-authority matrix. All 6 subsidiaries were aligned to the new structure.",
    outcome: "The governance reform unlocked a $30M international credit facility and improved the company's ESG rating from C to A- within 12 months. Two independent directors recommended by Betancur CS were elected to the board.",
    services: ["Board Design", "Governance Frameworks", "ESG Advisory", "Related-party Policies", "Director Recruitment"],
    gallery: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    ],
  },
};

type PageProps = { params: Promise<{ slug: string }> };

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const isConfigured = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "your-project-id";

  type Adj = { title: string; slug: string } | null;
  let project = null;
  let adjacent: { prev: Adj; next: Adj } = { prev: null, next: null };

  if (isConfigured) {
    try {
      project = await client.fetch(projectBySlugQuery, { slug });
      if (project) {
        adjacent = await client.fetch(adjacentProjectsQuery, { order: project.order ?? 0 });
      }
    } catch { /* falls through to fallback */ }
  }

  if (!project) {
    project = fallback[slug] ?? null;
    const keys = Object.keys(fallback);
    const idx = keys.indexOf(slug);
    adjacent = {
      prev: idx > 0 ? { title: fallback[keys[idx - 1]].title, slug: keys[idx - 1] } : null,
      next: idx < keys.length - 1 ? { title: fallback[keys[idx + 1]].title, slug: keys[idx + 1] } : null,
    };
  }

  if (!project) notFound();

  return <ProjectDetail project={project} adjacent={adjacent} />;
}
