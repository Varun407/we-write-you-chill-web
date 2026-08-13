import React from 'react';
import { motion } from 'framer-motion';
import { Play, TrendingUp, MessageSquare } from 'lucide-react';
import gayaFounderImg from '../assets/gaya-founder.jpg';

export default function VideoShowcase() {
  const zoomBookingUrl = "https://scheduler.zoom.us/gaya-we-write-you-chill/building-your-personal-brand";

  return (
    <section id="showcase" className="snap-section min-h-[auto] md:min-h-screen py-10 sm:py-20 bg-slate-50/50 border-t border-slate-200/80 relative z-10 overflow-hidden flex flex-col items-center justify-center">

      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#2650a8]/6 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-[#f4ba43]/10 rounded-full blur-[80px] sm:blur-[130px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Video Presentation Container without text content or floating badges */}
        <div className="relative max-w-4xl mx-auto w-full">

          {/* Main Video Box with Cyclic Color Gradient Border Flow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl sm:rounded-3xl p-1.5 sm:p-2.5 bg-white border border-slate-200 shadow-2xl overflow-hidden cyclic-border-flow"
          >
            <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center border border-slate-100">

              {/* Background Image Preview */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-65 mix-blend-luminosity transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                style={{ backgroundImage: `url(${gayaFounderImg})` }}
              ></div>
              
              {/* Requested Dark Aesthetic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/85 via-[#000000]/40 to-transparent"></div>

              {/* Badges Top Left & Bottom Right (Hidden on very small screens to give play button full breathing room) */}
              <div className="hidden sm:flex absolute top-4 left-4 sm:top-6 sm:left-6 items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-left shadow-lg z-20">
                <div className="p-1.5 sm:p-2 rounded-lg bg-[#2650a8]/10 text-[#2650a8]">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider">Network Growth</span>
                  </div>
                  <div className="text-[11px] sm:text-xs font-extrabold text-[#000000]">+30% to +40% Weekly</div>
                </div>
              </div>

              <div className="hidden sm:flex absolute bottom-4 right-4 sm:bottom-6 sm:right-6 items-center gap-2.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-left shadow-lg z-20">
                <div className="p-1.5 sm:p-2 rounded-lg bg-[#f4ba43]/20 text-[#b45309]">
                  <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f4ba43]" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider">Outreach Acceptance</div>
                  <div className="text-[11px] sm:text-xs font-extrabold text-[#000000]">Avg 40% Acceptance</div>
                </div>
              </div>

              {/* Play Button with Radar Wave Ripple Animation */}
              <div className="relative z-20 flex flex-col items-center gap-3">
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#2650a8]/40 animate-radar-wave pointer-events-none"></span>
                  <a
                    href={zoomBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#2650a8] text-white flex items-center justify-center shadow-xl shadow-[#2650a8]/50 transition-all duration-300 hover:scale-105 hover:bg-[#1d4088] cursor-pointer border-2 border-white"
                    aria-label="Book Personal Brand Call with Gaya"
                  >
                    <Play className="w-5 h-5 sm:w-7 sm:h-7 fill-current text-[#f4ba43] ml-1" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
