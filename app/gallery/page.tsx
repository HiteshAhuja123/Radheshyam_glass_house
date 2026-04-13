import { getAllGalleryItems } from "@/sanity/queries/gallery";
import SanityImage from "@/components/ui/SanityImage";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Gallery" };
export const revalidate = 3600;

const TYPE_LABELS: Record<string, string> = {
  residence: "Residence", hotel: "Hotel / Resort", office: "Office",
  salon: "Salon / Spa", restaurant: "Restaurant", other: "Other",
};

export default async function GalleryPage() {
  const items = await getAllGalleryItems();

  return (
    <>
      <div className="bg-charcoal-dark py-20 px-6 text-center">
        <p className="font-body text-[10px] tracking-[0.22em] uppercase text-gold mb-3">Our Projects</p>
        <h1 className="font-sans text-5xl font-light text-white">Gallery</h1>
        <p className="font-body text-sm text-white/40 mt-3 max-w-md mx-auto">
          Real installations across luxury residences, hotels, offices, and salons.
        </p>
      </div>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {items.map((item) => (
            <div key={item._id} className="break-inside-avoid group relative overflow-hidden rounded">
              <SanityImage image={item.image} width={600} height={600}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-end">
                <div className="p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-body text-[9px] tracking-widest uppercase text-gold">{TYPE_LABELS[item.projectType] ?? item.projectType}</p>
                  <p className="font-sans text-white text-lg">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
