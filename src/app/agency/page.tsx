"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FEATURES = [
  {
    id: "01",
    title: "PROPERTY LISTINGS",
    desc: "Add, manage, and showcase residential, commercial, and land properties with complete listing details.",
    points: ["Upload high-res images and 3D tours", "Set detailed property specifications", "Instant visibility to verified seekers"]
  },
  {
    id: "02",
    title: "BULK INVENTORY",
    desc: "Upload and manage large property inventories efficiently with bulk listing tools and streamlined management.",
    points: ["One-click CSV/Excel bulk uploads", "Automated data validation", "Manage hundreds of units simultaneously"]
  },
  {
    id: "03",
    title: "AGENCY & TEAM MANAGEMENT",
    desc: "Manage your agency, invite agents and brokers, assign access, and keep your entire team organized.",
    points: ["Role-based access control (RBAC)", "Track individual agent performance", "Internal team communication tools"]
  },
  {
    id: "04",
    title: "LEAD MANAGEMENT",
    desc: "Capture, organize, and manage property leads to help your team follow up and convert opportunities.",
    points: ["Real-time lead notifications", "Automated follow-up reminders", "Detailed lead interaction history"]
  },
  {
    id: "05",
    title: "ADS & BOOSTS",
    desc: "Promote your properties with advertising and boosting options designed to increase visibility and reach.",
    points: ["Targeted localized ad campaigns", "Priority placement in search results", "Performance tracking and analytics"]
  },
  {
    id: "06",
    title: "SMART CRM DASHBOARD",
    desc: "Track leads, manage follow-ups, and get detailed analytics on your property views and engagement directly from a centralized dashboard.",
    points: ["Visual sales pipeline", "Comprehensive conversion metrics", "Customizable reporting widgets"]
  },
  {
    id: "07",
    title: "VERIFIED PREMIUM LEADS",
    desc: "Stop wasting time on dead ends. Get access to OTP-verified, high-intent property seekers looking exactly for your inventory.",
    points: ["100% phone-verified contacts", "Pre-qualified buyer intent", "Direct WhatsApp integration"]
  }
];

export default function AgencyPage() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const activeFeature = FEATURES[activeFeatureIndex];

  return (
    <main className="pt-28 md:pt-40 lg:pt-48 min-h-screen flex flex-col items-center px-4">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <p className="text-[11px] font-bold text-slate-500 tracking-widest uppercase mb-3 md:mb-4">PARTNER WITH US</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-slate-900 mb-4 md:mb-6 px-2">
            For Agency & Builders
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-[15px] md:text-lg px-2">
            Empower your real estate agency with our cutting-edge tools. Where excellence is standard.
          </p>
        </div>
        
        {/* Interactive Hover Features Section */}
        <div className="bg-white/40 backdrop-blur-xl rounded-[30px] md:rounded-[40px] p-4 md:p-8 lg:p-12 shadow-xl border border-white/60 flex flex-col lg:flex-row gap-6 lg:gap-20 mb-12 md:mb-32 relative z-10">
          
          {/* Left Side: Headings List */}
          <div className="w-full lg:w-5/12 flex flex-col space-y-2 z-20 relative">
            {FEATURES.map((feature, idx) => {
              const isActive = activeFeatureIndex === idx;
              return (
                <div key={feature.id} className="flex flex-col">
                  {/* Heading Tab */}
                  <div 
                    onClick={() => setActiveFeatureIndex(idx)}
                    onMouseEnter={() => {
                      // On mobile we might rely on click, but on desktop hover works
                      if (window.innerWidth >= 1024) {
                        setActiveFeatureIndex(idx);
                      }
                    }}
                    className={`cursor-pointer py-4 lg:py-6 px-4 lg:px-8 rounded-xl lg:rounded-2xl transition-all duration-300 border-l-4 ${
                      isActive 
                        ? 'bg-white shadow-md lg:shadow-xl border-[#1ebbbb] lg:scale-[1.02] lg:-ml-2' 
                        : 'bg-transparent border-transparent hover:bg-white/50 text-slate-400 hover:text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-4 lg:gap-6">
                      <span className={`font-mono text-xs lg:text-base font-bold transition-colors ${isActive ? 'text-[#1ebbbb]' : 'text-slate-300'}`}>
                        {feature.id}
                      </span>
                      <h3 className={`text-[14px] sm:text-[15px] lg:text-xl font-bold uppercase tracking-wide transition-colors ${isActive ? 'text-slate-900' : 'text-current'}`}>
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  {/* Mobile Accordion Content (Visible only on mobile/tablet) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden overflow-hidden"
                      >
                        <div className="p-5 bg-white rounded-xl mt-2 mb-3 shadow-sm border border-slate-100 mx-2">
                          <p className="text-[13px] sm:text-sm text-slate-700 leading-relaxed font-medium mb-4">
                            {feature.desc}
                          </p>
                          <ul className="space-y-3">
                            {feature.points.map((point, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <svg className="w-4 h-4 shrink-0 mt-0.5 text-[#1ebbbb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="text-slate-600 text-[12px] sm:text-[13px] font-medium leading-snug">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Side: Details Display (Desktop Only) */}
          <div className="hidden lg:flex w-full lg:w-7/12 relative min-h-[400px] md:min-h-[500px] flex-col justify-start pt-4 md:pt-8">
              
              {/* Background decorative element */}
              <div className="absolute -right-4 md:-right-10 -top-10 opacity-30 pointer-events-none z-0">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={`bg-${activeFeature.id}`}
                    initial={{ scale: 0.5, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-[250px] md:text-[300px] font-black tracking-tighter text-slate-300"
                  >
                    {activeFeature.id}
                  </motion.div>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative z-20 h-full flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-6 md:mb-8">
                    <div className="w-12 h-12 rounded-full bg-[#1ebbbb]/10 text-[#1ebbbb] flex items-center justify-center font-bold text-xl">
                      {activeFeature.id}
                    </div>
                    <div className="h-[2px] w-12 bg-[#1ebbbb]/30"></div>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-tight leading-tight">
                    {activeFeature.title}
                  </h2>
                  
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium max-w-xl mb-8">
                    {activeFeature.desc}
                  </p>
                  
                  {/* Pointers / Bullet points */}
                  <ul className="space-y-4 mb-10 max-w-xl">
                    {activeFeature.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 shrink-0 mt-0.5 text-[#1ebbbb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-slate-600 font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
              
          </div>
          
        </div>
        
        {/* CTA Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 text-center mb-12 md:mb-20 shadow-xl mt-4 md:mt-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-slate-900/80"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 leading-tight">Ready to scale your real estate business?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-lg leading-relaxed px-2">
              Join hundreds of agencies and builders who are leveraging our platform to grow their revenue.
            </p>
            <button className="px-6 py-3.5 md:px-8 md:py-4 bg-[#1ebbbb] text-white rounded-xl font-bold text-sm md:text-lg hover:bg-[#19a5a5] transition-colors shadow-lg tracking-wide">
              REGISTER
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
