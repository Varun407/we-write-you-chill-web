import React from 'react';
import { UserCheck, Compass, FileText, Share2, Rocket, ArrowRight } from 'lucide-react';

export default function Workflow({ onOpenBooking }) {
  const steps = [
    {
      num: 1,
      title: 'Onboarding & Voice Discovery',
      subtitle: 'Capturing how you think, speak, and communicate',
      description: 'We sit down with you for a 1-on-1 voice interview. We understand your business philosophy, client case studies, and exact communication style so every single post sounds 100% like you.',
      icon: UserCheck,
      badge: 'Step 01',
      iconBg: 'bg-[#2650a8] text-white',
      badgeClass: 'bg-[#2650a8]/10 text-[#2650a8] border-[#2650a8]/20'
    },
    {
      num: 2,
      title: 'Strategy & Content Pillar Definition',
      subtitle: 'Mapping your content to your high-value audience',
      description: 'We define 3-4 strategic content pillars (e.g. investor portfolio building, self-employed loan approvals, market breakdowns) to position you as the obvious choice in your market.',
      icon: Compass,
      badge: 'Step 02',
      iconBg: 'bg-[#f4ba43] text-slate-900',
      badgeClass: 'bg-[#f4ba43]/20 text-[#b45309] border-[#f4ba43]/30'
    },
    {
      num: 3,
      title: 'Done-For-You Writing & Resource Creation',
      subtitle: 'High-converting posts, carousels, & lead assets',
      description: 'We draft your weekly posts, custom templates, and downloadable guides. You review and approve in minutes — zero stress, zero blank page syndrome.',
      icon: FileText,
      badge: 'Step 03',
      iconBg: 'bg-[#2650a8] text-white',
      badgeClass: 'bg-[#2650a8]/10 text-[#2650a8] border-[#2650a8]/20'
    },
    {
      num: 4,
      title: 'Profile Optimization & Connection Outreach',
      subtitle: 'Building your LinkedIn conversion funnel',
      description: 'We revamp your profile headline, banner, and bio into a landing page. Plus, we implement a simple, non-salesy outreach system to connect with active buyers & referral partners.',
      icon: Share2,
      badge: 'Step 04',
      iconBg: 'bg-[#f4ba43] text-slate-900',
      badgeClass: 'bg-[#f4ba43]/20 text-[#b45309] border-[#f4ba43]/30'
    },
    {
      num: 5,
      title: 'Inbound Lead Generation & Handover',
      subtitle: 'Booked calls, real deals, & long-term assets',
      description: 'Watch inbound enquiries roll into your DMs and calendar. We hand over all reusable templates, framework guides, and strategy blueprints so you retain lifetime value.',
      icon: Rocket,
      badge: 'Step 05',
      iconBg: 'bg-emerald-600 text-white',
      badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-[#f8fafc] relative z-10 border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2650a8] px-3.5 py-1.5 rounded-full bg-[#2650a8]/10 border border-[#2650a8]/20 inline-block mb-4">
            Our 5-Step Process
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#000000] tracking-tight leading-tight">
            How We Take You From <span className="highlight-swipe">Inconsistent To Inbound</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-subheading">
            A simple, collaborative 5-step workflow built specifically for busy Realtors, Buyer's Agents, and Loan Brokers.
          </p>
        </div>

        {/* Workflow Timeline Steps */}
        <div className="relative space-y-8 md:space-y-12">
          
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-slate-300 -translate-x-1/2 z-0"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={step.num}
                className={`relative z-10 flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-12`}
              >
                
                {/* Step Card Content */}
                <div className="w-full md:w-1/2">
                  <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#2650a8]/30 transition-all duration-300 relative overflow-hidden group">
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${step.badgeClass}`}>
                        {step.badge}
                      </span>
                      <span className="font-heading font-black text-3xl text-slate-300 group-hover:text-[#2650a8] transition-colors">
                        0{step.num}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl text-[#000000] mb-2 group-hover:text-[#2650a8] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#2650a8] uppercase tracking-wider mb-4">
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Circle Indicator */}
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-lg z-20 group-hover:scale-110 transition-transform">
                  <div className={`p-3 rounded-xl ${step.iconBg} shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Spacer for 2-column alternating layout */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            );
          })}
        </div>

        {/* Workflow CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] shadow-xl shadow-[#2650a8]/25 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
          >
            <span>Start Step 1: Voice Discovery Call</span>
            <ArrowRight className="w-5 h-5 text-[#f4ba43]" />
          </button>
        </div>

      </div>
    </section>
  );
}
