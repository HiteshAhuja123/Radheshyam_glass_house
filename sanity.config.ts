import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "radheshyam-glass-house",
  title: "Radheshyam Glass House — Admin",

  projectId: "18avjlwl",   // ← paste your real project ID here
  dataset: "production",                  // ← hardcode this too

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});