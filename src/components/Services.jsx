import React from 'react';
import { PenTool, Users, Layers, Sparkles, ArrowRight, Check } from 'lucide-react';

export default function Services({ onOpenBooking }) {
  const services = [
    {
      number: '01',
      title: 'LinkedIn Ghostwriting & Voice Engine',
      subtitle: 'Done for you — zero marketing jargon',
      description: 'We interview you, extract your authentic insights, and write high-converting LinkedIn posts that sound 100% like you. No generic AI templates or pushy sales pitch fluffs.',
      points: [
        'Weekly authentic post creation & scheduling',
        'Personal storytelling & industry authority pieces',
        'Strategic content pillars customized to your niche',
        'Zero time wasted staring at a blank screen'
      ],
      badge: 'Popular',
      color: 'from-[#3367d1]/20 to-[#60a5fa]/5',
      borderColor: 'border-[#3367d1]/30'
    },
    {
      number: '02',
      title: 'Active Connection & Outreach System',
      subtitle: 'Turning network views into real conversations',
      description: 'Having a great profile is only half the battle. We build a clear, non-salesy outreach framework to start genuine conversations with active buyers, investors, and referral partners.',
      points: [
        'Non-spammy connection outreach frameworks',
        'Direct messaging scripts for referral partners',
        'Nurturing warm leads who engage with your content',
        'Direct booking link integration'
      ],
      badge: 'High Impact',
      color: 'from-[#8b3dff]/20 to-[#a855f7]/5',
      borderColor: 'border-[#8b3dff]/30'
    },
    {
      number: '03',
      title: 'Reusable Asset Library & Handover',
      subtitle: 'Assets you keep and reuse forever',
      description: 'We don\'t just post and walk away. We hand over custom content templates, lead magnet guides, and structured content libraries so your business stays powered long-term.',
      points: [
        'Modular post templates tailored to your voice',
        'Lead magnet guides & downloadable resources',
        'Content bank of evergreen real estate topics',
        'Full handover documentation'
      ],
      badge: 'Long-term Value',
      color: 'from-[#f4ba43]/20 to-[#f59e0b]/5',
      borderColor: 'border-[#f4ba43]/30'
    },
    {
      number: '04',
      title: 'Profile Optimization & Category Authority',
      subtitle: 'Transform your profile into a high-converting landing page',
      description: 'When potential clients or referral partners land on your LinkedIn, they decide in 3 seconds whether to trust you. We optimize your banner, headline, bio, and featured section for maximum conversion.',
      points: [
        'High-converting LinkedIn headline & banner design',
        'Story-driven "About" section that builds trust',
        'Featured section link strategy for lead capture',
        'Optimized for search visibility & recruiter/investor eyes'
      ],
      badge: 'Foundation',
      color: 'from-[#10b981]/20 to-[#059669]/5',
      borderColor: 'border-[#10b981]/30'
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0b0c10] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#60a5fa] px-3 py-1 rounded-full glass-card border border-[#3367d1]/30 inline-block mb-4">
            What We Do
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Four Ways We Make Clients <span className="highlight-swipe">Come To You</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 font-subheading">
            Whether you are a Buyer's Agent securing property portfolios or a Mortgage Broker closing loans, we turn your LinkedIn into a client magnet.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-3xl glass-card border ${item.borderColor} bg-gradient-to-br ${item.color} glass-card-hover flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading font-black text-4xl text-white/30 group-hover:text-white/80 transition-colors">
                    {item.number}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-white mb-2 group-hover:text-[#60a5fa] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider">
                  {item.subtitle}
                </p>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs text-gray-200">
                      <div className="p-0.5 rounded-full bg-[#3367d1]/20 text-[#60a5fa] mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-white glass-card border border-white/20 group-hover:border-[#3367d1] group-hover:bg-[#3367d1] transition-all duration-300 cursor-pointer"
              >
                <span>Get Started with {item.title.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
