import Link from "next/link";
import { BUSINESS_NAME, CONTACT_PHONE, CONTACT_EMAIL, INSTAGRAM_URL, GOOGLE_MAPS_URL, WHATSAPP_NUMBER, TIMINGS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <footer className="bg-charcoal-dark border-t border-gold/15 text-white/50">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <p className="font-sans text-gold text-sm tracking-widest uppercase mb-2">{BUSINESS_NAME}</p>
          <p className="font-body text-xs leading-relaxed">
            Three generations of artisan glass craftsmanship. Mirrors, partitions, and bespoke glass installations for India's finest interiors.
          </p>
        </div>
        {/* Navigation */}
        <div>
          <p className="font-body text-[10px] tracking-widest uppercase text-gold/70 mb-4">Explore</p>
          <ul className="flex flex-col gap-2.5">
            {[["Collections", "/collections"],["Gallery", "/gallery"],["Customize", "/customize"],["About Us", "/about"],["Contact", "/contact"]].map(([label, href]) => (
              <li key={href}><Link href={href} className="font-body text-xs hover:text-gold transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div>
          <p className="font-body text-[10px] tracking-widest uppercase text-gold/70 mb-4">Contact</p>
          <ul className="flex flex-col gap-2.5 font-body text-xs">
            <li><a href={`tel:${CONTACT_PHONE}`} className="hover:text-gold transition-colors">{CONTACT_PHONE}</a></li>
            <li><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold transition-colors">{CONTACT_EMAIL}</a></li>
            <li><a href={waUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">WhatsApp</a></li>
            <li><a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Find us on Maps</a></li>
            <li className="text-white/70">{TIMINGS}</li>
          </ul>
        </div>
        {/* Social */}
        <div>
          <p className="font-body text-[10px] tracking-widest uppercase text-gold/70 mb-4">Follow</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-xs hover:text-gold transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @radheshyamglasshouse
          </a>
        </div>
      </div>
      <div className="border-t border-gold/10 px-6 py-5 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-2 font-body text-[11px]">
        <p>© {year} {BUSINESS_NAME}. All rights reserved.</p>
        <p>Premium mirrors and glass solutions since 1979.</p>
      </div>
    </footer>
  );
}
