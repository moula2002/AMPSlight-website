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
    if (url.startsWith('data:') || url.startsWith('http')) return url;
    return `https://ampslight-server.onrender.com${url}`;
  };

  const displayBanners = banners;



  return (
    <section className="relative min-h-[75vh] flex items-center bg-black border-b border-gray-200 overflow-hidden">
      
      {/* Background Section */}
      <div className="absolute inset-0 z-0 bg-neutral-900">
        {isLoading ? (
          <div className="absolute inset-0 bg-[#050505] overflow-hidden" aria-hidden="true">
            {/* Minimal Premium Electric Circuit Loading */}
            
            {/* Background Static Wires */}
            <div className="absolute top-[30%] left-0 w-full h-[1px] bg-white/[0.03]"></div>
            <div className="absolute top-[70%] left-0 w-full h-[1px] bg-white/[0.03]"></div>
            <div className="absolute left-[25%] top-0 w-[1px] h-full bg-white/[0.03]"></div>
            <div className="absolute left-[75%] top-0 w-[1px] h-full bg-white/[0.03]"></div>

            {/* Circuit Nodes */}
            <div className="circuit-node absolute top-[30%] left-[25%] w-1.5 h-1.5 bg-gray-600 rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{ animation: 'circuit-node-flash 3s infinite 1s' }}></div>
            <div className="circuit-node absolute top-[70%] left-[75%] w-1.5 h-1.5 bg-gray-600 rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{ animation: 'circuit-node-flash 4s infinite 2s' }}></div>

            {/* Animated Electric Pulses (4 max) */}
            {/* Pulse 1: Top horizontal */}
            <div className="absolute top-[30%] left-0 w-full h-[1px] overflow-hidden">
              <div 
                className="electric-pulse absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0"
                style={{ animation: 'circuit-pulse-x 4s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}
              ></div>
            </div>

            {/* Pulse 2: Bottom horizontal */}
            <div className="absolute top-[70%] left-0 w-full h-[1px] overflow-hidden">
              <div 
                className="electric-pulse absolute top-0 left-0 h-full w-1/5 bg-gradient-to-l from-transparent via-gold to-transparent opacity-0"
                style={{ animation: 'circuit-pulse-x-rev 5s cubic-bezier(0.4, 0, 0.2, 1) infinite 1.5s' }}
              ></div>
            </div>

            {/* Pulse 3: Left vertical */}
            <div className="absolute left-[25%] top-0 w-[1px] h-full overflow-hidden">
              <div 
                className="electric-pulse absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-transparent via-white to-transparent opacity-0"
                style={{ animation: 'circuit-pulse-y 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.8s' }}
              ></div>
            </div>

            {/* Pulse 4: Right vertical */}
            <div className="absolute left-[75%] top-0 w-[1px] h-full overflow-hidden">
              <div 
                className="electric-pulse absolute top-0 left-0 w-full h-1/6 bg-gradient-to-b from-transparent via-gold to-transparent opacity-0"
                style={{ animation: 'circuit-pulse-y 6s cubic-bezier(0.4, 0, 0.2, 1) infinite 2.2s' }}
              ></div>
            </div>

            {/* Very subtle ambient lighting */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.02] to-transparent pointer-events-none"></div>
          </div>
        ) : (
          displayBanners.map((banner, index) => (
            <div
              key={banner._id || index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={processImageUrl(banner.imageUrl)}
                alt="Modern Cable Solutions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </div>
          ))
        )}
      </div>
      
      {/* Static Text Overlay - Always visible regardless of image */}
      <div className="container mx-auto px-6 relative z-10 pt-24 pb-32 h-full flex items-center pointer-events-none">
        <div className="max-w-2xl transform transition-all duration-1000 pointer-events-auto opacity-100 translate-y-0">
          <h3 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-gold"></span>
            Premium Wires & Cables
          </h3>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] mb-8 text-white tracking-tight">
            Power That <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Connects</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-lg font-medium">
            AMPSLITE delivers innovative, high-performance wires and cables designed for safety, durability, and superior conductivity.
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
      
      {/* Carousel Dots */}
      {displayBanners.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {displayBanners.map((_, index) => (
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
