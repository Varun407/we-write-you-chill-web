import React from 'react';
import { Quote, ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function AboutFounder({ onOpenBooking }) {
  return (
    <section id="about" className="py-24 bg-[#0a0b0e] relative z-10 border-t border-white/5">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#3367d1]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden glass-card border border-white/15 p-2 shadow-2xl group">
              <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden relative">
                <img 
                  src="/assets/gaya-founder.jpg" 
                  alt="Gayathiri (Gaya) - Founder of We Write You Chill" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-card border border-white/20">
                  <h4 className="font-heading font-bold text-lg text-white">Gayathiri (Gaya)</h4>
                  <p className="text-xs text-[#60a5fa] font-medium">Founder & Head of Content Strategy</p>
                </div>
              </div>
            </div>

            {/* Floating Quote Badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl glass-card border border-white/20 shadow-2xl max-w-xs">
              <Heart className="w-6 h-6 text-[#ec4899] shrink-0" />
              <p className="text-xs text-gray-200 font-medium">
                "Content should sound like human conversations, not sales brochures."
              </p>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#60a5fa] px-3 py-1 rounded-full glass-card border border-[#3367d1]/30 inline-block">
              Meet The Founder
            </span>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              "I Help Real Estate Experts Build Authority <span className="highlight-swipe">Without Being Salesy</span>"
            </h2>

            <div className="space-y-4 text-base text-gray-300 leading-relaxed font-subheading">
              <p>
                Hi, I'm <strong className="text-white">Gaya</strong>. Over the last few years, I've worked closely with Buyer's Agents, Realtors, and Mortgage Brokers who knew they needed a strong online presence — but hated generic, unnatural marketing.
              </p>

              <p>
                Most agents either post irregularly, overthink every sentence, or hire cheap agencies that pump out robotic AI posts that damage their credibility.
              </p>

              <p>
                At <strong className="text-white">We Write You Chill</strong>, we do things differently. We sit down with you, extract your genuine stories and market wisdom, and craft a content engine that reflects your actual voice. You get booked strategy calls, warm referrals, and reusable assets — while keeping your focus where it belongs: on your clients.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
              <div className="flex items-center gap-3 p-3 rounded-xl glass-card border border-white/10">
                <ShieldCheck className="w-5 h-5 text-[#60a5fa]" />
                <span>100% Personal Voice Guarantee</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl glass-card border border-white/10">
                <Sparkles className="w-5 h-5 text-[#8b3dff]" />
                <span>Handover Templates Included</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#3367d1] to-[#8b3dff] hover:opacity-95 shadow-xl shadow-[#3367d1]/30 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
              >
                <span>Book a Discovery Call with Gaya</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
