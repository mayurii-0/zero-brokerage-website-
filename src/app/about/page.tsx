import React from 'react';
import { Shield, Users, Building2, CheckCircle2, Globe, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Corporate Buildings" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">The Zero Broker Story</span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-tight px-2">
            Rewriting the Rules of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Real Estate.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We believe that discovering, buying, or renting a property shouldn't involve hidden fees or expensive middlemen. Welcome to the future of transparent real estate.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">The 2% Problem.</h2>
              <p className="text-[15px] md:text-lg text-slate-600 mb-4 md:mb-6 leading-relaxed">
                For decades, the Indian real estate market has been dictated by a systemic flaw: <strong className="text-slate-900">exorbitant brokerage fees</strong>. Middlemen have routinely charged 1-2% of a property's total value just for facilitating a connection. 
              </p>
              <p className="text-[15px] md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
                <strong className="text-indigo-600">Zero Broker</strong> was built to eliminate this friction. By directly connecting verified property owners with genuine seekers through an advanced digital platform, we give the power (and the savings) back to you.
              </p>
              
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <div>
                  <h4 className="text-3xl md:text-4xl font-black text-slate-900 mb-1 md:mb-2">0%</h4>
                  <p className="text-[11px] md:text-sm font-bold text-slate-500 uppercase tracking-widest">Brokerage</p>
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-black text-slate-900 mb-1 md:mb-2">100%</h4>
                  <p className="text-[11px] md:text-sm font-bold text-slate-500 uppercase tracking-widest">Transparency</p>
                </div>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0 px-2 sm:px-0">
              <div className="absolute inset-0 bg-[#1ebbbb] rounded-3xl transform translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" 
                alt="Modern Architecture" 
                className="rounded-3xl shadow-2xl relative z-10 w-full h-[260px] sm:h-[350px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works / Ecosystem */}
      <section className="py-12 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4 tracking-tight">One Connected Ecosystem</h2>
            <p className="text-slate-600 text-[15px] md:text-lg px-2">We didn't just build a website. We built an intelligent ecosystem that caters to every stakeholder in the real estate journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                <Users className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">For Property Seekers</h3>
              <p className="text-[14px] md:text-base text-slate-600 leading-relaxed">
                Direct access to verified owner listings across residential, commercial, and land sectors. Skip the middleman, save on commission, and deal directly with decision-makers.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                <Globe className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">For Field Agents</h3>
              <p className="text-[14px] md:text-base text-slate-600 leading-relaxed">
                Independent agents use our platform to manage their micro-territories, conduct physical property verifications, and earn steady income through our partner program.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                <Building2 className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">For Top Agencies</h3>
              <p className="text-[14px] md:text-base text-slate-600 leading-relaxed">
                Enterprise builders and agencies use our Platinum CRM tools to ingest unlimited inventory via APIs, manage multiple agent seats, and boost their premium projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Verification */}
      <section className="py-12 md:py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative z-10">
              <span className="text-emerald-400 font-bold tracking-widest uppercase text-[11px] md:text-sm mb-3 md:mb-4 block">Security & Trust</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">Verified. Secured. Guaranteed.</h2>
              <p className="text-[15px] md:text-lg text-slate-400 mb-6 md:mb-8 leading-relaxed">
                A brokerless platform only works when trust is built into the code. We have instituted the strictest property verification standards in the industry.
              </p>
              
              <ul className="space-y-4 md:space-y-6">
                <li className="flex items-start gap-3 md:gap-4">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-1">Digital Title Checks</h4>
                    <p className="text-slate-400 text-[13px] md:text-sm leading-relaxed">We verify land registry records (A-Katha) and commercial title records before marking a listing as verified.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-1">RERA Compliance</h4>
                    <p className="text-slate-400 text-[13px] md:text-sm leading-relaxed">All under-construction properties and builder projects are cross-referenced with local RERA databases.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-1">In-Person Audits</h4>
                    <p className="text-slate-400 text-[13px] md:text-sm leading-relaxed">For luxury and commercial assets, our VIP Concierge team conducts physical audits to ensure the property matches the digital listing.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-center lg:justify-end items-center w-full mt-12 lg:mt-0 relative z-0">
              <div className="relative flex justify-center items-center w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                <div className="aspect-square rounded-full border border-slate-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[270px] h-[270px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px]"></div>
                <div className="aspect-square rounded-full border border-slate-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[700px] sm:h-[700px] lg:w-[800px] lg:h-[800px]"></div>
                <Image 
                  src="/security-shield.png" 
                  alt="Security Shield" 
                  width={450}
                  height={450}
                  className="relative z-10 w-full max-w-[220px] sm:max-w-[350px] lg:max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-24 bg-stone-50 text-center px-4">
        <h2 className="text-xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-6 tracking-tight">Ready to Experience Zero Brokerage?</h2>
        <p className="text-slate-600 mb-6 md:mb-10 text-[14px] md:text-lg max-w-2xl mx-auto px-2">Join thousands of verified owners, buyers, and top-tier agencies currently reshaping the real estate market.</p>
        <div className="group flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-[280px] sm:max-w-none mx-auto">
          <Link href="/properties" className="border-2 border-[#1ebbbb] bg-[#1ebbbb] text-white px-4 py-3 md:px-8 md:py-4 rounded-xl font-bold uppercase tracking-wide text-xs md:text-base group-hover:bg-white group-hover:text-slate-700 group-hover:border-slate-200 hover:!bg-[#199d9d] hover:!text-white hover:!border-[#199d9d] hover:-translate-y-1 hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-sm w-full sm:w-auto">
            Start Exploring
          </Link>
          <Link href="/pricing" className="border-2 border-slate-200 bg-white text-slate-700 px-4 py-3 md:px-8 md:py-4 rounded-xl font-bold uppercase tracking-wide text-xs md:text-base hover:bg-[#1ebbbb] hover:text-white hover:border-[#1ebbbb] hover:-translate-y-1 hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-sm w-full sm:w-auto">
            View Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
