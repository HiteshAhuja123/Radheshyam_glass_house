import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Customize" };

const features = [
  {
    title: "Real-Time Preview",
    body: "Visualize your custom mirror or partition in your actual space before ordering.",
  },
  {
    title: "Dimension Builder",
    body: "Input precise measurements and choose from our full range of glass types and finishes.",
  },
  {
    title: "Finish Selector",
    body: "Browse our library of frames, bevels, tints, and LED configurations side by side.",
  },
  {
    title: "Instant Estimate",
    body: "Get a live price calculation as you build, with no obligation to proceed.",
  },
];

export default function CustomizePage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-charcoal-dark py-24 px-6 text-center">
        <p className="font-body text-[10px] tracking-[0.22em] uppercase text-gold mb-3 hero-line-1">
          Coming Soon
        </p>
        <h1 className="font-sans text-5xl md:text-6xl font-light text-white leading-[1.15] hero-line-2">
          Design Your<br />
          <em className="text-gold italic">Perfect Piece</em>
        </h1>
        <p className="font-body text-sm text-white/50 mt-5 max-w-md mx-auto hero-line-3">
          Our custom design tool is currently being built. Until it launches, our
          consultants are ready to guide you through every choice — personally.
        </p>
      </div>

      {/* What's Coming */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-gold mb-3">What to Expect</p>
          <h2 className="font-sans text-4xl font-light text-charcoal mb-12">
            The Customize Tool
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white border border-gold/15 rounded p-6">
                <div className="w-6 h-px bg-gold mb-4" />
                <h3 className="font-sans text-xl text-charcoal mb-2">{f.title}</h3>
                <p className="font-body text-xs text-charcoal/60 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In the meantime CTA */}
      <section className="bg-charcoal py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-gold mb-3">In the Meantime</p>
          <h2 className="font-sans text-4xl font-light text-white mb-4">
            Talk to a Consultant
          </h2>
          <p className="font-body text-sm text-white/50 leading-relaxed mb-10">
            Describe your vision and our team will prepare a bespoke proposal — with
            detailed drawings, material samples, and a fixed quote — within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton message="Hi! I'd like help designing a custom mirror or glass piece." />
            <Link href="/contact"
              className="border border-white/25 text-white font-body text-[11px] tracking-[0.14em] uppercase px-8 py-3 rounded-sm hover:border-gold hover:text-gold transition-colors inline-flex items-center justify-center">
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Browse existing collections nudge */}
      <div className="bg-gold py-8 px-6 text-center">
        <p className="font-body text-xs text-charcoal/70 mb-3">
          Not sure where to start? Browse our existing collections for inspiration.
        </p>
        <Link href="/collections"
          className="font-body text-[11px] tracking-widest uppercase border border-charcoal/40 text-charcoal px-7 py-3 rounded-sm hover:bg-charcoal/5 transition-colors inline-block">
          View Collections
        </Link>
      </div>
    </>
  );
}
