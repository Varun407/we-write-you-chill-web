import React, { useState } from 'react';
import { Star, Quote, ExternalLink, Image as ImageIcon, Sparkles, X } from 'lucide-react';
import { getAssetPath } from '../utils/assetPath';

export default function Testimonials() {
  const [selectedImage, setSelectedImage] = useState(null);

  const testimonials = [
    {
      name: 'Adarsh Kediyoor',
      title: 'Founder & Buyer\'s Agent',
      company: 'Secure Future Property Advisory',
      metrics: '8 Properties Worth $5.5M in 5 Years',
      avatar: 'assets/gaya-founder.jpg',
      screenshot: 'assets/testimonial-adarsh.png',
      quote: 'Working with Gaya has been a fantastic experience. She took the time to really understand not just what I do, but how I think and communicate. Rather than writing generic LinkedIn posts, she built a content strategy around my own voice and philosophy, making it feel authentic from day one.',
      highlights: ['Reusable content templates', 'Clear content pillars', 'Authentic voice capture']
    },
    {
      name: 'Jathu Srikanthan',
      title: 'Buyer\'s Agent',
      company: 'Interstate Investor Specialist',
      metrics: '2 Direct Inbound Client Enquiries',
      avatar: 'assets/gaya-founder.jpg',
      screenshot: 'assets/testimonial-jathu.png',
      quote: 'Before working with Gaya, I was drawn to her posts because they felt real. Honest, raw, and not overly polished like most you see online. When Gaya reached out to me, we started working together to improve my LinkedIn presence... I\'ve already had two people enquire about working with me!',
      highlights: ['Inbound enquiries generated', 'Clear outreach framework', 'Genuine conversations']
    },
    {
      name: 'Renee Hohenhaus',
      title: 'Home & Investment Loan Specialist',
      company: 'Self-Employed Borrower Expert',
      metrics: 'Overcame Overthinking & Built Confidence',
      avatar: 'assets/gaya-founder.jpg',
      screenshot: 'assets/testimonial-renee.png',
      quote: 'Before working with Gaya, I honestly felt quite stuck and hesitant with LinkedIn. I knew I had valuable experience to share, but I overthought everything... Working with Gaya completely changed that. She has a way of drawing the words out of you so nothing feels forced or marketing-ish.',
      highlights: ['Confidence in posting', 'Zero marketing fluff', 'Collaborative process']
    },
    {
      name: 'Jason Kuan',
      title: 'Mortgage Broker & Founder',
      company: 'ShernAdvisory (10+ Yrs Lending Experience)',
      metrics: 'Booked Calls with Ideal Clients & Referral Partners',
      avatar: 'assets/gaya-founder.jpg',
      screenshot: 'assets/testimonial-jason.png',
      quote: 'My biggest challenge was knowing what to post on LinkedIn and finding the time to actually get started... Since working with Gaya we have booked calls with ideal clients and referral partners. We also have content scheduled and a strategy to connect with my network.',
      highlights: ['Booked client strategy calls', 'Referral partner deals', 'Predictable content schedule']
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4ba43]/15 border border-[#f4ba43]/40 text-[#b45309] mb-3">
            <Star className="w-3.5 h-3.5 fill-current text-[#f4ba43]" />
            <span className="text-xs font-bold uppercase tracking-wider">Verified Client Feedback</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#000000] tracking-tight leading-tight">
            Real Brokers. Real Realtors. <span className="highlight-swipe">Real Inbound Leads.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-subheading">
            Don't take our word for it — read what Buyer's Agents and Mortgage Brokers say about working with Gaya.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#2650a8]/30 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
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

                  <div className="flex items-center gap-0.5 text-[#f4ba43]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Metric Pill */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#2650a8]/10 text-[#2650a8] border border-[#2650a8]/20 text-[11px] font-bold mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{item.metrics}</span>
                </div>

                {/* Quote Text */}
                <div className="relative mb-5">
                  <Quote className="w-6 h-6 text-slate-200 absolute -top-2 -left-2 pointer-events-none" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic pl-3.5 border-l-2 border-[#2650a8] font-medium">
                    "{item.quote}"
                  </p>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {item.highlights.map((hl, hIdx) => (
                    <span key={hIdx} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      ✓ {hl}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Original LinkedIn Screenshot Button */}
              <button
                onClick={() => setSelectedImage(getAssetPath(item.screenshot))}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 hover:bg-[#2650a8] hover:text-white border border-slate-200 transition-all cursor-pointer shadow-xs"
              >
                <ImageIcon className="w-3.5 h-3.5 text-[#2650a8] group-hover:text-white" />
                <span>View Original LinkedIn Recommendation</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Image Modal Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full bg-white p-3 rounded-2xl border border-slate-300 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900 text-white hover:bg-black cursor-pointer shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src={selectedImage} 
              alt="LinkedIn Recommendation Screenshot" 
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl border border-slate-200"
            />
          </div>
        </div>
      )}

    </section>
  );
}
