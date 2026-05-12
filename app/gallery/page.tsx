import { getAllGalleryItems } from "@/sanity/queries/gallery";
import SanityImage from "@/components/ui/SanityImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Gallery" };
export const revalidate = 3600;

const TYPE_LABELS: Record<string, string> = {
  residence: "Residence",
  hotel: "Hotel / Resort",
  office: "Office",
  salon: "Salon / Spa",
  restaurant: "Restaurant",
  other: "Other",
};

export default async function GalleryPage() {
  const items = await getAllGalleryItems();

  return (
    <>
      <div className="bg-charcoal-dark py-20 px-6 text-center">
        <p className="font-body text-[10px] tracking-[0.22em] uppercase text-gold mb-3 hero-line-1">Our Projects</p>
        <h1 className="font-sans text-5xl font-light text-white hero-line-2">Gallery</h1>
        <p className="font-body text-sm text-white/40 mt-3 max-w-md mx-auto hero-line-3">
          Real installations across luxury residences, hotels, offices, and salons.
        </p>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-16">
        {items.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {items.map((item, i) => (
              <ScrollReveal key={item._id} delay={(i % 3) * 80} className="break-inside-avoid">
                <div className="group relative overflow-hidden rounded">
                  <SanityImage image={item.image} width={600} height={600}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/45 transition-colors duration-300 flex items-end">
                    <div className="p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="font-body text-[9px] tracking-widest uppercase text-gold">
                        {TYPE_LABELS[item.projectType] ?? item.projectType}
                      </p>
                      <p className="font-sans text-white text-lg">{item.title}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-body text-charcoal/50">Gallery coming soon.</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <div className="bg-gold px-6 py-8 text-center">
        <p className="font-body text-xs text-charcoal/70 mb-3">
          See something you love? Let's create something similar for your space.
        </p>
        <Link href="/contact"
          className="font-body text-[11px] tracking-widest uppercase border border-charcoal/40 text-charcoal px-7 py-3 rounded-sm hover:bg-charcoal/5 transition-colors inline-block">
          Start a Conversation
        </Link>
      </div>
    </>
  );
}
