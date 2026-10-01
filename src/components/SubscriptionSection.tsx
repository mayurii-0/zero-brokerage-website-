"use client";
import React, { useState } from 'react';
import { Check } from 'lucide-react';

const USER_PLANS = [
  {
    name: 'User Micro-Pass',
    price: '₹29',
    period: '7 days',
    description: 'Unlocks 5 verified owner direct contact dials.',
    features: [
      '5 Verified Owner Contacts',
      'Direct Contact Dials',
      'Razorpay Standard Checkout'
    ],
    popular: false,
    cta: 'Get Micro-Pass',
  },
  {
    name: 'User Starter',
    price: '₹199',
    period: '/ month',
    description: '15 Owner contacts + instant WhatsApp alerts.',
    features: [
      '15 Verified Owner Contacts',
      'Instant WhatsApp Alerts',
      'Webhook Registration'
    ],
    popular: false,
    cta: 'Start Starter Plan',
  },
  {
    name: 'User Pro Seeker',
    price: '₹499',
    period: '/ month',
    description: 'Unlimited owner contacts + digital background check.',
    features: [
      'Unlimited Owner Contacts',
      'Digital Background Verification',
      'Discount Flag Included'
    ],
    popular: true,
    cta: 'Go Pro Seeker',
  },
  {
    name: 'User Investor Pass',
    price: '₹999',
    period: '/ month',
    description: 'Access to verified land registry records.',
    features: [
      'Unlimited Owner Contacts',
      'Agricultural Registry Access',
      'Commercial Title Records'
    ],
    popular: false,
    cta: 'Get Investor Pass',
  },
  {
    name: 'VIP Concierge',
    price: '₹1,499',
    period: '/ month',
    description: 'White-glove matching and dedicated RM.',
    features: [
      'Dedicated RM Assignment',
      'White-Glove Matching',
      'Priority Offline Visits'
    ],
    popular: false,
    cta: 'Become VIP',
  }
];

const AGENCY_PLANS = [
  {
    name: 'Agency Silver',
    price: '₹1,999',
    period: '/ month',
    description: 'For independent brokers and small teams.',
    features: [
      '50 Active Inventory Listings',
      '2 Broker Sub-accounts',
      'Standard Dashboard'
    ],
    popular: false,
    cta: 'Start Silver',
  },
  {
    name: 'Agency Gold',
    price: '₹4,999',
    period: '/ month',
    description: 'For growing real estate agencies.',
    features: [
      '200 Active Inventory Listings',
      '10 Agent Seats',
      '5 Boost Ad Credits/mo'
    ],
    popular: true,
    cta: 'Upgrade to Gold',
  },
  {
    name: 'Agency Platinum',
    price: '₹9,999',
    period: '/ month',
    description: 'For top-tier enterprise firms and builders.',
    features: [
      'Unlimited Inventory Listings',
      '50 Agent Seats',
      'Direct API Ingestion',
      'Custom Banner Ads'
    ],
    popular: false,
    cta: 'Go Platinum',
  }
];

export default function SubscriptionSection() {
  const [activeTab, setActiveTab] = useState<'user' | 'agency'>('user');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <section className="py-32 bg-white font-sans relative overflow-hidden" id="pricing">
      {/* Background Accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">Monetization & Subscriptions</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">Zero Brokerage,<br/> Transparent Access.</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Choose the perfect tier for your property journey. From quick micro-passes for buyers to enterprise CRM tools for agencies.</p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-100 p-1.5 rounded-full inline-flex relative shadow-inner">
            <button
              onClick={() => {
                setActiveTab('user');
                setSelectedPlan(null);
              }}
              className={`relative z-10 px-8 py-3.5 text-sm font-bold tracking-wide transition-colors duration-300 rounded-full ${
                activeTab === 'user' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              For Users & Buyers
            </button>
            <button
              onClick={() => {
                setActiveTab('agency');
                setSelectedPlan(null);
              }}
              className={`relative z-10 px-8 py-3.5 text-sm font-bold tracking-wide transition-colors duration-300 rounded-full ${
                activeTab === 'agency' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              For Agency & Builders
            </button>
            
            {/* Sliding Pill */}
            <div 
              className={`absolute top-1.5 bottom-1.5 w-[50%] bg-white rounded-full shadow-sm transition-transform duration-300 ease-out`}
              style={{ transform: activeTab === 'agency' ? 'translateX(96%)' : 'translateX(0)' }}
            ></div>
          </div>
        </div>

        {/* Grid */}
        <div className={`grid gap-8 ${activeTab === 'user' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5' : 'grid-cols-1 md:grid-cols-3'} max-w-7xl mx-auto transition-all duration-500`}>
          {(activeTab === 'user' ? USER_PLANS : AGENCY_PLANS).map((plan, idx) => {
            const isSelected = selectedPlan === plan.name;
            return (
              <div 
                key={idx} 
                onClick={() => setSelectedPlan(plan.name)}
                className={`relative rounded-3xl p-5 sm:p-8 flex flex-col h-full transition-all duration-300 cursor-pointer w-full max-w-[320px] mx-auto sm:max-w-none shadow-md sm:shadow-none ${
                  isSelected 
                    ? 'bg-white border-2 border-indigo-600 shadow-xl shadow-indigo-100 sm:-translate-y-2' 
                    : 'bg-white border-2 border-slate-100 hover:border-slate-300 hover:shadow-lg hover:sm:-translate-y-1'
                }`}
              >
                {plan.popular && !isSelected && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-slate-800 text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                {isSelected && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-sm">
                      Selected Plan
                    </span>
                  </div>
                )}

                <div className="mb-3 sm:mb-5 border-b border-slate-100 pb-3 sm:pb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-slate-900">{plan.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{plan.description}</p>
                </div>

                <div className="mb-3 sm:mb-5">
                  <div className="flex items-end gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">{plan.price}</span>
                    <span className="text-xs sm:text-sm font-medium pb-1 text-slate-500">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 sm:space-y-4 mb-6 sm:mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 ${isSelected ? 'text-indigo-600' : 'text-slate-400'}`} />
                      <span className="text-xs sm:text-sm font-medium leading-relaxed text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}>
                  {isSelected ? 'Continue' : plan.cta}
                </button>
              </div>
            );
          })}
        </div>
        
        {activeTab === 'user' && (
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-sm text-slate-500 bg-slate-50 inline-block px-6 py-3 rounded-full border border-slate-100">
              <span className="font-bold text-slate-700">Commission Policy:</span> Standard properties incur 1-2% commission upon deal closure. Luxury third-party assets are routed to <span className="font-bold">0% Brokerage</span> In-House Concierge.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
