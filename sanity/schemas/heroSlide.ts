import { defineField, defineType } from "sanity";

export const heroSlide = defineType({
  name: "heroSlide",
  title: "Hero Banner Slide",
  type: "document",
  fields: [
    defineField({
      name: "image", title: "Hero Image", type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
      validation: (r) => r.required(),
    }),
    defineField({ name: "headline", title: "Headline (optional)", type: "string" }),
    defineField({ name: "order", title: "Order", type: "number" }),
    defineField({ name: "isActive", title: "Active?", type: "boolean", initialValue: true }),
  ],
  preview: {
    select: { title: "headline", media: "image" },
    prepare({ title, media }) { return { title: title || "Hero slide", media }; },
  },
});
