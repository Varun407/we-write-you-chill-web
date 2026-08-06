import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, User, Mail, Phone, Globe, Sparkles } from 'lucide-react';

export default function BookingForm({ isOpen, onClose, mode = 'booking' }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    role: 'Buyer\'s Agent',
    goal: 'Generate more inbound client enquiries',
    preferredDate: '',
    preferredTime: 'Morning (9AM - 12PM)'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      
      <div className="relative max-w-xl w-full bg-[#0f1015] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full glass-card text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#60a5fa] uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>{mode === 'booking' ? 'Book Strategy Call With Gaya' : 'Submit Enquiry'}</span>
            </div>

            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">
              Let's Turn Your LinkedIn Into A Client Engine
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Fill in a few quick details so we can customize your 1-on-1 strategy breakdown.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Role Selector */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  What is your primary role?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Buyer\'s Agent', 'Mortgage Broker', 'Realtor / Real Estate Agent', 'Property Advisory / Founder'].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setFormData({ ...formData, role: r })}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                        formData.role === r 
                          ? 'border-[#3367d1] bg-[#3367d1]/20 text-white' 
                          : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/25'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adarsh Kediyoor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#3367d1]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#3367d1]"
                    />
                  </div>
                </div>
              </div>

              {/* Phone & LinkedIn */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Phone Number (Optional)</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="+61 400 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#3367d1]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">LinkedIn Profile URL</label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="url"
                      placeholder="linkedin.com/in/yourname"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#3367d1]"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time Choice */}
              {mode === 'booking' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#3367d1]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">Preferred Time Window</label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1e293b] border border-white/10 text-white text-sm focus:outline-none focus:border-[#3367d1]"
                    >
                      <option>Morning (9AM - 12PM)</option>
                      <option>Afternoon (12PM - 4PM)</option>
                      <option>Evening (4PM - 7PM)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-6 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#3367d1] via-[#60a5fa] to-[#8b3dff] hover:opacity-95 shadow-lg shadow-[#3367d1]/30 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{mode === 'booking' ? 'Confirm Strategy Call Booking' : 'Send Enquiry'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-[11px] text-gray-400 text-center mt-2">
                🔒 We respect your privacy. No spam. 100% confidential.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#10b981]/20 text-[#10b981] flex items-center justify-center mx-auto border border-[#10b981]/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-white">
              Booking Confirmed, {formData.name.split(' ')[0]}!
            </h3>
            <p className="text-sm text-gray-300 max-w-md mx-auto">
              We've received your request for a 1-on-1 strategy call. Gaya will review your LinkedIn profile and reach out to your email (<strong className="text-white">{formData.email}</strong>) shortly.
            </p>

            <div className="p-4 rounded-xl glass-card border border-white/10 text-xs text-gray-400 text-left max-w-md mx-auto space-y-1">
              <div><strong>Role:</strong> {formData.role}</div>
              {formData.preferredDate && <div><strong>Requested Date:</strong> {formData.preferredDate} ({formData.preferredTime})</div>}
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-full text-xs font-semibold text-white glass-card border border-white/20 hover:bg-white/10"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
