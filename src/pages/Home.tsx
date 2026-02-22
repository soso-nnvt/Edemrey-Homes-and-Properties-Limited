import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ROICalculator from '../components/ROICalculator';
import PathTimeline from '../components/PathTimeline';
import SEO from '../components/SEO';
import { BRAND_ASSETS } from '../constants';

export default function Home() {
  return (
    <div className="bg-bone overflow-hidden">
      <SEO 
        title="Premier Real Estate Investment & Land Banking in Lagos"
        description="Secure your future with Edemrey Homes. Expert land banking and smart city investments in Mowe, Ibeju-Lekki, and Lagos. RC-verified developer cultivating prosperity."
        path="/"
      />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Video Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-forest/40 z-10" />
          <video 
            src={BRAND_ASSETS.HERO_VIDEO} 
            poster={BRAND_ASSETS.PROPERTIES[3]}
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-transparent to-forest/80 z-10" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gold uppercase tracking-[0.4em] text-sm mb-6 font-bold"
          >
            Cultivating Legacies
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white font-serif leading-tight mb-8 max-w-4xl mx-auto"
          >
            Premier Real Estate Investment & <span className="italic text-gold">Land Banking in Lagos</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link to="/properties" className="bg-gold text-forest px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-3 group">
              Explore Portfolio
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/about" className="border border-white/30 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Our Philosophy
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-gold/60 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gold/40" />
        </motion.div>
      </section>

      {/* ROI Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-forest mb-8 leading-tight">
              Land Banking Nigeria: The <span className="text-gold italic">Seed</span> of Generational Wealth.
            </h2>
            <p className="text-forest/70 text-lg leading-relaxed mb-8">
              In the heart of Nigeria's fastest-growing economic corridors, we identify and secure land that doesn't just sit—it grows. Our <Link to="/properties" className="text-gold underline hover:text-forest transition-colors">Smart City Investment</Link> opportunities in Mowe and Ibeju-Lekki are designed for the visionary investor looking for affordable plots in Mowe.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-gold font-serif text-4xl mb-2">150%</p>
                <p className="text-xs uppercase tracking-widest text-forest/60">Avg. 5-Year ROI</p>
              </div>
              <div>
                <p className="text-gold font-serif text-4xl mb-2">100%</p>
                <p className="text-xs uppercase tracking-widest text-forest/60">Secure Documentation</p>
              </div>
            </div>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* Path to Ownership */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">The Journey</p>
          <h2 className="text-4xl md:text-6xl font-serif text-forest">Your Path to Ownership</h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <PathTimeline />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-forest py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Ready to plant your legacy?</h2>
          <p className="text-bone/60 text-lg mb-12 leading-relaxed">
            Join over 1,500 investors who have secured their future with Edemrey Homes. Our consultants are ready to guide you through our premium portfolios.
          </p>
          <button className="bg-gold text-forest px-12 py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-white transition-all">
            Request Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
