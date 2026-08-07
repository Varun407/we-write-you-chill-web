import React from 'react';
import { ExternalLink, FileText, CheckCircle } from 'lucide-react';

export default function Results() {
  const caseStudies = [
    {
      role: 'Perth Mortgage Broker',
      company: 'Oren Mortgages',
      person: 'Hannah Richards',
      link: 'https://www.linkedin.com/in/hannahrichards2/',
      results: [
        '4 high intent leads in 12 weeks',
        'Outreach system: Average 40% acceptance rate out of 200 connection requests sent out every week (6-8% reply rate)',
        'Tools integrated: Sales Navigator / Dripify / Kondo',
        'Bi-weekly training provided for team member to qualify & nurture connections'
      ],
      badge: '4 High Intent Leads'
    },
    {
      role: 'Melbourne Mortgage Broker',
      company: 'Mortgage Champions',
      person: 'Sahani Kurwa',
      link: 'https://www.linkedin.com/in/sahanikurwa/',
      results: [
        'Grew network to 1,500 targeted followers in 12 weeks',
        'Built strategic referral relationships with sales agents and buyer\'s agents through outbound system',
        'Consistent weekly presence with zero missed posting slots'
      ],
      badge: '1,500+ Targeted Network'
    },
    {
      role: 'Accounting Firm Director',
      company: 'Keysight Accounting Solutions',
      person: 'Fousiya Naskar',
      link: 'https://www.linkedin.com/in/fousiya-naskar/',
      results: [
        'Full video content engine: ideas → scripting → recording online → editing → post captions',
        'Generated 32% increased views and audience engagement',
        'Built executive authority across finance & business networks'
      ],
      badge: '+32% Views & Engagement'
    }
  ];

  return (
    <section id="results" className="py-20 bg-white relative z-10 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2650a8] px-3 py-1 rounded-full bg-[#2650a8]/10 border border-[#2650a8]/20 inline-block mb-3">
            Proven Track Record
          </span>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#000000] tracking-tight leading-tight">
            Real Results For <span className="highlight-swipe">Property & Finance Experts</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 font-subheading">
            Gaya has built personal brands for more than <strong className="text-[#000000] font-bold">25 clients</strong> across Australia. Here is what happens when compounding kicks in.
          </p>
        </div>

        {/* Top 3 Quick Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center shadow-xs">
            <div className="font-heading font-extrabold text-3xl text-[#2650a8] mb-0.5">25+</div>
            <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Clients Worked With</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">Property & Finance Industry Experts</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center shadow-xs">
            <div className="font-heading font-extrabold text-3xl text-[#f4ba43] mb-0.5">40% Avg</div>
            <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Acceptance Rate</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">200 Connection Requests / Week</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center shadow-xs">
            <div className="font-heading font-extrabold text-3xl text-[#2650a8] mb-0.5">100%</div>
            <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Posting Consistency</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">Full length of every engagement</div>
          </div>
        </div>

        {/* Case Studies Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#2650a8]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#2650a8]/10 text-[#2650a8] border border-[#2650a8]/20">
                    {cs.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#000000] mb-0.5 group-hover:text-[#2650a8] transition-colors">
                  {cs.person}
                </h3>
                <p className="text-xs font-semibold text-[#2650a8]">{cs.role}</p>
                <p className="text-[11px] text-slate-500 mb-4 font-medium">{cs.company}</p>

                <ul className="space-y-2.5 mb-6">
                  {cs.results.map((res, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-700 font-semibold leading-relaxed">
                      <CheckCircle className="w-3.5 h-3.5 text-[#f4ba43] shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={cs.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 hover:bg-[#2650a8] hover:text-white border border-slate-200 transition-all cursor-pointer"
              >
                <span>View LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Free Assessment Lead Magnet Showcase */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-[#2650a8]/5 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-5 shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-[#2650a8] text-white shrink-0">
              <FileText className="w-5 h-5 text-[#f4ba43]" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-[#000000]">Example LinkedIn Profile & Strategy Assessment</h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">See the exact assessment plan Gaya provides for clients before onboarding.</p>
            </div>
          </div>

          <a
            href="https://claude.ai/public/artifacts/bbe6aa3f-c77f-45f6-99ad-6572ae8fd554"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] shadow-sm transition-all"
          >
            <span>View Sample Client Assessment</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#f4ba43]" />
          </a>
        </div>

      </div>
    </section>
  );
}
