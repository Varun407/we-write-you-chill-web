import React from 'react';
import { Check, ArrowRight, Users, Clock } from 'lucide-react';

export default function Services({ onOpenBooking }) {
  const zoomBookingUrl = "https://scheduler.zoom.us/gaya-we-write-you-chill/building-your-personal-brand";

  return (
    <section id="services" className="py-20 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2650a8] px-3 py-1 rounded-full bg-[#2650a8]/10 border border-[#2650a8]/20 inline-block mb-3">
            Our Programs & Packages
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#000000] tracking-tight leading-tight">
            Three Ways I <span className="highlight-swipe">Provide Support</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-subheading font-medium">
            Whether you want it fully done for you, trained in-house, or need complete video production.
          </p>
        </div>

        {/* 3 Main Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Package 1 */}
          <div className="p-7 rounded-2xl bg-white border-2 border-[#2650a8] shadow-lg flex flex-col justify-between relative group">
            <div className="absolute -top-3 right-5 px-3 py-0.5 rounded-full bg-[#2650a8] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
              Most Popular
            </div>

            <div>
              <div className="text-[11px] font-extrabold text-[#2650a8] uppercase tracking-wider mb-1.5">Option 01</div>
              <h3 className="font-heading font-black text-xl text-[#000000] mb-2">
                Done-For-You LinkedIn Personal Branding
              </h3>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-5">
                We build the system around you.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-5 text-xs text-slate-700 font-medium space-y-1.5">
                <div className="flex items-center gap-1.5 text-amber-700 font-bold">
                  <Clock className="w-3.5 h-3.5 text-[#f4ba43]" />
                  <span>Time Commitment: 45 Mins / Month</span>
                </div>
                <p className="text-slate-600 leading-normal">
                  45 minutes of your time every 4 weeks to produce a full month's worth of high-converting content.
                </p>
              </div>

              <ul className="space-y-2.5 mb-6 text-xs text-slate-700 font-semibold">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2650a8] shrink-0 mt-0.5" />
                  <span>Content strategy built on your expertise, not generic prompts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2650a8] shrink-0 mt-0.5" />
                  <span>Content development & done-for-you writing — never open a blank page</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2650a8] shrink-0 mt-0.5" />
                  <span>Monthly post analytics showing what landed and what needs to change</span>
                </li>
              </ul>

              {/* From -> To Shift Box */}
              <div className="p-3.5 rounded-xl bg-blue-50/50 border border-[#2650a8]/20 mb-6 space-y-2 text-xs">
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">❌ FROM:</span>
                  <span className="text-slate-600">Posting when you remember, going quiet for 3 weeks, wondering if any of it did anything.</span>
                </div>
                <div className="border-t border-slate-200 pt-2">
                  <span className="font-bold text-[#2650a8] block mb-0.5">✅ TO:</span>
                  <span className="text-slate-900 font-bold">A network that already knows how you think, so the first call starts at trust.</span>
                </div>
              </div>
            </div>

            <a
              href={zoomBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] transition-all cursor-pointer shadow-sm"
            >
              <span>Apply for Done-For-You Package</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#f4ba43]" />
            </a>
          </div>

          {/* Package 2 */}
          <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#2650a8]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="text-[11px] font-extrabold text-[#f4ba43] uppercase tracking-wider mb-1.5">Option 02</div>
              <h3 className="font-heading font-black text-xl text-[#000000] mb-2">
                Done-With-You Training
              </h3>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-5">
                For the expert who wants the skill in-house
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-5 text-xs text-slate-700 font-medium space-y-1.5">
                <div className="flex items-center gap-1.5 text-slate-900 font-bold">
                  <Users className="w-3.5 h-3.5 text-[#2650a8]" />
                  <span>12-Week In-House Team Programme</span>
                </div>
                <p className="text-slate-600 leading-normal">
                  Ideal for your team member or VA. We build your Content-Connection-Conversation system together.
                </p>
              </div>

              <ul className="space-y-2.5 mb-6 text-xs text-slate-700 font-semibold">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#f4ba43] shrink-0 mt-0.5" />
                  <span>Bi-weekly 1-on-1 Zoom sessions with Gaya & support in between</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#f4ba43] shrink-0 mt-0.5" />
                  <span>Custom content materials, templates & writing feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#f4ba43] shrink-0 mt-0.5" />
                  <span>Outreach system setup: how to run it, follow up, & nurture leads</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#f4ba43] shrink-0 mt-0.5" />
                  <span>End goal: Your team runs the whole thing — never buy another course</span>
                </li>
              </ul>
            </div>

            <a
              href={zoomBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 hover:bg-[#2650a8] hover:text-white border border-slate-200 transition-all cursor-pointer shadow-xs"
            >
              <span>Apply for 12-Week Programme</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Package 3 */}
          <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#2650a8]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="text-[11px] font-extrabold text-emerald-600 uppercase tracking-wider mb-1.5">Option 03</div>
              <h3 className="font-heading font-black text-xl text-[#000000] mb-2">
                Video Content System
              </h3>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-5">
                Overcoming camera anxiety & video deletion loops
              </p>

              {/* Video Frustration Box */}
              <div className="p-3.5 rounded-xl bg-amber-50/60 border border-[#f4ba43]/40 mb-5 text-xs space-y-1 text-slate-700 font-medium">
                <span className="font-bold text-slate-900 block">Every time you sit down to record:</span>
                <p>• You adjust your shirt → Then your hair</p>
                <p>• You start again → Hear your own voice → Delete it</p>
                <p className="font-bold text-rose-700 pt-0.5">Result: Nothing gets posted. Again.</p>
              </div>

              <ul className="space-y-2.5 mb-6 text-xs text-slate-700 font-semibold">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2650a8] shrink-0 mt-0.5" />
                  <span>Topic ideas & high-converting video scripting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2650a8] shrink-0 mt-0.5" />
                  <span>Guided online recording sessions (1.5 hours per batch)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2650a8] shrink-0 mt-0.5" />
                  <span>Professional video editing & post captions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2650a8] shrink-0 mt-0.5" />
                  <span>32%+ proven increase in video views & engagement</span>
                </li>
              </ul>
            </div>

            <a
              href={zoomBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 hover:bg-[#2650a8] hover:text-white border border-slate-200 transition-all cursor-pointer shadow-xs"
            >
              <span>Get Started with Video System</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
