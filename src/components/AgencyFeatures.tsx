"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FEATURES = [
  { id: '01', title: 'PROPERTY LISTINGS', desc: 'Add, manage, and showcase residential, commercial, and land properties with complete listing details.' },
  { id: '02', title: 'BULK INVENTORY', desc: 'Upload and manage large property inventories efficiently with bulk listing tools and streamlined management.' },
  { id: '03', title: 'AGENCY & TEAM MANAGEMENT', desc: 'Manage your agency, invite agents and brokers, assign access, and keep your entire team organized.' },
  { id: '04', title: 'LEAD MANAGEMENT', desc: 'Capture, organize, and manage property leads to help your team follow up and convert opportunities.' },
  { id: '05', title: 'OFFICE & FURNITURE', desc: 'Discover office spaces and flexible furniture rental solutions for businesses, workspaces, and agencies.' },
  { id: '06', title: 'ADS & BOOSTS', desc: 'Promote your properties with advertising and boosting options designed to increase visibility and reach.' }
];



const AgencyFeatures = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const TOTAL_FEATURES = FEATURES.length; // 6

  // Auto-scroll logic: Slide 1 card at a time with 1 second pause (+0.8s transition)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  // Seamless loop trick: when we reach the duplicate first card,
  // wait for animation to finish, then instantly snap back to 0.
  useEffect(() => {
    if (currentSlide === TOTAL_FEATURES) {
      const snapTimer = setTimeout(() => {
        setIsTransitioning(false); // disable animation
        setCurrentSlide(0); // instant snap to true first slide
        
        // Re-enable animation for the next cycle
        setTimeout(() => setIsTransitioning(true), 50);
      }, 800); // Matches the framer-motion duration
      return () => clearTimeout(snapTimer);
    }
  }, [currentSlide]);

  const getTransform = () => {
    // 100% is the motion.div width (which is the padded viewport width).
    // We need to shift by 1 card + 1 gap = calc((100% + 2rem) / 3)
    return `calc(-${currentSlide} * (100% + 2rem) / 3)`;
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#e7ebe3] to-[#f4f6f1] pt-20 md:pt-24 overflow-hidden font-sans flex flex-col">
      <div className="w-full px-4 md:px-8 mb-12 md:mb-16 text-center">
        
        {/* Subtitle reveal */}
        <div className="overflow-hidden inline-block mb-4">
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11px] font-bold text-slate-600 tracking-widest uppercase"
          >
            FOR AGENCY
          </motion.p>
        </div>

        {/* Main Title reveal */}
        <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] uppercase tracking-tight max-w-4xl mx-auto flex flex-col items-center">
          <span className="overflow-hidden inline-block pb-1">
            <motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              WHERE EXCELLENCE
            </motion.span>
          </span>
          <span className="overflow-hidden inline-block pb-1 mt-1 md:mt-2">
            <motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              IS STANDARD.
            </motion.span>
          </span>
        </h2>
      </div>

      {/* Desktop Full-width Seamless Carousel */}
      <div className="hidden md:flex w-full relative overflow-hidden flex-col items-center px-8">
        <motion.div 
          className="flex w-full gap-8"
          animate={{ x: getTransform() }}
          transition={{ duration: isTransitioning ? 0.8 : 0, ease: "easeInOut" }}
        >
          {[...FEATURES, ...FEATURES.slice(0, 3)].map((feature, idx) => (
            <div 
              key={`${idx}-${feature.id}`} 
              className="shrink-0" 
              style={{ width: "calc((100% - 4rem) / 3)" }}
            >
              <div
                className="w-full h-full rounded-[24px] p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                           bg-gradient-to-b from-white via-white to-[#d6ded0]
                           hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start border border-white/70 relative"
              >
                <div className="text-[48px] font-medium text-slate-900 mb-10 leading-none">
                  {feature.id}
                </div>
                <h3 className="text-[22px] font-bold text-slate-900 mb-4 leading-snug uppercase">
                  {feature.title}
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed font-medium mt-auto">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Auto-Scrolling Carousel */}
      <div className="flex md:hidden w-full relative overflow-hidden flex-col items-start px-4 pb-12">
        <motion.div 
          className="flex w-max gap-4"
          animate={{ x: `calc(-${currentSlide} * (85vw + 1rem))` }}
          transition={{ duration: isTransitioning ? 0.8 : 0, ease: "easeInOut" }}
        >
          {[...FEATURES, ...FEATURES.slice(0, 3)].map((feature, idx) => (
            <div
              key={`mob-${idx}-${feature.id}`}
              className="w-[85vw] shrink-0 rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                         bg-gradient-to-b from-white via-white to-[#d6ded0]
                         flex flex-col justify-start border border-white/70 relative h-auto"
            >
              <div className="text-[36px] font-medium text-slate-900 mb-4 sm:mb-6 leading-none">
                {feature.id}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 sm:mb-4 leading-snug uppercase">
                {feature.title}
              </h3>
              <p className="text-[15px] text-slate-600 leading-relaxed font-medium mt-auto">
                {feature.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>



    </section>
  );
};

export default AgencyFeatures;
