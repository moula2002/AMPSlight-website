import { ArrowRight, CheckCircle2, LineChart, Wrench, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Solutions() {
  const services = [
    {
      title: "Consulting & Design",
      icon: <LineChart className="w-12 h-12 text-gold mb-6" />,
      description: "Our experts collaborate with architects and designers to create comprehensive lighting plans that meet aesthetic and functional requirements.",
      benefits: ["Photometric Layouts", "3D Renderings", "Energy Audits", "Code Compliance"]
    },
    {
      title: "Custom Installation",
      icon: <Wrench className="w-12 h-12 text-gold mb-6" />,
      description: "Professional deployment by certified technicians ensuring that every fixture is installed safely and optimally.",
      benefits: ["Project Management", "Site Surveys", "Turnkey Solutions", "Safety Protocols"]
    },
    {
      title: "Retrofitting & Upgrades",
      icon: <Settings className="w-12 h-12 text-gold mb-6" />,
      description: "Modernize your existing infrastructure with energy-efficient LED technology, drastically reducing operational costs.",
      benefits: ["ROI Analysis", "Rebate Assistance", "Minimal Disruption", "Smart Integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Tailored <span className="text-gold">Solutions</span></h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl">
          Beyond products, we offer end-to-end services to ensure your lighting project is a complete success from concept to completion.
        </p>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Content Half */}
              <div className="flex-1">
                {service.icon}
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-4">
                  {service.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-center gap-3 text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-gold" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Abstract Visual Half (Placeholder for actual imagery or graphics) */}
              <div className="flex-1 w-full">
                <div className="aspect-square max-h-[400px] w-full bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 border border-white/5 rounded-sm relative overflow-hidden flex items-center justify-center group">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                   <div className="w-32 h-32 border border-gold/20 rounded-full animate-[spin_10s_linear_infinite] flex items-center justify-center">
                     <div className="w-24 h-24 border border-gold/40 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
                   </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-zinc-900/50 py-24 mt-24 border-y border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Discovery', 'Design', 'Deployment', 'Support'].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 mx-auto bg-black border border-gold text-gold font-bold text-xl flex items-center justify-center rounded-full mb-6 z-10 relative">
                  0{index + 1}
                </div>
                {index < 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-white/10"></div>}
                <h3 className="text-xl font-semibold mb-2">{step}</h3>
                <p className="text-sm text-zinc-500">Comprehensive approach to ensure flawless execution.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to upgrade your infrastructure?</h2>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-black font-bold px-8 py-4 hover:bg-white transition-colors rounded-sm uppercase tracking-wider text-sm">
          Request a Consultation <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
