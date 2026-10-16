import React, { useState } from 'react';
import { X, PiggyBank, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { KENNY_OLU_CONTACT } from '../data/servicesData';
import { LeadEnquiry } from '../types';

interface SavingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetAmount?: number;
  onEnquirySubmitted: (enquiry: LeadEnquiry) => void;
}

export const SavingsModal: React.FC<SavingsModalProps> = ({
  isOpen,
  onClose,
  targetAmount = 1000000,
  onEnquirySubmitted,
}) => {
  const [goalName, setGoalName] = useState('Shop Rent & Inventory Restock');
  const [monthlyDeposit, setMonthlyDeposit] = useState('100000');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const newEnquiry: LeadEnquiry = {
      id: `sav-enq-${Date.now()}`,
      fullName,
      businessName: fullName,
      phone,
      email: 'Via Savings Form',
      location: 'Lagos / Nigeria',
      serviceRequested: 'savings',
      additionalNotes: `Goal: ${goalName}, Target monthly: ₦${Number(monthlyDeposit).toLocaleString()}`,
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

  const whatsappSavingsMessage = encodeURIComponent(
    `Hello Kenny Olu Digital! I want to open a Moniepoint High-Yield Business Savings Account (up to 16% p.a.).\n\n` +
    `• Target Goal: ${goalName}\n` +
    `• Monthly Target Deposit: ₦${Number(monthlyDeposit || 0).toLocaleString()}\n` +
    `• Account Holder: ${fullName}\n` +
    `• Phone: ${phone}\n\n` +
    `Please assist me with activating the daily interest yield on my Moniepoint account.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-emerald-800 text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <PiggyBank className="w-5 h-5 text-emerald-300" />
            <div>
              <h3 className="font-bold text-base">Explore Moniepoint Savings</h3>
              <p className="text-xs text-emerald-200">Up to 16% Annual Interest Credited Daily</p>
            </div>
          </div>
          <button
            onClick={resetForm}
            className="p-1 rounded-lg text-emerald-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">Savings Plan Logged!</h4>
                <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  Thank you, <strong>{fullName}</strong>. Kenny Olu Digital will assist in setting up your high-yield daily interest wallet.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2.5 max-w-sm mx-auto">
                <a
                  href={`https://wa.me/${KENNY_OLU_CONTACT.whatsappNumber}?text=${whatsappSavingsMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect with Savings Advisor on WhatsApp</span>
                </a>
                <button
                  onClick={resetForm}
                  className="py-2.5 text-xs text-slate-600 hover:text-slate-900 font-medium"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Savings Purpose / Target Name *
                </label>
                <input
                  type="text"
                  required
                  value={goalName}
                  onChange={(e) => setGoalName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-emerald-600"
                  placeholder="e.g. Next Year Store Rent"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Estimated Monthly Savings Contribution (₦) *
                </label>
                <input
                  type="number"
                  required
                  min={5000}
                  value={monthlyDeposit}
                  onChange={(e) => setMonthlyDeposit(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-emerald-600 font-tabular"
                  placeholder="e.g. 100000"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Full Name / Business Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-emerald-600"
                  placeholder="e.g. Alhaja Kemi Balogun"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-emerald-600"
                  placeholder="e.g. 0812 000 0000"
                />
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-900 space-y-1">
                <div className="font-semibold">Moniepoint Daily Interest Highlight:</div>
                <p>Earn daily interest crediting with 100% emergency withdrawal flexibility at any time.</p>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>Submit Savings Inquiry</span>
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
