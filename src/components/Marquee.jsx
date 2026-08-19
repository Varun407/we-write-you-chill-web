import React from 'react';
import { Sparkles, TrendingUp, Clock, Zap, Target, Star, Users, Award } from 'lucide-react';

export default function Marquee() {
  const highlightsRow1 = [
    { icon: Clock, text: 'Only 45 Mins Every 4 Weeks', highlight: 'Time Efficient', bg: 'bg-[#2650a8]/10 text-[#2650a8] border-[#2650a8]/25' },
    { icon: TrendingUp, text: 'Avg 40% Connection Acceptance Rate', highlight: 'High Conversion', bg: 'bg-[#f4ba43]/20 text-[#b45309] border-[#f4ba43]/35' },
    { icon: Target, text: '4 High Intent Leads in 12 Weeks', highlight: 'Real Leads', bg: 'bg-[#2650a8]/10 text-[#2650a8] border-[#2650a8]/25' },
    { icon: Zap, text: 'Content - Connection - Conversation', highlight: 'Systemized', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { icon: Star, text: '25+ Australian Property & Finance Experts', highlight: 'Proven Track Record', bg: 'bg-[#f4ba43]/20 text-[#b45309] border-[#f4ba43]/35' },
    { icon: Sparkles, text: 'Custom Claude AI Voice Model Included', highlight: 'Lifetime Asset', bg: 'bg-[#2650a8]/10 text-[#2650a8] border-[#2650a8]/25' },
    { icon: Users, text: '1,500+ Targeted Network Expansion', highlight: 'Compounding', bg: 'bg-purple-50 text-purple-700 border-purple-200' },
    { icon: Award, text: '100% Posting Consistency Delivered', highlight: 'Never Miss a Slot', bg: 'bg-[#2650a8]/10 text-[#2650a8] border-[#2650a8]/25' },
  ];

  const clientsRow2 = [
    { name: 'Hannah Richards', company: 'Oren Mortgages', role: 'Perth Mortgage Broker', result: '4 High Intent Leads' },
    { name: 'Sahani Kurwa', company: 'Mortgage Champions', role: 'Melbourne Mortgage Broker', result: '1,500+ Targeted Network' },
    { name: 'Fousiya Naskar', company: 'Keysight Accounting', role: 'Accounting Firm Director', result: '+32% Video Views' },
    { name: 'Adarsh Kediyoor', company: 'Secure Future Property', role: "Buyer's Agent Founder", result: '$5.5M in 5 Yrs' },
    { name: 'Jason Kuan', company: 'ShernAdvisory', role: 'Mortgage Broker (10+ Yrs)', result: 'Booked Referral Calls' },
    { name: 'Renee Hohenhaus', company: 'Self-Employed Borrower Expert', role: 'Loan Specialist', result: 'Overcame Overthinking' },
    { name: 'Jathu Srikanthan', company: 'Interstate Investor Specialist', role: "Buyer's Agent", result: '2 Inbound Enquiries' },
  ];

  return (
    <div className="py-6 overflow-hidden relative z-20 w-full">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

      <div className="space-y-3.5">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-4 py-1">
            {[...highlightsRow1, ...highlightsRow1].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-[#2650a8]/40 transition-all cursor-default shrink-0 group"
                >
                  <div className={`p-1.5 rounded-full ${item.bg} border flex items-center justify-center shrink-0`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 whitespace-nowrap">
                    {item.text}
                  </span>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200 group-hover:bg-[#2650a8] group-hover:text-white transition-colors">
                    {item.highlight}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex overflow-hidden">
          <div className="animate-marquee-reverse flex items-center gap-4 py-1">
            {[...clientsRow2, ...clientsRow2].map((client, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#f4ba43]/60 transition-all cursor-default shrink-0 group"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#000000] whitespace-nowrap">
                    {client.name}
                  </span>
                  <span className="text-[11px] text-slate-500 whitespace-nowrap hidden sm:inline">
                    • {client.company}
                  </span>
                </div>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#f4ba43]/20 text-[#b45309] border border-[#f4ba43]/30 whitespace-nowrap">
                  {client.result}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

