import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ExternalLink, Image as ImageIcon, Sparkles, X } from 'lucide-react';
import TiltCard from './TiltCard';
import gayaFounderImg from '../assets/gaya-founder.jpg';
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
      avatar: gayaFounderImg,
      screenshot: adarshImg,
      quote: 'Working with Gaya has been a fantastic experience. She took the time to really understand not just what I do, but how I think and communicate. Rather than writing generic LinkedIn posts, she built a content strategy around my own voice and philosophy, making it feel authentic from day one.',
      highlights: ['Reusable content templates', 'Clear content pillars', 'Authentic voice capture']
    },
    {
      name: 'Jathu Srikanthan',
      title: 'Buyer\'s Agent',
      company: 'Interstate Investor Specialist',
      metrics: '2 Direct Inbound Client Enquiries',
      avatar: gayaFounderImg,
      screenshot: jathuImg,
      quote: 'Before working with Gaya, I was drawn to her posts because they felt real. Honest, raw, and not overly polished like most you see online. When Gaya reached out to me, we started working together to improve my LinkedIn presence... I\'ve already had two people enquire about working with me!',
      highlights: ['Inbound enquiries generated', 'Clear outreach framework', 'Genuine conversations']
    },
    {
      name: 'Renee Hohenhaus',
      title: 'Home & Investment Loan Specialist',
      company: 'Self-Employed Borrower Expert',
      metrics: 'Overcame Overthinking & Built Confidence',
      avatar: gayaFounderImg,
      screenshot: reneeImg,
      quote: 'Before working with Gaya, I honestly felt quite stuck and hesitant with LinkedIn. I knew I had valuable experience to share, but I overthought everything... Working with Gaya completely changed that. She has a way of drawing the words out of you so nothing feels forced or marketing-ish.',
      highlights: ['Confidence in posting', 'Zero marketing fluff', 'Collaborative process']
    },
    {
      name: 'Jason Kuan',
      title: 'Mortgage Broker & Founder',
      company: 'ShernAdvisory (10+ Yrs Lending Experience)',
      metrics: 'Booked Calls with Ideal Clients & Referral Partners',
      avatar: gayaFounderImg,
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
    <section id="reviews" className="py-24 bg-white relative z-10 overflow-hidden">
      
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#f4ba43]/8 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4ba43]/15 border border-[#f4ba43]/40 text-[#b45309] mb-3 shadow-xs">
            <Star className="w-3.5 h-3.5 fill-current text-[#f4ba43]" />
            <span className="text-xs font-bold uppercase tracking-wider">Verified Client Feedback</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#000000] tracking-tight leading-tight">
            <span className="highlight-swipe">What working together feels like...</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="flex"
            >
              <TiltCard
                tiltStrength={5}
                className="light-card-hover p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between relative group w-full"
              >
                <div>
                  {/* Header Profile Info */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#000000] group-hover:text-[#2650a8] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#2650a8]">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        {item.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-[#f4ba43]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Metric Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#2650a8]/10 text-[#2650a8] border border-[#2650a8]/20 text-xs font-bold mb-5 shadow-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{item.metrics}</span>
                  </div>

                  {/* Quote Text */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-slate-200 absolute -top-3 -left-2 pointer-events-none opacity-60" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic pl-4 border-l-2 border-[#2650a8] font-medium">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.highlights.map((hl, hIdx) => (
                      <span key={hIdx} className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        ✓ {hl}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Original LinkedIn Screenshot Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedImage(item.screenshot)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 hover:bg-[#2650a8] hover:text-white border border-slate-200 hover:border-[#2650a8] transition-all cursor-pointer shadow-xs group/btn"
                >
                  <ImageIcon className="w-4 h-4 text-[#2650a8] group-hover:text-white" />
                  <span>View Original LinkedIn Recommendation</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-70 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                </motion.button>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Image Modal Lightbox with AnimatePresence */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-white p-3 sm:p-4 rounded-3xl border border-slate-300 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-900 text-white hover:bg-black cursor-pointer shadow-lg hover:scale-105 transition-all"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>
              <img 
                src={selectedImage} 
                alt="LinkedIn Recommendation Screenshot" 
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl border border-slate-200 shadow-inner"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
