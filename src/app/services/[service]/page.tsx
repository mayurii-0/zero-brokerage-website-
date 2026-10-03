import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const serviceData: Record<string, { title: string, image: string, description: string, features: string[], hash: string }> = {
  'residential-properties': {
    title: 'Residential Properties',
    image: '/images/service-bg.jpg',
    description: 'Discover our exclusive collection of handpicked, architecturally striking villas and premium apartments in the most desirable locations. Each property offers privacy, sophistication, and world-class amenities designed for the modern lifestyle.',
    features: [
      'Comprehensive listings: Flats, Apartments, Penthouses, Villas, and Builder Floors.',
      'Detailed insights on furnishing status, maintenance fees, and tenant preferences.',
      'Instant physical visit scheduling with verified property owners.',
      'Zero-Brokerage Direct Model for high-value & luxury residential assets.'
    ],
    hash: '#properties-residential'
  },
  'commercial-offices': {
    title: 'Commercial Offices',
    image: '/images/service-office.jpg',
    description: 'Explore Premium Grade-A office spaces designed for modern enterprises. Elevate your corporate presence with prime locations, state-of-the-art facilities, and turnkey workstation setups tailored to your team\'s needs.',
    features: [
      'Diverse spaces: Bare-shell Offices, Co-working spaces, Retail Showrooms, and Cafeterias.',
      'Smart filters for workstation capacity, power backup, and IT infrastructure.',
      'Turnkey office rent-out solutions bundled with cafeteria equipment and seating.',
      'Direct connect with builders and top agency firms.'
    ],
    hash: '#properties-commercial'
  },
  'lands-and-farmlands': {
    title: 'Lands & Farmlands',
    image: '/images/service-land.jpg',
    description: 'Invest in exclusive sprawling plots and fertile agricultural lands. Perfect for visionary investments, bespoke estates, or sustainable eco-retreats with complete zoning verification and clear titles.',
    features: [
      'Expansive inventory: Agricultural Farmlands, Industrial Plots, and Big Commercial Parcels.',
      'Rigorous zoning verification and road-width clearance checks.',
      'Detailed soil classification and topographical data.',
      'Exclusive access to verified agricultural/commercial land registry documents.'
    ],
    hash: '#properties-lands'
  },
  'furniture-rentals': {
    title: 'Furniture Rentals',
    image: '/images/service-furniture.jpg',
    description: 'Transform your workspace instantly with our curated contemporary collections. We offer high-end ergonomic office furniture available for flexible rental, including executive desks, ergonomic chairs, and collaborative lounge items.',
    features: [
      'Packaged Setups: Complete workstation packs (desks, ergonomic chairs, cabling trays) bundled with office leases.',
      'Individual Assets: Modular leasing of conference tables, server racks, and reception couches.',
      'Dual Operation: Supports both monthly subscription rentals and outright inventory liquidations.',
      'Unified checkout flow with recurring monthly auto-debit and refundable deposits.'
    ],
    hash: '#properties-furniture'
  },
  'buy': {
    title: 'Buy Properties',
    image: '/images/service-bg.jpg',
    description: 'Find your dream property with our zero-brokerage direct model. Browse verified listings and connect directly with owners for a seamless buying experience.',
    features: [
      'Access to a multi-asset search engine across residential and expansive land tracts.',
      'Dynamic Geo-Ranking discovering top properties nearby.',
      'Integrated digital verification and KYC flow for safe transactions.',
      'PostGIS-powered spatial radius matching for hyper-local discovery.'
    ],
    hash: '#properties-buy'
  },
  'rent-lease': {
    title: 'Rent & Lease',
    image: '/images/service-office.jpg',
    description: 'Discover the perfect space to rent or lease. From residential apartments to commercial offices, our platform makes finding your next space fast, verified, and broker-free.',
    features: [
      'Instant visit scheduling with geolocation check-ins.',
      'Access to turnkey corporate setups with instant add-ons.',
      '5-tier consumer subscription plans unlocking verified owner contacts.',
      'Zero-friction negotiation directly with landlords and property managers.'
    ],
    hash: '#properties-rent'
  }
};

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.service.toLowerCase();
  
  const data = serviceData[slug] || {
    title: slug.replace(/-/g, ' '),
    image: '/images/service-bg.jpg',
    description: `Detailed information about ${slug.replace(/-/g, ' ')} will be available here soon. We are currently preparing our exclusive listings and offerings for this category.`,
    features: [],
    hash: '#properties'
  };
  
  return (
    <main className="min-h-screen bg-stone-50 flex flex-col pt-24 font-sans">
      
      <div className="flex-grow flex flex-col md:flex-row items-center justify-between px-4 md:px-12 lg:px-24 py-16 gap-12 max-w-[1600px] mx-auto w-full">
        
        {/* Text Content Area */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <span className="text-[#1ebbbb] text-sm font-bold tracking-widest uppercase mb-4">
            Zero Broker Services
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 capitalize mb-4 md:mb-6 leading-tight px-1">
            {data.title}
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
            {data.description}
          </p>

          {data.features.length > 0 && (
            <div className="mb-10">
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider">Key Highlights</h3>
              <ul className="flex flex-col gap-3">
                {data.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-[15px] font-medium leading-relaxed max-w-xl">
                    <svg className="w-5 h-5 text-[#1ebbbb] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex items-center gap-4">
            <Link 
              href="/properties" 
              className="px-8 py-3.5 bg-[#1ebbbb] text-white rounded-full font-bold text-sm tracking-wider uppercase hover:bg-[#159a9a] hover:shadow-lg transition-all"
            >
              Explore More
            </Link>
            <Link 
              href="/#services" 
              className="px-8 py-3.5 bg-white border border-slate-200 text-slate-900 rounded-full font-bold text-sm tracking-wider uppercase hover:bg-stone-100 transition-all"
            >
              Go Back
            </Link>
          </div>
        </div>

        {/* Image Area */}
        <div className="w-full md:w-1/2 relative h-[500px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl">
          <Image 
            src={data.image} 
            alt={data.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
        </div>

      </div>

    </main>
  );
}
