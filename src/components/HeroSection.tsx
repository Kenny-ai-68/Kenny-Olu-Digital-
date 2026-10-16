import React from 'react';
import { 
  CreditCard, 
  Coins, 
  PiggyBank, 
  BookOpen, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Zap,
  Camera
} from 'lucide-react';
import { useAppImages } from '../context/ImageContext';

interface HeroSectionProps {
  onOpenPOS: () => void;
  onOpenLoans: () => void;
  onOpenSavings: () => void;
  onOpenMoniebook: () => void;
  onOpenWhatsApp: (message?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenPOS,
  onOpenLoans,
  onOpenSavings,
  onOpenMoniebook,
  onOpenWhatsApp,
}) => {
  const { images, openImageEditor } = useAppImages();

  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition & Prompt Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Human Editorial Sub-Kicker (Zero pill, clean text) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-700 mb-4">
              <span>Moniepoint Authorized Business Partner</span>
              <span aria-hidden="true">·</span>
              <span>Ogun State & Nationwide</span>
            </div>

            {/* Prompt's Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-2xl text-balance">
              Ready to Get Started?
            </h1>

            {/* Prompt's Exact Paragraph */}
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal mb-4 max-w-2xl">
              Whether you need a Moniepoint POS machine, want to learn about business financing, explore savings options, or discover Moniebook, Kenny Olu Digital is here to guide you.
            </p>

            <p className="text-base font-medium text-slate-800 mb-8">
              Choose your preferred service and contact us today.
            </p>

            {/* The 5 User-Requested Buttons Grid */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 mb-10">
              {/* Button 1: Get Your POS */}
              <button
                onClick={onOpenPOS}
                className="inline-flex items-center justify-between gap-3 px-5 py-3.5 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow transition-all group focus-visible:outline-2 focus-visible:outline-blue-700 whitespace-nowrap"
              >
                <div className="flex items-center gap-2.5">
                  <CreditCard className="w-4 h-4 text-blue-200 group-hover:scale-110 transition-transform" />
                  <span>Get Your POS</span>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-200 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Button 2: Enquire About Business Loans */}
              <button
                onClick={onOpenLoans}
                className="inline-flex items-center justify-between gap-3 px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 hover:border-slate-400 text-sm font-semibold rounded-xl shadow-xs transition-all group focus-visible:outline-2 focus-visible:outline-slate-700 whitespace-nowrap"
              >
                <div className="flex items-center gap-2.5">
                  <Coins className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
                  <span>Enquire About Business Loans</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Button 3: Explore Savings */}
              <button
                onClick={onOpenSavings}
                className="inline-flex items-center justify-between gap-3 px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 hover:border-slate-400 text-sm font-semibold rounded-xl shadow-xs transition-all group focus-visible:outline-2 focus-visible:outline-slate-700 whitespace-nowrap"
              >
                <div className="flex items-center gap-2.5">
                  <PiggyBank className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                  <span>Explore Savings</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Button 4: Discover Moniebook */}
              <button
                onClick={onOpenMoniebook}
                className="inline-flex items-center justify-between gap-3 px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 hover:border-slate-400 text-sm font-semibold rounded-xl shadow-xs transition-all group focus-visible:outline-2 focus-visible:outline-slate-700 whitespace-nowrap"
              >
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
                  <span>Discover Moniebook</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Button 5: Chat With Us on WhatsApp */}
              <button
                onClick={() => onOpenWhatsApp('Hello Kenny Olu Digital, I want to get started with Moniepoint services for my business.')}
                className="inline-flex items-center justify-between gap-3 px-5 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow transition-all group focus-visible:outline-2 focus-visible:outline-emerald-700 whitespace-nowrap"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-emerald-200 group-hover:scale-110 transition-transform" />
                  <span>Chat With Us on WhatsApp</span>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust and Speed Points */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
                <span>CBN Licensed & NDIC Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Instant 2s Card Settlement</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Under 24-48 Hours Across Ogun State & Nigeria</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase (Replaceable) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-200/50 group">
              <img
                src={images.hero}
                alt="Nigerian merchant accepting Moniepoint contactless payment in retail store"
                className="w-full h-[360px] sm:h-[420px] object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Image Edit / Replace Button */}
              <button
                type="button"
                onClick={() => openImageEditor('hero', 'Main Hero Merchant Image')}
                className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg shadow backdrop-blur-xs transition-all opacity-90 hover:opacity-100"
                title="Replace or edit this photo"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Change Image</span>
              </button>

              <div className="p-5 bg-white border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Kenny Olu Digital Agent Support</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Physical terminal onboarding across Ogun State & Nigeria</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-blue-700 block">Verified Partner</span>
                    <span className="text-[11px] text-slate-400">Response &lt; 5 mins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Proof Bar Below Hero (No charges inputted) */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-slate-200 bg-white p-5 rounded-xl">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-tabular">99.9%</div>
            <div className="text-xs text-slate-500 mt-1">Transaction Success Rate with zero network dropouts</div>
          </div>
          <div className="border border-slate-200 bg-white p-5 rounded-xl">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-tabular">Under 48h</div>
            <div className="text-xs text-slate-500 mt-1">Delivery across Ogun State and nationwide in Nigeria</div>
          </div>
          <div className="border border-slate-200 bg-white p-5 rounded-xl">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-tabular">Up to 16%</div>
            <div className="text-xs text-slate-500 mt-1">Annual savings interest calculated & paid daily</div>
          </div>
          <div className="border border-slate-200 bg-white p-5 rounded-xl">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-tabular">500k - 50M</div>
            <div className="text-xs text-slate-500 mt-1">Loan facilities for 3-month active terminal merchants</div>
          </div>
        </div>
      </div>
    </section>
  );
};
