import React from 'react';
import { Star, ArrowRight, Play, CheckCircle2, TrendingUp, MessageSquare } from 'lucide-react';

export default function Hero({ onOpenBooking, onOpenEnquiry }) {
  const zoomBookingUrl = "https://scheduler.zoom.us/gaya-we-write-you-chill/building-your-personal-brand";

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white">
      
      {/* Background Soft Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#2650a8]/8 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#f4ba43]/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Rating & Trust Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4ba43]/15 border border-[#f4ba43]/30 mb-6 shadow-xs">
          <div className="flex items-center gap-1 text-[#f4ba43]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="text-xs font-bold tracking-wide text-slate-800">
            <span className="text-[#2650a8] font-black">25+</span> Property & Finance Clients Supported
          </span>
        </div>

        {/* Main Caption */}
        <h1 className="max-w-4xl mx-auto font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-[#000000]">
          Three things work on LinkedIn.{' '}
          <span className="text-[#2650a8] highlight-swipe">
            Nobody tells you which three.
          </span>
        </h1>

        {/* Sub Caption */}
        <p className="max-w-2xl mx-auto mt-5 text-base sm:text-lg text-slate-600 font-subheading leading-relaxed">
          LinkedIn branding, content, outreach and video for property and finance experts. <strong className="text-[#000000] font-bold">You bring the expertise.</strong> We build everything that makes people trust it before they call.
        </p>

        {/* Call to Action Group */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href={zoomBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] shadow-lg shadow-[#2650a8]/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <span>Book 1-on-1 Personal Brand Call</span>
            <ArrowRight className="w-4 h-4 text-[#f4ba43]" />
          </a>
          
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-300 transition-all shadow-xs cursor-pointer"
          >
            <span>Submit Quick Enquiry</span>
          </button>
        </div>

        {/* Feature Pills */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-5 text-xs sm:text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#2650a8]" />
            <span>Only 45 Mins Needed Every 4 Weeks</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#f4ba43]" />
            <span>Content - Connection - Conversation System</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#2650a8]" />
            <span>Includes Free Pre-Onboarding Audit</span>
          </div>
        </div>

        {/* Hero Video / Strategy Assessment Container */}
        <div className="mt-12 relative max-w-4xl mx-auto rounded-2xl p-2.5 bg-white border border-slate-200 shadow-xl overflow-hidden group">
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center border border-slate-100">
            
            {/* Background Image Preview */}
            <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-luminosity" style={{ backgroundImage: `url('./assets/gaya-founder.jpg')` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/30 to-transparent"></div>

            {/* Floating Badges */}
            <div className="absolute top-5 left-5 hidden sm:flex items-center gap-3 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-left shadow-md">
              <TrendingUp className="w-4 h-4 text-[#2650a8]" />
              <div>
                <div className="text-[10px] text-slate-500 font-medium">Network Growth</div>
                <div className="text-xs font-bold text-[#000000]">+30% to +40% Weekly</div>
              </div>
            </div>

            <div className="absolute bottom-5 right-5 hidden sm:flex items-center gap-3 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-left shadow-md">
              <MessageSquare className="w-4 h-4 text-[#f4ba43]" />
              <div>
                <div className="text-[10px] text-slate-500 font-medium">Outreach Acceptance</div>
                <div className="text-xs font-bold text-[#000000]">Avg 40% Acceptance</div>
              </div>
            </div>

            {/* Play Button / Zoom Action */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              <a 
                href={zoomBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-[#2650a8] text-white flex items-center justify-center shadow-xl shadow-[#2650a8]/40 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1d4088] cursor-pointer border-2 border-white"
              >
                <Play className="w-6 h-6 fill-current text-[#f4ba43] ml-1" />
              </a>
              <div className="text-center px-4">
                <p className="text-sm font-bold text-white drop-shadow-md">Get Gaya's Free LinkedIn Assessment Plan</p>
                <p className="text-xs text-slate-200 font-medium">Book a call to receive your customized profile & outreach blueprint</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
