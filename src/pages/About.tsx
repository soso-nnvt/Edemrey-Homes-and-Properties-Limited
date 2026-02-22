import { motion } from 'motion/react';
import { MapPin, TrendingUp, Users, Award } from 'lucide-react';
import SEO from '../components/SEO';
import { BRAND_ASSETS, BUSINESS_INFO } from '../constants';

export default function About() {
  return (
    <div className="pt-32 bg-bone">
      <SEO 
        title="About Our Visionary Team"
        description="Learn about Edemrey Homes & Properties Limited. Our mission is to democratize land banking in Nigeria and cultivate legacies for all investors."
        path="/about"
        image={BRAND_ASSETS.VISIONARY}
      />
      {/* Chairman's Statement */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-full border-8 border-gold p-4 relative z-10 overflow-hidden">
                <img 
                  src={BRAND_ASSETS.VISIONARY} 
                  alt="Chairman" 
                  className="w-full h-full object-cover object-top rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-forest/5 rounded-full blur-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">Our Visionary</p>
              <h2 className="text-4xl md:text-6xl font-serif text-forest mb-8 leading-tight">A Word from our Visionary</h2>
              <div className="space-y-6 text-forest/80 leading-relaxed text-lg italic font-serif">
                <p>
                  "Real estate is not just about bricks and mortar; it's about the soil that sustains generations. At Edemrey Homes, we believe that every Nigerian deserves a stake in the prosperity of our land."
                </p>
                <p>
                  "Our mission is to democratize land banking, making high-yield investments accessible to the young professional and the seasoned investor alike. We don't just sell plots; we cultivate legacies."
                </p>
              </div>
              <div className="mt-12">
                <p className="text-forest font-bold uppercase tracking-widest text-sm">The Chairman</p>
                <p className="text-gold text-xs uppercase tracking-widest">Edemrey Homes & Properties Ltd.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-24 bg-forest text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6">The Netnovate Footprint</h2>
            <p className="text-bone/60 max-w-2xl mx-auto uppercase tracking-widest text-sm">Strategic locations across Lagos & Ogun State</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-8">
              <div className="p-6 border border-gold/20 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="text-gold" />
                  <h3 className="text-xl font-serif">Ibeju-Lekki</h3>
                </div>
                <p className="text-bone/60 text-sm mb-4">The new economic center of Lagos, home to the Dangote Refinery and Deep Sea Port.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-gold">Growth Potential</span>
                  <span className="text-emerald-400 font-serif text-xl">+200%</span>
                </div>
              </div>

              <div className="p-6 border border-gold/20 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="text-gold" />
                  <h3 className="text-xl font-serif">Mowe Corridor</h3>
                </div>
                <p className="text-bone/60 text-sm mb-4">Rapidly developing residential hub with excellent connectivity to Lagos and Ibadan.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-gold">Growth Potential</span>
                  <span className="text-emerald-400 font-serif text-xl">+120%</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 relative aspect-video bg-bone/5 rounded-3xl overflow-hidden border border-gold/10 flex items-center justify-center">
              {/* Simplified Map Visualization */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat" />
              <div className="relative z-10 text-center">
                <div className="w-4 h-4 bg-gold rounded-full animate-ping absolute top-1/3 left-1/4" />
                <div className="w-4 h-4 bg-gold rounded-full absolute top-1/3 left-1/4" />
                
                <div className="w-4 h-4 bg-gold rounded-full animate-ping absolute bottom-1/4 right-1/3" />
                <div className="w-4 h-4 bg-gold rounded-full absolute bottom-1/4 right-1/3" />
                
                <p className="text-gold font-serif text-2xl italic">Interactive Map View</p>
                <p className="text-bone/40 text-xs uppercase tracking-widest mt-2">Click hotspots to explore data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Pulse */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">Community Pulse</p>
              <h2 className="text-4xl md:text-6xl font-serif text-forest">Client Success Stories</h2>
            </div>
            <button className="text-forest font-bold uppercase tracking-widest text-sm border-b-2 border-gold pb-2 hover:text-gold transition-colors">
              View All Stories
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gold/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={`https://picsum.photos/seed/client${i}/100/100`} 
                    alt="Client" 
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif text-forest">Investor {i}</h4>
                    <p className="text-gold text-[10px] uppercase tracking-widest">Mowe Golf Town Owner</p>
                  </div>
                </div>
                <p className="text-forest/70 italic leading-relaxed mb-6">
                  "Edemrey Homes made my first land banking experience seamless. From the first inspection to receiving my deed, the transparency was unmatched."
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
