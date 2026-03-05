import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Ruler, ShieldCheck, ArrowLeft, Phone, Mail, Bath, Home } from 'lucide-react';
import SEO from '../components/SEO';
import { BRAND_ASSETS } from '../constants';

interface PropertyDetail {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  price_formatted: string;
  bedrooms: string;
  bathrooms: string;
  tenure: string;
  address_three: string;
  images?: string[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<PropertyDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`/.netlify/functions/properties?id=${id}`);
        if (!response.ok) throw new Error('Failed to fetch property details');
        const data = await response.json();
        setProperty(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="pt-32 min-h-screen bg-bone flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="pt-32 min-h-screen bg-bone flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-3xl font-serif text-forest mb-4">Property Not Found</h2>
        <p className="text-forest/60 mb-8">{error || "The property you're looking for doesn't exist or has been removed."}</p>
        <Link to="/properties" className="bg-forest text-gold px-8 py-3 rounded-sm font-bold uppercase tracking-widest flex items-center gap-2">
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>
      </div>
    );
  }

  const allImages = property.images && property.images.length > 0 
    ? property.images 
    : [property._embedded?.['wp:featuredmedia']?.[0]?.source_url || BRAND_ASSETS.PROPERTIES[0]];

  return (
    <div className="pt-32 bg-bone min-h-screen">
      <SEO 
        title={property.title.rendered}
        description={`View details for ${property.title.rendered}. High-yield land banking opportunity in ${property.address_three || 'Lagos'}.`}
        path={`/properties/${id}`}
        image={allImages[0]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link to="/properties" className="inline-flex items-center gap-2 text-forest/60 hover:text-gold transition-colors mb-8 uppercase tracking-widest text-xs font-bold">
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/10"
            >
              <img 
                src={allImages[activeImage]} 
                alt={property.title.rendered} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {allImages.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-gold scale-105' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`${property.title.rendered} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Property Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-forest mb-4" dangerouslySetInnerHTML={{ __html: property.title.rendered }} />
              <div className="flex items-center gap-2 text-forest/60 text-lg">
                <MapPin size={20} className="text-gold" />
                {property.address_three || 'Lagos, Nigeria'}
              </div>
            </div>

            {/* Specs Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-forest/10">
              <div className="text-center md:text-left">
                <p className="text-forest/40 text-[10px] uppercase tracking-widest mb-1">Investment</p>
                <p className="text-forest font-serif text-xl">{property.price_formatted || 'Contact'}</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-forest/40 text-[10px] uppercase tracking-widest mb-1">Bedrooms</p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-forest font-serif text-xl">
                  <Home size={18} className="text-gold" />
                  {property.bedrooms || '0'}
                </div>
              </div>
              <div className="text-center md:text-left">
                <p className="text-forest/40 text-[10px] uppercase tracking-widest mb-1">Bathrooms</p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-forest font-serif text-xl">
                  <Bath size={18} className="text-gold" />
                  {property.bathrooms || '0'}
                </div>
              </div>
              <div className="text-center md:text-left">
                <p className="text-forest/40 text-[10px] uppercase tracking-widest mb-1">Tenure</p>
                <p className="text-forest font-serif text-xl">{property.tenure || 'C of O'}</p>
              </div>
            </div>

            <div className="prose prose-forest max-w-none text-forest/70 leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: property.content.rendered }} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link 
                to={`/contact?property=${encodeURIComponent(property.title.rendered)}`}
                className="bg-gold text-forest px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-forest hover:text-gold transition-all text-center flex-grow"
              >
                Book Inspection
              </Link>
              <a 
                href={`tel:08020902599`}
                className="border border-forest text-forest px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-forest/5 transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call Consultant
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
