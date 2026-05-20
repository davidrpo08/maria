import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Project Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: "client", title: "Client Name", type: "string" }),
    defineField({ name: "category", title: "Service Category", type: "string", placeholder: "Legal Advisory" }),
    defineField({ name: "year", title: "Year", type: "string", placeholder: "2024" }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "summary", title: "Short Summary", type: "text", rows: 2, description: "One-line description shown in the project grid" }),
    defineField({ name: "challenge", title: "The Challenge", type: "text", rows: 4 }),
    defineField({ name: "solution", title: "Our Approach", type: "text", rows: 4 }),
    defineField({ name: "outcome", title: "Results & Outcome", type: "text", rows: 4 }),
    defineField({
      name: "services",
      title: "Services Rendered",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({ name: "order", title: "Order", type: "number", description: "Lower = appears first" }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "client", media: "coverImage" } },
});
