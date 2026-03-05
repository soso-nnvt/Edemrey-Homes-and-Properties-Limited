import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const propertyName = searchParams.get('property');

  return (
    <div className="pt-32 bg-bone min-h-screen">
      <SEO 
        title="Contact Us - Start Your Land Banking Journey"
        description="Get in touch with Edemrey Homes. Visit our Lagos headquarters or call us to start your real estate investment journey in Nigeria."
        path="/contact"
      />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <p className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4">Direct Connection</p>
              <h1 className="text-forest mb-8 max-w-xl">Start Your Journey</h1>
              <p className="text-forest/60 text-lg leading-relaxed mb-12">
                Our consultants are ready to help you navigate the landscape of land banking. Whether you're a first-time investor or expanding your portfolio, we're here to cultivate your prosperity.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center text-gold shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-forest text-xl mb-1">Lagos Headquarters</h4>
                    <p className="text-forest/60 leading-relaxed">
                      {BUSINESS_INFO.ADDRESS}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center text-gold shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-forest text-xl mb-1">Call Us</h4>
                    <p className="text-forest/60">{BUSINESS_INFO.PHONE}</p>
                    <p className="text-forest/60">+234 (0) 700 EDEMREY</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center text-gold shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-forest text-xl mb-1">Email Us</h4>
                    <p className="text-forest/60">{BUSINESS_INFO.EMAIL}</p>
                    <p className="text-forest/60">support@edemreyhomes.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gold/10"
            >
              <h3 className="text-3xl font-serif text-forest mb-8">Request a Site Tour</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-forest/60 font-bold">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-bone border border-forest/5 px-6 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-forest/60 font-bold">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-bone border border-forest/5 px-6 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-forest/60 font-bold">Preferred Location</label>
                    <select 
                      className="w-full bg-bone border border-forest/5 px-6 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors appearance-none"
                      defaultValue={propertyName || "Mowe Golf Town"}
                    >
                      <option>Mowe Golf Town</option>
                      <option>Ibeju-Lekki Heritage</option>
                      <option>Epe Palms</option>
                      {propertyName && !["Mowe Golf Town", "Ibeju-Lekki Heritage", "Epe Palms"].includes(propertyName) && (
                        <option>{propertyName}</option>
                      )}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-forest/60 font-bold">Budget Range</label>
                    <select className="w-full bg-bone border border-forest/5 px-6 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors appearance-none">
                      <option>₦5M - ₦10M</option>
                      <option>₦10M - ₦25M</option>
                      <option>₦25M - ₦50M</option>
                      <option>₦50M+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-forest/60 font-bold">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your investment goals..."
                    defaultValue={propertyName ? `I am interested in ${propertyName}. Please provide more details.` : ""}
                    className="w-full bg-bone border border-forest/5 px-6 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-forest text-gold py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-gold hover:text-forest transition-all flex items-center justify-center gap-3">
                  Send Request
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="h-[500px] w-full bg-forest/5 relative">
        <div className="absolute inset-0 flex items-center justify-center text-forest/20">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4 opacity-20" />
            <p className="font-serif text-2xl italic">Interactive Map Embed</p>
            <p className="text-[10px] uppercase tracking-widest mt-2">Custom Gold Marker: Lagos HQ</p>
          </div>
        </div>
        {/* Real Google Maps Embed would go here */}
        <iframe 
          title="Lagos Headquarters"
          className="w-full h-full grayscale contrast-125 opacity-60"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126846.6111003771!2d3.33624!3d6.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a3da5723d9!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
