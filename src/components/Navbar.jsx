import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react'
import Logo from '../assets/Logo.png'
import api from '../api/axiosInstance'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [categories, setCategories] = useState([])
  const [subcategories, setSubcategories] = useState([])
  const [openMobileCategory, setOpenMobileCategory] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, subcatRes] = await Promise.all([
          api.get('/categories'),
          api.get('/subcategories')
        ]);
        setCategories(catRes.data);
        setSubcategories(subcatRes.data);
      } catch (error) {
        console.error('Failed to fetch data for navbar', error);
      }
    };
    fetchData();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setOpenMobileCategory(null)
  }

  const toggleMobileCategory = (categoryId, e) => {
    e.preventDefault()
    setOpenMobileCategory(openMobileCategory === categoryId ? null : categoryId)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 bg-black ${isScrolled ? 'py-2 shadow-xl border-b border-white/10' : 'py-4 border-b border-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between lg:justify-center">

        {/* Desktop Left Links */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12 text-[10px] font-bold text-zinc-300 uppercase tracking-widest flex-1 justify-end pr-8 xl:pr-16 whitespace-nowrap">
          <Link to="/" className="text-[#d4af37] hover:text-gold transition-colors">Home</Link>
          <Link to="/about" className="hover:text-gold transition-colors">About Us</Link>
          <Link to="/solutions" className="hover:text-gold transition-colors">Solutions</Link>

          <div className="relative group">
            <Link to="/products" className="flex items-center gap-1 hover:text-gold transition-colors py-4">
              Products <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </Link>

            <div className="absolute top-[80%] left-0 bg-black/90 backdrop-blur-md border border-white/10 min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl shadow-black/50 rounded-md translate-y-2 group-hover:translate-y-0">
              <div className="py-2">
                {categories.length > 0 ? categories.map((category) => {
                  const categorySubcats = subcategories.filter(sub => sub.category && (sub.category._id === category._id || sub.category === category._id));
                  return (
                    <div key={category._id} className="group/sub relative">
                      <Link
                        to={`/products`}
                        className="block px-6 py-3.5 hover:bg-white/5 hover:text-gold transition-colors text-white text-xs uppercase flex justify-between items-center tracking-widest font-bold"
                      >
                        {category.name}
                        {categorySubcats.length > 0 && <ChevronDown size={14} className="-rotate-90" />}
                      </Link>
                      
                      {categorySubcats.length > 0 && (
                        <div className="absolute top-0 left-full bg-black/95 backdrop-blur-md border border-white/10 min-w-[220px] opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 shadow-2xl shadow-black/50 rounded-md ml-1">
                          <div className="py-2">
                            {categorySubcats.map((sub) => (
                              <Link
                                key={sub._id}
                                to={`/products`}
                                className="block px-6 py-3 hover:bg-white/10 hover:text-gold transition-colors text-zinc-300 text-[10px] uppercase tracking-widest font-bold"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }) : (
                  <div className="px-6 py-3 text-zinc-500 text-xs">Loading...</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center justify-center shrink-0 mx-4 xl:mx-8" onClick={closeMobileMenu}>
          <img src={Logo} alt="AMPSLITE Logo" className={`object-contain mix-blend-screen transition-all duration-500 ${isScrolled ? 'h-8 md:h-10 lg:h-12' : 'h-12 md:h-14 lg:h-16'}`} />
        </Link>

        {/* Desktop Right Links */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12 text-[10px] font-bold text-zinc-300 uppercase tracking-widest flex-1 justify-start pl-8 xl:pl-16 whitespace-nowrap">
          <Link to="/projects" className="hover:text-gold transition-colors">Projects</Link>
          <Link to="/blog" className="hover:text-gold transition-colors">Blog</Link>
          <Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link>
          <Link to="/contact" className="bg-[#d4af37] text-black px-6 py-2.5 rounded-sm hover:bg-white transition-colors cursor-pointer ml-2 font-bold tracking-widest">
            GET A QUOTE
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white hover:text-gold transition-colors focus:outline-none">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 ease-in-out overflow-y-auto ${isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center py-6 gap-6 text-sm font-semibold text-zinc-300 uppercase tracking-widest">
          <Link to="/" onClick={closeMobileMenu} className="hover:text-gold transition-colors text-gold">Home</Link>
          <Link to="/about" onClick={closeMobileMenu} className="hover:text-gold transition-colors">About Us</Link>
          <Link to="/solutions" onClick={closeMobileMenu} className="hover:text-gold transition-colors">Solutions</Link>

          <div className="flex flex-col items-center w-full">
            <Link to="/products" onClick={closeMobileMenu} className="hover:text-gold transition-colors mb-4">Products</Link>
            <div className="flex flex-col w-full bg-white/5 border-y border-white/5 py-2">
              {categories.length > 0 ? categories.map((category) => {
                const categorySubcats = subcategories.filter(sub => sub.category && (sub.category._id === category._id || sub.category === category._id));
                const isOpen = openMobileCategory === category._id;
                
                return (
                  <div key={category._id} className="w-full flex flex-col items-center">
                    <div 
                      className="flex items-center justify-center gap-2 py-3 w-full text-xs text-zinc-300 hover:text-gold transition-colors uppercase cursor-pointer"
                      onClick={(e) => {
                        if (categorySubcats.length > 0) {
                          toggleMobileCategory(category._id, e);
                        } else {
                          closeMobileMenu();
                        }
                      }}
                    >
                      <Link to={`/products`} className="hover:text-gold" onClick={(e) => {
                        if (categorySubcats.length > 0) {
                          e.preventDefault();
                          toggleMobileCategory(category._id, e);
                        }
                      }}>{category.name}</Link>
                      {categorySubcats.length > 0 && (
                        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold' : ''}`} />
                      )}
                    </div>
                    
                    {/* Mobile Subcategories */}
                    <div className={`flex flex-col items-center w-full bg-black/30 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 py-2' : 'max-h-0 py-0'}`}>
                      {categorySubcats.map((sub) => (
                        <Link
                          key={sub._id}
                          to={`/products`}
                          onClick={closeMobileMenu}
                          className="py-2 text-[10px] text-zinc-400 hover:text-gold transition-colors uppercase tracking-widest"
                        >
                          - {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }) : (
                <div className="text-xs text-zinc-500 py-4 text-center">Loading...</div>
              )}
            </div>
          </div>

          <Link to="/projects" onClick={closeMobileMenu} className="hover:text-gold transition-colors">Projects</Link>
          <Link to="/blog" onClick={closeMobileMenu} className="hover:text-gold transition-colors">Blog</Link>
          <Link to="/contact" onClick={closeMobileMenu} className="hover:text-gold transition-colors">Contact Us</Link>
          <Link to="/contact" onClick={closeMobileMenu} className="flex items-center gap-2 border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-black transition-colors rounded-sm mt-2">
            GET A QUOTE <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </nav>
  )
}
