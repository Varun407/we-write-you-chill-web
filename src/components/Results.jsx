import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

export default function Results() {
  const getAssessmentUrl = () => {
    if (typeof window === 'undefined') return './assessment.html';
    return window.location.origin + window.location.pathname.replace(/\/+$/, '') + '/assessment.html';
  };

  const caseStudies = [
    {
      role: 'Perth Mortgage Broker',
      company: 'Oren Mortgages',
      person: 'Hannah Richards',
      link: 'https://www.linkedin.com/in/hannahrichards2/',
      results: [
        '4 high intent leads in 12 weeks',
        'Outreach system: Average 40% acceptance rate out of 200 connection requests sent out every week (6-8% reply rate)',
        'Tools integrated: Sales Navigator / Dripify / Kondo',
        'Bi-weekly training provided for team member to qualify & nurture connections'
      ],
      badge: '4 High Intent Leads'
    },
    {
      role: 'Melbourne Mortgage Broker',
      company: 'Mortgage Champions',
      person: 'Sahani Kurwa',
      link: 'https://www.linkedin.com/in/sahanikurwa/',
      results: [
        'Grew network to 1,500 targeted followers in 12 weeks',
        'Built strategic referral relationships with sales agents and buyer\'s agents through outbound system',
        'Consistent weekly presence with zero missed posting slots'
      ],
      badge: '1,500+ Targeted Network'
    },
    {
      role: 'Accounting Firm Director',
      company: 'Keysight Accounting Solutions',
      person: 'Fousiya Naskar',
      link: 'https://www.linkedin.com/in/fousiya-naskar/',
      results: [
        'Full video content engine: ideas → scripting → recording online → editing → post captions',
        'Generated 32% increased views and audience engagement',
        'Built executive authority across finance & business networks'
      ],
      badge: '+32% Views & Engagement'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="results" className="py-24 bg-white relative z-10 border-t border-slate-200 overflow-hidden">
      
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#2650a8]/4 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#2650a8] px-3.5 py-1.5 rounded-full bg-[#2650a8]/10 border border-[#2650a8]/25 inline-block mb-3 shadow-xs">
            Proven Track Record
          </span>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#000000] tracking-tight leading-tight">
            Real Results For <span className="highlight-swipe">Property & Finance Experts</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 font-subheading">
            Gaya has built personal brands for more than <strong className="text-[#000000] font-bold">25 clients</strong> across Australia. Here is what happens when compounding kicks in.
          </p>
        </motion.div>

        {/* Top 3 Quick Stats Bar with Live Animated Counters */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14"
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-200 text-center shadow-sm hover:shadow-md hover:border-[#2650a8]/40 transition-all"
          >
            <div className="flex justify-center mb-2">
              <div className="p-2.5 rounded-xl bg-[#2650a8]/10 text-[#2650a8]">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#2650a8] mb-1">
              <AnimatedCounter value="25" suffix="+" duration={1.5} />
            </div>
            <div className="text-[11px] font-extrabold text-slate-800 uppercase tracking-wider">Clients Worked With</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Property & Finance Industry Experts</div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-200 text-center shadow-sm hover:shadow-md hover:border-[#f4ba43]/60 transition-all"
          >
            <div className="flex justify-center mb-2">
              <div className="p-2.5 rounded-xl bg-[#f4ba43]/20 text-[#b45309]">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#b45309] mb-1">
              <AnimatedCounter value="40" suffix="% Avg" duration={1.5} />
            </div>
            <div className="text-[11px] font-extrabold text-slate-800 uppercase tracking-wider">Acceptance Rate</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">200 Connection Requests / Week</div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-200 text-center shadow-sm hover:shadow-md hover:border-[#2650a8]/40 transition-all"
          >
            <div className="flex justify-center mb-2">
              <div className="p-2.5 rounded-xl bg-[#2650a8]/10 text-[#2650a8]">
                <Award className="w-5 h-5" />
              </div>
            </div>
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#2650a8] mb-1">
              <AnimatedCounter value="100" suffix="%" duration={1.5} />
            </div>
            <div className="text-[11px] font-extrabold text-slate-800 uppercase tracking-wider">Posting Consistency</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Full length of every engagement</div>
          </motion.div>
        </motion.div>

        {/* Case Studies Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
        >
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="light-card-hover p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#2650a8]/10 text-[#2650a8] border border-[#2650a8]/25 shadow-xs">
                    {cs.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#000000] mb-0.5 group-hover:text-[#2650a8] transition-colors">
                  {cs.person}
                </h3>
                <p className="text-xs font-semibold text-[#2650a8]">{cs.role}</p>
                <p className="text-[11px] text-slate-500 mb-5 font-medium">{cs.company}</p>

                <ul className="space-y-3 mb-6">
                  {cs.results.map((res, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#f4ba43] shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={cs.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 hover:bg-[#2650a8] hover:text-white border border-slate-200 hover:border-[#2650a8] transition-all cursor-pointer shadow-xs group/btn"
              >
                <span>View LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Free Assessment Lead Magnet Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="p-7 rounded-2xl bg-gradient-to-r from-slate-50 via-white to-[#2650a8]/5 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-[#2650a8] text-white shrink-0 shadow-md">
              <FileText className="w-6 h-6 text-[#f4ba43]" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-[#000000]">Example LinkedIn Profile & Strategy Assessment</h4>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">See the exact assessment plan Gaya provides for clients before onboarding.</p>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href={getAssessmentUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] shadow-md shadow-[#2650a8]/20 transition-all cursor-pointer"
          >
            <span>View Sample Client Assessment</span>
            <ExternalLink className="w-4 h-4 text-[#f4ba43]" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
