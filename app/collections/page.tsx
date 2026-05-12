import { getAllProducts } from "@/sanity/queries/products";
import SanityImage from "@/components/ui/SanityImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Collections" };
export const revalidate = 0;

const CATEGORIES = [
  { value: "all", label: "All Collections" },
  { value: "illuminated", label: "Illuminated Mirrors" },
  { value: "designer", label: "Designer Mirrors" },
  { value: "partition", label: "Glass Partitions" },
  { value: "bespoke", label: "Bespoke Installations" },
];

export default async function CollectionsPage() {
  const products = await getAllProducts();

  const productsByCategory = products.reduce((acc, product) => {
    const category = product.category || "uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <>
      <div className="bg-charcoal-dark py-20 px-6 text-center">
        <p className="font-body text-[10px] tracking-[0.22em] uppercase text-gold mb-3 hero-line-1">Our Work</p>
        <h1 className="font-sans text-5xl font-light text-white hero-line-2">Collections</h1>
        <p className="font-body text-sm text-white/50 mt-4 max-w-md mx-auto hero-line-3">
          Every piece is individually crafted to order. No two installations are identical.
        </p>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Category navigation */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-3 mb-14 justify-center">
            {CATEGORIES.map((c) => (
              <a key={c.value} href={`#${c.value}`}
                className="font-body text-[11px] tracking-widest uppercase border border-charcoal/25 text-charcoal/70 px-4 py-2 rounded-sm hover:border-gold hover:text-gold transition-colors">
                {c.label}
              </a>
            ))}
          </div>
        </ScrollReveal>

        {CATEGORIES.slice(1).map((category) => {
          const categoryProducts = productsByCategory[category.value] || [];
          if (categoryProducts.length === 0) return null;

          return (
            <div key={category.value} id={category.value} className="mb-20">
              <ScrollReveal>
                <div className="border-b border-gold/20 pb-4 mb-8">
                  <h2 className="font-sans text-3xl font-light text-charcoal">{category.label}</h2>
                  <p className="font-body text-xs text-charcoal/50 mt-1.5 tracking-wide">
                    {categoryProducts.length} {categoryProducts.length === 1 ? "piece" : "pieces"} available
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProducts.map((p, i) => (
                  <ScrollReveal key={p._id} delay={i * 80}>
                    <Link href={`/collections/${p.slug.current}`}
                      className="group bg-white border border-gold/15 rounded overflow-hidden hover:border-gold/50 hover:shadow-md transition-all duration-300 flex flex-col">
                      <div className="aspect-[4/3] overflow-hidden bg-charcoal/5">
                        <SanityImage image={p.mainImage} width={600} height={450}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-sans text-xl text-charcoal mb-1">{p.name}</h3>
                        <p className="font-body text-xs text-charcoal/55 leading-relaxed mb-4 flex-1">
                          {p.shortDescription}
                        </p>
                        <div className="flex items-center justify-between">
                          {p.baseRatePerSqFt ? (
                            <p className="font-body text-[10px] tracking-wide text-charcoal/50">
                              From{" "}
                              <span className="text-charcoal font-medium">
                                Rs.{p.baseRatePerSqFt.toLocaleString("en-IN")}
                              </span>
                              {" "}/ sq.ft.
                            </p>
                          ) : (
                            <p className="font-body text-[10px] text-charcoal/40">Price on request</p>
                          )}
                          <span className="font-body text-[10px] tracking-widest uppercase text-gold group-hover:translate-x-1 transition-transform duration-200">
                            View Details →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          );
        })}

        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-charcoal/50">No products available yet.</p>
          </div>
        )}
      </section>
    </>
  );
}
