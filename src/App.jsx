import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import VideoShowcase from './components/VideoShowcase';
import WhyLinkedinNotWorking from './components/WhyLinkedinNotWorking';
import Results from './components/Results';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Testimonials from './components/Testimonials';
import AboutFounder from './components/AboutFounder';
import Faq from './components/Faq';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

const SECTIONS = [
  { id: 'hero', label: 'Overview' },
  { id: 'showcase', label: 'Showcase' },
  { id: 'why-linkedin', label: 'Problem' },
  { id: 'results', label: 'Results' },
  { id: 'services', label: 'Programs' },
  { id: 'workflow', label: '5-Step Process' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'about', label: 'About Gaya' },
  { id: 'faq', label: 'FAQ' }
];

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('booking');
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  // Smoothly scroll to a specific section by index
  const scrollToSectionIndex = (index) => {
    const targetIdx = Math.max(0, Math.min(index, SECTIONS.length - 1));
    const sectionId = SECTIONS[targetIdx].id;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSectionIndex(targetIdx);
    }
  };

  // Keyboard PageDown / PageUp navigation listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if user is typing in an input/textarea or modal is open
      if (
        bookingModalOpen ||
        ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)
      ) {
        return;
      }

      if (e.key === 'PageDown') {
        e.preventDefault();
        const currentScrollY = window.scrollY + window.innerHeight / 3;
        let currentIdx = 0;
        SECTIONS.forEach((sec, idx) => {
          const el = document.getElementById(sec.id);
          if (el && el.offsetTop <= currentScrollY) {
            currentIdx = idx;
          }
        });
        scrollToSectionIndex(currentIdx + 1);
      } else if (e.key === 'PageUp') {
        e.preventDefault();
        const currentScrollY = window.scrollY - 50;
        let currentIdx = SECTIONS.length - 1;
        for (let i = SECTIONS.length - 1; i >= 0; i--) {
          const el = document.getElementById(SECTIONS[i].id);
          if (el && el.offsetTop <= currentScrollY) {
            currentIdx = i;
            break;
          }
        }
        scrollToSectionIndex(Math.max(0, currentIdx));
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [bookingModalOpen]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCta(window.scrollY > 450);

      const currentScrollY = window.scrollY + window.innerHeight / 3;
      SECTIONS.forEach((sec, idx) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentScrollY >= top && currentScrollY < top + height) {
            setActiveSectionIndex(idx);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = () => {
    setModalMode('booking');
    setBookingModalOpen(true);
  };

  const handleOpenEnquiry = () => {
    setModalMode('enquiry');
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0f172a] flex flex-col font-sans selection:bg-[#2650a8]/20 selection:text-[#000000]">

      {/* Sticky Top Header Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section (Includes Feature Pills and Marquee) */}
        <Hero
          onOpenBooking={handleOpenBooking}
        />

        {/* 2. Standalone Visual Presentation Showcase (Separate Page) */}
        <VideoShowcase />

        {/* 3. Why your LinkedIn isn't working (yet) */}
        <WhyLinkedinNotWorking onOpenBooking={handleOpenBooking} />

        {/* 4. Proven Client Results & Case Studies */}
        <Results />

        {/* Social Proof Marquee Ticker */}
        <div className="py-2 bg-slate-50/50 border-y border-slate-200/60 overflow-hidden">
          <Marquee />
        </div>

        {/* 5. Three Ways I Provide Support (Packages) */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* 6. The 5-Step Content-Connection-Conversation Framework */}
        <Workflow onOpenBooking={handleOpenBooking} />

        {/* 7. Original LinkedIn Recommendation Screenshots */}
        <Testimonials />

        {/* 8. About Founder Gaya */}
        <AboutFounder onOpenBooking={handleOpenBooking} />

        {/* 9. Frequently Asked Questions */}
        <Faq onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating Action Button on Scroll */}
      <AnimatePresence>
        {showFloatingCta && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40"
          >
            <motion.button
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenBooking}
              className="btn-shimmer flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3.5 rounded-full bg-[#2650a8] text-white font-bold text-xs sm:text-sm shadow-2xl shadow-[#2650a8]/50 border-2 border-white cursor-pointer"
            >
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f4ba43] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#f4ba43]"></span>
              </span>
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f4ba43]" />
              <span>Book Strategy Call</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking & Enquiry Modal */}
      <BookingForm
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        mode={modalMode}
      />

    </div>
  );
}
