import React from 'react';
import { ShieldCheck, TrendingUp, Users, Building2 } from 'lucide-react';

export default function Stats() {
  const stats = [
    { label: 'Real Estate Clients Supported', value: '20+', icon: Users, desc: 'Realtors, Buyer Agents & Brokers' },
    { label: 'Client Portfolio Value Managed', value: '$5.5M+', icon: Building2, desc: 'Properties secured for investors' },
    { label: 'Organic Inbound Enquiries', value: '3x-5x', icon: TrendingUp, desc: 'Average increase in first 60 days' },
    { label: 'Satisfaction & Renewal Rate', value: '100%', icon: ShieldCheck, desc: 'Authentic voice guarantee' },
  ];

  return (
    <section className="py-14 bg-[#f8fafc] border-y border-slate-200 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#2650a8]/30 transition-all flex flex-col items-start justify-between"
              >
                <div className="p-3 rounded-xl bg-[#2650a8]/10 text-[#2650a8] mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#000000] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-bold text-sm text-slate-800">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-xs text-slate-500 font-medium">
                    {stat.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
