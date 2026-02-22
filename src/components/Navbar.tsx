import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';
import { cn } from '../lib/utils';
import { BRAND_ASSETS, BUSINESS_INFO } from '../constants';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Properties', path: '/properties' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4",
        scrolled ? "bg-forest shadow-xl py-2" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={BRAND_ASSETS.LOGO} alt="Edemrey Homes" className="h-12 md:h-16 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm uppercase tracking-[0.2em] font-medium transition-colors hover:text-gold",
                location.pathname === link.path ? "text-gold" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-gold text-forest px-6 py-2 rounded-sm text-xs uppercase tracking-widest font-bold hover:bg-white transition-all"
          >
            Book Inspection
          </Link>
        </div>

        {/* Mobile Toggle - Golden Anchor */}
        <button 
          className="md:hidden text-gold hover:scale-110 transition-transform"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={32} strokeWidth={2.5} />
        </button>
      </div>

      {/* Mobile Menu - Solid Forest Green */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-forest z-[60] flex flex-col items-center justify-center gap-8 p-6"
          >
            <button 
              className="absolute top-8 right-8 text-gold hover:rotate-90 transition-transform"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <X size={40} />
            </button>
            
            <img src={BRAND_ASSETS.LOGO} alt="Edemrey Homes" className="h-24 mb-4" />

            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-3xl uppercase tracking-[0.3em] font-serif transition-colors",
                    location.pathname === link.path ? "text-gold" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center gap-6">
              <div className="flex gap-8">
                <a href={BUSINESS_INFO.SOCIALS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                  <Instagram size={28} />
                </a>
                <a href={BUSINESS_INFO.SOCIALS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                  <Linkedin size={28} />
                </a>
                <a href={BUSINESS_INFO.SOCIALS.FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                  <Facebook size={28} />
                </a>
              </div>
              
              <div className="text-center">
                <p className="text-gold/60 text-[10px] uppercase tracking-widest mb-2">Direct Line</p>
                <a href={BUSINESS_INFO.WHATSAPP} className="text-white text-2xl font-serif flex items-center gap-3">
                  <Phone size={24} className="text-gold" />
                  {BUSINESS_INFO.PHONE}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
