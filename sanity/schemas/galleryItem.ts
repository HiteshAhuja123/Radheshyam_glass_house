import { defineField, defineType } from "sanity";

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Gallery Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Project Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "projectType", title: "Project Type", type: "string",
      options: {
        list: [
          { title: "Residence", value: "residence" },
          { title: "Hotel / Resort", value: "hotel" },
          { title: "Office", value: "office" },
          { title: "Salon / Spa", value: "salon" },
          { title: "Restaurant", value: "restaurant" },
          { title: "Other", value: "other" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "image", title: "Project Photo", type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
      validation: (r) => r.required(),
    }),
    defineField({ name: "isFeatured", title: "Feature on Home Page?", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  preview: { select: { title: "title", subtitle: "projectType", media: "image" } },
});
