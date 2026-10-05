                            import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#111111] text-white relative overflow-hidden font-sans border-t border-white/5">
      {/* Massive Faint Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.02] select-none text-[15vw] font-black whitespace-nowrap top-[-5%] left-0 right-0 tracking-tighter">
        Zero Broker
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-8 md:pt-20 pb-6 md:pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-6 md:mb-16">
          
          {/* Brand & Description (Col span 5) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="mb-4 md:mb-8">
              {/* Logo / Brand */}
              <div className="flex items-center gap-3">
                <div className="flex items-center text-[#1ebbbb]">
                  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V5a2 2 0 012-2h4a2 2 0 012 2v2m4 14V11a2 2 0 00-2-2h-4v12m-6-8h2m-2 4h2m6-8h2m-2 4h2" />
                  </svg>
                </div>
                <Link href="/" className="text-2xl font-extrabold tracking-tight">
                  <span className="text-white font-[800]">Zero</span>
                  <span className="text-[#1ebbbb]">Broker</span>
                </Link>
              </div>
            </div>
            <p className="text-white/50 text-[15px] leading-relaxed max-w-sm mb-4 md:mb-8 font-medium">
              Transforming real estate with smarter property solutions, seamless connections, and a truly premium broker-free experience.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#1ebbbb] hover:bg-[#1ebbbb] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#1ebbbb] hover:bg-[#1ebbbb] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#1ebbbb] hover:bg-[#1ebbbb] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@zerobroker.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#1ebbbb] hover:bg-[#1ebbbb] transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links (Col span 3) */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="text-[13px] font-bold tracking-widest uppercase mb-4 md:mb-8 text-white/90">QUICK LINKS</h4>
            <ul className="flex flex-col gap-2 md:gap-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'Properties & Assets', href: '/properties' },
                { label: 'Services', href: '/services' },
                { label: 'For Agency', href: '/agency' },
                { label: 'About Us', href: '/about' }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/50 hover:text-white text-[15px] font-medium transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Col span 4) */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="text-[13px] font-bold tracking-widest uppercase mb-4 md:mb-8 text-white/90">CONTACT US</h4>
            <ul className="flex flex-col gap-4 md:gap-6">
              <li>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@zerobroker.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/50 hover:text-white text-[15px] font-medium transition-colors group">
                  <Mail size={18} className="text-white/40 group-hover:text-white/80 transition-colors" />
                  hello@zerobroker.com
                </a>
              </li>
              <li>
                <a href="tel:+918867589797" className="flex items-center gap-3 text-white/50 hover:text-white text-[15px] font-medium transition-colors group">
                  <Phone size={18} className="text-white/40 group-hover:text-white/80 transition-colors" />
                  +918867589797
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-[15px] font-medium leading-relaxed group hover:text-white transition-colors cursor-default">
                <MapPin size={18} className="text-white/40 group-hover:text-white/80 transition-colors shrink-0 mt-1" />
                <span>
                  Golden Towers, #30, 4th Floor, 13th Cross,<br />
                  Upper Palace Orchards, Sadashivanagar,<br />
                  Bengaluru 560080
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-4">
          <p className="text-[11px] font-bold tracking-widest text-white/40 uppercase text-center md:text-left">
            Ã‚Â© 2026 ZERO BROKER. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-[11px] font-bold tracking-widest text-white/40 uppercase text-center">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF USE</a>
            <a href="#" className="hover:text-white transition-colors">COOKIE POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
