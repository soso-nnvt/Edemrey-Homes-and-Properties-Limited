import { useState } from 'react';
import { motion } from 'motion/react';

export default function ROICalculator() {
  const [investment, setInvestment] = useState(7500000);
  
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Simple projection: 150% growth over 5 years
  const projectedValue = investment * 2.5;

  return (
    <div className="bg-forest p-8 md:p-12 rounded-2xl shadow-2xl border border-gold/20">
      <h3 className="text-gold font-serif text-3xl mb-2">Trace Your Growth</h3>
      <p className="text-bone/60 mb-12 text-sm uppercase tracking-widest">Project your land banking returns</p>

      <div className="space-y-12">
        <div>
          <div className="flex justify-between mb-4">
            <span className="text-bone/80 text-sm uppercase tracking-widest">Initial Investment</span>
            <span className="text-gold font-serif text-2xl">{formatCurrency(investment)}</span>
          </div>
          <input
            type="range"
            min="1000000"
            max="50000000"
            step="500000"
            value={investment}
            onChange={(e) => setInvestment(parseInt(e.target.value))}
            className="w-full h-2 bg-bone/20 rounded-lg appearance-none cursor-pointer accent-gold"
          />
          <div className="flex justify-between mt-2 text-[10px] text-bone/40 uppercase tracking-widest">
            <span>₦1M</span>
            <span>₦50M</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
          <div>
            <p className="text-bone/40 text-xs uppercase tracking-widest mb-2">Estimated Value (5 Years)</p>
            <motion.p 
              key={projectedValue}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white font-serif text-4xl"
            >
              {formatCurrency(projectedValue)}
            </motion.p>
          </div>
          <div>
            <p className="text-bone/40 text-xs uppercase tracking-widest mb-2">Projected ROI</p>
            <p className="text-emerald-400 font-serif text-4xl">+150%</p>
          </div>
        </div>

        <p className="text-[10px] text-bone/30 italic">
          *Projections are based on historical data for Mowe and Ibeju-Lekki corridors. Real estate values may vary.
        </p>
      </div>
    </div>
  );
}
