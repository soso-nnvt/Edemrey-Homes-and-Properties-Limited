import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Ruler, ShieldCheck, PlayCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import SEO from '../components/SEO';
import { BRAND_ASSETS } from '../constants';

interface Property {
  id: number;
  title: {
    rendered: string;
  };
  price_formatted: string;
  bedrooms: string;
  address_three: string;
  size: string;
  status: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

export default function Properties() {
  const [listings, setListings] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/.netlify/functions/properties');
        if (!response.ok) throw new Error('Failed to fetch properties');
        const data = await response.json();
        setListings(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (isLoading) {
    return (
      <div className="pt-32 min-h-screen bg-bone flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold mx-auto mb-4"></div>
          <p className="text-forest font-serif">Fetching properties...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-32 min-h-screen bg-bone flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-serif text-forest mb-4">Unable to load properties</h2>
          <p className="text-red-500 mb-8">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-forest text-gold px-8 py-3 rounded-sm font-bold uppercase tracking-widest"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 bg-bone">
      <SEO 
        title="Investment Portfolio - Land Banking Opportunities"
        description="Explore our portfolio of high-yield land banking opportunities in Mowe, Ibeju-Lekki, and Epe. Secure your smart city investment today."
        path="/properties"
      />
      {/* Portfolio Header */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4"
          >
            Portfolio of Growth
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-forest mb-8 max-w-4xl mx-auto"
          >
            Investment Tiers
          </motion.h1>
          <p className="text-forest/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Carefully curated land banking opportunities designed to maximize your ROI while securing your future legacy.
          </p>
        </div>
      </section>

      {/* Property Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {listings.map((prop, idx) => (
              <motion.div 
                key={prop.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl border border-gold/10 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={prop._embedded?.['wp:featuredmedia']?.[0]?.source_url || BRAND_ASSETS.PROPERTIES[0]} 
                    alt={prop.title.rendered} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold shadow-lg bg-gold text-forest">
                      {prop.status || 'Available'}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-forest mb-2" dangerouslySetInnerHTML={{ __html: prop.title.rendered }} />
                  <div className="flex items-center gap-2 text-forest/60 text-sm mb-6">
                    <MapPin size={14} className="text-gold" />
                    {prop.address_three || 'Lagos, Nigeria'}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8 py-4 border-y border-forest/5">
                    <div className="flex items-center gap-2">
                      <Ruler size={14} className="text-gold" />
                      <span className="text-xs uppercase tracking-widest font-medium">{prop.size || '500 SQM'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-gold" />
                      <span className="text-xs uppercase tracking-widest font-medium">Verified</span>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-forest/40">Investment</p>
                      <p className="text-2xl font-serif text-forest">{prop.price_formatted || 'Contact for Price'}</p>
                    </div>
                    <Link 
                      to={`/properties/${prop.id}`}
                      className="bg-forest text-gold w-12 h-12 rounded-full flex items-center justify-center hover:bg-gold hover:text-forest transition-all"
                    >
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Portal */}
      <section className="py-24 bg-bone border-t border-gold/10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-forest mb-6">The Inspection Portal</h2>
            <p className="text-forest/60 max-w-2xl mx-auto uppercase tracking-widest text-sm">Real footage, real trust, real growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src={BRAND_ASSETS.PROPERTIES[4]} 
                alt="Site Inspection" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-forest/40 flex flex-col items-center justify-center">
                <PlayCircle size={64} className="text-gold mb-4" />
                <p className="text-white font-serif text-xl">Mowe Site Tour with CEO</p>
              </div>
            </div>

            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src={BRAND_ASSETS.PROPERTIES[5]} 
                alt="Client Testimonial" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-forest/40 flex flex-col items-center justify-center">
                <PlayCircle size={64} className="text-gold mb-4" />
                <p className="text-white font-serif text-xl">Ibeju-Lekki Client Handover</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
