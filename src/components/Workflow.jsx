import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Compass, FileText, Share2, Rocket, ArrowRight } from 'lucide-react';

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
      title: 'You invest only 45 minutes every 4 weeks',
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
    <section id="workflow" className="snap-section min-h-[auto] md:min-h-screen py-14 sm:py-24 bg-slate-50/70 border-t border-slate-200 relative z-10 overflow-hidden flex flex-col justify-center">
      <div className="absolute top-1/4 right-0 w-60 sm:w-96 h-60 sm:h-96 bg-[#2650a8]/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 left-0 w-60 sm:w-96 h-60 sm:h-96 bg-[#f4ba43]/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2.5s' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#2650a8] px-4 py-1.5 rounded-full bg-[#2650a8]/10 border border-[#2650a8]/25 inline-block mb-3 shadow-xs">
            The Content - Connection - Conversation Framework
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#000000] tracking-tight leading-tight">
            How The 5-Step System <span className="highlight-swipe">Builds Client <span className="word-accent">Trust</span></span>
          </h2>
          <p className="mt-3 text-xs sm:text-base text-slate-600 font-subheading">
            A clear, documented workflow designed specifically for busy property and finance professionals.
          </p>
        </motion.div>

        <div className="relative space-y-6 md:space-y-12">
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-[#2650a8] via-[#f4ba43] to-emerald-500 -translate-x-1/2 z-0 rounded-full opacity-40">
            <div className="absolute left-0 right-0 w-full h-24 bg-gradient-to-b from-transparent via-[#f4ba43] to-white rounded-full shadow-[0_0_12px_#f4ba43] animate-timeline-flow pointer-events-none"></div>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            const delayClass = index % 3 === 0 ? 'cyclic-delay-1' : index % 3 === 1 ? 'cyclic-delay-2' : 'cyclic-delay-3';

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className={`relative z-10 flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-4 md:gap-10`}
              >
                <div className="w-full md:w-1/2">
                  <div className={`cyclic-card ${delayClass} p-5 sm:p-7 rounded-2xl sm:rounded-3xl relative overflow-hidden group`}>
                    <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                      <div className="flex items-center gap-2">
                        <div className={`md:hidden p-2 rounded-xl ${step.iconBg} shadow-xs`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full border shadow-xs ${step.badgeClass}`}>
                          {step.badge}
                        </span>
                      </div>
                      <span className="font-heading font-black text-2xl sm:text-3xl text-slate-200 group-hover:text-[#2650a8] transition-colors">
                        0{step.num}
                      </span>
                    </div>

                    <h3 className="font-heading font-semibold text-lg sm:text-2xl text-[#000000] mb-1 group-hover:text-[#2650a8] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-bold text-[#2650a8] uppercase tracking-wider mb-2.5 sm:mb-3">
                      {step.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  className={`hidden md:flex shrink-0 w-16 h-16 rounded-2xl cyclic-card ${delayClass} items-center justify-center shadow-lg z-20`}
                >
                  <div className={`p-3 rounded-xl ${step.iconBg} shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </motion.div>

                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-10 sm:mt-16 text-center px-4"
        >
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={zoomBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-xs sm:text-base font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] shadow-xl shadow-[#2650a8]/25 transition-all duration-300 cursor-pointer"
          >
            <span>Book Your Free Assessment Call</span>
            <ArrowRight className="w-4 h-4 text-[#f4ba43] transition-transform duration-200 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

