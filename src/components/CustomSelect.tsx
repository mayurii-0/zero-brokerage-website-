"use client";
import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CustomSelectProps {
  value: string;
  onChange: (e: { target: { value: string } }) => void;
  className?: string;
  children: ReactNode;
}

export default function CustomSelect({ value, onChange, className = '', children }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleScroll = (event: Event) => {
      // Prevent closing if scrolling inside the dropdown itself
      if (containerRef.current && containerRef.current.contains(event.target as Node)) {
        return;
      }
      if (isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isOpen]);

  const options: { value: string; label: ReactNode }[] = [];
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === 'option') {
      const element = child as React.ReactElement<any>;
      options.push({
        value: element.props.value,
        label: element.props.children,
      });
    } else if (child && Array.isArray(child)) {
        React.Children.forEach(child, (subChild) => {
             if (React.isValidElement(subChild) && subChild.type === 'option') {
                const subElement = subChild as React.ReactElement<any>;
                options.push({
                    value: subElement.props.value,
                    label: subElement.props.children,
                });
             }
        });
    } else if (child) {
        if ((child as any).props && Array.isArray((child as any).props.children)) {
            React.Children.forEach((child as any).props.children, (subChild) => {
                 if (React.isValidElement(subChild) && subChild.type === 'option') {
                    const subElement = subChild as React.ReactElement<any>;
                    options.push({
                        value: subElement.props.value,
                        label: subElement.props.children,
                    });
                 }
            });
        }
    }
  });

  const flatOptions: { value: string; label: ReactNode }[] = [];
  const extractOptions = (nodes: ReactNode) => {
    React.Children.forEach(nodes, (node) => {
      if (!node) return;
      if (React.isValidElement(node) && node.type === 'option') {
        const element = node as React.ReactElement<any>;
        flatOptions.push({
          value: element.props.value,
          label: element.props.children,
        });
      } else if (Array.isArray(node)) {
        extractOptions(node);
      } else if (React.isValidElement(node) && node.type === React.Fragment) {
        const element = node as React.ReactElement<any>;
        extractOptions(element.props.children);
      }
    });
  };
  extractOptions(children);

  const selectedOption = flatOptions.find((opt) => opt.value === value) || flatOptions[0];

  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full text-left transition-all ${className.replace('focus:ring-[#1ebbbb]', '')} ${isOpen ? 'ring-2 ring-[#1ebbbb]' : ''}`}
      >
        <span className="truncate block pr-4">{selectedOption?.label}</span>
        <ChevronDown size={16} className={`text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute z-[60] w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-xl max-h-60 overflow-y-auto py-1 overflow-x-hidden"
          >
            {flatOptions.map((opt, i) => (
              <li
                key={`${opt.value}-${i}`}
                onClick={() => {
                  onChange({ target: { value: opt.value } });
                  setIsOpen(false);
                }}
                className={`px-4 py-2.5 text-sm cursor-pointer transition-colors
                  ${value === opt.value ? 'bg-[#1ebbbb]/10 text-[#1ebbbb] font-bold' : 'text-slate-700 hover:bg-[#1ebbbb] hover:text-white'}
                `}
              >
                {opt.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

