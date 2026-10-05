"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const SERVICES = [
  {
    id: 1,
    title: "Residential Properties",
    image: "/images/service-bg.jpg",
    desc: "Handpicked, architecturally striking villas in the most desirable locations. Each property offers privacy, sophistication, and world-class amenities.",
    href: "/services/residential-properties"
  },
  {
    id: 2,
    title: "Commercial Offices",
    image: "/images/service-office.jpg",
    desc: "Premium Grade-A office spaces designed for modern enterprises. Elevate your corporate presence with prime locations and state-of-the-art facilities.",
    href: "/services/commercial-offices"
  },
  {
    id: 3,
    title: "Lands & Farmlands",
    image: "/images/service-land.jpg",
    desc: "Exclusive sprawling plots and fertile agricultural lands. Perfect for visionary investments, bespoke estates, or sustainable eco-retreats.",
    href: "/services/lands-and-farmlands"
  },
  {
    id: 4,
    title: "Furniture Rentals",
    image: "/images/service-furniture.jpg",
    desc: "High-end ergonomic office furniture available for flexible rental. Transform your workspace instantly with our curated contemporary collections.",
    href: "/services/furniture-rentals"
  }
];

const BG_SLICES = 15;
const CARD_SLICES = 8;

const SlicedImage = ({ src, slicesCount, delayFactor = 0.05, duration = 0.8 }: { src: string, slicesCount: number, delayFactor?: number, duration?: number }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div key={src} className="absolute inset-0 w-full h-full" style={{ perspective: '1200px' }}>
        {Array.from({ length: slicesCount }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full overflow-hidden"
            style={{
              height: `calc(${100 / slicesCount}% + 1px)`,
              top: `${(i * 100) / slicesCount}%`,
              transformStyle: 'preserve-3d',
            }}
            // Shrink on Y to create gaps ("break into lines"), then rotate together upwards
            initial={{ rotateX: 90, opacity: 0, scaleY: 0.85 }}
            animate={{ rotateX: 0, opacity: 1, scaleY: 1 }}
            exit={{ rotateX: -90, opacity: 0, scaleY: 0.85 }}
            transition={{
              duration: 1.2,
              delay: 0, // No stagger! All lines flip at the exact same time
              ease: "easeInOut",
            }}
          >
            <img
              src={src}
              alt=""
              className="absolute left-0 w-full object-cover"
              style={{
                height: `${slicesCount * 100}%`,
                top: `-${i * 100}%`,
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

import ScrollReveal from "./ScrollReveal";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % SERVICES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const activeService = SERVICES[activeIndex];

  return (
    <section className="w-full bg-stone-50 font-sans relative overflow-hidden">
      
      {/* Top Heading */}
      <ScrollReveal yOffset={40}>
        <div className="pt-8 pb-8 md:pb-12 text-center px-4 relative z-20 bg-stone-50">
          <p className="text-[11px] font-bold text-slate-500 tracking-widest uppercase mb-4">OUR SERVICES</p>
          <h2 className="text-2xl md:text-5xl lg:text-5xl font-bold uppercase tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight mb-4 px-2">
            Smarter Real Estate. <br className="hidden md:block" /> Zero Brokerage.
          </h2>
          <h6 className="text-sm md:text-base text-slate-600 font-medium max-w-2xl mx-auto">
            Premium properties, verified land deals, and furnished spaces—delivered without middleman fees.
          </h6>
        </div>
      </ScrollReveal>

      {/* Main Banner Area */}
      <div className="relative w-full h-screen min-h-[550px] sm:min-h-[700px] md:min-h-[800px] overflow-hidden bg-black">
        
        {/* Background Sliced Transition */}
        <div className="absolute inset-0 z-0">
          <SlicedImage src={activeService.image} slicesCount={BG_SLICES} delayFactor={0.06} />
        </div>
        
        {/* Dark Overlay to make text pop */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>



        {/* Center Card */}
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#d8cca3] w-[92%] max-w-[460px] py-8 md:py-10 px-5 sm:px-10 flex flex-col items-center shadow-2xl z-20 rounded-sm">
          
          <div className="text-[11px] font-medium tracking-[0.3em] text-slate-700 mb-6 flex items-center gap-4">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
              >
                0{activeIndex + 1}
              </motion.span>
            </AnimatePresence>
            <div className="w-8 h-[1px] bg-slate-400"></div>
            <span>0{SERVICES.length}</span>
          </div>
          
          <div className="overflow-hidden mb-8 min-h-[48px] sm:h-12 flex items-center justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.h3 
                key={activeService.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-4xl font-bold text-slate-900 text-center tracking-tight leading-tight"
              >
                {activeService.title}
              </motion.h3>
            </AnimatePresence>
          </div>
          
          {/* Card Image (Slide Up from Bottom) */}
          <div className="w-full mb-8 relative aspect-[16/10] overflow-hidden shadow-lg bg-black/10">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={activeService.image}
                src={activeService.image}
                alt={activeService.title}
                // New image slides up from 100% Y
                initial={{ y: "100%", zIndex: 10 }}
                animate={{ y: "0%", zIndex: 10 }}
                // Old image stays in place underneath
                exit={{ y: "0%", zIndex: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
          
          <p className="text-[12px] text-slate-700 leading-relaxed text-center font-medium mb-10 px-2 min-h-[60px]">
            {activeService.desc}
          </p>
          
          <Link 
            href={activeService.href}
            className="border border-slate-900 text-slate-900 px-8 py-3 rounded-[4px] text-[12px] font-bold transition-all hover:bg-slate-900 hover:text-[#d8cca3] flex items-center gap-3"
          >
            Discover More 
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;



