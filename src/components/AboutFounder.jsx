import React from 'react';
import { ArrowRight, ShieldCheck, Heart, Sparkles, CheckCircle, ExternalLink } from 'lucide-react';

export default function AboutFounder({ onOpenBooking }) {
  const zoomBookingUrl = "https://scheduler.zoom.us/gaya-we-write-you-chill/building-your-personal-brand";
  const gayaLinkedinUrl = "https://www.linkedin.com/in/msgaya/";

  return (
    <section id="about" className="py-20 bg-white relative z-10 border-t border-slate-200">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden bg-white border border-slate-200 p-2 shadow-lg group">
              <div className="aspect-[4/5] w-full rounded-xl overflow-hidden relative">
                <img 
                  src="/assets/gaya-founder.jpg" 
                  alt="Gayathiri (Gaya) - Founder of We Write You Chill" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-extrabold text-base text-[#000000]">Gaya</h4>
                    <p className="text-xs text-[#2650a8] font-bold">LinkedIn Personal Branding Strategist</p>
                  </div>
                  <a
                    href={gayaLinkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#2650a8] text-white hover:bg-[#1d4088] transition-colors"
                    aria-label="Gaya's LinkedIn Profile"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Floating Quote Badge */}
            <div className="absolute -bottom-5 -right-4 hidden sm:flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-lg max-w-xs z-20">
              <Heart className="w-5 h-5 text-[#2650a8] shrink-0" />
              <p className="text-xs text-slate-700 font-semibold">
                "Posting every single day since Sept 30, 2023. Built on real compounding, not fast food marketing."
              </p>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2650a8] px-3 py-1 rounded-full bg-[#2650a8]/10 border border-[#2650a8]/20 inline-block">
              About The Strategist
            </span>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#000000] tracking-tight leading-tight">
              Gaya — <span className="highlight-swipe">LinkedIn Personal Branding Strategist</span>
            </h2>

            <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed font-subheading">
              <p>
                I previously worked as an <strong className="text-[#000000] font-bold">assistant buyer's agent in Australia</strong>. I know firsthand how tough it is to build trust with high-net-worth clients and competitive referral partners.
              </p>

              <p>
                I have been posting on LinkedIn <strong className="text-[#000000] font-bold">every single day since September 30, 2023 till today</strong>. After making several mistakes myself in this process, three core things stood out to grow your brand — and that's how the framework was assembled: <strong className="text-[#2650a8] font-bold">Content - Connection - Conversation</strong>.
              </p>

              <p>
                In 2025, I launched LinkedIn content marketing as a full-time business under <strong className="text-[#000000] font-bold">We Write You Chill</strong>. Since then, I have worked with more than <strong className="text-[#2650a8] font-extrabold">25 property and finance clients</strong> to build their personal brands.
              </p>
            </div>

            {/* Achievement Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                <CheckCircle className="w-3.5 h-3.5 text-[#2650a8] shrink-0 mt-0.5" />
                <span>Millions of views generated for clients through published posts</span>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                <CheckCircle className="w-3.5 h-3.5 text-[#f4ba43] shrink-0 mt-0.5" />
                <span>100% consistency delivered for full contract duration</span>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                <CheckCircle className="w-3.5 h-3.5 text-[#2650a8] shrink-0 mt-0.5" />
                <span>Client networks grown by 30-40% weekly via outreach</span>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                <CheckCircle className="w-3.5 h-3.5 text-[#f4ba43] shrink-0 mt-0.5" />
                <span>Former Assistant Buyer's Agent with domain expertise</span>
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center gap-3.5">
              <a
                href={zoomBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-sm font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] shadow-lg shadow-[#2650a8]/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <span>Book Strategy Call With Gaya</span>
                <ArrowRight className="w-4 h-4 text-[#f4ba43]" />
              </a>

              <a
                href={gayaLinkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-300 transition-all"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#2650a8]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
