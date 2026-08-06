import React from 'react';
import { Star, ArrowRight, Play, CheckCircle2, Sparkles, TrendingUp, Users, MessageSquare } from 'lucide-react';

export default function Hero({ onOpenBooking, onOpenEnquiry }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-radial from-[#121829] via-[#0b0c10] to-[#0b0c10]">
      
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3367d1]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#8b3dff]/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border border-white/10 mb-8 shadow-sm">
          <div className="flex items-center gap-1 text-[#f4ba43]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="text-xs font-semibold tracking-wide text-gray-200">
            <span className="text-[#60a5fa] font-extrabold">20+</span> Real Estate Professionals Helped
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="max-w-5xl mx-auto font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] text-white">
          We Create Content & Strategy That Drive{' '}
          <span className="text-gradient-accent underline decoration-[#3367d1]/40 decoration-wavy">
            Inbound Deals.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto mt-6 text-lg sm:text-xl text-gray-300 font-subheading leading-relaxed">
          Not viral views or virtual pats on the back from other agents — <strong className="text-white font-semibold">real client enquiries</strong>. The done-for-you LinkedIn engine for Realtors, Buyer's Agents & Mortgage Brokers.
        </p>

        {/* Call to Action Group */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#3367d1] via-[#60a5fa] to-[#8b3dff] hover:opacity-95 shadow-xl shadow-[#3367d1]/30 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
          >
            <span>Book 1-on-1 Strategy Call</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-gray-200 glass-card glass-card-hover border border-white/15"
          >
            <span>Submit Enquiry</span>
          </button>
        </div>

        {/* Feature Pills */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#60a5fa]" />
            <span>100% Authentic Voice Discovery</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#8b3dff]" />
            <span>Reusable Content Pillars & Templates</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#f4ba43]" />
            <span>Active Network Outreach System</span>
          </div>
        </div>

        {/* Hero Video & Asset Visual Container */}
        <div className="mt-14 relative max-w-5xl mx-auto rounded-3xl p-2 glass-card border border-white/15 shadow-2xl overflow-hidden group">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#111827] to-[#0f172a] flex items-center justify-center border border-white/10">
            
            {/* Background Preview Graphic */}
            <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity" style={{ backgroundImage: `url('/assets/gaya-founder.jpg')` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/60 to-transparent"></div>

            {/* Floating Stats Badges on Video Container */}
            <div className="absolute top-6 left-6 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-xl glass-card border border-white/15 text-left animate-bounce duration-1000">
              <TrendingUp className="w-5 h-5 text-[#60a5fa]" />
              <div>
                <div className="text-xs text-gray-400">Average Leads Increase</div>
                <div className="text-sm font-bold text-white">+340% Inbound</div>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-xl glass-card border border-white/15 text-left">
              <MessageSquare className="w-5 h-5 text-[#8b3dff]" />
              <div>
                <div className="text-xs text-gray-400">Target Audience</div>
                <div className="text-sm font-bold text-white">Realtors & Brokers</div>
              </div>
            </div>

            {/* Play Button Overlay */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <button 
                onClick={onOpenBooking}
                className="w-20 h-20 rounded-full bg-[#3367d1] text-white flex items-center justify-center shadow-2xl shadow-[#3367d1]/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2563eb] cursor-pointer"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </button>
              <div className="text-center">
                <p className="text-base font-semibold text-white">See How Gaya Transforms Real Estate LinkedIn Profiles</p>
                <p className="text-xs text-gray-400">Click to watch strategy breakdown & client case studies</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
