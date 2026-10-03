"use client";
import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { PROPERTIES } from '@/components/PropertyShowcase';
import ImageCarousel from '@/components/ImageCarousel';
import Navbar from '@/components/Navbar';
import { ArrowLeft, CheckCircle2, MapPin, Building2, BedDouble, Calendar, Home, ArrowRight, LayoutGrid, X, ShieldCheck, Zap, Car, ArrowUpDown, Dumbbell, Waves, Coffee, Compass, Heart, Share, Star } from 'lucide-react';

const DUMMY_IMAGES = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18efc2291?w=800&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
];

export default function PropertyDetailPage() {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const params = useParams();
  const router = useRouter();
  
  const id = Array.isArray(params?.id) ? params?.id[0] : params?.id;
  const propertyId = id ? parseInt(id as string, 10) : 0;
  
  const property = useMemo(() => {
    return PROPERTIES.find(p => p.id === propertyId);
  }, [propertyId]);

  if (!property) {
    return (
      <main className="min-h-screen flex flex-col bg-stone-50">
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Property Not Found</h1>
          <button 
            onClick={() => router.push('/properties')}
            className="px-6 py-3 bg-[#1ebbbb] text-white font-bold rounded-xl hover:bg-[#19a5a5] transition-colors"
          >
            Back to Properties
          </button>
        </div>
      </main>
    );
  }

  const allImages = [property.image, ...DUMMY_IMAGES];

  return (
    <main className="min-h-screen flex flex-col bg-stone-50">
      <AnimatePresence>
        {showAllPhotos && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed inset-0 z-[100] bg-white overflow-y-auto"
          >
            <div className="sticky top-0 bg-white/80 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex justify-between items-center z-10">
              <button 
                onClick={() => setShowAllPhotos(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors flex items-center text-slate-800 font-semibold"
              >
                <X size={24} className="mr-2" /> Close
              </button>
              <div className="font-bold text-slate-900">{property.title} - Photos</div>
              <div className="w-24"></div> {/* spacer for centering */}
            </div>
            
            <div className="max-w-4xl mx-auto py-10 px-4 space-y-4">
              {allImages.map((img, idx) => (
                <div key={idx} className="w-full">
                  <img src={img} alt={`${property.title} photo ${idx + 1}`} className="w-full h-auto object-cover rounded-lg" />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 mt-20">
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="inline-flex items-center text-slate-600 bg-slate-200/50 hover:bg-slate-200 px-5 py-2 rounded-full transition-colors mb-6 font-semibold"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to listings
        </button>
        {/* Title Header (Top) */}
        <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#1ebbbb]/10 text-[#1ebbbb] px-2.5 py-1 rounded-md text-sm font-bold uppercase tracking-wider">
                {property.category}
              </span>
              {property.category === 'Rent / Lease' && (
                <span className="flex items-center text-amber-500 font-bold text-sm bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100">
                  <Star size={14} className="fill-amber-500 mr-1" /> 4.8 Rating
                </span>
              )}
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
              {property.title}
            </h1>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-3 pb-1 md:pb-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 text-slate-700 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all font-semibold group/btn shadow-sm">
              <Heart size={18} className="group-hover/btn:fill-red-500 transition-colors" /> Save
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 text-slate-700 hover:text-[#1ebbbb] hover:border-[#1ebbbb]/30 hover:bg-[#1ebbbb]/5 transition-all font-semibold shadow-sm">
              <Share size={18} /> Share
            </button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="w-full h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden shadow-lg border border-slate-200 mb-4 bg-slate-200 relative group">
          {/* Mobile Carousel */}
          <div className="md:hidden w-full h-full">
            <ImageCarousel 
              images={allImages} 
              alt={property.title} 
              imageClassName="object-cover"
            />
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 w-full h-full">
            <div className="col-span-2 row-span-2 relative group-hover:brightness-95 hover:!brightness-100 transition-all cursor-pointer">
              <img src={allImages[0]} alt={property.title} className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 row-span-1 relative group-hover:brightness-95 hover:!brightness-100 transition-all cursor-pointer">
              <img src={allImages[1]} alt={property.title} className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 row-span-1 relative group-hover:brightness-95 hover:!brightness-100 transition-all cursor-pointer">
              <img src={allImages[2]} alt={property.title} className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 row-span-1 relative group-hover:brightness-95 hover:!brightness-100 transition-all cursor-pointer">
              <img src={allImages[3]} alt={property.title} className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 row-span-1 relative group-hover:brightness-95 hover:!brightness-100 transition-all cursor-pointer">
              <img src={allImages[4]} alt={property.title} className="w-full h-full object-cover" />
              <button onClick={() => setShowAllPhotos(true)} className="absolute bottom-4 right-4 bg-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-md flex items-center gap-2 hover:bg-slate-100 transition-colors text-slate-800">
                <LayoutGrid size={16} />
                Show all photos
              </button>
            </div>
          </div>
        </div>

        {/* Location & Price Header (Bottom) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-2 md:gap-4">
          <div>
            <p className="flex items-center text-slate-600 text-lg font-medium">
              <MapPin size={20} className="mr-1.5 text-slate-400" /> {property.location}
            </p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Listed By {(property as any).listedBy || 'Owner'}</p>
            <p className="text-3xl md:text-4xl font-extrabold text-[#1ebbbb]">{property.price}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview / Specs */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Property Overview</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="flex flex-col">
                  <span className="text-slate-400 text-sm font-bold uppercase mb-1 flex items-center"><Building2 size={16} className="mr-1"/> Specs</span>
                  <span className="text-slate-800 font-semibold">{property.specs.split('•')[0] || property.specs}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-400 text-sm font-bold uppercase mb-1 flex items-center"><BedDouble size={16} className="mr-1"/> Area</span>
                  <span className="text-slate-800 font-semibold">{property.specs.split('•')[2] || property.specs.split('•')[1] || 'N/A'}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-400 text-sm font-bold uppercase mb-1 flex items-center"><Home size={16} className="mr-1"/> Type</span>
                  <span className="text-slate-800 font-semibold">{property.category}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-400 text-sm font-bold uppercase mb-1 flex items-center"><Calendar size={16} className="mr-1"/> Listed</span>
                  <span className="text-slate-800 font-semibold">Just Now</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Description</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Discover the perfect blend of comfort and style in this stunning {property.title}. Located in the highly sought-after area of {property.location}, this property offers unparalleled convenience and lifestyle. With {property.specs}, every detail has been thoughtfully designed to meet your highest expectations. 
                <br/><br/>
                Don't miss the opportunity to make this incredible space your own. Contact the {((property as any).listedBy || 'Owner').toLowerCase()} today to schedule a viewing and take the first step towards your new future.
              </p>
            </div>

            {/* Amenities (Dummy) */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Amenities & Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: '24/7 Security', icon: ShieldCheck },
                  { name: 'Power Backup', icon: Zap },
                  { name: 'Dedicated Parking', icon: Car },
                  { name: 'High-Speed Elevators', icon: ArrowUpDown },
                  { name: 'Gymnasium', icon: Dumbbell },
                  { name: 'Swimming Pool', icon: Waves },
                  { name: 'Club House', icon: Coffee },
                  { name: 'Vastu Compliant', icon: Compass }
                ].map(amenity => (
                  <div key={amenity.name} className="flex items-center text-slate-700">
                    <amenity.icon size={20} className="text-[#1ebbbb] mr-2 shrink-0" />
                    <span className="font-medium">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-100 sticky top-28">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Interested?</h3>
              <p className="text-slate-500 mb-6">Contact the {((property as any).listedBy || 'Owner').toLowerCase()} directly for the best deal.</p>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Request sent successfully!"); }}>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Name</label>
                  <input type="text" required placeholder="Full Name" className="w-full px-4 py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                  <input type="tel" required placeholder="+91 98765 43210" className="w-full px-4 py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email (Optional)</label>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb]" />
                </div>
                <button type="submit" className="w-full bg-[#1ebbbb] hover:bg-[#19a5a5] text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-[#1ebbbb]/30 flex items-center justify-center text-lg mt-4">
                  Schedule Visit <ArrowRight size={20} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
