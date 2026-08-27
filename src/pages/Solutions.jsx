import { ArrowRight, CheckCircle2, LineChart, Wrench, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Solutions() {
  const services = [
    {
      title: "Consulting & Design",
      icon: <LineChart className="w-10 h-10 text-gold mb-6" />,
      description: "Our experts collaborate with electrical engineers and designers to create comprehensive wiring and cabling plans that meet stringent safety and functional requirements.",
      benefits: ["Photometric Layouts", "3D Renderings", "Energy Audits", "Code Compliance"],
      image: "/images/consult.png"
    },
    {
      title: "Custom Installation",
      icon: <Wrench className="w-10 h-10 text-gold mb-6" />,
      description: "Professional deployment by certified technicians ensuring that every cable and conduit is installed safely and optimally.",
      benefits: ["Project Management", "Site Surveys", "Turnkey Solutions", "Safety Protocols"],
      image: "/images/custom.png"
    },
    {
      title: "Wiring Upgrades & Safety Maintenance",
      icon: <Settings className="w-10 h-10 text-gold mb-6" />,
      description: "Upgrade your existing electrical infrastructure for improved reliability, performance, and maximum safety compliance.",
      benefits: ["Safety Audits", "Load Analysis", "Minimal Disruption", "Smart Integration"],
      image: "/images/retrofit.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black pb-12 font-sans">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center border-b border-white/10 mb-16">
        <div className="absolute inset-0 overflow-hidden bg-black">
          <img 
            src="/images/about.png" 
            alt="Tailored Solutions" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 mt-16 max-w-4xl bg-black/20 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-white drop-shadow-xl opacity-0 animate-fade-in-up delay-100">
            Tailored <span className="text-gold">Solutions</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-2xl leading-relaxed opacity-0 animate-fade-in-up delay-200 font-medium drop-shadow-md">
            Beyond products, we offer end-to-end services to ensure your electrical infrastructure project is a complete success from concept to completion.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <div className="flex flex-col">
        {services.map((service, index) => (
          <section key={index} data-aos="fade-up" className={`py-24 ${index % 2 === 0 ? 'bg-white text-black' : 'bg-[#0a0a0a] text-white border-y border-white/5'}`}>
            <div className="container mx-auto px-6">
              <div className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Content Half */}
                <div className="flex-1">
                  {service.icon}
                  <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${index % 2 === 0 ? 'text-black' : 'text-white'}`}>{service.title}</h2>
                  <p className={`text-lg mb-8 leading-relaxed ${index % 2 === 0 ? 'text-gray-500' : 'text-zinc-400'}`}>
                    {service.description}
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className={`flex items-center gap-3 font-semibold text-sm uppercase tracking-wider ${index % 2 === 0 ? 'text-gray-700' : 'text-zinc-300'}`}>
                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Premium Image Half */}
                <div className="flex-1 w-full relative group">
                  <div className={`aspect-video lg:aspect-square max-h-[500px] w-full p-4 relative overflow-hidden flex items-center justify-center ${index % 2 === 0 ? 'bg-gray-100 border border-gray-200' : 'bg-zinc-900 border border-white/10'}`}>
                     <img 
                       src={service.image} 
                       alt={service.title}
                       className="w-full h-full object-cover shadow-sm group-hover:scale-105 transition-transform duration-700"
                     />
                  </div>
                  {/* Decorative architectural accents */}
                  <div className={`absolute -bottom-6 w-32 h-1 bg-gold z-10 ${index % 2 !== 0 ? '-left-6' : '-right-6'}`}></div>
                  <div className={`absolute -top-6 w-1 h-32 bg-gold z-10 ${index % 2 !== 0 ? '-left-6' : '-right-6'}`}></div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Process Section */}
      <section data-aos="fade-up" className="bg-[#0a0a0a] py-24 mt-32 border-y border-white/5">
        <div className="container mx-auto px-6">
          <h3 className="text-gold uppercase tracking-widest text-xs font-semibold mb-2 text-center">Our Methodology</h3>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">Our Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Discovery', 'Design', 'Deployment', 'Support'].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 mx-auto bg-black border-2 border-gold text-gold font-bold text-2xl flex items-center justify-center rounded-full mb-6 z-10 relative shadow-lg">
                  0{index + 1}
                </div>
                {index < 3 && <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-white/10"></div>}
                <h3 className="text-xl font-bold mb-2 text-white">{step}</h3>
                <p className="text-sm text-zinc-400 font-medium">Comprehensive approach to ensure flawless execution.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section data-aos="fade-up" className="container mx-auto px-6 py-32 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black tracking-tight">Ready to upgrade your infrastructure?</h2>
        <Link to="/contact" className="inline-flex items-center gap-4 bg-black text-white font-bold px-10 py-5 hover:bg-gold hover:text-black transition-colors uppercase tracking-widest text-sm">
          Request a Consultation <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
