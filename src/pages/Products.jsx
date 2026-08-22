import { ArrowRight, Box, Cpu, Factory, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  const categories = [
    {
      title: "Commercial Lighting",
      icon: <Box className="w-10 h-10 text-gold mb-6" />,
      description: "High-performance fixtures designed for offices, retail spaces, and public buildings. Combining aesthetics with optimal lumen output.",
      features: ["Panel Lights", "Downlights", "Track Lighting", "Linear Pendants"]
    },
    {
      title: "Industrial Lighting",
      icon: <Factory className="w-10 h-10 text-gold mb-6" />,
      description: "Rugged, durable lighting solutions built to withstand harsh environments while maximizing safety and visibility.",
      features: ["High Bay Lights", "Flood Lights", "Vapor Tight Fixtures", "Explosion Proof"]
    },
    {
      title: "Residential Lighting",
      icon: <Home className="w-10 h-10 text-gold mb-6" />,
      description: "Elegant and warm lighting options to enhance the comfort and beauty of living spaces.",
      features: ["Chandeliers", "Wall Sconces", "Recessed Lighting", "Outdoor Landscape"]
    },
    {
      title: "Smart Lighting",
      icon: <Cpu className="w-10 h-10 text-gold mb-6" />,
      description: "Intelligent systems with IoT integration for automated control, energy tracking, and adaptive illumination.",
      features: ["Sensors", "Dimming Controls", "Smart Bulbs", "Centralized Hubs"]
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/images/products_hero.png" 
            alt="Our Products" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 mt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Our <span className="text-gold">Products</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl">
            Discover our comprehensive range of premium lighting fixtures engineered for efficiency, durability, and superior design.
          </p>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-zinc-900/30 border border-white/5 p-8 md:p-12 hover:border-gold/30 transition-colors duration-300 rounded-sm group relative overflow-hidden">
              {/* Subtle background glow effect on hover */}
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                {category.icon}
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{category.title}</h2>
                <p className="text-zinc-400 mb-8 min-h-[80px]">
                  {category.description}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-widest mb-4">Key Lines</h3>
                  <ul className="grid grid-cols-2 gap-3 text-zinc-500 text-sm">
                    {category.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="flex items-center gap-2 text-gold font-semibold uppercase text-xs tracking-widest group-hover:text-white transition-colors">
                  Explore Range <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between bg-zinc-900/50 border border-white/5 p-12 rounded-sm">
          <div className="mb-8 md:mb-0 md:mr-12">
            <h2 className="text-3xl font-bold mb-4">Need a custom product catalog?</h2>
            <p className="text-zinc-400">Download our complete specifications guide or speak with a specialist.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/contact" className="bg-gold text-black font-bold px-8 py-4 hover:bg-white transition-colors rounded-sm uppercase tracking-wider text-sm whitespace-nowrap">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
