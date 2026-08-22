import { ArrowRight, Lightbulb, Shield, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-gold mb-4" />,
      title: "Innovation",
      description: "Constantly pushing the boundaries of lighting technology to provide the most advanced solutions."
    },
    {
      icon: <Zap className="w-8 h-8 text-gold mb-4" />,
      title: "Efficiency",
      description: "Dedicated to energy-saving solutions that reduce costs and environmental impact."
    },
    {
      icon: <Shield className="w-8 h-8 text-gold mb-4" />,
      title: "Quality",
      description: "Uncompromising standards in manufacturing to ensure durable and reliable products."
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/images/about_hero.png" 
            alt="About AMPSLITE" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 mt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Illuminating the <span className="text-gold">Future</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            AMPSLITE has been at the forefront of the lighting industry, delivering cutting-edge, energy-efficient solutions for commercial, industrial, and residential spaces. We don't just sell lights; we craft experiences.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-zinc-900/50 py-24 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
              <p className="text-zinc-400 leading-relaxed">
                To revolutionize the way spaces are illuminated by providing innovative, sustainable, and aesthetically pleasing lighting solutions that enhance productivity, safety, and well-being while minimizing environmental impact.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
              <p className="text-zinc-400 leading-relaxed">
                To be the global leader in smart lighting technologies, setting the standard for excellence and driving the transition towards a fully sustainable and interconnected illuminated world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-6 py-24">
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
      <section className="container mx-auto px-6 py-12">
        <div className="bg-gold/10 border border-gold/20 p-12 text-center rounded-sm">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your space?</h2>
          <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our team of experts to discuss your lighting needs and discover how AMPSLITE can brighten your project.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-gold text-black font-bold px-8 py-4 hover:bg-white transition-colors rounded-sm uppercase tracking-wider text-sm">
            Contact Us Today <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
