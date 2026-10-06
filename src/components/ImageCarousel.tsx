"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  alt?: string;
  imageClassName?: string;
  containerClassName?: string;
  objectPosition?: string;
}

export default function ImageCarousel({ images, alt = "Property", imageClassName = "", containerClassName = "w-full h-full", objectPosition = "center" }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -scrollContainerRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollContainerRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const index = Math.round(container.scrollLeft / container.clientWidth);
      if (index !== currentIndex) {
        setCurrentIndex(index);
      }
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered && images.length > 1) {
      interval = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const currentScroll = container.scrollLeft;
          const maxScroll = container.scrollWidth - container.clientWidth;
          
          let nextScroll = currentScroll + container.clientWidth;
          if (nextScroll > maxScroll + 10) {
            nextScroll = 0;
          }
          
          container.scrollTo({ left: nextScroll, behavior: 'smooth' });
        }
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <div 
      className={`relative group overflow-hidden ${containerClassName}`} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-full h-full flex-shrink-0 snap-center relative bg-slate-100">
            <img 
              src={img} 
              alt={`${alt} - view ${idx + 1}`} 
              loading={idx === 0 ? "eager" : "lazy"}
              className={`w-full h-full ${imageClassName}`}
              style={{ objectPosition }}
            />
          </div>
        ))}
      </div>

      {/* Desktop Arrows - show only on hover and if there are multiple images */}
      {images.length > 1 && (
        <>
          <button 
            onClick={prev}
            className={`absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 shadow-md text-slate-800 transition-all duration-200 hover:bg-white hover:scale-105 z-10 ${isHovered && currentIndex > 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'} hidden md:flex`}
          >
            <ChevronLeft size={18} />
          </button>
          
          <button 
            onClick={next}
            className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 shadow-md text-slate-800 transition-all duration-200 hover:bg-white hover:scale-105 z-10 ${isHovered && currentIndex < images.length - 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'} hidden md:flex`}
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none">
          {images.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/60'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
