import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

export default function Faq({ onOpenBooking }) {
  const [openIdx, setOpenIdx] = useState(0);
  const zoomBookingUrl = "https://scheduler.zoom.us/gaya-we-write-you-chill/building-your-personal-brand";

  const faqs = [
    {
      q: 'Who is this for?',
      a: 'You run a property/finance business, established, busy and not starting from scratch.\n\nYou are incredibly good at your job. But your expertise is not reflected on LinkedIn where you know your future clients and referrals are. You know you should be on LinkedIn. You have real stories and no time to write them. You have no strategy to grow your business on LinkedIn though you have heard success stories from your industry peers. You are patient enough to let it compound. You already understand this, because you know how compounding works.'
    },
    {
      q: 'I have been burnt by an agency before. How do I know you can help me?',
      a: 'Fair question. Here is how you find out without spending anything. When you book the call, you get a full LinkedIn assessment plan. Free. It shows you exactly what is missing and exactly what to do about it. Profile, content, outreach, the lot. If you follow that blueprint on your own, you will get results. It also works as a self check. It tells you whether you are actually ready to build this, or whether the timing is wrong. Both are useful answers.'
    },
    {
      q: 'I have done LinkedIn courses before. How is 12 weeks of training different?',
      a: 'Honestly? If you have done the courses, you probably know enough. What you need is time and someone holding you to it.\n\nBut this is not a course, and it is not a group coaching community. It is one to one. Bi-weekly Zoom sessions with me, and support in between. You get the content materials, feedback on what you write, and the outreach system. How to run it. How to follow up. What to send and what to leave alone.\n\nEvery fortnight we review what went out and refine it. It is closer to having a fractional marketing person on your team for 12 weeks than sitting through another module.\n\nThe goal is that at the end of it, you can run the whole thing yourself. So you never have to buy another course.'
    },
    {
      q: 'What is the ROI?',
      a: 'The system is the ROI. At the end you own a positioned profile, a voice guide, a content engine, a documented outreach process, and a team member who can run it. That does not expire when the engagement does.\n\nWhat I will not do is promise you \'10x leads in 30 days.\' If you hear anyone say that…. Run! Because trust is not \'fast food\' where you get something out of one click.'
    },
    {
      q: 'How much of my time does this take?',
      a: 'Done for you content: 45 minutes a month.\n\n12 week done with you programme: a 30 minute review call every fortnight, plus around 2 hours a week on execution. Mostly follow up messages.\n\nVideo content: one 1.5 hour recording session.\n\nThat is it. If you cannot find at least 45 minutes a month, this is not the right fit for you.'
    },
    {
      q: 'What happens after 3 months?',
      a: 'We do a wrap session. Everything we have built gets converted into a Claude skill, so you or your team can keep producing content in your voice without me. If you want ongoing support after that, there are bespoke options.'
    },
    {
      q: 'I am not sure which option suits me.',
      a: 'Book a call. We will work it out on the call, and you will walk away with the assessment plan either way.'
    }
  ];

  return (
    <section id="faq" className="snap-section min-h-[auto] md:min-h-screen py-14 sm:py-24 bg-slate-50/80 border-t border-slate-200 relative z-10 overflow-hidden flex flex-col justify-center">

      {/* Decorative ambient backdrop */}
      <div className="absolute top-1/3 left-10 w-60 sm:w-96 h-60 sm:h-96 bg-[#2650a8]/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 right-10 w-60 sm:w-96 h-60 sm:h-96 bg-[#f4ba43]/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="cyclic-card cyclic-delay-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#2650a8] px-3.5 py-1.5 rounded-full inline-block mb-3 sm:mb-4 shadow-xs">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-[#000000] tracking-tight leading-tight">
            Clear Answers. <span className="highlight-swipe">Zero Fluff.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-600 font-subheading">
            Everything you need to know about working with Gaya and We Write You Chill.
          </p>
        </motion.div>

        {/* FAQ Accordion List with Cyclic Glowing Borders */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const delayClass = idx % 3 === 0 ? 'cyclic-delay-1' : idx % 3 === 1 ? 'cyclic-delay-2' : 'cyclic-delay-3';

            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={idx}
                className={`cyclic-card ${delayClass} rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'ring-2 ring-[#2650a8]/30 shadow-md' : ''}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 font-heading font-bold text-sm sm:text-lg text-[#000000] hover:text-[#2650a8] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2.5 sm:gap-3.5">
                    <div className={`p-1.5 sm:p-2 rounded-xl shrink-0 transition-colors ${isOpen ? 'bg-[#2650a8] text-white' : 'bg-slate-100 text-[#2650a8]'}`}>
                      <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="leading-snug">{faq.q}</span>
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="shrink-0"
                  >
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 ${isOpen ? 'text-[#2650a8]' : 'text-slate-400'}`} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-slate-700 leading-relaxed border-t border-slate-100 whitespace-pre-line font-medium">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions CTA with Cyclic Glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="cyclic-border-flow mt-12 p-8 text-center shadow-lg"
        >
          <h3 className="font-heading font-bold text-xl text-[#000000] mb-2">Have a question not listed here?</h3>
          <p className="text-sm text-slate-600 mb-6 font-medium">Book a 1-on-1 strategy call with Gaya. We'll answer everything directly.</p>
          <a
            href={zoomBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] shadow-lg shadow-[#2650a8]/25 transition-all cursor-pointer"
          >
            <span>Ask Gaya Directly on Zoom</span>
            <ArrowRight className="w-4 h-4 text-[#f4ba43]" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
