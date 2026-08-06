import React from 'react';
import { Star, ArrowRight, Play, CheckCircle2, TrendingUp, MessageSquare } from 'lucide-react';

export default function Hero({ onOpenBooking, onOpenEnquiry }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      
      {/* Background Soft Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#2650a8]/8 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#f4ba43]/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#f4ba43]/15 border border-[#f4ba43]/30 mb-8 shadow-sm">
          <div className="flex items-center gap-1 text-[#f4ba43]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="text-xs font-bold tracking-wide text-slate-800">
            <span className="text-[#2650a8] font-extrabold">20+</span> Real Estate Professionals Helped
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="max-w-5xl mx-auto font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] text-[#000000]">
          We Create Content & Strategy That Drive{' '}
          <span className="text-[#2650a8] highlight-swipe">
            Inbound Deals.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto mt-6 text-lg sm:text-xl text-slate-600 font-subheading leading-relaxed">
          Not viral views or virtual pats on the back from other agents — <strong className="text-[#000000] font-bold">real client enquiries</strong>. The done-for-you LinkedIn engine for Realtors, Buyer's Agents & Mortgage Brokers.
        </p>

        {/* Call to Action Group */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] shadow-xl shadow-[#2650a8]/25 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
          >
            <span>Book 1-on-1 Strategy Call</span>
            <ArrowRight className="w-5 h-5 text-[#f4ba43]" />
          </button>
          
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-300 transition-all shadow-sm"
          >
            <span>Submit Enquiry</span>
          </button>
        </div>

        {/* Feature Pills */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#2650a8]" />
            <span>100% Authentic Voice Discovery</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#f4ba43]" />
            <span>Reusable Content Pillars & Templates</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#2650a8]" />
            <span>Active Network Outreach System</span>
          </div>
        </div>

        {/* Hero Video Container */}
        <div className="mt-14 relative max-w-5xl mx-auto rounded-3xl p-3 bg-white border border-slate-200 shadow-2xl overflow-hidden group">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center border border-slate-100">
            
            {/* Background Image Preview */}
            <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-luminosity" style={{ backgroundImage: `url('/assets/gaya-founder.jpg')` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/30 to-transparent"></div>

            {/* Floating Stats Badges */}
            <div className="absolute top-6 left-6 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-left shadow-lg">
              <TrendingUp className="w-5 h-5 text-[#2650a8]" />
              <div>
                <div className="text-xs text-slate-500 font-medium">Average Leads Increase</div>
                <div className="text-sm font-bold text-[#000000]">+340% Inbound</div>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-left shadow-lg">
              <MessageSquare className="w-5 h-5 text-[#f4ba43]" />
              <div>
                <div className="text-xs text-slate-500 font-medium">Target Audience</div>
                <div className="text-sm font-bold text-[#000000]">Realtors & Brokers</div>
              </div>
            </div>

            {/* Play Button Overlay */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <button 
                onClick={onOpenBooking}
                className="w-20 h-20 rounded-full bg-[#2650a8] text-white flex items-center justify-center shadow-2xl shadow-[#2650a8]/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1d4088] cursor-pointer border-2 border-white"
              >
                <Play className="w-8 h-8 fill-current text-[#f4ba43] ml-1" />
              </button>
              <div className="text-center">
                <p className="text-base font-bold text-white drop-shadow-md">See How Gaya Transforms Real Estate LinkedIn Profiles</p>
                <p className="text-xs text-slate-200 font-medium">Click to watch strategy breakdown & client case studies</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
