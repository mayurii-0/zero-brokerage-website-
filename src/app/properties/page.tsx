"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROPERTIES } from '@/components/PropertyShowcase';

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [listedBy, setListedBy] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minSize, setMinSize] = useState("");
  const [maxSize, setMaxSize] = useState("");
  
  const [city, setCity] = useState("All Cities");
  const [propertyType, setPropertyType] = useState("All Types");
  const [propertyStatus, setPropertyStatus] = useState("All");
  const [bhk, setBhk] = useState("Any BHK");

  const [showMoreFilters, setShowMoreFilters] = useState(false);

  // State to hold the filters that have been explicitly applied via the button
  const [appliedFilters, setAppliedFilters] = useState({
    searchTerm: "",
    category: "All",
    listedBy: "All",
    minPrice: "",
    maxPrice: "",
    minSize: "",
    maxSize: "",
    city: "All Cities",
    propertyType: "All Types",
    propertyStatus: "All",
    bhk: "Any BHK"
  });

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  // Normalize properties to extract exact city, type, status, and bhk for both filtering and dropdown generation
  const normalizedProperties = useMemo(() => {
    return PROPERTIES.map((p, idx) => {
      // Listed By Mock
      let lister = "Owner";
      if (idx % 3 === 1) lister = "Broker";
      else if (idx % 3 === 2) lister = "Agency";
      
      // City
      let city = "Unknown";
      if (p.location) {
        const parts = p.location.split(',');
        city = parts[parts.length - 1].trim();
      }

      // Property Type
      const titleLower = p.title.toLowerCase();
      let pType = "Other";
      if (p.category === 'Lands & Farmlands') {
        if (titleLower.includes('agricultural')) pType = "Agricultural Land";
        else if (titleLower.includes('commercial')) pType = "Commercial Plot";
        else if (titleLower.includes('residential')) pType = "Residential Plot";
        else {
          const words = p.title.split(' ');
          pType = words[words.length - 1];
        }
      } else if (p.category === 'Commercial Offices') {
        if (titleLower.includes('bare-shell')) pType = "Bare-shell Space";
        else if (titleLower.includes('co-working') || titleLower.includes('desk')) pType = "Co-working Seats";
        else if (titleLower.includes('shop') || titleLower.includes('retail')) pType = "Retail Space";
        else {
          const words = p.title.split(' ');
          pType = words[words.length - 1];
        }
      } else if (p.category === 'Furniture Rentals') {
        if (titleLower.includes('bundle') || titleLower.includes('combo')) pType = "Workstation Bundle";
        else if (titleLower.includes('conference') || titleLower.includes('boardroom')) pType = "Conference Room";
        else if (titleLower.includes('cabin')) pType = "Executive Cabin";
        else {
          const words = p.title.split(' ');
          pType = words[words.length - 1];
        }
      } else {
        if (titleLower.includes('apartment') || titleLower.includes('flat') || titleLower.includes('condo')) pType = "Flats / Apartments";
        else if (titleLower.includes('villa') || titleLower.includes('house') || titleLower.includes('bungalow')) pType = "Independent House / Villa";
        else if (titleLower.includes('builder floor')) pType = "Builder Floor";
        else if (titleLower.includes('studio') || titleLower.includes('1 rk')) pType = "Studio Apartment";
        else {
          const words = p.title.split(' ');
          pType = words[words.length - 1];
        }
      }

      // Status
      let status = "";
      const textToSearch = (p.badges?.map(b => b.text).join(' ') + ' ' + p.specs).toLowerCase();
      if (p.category === 'Rent / Lease') {
        if (textToSearch.includes('semi-furnished') || textToSearch.includes('semi furnished')) status = "Semi-Furnished";
        else if (textToSearch.includes('unfurnished')) status = "Unfurnished";
        else if (textToSearch.includes('furnished')) status = "Fully Furnished";
        else status = "Any Status";
      } else if (p.category === 'Buy') {
        if (textToSearch.includes('ready') || textToSearch.includes('newly')) status = "Newly Constructed (Ready)";
        else if (textToSearch.includes('under construction')) status = "Under Construction";
        else if (textToSearch.includes('resale') || textToSearch.includes('old')) status = "Old / Resale";
        else status = "Newly Constructed (Ready)";
      } else if (p.category === 'Lands & Farmlands') {
        if (textToSearch.includes('clear title')) status = "Clear Title Verified";
        else if (textToSearch.includes('rera')) status = "RERA Approved";
        else if (textToSearch.includes('a-katha')) status = "A-Katha";
        else status = "Clear Title Verified";
      } else if (p.category === 'Commercial Offices') {
        if (textToSearch.includes('grade a')) status = "Grade A Building";
        else if (textToSearch.includes('premium')) status = "Premium Tech Park";
        else status = "Standard Commercial";
      } else if (p.category === 'Furniture Rentals') {
        status = "6 Months";
      } else {
        status = "Any Status";
      }

      // BHK
      let extractedBhk = "Any BHK";
      const titleAndSpecs = `${p.title} ${p.specs}`;
      const bhkMatch = titleAndSpecs.match(/(\d\+?)\s*(?:BHK|Bed)/i);
      if (bhkMatch) {
        const num = bhkMatch[1];
        if (parseInt(num) >= 4 || num.includes('+')) extractedBhk = "4+ BHK / Villas";
        else extractedBhk = `${num} BHK`;
      } else if (titleAndSpecs.toLowerCase().includes('1 rk') || titleAndSpecs.toLowerCase().includes('studio')) {
        extractedBhk = "1 RK / Studio";
      }

      return { 
        ...p, 
        listedBy: lister,
        normalizedCity: city,
        normalizedType: pType,
        normalizedStatus: status,
        normalizedBhk: extractedBhk
      };
    });
  }, []);

  // Generate dynamic options strictly from normalized properties
  const filterOptions = useMemo(() => {
    const uniqueCities = new Set<string>();
    const uniqueTypes = new Set<string>();
    const uniqueStatuses = new Set<string>();
    const uniqueBhks = new Set<string>();
    const uniqueListers = new Set<string>();

    normalizedProperties.forEach(p => {
      // Collect all cities and listers globally
      if (p.normalizedCity) uniqueCities.add(p.normalizedCity);
      if (p.listedBy) uniqueListers.add(p.listedBy);
      
      // Types, Statuses, and BHKs depend on the currently selected Category in the UI
      if (category === 'All' || p.category === category) {
        if (p.normalizedType) uniqueTypes.add(p.normalizedType);
        if (p.normalizedStatus) uniqueStatuses.add(p.normalizedStatus);
        
        // Only collect BHK for categories where it makes sense (Buy/Rent/All)
        if (p.category === 'Buy' || p.category === 'Rent / Lease') {
          if (p.normalizedBhk && p.normalizedBhk !== "Any BHK") uniqueBhks.add(p.normalizedBhk);
        }
      }
    });

    return {
      cities: Array.from(uniqueCities).sort(),
      types: Array.from(uniqueTypes).sort(),
      statuses: Array.from(uniqueStatuses).sort(),
      bhks: Array.from(uniqueBhks).sort(),
      listers: Array.from(uniqueListers).sort(),
    };
  }, [normalizedProperties, category]);

  // Helper to parse price string to number
  const parsePrice = (priceStr: string) => {
    if (!priceStr) return 0;
    const cleanStr = priceStr.toLowerCase().replace(/,/g, '');
    const numMatch = cleanStr.match(/([\d.]+)/);
    if (!numMatch) return 0;
    let num = parseFloat(numMatch[1]);
    
    if (cleanStr.includes('cr')) num *= 10000000;
    else if (cleanStr.includes('l')) num *= 100000;
    else if (cleanStr.includes('k')) num *= 1000;
    return num;
  };

  // Helper to parse size string to number
  const parseSize = (specs: string) => {
    if (!specs) return 0;
    const sqftMatch = specs.match(/([\d,.]+)\s*Sq\.?Ft/i);
    if (sqftMatch) return parseFloat(sqftMatch[1].replace(/,/g, ''));
    
    const acreMatch = specs.match(/([\d,.]+)\s*Acre/i);
    if (acreMatch) return parseFloat(acreMatch[1].replace(/,/g, '')) * 43560;
    return 0;
  };

  const filteredProperties = normalizedProperties.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(appliedFilters.searchTerm.toLowerCase()) || p.location.toLowerCase().includes(appliedFilters.searchTerm.toLowerCase());
    const matchCategory = appliedFilters.category === "All" || p.category === appliedFilters.category;
    const matchLister = appliedFilters.listedBy === "All" || p.listedBy === appliedFilters.listedBy;
    const matchCity = appliedFilters.city === "All Cities" || p.normalizedCity === appliedFilters.city;
    const matchPropType = appliedFilters.propertyType === "All Types" || p.normalizedType === appliedFilters.propertyType;
    const matchStatus = appliedFilters.propertyStatus === "All" || p.normalizedStatus === appliedFilters.propertyStatus;
    const matchBhk = appliedFilters.bhk === "Any BHK" || p.normalizedBhk === appliedFilters.bhk;

    // Price Match
    let matchPrice = true;
    const pPrice = parsePrice(p.price);
    if (appliedFilters.minPrice && pPrice < parseFloat(appliedFilters.minPrice)) matchPrice = false;
    if (appliedFilters.maxPrice && pPrice > parseFloat(appliedFilters.maxPrice)) matchPrice = false;

    // Size Match
    let matchSize = true;
    const pSize = parseSize(p.specs);
    if (appliedFilters.minSize && pSize > 0 && pSize < parseFloat(appliedFilters.minSize)) matchSize = false;
    if (appliedFilters.maxSize && pSize > 0 && pSize > parseFloat(appliedFilters.maxSize)) matchSize = false;

    return matchSearch && matchCategory && matchLister && matchCity && matchPropType && matchStatus && matchBhk && matchPrice && matchSize;
  });

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <main className="pt-32 pb-20 min-h-screen flex flex-col items-center px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-slate-900 mb-4">
            All Properties & Assets
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Browse our complete inventory listed directly by Owners, Agencies, and Brokers.
          </p>
        </div>

        {/* Custom Filter Bar (Comprehensive) */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 mb-10">
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            
            {/* The 3 Always-Visible Options */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Category</label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
              >
                <option value="All">All Categories</option>
                <option value="Buy">Buy</option>
                <option value="Rent / Lease">Rent / Lease</option>
                <option value="Lands & Farmlands">Lands & Farmlands</option>
                <option value="Commercial Offices">Commercial Offices</option>
                <option value="Furniture Rentals">Furniture Rentals</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">City / Location</label>
              <select 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
              >
                <option value="All Cities">All Cities</option>
                {filterOptions.cities.map(c => c !== 'All Cities' && <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Dynamic Type (3rd visible filter) */}
            {(category === 'All' || category === 'Buy' || category === 'Rent / Lease') && (<div className="col-span-2 sm:col-span-1">
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Property Type</label>
                <select 
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                >
                  <option value="All Types">All Types</option>
                  {filterOptions.types.map(t => t !== 'All Types' && <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            )}
            {category === 'Lands & Farmlands' && (
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Land Type</label>
                <select 
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                >
                  <option value="All Types">All Land Types</option>
                  {filterOptions.types.map(t => t !== 'All Types' && <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            )}
            {category === 'Commercial Offices' && (
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Office Type</label>
                <select 
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                >
                  <option value="All Types">All Types</option>
                  {filterOptions.types.map(t => t !== 'All Types' && <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            )}
            {category === 'Furniture Rentals' && (
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Package Type</label>
                <select 
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                >
                  <option value="All Types">All Packages</option>
                  {filterOptions.types.map(t => t !== 'All Types' && <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            )}

          </div>

          {/* More Filters (Collapsible) */}
          <AnimatePresence>
            {showMoreFilters && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-6"
              >
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 pt-2">
                  
                  {/* Status / Age */}
                  {(category === 'All' || category === 'Buy' || category === 'Rent / Lease') && (<div className="col-span-2 sm:col-span-1">
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                        {category === 'Rent / Lease' ? 'Furnishing Status' : 'Property Age'}
                      </label>
                      <select 
                        value={propertyStatus}
                        onChange={(e) => setPropertyStatus(e.target.value)}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                      >
                        <option value="All">Any {category === 'Rent / Lease' ? 'Status' : 'Age'}</option>
                        {filterOptions.statuses.map(s => s !== 'All' && s !== 'Any Status' && <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  )}

                  {category === 'Lands & Farmlands' && (
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Legal Status</label>
                      <select 
                        value={propertyStatus}
                        onChange={(e) => setPropertyStatus(e.target.value)}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                      >
                        <option value="All">Any Status</option>
                        {filterOptions.statuses.map(s => s !== 'All' && s !== 'Any Status' && <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  )}

                  {category === 'Commercial Offices' && (
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Grade</label>
                      <select 
                        value={propertyStatus}
                        onChange={(e) => setPropertyStatus(e.target.value)}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                      >
                        <option value="All">Any Grade</option>
                        {filterOptions.statuses.map(s => s !== 'All' && s !== 'Any Status' && <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  )}

                  {category === 'Furniture Rentals' && (
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Rental Duration</label>
                      <select 
                        value={propertyStatus}
                        onChange={(e) => setPropertyStatus(e.target.value)}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                      >
                        <option value="All">Any Duration</option>
                        {filterOptions.statuses.map(s => s !== 'All' && s !== 'Any Status' && <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  )}

                  {/* Manual Price Range */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Price / Rent (₹)</label>
                    <div className="flex items-center gap-2">
                      <input 
                        type="number" 
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="w-1/2 px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                      />
                      <span className="text-slate-400 font-medium">-</span>
                      <input 
                        type="number" 
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="w-1/2 px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                      />
                    </div>
                  </div>

                  {/* Manual Size Range */}
                  {category !== 'Furniture Rentals' && (
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Size (Sq. Ft.)</label>
                      <div className="flex items-center gap-2">
                        <input 
                          type="number" 
                          placeholder="Min Size"
                          value={minSize}
                          onChange={(e) => setMinSize(e.target.value)}
                          className="w-1/2 px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                        />
                        <span className="text-slate-400 font-medium">-</span>
                        <input 
                          type="number" 
                          placeholder="Max Size"
                          value={maxSize}
                          onChange={(e) => setMaxSize(e.target.value)}
                          className="w-1/2 px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                        />
                      </div>
                    </div>
                  )}

                  {(category === 'All' || category === 'Buy' || category === 'Rent / Lease') && (<div className="col-span-2 sm:col-span-1">
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">BHK Capacity</label>
                      <select 
                        value={bhk}
                        onChange={(e) => setBhk(e.target.value)}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                      >
                        <option value="Any BHK">Any BHK</option>
                        {filterOptions.bhks.map(b => b !== 'Any BHK' && <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Listed By</label>
                    <select 
                      value={listedBy}
                      onChange={(e) => setListedBy(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                    >
                      <option value="All">All (Owner, Agency, Broker)</option>
                      {filterOptions.listers.map(l => l !== 'All' && <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Search and More Options toggle */}
            <div className="w-full md:w-1/2 flex items-center gap-4">
              <div className="relative w-2/3">
                <input 
                  type="text" 
                  placeholder="Search specific keyword..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                />
                <svg className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <button 
                onClick={() => setShowMoreFilters(!showMoreFilters)}
                className="text-xs font-bold text-indigo-600 uppercase tracking-wider hover:text-indigo-800 transition-colors whitespace-nowrap"
              >
                {showMoreFilters ? '- LESS OPTIONS' : '+ MORE OPTIONS'}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 w-full md:w-auto">
              <button 
                onClick={() => { 
                  setSearchTerm(''); 
                  setCategory('All'); 
                  setCity('All Cities');
                  setPropertyType('All Types');
                  setPropertyStatus('All');
                  setBhk('Any BHK');
                  setListedBy('All'); 
                  setMinPrice('');
                  setMaxPrice('');
                  setMinSize('');
                  setMaxSize('');
                  setShowMoreFilters(false); 
                  setAppliedFilters({ searchTerm: '', category: 'All', city: 'All Cities', propertyType: 'All Types', propertyStatus: 'All', bhk: 'Any BHK', listedBy: 'All', minPrice: '', maxPrice: '', minSize: '', maxSize: '' });
                }}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors text-xs sm:text-sm w-full md:w-auto"
              >
                CLEAR FILTERS
              </button>
              <button 
                onClick={() => setAppliedFilters({ searchTerm, category, city, propertyType, propertyStatus, bhk, listedBy, minPrice, maxPrice, minSize, maxSize })}
                className="px-4 py-2 sm:px-8 sm:py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors shadow-lg text-xs sm:text-sm w-full md:w-auto"
              >
                SHOW PROPERTIES
              </button>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {paginatedProperties.length > 0 ? (
            paginatedProperties.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col w-full max-w-[320px] mx-auto sm:max-w-none">
                <div className="aspect-video sm:aspect-auto sm:h-64 w-full relative group cursor-pointer overflow-hidden bg-slate-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-1 sm:mb-2 gap-1 sm:gap-0">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 line-clamp-1">{item.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">{item.location}</p>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                    {item.specs}
                  </p>
                  <div className="mt-auto flex justify-between items-center pt-3 sm:pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-lg sm:text-xl font-bold text-[#1ebbbb]">{item.price}</span>
                      <p className="text-[9px] sm:text-[10px] uppercase text-slate-400 font-bold mt-0.5 sm:mt-1 tracking-wider">By {item.listedBy}</p>
                    </div>
                    <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-colors">
                      {item.cta}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-slate-500 text-lg">
              No properties found matching your filters.
            </div>
          )}
        </div>
        
        {/* Pagination UI */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-slate-200 bg-white rounded-xl text-slate-600 font-bold hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            
            <div className="flex items-center gap-2 overflow-x-auto max-w-full">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-xl font-bold transition-colors shrink-0 ${
                    currentPage === page 
                      ? 'bg-slate-900 text-white' 
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-slate-200 bg-white rounded-xl text-slate-600 font-bold hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}

      </div>
    </main>
  );
}




