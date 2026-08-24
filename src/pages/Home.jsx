import { ArrowRight, Lightbulb, Zap, Clock, Headphones, CheckCircle2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api from '../api/axiosInstance'

export default function Home() {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/categories')
        setCategories(response.data.slice(0, 6)) // Show top 6 categories
      } catch (err) {
        console.error('Failed to load categories', err)
      }
    }
    fetchCategories()
  }, [])

  const processImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('data:') || url.startsWith('http')) return url;
    return `https://ampslight-server.onrender.com${url}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-zinc-900 border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden">
          {/* Using a placeholder architectural image for the modern house */}
          <img 
            src="/images/perfect_hero.png" 
            alt="Modern Lighting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h3 className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 flex items-center gap-2 opacity-0 animate-fade-in-up delay-100">
              <span className="w-8 h-[1px] bg-gold"></span>
              Brighter Spaces, Better Living
            </h3>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-up delay-200">
              Light That <br /> Inspires
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-lg opacity-0 animate-fade-in-up delay-300">
              AMPSLITE delivers innovative, energy-efficient lighting solutions for every space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up delay-400">
              <Link to="/products" className="bg-gold text-black font-semibold px-8 py-3 rounded-sm flex items-center justify-center gap-2 hover:bg-gold-hover transition-colors">
                EXPLORE PRODUCTS <ArrowRight size={18} />
              </Link>
              <Link to="/solutions" className="border border-white/30 text-white font-semibold px-8 py-3 rounded-sm flex items-center justify-center gap-2 hover:border-gold hover:text-gold transition-colors">
                OUR SOLUTIONS <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section data-aos="fade-up" data-aos-offset="-50" className="bg-zinc-950 border-b border-white/5 py-12 relative z-20 -mt-8 mx-6 rounded-lg shadow-2xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <Lightbulb className="text-gold shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Innovative Lighting</h4>
                <p className="text-zinc-500 text-xs">Smart & modern lighting solutions.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Zap className="text-gold shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Energy Efficient</h4>
                <p className="text-zinc-500 text-xs">Sustainable products for a greener tomorrow.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-gold shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Long Lasting</h4>
                <p className="text-zinc-500 text-xs">Built to last with premium quality.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Headphones className="text-gold shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Expert Support</h4>
                <p className="text-zinc-500 text-xs">We're here to help with all your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction / About Snippet */}
      <section data-aos="fade-up" className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 relative">
             <div className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
               <img src="/images/residential_lighting.png" alt="AMPSLITE Quality" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-8 -right-8 bg-gold text-black p-8 rounded-sm shadow-xl hidden lg:block">
               <p className="text-4xl font-bold mb-1">15+</p>
               <p className="text-xs font-semibold uppercase tracking-wider">Years of Excellence</p>
             </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-gold uppercase tracking-widest text-xs font-semibold mb-2">Who We Are</h3>
            <h2 className="text-4xl font-bold mb-6">Pioneering the Future of Illumination</h2>
            <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
              For over a decade, AMPSLITE has been dedicated to transforming ordinary spaces into extraordinary experiences through the power of light. We blend cutting-edge technology with elegant design to deliver lighting solutions that are as beautiful as they are highly efficient.
            </p>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              From sprawling industrial complexes to luxury residential homes, our commitment to quality, sustainability, and unparalleled customer service ensures that every project shines brilliantly.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-3 rounded-sm hover:border-gold hover:text-gold transition-colors">
              READ OUR STORY <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Partners Strip */}
      <section data-aos="fade-up" className="bg-zinc-950 py-12 border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <p className="text-center text-zinc-500 text-sm uppercase tracking-widest font-semibold mb-8">Trusted by Industry Leaders Worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
            {['NEXUS CORP', 'STARLIGHT HOTELS', 'APEX INDUSTRIES', 'GLOBAL RETAIL', 'HORIZON ESTATES'].map((partner, idx) => (
              <div key={idx} className="text-xl md:text-2xl font-bold font-serif text-white hover:text-gold hover:grayscale-0 transition-all duration-300 cursor-default">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories (White Background) */}
      <section data-aos="fade-up" className="bg-white text-black py-24">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-gold uppercase tracking-widest text-xs font-semibold mb-2 text-center md:text-left">Our Products</h3>
              <h2 className="text-4xl font-bold text-center md:text-left">Designed for Every Need</h2>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 text-sm font-semibold hover:text-gold transition-colors uppercase tracking-wider">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} onClick={() => navigate(`/products?category=${cat._id}`)} className="bg-zinc-50 border border-zinc-100 rounded-lg p-6 hover:shadow-xl transition-all group flex flex-col items-center text-center cursor-pointer">
                <div className="w-24 h-24 bg-white rounded-full mb-6 flex items-center justify-center shadow-inner overflow-hidden border border-zinc-100 p-2">
                  <img src={processImageUrl(cat.imageUrl) || '/images/hero_bg.png'} alt={cat.name} className="w-full h-full object-contain rounded-full group-hover:scale-110 transition-transform mix-blend-multiply" />
                </div>
                <h4 className="font-bold text-sm mb-2 text-black">{cat.name}</h4>
                <p className="text-zinc-500 text-[10px] mb-4 line-clamp-2">{cat.description || 'Premium lighting solution'}</p>
                <ArrowRight size={16} className="text-zinc-300 group-hover:text-gold transition-colors mt-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section (Dark Background) */}
      <section data-aos="fade-up" className="bg-[#0a0a0a] py-24 border-t border-b border-white/5">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h3 className="text-gold uppercase tracking-widest text-xs font-semibold mb-2">Our Solutions</h3>
            <h2 className="text-4xl font-bold mb-6 leading-tight">Lighting Solutions<br/>for Every Application</h2>
            <p className="text-zinc-400 mb-10">
              From residential to industrial, we provide customized lighting solutions that create impact and efficiency.
            </p>
            
            <div className="space-y-4 mb-10">
              {['Residential Lighting', 'Commercial Lighting', 'Industrial Lighting', 'Outdoor Lighting', 'Smart Lighting Solutions'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold" size={18} />
                  <span className="font-medium text-zinc-300">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/solutions" className="bg-gold text-black font-semibold px-8 py-3 rounded-sm inline-flex items-center gap-2 hover:bg-gold-hover transition-colors">
              EXPLORE SOLUTIONS <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="aspect-video rounded-lg overflow-hidden border border-white/10 shadow-2xl relative z-10">
              <img 
                src="/images/office_lighting.png" 
                alt="Modern Office Lighting" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gold/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/5 border border-gold/20 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Projects Section (White Background) */}
      <section data-aos="fade-up" className="bg-white text-black py-24">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-gold uppercase tracking-widest text-xs font-semibold mb-2">Our Projects</h3>
          <h2 className="text-4xl font-bold mb-12">Lighting Up Spaces</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'Residential Project', img: '/images/residential_lighting.png' },
              { title: 'Hospitality Project', img: '/images/hero_bg.png' },
              { title: 'Industrial Project', img: '/images/industrial_lighting.png' },
              { title: 'Commercial Project', img: '/images/office_lighting.png' }
            ].map((proj, idx) => (
              <div key={idx} className="group relative rounded-lg overflow-hidden cursor-pointer shadow-lg">
                <div className="aspect-[4/3] w-full">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                  <h4 className="text-white font-bold text-lg">{proj.title}</h4>
                  <div className="w-0 h-[2px] bg-gold mt-2 group-hover:w-12 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
          
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-gold transition-colors uppercase tracking-wider">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Blog/Insights Section */}
      <section data-aos="fade-up" className="bg-[#0a0a0a] py-24 border-t border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h3 className="text-gold uppercase tracking-widest text-xs font-semibold mb-2 text-center md:text-left">Latest Insights</h3>
              <h2 className="text-4xl font-bold text-center md:text-left">News & Articles</h2>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-2 text-sm font-semibold hover:text-gold transition-colors uppercase tracking-wider">
              Read All Articles <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/40 border border-white/5 rounded-sm overflow-hidden group hover:border-gold/30 transition-colors">
              <div className="h-48 overflow-hidden">
                <img src="/images/office_lighting.png" alt="Smart Lighting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <p className="text-gold text-xs font-bold uppercase tracking-wider mb-2">Commercial</p>
                <h4 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">The Future of Smart Commercial Lighting</h4>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">Explore how IoT and smart sensors are revolutionizing the way we illuminate large commercial spaces, driving unprecedented energy savings.</p>
                <Link to="/blog" className="inline-flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider hover:text-gold transition-colors">Read More <ArrowRight size={14} /></Link>
              </div>
            </div>
            <div className="bg-zinc-900/40 border border-white/5 rounded-sm overflow-hidden group hover:border-gold/30 transition-colors">
              <div className="h-48 overflow-hidden">
                <img src="/images/residential_lighting.png" alt="Color Temperature" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <p className="text-gold text-xs font-bold uppercase tracking-wider mb-2">Residential</p>
                <h4 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">How to Choose the Perfect Color Temperature</h4>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">Warm, neutral, or cool? A comprehensive guide to selecting the right color temperature for every room in your home.</p>
                <Link to="/blog" className="inline-flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider hover:text-gold transition-colors">Read More <ArrowRight size={14} /></Link>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-gold transition-colors uppercase tracking-wider">
              Read All Articles <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section data-aos="fade-up" className="bg-zinc-900 py-24 border-t border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-gold uppercase tracking-widest text-xs font-semibold mb-2">Testimonials</h3>
          <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                text: "The lighting overhaul provided by AMPSLITE completely transformed our office space. Productivity is up and energy costs are down.",
                author: "Sarah Jenkins",
                role: "Facility Manager, Nexus Tech"
              },
              {
                text: "Unparalleled quality and stunning design. The architectural lighting for our hotel facade has become a landmark in the city.",
                author: "Michael Chang",
                role: "Director, Grand Horizon Hotels"
              },
              {
                text: "Professional from start to finish. The industrial high-bay LEDs they installed are robust, reliable, and exceeded our expectations.",
                author: "David Roberts",
                role: "Operations Head, Apex Mfg"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-black/50 p-8 rounded-lg border border-white/10 text-left relative">
                <span className="text-gold text-6xl absolute top-4 right-6 opacity-20 font-serif">"</span>
                <p className="text-zinc-300 italic mb-6 relative z-10">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-bold text-white">{testimonial.author}</h4>
                  <p className="text-zinc-500 text-xs uppercase tracking-wider mt-1">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section data-aos="fade-up" className="bg-zinc-950 py-16 border-t border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {[
              { num: '2500+', label: 'Projects Completed' },
              { num: '1800+', label: 'Happy Clients' },
              { num: '10+', label: 'Years Experience' },
              { num: '25+', label: 'Countries Served' }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <h3 className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.num}</h3>
                <p className="text-zinc-400 text-xs uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
