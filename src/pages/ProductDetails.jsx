import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, FileText, Download } from 'lucide-react';
import api from '../api/axiosInstance';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error('Failed to fetch product details', err);
        setError('Failed to load product details.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen bg-black pt-32 pb-12 text-center text-white">Loading product details...</div>;
  }

  if (error || !product) {
    return <div className="min-h-screen bg-black pt-32 pb-12 text-center text-red-500">{error || 'Product not found.'}</div>;
  }

  const processImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('data:') || url.startsWith('http')) return url;
    return `https://ampslight-server.onrender.com${url}`;
  };

  const allImages = [product.imageUrl, ...(product.galleryImages || [])].filter(Boolean).map(processImageUrl);

  return (
    <div className="min-h-screen bg-black pb-24 pt-16">
      <div className="container mx-auto px-6">
        <Link to="/products" className="inline-flex items-center gap-2 text-zinc-400 hover:text-gold transition-colors mb-8 text-sm uppercase tracking-wider font-semibold">
          <ArrowLeft size={16} /> Back to Products
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Images Section */}
          <div>
            <div className="bg-white rounded-sm border border-white/5 overflow-hidden mb-4 aspect-square flex items-center justify-center p-8 relative">
              {allImages.length > 0 ? (
                <img src={allImages[activeImage]} alt={product.title} className="w-full h-full object-contain" />
              ) : (
                <div className="text-zinc-400">No Image Available</div>
              )}
            </div>
            
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {allImages.map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setActiveImage(idx)}
                    className={`bg-white rounded-sm border aspect-square flex items-center justify-center p-2 cursor-pointer transition-colors ${activeImage === idx ? 'border-gold border-2' : 'border-white/5 hover:border-gold/50'}`}
                  >
                    <img src={img} alt={`${product.title} view ${idx + 1}`} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Details Section */}
          <div>
            {product.category && (
              <span className="text-gold font-bold text-xs uppercase tracking-widest mb-2 block">
                {product.category.name} {product.subcategory ? ` / ${product.subcategory.name}` : ''}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.title}</h1>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400 mb-6 pb-6 border-b border-white/10">
              {product.sku && <p>SKU: <span className="text-zinc-200">{product.sku}</span></p>}
              {product.modelNumber && <p>Model: <span className="text-zinc-200">{product.modelNumber}</span></p>}
              {product.brandName && <p>Brand: <span className="text-zinc-200">{product.brandName}</span></p>}
            </div>
            
            <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
              {product.shortDescription || product.fullDescription}
            </p>
            
            {product.features && product.features.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4 text-white">Key Features</h3>
                <ul className="grid grid-cols-1 gap-3 text-zinc-400">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {product.applications && product.applications.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4 text-white">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, idx) => (
                    <span key={idx} className="bg-white/5 border border-white/10 text-zinc-300 px-4 py-2 rounded-sm text-xs uppercase tracking-wider font-semibold">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
              <Link to="/contact" className="bg-gold text-black font-bold px-8 py-4 text-center rounded-sm hover:bg-white transition-colors uppercase tracking-widest text-sm flex-1">
                Request Quote
              </Link>
              {product.datasheetUrl && (
                <a href={product.datasheetUrl} target="_blank" rel="noreferrer" className="border border-white/20 text-white font-bold px-8 py-4 text-center rounded-sm hover:border-gold hover:text-gold transition-colors uppercase tracking-widest text-sm flex items-center justify-center gap-2 flex-1">
                  <FileText size={18} /> Datasheet
                </a>
              )}
            </div>
            
          </div>
        </div>
        
        {/* Full Description & Specs */}
        {(product.fullDescription || (product.technicalSpecifications && product.technicalSpecifications.length > 0)) && (
          <div className="mt-24 grid lg:grid-cols-3 gap-12 border-t border-white/10 pt-16">
            {product.fullDescription && (
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Product Overview</h2>
                <div className="text-zinc-400 leading-relaxed space-y-4">
                  {product.fullDescription.split('\n').map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            )}
            
            {product.technicalSpecifications && product.technicalSpecifications.length > 0 && (
              <div className="lg:col-span-1 bg-zinc-900/50 p-8 border border-white/5 rounded-sm">
                <h3 className="text-xl font-bold mb-6">Technical Specifications</h3>
                <div className="space-y-4">
                  {product.technicalSpecifications.map((spec, idx) => {
                    const key = spec.name || (typeof spec === 'string' && spec.includes(':') ? spec.split(':')[0] : spec);
                    const val = spec.value || (typeof spec === 'string' && spec.includes(':') ? spec.split(':')[1] : '');
                    
                    return (
                      <div key={idx} className="flex justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                        <span className="text-zinc-400 text-sm">{typeof key === 'string' ? key.trim() : key}</span>
                        {val && <span className="text-white font-semibold text-sm text-right ml-4">{typeof val === 'string' ? val.trim() : val}</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
