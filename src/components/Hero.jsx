import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const zoomBookingUrl = "https://scheduler.zoom.us/gaya-we-write-you-chill/building-your-personal-brand";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18, filter: 'blur(3px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="hero" className="snap-section relative min-h-[auto] md:min-h-screen pt-24 pb-12 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 overflow-hidden bg-white bg-grid-pattern flex flex-col justify-center">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-[#2650a8]/8 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-1/3 right-5 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-[#f4ba43]/15 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          <motion.div
            variants={itemVariants}
            className="cyclic-card cyclic-delay-1 inline-flex items-center justify-center flex-wrap sm:flex-nowrap gap-2 px-3.5 py-1.5 sm:px-4.5 sm:py-1.5 rounded-full mb-5 sm:mb-6 shadow-xs group overflow-hidden max-w-full"
          >
            <div className="flex items-center gap-1 text-[#f4ba43] px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 overflow-hidden shrink-0">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 fill-current text-[#f4ba43] animate-star-${i + 1} transition-transform duration-300 group-hover:scale-110 cursor-pointer`}
                />
              ))}
            </div>
            <span className="text-[11px] sm:text-xs font-bold tracking-wide text-slate-800 text-center">
              <span className="text-[#2650a8] font-black">25+</span> Property & Finance Clients Supported
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-4xl mx-auto font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.2] sm:leading-[1.15]"
          >
            <span className="font-semibold text-slate-800">Three things work on LinkedIn.</span>{' '}
            <br />
            <span className="font-bold text-[#2650a8] highlight-swipe inline">
              Nobody tells you which <span className="word-accent">three.</span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 font-subheading leading-relaxed"
          >
            LinkedIn branding, content, outreach and video for property and finance experts. <strong className="text-[#000000] font-bold">You bring the expertise.</strong> We build everything that makes people trust you before they call.
          </motion.p>



          <motion.div
            variants={itemVariants}
            className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto px-4"
          >
            <a
              href={zoomBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-xs sm:text-sm md:text-base font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] shadow-xl shadow-[#2650a8]/25 transition-all duration-300 cursor-pointer border border-[#2650a8]/50 hover:scale-[1.02]"
            >
              <span>Book 1-on-1 Personal Brand Call</span>
              <ArrowRight className="w-4 h-4 text-[#f4ba43] transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2.5 sm:gap-4 lg:gap-6 text-xs sm:text-sm font-semibold text-slate-700 w-full px-2"
          >
            <div className="cyclic-card cyclic-delay-1 flex items-center justify-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-xs w-full sm:w-auto">
              <CheckCircle2 className="w-4 h-4 text-[#2650a8] shrink-0" />
              <span>Only 45 Mins Needed Every 4 Weeks</span>
            </div>
            <div className="cyclic-card cyclic-delay-2 flex items-center justify-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-xs w-full sm:w-auto">
              <CheckCircle2 className="w-4 h-4 text-[#f4ba43] shrink-0" />
              <span>Content - Connection - Conversation System</span>
            </div>
            <div className="cyclic-card cyclic-delay-3 flex items-center justify-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-xs w-full sm:w-auto">
              <CheckCircle2 className="w-4 h-4 text-[#2650a8] shrink-0" />
              <span>Includes Free Pre-Onboarding Audit</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

