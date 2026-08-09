import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Play, CheckCircle2, TrendingUp, MessageSquare, Sparkles, Shield } from 'lucide-react';
import gayaFounderImg from '../assets/gaya-founder.jpg';

export default function Hero({ onOpenBooking }) {
  const zoomBookingUrl = "https://scheduler.zoom.us/gaya-we-write-you-chill/building-your-personal-brand";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white bg-grid-pattern">
      
      {/* Background Animated Soft Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#2650a8]/8 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-1/3 right-5 w-[450px] h-[450px] bg-[#f4ba43]/15 rounded-full blur-[120px] pointer-events-none animate-float-reverse"></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#2650a8]/5 rounded-full blur-[100px] pointer-events-none animate-float-slow"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >

          {/* Rating & Trust Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4ba43]/15 border border-[#f4ba43]/35 mb-6 shadow-xs hover:border-[#f4ba43]/60 transition-colors"
          >
            <div className="flex items-center gap-1 text-[#f4ba43]">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ delay: i * 0.15, duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Star className="w-3.5 h-3.5 fill-current" />
                </motion.div>
              ))}
            </div>
            <span className="text-xs font-bold tracking-wide text-slate-800">
              <span className="text-[#2650a8] font-black">25+</span> Property & Finance Clients Supported
            </span>
          </motion.div>

          {/* Main Caption */}
          <motion.h1 
            variants={itemVariants}
            className="max-w-4xl mx-auto font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-[#000000]"
          >
            Three things work on LinkedIn.{' '}
            <span className="text-[#2650a8] highlight-swipe">
              Nobody tells you which three.
            </span>
          </motion.h1>

          {/* Sub Caption */}
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto mt-5 text-base sm:text-lg text-slate-600 font-subheading leading-relaxed"
          >
            LinkedIn branding, content, outreach and video for property and finance experts. <strong className="text-[#000000] font-bold">You bring the expertise.</strong> We build everything that makes people trust you before they call.
          </motion.p>

          {/* Call to Action Group */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
          >
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={zoomBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] shadow-xl shadow-[#2650a8]/25 transition-all duration-300 cursor-pointer border border-[#2650a8]/50"
            >
              <span>Book 1-on-1 Personal Brand Call</span>
              <ArrowRight className="w-4 h-4 text-[#f4ba43] transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          {/* Feature Pills */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-700"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4 text-[#2650a8] shrink-0" />
              <span>Only 45 Mins Needed Every 4 Weeks</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4 text-[#f4ba43] shrink-0" />
              <span>Content - Connection - Conversation System</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4 text-[#2650a8] shrink-0" />
              <span>Includes Free Pre-Onboarding Audit</span>
            </motion.div>
          </motion.div>

          {/* Hero Video / Strategy Assessment Container */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 relative max-w-4xl mx-auto w-full rounded-2xl p-2.5 bg-white border border-slate-200/90 shadow-2xl overflow-hidden group"
          >
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center border border-slate-100">
              
              {/* Background Image Preview with dynamic zoom on hover */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-65 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105" 
                style={{ backgroundImage: `url(${gayaFounderImg})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/85 via-[#000000]/40 to-transparent"></div>

              {/* Floating Live Badge Top Left */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-3 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-left shadow-lg animate-float-slow">
                <div className="p-2 rounded-lg bg-[#2650a8]/10 text-[#2650a8]">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Network Growth</span>
                  </div>
                  <div className="text-xs font-extrabold text-[#000000]">+30% to +40% Weekly</div>
                </div>
              </div>

              {/* Floating Live Badge Bottom Right */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-3 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-left shadow-lg animate-float-reverse">
                <div className="p-2 rounded-lg bg-[#f4ba43]/20 text-[#b45309]">
                  <MessageSquare className="w-4 h-4 text-[#f4ba43]" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Outreach Acceptance</div>
                  <div className="text-xs font-extrabold text-[#000000]">Avg 40% Acceptance</div>
                </div>
              </div>

              {/* Play Button / Zoom Action with Pulsing Rings */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-20 h-20 rounded-full bg-[#2650a8]/40 animate-ping"></span>
                  <motion.a 
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    href={zoomBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#2650a8] text-white flex items-center justify-center shadow-xl shadow-[#2650a8]/50 transition-all duration-300 hover:bg-[#1d4088] cursor-pointer border-2 border-white"
                  >
                    <Play className="w-6 h-6 fill-current text-[#f4ba43] ml-1" />
                  </motion.a>
                </div>
                <div className="text-center px-4">
                  <p className="text-sm sm:text-base font-bold text-white drop-shadow-md">Get Gaya's Free LinkedIn Assessment Plan</p>
                  <p className="text-xs text-slate-200 font-medium">Book a call to receive your customized profile & outreach blueprint</p>
                </div>
              </div>

            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
