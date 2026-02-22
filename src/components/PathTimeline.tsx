import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const milestones = [
  {
    title: "Discovery",
    description: "Uncover high-yield land banking opportunities in emerging economic corridors.",
    icon: "01"
  },
  {
    title: "Inspection",
    description: "Experience the terrain firsthand with our guided site tours and expert consultations.",
    icon: "02"
  },
  {
    title: "Acquisition",
    description: "Seamless documentation and transparent legal processing to secure your asset.",
    icon: "03"
  },
  {
    title: "Legacy",
    description: "Watch your investment mature as we cultivate prosperity for generations to come.",
    icon: "04"
  }
];

export default function PathTimeline() {
  return (
    <div className="relative py-20">
      {/* Vertical Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2 hidden md:block" />
      
      <div className="space-y-24">
        {milestones.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="flex-1 w-full md:px-12 text-center md:text-left">
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                <span className="text-gold font-serif text-6xl mb-4 opacity-20">{item.icon}</span>
                <h3 className="text-3xl font-serif text-forest mb-4">{item.title}</h3>
                <p className="text-forest/70 leading-relaxed max-w-sm mx-auto md:mx-0">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-forest border-4 border-gold flex items-center justify-center text-gold shadow-xl">
                <CheckCircle2 size={20} />
              </div>
            </div>

            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
