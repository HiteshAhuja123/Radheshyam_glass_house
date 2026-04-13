import { getFeaturedProducts } from "@/sanity/queries/products";
import { getFeaturedGalleryItems } from "@/sanity/queries/gallery";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PriceCalculator from "@/components/ui/PriceCalculator";
import SanityImage from "@/components/ui/SanityImage";
import Link from "next/link";
import { CONTACT_PHONE, WHATSAPP_NUMBER } from "@/lib/constants";

const CATEGORY_LABELS: Record<string, string> = {
  illuminated: "Illuminated Mirrors",
  designer: "Designer Mirrors",
  partition: "Glass Partitions",
  bespoke: "Bespoke Installations",
};

export const revalidate = 3600; // ISR — revalidate every hour

export default async function HomePage() {
  const [products, galleryItems] = await Promise.all([
    getFeaturedProducts(),
    getFeaturedGalleryItems(),
  ]);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] bg-charcoal-dark flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-4 gap-px opacity-10 pointer-events-none">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border-x border-gold/40" />
          ))}
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-gold mb-5">
            45 Years of Artisan Glass Excellence
          </p>
          <h1 className="font-sans text-white text-5xl md:text-6xl leading-[1.15] font-light mb-5">
            Where Reflection<br />Becomes{" "}
            <em className="text-gold italic">Fine Art</em>
          </h1>
          <p className="font-body text-white/50 text-sm leading-relaxed mb-10 max-w-md mx-auto">
            Designer mirrors and bespoke glass solutions crafted across three generations for India's finest homes, hotels, and offices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collections"
              className="bg-gold text-charcoal font-body text-[11px] font-medium tracking-[0.14em] uppercase px-8 py-3.5 rounded-sm hover:bg-gold-light transition-colors">
              Explore Collections
            </Link>
            <Link href="/gallery"
              className="border border-white/30 text-white font-body text-[11px] tracking-[0.14em] uppercase px-8 py-3.5 rounded-sm hover:border-gold hover:text-gold transition-colors">
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ── LEGACY STRIP ── */}
      <div className="bg-gold py-5 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-charcoal">
          {[["45+", "Years of legacy"], ["3rd", "Generation craftsmanship"], ["500+", "Projects delivered"], ["100%", "Custom made"]].map(([num, label]) => (
            <div key={label} className="text-center">
              <p className="font-sans text-3xl font-medium">{num}</p>
              <p className="font-body text-[10px] tracking-widest uppercase opacity-70 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURED COLLECTIONS ── */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-gold mb-3">Our Collections</p>
          <h2 className="font-sans text-4xl font-light text-charcoal mb-3">Curated for the Discerning Eye</h2>
          <p className="font-body text-sm text-charcoal/60 leading-relaxed max-w-lg mb-10">
            Each piece is individually crafted to order. No two installations are identical — your space, your vision, our mastery.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p) => (
              <Link key={p._id} href={`/collections/${p.slug.current}`}
                className="group bg-white border border-gold/20 rounded overflow-hidden hover:border-gold/50 transition-colors">
                <div className="aspect-square overflow-hidden bg-charcoal/5">
                  <SanityImage image={p.mainImage} width={400} height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <p className="font-body text-[9px] tracking-widest uppercase text-gold mb-1">
                    {CATEGORY_LABELS[p.category] ?? p.category}
                  </p>
                  <h3 className="font-sans text-lg text-charcoal mb-1">{p.name}</h3>
                  <p className="font-body text-xs text-charcoal/55 leading-relaxed line-clamp-2">{p.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/collections"
              className="font-body text-[11px] tracking-widest uppercase border border-charcoal/30 text-charcoal px-7 py-3 rounded-sm hover:border-gold hover:text-gold transition-colors">
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRICE CALCULATOR ── */}
      <section className="bg-charcoal py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-gold mb-3">Estimate Your Project</p>
          <h2 className="font-sans text-4xl font-light text-white mb-3">Price Calculator</h2>
          <p className="font-body text-sm text-white/50 leading-relaxed max-w-lg mb-10">
            Get an instant indicative estimate. All installations are custom — final pricing confirmed after consultation.
          </p>
          <PriceCalculator />
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      {galleryItems.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="font-body text-[10px] tracking-[0.22em] uppercase text-gold mb-3">Project Gallery</p>
            <h2 className="font-sans text-4xl font-light text-charcoal mb-10">Spaces We've Transformed</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {galleryItems.slice(0, 6).map((item, i) => (
                <div key={item._id} className={`overflow-hidden rounded bg-charcoal/5 ${i === 0 ? "md:row-span-2" : ""}`}>
                  <SanityImage image={item.image} width={600} height={i === 0 ? 800 : 400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/gallery"
                className="font-body text-[11px] tracking-widest uppercase border border-charcoal/30 text-charcoal px-7 py-3 rounded-sm hover:border-gold hover:text-gold transition-colors">
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CONTACT BAR ── */}
      <div className="bg-gold px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-sans text-2xl text-charcoal font-light">Ready to elevate your space?</h3>
            <p className="font-body text-xs text-charcoal/65 mt-1">Our design consultants are available Mon–Sat, 10am–7pm</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <WhatsAppButton className="!bg-charcoal !text-white hover:!bg-charcoal-light" />
            <a href={`tel:${CONTACT_PHONE}`}
              className="border border-charcoal/40 text-charcoal font-body text-sm font-medium px-6 py-3 rounded-sm hover:bg-charcoal/5 transition-colors">
              {CONTACT_PHONE}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
