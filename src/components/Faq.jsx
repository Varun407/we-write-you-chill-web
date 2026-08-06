import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

export default function Faq({ onOpenBooking }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How much of my time does this take every week?',
      a: 'Less than 45 minutes! After our initial 1-on-1 voice discovery session, we conduct a quick 20-minute bi-weekly check-in or voice memo exchange to extract fresh stories. We handle 100% of the drafting, formatting, scheduling, and asset creation.'
    },
    {
      q: 'What if the posts don\'t sound like me?',
      a: 'Capturing your authentic voice is our #1 promise. We transcribe your voice interview and analyze your natural vocabulary. You have full approval over every single post before it goes live, and we adjust until every sentence feels 100% genuine.'
    },
    {
      q: 'How quickly will I start seeing inbound enquiries or booked calls?',
      a: 'Profile optimization and content strategy launch in Week 1. Clients like Jathu and Jason started receiving warm DMs, referral inquiries, and booked strategy calls within 3 to 4 weeks of consistent posting.'
    },
    {
      q: 'I never know what to post or write about. Is that fine?',
      a: 'That is completely normal! You don\'t need to bring any ideas. We come to every meeting with structured topic prompts, property market angles, client win breakdowns, and investor education guides tailored to your niche.'
    },
    {
      q: 'Do you help with network outreach and referral partner messaging?',
      a: 'Yes! We build a clear, non-pushy outreach strategy for engaging with warm connections, active buyers, and industry referral partners so your network actively turns into pipeline.'
    },
    {
      q: 'Do I get to keep the content templates and resources?',
      a: 'Yes! We hand over full modular post templates, content banks, and custom lead guides. Even after our engagement, you keep all assets forever.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2650a8] px-3.5 py-1.5 rounded-full bg-[#2650a8]/10 border border-[#2650a8]/20 inline-block mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#000000] tracking-tight leading-tight">
            Got Questions? <span className="highlight-swipe">We Have Answers.</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 font-subheading">
            Everything you need to know about working with We Write You Chill.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-lg text-[#000000] hover:text-[#2650a8] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#2650a8] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#2650a8]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center shadow-sm">
          <h3 className="font-heading font-bold text-xl text-[#000000] mb-2">Have a specific question about your profile?</h3>
          <p className="text-sm text-slate-600 mb-6">Book a 15-minute intro chat with Gaya to discuss your goals.</p>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] shadow-lg shadow-[#2650a8]/20 transition-all cursor-pointer"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-4 h-4 text-[#f4ba43]" />
          </button>
        </div>

      </div>
    </section>
  );
}
