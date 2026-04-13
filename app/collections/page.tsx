import { getAllProducts } from "@/sanity/queries/products";
import SanityImage from "@/components/ui/SanityImage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Collections" };
export const revalidate = 3600;

const CATEGORIES = [
  { value: "all", label: "All" },
  { value: "illuminated", label: "Illuminated Mirrors" },
  { value: "designer", label: "Designer Mirrors" },
  { value: "partition", label: "Glass Partitions" },
  { value: "bespoke", label: "Bespoke" },
];

export default async function CollectionsPage() {
  const products = await getAllProducts();

  return (
    <>
      <div className="bg-charcoal-dark py-20 px-6 text-center">
        <p className="font-body text-[10px] tracking-[0.22em] uppercase text-gold mb-3">Our Work</p>
        <h1 className="font-sans text-5xl font-light text-white">Collections</h1>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Category filter — static links (can be made client-side if needed) */}
        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map((c) => (
            <span key={c.value}
              className="font-body text-[11px] tracking-widest uppercase border border-charcoal/25 px-4 py-2 rounded-sm cursor-pointer hover:border-gold hover:text-gold transition-colors">
              {c.label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link key={p._id} href={`/collections/${p.slug.current}`}
              className="group bg-white border border-gold/15 rounded overflow-hidden hover:border-gold/50 hover:shadow-sm transition-all">
              <div className="aspect-[4/3] overflow-hidden bg-charcoal/5">
                <SanityImage image={p.mainImage} width={600} height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-sans text-xl text-charcoal mb-1">{p.name}</h3>
                <p className="font-body text-xs text-charcoal/55 leading-relaxed">{p.shortDescription}</p>
                <p className="font-body text-[10px] tracking-widest uppercase text-gold mt-3">Enquire →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
