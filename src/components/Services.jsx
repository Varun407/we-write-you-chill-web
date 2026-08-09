import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Users, Clock, Video, Sparkles, Star } from 'lucide-react';
import TiltCard from './TiltCard';

export default function Services({ onOpenBooking }) {
  const zoomBookingUrl = "https://scheduler.zoom.us/gaya-we-write-you-chill/building-your-personal-brand";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative z-10 overflow-hidden">
      
      {/* Decorative ambient background */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#2650a8]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-[#f4ba43]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#2650a8] px-3.5 py-1.5 rounded-full bg-[#2650a8]/10 border border-[#2650a8]/25 inline-block mb-3 shadow-xs">
            Our Programs & Packages
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#000000] tracking-tight leading-tight">
            Three Ways I <span className="highlight-swipe">Provide Support</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-subheading font-medium">
            Whether you want it fully done for you, trained in-house, or need complete video production.
          </p>
        </motion.div>

        {/* 3 Main Package Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          
          {/* Package 1 - Featured / Most Popular */}
          <motion.div 
            variants={cardVariants}
            className="flex"
          >
            <TiltCard
              tiltStrength={5}
              className="p-8 pt-9 rounded-3xl bg-white border-2 border-[#2650a8] shadow-xl flex flex-col justify-between relative group w-full"
            >
              {/* Ambient subtle glow inside card */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#2650a8]/8 rounded-full blur-[50px] pointer-events-none rounded-tr-3xl"></div>

              <div className="absolute -top-3.5 right-6 px-4 py-1 rounded-full bg-gradient-to-r from-[#2650a8] to-[#1e4290] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1.5 z-20 border border-white/40">
                <Sparkles className="w-3.5 h-3.5 text-[#f4ba43]" />
                <span>Most Popular</span>
              </div>

              <div>
                <div className="text-[11px] font-extrabold text-[#2650a8] uppercase tracking-wider mb-2">Option 01</div>
                <h3 className="font-heading font-black text-2xl text-[#000000] mb-2 leading-tight">
                  Done-For-You LinkedIn Personal Branding
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">
                  We build the system around you.
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6 text-xs text-slate-700 font-medium space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-1.5 text-amber-700 font-bold">
                    <Clock className="w-4 h-4 text-[#f4ba43]" />
                    <span>Time Commitment: 45 Mins / Month</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    45 minutes of your time every 4 weeks to produce a full month's worth of high-converting content.
                  </p>
                </div>

                <ul className="space-y-3.5 mb-8 text-xs sm:text-sm text-slate-700 font-semibold">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#2650a8] shrink-0 mt-0.5" />
                    <span>Content strategy built on your expertise, not generic prompts</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#2650a8] shrink-0 mt-0.5" />
                    <span>Content development & done-for-you writing, never open a blank page</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#2650a8] shrink-0 mt-0.5" />
                    <span>Monthly post analytics showing what landed and what needs to change</span>
                  </li>
                </ul>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={zoomBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] transition-all cursor-pointer shadow-md shadow-[#2650a8]/25"
              >
                <span>Apply for Done-For-You Package</span>
                <ArrowRight className="w-4 h-4 text-[#f4ba43] transition-transform duration-200 group-hover:translate-x-1" />
              </motion.a>
            </TiltCard>
          </motion.div>

          {/* Package 2 - Done-With-You */}
          <motion.div 
            variants={cardVariants}
            className="flex"
          >
            <TiltCard
              tiltStrength={5}
              className="light-card-hover p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between group relative w-full"
            >
              <div>
                <div className="text-[11px] font-extrabold text-[#b45309] uppercase tracking-wider mb-2">Option 02</div>
                <h3 className="font-heading font-black text-2xl text-[#000000] mb-2 leading-tight">
                  Done-With-You Training
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">
                  For the expert who wants the skill in-house
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6 text-xs text-slate-700 font-medium space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-1.5 text-slate-900 font-bold">
                    <Users className="w-4 h-4 text-[#2650a8]" />
                    <span>12-Week In-House Team Programme</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Ideal for your team member or VA. We build your Content-Connection-Conversation system together.
                  </p>
                </div>

                <ul className="space-y-3.5 mb-8 text-xs sm:text-sm text-slate-700 font-semibold">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#f4ba43] shrink-0 mt-0.5" />
                    <span>Bi-weekly 1-on-1 Zoom sessions with Gaya & support in between</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#f4ba43] shrink-0 mt-0.5" />
                    <span>Custom content materials, templates & writing feedback</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#f4ba43] shrink-0 mt-0.5" />
                    <span>Outreach system setup: how to run it, follow up, & nurture leads</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#f4ba43] shrink-0 mt-0.5" />
                    <span>End goal: Your team runs the whole thing, never buy another course</span>
                  </li>
                </ul>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={zoomBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-bold text-slate-800 bg-slate-50 hover:bg-[#2650a8] hover:text-white border border-slate-200 hover:border-[#2650a8] transition-all cursor-pointer shadow-xs group/btn"
              >
                <span>Apply for 12-Week Programme</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </motion.a>
            </TiltCard>
          </motion.div>

          {/* Package 3 - Video System */}
          <motion.div 
            variants={cardVariants}
            className="flex"
          >
            <TiltCard
              tiltStrength={5}
              className="light-card-hover p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between group relative w-full"
            >
              <div>
                <div className="text-[11px] font-extrabold text-emerald-600 uppercase tracking-wider mb-2">Option 03</div>
                <h3 className="font-heading font-black text-2xl text-[#000000] mb-2 leading-tight">
                  Video Content System
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">
                  Overcoming camera anxiety & video deletion loops
                </p>

                {/* Video Frustration Box */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-[#f4ba43]/40 mb-6 text-xs space-y-1 text-slate-700 font-medium shadow-xs">
                  <span className="font-bold text-slate-900 block mb-1">Every time you sit down to record:</span>
                  <p>• You adjust your shirt → Then your hair</p>
                  <p>• You start again → Hear your own voice → Delete it</p>
                  <p className="font-bold text-rose-700 pt-1">Result: Nothing gets posted. Again.</p>
                </div>

                <ul className="space-y-3.5 mb-8 text-xs sm:text-sm text-slate-700 font-semibold">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#2650a8] shrink-0 mt-0.5" />
                    <span>Topic ideas & high-converting video scripting</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#2650a8] shrink-0 mt-0.5" />
                    <span>Guided online recording sessions (1.5 hours per batch)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#2650a8] shrink-0 mt-0.5" />
                    <span>Professional video editing & post captions</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#2650a8] shrink-0 mt-0.5" />
                    <span>32%+ proven increase in video views & engagement</span>
                  </li>
                </ul>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={zoomBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-bold text-slate-800 bg-slate-50 hover:bg-[#2650a8] hover:text-white border border-slate-200 hover:border-[#2650a8] transition-all cursor-pointer shadow-xs group/btn"
              >
                <span>Get Started with Video System</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </motion.a>
            </TiltCard>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
