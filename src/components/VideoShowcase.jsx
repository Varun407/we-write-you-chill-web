import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, TrendingUp, MessageSquare, Sparkles, CheckCircle2, ArrowRight, Mic, Video, Users2 } from 'lucide-react';
import gayaFounderImg from '../assets/gaya-founder.jpg';

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const zoomBookingUrl = "https://scheduler.zoom.us/gaya-we-write-you-chill/building-your-personal-brand";

  useEffect(() => {
    const handleFullscreenChange = () => {
      const video = videoRef.current;
      if (!video) return;
      const isFullscreen =
        document.fullscreenElement === video ||
        document.webkitFullscreenElement === video ||
        document.mozFullScreenElement === video ||
        document.fullscreenElement?.contains(video) ||
        document.webkitFullscreenElement?.contains(video);
      video.style.objectFit = isFullscreen ? 'contain' : 'cover';
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 50);
  };

  const steps = [
    {
      icon: Mic,
      title: '45-Min Monthly Voice Extraction',
      desc: 'No homework or writing required. We interview you to extract authentic insights, case stories, and market expertise.',
      badge: 'Step 1'
    },
    {
      icon: Video,
      title: '100% Turnkey Content & Video Production',
      desc: 'We draft high-converting hooks, carousels, text posts, and vertical video clips tailored to property & finance buyers.',
      badge: 'Step 2'
    },
    {
      icon: Users2,
      title: 'Targeted Outreach & Inbound Pipeline',
      desc: 'We expand your network by 30–40% weekly and open conversations with referral partners who trust you before they call.',
      badge: 'Step 3'
    }
  ];

  return (
    <section id="showcase" className="snap-section min-h-[auto] md:min-h-screen py-12 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/60 to-white border-t border-slate-200/80 relative z-10 overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-1/4 left-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#2650a8]/6 rounded-full blur-[100px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-10 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-[#f4ba43]/10 rounded-full blur-[90px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-7 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2650a8]/10 border border-[#2650a8]/25 text-[#2650a8] shadow-xs">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2650a8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2650a8]"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                Video Walkthrough · 2:30 Min
              </span>
            </div>

            <h2 className="font-heading font-semibold text-2xl sm:text-4xl lg:text-[42px] tracking-tight leading-[1.18] text-[#000000]">
              This is how we install your{' '}
              <span className="text-[#2650a8] highlight-swipe inline">
                LinkedIn Content &amp; Lead Engine.
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-subheading leading-relaxed">
              Take 2.5 minutes to see the exact done-for-you system we use to turn 45 minutes of your time every month into qualified inbound broker and investor conversations.
            </p>

            <div className="space-y-3 pt-1">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.015, x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#2650a8]/35 hover:shadow-md transition-all group"
                  >
                    <div className="p-2 sm:p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-[#2650a8] group-hover:bg-[#2650a8] group-hover:text-white transition-colors shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[9.5px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-[#2650a8]/10 text-[#2650a8] border border-[#2650a8]/20">
                          {step.badge}
                        </span>
                        <h4 className="font-heading font-semibold text-xs sm:text-sm text-slate-900">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-[11.5px] sm:text-xs text-slate-600 leading-relaxed font-subheading">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
              <a
                href={zoomBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] shadow-xl shadow-[#2650a8]/25 transition-all duration-300 cursor-pointer border border-[#2650a8]/50 hover:scale-[1.02]"
              >
                <span>Book 1-on-1 Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-[#f4ba43] transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <span className="text-xs text-slate-500 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero writing homework</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 z-30 flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl"
            >
              <div className="p-1 rounded-lg bg-[#2650a8]/10 text-[#2650a8]">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Weekly Reach</div>
                <div className="text-[11px] sm:text-xs font-black text-slate-900">+30% to +40%</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 z-30 flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl"
            >
              <div className="p-1 rounded-lg bg-[#f4ba43]/20 text-[#b45309]">
                <MessageSquare className="w-3.5 h-3.5 text-[#b45309]" />
              </div>
              <div>
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Outreach Reply</div>
                <div className="text-[11px] sm:text-xs font-black text-slate-900">Avg 40% Accepted</div>
              </div>
            </motion.div>

            <div className="relative w-full max-w-[290px] sm:max-w-[320px] md:max-w-[340px] rounded-[44px] p-2.5 sm:p-3 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 shadow-[0_25px_60px_-15px_rgba(38,80,168,0.3)] border-2 border-slate-700/80 cyclic-border-flow">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-4 bg-slate-950 rounded-full z-30 flex items-center justify-end px-2 border border-slate-800/80">
                <div className="w-2 h-2 rounded-full bg-slate-800"></div>
              </div>

              <div className="relative aspect-[9/16] w-full rounded-[34px] overflow-hidden bg-slate-950 border border-slate-800/80 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {!isPlaying ? (
                    <motion.div
                      key="vertical-poster"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 flex flex-col items-center justify-between p-5 cursor-pointer group select-none"
                      onClick={handlePlayClick}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-75 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105"
                        style={{ backgroundImage: `url(${gayaFounderImg})` }}
                      ></div>

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/40"></div>

                      <div className="relative z-20 w-full pt-4 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-white/90 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                          We Write You Chill
                        </span>
                        <span className="text-[10px] font-bold text-[#f4ba43] bg-amber-500/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-500/30 flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" /> 2:30
                        </span>
                      </div>

                      <div className="relative z-20 flex flex-col items-center gap-3.5 my-auto">
                        <div className="relative flex items-center justify-center">
                          <span className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#2650a8]/40 animate-radar-wave pointer-events-none"></span>
                          <button
                            type="button"
                            className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#2650a8] text-white flex items-center justify-center shadow-2xl shadow-[#2650a8]/70 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1d4088] cursor-pointer border-2 border-white"
                            aria-label="Play Walkthrough Video"
                          >
                            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#f4ba43] ml-1" />
                          </button>
                        </div>
                        <span className="text-white text-[11px] font-bold tracking-wide bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-md">
                          Tap to Watch Video
                        </span>
                      </div>

                      <div className="relative z-20 w-full text-center pb-2">
                        <p className="text-[11px] font-semibold text-slate-200 leading-snug">
                          How We Install The Content Engine
                        </p>
                        <p className="text-[9.5px] text-slate-400 font-medium mt-0.5">
                          Full 2:30 Walkthrough with Gaya
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="vertical-video-player"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 w-full h-full bg-black flex items-center justify-center"
                    >
                      <video
                        ref={videoRef}
                        src={`${import.meta.env.BASE_URL}intro-video.mp4`}
                        controls
                        autoPlay
                        playsInline
                        className="w-full h-full object-cover"
                        onEnded={() => setIsPlaying(false)}
                      >
                        Your browser does not support the video tag.
                      </video>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="w-24 h-1 bg-slate-600/60 rounded-full mx-auto mt-2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

