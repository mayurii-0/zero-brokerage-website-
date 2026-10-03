"use client";
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import AnimatedSpotlight from './AnimatedSpotlight';
import ImageCarousel from './ImageCarousel';
// Removed Star

const DUMMY_IMAGES = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18efc2291?w=800&q=80"
];

const TABS = ["Buy", "Rent / Lease", "Lands & Farmlands", "Furniture Rentals", "Commercial Offices"];

export const PROPERTIES = [
  {
    "id": 1,
    "category": "Buy",
    "title": "Skyline Luxury Penthouse",
    "price": "₹2.85 Cr",
    "location": "Bandra West, Mumbai",
    "specs": "3 Beds • 3 Baths • 2,400 Sq.Ft.",
    "image": "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    "badges": [
      {
        "text": "0% BROKERAGE",
        "style": "bg-emerald-500 text-white",
        "position": "left-3"
      },
      {
        "text": "DIRECT OWNER",
        "style": "bg-slate-900 text-white",
        "position": "right-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 2,
    "category": "Buy",
    "title": "Sea-View Villa",
    "price": "₹5.10 Cr",
    "location": "Worli, Mumbai",
    "specs": "5 Beds • 6 Baths • 4,500 Sq.Ft.",
    "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80",
    "badges": [
      {
        "text": "PREMIUM",
        "style": "bg-indigo-600 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 3,
    "category": "Buy",
    "title": "Modern Duplex",
    "price": "₹1.90 Cr",
    "location": "Indiranagar, Bengaluru",
    "specs": "3 Beds • 2 Baths • 1,800 Sq.Ft.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    "badges": [
      {
        "text": "VERIFIED",
        "style": "bg-blue-500 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 4,
    "category": "Buy",
    "title": "Golf Course Estate",
    "price": "₹8.20 Cr",
    "location": "DLF Phase 5, Gurugram",
    "specs": "5 Beds • 6 Baths • 6,500 Sq.Ft.",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    "badges": [
      {
        "text": "GATED COMMUNITY",
        "style": "bg-emerald-500 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 5,
    "category": "Buy",
    "title": "Urban Independent House",
    "price": "₹95 L",
    "location": "HSR Layout, Bengaluru",
    "specs": "3 Beds • 2 Baths • 1,500 Sq.Ft.",
    "image": "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    "badges": [],
    "cta": "View Property"
  },
  {
    "id": 6,
    "category": "Buy",
    "title": "Lakefront Condo",
    "price": "₹2.50 Cr",
    "location": "Powai, Mumbai",
    "specs": "3 Beds • 3 Baths • 2,100 Sq.Ft.",
    "image": "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80",
    "badges": [
      {
        "text": "0% BROKERAGE",
        "style": "bg-blue-600 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 7,
    "category": "Buy",
    "title": "Luxury Builder Floor",
    "price": "₹1.20 Cr",
    "location": "South Extension, Delhi",
    "specs": "4 Beds • 4 Baths • 2,800 Sq.Ft.",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "badges": [],
    "cta": "View Property"
  },
  {
    "id": 8,
    "category": "Buy",
    "title": "Smart Home Apartment",
    "price": "₹1.40 Cr",
    "location": "Whitefield, Bengaluru",
    "specs": "2 Beds • 2 Baths • 1,200 Sq.Ft.",
    "image": "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&q=80",
    "badges": [
      {
        "text": "SMART HOME",
        "style": "bg-purple-600 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 9,
    "category": "Buy",
    "title": "Heritage Bungalow",
    "price": "₹12.0 Cr",
    "location": "Koregaon Park, Pune",
    "specs": "6 Beds • 5 Baths • 8,000 Sq.Ft.",
    "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    "badges": [
      {
        "text": "HERITAGE",
        "style": "bg-amber-600 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 10,
    "category": "Buy",
    "title": "Affordable Studio",
    "price": "₹45 L",
    "location": "Noida Sector 62",
    "specs": "1 Bed • 1 Bath • 650 Sq.Ft.",
    "image": "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&q=80",
    "badges": [],
    "cta": "View Property"
  },
  {
    "id": 11,
    "category": "Rent / Lease",
    "title": "Premium Studio Apartment",
    "price": "₹25k / mo",
    "location": "Indiranagar, Bengaluru",
    "specs": "1 RK • Fully Furnished",
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    "badges": [
      {
        "text": "VERIFIED OWNER",
        "style": "bg-emerald-500 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 12,
    "category": "Rent / Lease",
    "title": "Family 3BHK Flat",
    "price": "₹45k / mo",
    "location": "Andheri West, Mumbai",
    "specs": "3 BHK • Semi-Furnished",
    "image": "https://images.unsplash.com/photo-1502672260266-1c1de2d93688?w=800&q=80",
    "badges": [],
    "cta": "View Property"
  },
  {
    "id": 13,
    "category": "Rent / Lease",
    "title": "Bachelor Friendly 2BHK",
    "price": "₹30k / mo",
    "location": "Koramangala, Bengaluru",
    "specs": "2 BHK • Fully Furnished",
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    "badges": [
      {
        "text": "BACHELORS ALLOWED",
        "style": "bg-indigo-600 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 14,
    "category": "Rent / Lease",
    "title": "Luxury High-Rise Rent",
    "price": "₹1.2L / mo",
    "location": "Golf Course Road, Gurugram",
    "specs": "4 BHK • Fully Furnished",
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    "badges": [
      {
        "text": "LUXURY",
        "style": "bg-slate-900 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 15,
    "category": "Rent / Lease",
    "title": "Cozy 1BHK Apartment",
    "price": "₹18k / mo",
    "location": "Viman Nagar, Pune",
    "specs": "1 BHK • Unfurnished",
    "image": "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=800&q=80",
    "badges": [],
    "cta": "View Property"
  },
  {
    "id": 16,
    "category": "Rent / Lease",
    "title": "Spacious Villa Rent",
    "price": "₹80k / mo",
    "location": "ECR, Chennai",
    "specs": "4 BHK • Semi-Furnished",
    "image": "https://images.unsplash.com/photo-1583608205776-bfd35f6d9f83?w=800&q=80",
    "badges": [
      {
        "text": "PET FRIENDLY",
        "style": "bg-rose-500 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 17,
    "category": "Rent / Lease",
    "title": "Corporate Guest House",
    "price": "₹1.5L / mo",
    "location": "Banjara Hills, Hyderabad",
    "specs": "5 BHK • Fully Furnished",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    "badges": [],
    "cta": "View Property"
  },
  {
    "id": 18,
    "category": "Rent / Lease",
    "title": "Affordable 2BHK",
    "price": "₹15k / mo",
    "location": "Rajarhat, Kolkata",
    "specs": "2 BHK • Unfurnished",
    "image": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80",
    "badges": [],
    "cta": "View Property"
  },
  {
    "id": 19,
    "category": "Rent / Lease",
    "title": "Penthouse Lease",
    "price": "₹2.5L / mo",
    "location": "Marine Drive, Mumbai",
    "specs": "4 BHK • Fully Furnished",
    "image": "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&q=80",
    "badges": [
      {
        "text": "SEA VIEW",
        "style": "bg-blue-500 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 20,
    "category": "Rent / Lease",
    "title": "Modern Service Apt",
    "price": "₹60k / mo",
    "location": "Saket, Delhi",
    "specs": "2 BHK • Serviced",
    "image": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80",
    "badges": [
      {
        "text": "SHORT TERM",
        "style": "bg-amber-500 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 21,
    "category": "Lands & Farmlands",
    "title": "Premium Agricultural Land",
    "price": "₹1.2 Cr",
    "location": "Nandi Hills, Bengaluru",
    "specs": "2 Acres • Fenced • Well Water",
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    "badges": [
      {
        "text": "CLEAR TITLE",
        "style": "bg-emerald-500 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 22,
    "category": "Lands & Farmlands",
    "title": "Commercial Corner Plot",
    "price": "₹3.2 Cr",
    "location": "Electronic City, Bengaluru",
    "specs": "0.5 Acres • Corner Plot",
    "image": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    "badges": [
      {
        "text": "A KATHA",
        "style": "bg-blue-500 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 23,
    "category": "Lands & Farmlands",
    "title": "Highway Facing Industrial Plot",
    "price": "₹8.5 Cr",
    "location": "NH-48, Pune",
    "specs": "5 Acres • Commercial Zone",
    "image": "https://images.unsplash.com/photo-1513311068348-19c8fbdc0bb6?w=800&q=80",
    "badges": [
      {
        "text": "HIGHWAY FACING",
        "style": "bg-amber-600 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 24,
    "category": "Lands & Farmlands",
    "title": "Residential Layout Plot",
    "price": "₹85 L",
    "location": "Sarjapur, Bengaluru",
    "specs": "1,200 Sq.Ft. • BDA Approved",
    "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    "badges": [
      {
        "text": "RERA APPROVED",
        "style": "bg-indigo-600 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 25,
    "category": "Lands & Farmlands",
    "title": "Mango Orchard Farmland",
    "price": "₹2.5 Cr",
    "location": "Ratnagiri, Maharashtra",
    "specs": "5 Acres • Yielding Trees",
    "image": "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80",
    "badges": [],
    "cta": "View Property"
  },
  {
    "id": 26,
    "category": "Lands & Farmlands",
    "title": "Lakeview Weekend Farm",
    "price": "₹1.8 Cr",
    "location": "Karjat, Mumbai",
    "specs": "1 Acre • Scenic View",
    "image": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
    "badges": [
      {
        "text": "LAKEVIEW",
        "style": "bg-cyan-500 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 27,
    "category": "Lands & Farmlands",
    "title": "Mixed-Use Land",
    "price": "₹4 Cr",
    "location": "Yamuna Expressway",
    "specs": "3 Acres • Commercial/Res",
    "image": "https://images.unsplash.com/photo-1484502249930-e1da807099a5?w=800&q=80",
    "badges": [],
    "cta": "View Property"
  },
  {
    "id": 28,
    "category": "Lands & Farmlands",
    "title": "Gated Community Plot",
    "price": "₹1.5 Cr",
    "location": "OMR, Chennai",
    "specs": "2,400 Sq.Ft. • East Facing",
    "image": "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=800&q=80",
    "badges": [
      {
        "text": "PREMIUM",
        "style": "bg-purple-600 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 29,
    "category": "Lands & Farmlands",
    "title": "Tea Estate Parcel",
    "price": "₹5 Cr",
    "location": "Ooty, Tamil Nadu",
    "specs": "10 Acres • Active Estate",
    "image": "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80",
    "badges": [],
    "cta": "View Property"
  },
  {
    "id": 30,
    "category": "Lands & Farmlands",
    "title": "Warehouse Land",
    "price": "₹6 Cr",
    "location": "Bhiwandi, Thane",
    "specs": "4 Acres • Industrial",
    "image": "https://images.unsplash.com/photo-1587293852726-59fbbed23927?w=800&q=80",
    "badges": [
      {
        "text": "WAREHOUSE ZONE",
        "style": "bg-slate-700 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 31,
    "category": "Commercial Offices",
    "title": "Downtown Corporate Suite",
    "price": "₹3.5L / mo",
    "location": "BKC, Mumbai",
    "specs": "50 Desks • 5,000 Sq.Ft.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    "badges": [
      {
        "text": "GRADE A BUILDING",
        "style": "bg-indigo-600 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 32,
    "category": "Commercial Offices",
    "title": "Tech Park Floor",
    "price": "₹8.0L / mo",
    "location": "Whitefield, Bengaluru",
    "specs": "100 Desks • 12,000 Sq.Ft.",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    "badges": [
      {
        "text": "FULLY FURNISHED",
        "style": "bg-emerald-500 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 33,
    "category": "Commercial Offices",
    "title": "Retail Shop Space",
    "price": "₹1.2L / mo",
    "location": "Connaught Place, Delhi",
    "specs": "Ground Floor • 800 Sq.Ft.",
    "image": "https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&q=80",
    "badges": [
      {
        "text": "PRIME RETAIL",
        "style": "bg-rose-600 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 34,
    "category": "Commercial Offices",
    "title": "Co-working Hot Desks",
    "price": "₹8k / desk",
    "location": "Koramangala, Bengaluru",
    "specs": "Flexible • High Speed WiFi",
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    "badges": [
      {
        "text": "CO-WORKING",
        "style": "bg-blue-500 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 35,
    "category": "Commercial Offices",
    "title": "Bare-shell Office",
    "price": "₹2L / mo",
    "location": "Sector 62, Noida",
    "specs": "Unfurnished • 4,000 Sq.Ft.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    "badges": [],
    "cta": "View Property"
  },
  {
    "id": 36,
    "category": "Commercial Offices",
    "title": "Boutique Clinic Space",
    "price": "₹80k / mo",
    "location": "Bandra West, Mumbai",
    "specs": "Furnished • 1,200 Sq.Ft.",
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    "badges": [],
    "cta": "View Property"
  },
  {
    "id": 37,
    "category": "Commercial Offices",
    "title": "IT Park Entire Wing",
    "price": "₹15L / mo",
    "location": "HITEC City, Hyderabad",
    "specs": "200 Desks • 20,000 Sq.Ft.",
    "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    "badges": [
      {
        "text": "SEZ ZONE",
        "style": "bg-purple-600 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 38,
    "category": "Commercial Offices",
    "title": "High-Street Restaurant Space",
    "price": "₹4L / mo",
    "location": "Indiranagar, Bengaluru",
    "specs": "Ground + 1 • 3,500 Sq.Ft.",
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
    "badges": [
      {
        "text": "F&B READY",
        "style": "bg-amber-500 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 39,
    "category": "Commercial Offices",
    "title": "Private Executive Office",
    "price": "₹50k / mo",
    "location": "Nariman Point, Mumbai",
    "specs": "3 Desks • Sea View",
    "image": "https://images.unsplash.com/photo-1497215898120-1d00c3b01859?w=800&q=80",
    "badges": [],
    "cta": "View Property"
  },
  {
    "id": 40,
    "category": "Commercial Offices",
    "title": "Startup Hub Studio",
    "price": "₹60k / mo",
    "location": "HSR Layout, Bengaluru",
    "specs": "15 Desks • 1,500 Sq.Ft.",
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=800&q=80",
    "badges": [],
    "cta": "View Property"
  },
  {
    "id": 41,
    "category": "Furniture Rentals",
    "title": "Modular Executive Office Setup",
    "price": "₹14,999 / mo",
    "location": "Free Delivery",
    "specs": "10 Workstations • 10 Chairs",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    "badges": [
      {
        "text": "RENTAL BUNDLE",
        "style": "bg-purple-600 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 42,
    "category": "Furniture Rentals",
    "title": "Conference Room Package",
    "price": "₹8,500 / mo",
    "location": "Free Setup",
    "specs": "1 Large Table • 8 Leather Chairs",
    "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    "badges": [
      {
        "text": "PREMIUM",
        "style": "bg-indigo-600 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 43,
    "category": "Furniture Rentals",
    "title": "Ergonomic Desk Setup",
    "price": "₹1,200 / mo",
    "location": "Instant Delivery",
    "specs": "1 Sit-Stand Desk • 1 Mesh Chair",
    "image": "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&q=80",
    "badges": [],
    "cta": "View Property"
  },
  {
    "id": 44,
    "category": "Furniture Rentals",
    "title": "Cafeteria Seating Bundle",
    "price": "₹6,000 / mo",
    "location": "Installation Included",
    "specs": "4 Tables • 16 Chairs",
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    "badges": [],
    "cta": "View Property"
  },
  {
    "id": 45,
    "category": "Furniture Rentals",
    "title": "Director Cabin Premium",
    "price": "₹12,000 / mo",
    "location": "White-glove Service",
    "specs": "Mahogany Desk • Sofa • Boss Chair",
    "image": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
    "badges": [
      {
        "text": "LUXURY",
        "style": "bg-slate-900 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 46,
    "category": "Furniture Rentals",
    "title": "Training Room Essentials",
    "price": "₹18,000 / mo",
    "location": "Free Setup",
    "specs": "20 Folding Desks • 20 Chairs",
    "image": "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80",
    "badges": [],
    "cta": "View Property"
  },
  {
    "id": 47,
    "category": "Furniture Rentals",
    "title": "Lounge Reception Area",
    "price": "₹9,500 / mo",
    "location": "Free Delivery",
    "specs": "1 Reception Desk • 2 Sofas",
    "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    "badges": [
      {
        "text": "AESTHETIC",
        "style": "bg-rose-500 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  },
  {
    "id": 48,
    "category": "Furniture Rentals",
    "title": "Basic WFH Combo",
    "price": "₹800 / mo",
    "location": "Same-day Delivery",
    "specs": "1 Simple Desk • 1 Office Chair",
    "image": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80",
    "badges": [],
    "cta": "View Property"
  },
  {
    "id": 49,
    "category": "Furniture Rentals",
    "title": "Startup 5-Seater Pod",
    "price": "₹7,500 / mo",
    "location": "Free Assembly",
    "specs": "5 Connected Desks • Pedestals",
    "image": "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=800&q=80",
    "badges": [],
    "cta": "View Property"
  },
  {
    "id": 50,
    "category": "Furniture Rentals",
    "title": "Boardroom Tech Package",
    "price": "₹15,000 / mo",
    "location": "Professional Setup",
    "specs": "Smart Table • 12 Ergonomic Chairs",
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=800&q=80",
    "badges": [
      {
        "text": "HIGH TECH",
        "style": "bg-blue-600 text-white",
        "position": "left-3"
      }
    ],
    "cta": "View Property"
  }
];

import Link from 'next/link';

const PropertyShowcase = () => {
  const [activeTab, setActiveTab] = useState("Buy");
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  // Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [city, setCity] = useState("All Cities");
  const [propertyType, setPropertyType] = useState("All Types");
  const [propertyStatus, setPropertyStatus] = useState("All");
  const [bhk, setBhk] = useState("Any BHK");
  const [listedBy, setListedBy] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minSize, setMinSize] = useState("");
  const [maxSize, setMaxSize] = useState("");

  const [appliedFilters, setAppliedFilters] = useState({
    searchTerm: "",
    city: "All Cities",
    propertyType: "All Types",
    propertyStatus: "All",
    bhk: "Any BHK",
    listedBy: "All",
    minPrice: "",
    maxPrice: "",
    minSize: "",
    maxSize: ""
  });

  // Refs for scrolling and clearing filters
  const filterContainerRef = useRef<HTMLDivElement>(null);
  const propertiesGridRef = useRef<HTMLDivElement>(null);

  const handleClearFilters = () => {
    setSearchTerm(''); 
    setCity('All Cities');
    setPropertyType('All Types');
    setPropertyStatus('All');
    setBhk('Any BHK');
    setListedBy('All'); 
    setMinPrice('');
    setMaxPrice('');
    setMinSize('');
    setMaxSize('');
    setAppliedFilters({ searchTerm: '', city: 'All Cities', propertyType: 'All Types', propertyStatus: 'All', bhk: 'Any BHK', listedBy: 'All', minPrice: '', maxPrice: '', minSize: '', maxSize: '' });
  };

  const handleShowProperties = () => {
    if (minPrice && maxPrice && parseFloat(maxPrice) < parseFloat(minPrice)) {
      alert("Maximum Price cannot be less than Minimum Price!");
      return;
    }
    if (minSize && maxSize && parseFloat(maxSize) < parseFloat(minSize)) {
      alert("Maximum Size cannot be less than Minimum Size!");
      return;
    }
    setAppliedFilters({ searchTerm, city, propertyType, propertyStatus, bhk, listedBy, minPrice, maxPrice, minSize, maxSize });
    if (propertiesGridRef.current) {
      const yOffset = -100;
      const y = propertiesGridRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Reset filters when tab changes
  useEffect(() => {
    handleClearFilters();
  }, [activeTab]);

  useEffect(() => {
    // Legacy hash support for direct links
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#properties-buy') setActiveTab('Buy');
      else if (hash === '#properties-rent') setActiveTab('Rent / Lease');
      else if (hash === '#properties-lands') setActiveTab('Lands & Farmlands');
      else if (hash === '#properties-furniture') setActiveTab('Furniture Rentals');
      else if (hash === '#properties-commercial') setActiveTab('Commercial Offices');
    };
    
    // Custom event support for robust in-page navigation
    const handleCustomTabSwitch = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        setActiveTab(customEvent.detail);
      }
    };
    
    // Listen for events
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('switchTab', handleCustomTabSwitch);
    
    // Call once on mount to handle initial load
    handleHashChange();
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('switchTab', handleCustomTabSwitch);
    };
  }, []);

  const normalizedProperties = useMemo(() => {
    return PROPERTIES.map((p, idx) => {
      let lister = "Owner";
      if (idx % 3 === 1) lister = "Broker";
      else if (idx % 3 === 2) lister = "Agency";
      
      let pCity = "Unknown";
      if (p.location) {
        const validCities = ["Mumbai", "Bengaluru", "Delhi", "Pune", "Chennai", "Gurugram", "Hyderabad", "Kolkata", "Noida", "Thane"];
        for (const vc of validCities) {
          if (p.location.toLowerCase().includes(vc.toLowerCase())) {
            pCity = vc;
            break;
          }
        }
      }

      const titleLower = p.title.toLowerCase();
      let pType = "Other";
      if (p.category === 'Lands & Farmlands') {
        if (titleLower.includes('agricultural')) pType = "Agricultural Land";
        else if (titleLower.includes('commercial')) pType = "Commercial Plot";
        else if (titleLower.includes('residential')) pType = "Residential Plot";
        else pType = "Residential Plot";
      } else if (p.category === 'Commercial Offices') {
        if (titleLower.includes('bare-shell')) pType = "Bare-shell Space";
        else if (titleLower.includes('co-working') || titleLower.includes('desk')) pType = "Co-working Seats";
        else if (titleLower.includes('shop') || titleLower.includes('retail')) pType = "Retail Space";
        else pType = "Commercial Space";
      } else if (p.category === 'Furniture Rentals') {
        if (titleLower.includes('bundle') || titleLower.includes('combo')) pType = "Workstation Bundle";
        else if (titleLower.includes('conference') || titleLower.includes('boardroom')) pType = "Conference Room";
        else if (titleLower.includes('cabin')) pType = "Executive Cabin";
        else pType = "Furniture Package";
      } else {
        if (titleLower.includes('apartment') || titleLower.includes('flat') || titleLower.includes('condo')) pType = "Flats / Apartments";
        else if (titleLower.includes('villa') || titleLower.includes('house') || titleLower.includes('bungalow')) pType = "Independent House / Villa";
        else if (titleLower.includes('builder floor')) pType = "Builder Floor";
        else if (titleLower.includes('studio') || titleLower.includes('1 rk')) pType = "Studio Apartment";
        else pType = "Residential Property";
      }

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
      } else { status = "Any Status"; }

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
        normalizedCity: pCity,
        normalizedType: pType,
        normalizedStatus: status,
        normalizedBhk: extractedBhk
      };
    });
  }, []);

  const filterOptions = useMemo(() => {
    const uniqueCities = new Set<string>();
    const uniqueTypes = new Set<string>();
    const uniqueStatuses = new Set<string>();
    const uniqueBhks = new Set<string>();
    const uniqueListers = new Set<string>();

    normalizedProperties.forEach(p => {
      if (p.normalizedCity && p.normalizedCity !== "Unknown") uniqueCities.add(p.normalizedCity);
      if (p.listedBy) uniqueListers.add(p.listedBy);
      if (p.category === activeTab) {
        if (p.normalizedType) uniqueTypes.add(p.normalizedType);
        if (p.normalizedStatus) uniqueStatuses.add(p.normalizedStatus);
        if (p.category === 'Buy' || p.category === 'Rent / Lease') {
          if (p.normalizedBhk && p.normalizedBhk !== "Any BHK") uniqueBhks.add(p.normalizedBhk);
        }
      }
    });

      let hardcodedStatuses: string[] = [];
      if (activeTab === 'Buy' || activeTab === 'All') hardcodedStatuses = ["Newly Constructed (Ready)", "Under Construction", "Old / Resale"];
      else if (activeTab === 'Rent / Lease') hardcodedStatuses = ["Fully Furnished", "Semi-Furnished", "Unfurnished"];
      else if (activeTab === 'Lands & Farmlands') hardcodedStatuses = ["Clear Title Verified", "RERA Approved", "A-Katha"];
      else if (activeTab === 'Commercial Offices') hardcodedStatuses = ["Grade A Building", "Premium Tech Park", "Standard Commercial"];
      else if (activeTab === 'Furniture Rentals') hardcodedStatuses = ["6 Months"];

      return {
        cities: Array.from(uniqueCities).sort(),
        types: Array.from(uniqueTypes).sort(),
        statuses: hardcodedStatuses,
      bhks: Array.from(uniqueBhks).sort(),
      listers: Array.from(uniqueListers).sort(),
    };
  }, [normalizedProperties, activeTab]);

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

  const parseSize = (specs: string) => {
    if (!specs) return 0;
    const sqftMatch = specs.match(/([\d,.]+)\s*Sq\.?Ft/i);
    if (sqftMatch) return parseFloat(sqftMatch[1].replace(/,/g, ''));
    const acreMatch = specs.match(/([\d,.]+)\s*Acre/i);
    if (acreMatch) return parseFloat(acreMatch[1].replace(/,/g, '')) * 43560;
    return 0;
  };

  // Filter properties based on the active tab and applied filters
  const filteredProperties = normalizedProperties.filter(p => {
    if (p.category !== activeTab) return false;
    
    const matchSearch = p.title.toLowerCase().includes(appliedFilters.searchTerm.toLowerCase()) || p.location.toLowerCase().includes(appliedFilters.searchTerm.toLowerCase());
    const matchLister = appliedFilters.listedBy === "All" || p.listedBy === appliedFilters.listedBy;
    const matchCity = appliedFilters.city === "All Cities" || p.normalizedCity === appliedFilters.city;
    const matchPropType = appliedFilters.propertyType === "All Types" || p.normalizedType === appliedFilters.propertyType;
    const matchStatus = appliedFilters.propertyStatus === "All" || p.normalizedStatus === appliedFilters.propertyStatus;
    const matchBhk = appliedFilters.bhk === "Any BHK" || p.normalizedBhk === appliedFilters.bhk;

    let matchPrice = true;
    if (appliedFilters.minPrice || appliedFilters.maxPrice) {
      const pPrice = parsePrice(p.price);
      if (pPrice === 0) {
        matchPrice = false;
      } else {
        if (appliedFilters.minPrice && pPrice < parseFloat(appliedFilters.minPrice)) matchPrice = false;
        if (appliedFilters.maxPrice && pPrice > parseFloat(appliedFilters.maxPrice)) matchPrice = false;
      }
    }

    let matchSize = true;
    if (appliedFilters.minSize || appliedFilters.maxSize) {
      const pSize = parseSize(p.specs);
      if (pSize === 0) {
        matchSize = false;
      } else {
        if (appliedFilters.minSize && pSize < parseFloat(appliedFilters.minSize)) matchSize = false;
        if (appliedFilters.maxSize && pSize > parseFloat(appliedFilters.maxSize)) matchSize = false;
      }
    }

    return matchSearch && matchLister && matchCity && matchPropType && matchStatus && matchBhk && matchPrice && matchSize;
  });

  const displayedProperties = filteredProperties.slice(0, 9);

  return (
    <section className="w-full bg-stone-50 py-8 md:py-16 px-4 md:px-8 font-sans relative">
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 max-w-6xl mx-auto overflow-hidden">
        
        {/* 1. Dynamic Animated Spotlight Feature */}
        <AnimatedSpotlight />

        {/* Unified Filter & Property Section */}
        <div className="relative" ref={filterContainerRef}>
          {/* Anchor targets for scrolling from navbar */}
          <div id="properties-buy" className="absolute -top-28"></div>
          <div id="properties-rent" className="absolute -top-28"></div>
          <div id="properties-lands" className="absolute -top-28"></div>
          <div id="properties-commercial" className="absolute -top-28"></div>
          <div id="properties-furniture" className="absolute -top-28"></div>
          
          {/* 2. Property Multi-Filter Bar (Now unified) */}
          <div className="p-4 sm:p-8 border-b border-slate-100">
            {/* Top Type Tabs */}
            <div className="flex overflow-x-auto whitespace-nowrap gap-4 sm:gap-6 border-b border-slate-100 pb-2 scrollbar-hide">
              {TABS.map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm pb-2 px-1 ${
                    activeTab === tab 
                      ? 'text-slate-900 border-b-2 border-slate-900 font-bold' 
                      : 'text-slate-500 font-medium'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Filter Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-6">
              <input type="text" placeholder="Search by Title or Location..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="col-span-2 sm:col-span-1 w-full px-3 sm:px-3 sm:px-4 py-2.5 sm:py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
              />

              <div>
                <select 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 sm:px-3 sm:px-4 py-2.5 sm:py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                >
                  <option value="All Cities">All Cities</option>
                  {filterOptions.cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <select 
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-3 sm:px-3 sm:px-4 py-2.5 sm:py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                >
                  <option value="All Types">All Types</option>
                  {filterOptions.types.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            {/* Expanded More Options */}
            <AnimatePresence>
              {showMoreOptions && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden mt-6"
                >
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 pt-2">
                    
                    {/* Status / Age */}
                    {(activeTab === 'All' || activeTab === 'Buy' || activeTab === 'Rent / Lease') && (<div className="col-span-2 sm:col-span-1">
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                          {activeTab === 'Rent / Lease' ? 'Furnishing Status' : 'Property Age'}
                        </label>
                        <select 
                          value={propertyStatus}
                          onChange={(e) => setPropertyStatus(e.target.value)}
                          className="w-full px-3 sm:px-3 sm:px-4 py-2.5 sm:py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                        >
                          <option value="All">Any {activeTab === 'Rent / Lease' ? 'Status' : 'Age'}</option>
                          {filterOptions.statuses.map(s => s !== 'All' && s !== 'Any Status' && <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    )}

                    {activeTab === 'Lands & Farmlands' && (
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Legal Status</label>
                        <select 
                          value={propertyStatus}
                          onChange={(e) => setPropertyStatus(e.target.value)}
                          className="w-full px-3 sm:px-3 sm:px-4 py-2.5 sm:py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                        >
                          <option value="All">Any Status</option>
                          {filterOptions.statuses.map(s => s !== 'All' && s !== 'Any Status' && <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    )}

                    {activeTab === 'Commercial Offices' && (
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Grade</label>
                        <select 
                          value={propertyStatus}
                          onChange={(e) => setPropertyStatus(e.target.value)}
                          className="w-full px-3 sm:px-3 sm:px-4 py-2.5 sm:py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                        >
                          <option value="All">Any Grade</option>
                          {filterOptions.statuses.map(s => s !== 'All' && s !== 'Any Status' && <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    )}

                    {activeTab === 'Furniture Rentals' && (
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Rental Duration</label>
                        <select 
                          value={propertyStatus}
                          onChange={(e) => setPropertyStatus(e.target.value)}
                          className="w-full px-3 sm:px-3 sm:px-4 py-2.5 sm:py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                        >
                          <option value="All">Any Duration</option>
                          {filterOptions.statuses.map(s => s !== 'All' && s !== 'Any Status' && <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    )}

                    {/* Manual Price Range */}
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Price / Rent (?)</label>
                      <div className="flex items-center gap-2">
                        <input 
                          type="number" 
                          step="10000"
                          placeholder="Min Price"
                          value={minPrice}
                          onChange={(e) => setMinPrice(e.target.value)}
                          className="w-1/2 px-3 sm:px-3 sm:px-4 py-2.5 sm:py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                        />
                        <span className="text-slate-400 font-medium">-</span>
                        <input 
                          type="number" 
                          step="10000"
                          placeholder="Max Price"
                          value={maxPrice}
                          onChange={(e) => setMaxPrice(e.target.value)}
                          className="w-1/2 px-3 sm:px-3 sm:px-4 py-2.5 sm:py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                        />
                      </div>
                    </div>

                    {/* Manual Size Range */}
                    {activeTab !== 'Furniture Rentals' && (
                      <div className="col-span-2 sm:col-span-1">
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Size (Sq. Ft.)</label>
                        <div className="flex items-center gap-2">
                          <input 
                            type="number" 
                            placeholder="Min Size"
                            value={minSize}
                            onChange={(e) => setMinSize(e.target.value)}
                            className="w-1/2 px-3 sm:px-3 sm:px-4 py-2.5 sm:py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                          />
                          <span className="text-slate-400 font-medium">-</span>
                          <input 
                            type="number" 
                            placeholder="Max Size"
                            value={maxSize}
                            onChange={(e) => setMaxSize(e.target.value)}
                            className="w-1/2 px-3 sm:px-3 sm:px-4 py-2.5 sm:py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                          />
                        </div>
                      </div>
                    )}

                    {(activeTab === 'All' || activeTab === 'Buy' || activeTab === 'Rent / Lease') && (<div className="col-span-2 sm:col-span-1">
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">BHK Capacity</label>
                        <select 
                          value={bhk}
                          onChange={(e) => setBhk(e.target.value)}
                          className="w-full px-3 sm:px-3 sm:px-4 py-2.5 sm:py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
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
                        className="w-full px-3 sm:px-3 sm:px-4 py-2.5 sm:py-2.5 sm:py-3 bg-stone-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ebbbb] text-sm text-slate-700 font-medium"
                      >
                        <option value="All">All (Owner, Agency, Broker)</option>
                        {filterOptions.listers.map(l => l !== 'All' && <option key={l} value={l}>{l}</option>)}
                      </select>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Action Row */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6 pt-4 border-t border-slate-100">
              <button 
                onClick={() => setShowMoreOptions(!showMoreOptions)}
                className="text-xs font-bold text-indigo-600 uppercase tracking-wide flex items-center gap-1 hover:text-indigo-700 transition-colors"
              >
                {showMoreOptions ? '- Less options' : '+ More options'}
              </button>
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleClearFilters}
                  className="text-xs font-bold text-slate-500 uppercase tracking-wide hidden sm:block hover:text-slate-700 transition-colors"
                >
                  Clear filters
                </button>
                <button 
                  onClick={handleShowProperties}
                  className="bg-[#1ebbbb] text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wide hover:bg-[#19a5a5] transition-colors shadow-sm"
                >
                  APPLY FILTER
                  </button>
                </div>
            </div>
          </div>

          {/* 3. Property Cards Grid */}
          <div className="p-4 sm:p-8 bg-slate-50/50" ref={propertiesGridRef}>
            <div key={activeTab} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 animate-slide-up">
              {displayedProperties.length > 0 ? (
                displayedProperties.map((property, index) => (
                  <div key={property.id} className={`bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex-col hover:shadow-md transition-shadow w-full max-w-[320px] mx-auto sm:max-w-none ${index >= 4 ? "hidden md:flex" : "flex"}`}>
                    <div className="aspect-[16/9] bg-slate-200 relative overflow-hidden group cursor-pointer">
                      <ImageCarousel 
                        images={[property.image, ...DUMMY_IMAGES]} 
                        alt={property.title} 
                        imageClassName="absolute inset-0 w-full h-full object-contain bg-slate-100" 
                        objectPosition={(property as any).objectPosition || 'center'}
                      />
                    </div>
                    <div className="p-3 md:p-5 flex flex-col grow">
                      <div className="text-base md:text-xl font-bold text-slate-900 mb-1">{property.price}</div>
                      <div className="flex items-start justify-between gap-1 mb-1 md:mb-0">
                        <div className="text-sm md:text-base font-bold text-slate-800 leading-tight">{property.title}</div>
                        {property.category === 'Rent / Lease' && (
                          <span className="flex items-center shrink-0 text-amber-500 font-bold text-[10px] bg-amber-50 px-1.5 py-0.5 rounded border border-amber-100">
                            <svg className="w-2.5 h-2.5 fill-amber-500 mr-1" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> 4.8
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] md:text-xs text-slate-500 mb-2 md:mb-3 truncate">{property.location}</div>
                      <div className="text-[10px] md:text-xs text-slate-600 font-semibold mb-3 md:mb-6 pb-3 md:pb-4 border-b border-slate-100">
                        {property.specs}
                      </div>
                      <Link href={`/properties/${property.id}`} className="mt-auto w-full bg-slate-900 text-white py-2 md:py-2.5 rounded-lg md:rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-wide flex justify-center items-center hover:bg-slate-800 transition-colors">
                        {property.cta}
                      </Link>
                    </div>
                  </div>
                ))
                            ) : (
                <div className="col-span-1 md:col-span-3 text-center py-10 text-slate-500">
                  No properties found matching your selected filters.
                </div>
              )}
            </div>
            
            {filteredProperties.length > 4 && (
              <div className={`mt-12 flex justify-center ${filteredProperties.length <= 9 ? "md:hidden" : ""}`}>
                <Link 
                  href="/properties"
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-wide hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
                >
                  View More Properties
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PropertyShowcase;





















