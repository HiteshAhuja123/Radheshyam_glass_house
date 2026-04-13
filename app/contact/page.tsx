import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { CONTACT_PHONE, CONTACT_EMAIL, INSTAGRAM_URL, GOOGLE_MAPS_URL } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <div className="bg-charcoal-dark py-20 px-6 text-center">
        <p className="font-body text-[10px] tracking-[0.22em] uppercase text-gold mb-3">Reach Us</p>
        <h1 className="font-sans text-5xl font-light text-white">Contact</h1>
      </div>
      <section className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16">
        {/* Contact details */}
        <div>
          <h2 className="font-sans text-3xl font-light text-charcoal mb-8">Get in Touch</h2>
          <div className="space-y-6">
            {[
              ["Phone", <a href={`tel:${CONTACT_PHONE}`} className="hover:text-gold transition-colors">{CONTACT_PHONE}</a>],
              ["Email", <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold transition-colors">{CONTACT_EMAIL}</a>],
              ["Location", <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Ambarnath, Maharashtra</a>],
              ["Instagram", <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">@radheshyamglasshouse</a>],
            ].map(([label, value]) => (
              <div key={String(label)}>
                <p className="font-body text-[10px] tracking-widest uppercase text-gold mb-1">{label}</p>
                <div className="font-body text-sm text-charcoal/70">{value}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <WhatsAppButton message="Hello! I'd like to discuss a project." />
          </div>
        </div>
        {/* Quick enquiry form — posts to API route */}
        <div>
          <h2 className="font-sans text-3xl font-light text-charcoal mb-8">Quick Enquiry</h2>
          <form action="/api/enquiry" method="POST" className="space-y-5">
            {[["Name", "name", "text", "Your name"], ["Phone", "phone", "tel", "+91 XXXXX XXXXX"], ["Email", "email", "email", "your@email.com"]].map(([label, name, type, placeholder]) => (
              <div key={String(name)}>
                <label className="font-body text-[10px] tracking-widest uppercase text-charcoal/50 block mb-1.5">{label}</label>
                <input type={String(type)} name={String(name)} placeholder={String(placeholder)} required={name !== "email"}
                  className="w-full border border-charcoal/20 rounded-sm px-4 py-3 font-body text-sm outline-none focus:border-gold transition-colors" />
              </div>
            ))}
            <div>
              <label className="font-body text-[10px] tracking-widest uppercase text-charcoal/50 block mb-1.5">Message</label>
              <textarea name="message" rows={4} placeholder="Tell us about your project..."
                className="w-full border border-charcoal/20 rounded-sm px-4 py-3 font-body text-sm outline-none focus:border-gold transition-colors resize-none" />
            </div>
            <button type="submit"
              className="w-full bg-charcoal text-white font-body text-[11px] font-medium tracking-widest uppercase py-3.5 rounded-sm hover:bg-charcoal-light transition-colors">
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
