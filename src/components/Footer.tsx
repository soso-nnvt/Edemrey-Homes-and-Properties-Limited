import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { BRAND_ASSETS, BUSINESS_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-forest text-white pt-20 pb-10 px-6 border-t border-gold/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <img 
            src={BRAND_ASSETS.LOGO} 
            alt="Edemrey Homes" 
            className="h-20 mb-6"
          />
          <p className="text-bone/60 max-w-md leading-relaxed mb-8">
            Cultivating legacies and building generational wealth through strategic real estate investments. We bridge the gap between humble beginnings and prosperity.
          </p>
          <div className="flex gap-6">
            <a href={BUSINESS_INFO.SOCIALS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
              <Instagram size={24} />
            </a>
            <a href={BUSINESS_INFO.SOCIALS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={BUSINESS_INFO.SOCIALS.FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
              <Facebook size={24} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-serif text-gold text-xl mb-6">Explore</h4>
          <ul className="space-y-4 text-sm uppercase tracking-widest">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/properties" className="hover:text-gold transition-colors">Properties</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-gold text-xl mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-bone/80 leading-relaxed">
            <li>{BUSINESS_INFO.ADDRESS}</li>
            <li>{BUSINESS_INFO.EMAIL}</li>
            <li>{BUSINESS_INFO.PHONE}</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-bone/40 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Edemrey Homes & Properties Limited. All Rights Reserved.
        </p>
        <a 
          href="https://netnovatelabs.com.ng" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs font-bold tracking-[0.2em] text-white font-display hover:text-gold transition-colors"
        >
          POWERED BY <span className="text-gold">NETNOVATELABS</span>
        </a>
      </div>
    </footer>
  );
}
