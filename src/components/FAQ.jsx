import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Radio } from 'lucide-react';

const faqs = [
  {
    q: "When and where will HackX be held?",
    a: "HackX 4.0 will be held on February 28 - March 1, 2026 at NMIMS University, Navi Mumbai. The event starts at 8:30 AM on Day 1 with reporting and concludes at 4:00 PM on Day 2 with the closing ceremony."
  },
  {
    q: "Who can participate in HackX?",
    a: "College students across India from any discipline are welcome to participate. Whether you are a developer, designer, or entrepreneur, there is a track for you."
  },
  {
    q: "How many members can be in a team?",
    a: "Teams must consist of 2-4 members. Equal contribution from all team members is mandatory."
  },
  {
    q: "Is there a registration fee?",
    a: "Yes, there is a refundable registration fee of ₹600 per team required to confirm your slot."
  }
];

const FAQItem = ({ item, i, accentColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-8 border transition-all rounded-[32px] text-left group
          ${isOpen ? 'bg-zinc-900 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.2)]' : 'bg-zinc-900/50 border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-900'}`}
      >
        <div className="flex items-center space-x-6">
          <motion.span 
            style={{ color: accentColor }}
            className="font-black italic text-xl"
          >
            0{i+1}
          </motion.span>
          <span className="font-bold text-sm uppercase tracking-widest text-white">{item.q}</span>
        </div>
        <motion.div style={{ color: accentColor }}>
          <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-10 text-sm text-zinc-400 leading-relaxed border-x border-b border-zinc-800 rounded-b-[32px] bg-zinc-900/30">
              <div className="flex gap-4">
                <motion.div style={{ backgroundColor: accentColor }} className="w-1 h-auto opacity-50 rounded-full" />
                <p>{item.a}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const { scrollYProgress } = useScroll();

  // Transitions: 
  // Background: White -> Black
  // Accents: Orange (#f97316) -> Blue (#3b82f6)
  const backgroundColor = useTransform(scrollYProgress, [0.7, 0.8], ["#ffffff", "#000000"]);
  const accentColor = useTransform(scrollYProgress, [0.7, 0.8], ["#f97316", "#3b82f6"]);
  const textColor = useTransform(scrollYProgress, [0.7, 0.8], ["#000000", "#ffffff"]);

  return (
    <motion.section 
      id="faqs" 
      style={{ backgroundColor }}
      className="py-32 px-6 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center space-x-3 mb-4"
          >
            <motion.div style={{ color: accentColor }}>
                <Radio className="animate-pulse" size={20} />
            </motion.div>
            <motion.h4 style={{ color: accentColor }} className="font-black uppercase tracking-[0.3em] text-xs">
              Pit Radio // FAQ
            </motion.h4>
          </motion.div>
          
          <motion.h2 
            style={{ color: textColor }}
            className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase"
          >
            The <motion.span style={{ color: accentColor }}>Briefing</motion.span>
          </motion.h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} item={faq} i={i} accentColor={accentColor} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
            className="mt-20 p-12 rounded-[50px] bg-zinc-900 text-center relative overflow-hidden group border border-zinc-800"
        >
           <motion.div 
             style={{ backgroundColor: accentColor }}
             className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" 
           />
           
           <div className="relative z-10">
             <h3 className="text-3xl font-black italic mb-6 text-white uppercase tracking-tighter">
               Still in the Pits?
             </h3>
             <button className="px-12 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform shadow-xl">
               Get In Touch
             </button>
           </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQ;