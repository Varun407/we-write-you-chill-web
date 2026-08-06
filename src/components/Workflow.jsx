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
      color: 'from-[#3367d1] to-[#60a5fa]',
      badge: 'Step 01'
    },
    {
      num: 2,
      title: 'Strategy & Content Pillar Definition',
      subtitle: 'Mapping your content to your high-value audience',
      description: 'We define 3-4 strategic content pillars (e.g. investor portfolio building, self-employed loan approvals, market breakdowns) to position you as the obvious choice in your market.',
      icon: Compass,
      color: 'from-[#8b3dff] to-[#a855f7]',
      badge: 'Step 02'
    },
    {
      num: 3,
      title: 'Done-For-You Writing & Resource Creation',
      subtitle: 'High-converting posts, carousels, & lead assets',
      description: 'We draft your weekly posts, custom templates, and downloadable guides. You review and approve in minutes — zero stress, zero blank page syndrome.',
      icon: FileText,
      color: 'from-[#ec4899] to-[#f43f5e]',
      badge: 'Step 03'
    },
    {
      num: 4,
      title: 'Profile Optimization & Connection Outreach',
      subtitle: 'Building your LinkedIn conversion funnel',
      description: 'We revamp your profile headline, banner, and bio into a landing page. Plus, we implement a simple, non-salesy outreach system to connect with active buyers & referral partners.',
      icon: Share2,
      color: 'from-[#f4ba43] to-[#f59e0b]',
      badge: 'Step 04'
    },
    {
      num: 5,
      title: 'Inbound Lead Generation & Handover',
      subtitle: 'Booked calls, real deals, & long-term assets',
      description: 'Watch inbound enquiries roll into your DMs and calendar. We hand over all reusable templates, framework guides, and strategy blueprints so you retain lifetime value.',
      icon: Rocket,
      color: 'from-[#10b981] to-[#059669]',
      badge: 'Step 05'
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-[#0a0b0e] relative z-10 border-t border-white/5">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#3367d1]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8b3dff] px-3 py-1 rounded-full glass-card border border-[#8b3dff]/30 inline-block mb-4">
            Our 5-Step Process
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            How We Take You From <span className="highlight-swipe">Inconsistent To Inbound</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 font-subheading">
            A simple, collaborative 5-step workflow built specifically for busy Realtors, Buyer's Agents, and Loan Brokers.
          </p>
        </div>

        {/* Workflow Timeline Steps */}
        <div className="relative space-y-8 md:space-y-12">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#3367d1] via-[#8b3dff] to-[#10b981] -translate-x-1/2 z-0 opacity-30"></div>

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
                  <div className="p-8 rounded-3xl glass-card glass-card-hover border border-white/10 relative overflow-hidden group">
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
                        {step.badge}
                      </span>
                      <span className="font-heading font-extrabold text-3xl text-white/20 group-hover:text-white/60 transition-colors">
                        0{step.num}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl text-white mb-2 group-hover:text-[#60a5fa] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#8b3dff] uppercase tracking-wider mb-4">
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Circle Indicator */}
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-white/20 flex items-center justify-center shadow-xl shadow-[#3367d1]/20 z-20 group-hover:scale-110 transition-transform">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color} text-white shadow-md`}>
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
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#3367d1] via-[#60a5fa] to-[#8b3dff] hover:opacity-95 shadow-xl shadow-[#3367d1]/30 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
          >
            <span>Start Step 1: Voice Discovery Call</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
