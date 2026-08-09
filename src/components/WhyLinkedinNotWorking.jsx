import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Send, MapPin, XCircle, ArrowRight, AlertTriangle } from 'lucide-react';

export default function WhyLinkedinNotWorking({ onOpenBooking }) {
  const zoomBookingUrl = "https://scheduler.zoom.us/gaya-we-write-you-chill/building-your-personal-brand";

  const painPoints = [
    {
      icon: XCircle,
      title: 'Lack of strategy',
      badge: 'Problem 1',
      color: '#ef4444',
      bgLight: 'bg-red-50 text-red-600',
      points: [
        'You post for 12 days and realize nothing has happened. So you stop, you declare LinkedIn isn\'t for you.',
        'You post and notice there were 23 impressions and 2 likes for your post and think LinkedIn is a curse.'
      ]
    },
    {
      icon: Clock,
      title: 'Lack of time / idea generation',
      badge: 'Problem 2',
      color: '#f59e0b',
      bgLight: 'bg-amber-50 text-amber-600',
      points: [
        'You post only when you have time.',
        'You get your team to post AI-generated visuals and content but it doesn\'t impact the audience.',
        'You\'re not sharing enough stories about who you are, how you help, and what you help with.',
        'You\'re not using the marketing pyramid of consumer layers to come up with a content strategy. Not all content is for one type of buyer.'
      ]
    },
    {
      icon: Send,
      title: 'No outbound system',
      badge: 'Problem 3',
      color: '#2650a8',
      bgLight: 'bg-blue-50 text-[#2650a8]',
      points: [
        'You are afraid to send direct messages.',
        'You are not sure which tools to use to automate part of the outbound process safely.'
      ]
    },
    {
      icon: MapPin,
      title: 'No clear plan before you start',
      badge: 'Problem 4',
      color: '#8b5cf6',
      bgLight: 'bg-purple-50 text-purple-600',
      points: [
        'Unclear on what happens in the first 30 days.',
        'Unclear on what changes in the next 30 days.',
        'By 90 days, what is the exact system that you need?'
      ]
    }
  ];

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
    <section className="py-20 bg-[#f8fafc] border-y border-slate-200 relative z-20 overflow-hidden">
      
      {/* Decorative ambient backdrop */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#2650a8]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#f4ba43]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#b45309] px-3.5 py-1.5 rounded-full bg-[#f4ba43]/20 border border-[#f4ba43]/40 inline-block mb-3 shadow-xs">
            The Trust Bridge Problem
          </span>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#000000] tracking-tight leading-tight">
            Why your LinkedIn isn't working <span className="highlight-swipe">(yet)</span>
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-slate-700 font-subheading font-medium">
            If any of these sound like you, you're giving up on building the trust bridge with your clients and referral partners.
          </p>
        </motion.div>

        {/* 4 Pain Point Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {painPoints.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div 
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="light-card-hover p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top decorative accent line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: item.color }}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`p-3 rounded-xl ${item.bgLight} transition-colors`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 shadow-xs">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#000000] mb-3 group-hover:text-[#2650a8] transition-colors">
                    {item.title}
                  </h3>

                  <ul className="space-y-3">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        <span className="text-[#f4ba43] font-bold text-base leading-none mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#2650a8] via-[#1e4290] to-[#2650a8] text-white text-center shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#2650a8]/60 relative overflow-hidden"
        >
          {/* Subtle animated light glow inside banner */}
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#f4ba43]/20 rounded-full blur-[60px] pointer-events-none"></div>

          <div className="text-left max-w-xl relative z-10">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-1.5">
              Stop guessing. Get a customized LinkedIn Assessment.
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
              Book a call with Gaya and receive a free LinkedIn Assessment plan showing what is missing and how to fix it.
            </p>
          </div>
          
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={zoomBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer shrink-0 px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-[#000000] bg-[#f4ba43] hover:bg-[#eab308] shadow-lg shadow-[#f4ba43]/30 transition-all cursor-pointer relative z-10 flex items-center gap-2"
          >
            <span>Get Free Assessment Blueprint</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
