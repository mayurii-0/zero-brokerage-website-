"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobilePropertiesOpen, setIsMobilePropertiesOpen] = useState(false);

  const handleTabClick = (tabName: string) => {
    window.dispatchEvent(new CustomEvent('switchTab', { detail: tabName }));
  };

  return (
    <div className="absolute top-0 inset-x-0 z-50 pt-4 sm:pt-6 px-4 sm:px-6 w-full font-sans pointer-events-none animate-slide-down">
      <nav className="w-full sm:w-[96%] max-w-[1500px] mx-auto pointer-events-auto bg-white shadow-xl shadow-black/5 border border-slate-100 rounded-2xl sm:rounded-full px-4 sm:px-8">
        <div className="flex justify-between items-center h-16 sm:h-[4.25rem]">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center text-[#1ebbbb]">
              <svg className="w-7 h-7 sm:w-9 sm:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V5a2 2 0 012-2h4a2 2 0 012 2v2m4 14V11a2 2 0 00-2-2h-4v12m-6-8h2m-2 4h2m6-8h2m-2 4h2" />
              </svg>
            </div>
            <Link href="/" className="text-xl sm:text-2xl font-extrabold tracking-tight">
              <span className="text-[#0F172A] font-[800]">Zero</span>
              <span className="text-[#1ebbbb]">Broker</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-[#0F172A] hover:text-[#1ebbbb] font-semibold text-sm transition-colors uppercase tracking-wider text-[11px]">
              Home
            </Link>
            
            {/* Dropdown Menu - Static */}
            <div className="relative group">
              <Link href="/properties" className="flex items-center text-[#0F172A] hover:text-[#1ebbbb] font-semibold text-sm transition-colors uppercase tracking-wider text-[11px]">
                Properties & Assets
                <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-[#E2E8F0] rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/#properties-buy" className="block px-4 py-2 text-[11px] uppercase tracking-wider font-medium text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#1ebbbb]" onClick={() => handleTabClick('Buy')}>Buy</Link>
                  <Link href="/#properties-rent" className="block px-4 py-2 text-[11px] uppercase tracking-wider font-medium text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#1ebbbb]" onClick={() => handleTabClick('Rent / Lease')}>Rent / Lease</Link>
                  <Link href="/#properties-lands" className="block px-4 py-2 text-[11px] uppercase tracking-wider font-medium text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#1ebbbb]" onClick={() => handleTabClick('Lands & Farmlands')}>Lands & Farmlands</Link>
                  <Link href="/#properties-furniture" className="block px-4 py-2 text-[11px] uppercase tracking-wider font-medium text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#1ebbbb]" onClick={() => handleTabClick('Furniture Rentals')}>Furniture Rentals</Link>
                  <Link href="/#properties-commercial" className="block px-4 py-2 text-[11px] uppercase tracking-wider font-medium text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#1ebbbb]" onClick={() => handleTabClick('Commercial Offices')}>Commercial Offices</Link>
                  </div>
              </div>
            </div>

            <Link href="/services" className="text-[#0F172A] hover:text-[#1ebbbb] font-semibold text-sm transition-colors uppercase tracking-wider text-[11px]">
              Services
            </Link>
            <Link href="/agency" className="text-[#0F172A] hover:text-[#1ebbbb] font-semibold text-sm transition-colors uppercase tracking-wider text-[11px]">
              For Agency
            </Link>
            <Link href="/about" className="text-[#0F172A] hover:text-[#1ebbbb] font-semibold text-sm transition-colors uppercase tracking-wider text-[11px]">
              About Us
            </Link>
            <Link href="/pricing" className="text-[#0F172A] hover:text-[#1ebbbb] font-semibold text-sm transition-colors uppercase tracking-wider text-[11px]">
              Pricing
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="#" 
              className="px-5 py-2.5 text-[#0F172A] font-bold text-xs uppercase tracking-wider hover:text-[#1ebbbb] transition-colors"
            >
              Agency Login
            </Link>
            <Link 
              href="#" 
              className="px-6 py-3 bg-[#0a0a0a] text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-black/80 transition-colors"
            >
              Get App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#0F172A] hover:text-[#1ebbbb] p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-slate-100"
            >
              <div className="py-4 space-y-4 flex flex-col">
                <Link href="/" className="px-4 py-2 text-[#0F172A] hover:text-[#1ebbbb] font-bold text-xs uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                                  <div>
                    <div className="flex items-center justify-between px-4 py-2 text-[#0F172A] hover:text-[#1ebbbb] font-bold text-xs uppercase tracking-wider cursor-pointer" onClick={() => setIsMobilePropertiesOpen(!isMobilePropertiesOpen)}>
                      <span>Properties & Assets</span>
                      <svg className={"w-4 h-4 transition-transform "} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                    {isMobilePropertiesOpen && (
                      <div className="flex flex-col pl-8 py-2 space-y-4 border-l-2 border-[#1ebbbb]/20 ml-4 mt-1 mb-2">
                        <Link href="/#properties-buy" className="text-slate-600 text-[11px] font-bold uppercase tracking-wider hover:text-[#1ebbbb]" onClick={() => { handleTabClick('Buy'); setMobileMenuOpen(false); }}>Buy</Link>
                        <Link href="/#properties-rent" className="text-slate-600 text-[11px] font-bold uppercase tracking-wider hover:text-[#1ebbbb]" onClick={() => { handleTabClick('Rent / Lease'); setMobileMenuOpen(false); }}>Rent / Lease</Link>
                        <Link href="/#properties-lands" className="text-slate-600 text-[11px] font-bold uppercase tracking-wider hover:text-[#1ebbbb]" onClick={() => { handleTabClick('Lands & Farmlands'); setMobileMenuOpen(false); }}>Lands & Farmlands</Link>
                        <Link href="/#properties-furniture" className="text-slate-600 text-[11px] font-bold uppercase tracking-wider hover:text-[#1ebbbb]" onClick={() => { handleTabClick('Furniture Rentals'); setMobileMenuOpen(false); }}>Furniture Rentals</Link>
                        <Link href="/#properties-commercial" className="text-slate-600 text-[11px] font-bold uppercase tracking-wider hover:text-[#1ebbbb]" onClick={() => { handleTabClick('Commercial Offices'); setMobileMenuOpen(false); }}>Commercial Offices</Link>
                      </div>
                    )}
                  </div>
                <Link href="/services" className="px-4 py-2 text-[#0F172A] hover:text-[#1ebbbb] font-bold text-xs uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                <Link href="/agency" className="px-4 py-2 text-[#0F172A] hover:text-[#1ebbbb] font-bold text-xs uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)}>For Agency</Link>
                <Link href="/about" className="px-4 py-2 text-[#0F172A] hover:text-[#1ebbbb] font-bold text-xs uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                <Link href="/pricing" className="px-4 py-2 text-[#0F172A] hover:text-[#1ebbbb] font-bold text-xs uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                <div className="pt-4 flex flex-col gap-3 px-4 border-t border-slate-100">
                  <Link href="#" className="w-full text-center px-5 py-3 text-[#0F172A] border border-slate-200 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition-colors" onClick={() => setMobileMenuOpen(false)}>Agency Login</Link>
                  <Link href="#" className="w-full text-center px-6 py-3 bg-[#0a0a0a] text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-black/80 transition-colors" onClick={() => setMobileMenuOpen(false)}>Get App</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;







