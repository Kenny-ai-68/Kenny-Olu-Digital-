import React, { useState } from 'react';
import { PiggyBank, TrendingUp, CheckCircle2, ArrowRight, ShieldCheck, Clock, Zap } from 'lucide-react';

interface SavingsServiceSectionProps {
  onOpenSavingsModal: (targetAmount?: number) => void;
  onOpenWhatsApp: (message?: string) => void;
}

export const SavingsServiceSection: React.FC<SavingsServiceSectionProps> = ({
  onOpenSavingsModal,
  onOpenWhatsApp,
}) => {
  const [initialDeposit, setInitialDeposit] = useState<number>(500000); // ₦500,000
  const [monthlyContribution, setMonthlyContribution] = useState<number>(100000); // ₦100,000 / month
  const [savingMonths, setSavingMonths] = useState<number>(12); // 12 months

  // Moniepoint yields up to 16% per annum (0.16 / 12 ~ 1.33% monthly compounded)
  const annualInterestRate = 0.16;
  const monthlyRate = annualInterestRate / 12;

  // Future value calculation with regular monthly additions
  let totalSaved = initialDeposit;
  let totalInterestEarned = 0;

  for (let i = 1; i <= savingMonths; i++) {
    const interestForMonth = (totalSaved + monthlyContribution / 2) * monthlyRate;
    totalInterestEarned += interestForMonth;
    totalSaved += monthlyContribution + interestForMonth;
  }

  const totalCapitalContributed = initialDeposit + (monthlyContribution * savingMonths);

  return (
    <section id="savings-section" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
            <span>Service 03</span>
            <span aria-hidden="true">·</span>
            <span>Business Growth & Yield</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Explore Moniepoint High-Yield Savings
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Stop letting your business capital sit idle in accounts that deduct maintenance fees. Put your store reserves to work with daily interest crediting and absolute liquidity.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Daily Interest Credited</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Interest up to 16% p.a. is calculated on your daily ledger balance and paid every single midnight into your business savings wallet.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Flexible Emergency Withdrawals</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Unlike traditional fixed deposits that penalize or forfeit your interest when an urgent business opportunity arises, you maintain full access.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">NDIC Insured Security</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Moniepoint Microfinance Bank is fully licensed by the Central Bank of Nigeria (CBN) and deposits are insured under the Nigeria Deposit Insurance Corporation (NDIC).
            </p>
          </div>
        </div>

        {/* Interactive Savings Projection Calculator */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-900 text-white">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
            <TrendingUp className="w-4 h-4" />
            <span>Interactive Savings Yield Projector</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl font-bold tracking-tight">
                Calculate Your Projected Business Returns at 16% p.a.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Plan for shop rent, bulk container imports, tax season, or holiday inventory replenishment.
              </p>

              {/* Sliders */}
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                    <span className="text-slate-300">Initial Deposit Amount</span>
                    <span className="text-white font-tabular font-bold text-sm">₦{initialDeposit.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={50000}
                    max={5000000}
                    step={50000}
                    value={initialDeposit}
                    onChange={(e) => setInitialDeposit(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>₦50,000</span>
                    <span>₦2,500,000</span>
                    <span>₦5,000,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                    <span className="text-slate-300">Monthly Contribution</span>
                    <span className="text-white font-tabular font-bold text-sm">₦{monthlyContribution.toLocaleString()} / month</span>
                  </div>
                  <input
                    type="range"
                    min={10000}
                    max={1000000}
                    step={10000}
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>₦10,000/mo</span>
                    <span>₦500,000/mo</span>
                    <span>₦1,000,000/mo</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-2">
                    Savings Duration
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[3, 6, 12, 24].map((m) => (
                      <button
                        key={m}
                        onClick={() => setSavingMonths(m)}
                        className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                          savingMonths === m
                            ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300'
                            : 'border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-750'
                        }`}
                      >
                        {m} Months
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Projection Output */}
            <div className="lg:col-span-5 bg-slate-800/90 p-6 rounded-xl border border-slate-700">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
                Projection Summary
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="flex justify-between pb-2.5 border-b border-slate-700">
                  <span className="text-slate-400">Total Capital Contributed</span>
                  <span className="font-tabular text-slate-200">₦{totalCapitalContributed.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pb-2.5 border-b border-slate-700">
                  <span className="text-slate-400">Annual Return Rate</span>
                  <span className="font-tabular font-bold text-emerald-400">Up to 16% p.a.</span>
                </div>
                <div className="flex justify-between pb-2.5 border-b border-slate-700">
                  <span className="text-slate-400">Est. Interest Earned</span>
                  <span className="font-tabular font-bold text-emerald-400">+₦{Math.round(totalInterestEarned).toLocaleString()}</span>
                </div>
                <div className="pt-2">
                  <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">
                    Total Estimated Payout
                  </span>
                  <div className="text-3xl font-extrabold text-white font-tabular">
                    ₦{Math.round(totalSaved).toLocaleString()}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Interest credited daily straight into your Moniepoint business account.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  onClick={() => onOpenSavingsModal(totalSaved)}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg transition-colors text-center"
                >
                  Open High-Yield Savings Account
                </button>
                <button
                  onClick={() => onOpenWhatsApp(`Hello Kenny Olu Digital, I want to set up a Moniepoint savings plan targeting ₦${Math.round(totalSaved).toLocaleString()} with 16% daily interest.`)}
                  className="w-full py-2.5 bg-slate-700 hover:bg-slate-650 text-slate-200 text-xs font-medium rounded-lg transition-colors text-center"
                >
                  Consult Savings Specialist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
