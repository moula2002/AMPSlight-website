import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import Logo from '../assets/Logo.png'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/5 py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Desktop Left Links */}
        <div className="hidden md:flex items-center gap-16 text-[10px] font-semibold text-zinc-300 uppercase tracking-widest flex-1 justify-end pr-16">
          <Link to="/" className="hover:text-gold transition-colors text-gold">Home</Link>
          <Link to="/products" className="hover:text-gold transition-colors">Products</Link>
          <Link to="/solutions" className="hover:text-gold transition-colors">Solutions</Link>
        </div>
        
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center shrink-0" onClick={closeMobileMenu}>
          <img src={Logo} alt="AMPSLITE Logo" className="h-10 md:h-12 object-contain mix-blend-screen" />
        </Link>
        
        {/* Desktop Right Links */}
        <div className="hidden md:flex items-center gap-16 text-[10px] font-semibold text-zinc-300 uppercase tracking-widest flex-1 justify-start pl-16">
          <Link to="/projects" className="hover:text-gold transition-colors">Projects</Link>
          <Link to="/about" className="hover:text-gold transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link>
          <Link to="/contact" className="flex items-center gap-2 border border-white/20 px-4 py-2 hover:border-gold hover:text-gold transition-colors rounded-sm cursor-pointer ml-4">
            GET A QUOTE <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white hover:text-gold transition-colors focus:outline-none">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center py-6 gap-6 text-sm font-semibold text-zinc-300 uppercase tracking-widest">
          <Link to="/" onClick={closeMobileMenu} className="hover:text-gold transition-colors text-gold">Home</Link>
          <Link to="/products" onClick={closeMobileMenu} className="hover:text-gold transition-colors">Products</Link>
          <Link to="/solutions" onClick={closeMobileMenu} className="hover:text-gold transition-colors">Solutions</Link>
          <Link to="/projects" onClick={closeMobileMenu} className="hover:text-gold transition-colors">Projects</Link>
          <Link to="/about" onClick={closeMobileMenu} className="hover:text-gold transition-colors">About Us</Link>
          <Link to="/contact" onClick={closeMobileMenu} className="hover:text-gold transition-colors">Contact Us</Link>
          <Link to="/contact" onClick={closeMobileMenu} className="flex items-center gap-2 border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-black transition-colors rounded-sm mt-2">
            GET A QUOTE <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </nav>
  )
}
