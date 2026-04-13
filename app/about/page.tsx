export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-charcoal text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-amber-600 font-body text-sm tracking-widest uppercase">Since 1995</p>
          <h1 className="text-5xl md:text-6xl font-serif">Radheshyam Glass House</h1>
          <p className="text-gray-300 text-lg">Crafting Excellence in Glass Since 1995</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        {/* Our Story */}
        <section className="space-y-4">
          <h2 className="text-3xl font-serif text-charcoal">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in 1995 in Ulhasnagar, Radheshyam Glass House has been a beacon of quality and craftsmanship 
            for over three decades. What started as a small workshop has evolved into a trusted name in custom glass 
            and mirror solutions for homes and businesses across the region.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our journey is built on a simple principle: every project deserves attention to detail, premium materials, 
            and timeless design. Whether it's a backlit bathroom mirror, a custom glass partition, or a complete 
            interior glass solution, we bring expertise and passion to every creation.
          </p>
        </section>

        {/* What We Do */}
        <section className="space-y-4">
          <h2 className="text-3xl font-serif text-charcoal">What We Do</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We specialize in a wide range of glass and mirror solutions:
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Custom Mirrors & Wall Installations",
              "Illuminated & LED Backlit Mirrors",
              "Glass Partitions & Sliding Doors",
              "Decorative Glass Elements",
              "Safety & Toughened Glass Solutions",
              "Custom Sizing & Finishing"
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-amber-600 font-bold text-xl">✦</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Why Choose Us */}
        <section className="space-y-6">
          <h2 className="text-3xl font-serif text-charcoal">Why Choose Radheshyam?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "3+ Decades of Experience",
                description: "Nearly 30 years of mastering the craft of glass and mirror installations."
              },
              {
                title: "Premium Quality",
                description: "We use only the finest materials and techniques to ensure durability and beauty."
              },
              {
                title: "Custom Solutions",
                description: "Every project is tailored to your unique specifications and style preferences."
              }
            ].map((item) => (
              <div key={item.title} className="bg-amber-50 border border-amber-200 rounded-lg p-6 space-y-2">
                <h3 className="font-serif text-lg text-charcoal">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="space-y-4 bg-charcoal text-white rounded-lg p-8">
          <h2 className="text-3xl font-serif">Visit Us</h2>
          <div className="space-y-3">
            <p className="text-gray-200">
              <span className="text-amber-600 font-semibold">📍 Location:</span> Ulhasnagar
            </p>
            <p className="text-gray-200">
              <span className="text-amber-600 font-semibold">🏢 Established:</span> 1995
            </p>
            <p className="text-gray-200">
              We're open for consultations on custom projects, quotes, and installations. 
              Reach out to discuss your glass and mirror needs!
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center space-y-4">
          <p className="text-gray-600 italic">
            Ready to transform your space with premium glass solutions?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
