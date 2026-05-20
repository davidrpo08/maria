import { client } from "@/sanity/lib/client";
import { projectsQuery, type SanityProject } from "@/sanity/queries";
import { ProjectsList } from "./projects-list";

// Fallback data shown when Sanity is not yet configured
const fallbackProjects: SanityProject[] = [
  { _id: "1", title: "Reestructuración Financiera Grupo Meridian", slug: "grupo-meridian", client: "Grupo Meridian", category: "Consultoría Financiera", year: "2024", imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80", summary: "Asesoría integral para una adquisición transfronteriza de USD $120M." },
  { _id: "2", title: "Estrategia Comercial Constructora Andina", slug: "constructora-andina", client: "Constructora Andina", category: "Comercial & Mercadeo", year: "2024", imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=700&q=80", summary: "Rediseño de estrategia comercial y posicionamiento de marca para líder regional." },
  { _id: "3", title: "Programa ONU — TechVentures", slug: "techventures", client: "TechVentures SA", category: "Consultoría ONU", year: "2023", imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=700&q=80", summary: "Alineación de operaciones fintech con estándares de organismos internacionales en 4 países." },
  { _id: "4", title: "Due Diligence Inversiones Pacífico", slug: "inversiones-pacifico", client: "Inversiones Pacífico", category: "Consultoría Financiera", year: "2023", imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80", summary: "Análisis financiero y legal de portafolio inmobiliario de USD $45M." },
  { _id: "5", title: "Gobernanza Corporativa Energía Global", slug: "energia-global", client: "Energía Global", category: "Comercial & Mercadeo", year: "2022", imageUrl: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=700&q=80", summary: "Reestructuración de junta directiva y marco de gobernanza para conglomerado energético." },
];

async function fetchProjects(): Promise<SanityProject[]> {
  const id = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  if (!id || id === "your-project-id") return fallbackProjects;

  try {
    const data = await client.fetch(projectsQuery);
    return data?.length ? data : fallbackProjects;
  } catch {
    return fallbackProjects;
  }
}

export async function Projects() {
  const projects = await fetchProjects();
  return <ProjectsList projects={projects} />;
}
