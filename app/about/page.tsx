import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { BUSINESS_NAME, ESTABLISHED, OWNERS, WORKSHOP_ADDRESS, SHOWROOM_ADDRESS, TIMINGS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

const services = [
  "Custom Mirrors & Wall Installations",
  "Illuminated & LED Backlit Mirrors",
  "Glass Partitions & Sliding Doors",
  "Decorative Glass Elements",
  "Safety & Toughened Glass Solutions",
  "Custom Sizing & Finishing",
];

const pillars = [
  {
    title: "31+ Years of Mastery",
    body: "From a single workshop in Ulhasnagar to one of the region's most trusted names — built over three generations of uncompromising craft.",
  },
  {
    title: "Premium Materials Only",
    body: "Every piece uses rigorously sourced glass and hardware. We refuse shortcuts because your installation is meant to last decades.",
  },
  {
    title: "Fully Bespoke",
    body: "No catalogue, no compromises. Every dimension, finish, and frame is tailored to your exact vision and space.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-charcoal-dark py-24 px-6 text-center">
        <p className="font-body text-[10px] tracking-[0.22em] uppercase text-gold mb-3 hero-line-1">
          Est. {ESTABLISHED} · Ulhasnagar
        </p>
        <h1 className="font-sans text-5xl md:text-6xl font-light text-white leading-[1.15] hero-line-2">
          Three Generations of<br />
          <em className="text-gold italic">Glass Mastery</em>
        </h1>
        <p className="font-body text-sm text-white/50 mt-5 max-w-md mx-auto hero-line-3">
          {BUSINESS_NAME} has been crafting premium mirrors, partitions, and bespoke glass
          installations for India's finest homes, hotels, and offices since {ESTABLISHED}.
        </p>
      </div>

      {/* Stats bar */}
      <div className="bg-gold py-6 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-charcoal text-center">
          {[["31+", "Years of legacy"], ["3rd", "Generation craftsmen"], ["50,000+", "Projects delivered"], ["100%", "Custom made"]].map(([num, label]) => (
            <div key={label}>
              <p className="font-sans text-3xl font-medium">{num}</p>
              <p className="font-body text-[10px] tracking-widest uppercase opacity-70 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="font-body text-[10px] tracking-[0.22em] uppercase text-gold mb-3">Our Story</p>
            <h2 className="font-sans text-4xl font-light text-charcoal mb-5">
              Where Every Reflection Tells a Story
            </h2>
            <p className="font-body text-sm text-charcoal/65 leading-relaxed mb-4">
              Founded in {ESTABLISHED} in Ulhasnagar, {BUSINESS_NAME} began as a small
              workshop driven by a passion for precision and beauty. Over three decades,
              what started as a single family's craft has become a legacy — trusted by
              architects, interior designers, hotels, and homeowners across the region.
            </p>
            <p className="font-body text-sm text-charcoal/65 leading-relaxed">
              Today, led by <strong className="text-charcoal font-medium">{OWNERS}</strong>,
              we bring that same founding obsession with quality to every piece we create.
              No two installations are alike — because no two spaces are.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="bg-charcoal rounded p-8 text-white/70 space-y-5">
              <p className="font-body text-[10px] tracking-widest uppercase text-gold mb-2">What We Craft</p>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s} className="flex items-start gap-3 font-body text-sm">
                    <span className="text-gold mt-0.5 text-xs">✦</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-charcoal py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="font-body text-[10px] tracking-[0.22em] uppercase text-gold mb-3">Why Choose Us</p>
            <h2 className="font-sans text-4xl font-light text-white mb-12">
              The Radheshyam Difference
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 120}>
                <div className="border border-gold/20 rounded p-6 h-full">
                  <div className="w-8 h-px bg-gold mb-5" />
                  <h3 className="font-sans text-xl text-white mb-3">{p.title}</h3>
                  <p className="font-body text-xs text-white/55 leading-relaxed">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <ScrollReveal>
            <p className="font-body text-[10px] tracking-[0.22em] uppercase text-gold mb-3">Visit Us</p>
            <h2 className="font-sans text-4xl font-light text-charcoal mb-8">Find Our Spaces</h2>
            <div className="space-y-6">
              <div>
                <p className="font-body text-[10px] tracking-widest uppercase text-gold/80 mb-1">Workshop</p>
                <p className="font-body text-sm text-charcoal/70">{WORKSHOP_ADDRESS}</p>
              </div>
              <div>
                <p className="font-body text-[10px] tracking-widest uppercase text-gold/80 mb-1">Showroom</p>
                <p className="font-body text-sm text-charcoal/70">{SHOWROOM_ADDRESS}</p>
              </div>
              <div>
                <p className="font-body text-[10px] tracking-widest uppercase text-gold/80 mb-1">Timings</p>
                <p className="font-body text-sm text-charcoal/70">{TIMINGS}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="bg-charcoal rounded p-8 h-full flex flex-col justify-between">
              <div>
                <p className="font-body text-[10px] tracking-[0.22em] uppercase text-gold mb-3">Ready to Create?</p>
                <p className="font-sans text-2xl font-light text-white mb-3">
                  Let's bring your vision to life
                </p>
                <p className="font-body text-xs text-white/50 leading-relaxed">
                  Whether it's a single statement mirror or a full interior glass concept —
                  our consultants will guide you from idea to installation.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap mt-8">
                <Link href="/contact"
                  className="bg-gold text-charcoal font-body text-[11px] font-medium tracking-[0.14em] uppercase px-6 py-3 rounded-sm hover:bg-gold-light transition-colors">
                  Get in Touch
                </Link>
                <Link href="/collections"
                  className="border border-white/25 text-white font-body text-[11px] tracking-[0.14em] uppercase px-6 py-3 rounded-sm hover:border-gold hover:text-gold transition-colors">
                  View Collections
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
