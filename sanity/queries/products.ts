import { client } from "../client";

export type Product = {
  _id: string;
  name: string;
  slug: { current: string };
  category: string;
  shortDescription: string;
  mainImage: { asset: { _ref: string; url: string }; alt: string };  // add url
  gallery?: { asset: { _ref: string; url: string }; alt: string }[];
  isFeatured: boolean;
  baseRatePerSqFt?: number;
  customizationNote?: string;
};

export async function getAllProducts(): Promise<Product[]> {
  return client.fetch(
    `*[_type == "product"] | order(order asc) {
      _id, name, slug, category, shortDescription,
      mainImage { alt, asset->{ _id, url } },   // 👈 asset->
      isFeatured, baseRatePerSqFt, customizationNote
    }`
  );
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return client.fetch(
    `*[_type == "product" && isFeatured == true] | order(order asc)[0...4] {
      _id, name, slug, category, shortDescription,
      mainImage { alt, asset->{ _id, url } },   // 👈 asset->
      baseRatePerSqFt
    }`
  );
}

export async function getProductBySlug(slug: string): Promise<Product> {
  return client.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      _id, name, slug, category, shortDescription, description,
      mainImage { alt, asset->{ _id, url } },          // 👈 asset->
      gallery[]{ alt, asset->{ _id, url } },           // 👈 asset->
      baseRatePerSqFt, customizationNote
    }`,
    { slug }
  );
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  return client.fetch(
    `*[_type == "product" && category == $category] | order(order asc) {
      _id, name, slug, category, shortDescription,
      mainImage { alt, asset->{ _id, url } },   // 👈 asset->
      baseRatePerSqFt
    }`,
    { category }
  );
}