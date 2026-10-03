"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center px-4 mt-40 sm:mt-56">
        
        {/* Main Headline */}
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-[800] text-white tracking-tight leading-[1.1] mb-4 md:mb-6 uppercase"
          >
            Live the Art <br />
            Of Luxury.
          </motion.h1>
        </div>

        {/* Subtitle */}
        <div className="overflow-hidden">
          <motion.p 
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-lg text-white/90 font-medium max-w-2xl mb-8 md:mb-10 leading-relaxed px-2"
          >
            Discover premium properties, trusted listings, and exceptional spaces — all in one place, designed to make your property journey simpler.
          </motion.p>
        </div>

        {/* CTA Button */}
        <div className="overflow-hidden pb-4">
          <motion.a 
            href="#contact"
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white hover:bg-slate-50 text-[#0F172A] rounded-full py-1.5 pr-1.5 pl-4 md:py-2 md:pr-2 md:pl-6 font-bold text-xs md:text-sm tracking-wide transition-all shadow-xl inline-flex items-center gap-3 md:gap-4 cursor-pointer"
          >
            CONTACT US
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#1ebbbb] rounded-full flex items-center justify-center text-white shrink-0">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default Hero;

