import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';
import gayaFounderImg from '../assets/gaya-founder.jpg';

export default function AboutFounder({ onOpenBooking }) {
  const zoomBookingUrl = "https://scheduler.zoom.us/gaya-we-write-you-chill/building-your-personal-brand";
  const gayaLinkedinUrl = "https://www.linkedin.com/in/msgaya/";

  const achievements = [
    { title: 'Millions of views generated for clients through published posts', color: '#2650a8' },
    { title: '100% consistency delivered for full contract duration', color: '#f4ba43' },
    { title: 'Client networks grown by 30-40% weekly via outreach', color: '#2650a8' },
    { title: "Former Assistant Buyer's Agent with domain expertise", color: '#f4ba43' }
  ];

  return (
    <section id="about" className="py-24 bg-white relative z-10 border-t border-slate-200 overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#2650a8]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <TiltCard 
              tiltStrength={6}
              className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden bg-white border border-slate-200 p-2.5 shadow-2xl group"
            >
              <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden relative">
                <img
                  src={gayaFounderImg}
                  alt="Gayathiri (Gaya) - Founder of We Write You Chill"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                {/* Floating Profile Info Card */}
                <div className="absolute bottom-4 left-3 right-3 sm:left-4 sm:right-4 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg flex items-center justify-between gap-2.5 z-20">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#000000]">Gaya</h4>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[9px] sm:text-[10px] font-extrabold shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Active Strategist
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[11.5px] text-[#2650a8] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                      LinkedIn Personal Branding Strategist
                    </p>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={gayaLinkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-2.5 rounded-xl bg-[#2650a8] text-white hover:bg-[#1d4088] transition-colors shadow-sm cursor-pointer shrink-0"
                    aria-label="Gaya's LinkedIn Profile"
                  >
                    <ExternalLink className="w-4 h-4 text-[#f4ba43]" />
                  </motion.a>
                </div>
              </div>
            </TiltCard>

            {/* Quote Badge Below Image */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-4 flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-md"
            >
              <div className="p-2 rounded-xl bg-[#2650a8]/10 text-[#2650a8] shrink-0">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-snug">
                "Posting every single day since Sept 30, 2023. Built on real compounding, not fast food marketing."
              </p>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#2650a8] px-3.5 py-1.5 rounded-full bg-[#2650a8]/10 border border-[#2650a8]/25 inline-block shadow-xs">
              About The Strategist
            </span>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#000000] tracking-tight leading-tight">
              Gaya — <span className="highlight-swipe">LinkedIn Personal Branding Strategist</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-subheading font-medium">
              <p>
                I previously worked as an assistant buyer's agent in Australia. I know firsthand how tough it is to build trust with high-net-worth clients and competitive referral partners.
              </p>

              <p>
                I have been posting on LinkedIn every single day since September 30, 2023 till today. After making several mistakes myself in this process, three core things stood out to grow your brand and that's how the framework was assembled: <strong className="text-[#2650a8] font-bold">Content - Connection - Conversation</strong>.
              </p>

              <p>
                In 2025, I launched LinkedIn content marketing as a full-time business under We Write You Chill. Since then, I have worked with more than 25 property and finance clients to build their personal brands.
              </p>
            </div>

            {/* Achievement Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {achievements.map((item, aIdx) => (
                <motion.div 
                  key={aIdx}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 shadow-xs"
                >
                  <CheckCircle 
                    className="w-4 h-4 shrink-0 mt-0.5" 
                    style={{ color: item.color }} 
                  />
                  <span>{item.title}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={zoomBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] shadow-xl shadow-[#2650a8]/20 transition-all duration-300 cursor-pointer"
              >
                <span>Book Strategy Call With Gaya</span>
                <ArrowRight className="w-4 h-4 text-[#f4ba43]" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={gayaLinkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-300 transition-all shadow-xs"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#2650a8]" />
              </motion.a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
