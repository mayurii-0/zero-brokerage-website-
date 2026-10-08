"use client";
import React, { useState } from 'react';

const ContactSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <section className="w-full bg-white py-8 md:py-16 relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-14">
          <p className="text-[10px] md:text-[11px] font-bold text-[#1ebbbb] tracking-widest uppercase mb-2 md:mb-3">Contact Us</p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-3 md:mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-xs md:text-base leading-relaxed px-2 md:px-0">
            Have questions about our properties, services, or pricing? Our team is ready to help you find exactly what you need.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Contact Info */}
          <div className="hidden md:flex flex-col justify-center space-y-10 bg-slate-50 p-8 md:p-12 rounded-3xl">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-[#1ebbbb]/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#1ebbbb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Office Address</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  123 Business Avenue, Tech Park<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-[#1ebbbb]/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#1ebbbb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Email Us</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  contact@zerobroker.com<br />
                  support@zerobroker.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-[#1ebbbb]/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#1ebbbb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Call Us</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  +91 98765 43210<br />
                  Mon - Fri, 9am to 6pm
                </p>
              </div>
            </div>
          </div>

            {/* Right: Contact Form */}
          <div className="bg-white p-6 md:p-12 rounded-3xl shadow-[0_0_40px_rgba(30,187,187,0.15)] border border-slate-100 relative">
            {showPopup && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-3xl">
                <div className="text-center p-6 bg-white rounded-2xl shadow-xl border border-slate-100 transform scale-100 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm">We&apos;ll get back to you shortly.</p>
                </div>
              </div>
            )}
            
            <form className="flex flex-col gap-4 md:gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 md:mb-2">First Name</label>
                  <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm focus:outline-none focus:border-[#1ebbbb] focus:ring-1 focus:ring-[#1ebbbb] transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 md:mb-2">Last Name</label>
                  <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm focus:outline-none focus:border-[#1ebbbb] focus:ring-1 focus:ring-[#1ebbbb] transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 md:mb-2">Email Address</label>
                  <input type="email" required pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}" title="Please enter a valid email address" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm focus:outline-none focus:border-[#1ebbbb] focus:ring-1 focus:ring-[#1ebbbb] transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 md:mb-2">Phone Number</label>
                  <input type="tel" required pattern="\d{10}" maxLength={10} title="Phone number must be exactly 10 digits" onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ""); }} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm focus:outline-none focus:border-[#1ebbbb] focus:ring-1 focus:ring-[#1ebbbb] transition-all" placeholder="9876543210" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 md:mb-2">Message</label>
                <textarea required rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm focus:outline-none focus:border-[#1ebbbb] focus:ring-1 focus:ring-[#1ebbbb] transition-all resize-none md:rows-4" placeholder="How can we help you?"></textarea>
              </div>

              <button disabled={isSubmitting} type="submit" className="w-full bg-slate-900 hover:bg-[#1ebbbb] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-xs md:text-sm tracking-wider uppercase py-3 md:py-4 rounded-xl transition-all shadow-lg hover:shadow-xl mt-1 md:mt-2 flex items-center justify-center">
                {isSubmitting ? (<><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div> SENDING...</>) : "SEND MESSAGE"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;


