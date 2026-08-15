import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ExternalLink, Image as ImageIcon, Sparkles, X } from 'lucide-react';
import avatarAdarsh from '../assets/avatar-adarsh.png';
import avatarJathu from '../assets/avatar-jathu.png';
import avatarRenee from '../assets/avatar-renee.png';
import avatarJason from '../assets/avatar-jason.png';
import adarshImg from '../assets/testimonial-adarsh.png';
import jathuImg from '../assets/testimonial-jathu.png';
import reneeImg from '../assets/testimonial-renee.png';
import jasonImg from '../assets/testimonial-jason.png';

export default function Testimonials() {
  const [selectedImage, setSelectedImage] = useState(null);

  const testimonials = [
    {
      name: 'Adarsh Kediyoor',
      title: 'Founder & Buyer\'s Agent',
      company: 'Secure Future Property Advisory',
      metrics: '8 Properties Worth $5.5M in 5 Years',
      avatar: avatarAdarsh,
      screenshot: adarshImg,
      quote: 'Working with Gaya has been a fantastic experience. She took the time to really understand not just what I do, but how I think and communicate. Rather than writing generic LinkedIn posts, she built a content strategy around my own voice and philosophy, making it feel authentic from day one.',
      highlights: ['Reusable content templates', 'Clear content pillars', 'Authentic voice capture']
    },
    {
      name: 'Jathu Srikanthan',
      title: 'Buyer\'s Agent',
      company: 'Interstate Investor Specialist',
      metrics: '2 Direct Inbound Client Enquiries',
      avatar: avatarJathu,
      screenshot: jathuImg,
      quote: 'Before working with Gaya, I was drawn to her posts because they felt real. Honest, raw, and not overly polished like most you see online. When Gaya reached out to me, we started working together to improve my LinkedIn presence... I\'ve already had two people enquire about working with me!',
      highlights: ['Inbound enquiries generated', 'Clear outreach framework', 'Genuine conversations']
    },
    {
      name: 'Renee Hohenhaus',
      title: 'Home & Investment Loan Specialist',
      company: 'Self-Employed Borrower Expert',
      metrics: 'Overcame Overthinking & Built Confidence',
      avatar: avatarRenee,
      screenshot: reneeImg,
      quote: 'Before working with Gaya, I honestly felt quite stuck and hesitant with LinkedIn. I knew I had valuable experience to share, but I overthought everything... Working with Gaya completely changed that. She has a way of drawing the words out of you so nothing feels forced or marketing-ish.',
      highlights: ['Confidence in posting', 'Zero marketing fluff', 'Collaborative process']
    },
    {
      name: 'Jason Kuan',
      title: 'Mortgage Broker & Founder',
      company: 'ShernAdvisory (10+ Yrs Lending Experience)',
      metrics: 'Booked Calls with Ideal Clients & Referral Partners',
      avatar: avatarJason,
      screenshot: jasonImg,
      quote: 'My biggest challenge was knowing what to post on LinkedIn and finding the time to actually get started... Since working with Gaya we have booked calls with ideal clients and referral partners. We also have content scheduled and a strategy to connect with my network.',
      highlights: ['Booked client strategy calls', 'Referral partner deals', 'Predictable content schedule']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="reviews" className="snap-section min-h-[auto] md:min-h-screen py-14 sm:py-24 bg-white relative z-10 overflow-hidden flex flex-col justify-center">

      {/* Background ambient decorative shapes */}
      <div className="absolute top-1/3 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-[#2650a8]/5 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-[#f4ba43]/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <div className="cyclic-card cyclic-delay-1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[#b45309] mb-3 shadow-xs">
            <div className="flex items-center gap-1 text-[#f4ba43]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 fill-current animate-star-${i + 1}`} />
              ))}
            </div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">Verified Client Feedback</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#000000] tracking-tight leading-tight">
            <span className="highlight-swipe">What working together feels like...</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid with Cyclic Glowing Borders */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {testimonials.map((item, idx) => {
            const delayClass = idx === 0 ? 'cyclic-delay-1' : idx === 1 ? 'cyclic-delay-2' : idx === 2 ? 'cyclic-delay-3' : '';

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`cyclic-card ${delayClass} p-5 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between relative group w-full`}
              >
                <div>
                  {/* Header Profile Info with Real LinkedIn Avatar & Animated 5 Stars */}
                  <div className="flex items-start justify-between gap-3 sm:gap-4 mb-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative shrink-0">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full p-[1.5px] bg-gradient-to-tr from-[#2650a8] via-[#f4ba43] to-[#2650a8] shadow-md">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-full h-full rounded-full object-cover bg-white"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-[#2650a8] text-white shadow-xs">
                          <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
                        </div>
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-heading font-bold text-base sm:text-lg text-[#000000] group-hover:text-[#2650a8] transition-colors leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#2650a8] truncate leading-tight mt-0.5">
                          {item.title}
                        </p>
                        <p className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    {/* Animated 5 Star Review Badge */}
                    <div className="flex items-center gap-0.5 sm:gap-1 px-2.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#f4ba43] shadow-xs shrink-0">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current transition-transform duration-300 group-hover:scale-110 animate-star-${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Metric Pill */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#2650a8]/10 text-[#2650a8] border border-[#2650a8]/20 text-[11px] sm:text-xs font-bold mb-4 sm:mb-5 shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#f4ba43]" />
                    <span>{item.metrics}</span>
                  </div>

                  {/* Quote Text */}
                  <div className="relative mb-4 sm:mb-6">
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-slate-200 absolute -top-3 -left-2 pointer-events-none opacity-60" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic pl-3 sm:pl-4 border-l-2 border-[#2650a8] font-medium">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                    {item.highlights.map((hl, hIdx) => (
                      <span key={hIdx} className="text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        ✓ {hl}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Original LinkedIn Screenshot Button */}
                <button
                  onClick={() => setSelectedImage(item.screenshot)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 hover:bg-[#2650a8] hover:text-white border border-slate-200 hover:border-[#2650a8] transition-all cursor-pointer shadow-xs group/btn text-center"
                >
                  <ImageIcon className="w-4 h-4 text-[#2650a8] group-hover:text-white shrink-0" />
                  <span className="truncate">View Original LinkedIn Recommendation</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-70 transition-transform duration-200 group-hover/btn:translate-x-0.5 shrink-0" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Image Modal Lightbox with AnimatePresence */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-white p-2.5 sm:p-4 rounded-2xl sm:rounded-3xl border border-slate-300 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 rounded-full bg-slate-900 text-white hover:bg-black cursor-pointer shadow-lg hover:scale-105 transition-all"
                aria-label="Close image modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <img
                src={selectedImage}
                alt="LinkedIn Recommendation Screenshot"
                className="w-full h-auto max-h-[80vh] sm:max-h-[85vh] object-contain rounded-xl sm:rounded-2xl border border-slate-200 shadow-inner"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
