import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Results', href: '#results' },
    { name: 'What We Do', href: '#services' },
    { name: '5-Step Process', href: '#workflow' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2650a8] via-[#f4ba43] to-[#2650a8] z-[60] origin-left"
        style={{ scaleX }}
      />

      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'light-nav py-3 shadow-sm' : 'bg-white/85 backdrop-blur-md py-4 border-b border-slate-100'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <motion.img
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                transition={{ duration: 0.3 }}
                src={logoImg}
                alt="We Write You Chill Logo"
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col justify-center">
                <span
                  style={{ fontFamily: "'Heksilo', 'Playfair Display', Georgia, serif" }}
                  className="font-normal text-[22px] tracking-wide text-[#0f172a] leading-none"
                >
                  We Write You <span className="text-[#2650a8]">Chill</span>
                </span>
                <span className="text-[9px] text-slate-500 font-extrabold tracking-[0.16em] uppercase mt-1 flex items-center gap-1">
                  Content & Lead Engine
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15 }}
                  className="text-sm font-semibold text-slate-700 hover:text-[#2650a8] transition-colors duration-200 relative group py-1"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2650a8] transition-all duration-300 group-hover:w-full rounded-full" />
                </motion.a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="btn-shimmer group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] shadow-lg shadow-[#2650a8]/20 transition-all duration-300 cursor-pointer"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f4ba43] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f4ba43]"></span>
                </span>
                <Calendar className="w-4 h-4 text-[#f4ba43]" />
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#f4ba43]" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#000000] rounded-lg md:hidden border border-slate-200 bg-slate-50 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Drawer with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden bg-white border-t border-slate-200 px-6 pt-4 pb-6 mt-3 space-y-4 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-slate-800 hover:text-[#2650a8] transition-colors py-2.5 border-b border-slate-100 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </motion.a>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full mt-3 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-bold text-white bg-[#2650a8] shadow-lg shadow-[#2650a8]/20 btn-shimmer"
                >
                  <Calendar className="w-5 h-5 text-[#f4ba43]" />
                  <span>Book Strategy Call</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
