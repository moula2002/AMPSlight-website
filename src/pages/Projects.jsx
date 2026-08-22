import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    {
      title: "Nexus Tech Hub",
      category: "Commercial",
      location: "Silicon Valley, CA",
      description: "Complete smart lighting overhaul for a 50,000 sq ft office space.",
      image: "/images/office_lighting.png"
    },
    {
      title: "Grand Horizon Hotel",
      category: "Hospitality",
      location: "Miami, FL",
      description: "Architectural facade and ambient interior lighting design.",
      image: "/images/hero_bg.png"
    },
    {
      title: "Apex Manufacturing Plant",
      category: "Industrial",
      location: "Detroit, MI",
      description: "High-bay LED retrofitting reducing energy consumption by 45%.",
      image: "/images/industrial_lighting.png"
    },
    {
      title: "Starlight Residences",
      category: "Residential",
      location: "Austin, TX",
      description: "Luxury apartment complex with integrated circadian rhythm lighting.",
      image: "/images/residential_lighting.png"
    },
    {
      title: "Central City Plaza",
      category: "Public Space",
      location: "Chicago, IL",
      description: "Outdoor landscape and pathway illumination for public safety.",
      image: "/images/office_lighting.png"
    },
    {
      title: "Aurora Gallery",
      category: "Retail / Art",
      location: "New York, NY",
      description: "Precision track lighting to enhance color rendering of artworks.",
      image: "/images/residential_lighting.png"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Featured <span className="text-gold">Projects</span></h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl">
          Explore our portfolio of successful installations across various industries, showcasing our commitment to excellence and innovation.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-zinc-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <span className="text-zinc-400 text-sm">{project.location}</span>
                    <button className="bg-white/10 p-2 rounded-full hover:bg-gold hover:text-black transition-colors">
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-zinc-400 mb-8">
            Let's collaborate to create a stunning lighting solution tailored to your specific requirements.
          </p>
          <Link to="/contact" className="inline-block bg-gold text-black font-bold px-8 py-4 hover:bg-white transition-colors rounded-sm uppercase tracking-wider text-sm">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
