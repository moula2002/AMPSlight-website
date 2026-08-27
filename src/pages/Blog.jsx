import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of Smart Commercial Cabling",
      excerpt: "Explore how advanced networking and power cables are revolutionizing the way we connect large commercial spaces, driving unprecedented efficiency.",
      image: "/images/resitential_area.png",
      date: "August 15, 2026",
      author: "Sarah Jenkins",
      category: "Commercial"
    },
    {
      title: "Importance of Fire-Safe Wiring",
      excerpt: "A comprehensive guide to selecting fire-resistant cables to ensure maximum safety and compliance in modern infrastructure.",
      image: "/images/residential_lighting.png",
      date: "July 28, 2026",
      author: "David Chen",
      category: "Safety"
    },
    {
      title: "Maximizing ROI with Industrial Cable Upgrades",
      excerpt: "Discover the financial and operational benefits of retrofitting your warehouse or factory with modern, high-capacity power cables.",
      image: "/images/industry.png",
      date: "July 10, 2026",
      author: "Michael Ross",
      category: "Industrial"
    },
    {
      title: "The Impact of Quality Wiring on Power Stability",
      excerpt: "Scientific studies show that premium electrical infrastructure designs can significantly boost equipment longevity and overall workplace productivity.",
      image: "/images/wire.png",
      date: "June 22, 2026",
      author: "Elena Rodriguez",
      category: "Insights"
    }
  ];

  return (
    <div className="min-h-screen bg-black pb-12">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center border-b border-white/10 mb-12">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/images/wire.png" 
            alt="Electrical Insights Blog" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 mt-16 max-w-4xl bg-black/20 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-white drop-shadow-xl opacity-0 animate-fade-in-up delay-100">
            News & <span className="text-gold">Insights</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-2xl leading-relaxed opacity-0 animate-fade-in-up delay-200 font-medium drop-shadow-md">
            Stay updated with the latest trends, expert guides, and industry news from the world of professional electrical infrastructure.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section data-aos="fade-up" className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-zinc-900/40 border border-white/5 rounded-sm overflow-hidden group hover:border-gold/30 transition-colors">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-gold text-black text-xs font-bold px-3 py-1 uppercase tracking-wider z-10 rounded-sm">
                  {post.category}
                </div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-6 text-zinc-500 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    {post.author}
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors">{post.title}</h2>
                <p className="text-zinc-400 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link to="#" className="inline-flex items-center gap-2 text-gold font-semibold text-sm uppercase tracking-wider hover:text-white transition-colors">
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
