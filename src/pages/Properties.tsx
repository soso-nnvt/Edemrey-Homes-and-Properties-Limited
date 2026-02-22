import { motion } from 'motion/react';
import { MapPin, Ruler, ShieldCheck, PlayCircle, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { BRAND_ASSETS } from '../constants';

const properties = [
  {
    id: 1,
    name: "Mowe Golf Town",
    location: "Mowe Corridor, Ogun State",
    price: "₦7,500,000",
    preLaunch: "₦12,500,000",
    status: "Pre-Launch Pricing",
    size: "500 SQM",
    image: BRAND_ASSETS.PROPERTIES[0],
    highlight: true
  },
  {
    id: 2,
    name: "Lekki Heritage Estate",
    location: "Ibeju-Lekki, Lagos",
    price: "₦15,000,000",
    status: "Black Friday Deal",
    size: "600 SQM",
    image: BRAND_ASSETS.PROPERTIES[1],
    highlight: false
  },
  {
    id: 3,
    name: "The Palms Residence",
    location: "Epe, Lagos",
    price: "₦4,500,000",
    status: "Sold Out",
    size: "500 SQM",
    image: BRAND_ASSETS.PROPERTIES[2],
    highlight: false
  }
];

export default function Properties() {
  return (
    <div className="pt-32 bg-bone">
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

      {/* Highlight Project: Mowe Golf Town */}
      <section className="py-24 px-6 bg-forest text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="bg-gold text-forest px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold mb-6 inline-block">
                Flagship Project
              </span>
              <h2 className="mb-8 max-w-xl">MOWE GOLF TOWN</h2>
              <p className="text-bone/70 text-lg leading-relaxed mb-10">
                A masterpiece of urban planning. Mowe Golf Town offers a unique blend of luxury living and strategic investment. Located in the heart of the Mowe expansion corridor, this estate is poised for unprecedented growth.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <p className="text-bone/40 text-xs uppercase tracking-widest mb-2">Entry Point</p>
                  <p className="text-gold font-serif text-3xl">₦7.5M</p>
                </div>
                <div>
                  <p className="text-bone/40 text-xs uppercase tracking-widest mb-2">Pre-Launch Value</p>
                  <p className="text-white font-serif text-3xl">₦12.5M</p>
                </div>
              </div>

              <button className="bg-gold text-forest px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-3">
                Download Brochure
                <ArrowRight size={18} />
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/20"
            >
              <img 
                src={BRAND_ASSETS.PROPERTIES[3]} 
                alt="Mowe Golf Town Render" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-forest/20 flex items-center justify-center group cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center text-forest group-hover:scale-110 transition-transform">
                  <PlayCircle size={40} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {properties.map((prop, idx) => (
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
                    src={prop.image} 
                    alt={prop.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={cn(
                      "px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold shadow-lg",
                      prop.status === 'Sold Out' ? "bg-red-500 text-white" : "bg-gold text-forest"
                    )}>
                      {prop.status}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-forest mb-2">{prop.name}</h3>
                  <div className="flex items-center gap-2 text-forest/60 text-sm mb-6">
                    <MapPin size={14} className="text-gold" />
                    {prop.location}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8 py-4 border-y border-forest/5">
                    <div className="flex items-center gap-2">
                      <Ruler size={14} className="text-gold" />
                      <span className="text-xs uppercase tracking-widest font-medium">{prop.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-gold" />
                      <span className="text-xs uppercase tracking-widest font-medium">C of O</span>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-forest/40">Investment</p>
                      <p className="text-2xl font-serif text-forest">{prop.price}</p>
                    </div>
                    <button className="bg-forest text-gold w-12 h-12 rounded-full flex items-center justify-center hover:bg-gold hover:text-forest transition-all">
                      <ArrowRight size={20} />
                    </button>
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
