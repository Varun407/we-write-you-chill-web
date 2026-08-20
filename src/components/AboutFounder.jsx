import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight, Heart, CheckCircle, ExternalLink } from 'lucide-react';
import gayaFounderImg from '../assets/gaya-founder.jpg';

export default function AboutFounder({ onOpenBooking }) {
  const zoomBookingUrl = "https://scheduler.zoom.us/gaya-we-write-you-chill/building-your-personal-brand";
  const gayaLinkedinUrl = "https://www.linkedin.com/in/msgaya/";

  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { amount: 0.25, once: false });
  const imageControls = useAnimation();
  const laserControls = useAnimation();
  const sheenControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      imageControls.start({
        clipPath: 'polygon(-30% 0%, 140% 0%, 140% 140%, -30% 140%)',
        scale: 1,
        filter: 'blur(0px) brightness(1)',
        opacity: 1,
        transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.15 }
      });
      laserControls.start({
        x: '230%', y: '230%',
        opacity: [0, 1, 1, 0],
        transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.12 }
      });
      sheenControls.start({
        opacity: [0, 0.35, 0],
        transition: { duration: 0.8, delay: 1.3, ease: 'easeOut' }
      });
    } else {
      imageControls.start({
        clipPath: 'polygon(0% 0%, 0% 0%, -30% 100%, -30% 100%)',
        scale: 1.06,
        filter: 'blur(5px) brightness(0.85)',
        opacity: 0.15,
        transition: { duration: 0 }
      });
      laserControls.set({ x: '-130%', y: '-130%', opacity: 0 });
      sheenControls.set({ opacity: 0 });
    }
  }, [isInView, imageControls, laserControls, sheenControls]);

  const achievements = [
    { title: 'Millions of views generated for clients through published posts', color: '#2650a8' },
    { title: '100% consistency delivered for full contract duration', color: '#f4ba43' },
    { title: 'Client networks grown by 30-40% weekly via outreach', color: '#2650a8' },
    { title: "Former Assistant Buyer's Agent with domain expertise", color: '#f4ba43' }
  ];

  return (
    <section id="about" className="snap-section min-h-[auto] md:min-h-screen py-14 sm:py-24 bg-white relative z-10 border-t border-slate-200 flex flex-col justify-center">
      <div className="absolute top-1/2 right-10 w-60 sm:w-96 h-60 sm:h-96 bg-[#2650a8]/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none animate-pulse-glow"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#2650a8]/15 via-[#f4ba43]/15 to-transparent rounded-[36px] blur-xl opacity-80 pointer-events-none"></div>

            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none rounded-[28px] sm:rounded-[30px] bg-gradient-to-tr from-[#2650a8]/25 via-slate-100 to-[#f4ba43]/30 p-[2.5px] sm:p-[3px] shadow-2xl group cyclic-card cyclic-delay-1">
              <div className="rounded-[25px] sm:rounded-[27px] bg-white p-2 sm:p-2.5 shadow-inner">
                <div ref={imageRef} className="aspect-[4/5] w-full rounded-2xl overflow-hidden relative border border-slate-100/80 bg-slate-950">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-[#2650a8]/10 blur-2xl"></div>
                  </div>

                  <motion.div
                    initial={{
                      clipPath: 'polygon(0% 0%, 0% 0%, -30% 100%, -30% 100%)',
                      scale: 1.06,
                      filter: 'blur(5px) brightness(0.85)',
                      opacity: 0.15
                    }}
                    animate={imageControls}
                    className="absolute inset-0 z-10"
                  >
                    <img
                      src={gayaFounderImg}
                      alt="Gayathiri (Gaya) - Founder of We Write You Chill"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
                  </motion.div>

                  <motion.div
                    initial={{
                      x: '-130%',
                      y: '-130%',
                      opacity: 0
                    }}
                    animate={laserControls}
                    className="absolute -inset-y-36 -left-24 w-44 z-20 pointer-events-none -rotate-[35deg] flex items-center justify-center"
                  >
                    <div className="absolute inset-y-0 w-36 bg-gradient-to-r from-transparent via-[#f4ba43]/40 to-transparent blur-md"></div>
                    <div className="w-[3px] h-[220%] bg-gradient-to-b from-transparent via-[#f4ba43] via-white to-transparent shadow-[0_0_20px_#f4ba43,0_0_40px_#2650a8]"></div>
                    <div className="absolute -left-3 top-1/2 w-8 h-8 rounded-full bg-white/90 blur-sm shadow-[0_0_25px_#f4ba43]"></div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={sheenControls}
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent z-25 pointer-events-none"
                  ></motion.div>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg flex items-center justify-between gap-2 z-30">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <h4 className="font-heading font-semibold text-sm sm:text-base text-[#000000] leading-none">Gaya</h4>
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[9px] sm:text-[10px] font-bold shrink-0 border border-emerald-300/60">
                          <span className="relative flex h-2 w-2 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-xs"></span>
                          </span>
                          Active
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-[11.5px] text-[#2650a8] font-semibold leading-tight whitespace-nowrap">
                        LinkedIn Personal Branding Strategist
                      </p>
                    </div>
                    <a
                      href={gayaLinkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-[#2650a8] text-white hover:bg-[#1d4088] transition-colors shadow-sm cursor-pointer shrink-0 flex items-center justify-center"
                      aria-label="Gaya's LinkedIn Profile"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#f4ba43]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 cyclic-card cyclic-delay-2 p-3.5 sm:p-4 rounded-2xl shadow-xs max-w-sm sm:max-w-md mx-auto lg:max-w-none">
              <div className="flex items-start gap-2.5 text-xs font-semibold text-slate-700 leading-relaxed">
                <div className="p-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-500 shrink-0 mt-0.5 shadow-xs">
                  <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-heartbeat" />
                </div>
                <span>Posting every single day since Sept 30, 2023. Built on real compounding, not fast food marketing.</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            <span className="cyclic-card cyclic-delay-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#2650a8] px-3.5 py-1.5 rounded-full inline-block shadow-xs">
              About The Strategist
            </span>

            <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#000000] tracking-tight leading-tight">
              <span className="inline-block">Gaya -</span>{' '}
              <span className="highlight-swipe inline-block whitespace-normal md:whitespace-nowrap">LinkedIn Personal Branding <span className="word-accent">Strategist</span></span>
            </h2>

            <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-base text-slate-700 leading-relaxed font-subheading font-medium">
              <p>
                I previously worked as an assistant buyer's agent in Australia. I know firsthand how tough it is to build trust with high-net-worth clients and competitive referral partners.
              </p>

              <p>
                I have been posting on LinkedIn every single day since September 30, 2023 till today. After making several mistakes myself in this process, three core things stood out to grow your brand and that's how the framework was assembled:{' '}
                <span className="framework-glow-pill cursor-default">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f4ba43] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f4ba43] shadow-xs"></span>
                  </span>
                  <span className="framework-pill-shimmer text-xs sm:text-[13.5px]">
                    The Content <span className="text-[#f4ba43] font-black mx-1 inline-block">✦</span> Connection <span className="text-[#f4ba43] font-black mx-1 inline-block">✦</span> Conversation
                  </span>
                </span>.
              </p>

              <p>
                In 2025, I launched LinkedIn content marketing as a full-time business under We Write You Chill. Since then, I have worked with more than 25 property and finance clients to build their personal brands.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {achievements.map((item, aIdx) => {
                const delayClass = aIdx % 2 === 0 ? 'cyclic-delay-1' : 'cyclic-delay-2';
                return (
                  <motion.div
                    key={aIdx}
                    whileHover={{ scale: 1.02 }}
                    className={`cyclic-card ${delayClass} flex items-start gap-2.5 p-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-slate-800 shadow-xs`}
                  >
                    <CheckCircle
                      className="w-4 h-4 shrink-0 mt-0.5 text-[#2650a8]"
                    />
                    <span>{item.title}</span>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={zoomBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] shadow-xl shadow-[#2650a8]/20 transition-all duration-300 cursor-pointer"
              >
                <span>Book Strategy Call With Gaya</span>
                <ArrowRight className="w-4 h-4 text-[#f4ba43]" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={gayaLinkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-300 transition-all shadow-xs"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#2650a8]" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

