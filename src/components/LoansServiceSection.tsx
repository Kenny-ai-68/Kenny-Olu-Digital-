import React, { useState } from 'react';
import { Coins, CheckCircle2, TrendingUp, Calendar, ArrowRight, ShieldCheck, HelpCircle, Camera } from 'lucide-react';
import { useAppImages } from '../context/ImageContext';

interface LoansServiceSectionProps {
  onOpenLoanModal: (initialAmount?: number) => void;
  onOpenWhatsApp: (message?: string) => void;
}

export const LoansServiceSection: React.FC<LoansServiceSectionProps> = ({
  onOpenLoanModal,
  onOpenWhatsApp,
}) => {
  const [loanAmount, setLoanAmount] = useState<number>(2000000); // ₦2,000,000 default (within 500k - 50M)
  const [tenureMonths, setTenureMonths] = useState<number>(3); // 3 months
  const { images, openImageEditor } = useAppImages();

  // Working capital financing interest calculation (~2.5% monthly flat rate)
  const monthlyRate = 0.025;
  const totalInterest = loanAmount * (monthlyRate * tenureMonths);
  const totalPayable = loanAmount + totalInterest;
  const monthlyRepayment = totalPayable / tenureMonths;
  const dailyRepaymentDeduction = totalPayable / (tenureMonths * 26); // assuming 26 trading days per month

  return (
    <section id="loans-section" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
            <span>Service 02</span>
            <span aria-hidden="true">·</span>
            <span>Business Financing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Enquire About Moniepoint Business Loans
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Expand store inventory and fuel commercial growth. Access collateral-free working capital from <strong>₦500,000 to ₦50,000,000</strong> based on your active terminal trading history.
          </p>
        </div>

        {/* 2-Column: Loan Explainer & Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              {/* Mandatory 3-Month Rule Banner */}
              <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-600 text-white shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-blue-950 uppercase tracking-wide">
                      Qualification Rule: 3 Months Terminal Usage
                    </h4>
                    <p className="text-xs text-blue-900 mt-1 leading-relaxed">
                      To qualify for a Moniepoint business loan, the business owner (BO) must use the terminal consistently for at least <strong>3 months</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white rounded-xl border border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">₦500k to ₦50,000,000 Eligibility</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Loan limits scale directly with your 3-month daily trading volume. From retail store restock to wholesale fleet supplies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white rounded-xl border border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-700 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Zero Physical Collateral</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      No pledge of landed property, house documents, or personal vehicles. Repayments are flexibly deducted in small daily bits from your card settlements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md relative group">
              <img
                src={images.loan}
                alt="Entrepreneur expanding retail inventory with working capital"
                className="w-full h-[320px] sm:h-[360px] object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Image Edit / Replace Button */}
              <button
                type="button"
                onClick={() => openImageEditor('loan', 'Business Financing & Growth Image')}
                className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg shadow backdrop-blur-xs transition-all opacity-90 hover:opacity-100"
                title="Replace or edit this photo"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Change Image</span>
              </button>

              <div className="p-6 bg-white border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">Facility Limits: ₦500k – ₦50M</div>
                  <div className="text-xs text-slate-500">Requires 3 months active POS usage</div>
                </div>
                <button
                  onClick={() => onOpenLoanModal(loanAmount)}
                  className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Working Capital Estimator (₦500k to ₦50M) */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
            <Coins className="w-4 h-4" />
            <span>Interactive Loan Repayment Calculator</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-800">
                    Desired Loan Facility (₦500k - ₦50M)
                  </label>
                  <span className="text-xl font-extrabold text-blue-700 font-tabular">
                    ₦{loanAmount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={50000000}
                  step={250000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>₦500,000 (Min)</span>
                  <span>₦25,000,000</span>
                  <span>₦50,000,000 (Max)</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800 block mb-2">
                  Repayment Tenure
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 3, 6, 12].map((months) => (
                    <button
                      key={months}
                      onClick={() => setTenureMonths(months)}
                      className={`py-2.5 text-xs font-semibold rounded-lg border transition-all ${
                        tenureMonths === months
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {months} {months === 1 ? 'Month' : 'Months'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Eligibility Note:</strong> Business owners must have used their Moniepoint terminal for at least <strong>3 months</strong> with consistent transaction turnover. Kenny Olu Digital can verify your account readiness.
                </span>
              </div>
            </div>

            {/* Repayment Breakdown Output */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-xl border border-slate-800">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
                Estimated Loan Breakdown
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="flex justify-between pb-2.5 border-b border-slate-800">
                  <span className="text-slate-400">Principal Facility</span>
                  <span className="font-tabular font-bold text-white">₦{loanAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pb-2.5 border-b border-slate-800">
                  <span className="text-slate-400">Tenure</span>
                  <span className="font-tabular text-slate-300">{tenureMonths} Months</span>
                </div>
                <div className="flex justify-between pb-2.5 border-b border-slate-800">
                  <span className="text-slate-400">Daily Turnover Deduction</span>
                  <span className="font-tabular font-bold text-emerald-400">~₦{Math.round(dailyRepaymentDeduction).toLocaleString()} / day</span>
                </div>
                <div className="flex justify-between pb-2.5 border-b border-slate-800">
                  <span className="text-slate-400">Monthly Installment</span>
                  <span className="font-tabular text-slate-200">₦{Math.round(monthlyRepayment).toLocaleString()}</span>
                </div>
                <div className="pt-2">
                  <span className="text-xs text-slate-400 block mb-0.5">Total Estimated Repayment</span>
                  <div className="text-2xl font-extrabold text-white font-tabular">
                    ₦{Math.round(totalPayable).toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  onClick={() => onOpenLoanModal(loanAmount)}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg transition-colors text-center"
                >
                  Enquire About ₦{loanAmount.toLocaleString()} Loan
                </button>
                <button
                  onClick={() => onOpenWhatsApp(`Hello Kenny Olu Digital, I want to enquire about a Moniepoint business loan of ₦${loanAmount.toLocaleString()} (3-month active terminal user).`)}
                  className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg transition-colors text-center"
                >
                  Chat with Loan Specialist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
