import React from 'react';
import { ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function AboutFounder({ onOpenBooking }) {
  return (
    <section id="about" className="py-24 bg-[#f8fafc] relative z-10 border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden bg-white border border-slate-200 p-2.5 shadow-xl group">
              <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden relative">
                <img 
                  src="/assets/gaya-founder.jpg" 
                  alt="Gayathiri (Gaya) - Founder of We Write You Chill" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                  <h4 className="font-heading font-extrabold text-lg text-[#000000]">Gayathiri (Gaya)</h4>
                  <p className="text-xs text-[#2650a8] font-bold">Founder & Head of Content Strategy</p>
                </div>
              </div>
            </div>

            {/* Floating Quote Badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-xl max-w-xs z-20">
              <Heart className="w-6 h-6 text-[#2650a8] shrink-0" />
              <p className="text-xs text-slate-700 font-semibold">
                "Content should sound like human conversations, not sales brochures."
              </p>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2650a8] px-3.5 py-1.5 rounded-full bg-[#2650a8]/10 border border-[#2650a8]/20 inline-block">
              Meet The Founder
            </span>

            <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#000000] tracking-tight leading-tight">
              "I Help Real Estate Experts Build Authority <span className="highlight-swipe">Without Being Salesy</span>"
            </h2>

            <div className="space-y-4 text-base text-slate-700 leading-relaxed font-subheading">
              <p>
                Hi, I'm <strong className="text-[#000000] font-bold">Gaya</strong>. Over the last few years, I've worked closely with Buyer's Agents, Realtors, and Mortgage Brokers who knew they needed a strong online presence — but hated generic, unnatural marketing.
              </p>

              <p>
                Most agents either post irregularly, overthink every sentence, or hire cheap agencies that pump out robotic AI posts that damage their credibility.
              </p>

              <p>
                At <strong className="text-[#000000] font-bold">We Write You Chill</strong>, we do things differently. We sit down with you, extract your genuine stories and market wisdom, and craft a content engine that reflects your actual voice. You get booked strategy calls, warm referrals, and reusable assets — while keeping your focus where it belongs: on your clients.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-800">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs font-semibold">
                <ShieldCheck className="w-5 h-5 text-[#2650a8]" />
                <span>100% Personal Voice Guarantee</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs font-semibold">
                <Sparkles className="w-5 h-5 text-[#f4ba43]" />
                <span>Handover Templates Included</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] shadow-xl shadow-[#2650a8]/25 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
              >
                <span>Book a Discovery Call with Gaya</span>
                <ArrowRight className="w-5 h-5 text-[#f4ba43]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
