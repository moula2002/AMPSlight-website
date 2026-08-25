import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import api from '../api/axiosInstance';

export default function Banner() {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await api.get('/banners');
        // Filter only active banners and sort by displayOrder
        const activeBanners = response.data
          .filter(b => b.isActive)
          .sort((a, b) => a.displayOrder - b.displayOrder);
        setBanners(activeBanners);
      } catch (error) {
        console.error('Failed to fetch banners:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBanners();
  }, []);

  useEffect(() => {
    if (banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change banner every 5 seconds
    return () => clearInterval(interval);
  }, [banners.length]);

  const processImageUrl = (url) => {
    if (!url) return '/images/perfect_hero.png';
    if (url.startsWith('data:') || url.startsWith('http')) return url;
    return `https://ampslight-server.onrender.com${url}`;
  };

  // Static Fallback
  const staticBanner = (
    <section className="relative min-h-[75vh] flex items-center bg-black border-b border-gray-200">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/perfect_hero.png"
          alt="Modern Lighting"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10 pt-24 pb-32">
        <div className="max-w-2xl">
          <h3 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 flex items-center gap-4 opacity-0 animate-fade-in-up delay-100">
            <span className="w-12 h-[2px] bg-gold"></span>
            Brighter Spaces, Better Living
          </h3>
          <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] mb-8 text-white tracking-tight opacity-0 animate-fade-in-up delay-200">
            Light That <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Inspires</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-lg font-medium opacity-0 animate-fade-in-up delay-300">
            AMPSLITE delivers innovative, energy-efficient lighting solutions designed for longevity and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 opacity-0 animate-fade-in-up delay-400">
            <Link to="/products" className="bg-white text-black font-bold px-10 py-4 rounded-sm flex items-center justify-center gap-3 hover:bg-gold hover:text-white transition-colors uppercase tracking-widest text-sm shadow-xl">
              Explore Products <ArrowRight size={18} />
            </Link>
            <Link to="/solutions" className="border-2 border-white/50 text-white font-bold px-10 py-4 rounded-sm flex items-center justify-center gap-3 hover:border-gold hover:text-gold transition-colors uppercase tracking-widest text-sm">
              Our Solutions <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );

  if (isLoading) {
    return (
      <section className="relative min-h-[75vh] flex items-center justify-center bg-black border-b border-gray-200">
         <div className="w-10 h-10 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
      </section>
    );
  }

  if (banners.length === 0) {
    return staticBanner;
  }

  return (
    <section className="relative min-h-[75vh] flex items-center bg-black border-b border-gray-200 overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner._id || index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={processImageUrl(banner.imageUrl)}
            alt={banner.title || 'Modern Lighting'}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
          
          <div className="container mx-auto px-6 relative z-10 pt-24 pb-32 h-full flex items-center">
            <div className={`max-w-2xl transform transition-all duration-1000 delay-300 ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h3 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 flex items-center gap-4">
                <span className="w-12 h-[2px] bg-gold"></span>
                Brighter Spaces, Better Living
              </h3>
              
              <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] mb-8 text-white tracking-tight">
                Light That <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Inspires</span>
              </h1>
              
              <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-lg font-medium">
                AMPSLITE delivers innovative, energy-efficient lighting solutions designed for longevity and performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/products" className="bg-white text-black font-bold px-10 py-4 rounded-sm flex items-center justify-center gap-3 hover:bg-gold hover:text-white transition-colors uppercase tracking-widest text-sm shadow-xl">
                  Explore Products <ArrowRight size={18} />
                </Link>
                <Link to="/solutions" className="border-2 border-white/50 text-white font-bold px-10 py-4 rounded-sm flex items-center justify-center gap-3 hover:border-gold hover:text-gold transition-colors uppercase tracking-widest text-sm">
                  Our Solutions <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Carousel Dots */}
      {banners.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-gold w-8' : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
