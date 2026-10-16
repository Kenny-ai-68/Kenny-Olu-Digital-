import React, { useState } from 'react';
import { 
  BookOpen, 
  ArrowRight, 
  Check, 
  Copy, 
  Sparkles,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  MessageSquare,
  Camera
} from 'lucide-react';
import { useAppImages } from '../context/ImageContext';

interface MoniebookSectionProps {
  onOpenWhatsApp: (message?: string) => void;
  onOpenContact: () => void;
}

export const MoniebookSection: React.FC<MoniebookSectionProps> = ({
  onOpenWhatsApp,
  onOpenContact,
}) => {
  const { images, openImageEditor } = useAppImages();

  // Interactive sample reminder composer
  const [sampleCustomer, setSampleCustomer] = useState('Chief Emeka');
  const [sampleAmount, setSampleAmount] = useState('25000');
  const [sampleItem, setSampleItem] = useState('Store Goods & Supplies');
  const [copied, setCopied] = useState(false);

  const sampleReminderMessage = `Hello ${sampleCustomer || 'Valued Customer'}, this is a polite payment reminder regarding the balance of ₦${Number(sampleAmount || 0).toLocaleString()} for ${sampleItem || 'your store purchase'}. Kindly transfer to our business account. Thank you for your continued patronage!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleReminderMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="moniebook-section" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
            <span>Service 04</span>
            <span aria-hidden="true">·</span>
            <span>Digital Ledger & Bookkeeping</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Discover Moniebook: Never Lose Money to Forgotten Debts
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Paper notebooks get torn, spilled on, or misplaced. Moniebook digitizes your store's sales records, tracks customer credit, and automatically prepares polite WhatsApp payment reminders that get your money back fast.
          </p>
        </div>

        {/* 2-Column: Moniebook Features & App Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-50 text-purple-700 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Customer Credit & Debt Book</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Log which customer took items on credit, what they purchased, and set repayment deadlines with zero paper hassle.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">One-Click WhatsApp Debt Reminders</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Send dignified, automated payment reminders via WhatsApp or SMS with your Moniepoint account number attached.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-700 shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Real-Time Daily Sales & Profit Tally</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Know your real profit margin at the end of each business day without manual calculator reconciliation.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenWhatsApp('Hello Kenny Olu Digital, please guide me on how to set up Moniebook for my store.')}
                className="inline-flex items-center gap-2 px-5 py-3 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
              >
                <span>Get Moniebook Activated Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md relative group">
              <img
                src={images.moniebook}
                alt="Smartphone displaying Moniebook digital ledger dashboard"
                className="w-full h-[320px] sm:h-[360px] object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Image Edit / Replace Button */}
              <button
                type="button"
                onClick={() => openImageEditor('moniebook', 'Moniebook Digital Ledger App Showcase')}
                className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg shadow backdrop-blur-xs transition-all opacity-90 hover:opacity-100"
                title="Replace or edit this photo"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Change Image</span>
              </button>

              <div className="p-5 bg-white border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">100% Free for Moniepoint Merchants</div>
                  <div className="text-xs text-slate-500">Available on Android & iOS devices</div>
                </div>
                <span className="text-xs font-semibold text-emerald-600">Cloud Backed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Polite WhatsApp Reminder Preview */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-700 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Moniebook Automated Debt Reminder Demo</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Preview How Moniebook Recovers Customer Debts
              </h3>
              <p className="text-xs text-slate-600">
                Customize the sample fields below to preview how courteous, clear, and professional Moniebook reminder messages look when sent to your customers on WhatsApp.
              </p>

              <div className="space-y-3 pt-2">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Customer Name
                  </label>
                  <input
                    type="text"
                    value={sampleCustomer}
                    onChange={(e) => setSampleCustomer(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-purple-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Outstanding Amount (₦)
                    </label>
                    <input
                      type="number"
                      value={sampleAmount}
                      onChange={(e) => setSampleAmount(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-purple-600 font-tabular"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Goods Purchased
                    </label>
                    <input
                      type="text"
                      value={sampleItem}
                      onChange={(e) => setSampleItem(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-purple-600"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Generated WhatsApp Message Preview Card */}
            <div className="lg:col-span-6 bg-slate-900 text-white p-6 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>WhatsApp Message Preview</span>
                </span>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Preview</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 bg-slate-800/90 rounded-lg text-xs leading-relaxed text-slate-200 border border-slate-700 font-mono">
                {sampleReminderMessage}
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => onOpenWhatsApp(`Hello Kenny Olu Digital, I want to activate Moniebook for my store to track debts and sales.`)}
                  className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg transition-colors text-center"
                >
                  Activate Moniebook Free
                </button>
                <button
                  onClick={onOpenContact}
                  className="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg transition-colors text-center"
                >
                  Contact Kenny Olu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
