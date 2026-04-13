import { getAllProducts } from "@/sanity/queries/products";
import SanityImage from "@/components/ui/SanityImage";
import PriceCalculator from "@/components/ui/PriceCalculator";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Collections" };
export const revalidate = 3600;

const CATEGORIES = [
  { value: "all", label: "All Collections" },
  { value: "illuminated", label: "Illuminated Mirrors" },
  { value: "designer", label: "Designer Mirrors" },
  { value: "partition", label: "Glass Partitions" },
  { value: "bespoke", label: "Bespoke Installations" },
];

export default async function CollectionsPage() {
  const products = await getAllProducts();

  // Group products by category
  const productsByCategory = products.reduce((acc, product) => {
    const category = product.category || 'uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <>
      <div className="bg-charcoal-dark py-20 px-6 text-center">
        <p className="font-body text-[10px] tracking-[0.22em] uppercase text-gold mb-3">Our Work</p>
        <h1 className="font-sans text-5xl font-light text-white">Collections</h1>
        <p className="font-body text-sm text-white/60 mt-4 max-w-md mx-auto">
          Discover our curated range of premium glass and mirror solutions
        </p>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Category Navigation */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {CATEGORIES.map((c) => (
            <a key={c.value} href={`#${c.value}`}
              className="font-body text-[11px] tracking-widest uppercase border border-charcoal/25 px-4 py-2 rounded-sm hover:border-gold hover:text-gold transition-colors">
              {c.label}
            </a>
          ))}
        </div>

        {/* Products grouped by category */}
        {CATEGORIES.slice(1).map((category) => {
          const categoryProducts = productsByCategory[category.value] || [];
          if (categoryProducts.length === 0) return null;

          return (
            <div key={category.value} id={category.value} className="mb-16">
              <div className="border-b border-gold/20 pb-4 mb-8">
                <h2 className="font-sans text-3xl font-light text-charcoal">{category.label}</h2>
                <p className="font-body text-sm text-charcoal/60 mt-2">
                  {categoryProducts.length} {categoryProducts.length === 1 ? 'product' : 'products'} available
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProducts.map((p) => (
                  <Link key={p._id} href={`/collections/${p.slug.current}`}
                    className="group bg-white border border-gold/15 rounded overflow-hidden hover:border-gold/50 hover:shadow-sm transition-all">
                    <div className="aspect-[4/3] overflow-hidden bg-charcoal/5">
                      <SanityImage image={p.mainImage} width={600} height={450}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-sans text-xl text-charcoal mb-1">{p.name}</h3>
                      <p className="font-body text-xs text-charcoal/55 leading-relaxed mb-4">{p.shortDescription}</p>
                      <div className="mb-4">
                        <PriceCalculator
                          baseRate={p.baseRatePerSqFt}
                          customizationNote={p.customizationNote}
                        />
                      </div>
                      <p className="font-body text-[10px] tracking-widest uppercase text-gold">Enquire →</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        {/* Show message if no products */}
        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="font-body text-lg text-charcoal/60">No products available yet.</p>
          </div>
        )}
      </section>
    </>
  );
}
