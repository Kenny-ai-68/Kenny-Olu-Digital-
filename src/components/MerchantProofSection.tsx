import React, { useState } from 'react';
import { TESTIMONIALS, FREQUENT_QUESTIONS } from '../data/servicesData';
import { ChevronDown, ChevronUp, Store, ShieldCheck } from 'lucide-react';

export const MerchantProofSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Merchant Testimonials Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
            <span>Verified Track Record</span>
            <span aria-hidden="true">·</span>
            <span>Lagos & Regional Merchants</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Real Businesses Powered by Kenny Olu Digital
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            See how retail supermarkets, wholesale distributors, and medical centers across Lagos rely on our fast Moniepoint terminal onboarding and loan facilitation.
          </p>
        </div>

        {/* 3 Merchant Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between"
            >
              <div>
                {/* Quantified impact metric */}
                <div className="text-lg font-extrabold text-blue-700 font-tabular mb-3">
                  {t.metric}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="font-bold text-slate-900 text-xs sm:text-sm">
                  {t.merchantName}
                </div>
                <div className="text-xs text-slate-600 font-medium">{t.business}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{t.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Everything you need to know about getting started with Moniepoint and Kenny Olu Digital.
            </p>
          </div>

          <div className="space-y-3">
            {FREQUENT_QUESTIONS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-semibold text-slate-900">
                      {item.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
