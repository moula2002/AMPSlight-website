import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { FiInstagram, FiFacebook, FiLinkedin, FiArrowUp } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import api from '../api/axiosInstance'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/categories')
        setCategories(response.data)
      } catch (error) {
        console.error('Failed to fetch footer categories', error)
      }
    }
    fetchCategories()

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="bg-[#111111] pt-20 pb-12 border-t border-white/5 text-sm text-zinc-300 font-sans relative">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Column 1: Logo & Description */}
          <div className="col-span-1 flex flex-col items-start">
            <img src={Logo} alt="AMPSLITE" className="h-20 object-contain mix-blend-screen mb-8" />
            <p className="mb-8 leading-relaxed text-[13px] text-zinc-300 max-w-sm">
              AMPSLITE designs and manufactures premium architectural and industrial lighting built to last. From smart cities to premium estates, we illuminate modern spaces.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 p-2 rounded-sm hover:bg-gold hover:text-black transition-colors">
                <FiInstagram size={18} />
              </a>
              <a href="#" className="bg-white/5 p-2 rounded-sm hover:bg-gold hover:text-black transition-colors">
                <FiFacebook size={18} />
              </a>
              <a href="#" className="bg-white/5 p-2 rounded-sm hover:bg-gold hover:text-black transition-colors">
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-[14px]">QUICK LINKS</h4>
            <ul className="space-y-5 text-[15px] font-medium text-white/90">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/manufacturing" className="hover:text-gold transition-colors">Manufacturing</Link></li>
              <li><Link to="/products" className="hover:text-gold transition-colors">Products</Link></li>
              <li><Link to="/bespoke" className="hover:text-gold transition-colors">Bespoke Poles</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Categories */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-[14px]">CATEGORIES</h4>
            <ul className="space-y-5 text-[15px] font-medium text-white/90">
              {categories.length > 0 ? categories.map((category) => (
                <li key={category._id}>
                  <Link to={`/products`} className="hover:text-gold transition-colors">{category.name}</Link>
                </li>
              )) : (
                <li className="text-zinc-500">Loading categories...</li>
              )}
            </ul>
          </div>
          
          {/* Column 4: Contact Info */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-[12px]">CONTACT INFO</h4>
            
            <div className="mb-8">
              <h5 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">CORPORATE OFFICE & FACTORY</h5>
              <p className="text-[13px] leading-relaxed text-zinc-300">
                <span className="font-semibold text-white">Marudhar Electricals</span><br/>
                Ground Floor No 54 4th Main 4th Cross Near Rudhrappa Garden Ashwath Katte Road Kasturiba Nagar Mysore Road<br/>
                Bengaluru, Karnataka - 560026
              </p>
            </div>

            <div>
              <h5 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">BUSINESS INQUIRIES</h5>
              <p className="text-[13px] leading-relaxed text-zinc-300 space-y-1">
                <span className="block">Contact: +91 7204301107</span>
                <span className="block">E-Mail: murudharelectricals@gmail.com</span>
              </p>
            </div>
          </div>
          
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 left-6 z-50">
        <a 
          href="https://wa.me/917204301107" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20b958] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold transition-transform hover:scale-105"
        >
          <FaWhatsapp size={22} />
          <span>How can I help you?</span>
        </a>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 bg-zinc-900 border border-white/10 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:bg-gold hover:text-black ${showScrollTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} />
      </button>
    </>
  )
}
