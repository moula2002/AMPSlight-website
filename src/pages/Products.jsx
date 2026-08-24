import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import api from '../api/axiosInstance';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes, catRes] = await Promise.all([
          api.get('/products'),
          api.get('/categories')
        ]);
        setProducts(prodRes.data);
        setCategories(catRes.data);
        
        // Parse query params for category filter if it exists
        const params = new URLSearchParams(location.search);
        const catParam = params.get('category');
        if (catParam) {
          const found = catRes.data.find(c => c._id === catParam);
          if (found) setSelectedCategory(found.name);
        }
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location.search]);

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category && p.category.name === selectedCategory);

  const processImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('data:') || url.startsWith('http')) return url;
    return `https://ampslight-server.onrender.com${url}`;
  };

  const heroTitle = selectedCategory === 'All' ? 'Our Products' : selectedCategory;
  const heroDesc = selectedCategory === 'All' 
    ? 'Premium lighting built to perform and designed to impress.'
    : `Premium ${selectedCategory.toLowerCase()} built to perform and designed to impress.`;

  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex flex-col justify-end text-left pb-20">
        <div className="absolute inset-0 overflow-hidden bg-black">
          <img 
            src="/images/hero_bg.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight">{heroTitle}</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl font-medium">
            {heroDesc}
          </p>
        </div>
      </section>

      {/* Filter / Navigation */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="container mx-auto px-6 py-5 flex flex-wrap gap-8 items-center">
           <button 
             onClick={() => setSelectedCategory('All')} 
             className={`text-xs font-bold uppercase tracking-widest transition-colors ${selectedCategory === 'All' ? 'text-black border-b-2 border-black pb-1' : 'text-gray-400 hover:text-black pb-1'}`}
           >
             All Products
           </button>
           {categories.map(cat => (
             <button 
               key={cat._id} 
               onClick={() => setSelectedCategory(cat.name)} 
               className={`text-xs font-bold uppercase tracking-widest transition-colors ${selectedCategory === cat.name ? 'text-black border-b-2 border-black pb-1' : 'text-gray-400 hover:text-black pb-1'}`}
             >
               {cat.name}
             </button>
           ))}
        </div>
      </div>

      <section className="container mx-auto px-6 py-16">
        {/* Product Grid */}
        {loading ? (
          <div className="text-center text-black py-24 text-xl font-bold uppercase tracking-widest animate-pulse">Loading Catalog...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-24">{error}</div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center text-gray-500 py-24 text-lg">No products found in this category.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
            {filteredProducts.map(product => (
              <Link 
                to={`/product/${product._id}`} 
                key={product._id} 
                className="group border-r border-b border-gray-200 bg-white flex flex-col hover:bg-gray-50 transition-colors"
              >
                <div className="p-12 flex items-center justify-center relative min-h-[350px]">
                  <img 
                    src={processImageUrl(product.imageUrl) || '/images/hero_bg.png'} 
                    alt={product.title} 
                    className="max-w-full max-h-[250px] object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 border-t border-gray-200 flex-1 flex flex-col">
                  {product.sku && <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">{product.sku}</p>}
                  <h3 className="text-xl font-bold mb-3 text-black group-hover:text-gold transition-colors">{product.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {product.shortDescription || product.fullDescription || "Premium quality lighting fixture designed for longevity and performance."}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-black font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    View Details <ArrowRight size={14} className="text-gold" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
