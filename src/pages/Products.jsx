import { ArrowRight, Box, Cpu, Factory, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../api/axiosInstance';

const getIcon = (title) => {
  if (!title) return <Box className="w-10 h-10 text-gold mb-6" />;
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('commercial')) return <Box className="w-10 h-10 text-gold mb-6" />;
  if (lowerTitle.includes('industrial')) return <Factory className="w-10 h-10 text-gold mb-6" />;
  if (lowerTitle.includes('residential')) return <Home className="w-10 h-10 text-gold mb-6" />;
  if (lowerTitle.includes('smart')) return <Cpu className="w-10 h-10 text-gold mb-6" />;
  return <Box className="w-10 h-10 text-gold mb-6" />;
};

export default function Products() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/categories/with-products');
        setCategories(response.data);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error('Error fetching categories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen bg-black pb-12">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/images/industrial_lighting.png" 
            alt="Our Products" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 mt-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight opacity-0 animate-fade-in-up delay-100">Our <span className="text-gold">Products</span></h1>
          <p className="text-zinc-200 max-w-2xl mx-auto text-lg md:text-xl opacity-0 animate-fade-in-up delay-200">
            Explore our comprehensive range of lighting fixtures designed for performance, longevity, and aesthetic appeal.
          </p>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section data-aos="fade-up" className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {loading ? (
            <div className="col-span-2 text-center text-white py-12">Loading products...</div>
          ) : error ? (
            <div className="col-span-2 text-center text-red-500 py-12">{error}</div>
          ) : (
            categories.map((category) => (
              <div key={category._id} className="bg-zinc-900/30 border border-white/5 p-8 md:p-12 hover:border-gold/30 transition-colors duration-300 rounded-sm group relative overflow-hidden">
                {/* Subtle background glow effect on hover */}
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative z-10">
                  {getIcon(category.name)}
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{category.name}</h2>
                  <p className="text-zinc-400 mb-8 min-h-[80px]">
                    {category.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-widest mb-4">Key Lines</h3>
                    <ul className="grid grid-cols-2 gap-3 text-zinc-500 text-sm">
                      {category.products && category.products.length > 0 ? (
                        category.products.map((product, fIndex) => (
                          <li key={fIndex} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
                            <Link to={`/product/${product._id}`} className="hover:text-gold transition-colors truncate">
                              {product.title}
                            </Link>
                          </li>
                        ))
                      ) : (
                        <li className="text-zinc-600 col-span-2">More products coming soon</li>
                      )}
                    </ul>
                  </div>
                  
                  <button className="flex items-center gap-2 text-gold font-semibold uppercase text-xs tracking-widest group-hover:text-white transition-colors">
                    Explore Range <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* CTA */}
      <section data-aos="fade-up" className="container mx-auto px-6 py-24">
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
