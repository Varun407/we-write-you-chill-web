import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
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
    <div className="min-h-screen bg-[#0b0c10] text-[#f3f4f6] flex flex-col font-sans selection:bg-[#3367d1]/30 selection:text-white">
      
      {/* Sticky Top Header Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Hero 
          onOpenBooking={handleOpenBooking} 
          onOpenEnquiry={handleOpenEnquiry} 
        />
        
        <div id="results">
          <Stats />
        </div>

        <Services onOpenBooking={handleOpenBooking} />

        <Workflow onOpenBooking={handleOpenBooking} />

        <Testimonials />

        <AboutFounder onOpenBooking={handleOpenBooking} />

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
