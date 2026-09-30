"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
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
            className="text-4xl md:text-5xl lg:text-6xl font-[800] text-white tracking-tight leading-[1.1] mb-6 uppercase"
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
            className="text-base md:text-lg text-white/90 font-medium max-w-2xl mb-10 leading-relaxed"
          >
            Discover breathtaking villas, timeless interiors, and stunning exteriors — all curated for those who desire more than just a home.
          </motion.p>
        </div>

        {/* CTA Button */}
        <div className="overflow-hidden pb-4">
          <motion.button 
            onClick={() => setIsModalOpen(true)}
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white hover:bg-slate-50 text-[#0F172A] rounded-full py-2 pr-2 pl-6 font-bold text-sm tracking-wide transition-all shadow-xl flex items-center gap-4"
          >
            CONTACT US
            <div className="w-10 h-10 bg-[#1ebbbb] rounded-full flex items-center justify-center text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </motion.button>
        </div>

      </div>

      {/* Inquiry Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white text-slate-900 rounded-3xl p-8 w-full max-w-md shadow-2xl relative text-left"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <h2 className="text-2xl font-black mb-2 uppercase tracking-tight text-[#0F172A]">Inquire Now</h2>
              <p className="text-sm text-slate-500 mb-6">Enter your details and our team will get back to you shortly.</p>
              
              <form 
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Your inquiry has been sent.");
                  setIsModalOpen(false);
                }}
              >
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="you@example.com" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1ebbbb] focus:ring-1 focus:ring-[#1ebbbb] transition-all" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="How can we help you?" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1ebbbb] focus:ring-1 focus:ring-[#1ebbbb] transition-all resize-none" 
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-[#1ebbbb] hover:bg-[#159a9a] text-white font-bold py-3.5 rounded-xl uppercase tracking-wider text-sm transition-colors mt-2"
                >
                  Send Inquiry
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
