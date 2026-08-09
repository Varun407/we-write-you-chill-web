import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Compass, FileText, Share2, Rocket, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';

export default function Workflow() {
  const zoomBookingUrl = "https://scheduler.zoom.us/gaya-we-write-you-chill/building-your-personal-brand";

  const steps = [
    {
      num: 1,
      title: 'Free LinkedIn Assessment Plan',
      subtitle: 'Pre-onboarding audit before spending a dime',
      description: 'You get a full LinkedIn assessment showing exactly what is missing and what to do about it across profile, content, and outreach. Works as a self-check for timing and readiness.',
      icon: UserCheck,
      badge: 'Step 01',
      iconBg: 'bg-[#2650a8] text-white',
      badgeClass: 'bg-[#2650a8]/10 text-[#2650a8] border-[#2650a8]/25'
    },
    {
      num: 2,
      title: '45-Min Voice & Story Discovery',
      subtitle: 'Capturing how you think, speak, and advise clients',
      description: 'One 45-minute call every 4 weeks. We ask targeted questions about your recent client wins, market insights, and business philosophy so nothing sounds generic or AI-generated.',
      icon: Compass,
      badge: 'Step 02',
      iconBg: 'bg-[#f4ba43] text-slate-900',
      badgeClass: 'bg-[#f4ba43]/20 text-[#b45309] border-[#f4ba43]/30'
    },
    {
      num: 3,
      title: 'Content Development & Personal Writing',
      subtitle: 'Using the consumer layer marketing pyramid',
      description: 'We draft your posts and carousels targeted to different buyer decision stages. You never open a blank page, just review and approve in minutes.',
      icon: FileText,
      badge: 'Step 03',
      iconBg: 'bg-[#2650a8] text-white',
      badgeClass: 'bg-[#2650a8]/10 text-[#2650a8] border-[#2650a8]/25'
    },
    {
      num: 4,
      title: 'Documented Outreach & Connection Engine',
      subtitle: 'Avg 40% acceptance rate & 6-8% reply rate',
      description: 'We set up your outbound process using Sales Navigator / Dripify / Kondo to send ~200 targeted connection requests a week and nurture referral partners without spam.',
      icon: Share2,
      badge: 'Step 04',
      iconBg: 'bg-[#f4ba43] text-slate-900',
      badgeClass: 'bg-[#f4ba43]/20 text-[#b45309] border-[#f4ba43]/30'
    },
    {
      num: 5,
      title: 'System Handover & Claude Skill Conversion',
      subtitle: 'Lifetime system ownership that never expires',
      description: 'At the end of 90 days, we convert your voice guide into a custom Claude AI skill so your team can keep producing content in your voice forever.',
      icon: Rocket,
      badge: 'Step 05',
      iconBg: 'bg-emerald-600 text-white',
      badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-[#f8fafc] relative z-10 border-t border-slate-200 overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-[#2650a8]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-5 w-96 h-96 bg-[#f4ba43]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#2650a8] px-3.5 py-1.5 rounded-full bg-[#2650a8]/10 border border-[#2650a8]/25 inline-block mb-3 shadow-xs">
            The Content - Connection - Conversation Framework
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#000000] tracking-tight leading-tight">
            How The 5-Step System <span className="highlight-swipe">Builds Client Trust</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-subheading">
            A clear, documented workflow designed specifically for busy property and finance professionals.
          </p>
        </motion.div>

        {/* Workflow Timeline Steps */}
        <div className="relative space-y-8 md:space-y-12">
          
          {/* Connecting Line with Gradient */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#2650a8] via-[#f4ba43] to-emerald-500 -translate-x-1/2 z-0 opacity-60"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className={`relative z-10 flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-6 md:gap-10`}
              >
                
                {/* Step Card Content */}
                <div className="w-full md:w-1/2">
                  <TiltCard 
                    tiltStrength={5}
                    className="light-card-hover p-7 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group"
                  >
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border shadow-xs ${step.badgeClass}`}>
                        {step.badge}
                      </span>
                      <span className="font-heading font-black text-3xl text-slate-200 group-hover:text-[#2650a8] transition-colors">
                        0{step.num}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#000000] mb-1 group-hover:text-[#2650a8] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-bold text-[#2650a8] uppercase tracking-wider mb-3">
                      {step.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </TiltCard>
                </div>

                {/* Step Circle Indicator */}
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="shrink-0 w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center shadow-lg z-20"
                >
                  <div className={`p-3 rounded-xl ${step.iconBg} shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </motion.div>

                {/* Spacer for 2-column alternating layout */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Workflow CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={zoomBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] shadow-xl shadow-[#2650a8]/25 transition-all duration-300 cursor-pointer"
          >
            <span>Book Your Free Assessment Call</span>
            <ArrowRight className="w-4 h-4 text-[#f4ba43] transition-transform duration-200 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
