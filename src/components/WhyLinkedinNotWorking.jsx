import React from 'react';
import { Clock, Send, MapPin, XCircle } from 'lucide-react';

export default function WhyLinkedinNotWorking({ onOpenBooking }) {
  const zoomBookingUrl = "https://scheduler.zoom.us/gaya-we-write-you-chill/building-your-personal-brand";

  const painPoints = [
    {
      icon: XCircle,
      title: 'Lack of strategy',
      badge: 'Problem 1',
      points: [
        'You post for 12 days and realize nothing has happened. So you stop, you declare LinkedIn isn\'t for you.',
        'You post and notice there were 23 impressions and 2 likes for your post and think LinkedIn is a curse.'
      ]
    },
    {
      icon: Clock,
      title: 'Lack of time / idea generation',
      badge: 'Problem 2',
      points: [
        'You post only when you have time.',
        'You get your team to post AI-generated visuals and content but it doesn\'t impact the audience.',
        'You\'re not sharing enough stories about who you are, how you help, and what you help with.',
        'You\'re not using the marketing pyramid of consumer layers to come up with a content strategy. Not all content is for one type of buyer.'
      ]
    },
    {
      icon: Send,
      title: 'No outbound system',
      badge: 'Problem 3',
      points: [
        'You are afraid to send direct messages.',
        'You are not sure which tools to use to automate part of the outbound process safely.'
      ]
    },
    {
      icon: MapPin,
      title: 'No clear plan before you start',
      badge: 'Problem 4',
      points: [
        'Unclear on what happens in the first 30 days.',
        'Unclear on what changes in the next 30 days.',
        'By 90 days, what is the exact system that you need?'
      ]
    }
  ];

  return (
    <section className="py-16 bg-[#f8fafc] border-y border-slate-200 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b45309] px-3.5 py-1.5 rounded-full bg-[#f4ba43]/20 border border-[#f4ba43]/40 inline-block mb-3">
            The Trust Bridge Problem
          </span>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#000000] tracking-tight leading-tight">
            Why your LinkedIn isn't working <span className="highlight-swipe">(yet)</span>
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-slate-700 font-subheading font-medium">
            If any of these sound like you, you're giving up on building the trust bridge with your clients and referral partners.
          </p>
        </div>

        {/* 4 Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#2650a8]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-[#2650a8]/10 text-[#2650a8]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#000000] mb-3">
                    {item.title}
                  </h3>

                  <ul className="space-y-2.5">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        <span className="text-[#f4ba43] font-bold text-sm mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-[#2650a8] text-white text-center shadow-lg flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-left max-w-xl">
            <h3 className="font-heading font-bold text-xl text-white mb-1">Stop guessing. Get a customized LinkedIn Assessment.</h3>
            <p className="text-xs sm:text-sm text-slate-200 font-medium">Book a call with Gaya and receive a free LinkedIn Assessment plan showing what is missing and how to fix it.</p>
          </div>
          <a
            href={zoomBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-[#000000] bg-[#f4ba43] hover:bg-[#eab308] shadow-md transition-all hover:scale-105"
          >
            Get Free Assessment Blueprint
          </a>
        </div>

      </div>
    </section>
  );
}
