import React, { useState } from 'react';
import { X, Coins, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { KENNY_OLU_CONTACT } from '../data/servicesData';
import { LeadEnquiry } from '../types';

interface LoanEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAmount?: number;
  onEnquirySubmitted: (enquiry: LeadEnquiry) => void;
}

export const LoanEnquiryModal: React.FC<LoanEnquiryModalProps> = ({
  isOpen,
  onClose,
  initialAmount = 2000000,
  onEnquirySubmitted,
}) => {
  const [amount, setAmount] = useState(initialAmount);
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [monthlyTurnover, setMonthlyTurnover] = useState('₦1M - ₦5M monthly');
  const [hasUsedTerminal3Months, setHasUsedTerminal3Months] = useState(true);
  const [purpose, setPurpose] = useState('Inventory Restock');
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (initialAmount) {
      setAmount(initialAmount);
    }
  }, [initialAmount]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const newEnquiry: LeadEnquiry = {
      id: `loan-enq-${Date.now()}`,
      fullName,
      businessName: businessName || fullName,
      phone,
      email: 'Via Loan Form',
      location: 'Ogun State / Nigeria',
      serviceRequested: 'loans',
      loanAmountRequested: amount,
      monthlyTurnover,
      additionalNotes: `Purpose: ${purpose}. 3-Month Terminal User: ${hasUsedTerminal3Months ? 'Yes' : 'Pending'}`,
      createdAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      status: 'submitted',
    };

    onEnquirySubmitted(newEnquiry);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  const whatsappLoanMessage = encodeURIComponent(
    `Hello Kenny Olu Digital! I want to enquiry about a Moniepoint Business Loan.\n\n` +
    `• Desired Facility: ₦${amount.toLocaleString()} (500k - 50M range)\n` +
    `• Business Name: ${businessName || fullName}\n` +
    `• Contact Person: ${fullName}\n` +
    `• Phone: ${phone}\n` +
    `• 3-Month Terminal User: ${hasUsedTerminal3Months ? 'Yes' : 'Not yet 3 months'}\n` +
    `• Monthly Turnover Range: ${monthlyTurnover}\n` +
    `• Purpose: ${purpose}\n\n` +
    `Please check our qualification and payout schedule.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <Coins className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-bold text-base">Enquire About Business Loans</h3>
              <p className="text-xs text-slate-300">₦500k to ₦50M · Requires 3 Months Active Terminal Usage</p>
            </div>
          </div>
          <button
            onClick={resetForm}
            className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">Loan Enquiry Submitted!</h4>
                <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  Thank you, <strong>{fullName}</strong>. Kenny Olu Digital will review your <strong>₦{amount.toLocaleString()}</strong> loan request against Moniepoint 3-month merchant turnover criteria.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-left space-y-1.5 max-w-sm mx-auto text-slate-700">
                <p><strong>Business:</strong> {businessName || fullName}</p>
                <p><strong>Monthly Turnover:</strong> {monthlyTurnover}</p>
                <p><strong>Terminal Active:</strong> {hasUsedTerminal3Months ? '3+ Months' : 'Under 3 Months'}</p>
                <p><strong>Phone:</strong> {phone}</p>
              </div>

              <div className="pt-2 flex flex-col gap-2.5 max-w-sm mx-auto">
                <a
                  href={`https://wa.me/${KENNY_OLU_CONTACT.whatsappNumber}?text=${whatsappLoanMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Directly to Loan Desk on WhatsApp</span>
                </a>
                <button
                  onClick={resetForm}
                  className="py-2.5 text-xs text-slate-600 hover:text-slate-900 font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Loan Facility (₦500k - ₦50,000,000)
                  </label>
                  <span className="text-base font-extrabold text-blue-700 font-tabular">
                    ₦{amount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={50000000}
                  step={250000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-0.5">
                  <span>₦500,000</span>
                  <span>₦25,000,000</span>
                  <span>₦50,000,000</span>
                </div>
              </div>

              {/* 3 Months rule check */}
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-center justify-between gap-3">
                <span>Have you operated your Moniepoint POS for 3+ months?</span>
                <button
                  type="button"
                  onClick={() => setHasUsedTerminal3Months(!hasUsedTerminal3Months)}
                  className={`px-3 py-1 rounded-lg font-bold text-xs transition-colors ${
                    hasUsedTerminal3Months ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {hasUsedTerminal3Months ? 'Yes (3+ mos)' : 'Under 3 mos'}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chukwuma Obi"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-blue-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Store / Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Obi Provisions Enterprise"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0803 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-blue-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Average Monthly Store Turnover
                  </label>
                  <select
                    value={monthlyTurnover}
                    onChange={(e) => setMonthlyTurnover(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-blue-600"
                  >
                    <option value="Under ₦1,000,000">Under ₦1,000,000</option>
                    <option value="₦1,000,000 - ₦3,000,000">₦1,000,000 - ₦3,000,000</option>
                    <option value="₦3,000,000 - ₦10,000,000">₦3,000,000 - ₦10,000,000</option>
                    <option value="Above ₦10,000,000">Above ₦10,000,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Purpose of Financing
                </label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-blue-600"
                >
                  <option value="Inventory Restock">Inventory Restock & Bulk Purchase</option>
                  <option value="Store Expansion">Opening New Branch or Store Expansion</option>
                  <option value="Equipment Purchase">Machinery or Business Equipment Purchase</option>
                  <option value="Emergency Working Capital">Cash Flow Smoothing & Emergency Capital</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>Submit Pre-Qualification Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
