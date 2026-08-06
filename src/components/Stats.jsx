import React from 'react';
import { ShieldCheck, TrendingUp, Users, Award, Building2 } from 'lucide-react';

export default function Stats() {
  const stats = [
    { label: 'Real Estate Clients Supported', value: '20+', icon: Users, desc: 'Realtors, Buyer Agents & Brokers' },
    { label: 'Client Portfolio Value Managed', value: '$5.5M+', icon: Building2, desc: 'Properties secured for investors' },
    { label: 'Organic Inbound Enquiries', value: '3x-5x', icon: TrendingUp, desc: 'Average increase in first 60 days' },
    { label: 'Satisfaction & Renewal Rate', value: '100%', icon: ShieldCheck, desc: 'Authentic voice guarantee' },
  ];

  return (
    <section className="py-14 bg-[#0b0c10] border-y border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className="p-6 rounded-2xl glass-card glass-card-hover border border-white/10 flex flex-col items-start justify-between"
              >
                <div className="p-3 rounded-xl bg-[#3367d1]/10 text-[#60a5fa] mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-semibold text-sm text-gray-200">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-xs text-gray-400">
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
