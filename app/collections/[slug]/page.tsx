// app/products/[slug]/page.tsx
import { getProductBySlug, getAllProducts } from "@/sanity/queries/products";
import SanityImage from "@/components/ui/SanityImage";
import PriceCalculator from "@/components/ui/PriceCalculator";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 0; // 👈 set to 0 while debugging, change back to 3600 later

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ slug: p.slug.current }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();

  // Guard: mainImage must exist before rendering
  const hasMainImage = !!product.mainImage?.asset;

  const waMessage = `Hi! I'm interested in the "${product.name}" from your collection. Could you please share more details and availability?`;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-14 items-start">

        {/* Images */}
        <div className="space-y-3">
          <div className="aspect-square overflow-hidden rounded bg-charcoal/5">
            {hasMainImage ? (
              <SanityImage
                image={product.mainImage}
                width={800}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            ) : (
              // Fallback placeholder if image is missing
              <div className="w-full h-full flex items-center justify-center bg-charcoal/10">
                <span className="text-charcoal/30 text-sm font-body">No image</span>
              </div>
            )}
          </div>

          {product.gallery && product.gallery.length > 0 && (
            <div className="grid grid-cols-3 gap-3">
              {product.gallery
                .filter((img) => !!img?.asset) // 👈 skip gallery images with no asset
                .slice(0, 3)
                .map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square overflow-hidden rounded bg-charcoal/5"
                  >
                    <SanityImage
                      image={img}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="md:sticky md:top-24">
          <p className="font-body text-[10px] tracking-widest uppercase text-gold mb-3">
            {product.category}
          </p>
          <h1 className="font-sans text-4xl font-light text-charcoal mb-4">
            {product.name}
          </h1>
          <p className="font-body text-sm text-charcoal/65 leading-relaxed mb-8">
            {product.shortDescription}
          </p>

          <div className="border-t border-gold/20 pt-8 mb-8">
            <p className="font-body text-[10px] tracking-widest uppercase text-charcoal/50 mb-4">
              Price Estimate
            </p>
            <PriceCalculator
              baseRate={product.baseRatePerSqFt}
              customizationNote={product.customizationNote}
            />
          </div>

          <WhatsAppButton message={waMessage} className="w-full justify-center" />
        </div>

      </div>
    </div>
  );
}