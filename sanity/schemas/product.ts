import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Product Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug (URL)", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({
      name: "category", title: "Category", type: "string",
      options: {
        list: [
          { title: "Illuminated Mirrors", value: "illuminated" },
          { title: "Designer Mirrors", value: "designer" },
          { title: "Glass Partitions", value: "partition" },
          { title: "Bespoke Installations", value: "bespoke" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "shortDescription", title: "Short Description", type: "text", rows: 2 }),
    defineField({ name: "description", title: "Full Description", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "mainImage", title: "Main Image", type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "gallery", title: "Additional Images", type: "array",
      of: [{ type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Alt Text", type: "string" }] }],
    }),
    defineField({ name: "isFeatured", title: "Feature on Home Page?", type: "boolean", initialValue: false }),
    defineField({ name: "baseRatePerSqFt", title: "Base Rate (Rs per sq. ft.)", type: "number" }),
    defineField({ name: "customizationNote", title: "Customization Note", type: "string" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  preview: { select: { title: "name", subtitle: "category", media: "mainImage" } },
});
