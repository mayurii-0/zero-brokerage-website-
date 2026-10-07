"use client";
import React, { useState } from 'react';
import { X, Copy, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
}

export default function ShareModal({ isOpen, onClose, title, url }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    { name: 'WhatsApp', icon: <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.405 0 .025 5.378.025 12.005c0 2.119.552 4.188 1.597 6.007L0 24l6.143-1.611a12.023 12.023 0 005.888 1.53h.005c6.626 0 12.006-5.378 12.006-12.004C24.042 5.378 18.658 0 12.031 0zm0 21.905h-.004a9.98 9.98 0 01-5.088-1.39l-.365-.216-3.784.992.997-3.69-.237-.377A9.957 9.957 0 012.046 12.01c0-5.513 4.488-10.002 10.005-10.002 5.516 0 10.005 4.488 10.005 10.002 0 5.513-4.489 10.003-10.005 10.003zm5.498-7.514c-.302-.151-1.782-.879-2.059-.979-.277-.1-.479-.151-.681.151-.202.302-.78 1.026-.957 1.228-.176.202-.352.227-.654.076-1.503-.761-2.617-1.428-3.626-2.908-.256-.376.252-.355.845-1.542.076-.151.038-.277-.019-.377-.056-.101-.681-1.637-.932-2.242-.244-.588-.493-.508-.681-.518-.176-.008-.378-.008-.58-.008-.202 0-.528.076-.805.377-.277.302-1.057 1.03-1.057 2.511s1.082 2.914 1.233 3.116c.151.202 2.122 3.238 5.139 4.538.718.309 1.278.494 1.716.632.721.228 1.378.196 1.895.119.578-.087 1.782-.728 2.034-1.431.252-.703.252-1.306.176-1.431-.076-.126-.277-.202-.579-.353z"/></svg>, color: 'bg-[#25D366]', url: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + url)}` },
    { name: 'Facebook', icon: <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>, color: 'bg-[#1877F2]', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    { name: 'Twitter', icon: <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, color: 'bg-black', url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}` },
    { name: 'LinkedIn', icon: <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, color: 'bg-[#0A66C2]', url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
    { name: 'Email', icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>, color: 'bg-slate-500', url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}` },
  ];

  return (
    <AnimatePresence>
    {isOpen && (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm" onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <h3 className="font-extrabold text-lg text-slate-800">Share this Property</h3>
          <button onClick={onClose} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors text-slate-500">
            <X size={18} />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-6 justify-center mb-8">
            {shareLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <div className={`w-14 h-14 rounded-full ${link.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                  {link.icon}
                </div>
                <span className="text-xs font-bold text-slate-600">{link.name}</span>
              </a>
            ))}
          </div>

          <div className="relative">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Page Link</div>
            <div className="flex items-center p-1 bg-stone-50 border border-slate-200 rounded-xl">
              <input 
                type="text" 
                readOnly 
                value={url} 
                className="flex-1 bg-transparent px-3 text-sm text-slate-700 font-medium focus:outline-none truncate"
              />
              <button 
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 bg-[#1ebbbb] text-white rounded-lg font-bold text-sm hover:bg-[#19a5a5] transition-colors shrink-0"
              >
                {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    )}
    </AnimatePresence>
  );
}
