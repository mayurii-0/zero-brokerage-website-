"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const SLIDES = [
  {
    id: 1,
    tag: "FLEXIBLE LIVING",
    title: "Fully Furnished Urban Stay",
    desc: "A stylish furnished home designed for comfortable, flexible city living.",
    price: "₹45K / mo • 2 BHK • Mumbai",
    image: "/images/urban-stay.jpg",
    cta: "View Property →",
    href: "/properties#properties-rent"
  },
  {
    id: 2,
    tag: "COMMERCIAL SPOTLIGHT",
    title: "Business Ready Workspace",
    desc: "Fully furnished workspace designed for teams ready to move in and get started.",
    price: "₹1.25L / mo • 20 Seats • Pune",
    image: "/images/business-workspace.jpg",
    cta: "Explore Listing →",
    href: "/properties#properties-commercial"
  },
  {
    id: 3,
    tag: "NEWLY LISTED",
    title: "Modern City Residence",
    desc: "Freshly listed 3 BHK residence with contemporary interiors, natural light, and premium amenities.",
    price: "₹1.85 Cr • 3 BHK • Indore",
    image: "/images/modern-residence.jpg",
    cta: "Explore Listing →",
    href: "/properties#properties-buy"
  },
  {
    id: 4,
    tag: "INVESTMENT OPPORTUNITY",
    title: "Greenfield Land Parcel",
    desc: "Well-connected land parcel offering space for future development and long-term plans.",
    price: "₹85L • 1.5 Acres • Indore",
    image: "/images/greenfield-land.jpg",
    cta: "Explore Opportunity →",
    href: "/properties#properties-lands"
  }
];

const AnimatedSpotlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  const slide = SLIDES[currentIndex];

  return (
    <div className="w-full relative overflow-hidden py-6 sm:py-10 lg:py-24 min-h-[auto] lg:min-h-[600px] flex flex-col items-center justify-center">
      
      {/* Blurred Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img src={slide.image} className="w-full h-full object-cover opacity-30" alt="bg" />
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
      </AnimatePresence>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-8 lg:gap-16">
        
        {/* Left Text */}
        <div className="w-full lg:w-1/3 text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[10px] font-bold text-[#1ebbbb] uppercase tracking-widest mb-2 sm:mb-4">
                {slide.tag}
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-3 sm:mb-5">
                {slide.title}
              </h2>
              <p className="text-slate-100 text-sm md:text-base leading-relaxed max-w-sm">
                {slide.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Center Image - 3D Cube */}
        <div className="w-full lg:w-1/3 flex justify-center py-2 sm:py-0" style={{ perspective: '1200px' }}>
          <motion.div
            className="relative w-[300px] h-[400px] scale-[0.6] sm:scale-100 origin-center -my-20 sm:my-0"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateY: currentIndex * -90 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {SLIDES.map((s, index) => {
              // Map index to rotation: 0->0, 1->90, 2->180, 3->-90
              let rotateY = 0;
              if (index === 1) rotateY = 90;
              if (index === 2) rotateY = 180;
              if (index === 3) rotateY = -90;

              return (
                <div 
                  key={s.id}
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
                  style={{ 
                    transform: `rotateY(${rotateY}deg) translateZ(150px)`,
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Details */}
        <div className="w-full lg:w-1/3 text-left flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-4 sm:mb-8">
                {slide.price.split('•').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part.trim()} 
                    {i < arr.length - 1 && <span className="mx-2 text-slate-400 font-normal">•</span>}
                  </React.Fragment>
                ))}
              </h3>
              
              <Link href={slide.href} className="bg-[#1ebbbb] hover:bg-[#159a9a] text-white px-4 py-2.5 md:px-6 md:py-3.5 rounded-xl font-semibold text-xs md:text-sm flex items-center gap-2 transition-all shadow-lg w-max">
                {slide.cta || "Unlock Listing Details"}
                {!(slide.cta && slide.cta.includes('→')) && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 ml-1">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                )}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default AnimatedSpotlight;


