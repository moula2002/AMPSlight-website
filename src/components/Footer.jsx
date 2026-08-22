import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { MapPin, Phone, Mail } from 'lucide-react'
import { FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/5 text-sm text-zinc-400">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <img src={Logo} alt="AMPSLITE" className="h-6 object-contain mix-blend-screen mb-6" />
          <p className="mb-6 leading-relaxed text-xs">
            We deliver innovative, energy-efficient lighting solutions that enhance spaces and enrich lives.
          </p>
          <div className="flex gap-4">
            <FiInstagram size={18} className="hover:text-gold cursor-pointer transition-colors" />
            <FiLinkedin size={18} className="hover:text-gold cursor-pointer transition-colors" />
            <FiTwitter size={18} className="hover:text-gold cursor-pointer transition-colors" />
            <FiYoutube size={18} className="hover:text-gold cursor-pointer transition-colors" />
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-[11px]">Quick Links</h4>
          <ul className="space-y-3 text-xs">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-gold transition-colors">Products</Link></li>
            <li><Link to="/solutions" className="hover:text-gold transition-colors">Solutions</Link></li>
            <li><Link to="/projects" className="hover:text-gold transition-colors">Projects</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-[11px]">Products</h4>
          <ul className="space-y-3 text-xs">
            <li><Link to="/products" className="hover:text-gold transition-colors">LED Downlights</Link></li>
            <li><Link to="/products" className="hover:text-gold transition-colors">Spot Lights</Link></li>
            <li><Link to="/products" className="hover:text-gold transition-colors">Panel Lights</Link></li>
            <li><Link to="/products" className="hover:text-gold transition-colors">Street Lights</Link></li>
            <li><Link to="/products" className="hover:text-gold transition-colors">Indoor Lights</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-[11px]">Solutions</h4>
          <ul className="space-y-3 text-xs">
            <li><Link to="/solutions" className="hover:text-gold transition-colors">Residential Lighting</Link></li>
            <li><Link to="/solutions" className="hover:text-gold transition-colors">Commercial Lighting</Link></li>
            <li><Link to="/solutions" className="hover:text-gold transition-colors">Industrial Lighting</Link></li>
            <li><Link to="/solutions" className="hover:text-gold transition-colors">Outdoor Lighting</Link></li>
            <li><Link to="/solutions" className="hover:text-gold transition-colors">Smart Lighting</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-[11px]">Contact Us</h4>
          <ul className="space-y-4 text-xs">
            <li className="flex gap-3 items-start">
              <Phone size={14} className="text-gold mt-1 shrink-0" />
              <span>+91 12345 67890</span>
            </li>
            <li className="flex gap-3 items-start">
              <Mail size={14} className="text-gold mt-1 shrink-0" />
              <span>info@ampslite.com</span>
            </li>
            <li className="flex gap-3 items-start">
              <MapPin size={14} className="text-gold mt-1 shrink-0" />
              <span>123, Light Avenue, Innovation City, 400001, India</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-500">
        <p>© 2026 AMPSLITE. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-gold transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  )
}
