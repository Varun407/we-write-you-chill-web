import React from 'react';
import { ArrowUp, MessageCircle, ExternalLink, Calendar } from 'lucide-react';
import { getAssetPath } from '../utils/assetPath';

export default function Footer({ onOpenBooking }) {
  const zoomBookingUrl = "https://scheduler.zoom.us/gaya-we-write-you-chill/building-your-personal-brand";
  const gayaLinkedinUrl = "https://www.linkedin.com/in/msgaya/";
  const whatsappUrl = "https://wa.me/61433035338";
  const instagramUrl = "https://www.instagram.com/wewriteyouchill";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 relative z-10 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-200">
          
          {/* Brand Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={getAssetPath('we-write-you-chill-logo.png')} 
                alt="We Write You Chill Logo" 
                className="h-10 w-auto object-contain"
              />
              <span className="font-heading font-black text-lg text-[#000000] tracking-tight">
                WE WRITE <span className="text-[#2650a8]">YOU CHILL</span>
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-subheading max-w-md">
              LinkedIn branding, content, outreach and video for property and finance experts. You bring the expertise. We build everything that makes people trust it before they call.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={gayaLinkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#2650a8] hover:border-[#2650a8] transition-all shadow-xs"
                aria-label="Gaya's LinkedIn Profile"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#ec4899] hover:border-[#ec4899] transition-all shadow-xs"
                aria-label="Instagram Page"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-500 transition-all shadow-xs"
                aria-label="WhatsApp Direct Message"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#000000] uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li><a href="#results" className="hover:text-[#2650a8] transition-colors">Client Results</a></li>
              <li><a href="#services" className="hover:text-[#2650a8] transition-colors">3 Support Options</a></li>
              <li><a href="#workflow" className="hover:text-[#2650a8] transition-colors">5-Step Process</a></li>
              <li><a href="#reviews" className="hover:text-[#2650a8] transition-colors">Client Reviews</a></li>
              <li><a href="#about" className="hover:text-[#2650a8] transition-colors">About Gaya</a></li>
              <li><a href="#faq" className="hover:text-[#2650a8] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact & Booking */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-sm text-[#000000] uppercase tracking-wider">Book Strategy Call</h4>
            <p className="text-xs text-slate-600 font-medium">
              Get Gaya's free LinkedIn assessment plan showing missing gaps & exact steps to fix them.
            </p>
            <a
              href={zoomBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-5 rounded-full text-xs font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] shadow-md transition-all inline-flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#f4ba43]" />
              <span>Book Zoom Strategy Call</span>
            </a>

            <div className="space-y-2 text-xs text-slate-700 font-semibold pt-2">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#2650a8]">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: +61 0433 035 338</span>
              </a>
              <a href={gayaLinkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#2650a8]">
                <ExternalLink className="w-4 h-4 text-[#2650a8]" />
                <span>LinkedIn: /in/msgaya</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <div>
            © {new Date().getFullYear()} We Write You Chill. All rights reserved. Built for Real Estate & Finance Experts.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-600 hover:text-[#2650a8] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#2650a8]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
