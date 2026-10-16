import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { KENNY_OLU_CONTACT } from '../data/servicesData';
import { LeadEnquiry, ServiceType } from '../types';

interface ContactSectionProps {
  onEnquirySubmitted: (enquiry: LeadEnquiry) => void;
  recentEnquiries: LeadEnquiry[];
  onOpenWhatsApp: (message?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onEnquirySubmitted,
  recentEnquiries,
  onOpenWhatsApp,
}) => {
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState<ServiceType>('pos');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const newEnquiry: LeadEnquiry = {
      id: `enq-${Date.now()}`,
      fullName,
      businessName: businessName || fullName,
      phone,
      email: email || 'Not specified',
      location: 'Lagos / Nigeria',
      serviceRequested: service,
      additionalNotes: message,
      createdAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      status: 'submitted',
    };

    onEnquirySubmitted(newEnquiry);
    setIsSuccess(true);
    setTimeout(() => {
      setFullName('');
      setBusinessName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }, 500);
  };

  const getServiceLabel = (srv: ServiceType) => {
    switch (srv) {
      case 'pos': return 'Moniepoint POS Terminal';
      case 'loans': return 'Business Loan & Financing';
      case 'savings': return 'High-Yield Savings';
      case 'moniebook': return 'Moniebook Digital Ledger';
      case 'whatsapp': return 'Direct WhatsApp Consultation';
    }
  };

  return (
    <section id="contact-section" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
            <span>Direct Partner Support</span>
            <span aria-hidden="true">·</span>
            <span>Kenny Olu Digital</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Contact Us Today & Scale Your Business
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions about terminal models, account documentation, loan limits, or interest calculations? We are available via WhatsApp, phone, email, and in-person merchant visits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{KENNY_OLU_CONTACT.name}</h3>
                <p className="text-xs text-blue-700 font-semibold mt-0.5">{KENNY_OLU_CONTACT.partnerTitle}</p>
                <p className="text-xs text-slate-500 mt-2">Lead Representative: {KENNY_OLU_CONTACT.leadConsultant}</p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Phone & WhatsApp</span>
                    <a href={`tel:${KENNY_OLU_CONTACT.phone.replace(/\s+/g, '')}`} className="text-blue-700 hover:underline">
                      {KENNY_OLU_CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Email Address</span>
                    <a href={`mailto:${KENNY_OLU_CONTACT.email}`} className="text-blue-700 hover:underline break-all">
                      {KENNY_OLU_CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Location & Hub</span>
                    <span className="text-slate-600">{KENNY_OLU_CONTACT.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Working Hours</span>
                    <span className="text-slate-600">{KENNY_OLU_CONTACT.workingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenWhatsApp('Hello Kenny Olu Digital, I need immediate assistance regarding Moniepoint services.')}
                  className="w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </button>
              </div>
            </div>

            {/* Recent Submissions in current session */}
            {recentEnquiries.length > 0 && (
              <div className="p-5 bg-white rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-3">
                  <FileCheck className="w-4 h-4 text-blue-700" />
                  <span>Your Submitted Requests ({recentEnquiries.length})</span>
                </div>
                <div className="space-y-2">
                  {recentEnquiries.slice(0, 3).map((enq) => (
                    <div key={enq.id} className="p-2.5 rounded-lg bg-slate-50 text-xs border border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="font-semibold text-slate-800">{getServiceLabel(enq.serviceRequested)}</span>
                        <div className="text-[11px] text-slate-500">{enq.businessName} · {enq.createdAt}</div>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700">Received</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Send a Direct Enquiry</h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill this brief form and our team will get back to you within 15 minutes.
              </p>

              {isSuccess ? (
                <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-900">Enquiry Received!</h4>
                  <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                    Thank you for reaching out. Kenny Olu Digital has received your submission. We are also available for immediate response on WhatsApp.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-xs font-semibold text-emerald-800 underline hover:text-emerald-900 pt-1"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Samuel Okon"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-blue-600"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Okon Super Store"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0814 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-blue-600"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. merchant@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Preferred Service *
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value as ServiceType)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-blue-600"
                    >
                      <option value="pos">Get Moniepoint POS Terminal</option>
                      <option value="loans">Enquire About Business Financing & Loans</option>
                      <option value="savings">Explore High-Yield Savings (16% p.a.)</option>
                      <option value="moniebook">Discover Moniebook & Bookkeeping</option>
                      <option value="whatsapp">General Consultation / Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Your Message or Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your business, current location, or specific questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-3 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry to Kenny Olu Digital</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
