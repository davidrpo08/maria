import { defineQuery } from "next-sanity";

export type SanityProject = {
  _id: string;
  title: string;
  slug: string;
  client: string | null;
  category: string | null;
  year: string | null;
  imageUrl: string | null;
  summary: string | null;
};

export type SanityProjectDetail = SanityProject & {
  challenge: string | null;
  solution: string | null;
  outcome: string | null;
  services: string[] | null;
  gallery: string[] | null;
};

export const projectsQuery = defineQuery(`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    client,
    category,
    year,
    "imageUrl": coverImage.asset->url,
    summary
  }
`);

export const projectBySlugQuery = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    client,
    category,
    year,
    "imageUrl": coverImage.asset->url,
    summary,
    challenge,
    solution,
    outcome,
    services,
    "gallery": gallery[].asset->url
  }
`);

export const adjacentProjectsQuery = defineQuery(`
{
  "prev": *[_type == "project" && order < $order] | order(order desc)[0] {
    title, "slug": slug.current
  },
  "next": *[_type == "project" && order > $order] | order(order asc)[0] {
    title, "slug": slug.current
  }
}`);
