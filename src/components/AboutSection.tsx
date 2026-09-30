"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const ABOUT_SLIDES = [
  {
    id: "01",
    tag: "[ N.01 ]",
    name: "WHO WE ARE",
    location: "Key focus: Homes • Commercial Spaces • Land • Flexible Solutions",
    headline: "Connecting People With Better Spaces.",
    desc: "We bring property seekers, owners, agents, brokers, and agencies together through one connected real-estate platform.",
    bgImage: "/images/about-1-bg.jpg",
    mainImage: "/images/about-1-main.jpg"
  },
  {
    id: "02",
    tag: "[ N.02 ]",
    name: "OUR NETWORK",
    location: "Key focus: Customers • Owners • Agents • Brokers • Agencies",
    headline: "One Platform. Multiple Possibilities.",
    desc: "A connected ecosystem where customers, property owners, agents, brokers, and agencies can discover opportunities and build meaningful connections.",
    bgImage: "/images/about-2-bg.jpg",
    mainImage: "/images/about-2-main.jpg"
  },
  {
    id: "03",
    tag: "[ N.03 ]",
    name: "SMARTER DISCOVERY",
    location: "Key focus: Buy • Rent / Lease • Land • Furniture • Commercial",
    headline: "Find the Right Space, Smarter.",
    desc: "Explore properties through organized listings, smart filters, and multiple property categories—all designed to make discovery simpler.",
    bgImage: "/images/about-3-bg.jpg",
    mainImage: "/images/about-3-main.jpg"
  },
  {
    id: "04",
    tag: "[ N.04 ]",
    name: "BUILT TO GROW",
    location: "Key focus: Discover • Connect • Manage • Grow",
    headline: "Supporting Every Step Forward.",
    desc: "From discovering a property to managing opportunities, our platform helps users and real-estate businesses stay connected and move forward.",
    bgImage: "/images/about-4-main.jpg",
    mainImage: "/images/about-4-bg.jpg"
  }
];

import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ABOUT_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = ABOUT_SLIDES[activeIndex];

  return (
    <section className="w-full bg-stone-50 py-16 md:py-20 px-4 md:px-8">
      
      {/* Top Heading */}
      <ScrollReveal yOffset={40}>
        <div className="pb-12 md:pb-16 text-center px-4 relative z-10">
          <p className="text-[11px] font-bold text-slate-500 tracking-widest uppercase mb-4">About Us</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-slate-900 max-w-6xl mx-auto leading-tight mb-4">
            Redefining Real Estate Transactions.
          </h2>
          <h6 className="text-sm md:text-base text-slate-600 font-medium max-w-6xl mx-auto">
            Connecting property seekers, field brokers, and agencies on a single 0% brokerage platform.
          </h6>
        </div>
      </ScrollReveal>

      {/* Rounded Outer Card */}
      <div className="w-full max-w-7xl mx-auto rounded-[28px] md:rounded-[40px] overflow-hidden border border-white/10 bg-[#050505] text-white flex flex-col lg:flex-row min-h-[650px] shadow-2xl relative">
        
        {/* Left Side: Images */}
        <div className="w-full lg:w-1/2 relative h-[450px] lg:h-auto overflow-hidden bg-[#050505]">
          
          {/* Background Image (Same as main image, higher opacity) */}
          <div className="absolute inset-0">
            <AnimatePresence mode="popLayout">
              <motion.img 
                key={`bg-${slide.id}`}
                src={slide.bgImage} 
                alt="" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
          
          {/* Foreground Rectangle Image (Slides Up) */}
          <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`main-${slide.id}`}
                // Slide up completely from the bottom to center, then exit completely to top
                initial={{ opacity: 0, y: "150%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: "-150%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[85%] h-[45%] md:w-[75%] md:h-[40%] lg:w-[75%] lg:h-[40%] rounded-[24px] overflow-hidden shadow-2xl border border-white/10 bg-slate-900"
              >
                <img 
                  src={slide.mainImage} 
                  alt={slide.name} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between p-8 md:p-12 lg:p-16 relative z-20">
          
          {/* Top Bar: List & Big Number */}
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col gap-[5px] text-[10px] md:text-[11px] tracking-[0.15em] font-medium uppercase font-mono mt-2">
              {ABOUT_SLIDES.map((s, i) => {
                const isActive = i === activeIndex;
                return (
                  <div key={s.id} className="flex gap-3 items-center">
                    <span className={`${isActive ? 'text-white/60' : 'text-white/30'} min-w-[55px] whitespace-nowrap`}>
                      {s.tag}
                    </span> 
                    <span className={`${isActive ? 'text-white font-bold' : 'text-white/40'} whitespace-nowrap`}>
                      {s.name}
                    </span>
                  </div>
                );
              })}
            </div>
            
            <div className="overflow-hidden h-[90px] w-[100px] flex justify-end -mt-2">
              <AnimatePresence mode="popLayout">
                <motion.div 
                  key={slide.id}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[70px] md:text-[90px] font-medium tracking-tighter leading-none text-white absolute"
                >
                  {slide.id}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Center Content */}
          <div className="mt-14 lg:mt-0 flex flex-col justify-center flex-grow overflow-hidden relative">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-full"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 font-sans">
                  {slide.name}
                </h2>
                <h3 className="text-xl md:text-2xl text-[#d4c5b0] font-serif italic leading-tight mb-6 max-w-md">
                  {slide.headline}
                </h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed font-light max-w-md mb-8">
                  {slide.desc}
                </p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 max-w-sm">
                  <p className="text-[10px] font-bold text-white/40 tracking-widest uppercase mb-2">Key Focus</p>
                  <p className="text-xs md:text-sm text-white/90 font-medium leading-snug">
                    {slide.location.replace('Key focus: ', '')}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Link */}
          <div className="mt-10 lg:mt-0 w-full flex items-center gap-4">
            <Link href="/about" className="text-xs md:text-sm font-bold text-white/80 hover:text-white uppercase tracking-wider transition-colors whitespace-nowrap">
              More Details
            </Link>
            <div className="h-[1px] w-full bg-white/10"></div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default AboutSection;
