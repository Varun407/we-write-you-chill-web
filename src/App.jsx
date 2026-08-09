import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyLinkedinNotWorking from './components/WhyLinkedinNotWorking';
import Results from './components/Results';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Testimonials from './components/Testimonials';
import AboutFounder from './components/AboutFounder';
import Faq from './components/Faq';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('booking');
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCta(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll);
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
        {/* 1. Hero Section */}
        <Hero 
          onOpenBooking={handleOpenBooking} 
        />
        
        {/* 2. Why your LinkedIn isn't working (yet) */}
        <WhyLinkedinNotWorking onOpenBooking={handleOpenBooking} />

        {/* 3. Proven Client Results & Case Studies */}
        <Results />

        {/* 4. Three Ways I Provide Support (Packages) */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* 5. The 5-Step Content-Connection-Conversation Framework */}
        <Workflow onOpenBooking={handleOpenBooking} />

        {/* 6. Original LinkedIn Recommendation Screenshots */}
        <Testimonials />

        {/* 7. About Founder Gaya */}
        <AboutFounder onOpenBooking={handleOpenBooking} />

        {/* 8. Frequently Asked Questions */}
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
            className="fixed bottom-6 right-6 z-40"
          >
            <motion.button
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenBooking}
              className="btn-shimmer flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#2650a8] text-white font-bold text-xs sm:text-sm shadow-2xl shadow-[#2650a8]/50 border-2 border-white cursor-pointer"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f4ba43] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f4ba43]"></span>
              </span>
              <Calendar className="w-4 h-4 text-[#f4ba43]" />
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
