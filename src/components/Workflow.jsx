import React from 'react';
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
      badgeClass: 'bg-[#2650a8]/10 text-[#2650a8] border-[#2650a8]/20'
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
      description: 'We draft your posts and carousels targeted to different buyer decision stages. You never open a blank page — just review and approve in minutes.',
      icon: FileText,
      badge: 'Step 03',
      iconBg: 'bg-[#2650a8] text-white',
      badgeClass: 'bg-[#2650a8]/10 text-[#2650a8] border-[#2650a8]/20'
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
    <section id="workflow" className="py-20 bg-[#f8fafc] relative z-10 border-t border-slate-200">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2650a8] px-3 py-1 rounded-full bg-[#2650a8]/10 border border-[#2650a8]/20 inline-block mb-3">
            The Content - Connection - Conversation Framework
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#000000] tracking-tight leading-tight">
            How The 5-Step System <span className="highlight-swipe">Builds Client Trust</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-subheading">
            A clear, documented workflow designed specifically for busy property and finance professionals.
          </p>
        </div>

        {/* Workflow Timeline Steps */}
        <div className="relative space-y-6 md:space-y-10">
          
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-slate-300 -translate-x-1/2 z-0"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={step.num}
                className={`relative z-10 flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-6 md:gap-10`}
              >
                
                {/* Step Card Content */}
                <div className="w-full md:w-1/2">
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#2650a8]/30 transition-all duration-300 relative overflow-hidden group">
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${step.badgeClass}`}>
                        {step.badge}
                      </span>
                      <span className="font-heading font-black text-2xl text-slate-300 group-hover:text-[#2650a8] transition-colors">
                        0{step.num}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-[#000000] mb-1 group-hover:text-[#2650a8] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#2650a8] uppercase tracking-wider mb-3">
                      {step.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Circle Indicator */}
                <div className="shrink-0 w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-md z-20 group-hover:scale-105 transition-transform">
                  <div className={`p-2.5 rounded-lg ${step.iconBg} shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Spacer for 2-column alternating layout */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            );
          })}
        </div>

        {/* Workflow CTA */}
        <div className="mt-12 text-center">
          <a
            href={zoomBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] shadow-lg shadow-[#2650a8]/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <span>Book Your Free Assessment Call</span>
            <ArrowRight className="w-4 h-4 text-[#f4ba43]" />
          </a>
        </div>

      </div>
    </section>
  );
}
