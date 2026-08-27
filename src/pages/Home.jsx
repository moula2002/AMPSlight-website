import { ArrowRight, Cable, Zap, Shield, Factory, CheckCircle2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api from '../api/axiosInstance'
import Banner from '../components/Banner'

export default function Home() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [projectsData, setProjectsData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, prodRes, projRes] = await Promise.all([
          api.get('/categories'),
          api.get('/products'),
          api.get('/projects').catch(() => ({ data: [] }))
        ]);
        setCategories(catRes.data.slice(0, 6)) // Show top 6 categories
        setProducts(prodRes.data.slice(0, 3)) // Show top 3 products
        if (projRes.data && projRes.data.length > 0) {
          setProjectsData(projRes.data.slice(0, 4));
        }
      } catch (err) {
        console.error('Failed to load data', err)
      }
    }
    fetchData()
  }, [])

  const processImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('data:') || url.startsWith('http')) return url;
    return `https://ampslight-server.onrender.com${url}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Banner />

      {/* Features Banner */}
      <section data-aos="fade-up" data-aos-offset="-50" className="bg-white border border-gray-100 py-6 relative z-20 -mt-12 mx-6 md:mx-12 rounded-sm shadow-2xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="flex items-start gap-4 md:px-6 pt-4 md:pt-0">
              <Cable className="text-gold shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-1 text-black">High Quality</h4>
                <p className="text-gray-500 text-xs font-medium leading-relaxed">Premium raw materials and strict quality control.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 md:px-6 pt-4 md:pt-0">
              <Shield className="text-gold shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-1 text-black">Safe & Reliable</h4>
                <p className="text-gray-500 text-xs font-medium leading-relaxed">Designed for dependable electrical performance and safety.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 md:px-6 pt-4 md:pt-0">
              <Factory className="text-gold shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-1 text-black">Wide Range</h4>
                <p className="text-gray-500 text-xs font-medium leading-relaxed">Residential, commercial and industrial cable solutions.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 md:px-6 pt-4 md:pt-0">
              <Zap className="text-gold shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-1 text-black">On-Time Delivery</h4>
                <p className="text-gray-500 text-xs font-medium leading-relaxed">Reliable supply and customer-focused service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction / About Snippet */}
      <section data-aos="fade-up" className="container mx-auto px-6 py-32 bg-white">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 relative group">
            <div className="aspect-[4/3] w-full bg-gray-100 border border-gray-200 p-4 relative overflow-hidden flex items-center justify-center">
              <img src="/images/wire.png" alt="AMPSCABLE Quality" className="w-full h-full object-cover shadow-sm group-hover:scale-105 transition-transform duration-700" />
            </div>
            {/* Decorative architectural accents */}
            <div className="absolute -bottom-6 -left-6 w-32 h-1 bg-gold z-10"></div>
            <div className="absolute -top-6 -right-6 w-1 h-32 bg-gold z-10"></div>

            <div className="absolute -bottom-10 -right-10 bg-white border border-gray-100 text-black p-8 rounded-sm shadow-2xl hidden lg:block z-20 group-hover:-translate-y-2 transition-transform duration-500">
              <p className="text-5xl font-bold mb-2 text-gold">15+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Years of<br />Excellence</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-gold uppercase tracking-widest text-xs font-bold mb-4">Who We Are</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black leading-tight">Connecting India with Quality & Trust</h2>
            <p className="text-gray-500 text-lg mb-6 leading-relaxed font-medium">
              For over a decade, AMPSLITE has been dedicated to manufacturing premium electrical wires and cables. We blend advanced engineering with robust materials to deliver high-conductivity solutions that are reliable, durable, and extremely safe.
            </p>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed font-medium">
              From sprawling industrial complexes to residential homes, our commitment to safety, technological excellence, and reliable supply ensures that every project is powered efficiently.
            </p>
            <Link to="/about" className="inline-flex items-center gap-4 bg-black text-white font-bold px-8 py-4 rounded-sm hover:bg-gold hover:text-black transition-colors uppercase tracking-widest text-sm">
              Read Our Story <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Partners Strip */}
      <section data-aos="fade-up" className="bg-[#0a0a0a] py-16 border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <p className="text-center text-zinc-500 text-sm uppercase tracking-widest font-bold mb-10">Trusted by Industry Leaders Worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {['NEXUS CORP', 'STARLIGHT HOTELS', 'APEX INDUSTRIES', 'GLOBAL RETAIL', 'HORIZON ESTATES'].map((partner, idx) => (
              <div key={idx} className="text-xl md:text-2xl font-bold font-serif text-white hover:text-gold transition-colors duration-300 cursor-default">
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
              <h3 className="text-[#C49B4B] uppercase tracking-[0.2em] text-[13px] font-bold mb-3 text-center md:text-left">Our Categories</h3>
              <h2 className="text-5xl md:text-6xl font-extrabold text-black text-center md:text-left tracking-tight">Explore Categories</h2>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 text-sm font-bold text-black hover:text-gold transition-colors uppercase tracking-wider">
              View All Categories <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} onClick={() => navigate(`/products?category=${cat._id}`)} className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group flex flex-col items-center text-center cursor-pointer transform hover:-translate-y-2">
                <div className="w-full aspect-square rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
                  <img src={processImageUrl(cat.imageUrl) || '/images/wire.png'} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-50/50 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="font-bold text-lg mb-2 text-black group-hover:text-gold transition-colors">{cat.name}</h4>
                <p className="text-zinc-500 text-xs mb-6 line-clamp-2 px-2 leading-relaxed">{cat.description || 'Explore our premium range of quality products tailored for your needs.'}</p>
                <div className="mt-auto w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <ArrowRight size={18} />
                </div>
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
            <h2 className="text-4xl font-bold mb-6 leading-tight">Electrical Solutions<br />for Every Application</h2>
            <p className="text-zinc-400 mb-10">
              From residential to industrial, we provide customized cabling solutions that guarantee power safety and efficiency.
            </p>

            <div className="space-y-4 mb-10">
              {['Residential Wiring', 'Commercial Electrical Systems', 'Industrial Power Distribution', 'Infrastructure Cabling', 'Network Cabling'].map((item, i) => (
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
            <div className="rounded-lg overflow-hidden border border-white/10 shadow-2xl relative z-10">
              <img
                src="/images/custom.png"
                alt="Modern Office Cabling"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gold/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/5 border border-gold/20 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section data-aos="fade-up" className="bg-white text-black pt-24 pb-12 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-[#C49B4B] uppercase tracking-[0.2em] text-[13px] font-bold mb-3 text-center md:text-left">Top Selling</h3>
              <h2 className="text-5xl md:text-6xl font-extrabold text-black text-center md:text-left tracking-tight">Explore Products</h2>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 text-[11px] font-bold text-black hover:text-gold transition-colors uppercase tracking-widest mt-2 md:mt-0">
              VIEW ALL PRODUCTS <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
            {products.map(product => (
              <Link
                to={`/product/${product._id}`}
                key={product._id}
                className="group border-r border-b border-gray-200 bg-white flex flex-col hover:bg-gray-50 transition-colors"
              >
                <div className="p-6 flex items-center justify-center relative min-h-[250px]">
                  <img
                    src={processImageUrl(product.imageUrl) || '/images/wire.png'}
                    alt={product.title}
                    className="max-w-full max-h-[180px] object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                  />
                  {product.category && (
                    <span className="absolute top-4 left-4 bg-black text-gold text-[10px] font-bold px-2 py-1 uppercase tracking-widest z-20 rounded-sm">
                      {product.category.name}
                    </span>
                  )}
                </div>
                <div className="p-6 border-t border-gray-200 flex-1 flex flex-col">
                  {product.sku && <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">{product.sku}</p>}
                  <h3 className="text-lg font-bold mb-2 text-black group-hover:text-gold transition-colors">{product.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                    {product.shortDescription || product.fullDescription || "Premium quality wire/cable designed for longevity and performance."}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-black font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    View Details <ArrowRight size={14} className="text-gold" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Insights Section */}
      <section data-aos="fade-up" className="bg-[#0a0a0a] py-24 border-t border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h3 className="text-gold uppercase tracking-widest text-xs font-semibold mb-2 text-center md:text-left">Latest Insights</h3>
              <h2 className="text-4xl font-bold text-center md:text-left text-white">News & Articles</h2>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-2 text-sm font-semibold hover:text-gold transition-colors uppercase tracking-wider text-white">
              Read All Articles <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/40 border border-white/5 rounded-sm overflow-hidden group hover:border-gold/30 transition-colors">
              <div className="h-48 overflow-hidden">
                <img src="/images/industry.png" alt="Commercial Cabling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <p className="text-gold text-xs font-bold uppercase tracking-wider mb-2">Commercial</p>
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-gold transition-colors">The Future of Smart Commercial Cabling</h4>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">Explore how advanced networking and power cables are revolutionizing the way we connect large commercial spaces.</p>
                <Link to="/blog" className="inline-flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider hover:text-gold transition-colors">Read More <ArrowRight size={14} /></Link>
              </div>
            </div>
            <div className="bg-zinc-900/40 border border-white/5 rounded-sm overflow-hidden group hover:border-gold/30 transition-colors">
              <div className="h-48 overflow-hidden">
                <img src="/images/about.png" alt="Cable Installation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <p className="text-gold text-xs font-bold uppercase tracking-wider mb-2">Safety</p>
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-gold transition-colors">Importance of Fire-Safe Wiring</h4>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">A comprehensive guide to selecting fire-resistant cables to ensure maximum safety in modern infrastructure.</p>
                <Link to="/blog" className="inline-flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider hover:text-gold transition-colors">Read More <ArrowRight size={14} /></Link>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-gold transition-colors uppercase tracking-wider text-white">
              Read All Articles <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section (White Background) */}
      <section data-aos="fade-up" className="bg-white text-black py-24">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-gold uppercase tracking-widest text-xs font-semibold mb-2">Our Projects</h3>
          <h2 className="text-4xl font-bold mb-12">Powering Infrastructure</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {(projectsData.length > 0 ? projectsData : [
              { title: 'Residential Project', img: '/images/resitential_area.png' },
              { title: 'Hospitality Project', img: '/images/second.png' },
              { title: 'Industrial Cabling', img: '/images/industrial.png' },
              { title: 'Commercial Wiring', img: '/images/commercial.png' }
            ]).map((proj, idx) => (
              <div key={idx} className="group relative rounded-lg overflow-hidden cursor-pointer shadow-lg">
                <div className="aspect-[4/3] w-full">
                  <img src={processImageUrl(proj.image || proj.imageUrl || proj.img || '/images/wire.png')} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
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

      {/* Testimonials Section */}
      <section data-aos="fade-up" className="bg-[#0a0a0a] py-32 border-t border-white/5 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-900 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h3 className="text-gold uppercase tracking-widest text-xs font-bold mb-4">Testimonials</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                text: "The complete wiring solution significantly improved the electrical efficiency, reliability, and safety of our facility.",
                author: "Sarah Jenkins",
                role: "Facility Manager, Nexus Tech"
              },
              {
                text: "Unparalleled quality and rapid delivery. The heavy-duty power cabling provided reliable electrical infrastructure for our hotel.",
                author: "Michael Chang",
                role: "Director, Grand Horizon Hotels"
              },
              {
                text: "Professional from start to finish. The industrial armoured cables they supplied are robust, safe, and exceeded our expectations.",
                author: "David Roberts",
                role: "Operations Head, Apex Mfg"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-zinc-900/50 p-10 rounded-sm border border-white/10 text-left relative shadow-2xl hover:-translate-y-2 transition-transform duration-500 group">
                <span className="text-zinc-800 text-8xl absolute -top-4 -left-2 font-serif z-0 group-hover:text-gold/20 transition-colors">"</span>
                <p className="text-zinc-300 font-medium italic mb-8 relative z-10 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-zinc-400 font-bold border border-white/10">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{testimonial.author}</h4>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1 font-semibold">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section data-aos="fade-up" className="bg-white py-16 border-t border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200">
            {[
              { num: '2500+', label: 'Projects Completed' },
              { num: '1800+', label: 'Happy Clients' },
              { num: '10+', label: 'Years Experience' },
              { num: '1000+', label: 'KM CABLES SUPPLIED' }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <h3 className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.num}</h3>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
