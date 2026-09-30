"use client";
import React, { useState } from 'react';

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<'seekers' | 'agency'>('seekers');
  const [selectedSeekerPlan, setSelectedSeekerPlan] = useState<string>('pro-seeker');
  const [selectedAgencyPlan, setSelectedAgencyPlan] = useState<string>('gold-agency');

  const renderCard = (
    id: string,
    title: string,
    targetUser: string,
    price: string,
    priceSub: string,
    features: string[],
    buttonText: string,
    badgeText: string | null,
    isSelected: boolean,
    onClick: () => void
  ) => {
    // Dynamic styling based on whether the card is selected or not
    // The selected card elevates and scales up ("like a center card")
    // Unselected cards are slightly smaller and sit lower.
    const dynamicPositionClass = isSelected 
      ? "lg:-translate-y-2 shadow-2xl z-30" 
      : "lg:translate-y-0 z-10 hover:z-20";

    return (
      <div 
        onClick={onClick}
        className={`cursor-pointer p-5 md:p-6 rounded-3xl border flex flex-col relative transition-all duration-500 ease-out ${dynamicPositionClass} ${
          isSelected 
            ? 'bg-slate-900 border-slate-800' 
            : 'bg-white border-slate-200 hover:border-[#1ebbbb] shadow-sm hover:shadow-lg'
        }`}
      >
        {badgeText && isSelected && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1ebbbb] text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase whitespace-nowrap">
            {badgeText}
          </div>
        )}
        <h3 className={`text-xl font-bold mb-1 ${isSelected ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
        <p className={`text-xs md:text-sm mb-6 ${isSelected ? 'text-slate-400' : 'text-slate-500'}`}>{targetUser}</p>
        <div className="mb-6">
          <span className={`text-3xl md:text-4xl font-bold ${isSelected ? 'text-white' : 'text-slate-900'}`}>{price}</span>
          <span className={`text-xs md:text-sm ${isSelected ? 'text-slate-400' : 'text-slate-500'}`}>{priceSub}</span>
        </div>
        <ul className="space-y-3 md:space-y-4 mb-8 flex-grow">
          {features.map((feature, idx) => (
            <li key={idx} className={`flex items-start gap-2 md:gap-3 text-xs md:text-sm ${isSelected ? 'text-slate-300' : 'text-slate-700'}`}>
              <svg className={`w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5 ${isSelected ? 'text-[#1ebbbb]' : 'text-emerald-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button className={`w-full py-2.5 md:py-3 rounded-xl font-bold text-sm transition-colors ${
          isSelected 
            ? 'bg-[#1ebbbb] text-white hover:bg-[#19a5a5]' 
            : 'border-2 border-slate-200 text-slate-900 hover:border-slate-900'
        }`}>
          {buttonText}
        </button>
      </div>
    );
  };

  return (
    <main className="pt-48 min-h-screen flex flex-col items-center px-4 bg-stone-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold text-slate-500 tracking-widest uppercase mb-4">SUBSCRIPTION PLANS</p>
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-slate-900 mb-6">
            Monetization & Architecture
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Choose a plan tailored to your needs. From micro-passes for casual seekers to platinum enterprise solutions for top builders.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-24 lg:mb-40">
          <div className="bg-white p-1.5 rounded-full border border-slate-200 shadow-sm inline-flex">
            <button 
              onClick={() => setActiveTab('seekers')}
              className={`px-6 md:px-8 py-3 rounded-full font-bold text-xs md:text-sm transition-all ${activeTab === 'seekers' ? 'bg-[#1ebbbb] text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
            >
              User Subscription Plans
            </button>
            <button 
              onClick={() => setActiveTab('agency')}
              className={`px-6 md:px-8 py-3 rounded-full font-bold text-xs md:text-sm transition-all ${activeTab === 'agency' ? 'bg-[#1ebbbb] text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Agency, Broker & Builder Plans
            </button>
          </div>
        </div>
        
        {/* Seekers Pricing (5 Tiers) */}
        {activeTab === 'seekers' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 pb-32 animate-fade-in relative px-4 lg:px-0">
            {renderCard(
              'micro-pass',
              'Micro-Pass',
              'Casual Seeker',
              '₹29',
              ' / 7 days',
              ['5 Direct owner contacts', 'Standard search access'],
              'Get Micro-Pass',
              'Selected',
              selectedSeekerPlan === 'micro-pass',
              () => setSelectedSeekerPlan('micro-pass')
            )}
            {renderCard(
              'starter',
              'Starter',
              'Active Renter',
              '₹199',
              ' / month',
              ['15 Owner contacts', 'Instant WhatsApp alerts'],
              'Choose Starter',
              'Selected',
              selectedSeekerPlan === 'starter',
              () => setSelectedSeekerPlan('starter')
            )}
            {renderCard(
              'pro-seeker',
              'Pro Seeker',
              'Relocating Professional',
              '₹499',
              ' / month',
              ['Unlimited owner contacts', 'Digital background check', '0% furniture deposit'],
              'Go Pro',
              'Most Popular',
              selectedSeekerPlan === 'pro-seeker',
              () => setSelectedSeekerPlan('pro-seeker')
            )}
            {renderCard(
              'investor-pass',
              'Investor Pass',
              'Plot & Land Buyers',
              '₹999',
              ' / month',
              ['Access to verified land registries', 'Early listings access'],
              'Get Investor Pass',
              'Selected',
              selectedSeekerPlan === 'investor-pass',
              () => setSelectedSeekerPlan('investor-pass')
            )}
            {renderCard(
              'vip-concierge',
              'VIP Concierge',
              'Executive / Family',
              '₹1,499',
              ' / month',
              ['White-glove matching', 'Priority site visits', '24/7 advisory support'],
              'Become VIP',
              'Selected',
              selectedSeekerPlan === 'vip-concierge',
              () => setSelectedSeekerPlan('vip-concierge')
            )}
          </div>
        )}

        {/* Agency/Broker/Builder Pricing (3 Tiers) */}
        {activeTab === 'agency' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-32 animate-fade-in max-w-5xl mx-auto px-4 lg:px-0">
            {renderCard(
              'silver-partner',
              'Silver Partner',
              'Up to 50 active listings, 2 agent seats',
              '₹1,999',
              ' / month',
              ['Standard verified broker profile', 'Direct lead receiving', 'Basic analytics'],
              'Start as Silver',
              'Selected',
              selectedAgencyPlan === 'silver-partner',
              () => setSelectedAgencyPlan('silver-partner')
            )}
            {renderCard(
              'gold-agency',
              'Gold Agency',
              'Up to 200 active listings, 10 agent seats',
              '₹4,999',
              ' / month',
              ['5 Boost ad credits/month', 'Prioritized search ranking', 'Office rental integration'],
              'Go Gold',
              'Recommended',
              selectedAgencyPlan === 'gold-agency',
              () => setSelectedAgencyPlan('gold-agency')
            )}
            {renderCard(
              'platinum-builder',
              'Platinum Builder',
              'Unlimited listings, 50 agent seats',
              '₹9,999',
              ' / month',
              ['Custom landing page', 'Direct API access', 'Banner placement', 'Luxury showcase access'],
              'Become Platinum',
              'Selected',
              selectedAgencyPlan === 'platinum-builder',
              () => setSelectedAgencyPlan('platinum-builder')
            )}
          </div>
        )}

      </div>
    </main>
  );
}
