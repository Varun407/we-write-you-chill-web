import React, { useState } from 'react';
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

      {/* Booking & Enquiry Modal */}
      <BookingForm 
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        mode={modalMode}
      />

    </div>
  );
}
