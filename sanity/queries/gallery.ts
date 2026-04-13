import { client } from "../client";

export type GalleryItem = {
  _id: string;
  title: string;
  projectType: string;
  image: { asset: { _ref: string }; alt: string };
  isFeatured: boolean;
};

export async function getAllGalleryItems(): Promise<GalleryItem[]> {
  return client.fetch(
    `*[_type == "galleryItem"] | order(order asc) {
      _id, title, projectType, image, isFeatured
    }`
  );
}

export async function getFeaturedGalleryItems(): Promise<GalleryItem[]> {
  return client.fetch(
    `*[_type == "galleryItem" && isFeatured == true] | order(order asc)[0...6] {
      _id, title, projectType, image
    }`
  );
}
