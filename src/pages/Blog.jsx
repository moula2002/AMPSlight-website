import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of Smart Commercial Lighting",
      excerpt: "Explore how IoT and smart sensors are revolutionizing the way we illuminate large commercial spaces, driving unprecedented energy savings.",
      image: "/images/perfect_hero.png",
      date: "August 15, 2026",
      author: "Sarah Jenkins",
      category: "Commercial"
    },
    {
      title: "How to Choose the Perfect Color Temperature",
      excerpt: "Warm, neutral, or cool? A comprehensive guide to selecting the right color temperature (Kelvin) for every room in your residential project.",
      image: "/images/residential_lighting.png",
      date: "July 28, 2026",
      author: "David Chen",
      category: "Residential"
    },
    {
      title: "Maximizing ROI with Industrial LED Upgrades",
      excerpt: "Discover the financial and operational benefits of retrofitting your warehouse or factory with modern, high-bay LED lighting fixtures.",
      image: "/images/industrial_lighting.png",
      date: "July 10, 2026",
      author: "Michael Ross",
      category: "Industrial"
    },
    {
      title: "The Impact of Lighting on Employee Productivity",
      excerpt: "Scientific studies show that human-centric lighting designs can significantly boost focus, mood, and overall productivity in the workplace.",
      image: "/images/office_lighting.png",
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
            src="/images/about.png" 
            alt="Lighting Insights Blog" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 mt-16 max-w-4xl bg-black/20 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-white drop-shadow-xl opacity-0 animate-fade-in-up delay-100">
            News & <span className="text-gold">Insights</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-2xl leading-relaxed opacity-0 animate-fade-in-up delay-200 font-medium drop-shadow-md">
            Stay updated with the latest trends, expert guides, and industry news from the world of professional lighting.
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

      {/* Newsletter CTA */}
      <section data-aos="fade-up" className="container mx-auto px-6 py-24">
        <div className="bg-zinc-950 border border-white/10 p-12 text-center rounded-sm max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Get the latest lighting insights, product announcements, and design inspiration delivered directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-zinc-900 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
              required
            />
            <button type="submit" className="bg-gold text-black font-bold px-8 py-3 rounded-sm hover:bg-white transition-colors uppercase tracking-wider text-sm">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
