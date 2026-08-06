import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, ArrowRight, User, Mail, Phone, Globe, Sparkles } from 'lucide-react';

export default function BookingForm({ isOpen, onClose, mode = 'booking' }) {
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
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      
      <div className="relative max-w-xl w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-black transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#2650a8] uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-[#f4ba43]" />
              <span>{mode === 'booking' ? 'Book Strategy Call With Gaya' : 'Submit Enquiry'}</span>
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#000000] mb-2">
              Let's Turn Your LinkedIn Into A Client Engine
            </h3>
            <p className="text-xs text-slate-500 font-medium mb-6">
              Fill in a few quick details so we can customize your 1-on-1 strategy breakdown.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Role Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  What is your primary role?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Buyer\'s Agent', 'Mortgage Broker', 'Realtor / Real Estate Agent', 'Property Advisory / Founder'].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setFormData({ ...formData, role: r })}
                      className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                        formData.role === r 
                          ? 'border-[#2650a8] bg-[#2650a8]/10 text-[#2650a8]' 
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
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
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adarsh Kediyoor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#2650a8] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#2650a8] focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Phone & LinkedIn */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number (Optional)</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="+61 400 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#2650a8] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">LinkedIn Profile URL</label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="url"
                      placeholder="linkedin.com/in/yourname"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#2650a8] focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time Choice */}
              {mode === 'booking' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#2650a8] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Time Window</label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#2650a8] focus:bg-white"
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
                className="w-full mt-6 py-4 rounded-xl text-base font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] shadow-lg shadow-[#2650a8]/25 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{mode === 'booking' ? 'Confirm Strategy Call Booking' : 'Send Enquiry'}</span>
                <ArrowRight className="w-5 h-5 text-[#f4ba43]" />
              </button>

              <p className="text-[11px] text-slate-500 font-medium text-center mt-2">
                🔒 We respect your privacy. No spam. 100% confidential.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-[#000000]">
              Booking Confirmed, {formData.name.split(' ')[0]}!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              We've received your request for a 1-on-1 strategy call. Gaya will review your LinkedIn profile and reach out to your email (<strong className="text-black">{formData.email}</strong>) shortly.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left max-w-md mx-auto space-y-1 font-medium">
              <div><strong>Role:</strong> {formData.role}</div>
              {formData.preferredDate && <div><strong>Requested Date:</strong> {formData.preferredDate} ({formData.preferredTime})</div>}
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-full text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
