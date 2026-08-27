import { ArrowRight, Cable, Shield, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Cable className="w-8 h-8 text-gold mb-4" />,
      title: "Innovation",
      description: "Constantly pushing the boundaries of electrical transmission technology to provide advanced cabling solutions."
    },
    {
      icon: <Zap className="w-8 h-8 text-gold mb-4" />,
      title: "Efficiency",
      description: "Dedicated to highly conductive, energy-efficient solutions that minimize power loss and maximize performance."
    },
    {
      icon: <Shield className="w-8 h-8 text-gold mb-4" />,
      title: "Quality",
      description: "Uncompromising standards in manufacturing to ensure maximum safety, durability, and industrial reliability."
    }
  ];

  return (
    <div className="min-h-screen bg-black pb-12">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/images/wire.png" 
            alt="About AMPSCABLE" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 mt-16 max-w-4xl bg-black/20 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-white drop-shadow-xl opacity-0 animate-fade-in-up delay-100">
            Powering the <span className="text-gold">Future</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-2xl leading-relaxed opacity-0 animate-fade-in-up delay-200 font-medium drop-shadow-md">
            AMPSLITE has been at the forefront of the electrical infrastructure industry, delivering high-conductivity, durable wires and cables for commercial, industrial, and residential spaces. We don't just sell cables; we deliver reliable power.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section data-aos="fade-up" className="bg-zinc-900/50 py-24 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
              <p className="text-zinc-400 leading-relaxed">
                To revolutionize power transmission by providing innovative, highly conductive, and exceptionally safe wiring solutions that enhance operational efficiency and infrastructural reliability while meeting the highest global standards.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
              <p className="text-zinc-400 leading-relaxed">
                To be the global leader in electrical cable manufacturing, setting the industry benchmark for safety and driving the transition towards a fully powered, interconnected world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section data-aos="fade-up" className="container mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-zinc-900/30 border border-white/5 p-8 hover:border-gold/30 transition-all duration-300 rounded-sm group">
              <div className="transform group-hover:scale-110 transition-transform duration-300 origin-left">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gold transition-colors">{value.title}</h3>
              <p className="text-zinc-400">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section data-aos="fade-up" className="container mx-auto px-6 py-12">
        <div className="bg-gold/10 border border-gold/20 p-12 text-center rounded-sm">
          <h2 className="text-3xl font-bold mb-6">Ready to power your infrastructure?</h2>
          <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our team of experts to discuss your electrical needs and discover how AMPSLITE can provide reliable connectivity for your project.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-gold text-black font-bold px-8 py-4 hover:bg-white transition-colors rounded-sm uppercase tracking-wider text-sm">
            Contact Us Today <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
