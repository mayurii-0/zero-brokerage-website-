"use client";
import React, { useEffect, useState, useRef } from 'react';

// Custom hook to track intersection
function useOnScreen(ref: React.RefObject<Element | null>, threshold = 0.2) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state whenever intersection changes (scroll up or down)
        setIntersecting(entry.isIntersecting);
      },
      {
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, threshold]);

  return isIntersecting;
}

// Counter component
const Counter = ({ target, suffix = "", isVisible, decimals = 0 }: { target: number, suffix?: string, isVisible: boolean, decimals?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      // Reset when out of view so it counts again when scrolling back
      setCount(0);
      return;
    }
    
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeOutExpo easing function for smooth deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(easeProgress * target);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [target, isVisible]);

  return <span>{count.toFixed(decimals)}{suffix}</span>;
};

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);

  return (
    <section ref={sectionRef} className="w-full bg-stone-50 pt-16 pb-8 px-4 md:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1: Property Listings */}
        <div 
          className={`bg-white rounded-2xl p-6 lg:p-8 shadow-sm transition-all duration-700 delay-100 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight">
            <Counter target={2} suffix="k+" isVisible={isVisible} />
          </h2>
          <h3 className="text-sm font-semibold text-slate-800 mt-10 mb-2">Property Listings</h3>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Showcasing a wide range of available residential, commercial, and plot properties.
          </p>
        </div>

        {/* Card 2: Agency Network */}
        <div 
          className={`bg-white rounded-2xl p-6 lg:p-8 shadow-sm transition-all duration-700 delay-200 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight">
            <Counter target={200} suffix="+" isVisible={isVisible} />
          </h2>
          <h3 className="text-sm font-semibold text-slate-800 mt-10 mb-2">Agency Network</h3>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            A powerfully connected network of verified agencies, agents, and top brokers.
          </p>
        </div>

        {/* Card 3: Property Visits */}
        <div 
          className={`bg-white rounded-2xl p-6 lg:p-8 shadow-sm transition-all duration-700 delay-300 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight">
            <Counter target={1.5} suffix="k+" isVisible={isVisible} decimals={1} />
          </h2>
          <h3 className="text-sm font-semibold text-slate-800 mt-10 mb-2">Property Visits</h3>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Seamlessly scheduling and managing on-site property visits for customers.
          </p>
        </div>

        {/* Card 4: Cities Served */}
        <div 
          className={`bg-white rounded-2xl p-6 lg:p-8 shadow-sm transition-all duration-700 delay-400 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight">
            <Counter target={12} suffix="+" isVisible={isVisible} />
          </h2>
          <h3 className="text-sm font-semibold text-slate-800 mt-10 mb-2">Cities Served</h3>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Bringing our premium real estate portal services to top locations nationwide.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Stats;
