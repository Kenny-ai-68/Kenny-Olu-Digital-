import React, { useState } from 'react';
import { CreditCard, CheckCircle2, Wifi, BatteryCharging, Printer, ArrowRight, Camera, ShieldCheck, Zap, Clock } from 'lucide-react';
import { POS_TERMINALS } from '../data/servicesData';
import { useAppImages } from '../context/ImageContext';

interface PosServiceSectionProps {
  onOpenOrderModal: (modelId?: string) => void;
  onOpenWhatsApp: (message?: string) => void;
}

export const PosServiceSection: React.FC<PosServiceSectionProps> = ({
  onOpenOrderModal,
  onOpenWhatsApp,
}) => {
  const [selectedTerminal, setSelectedTerminal] = useState(POS_TERMINALS[0]);
  const { images, openImageEditor } = useAppImages();

  return (
    <section id="pos-section" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
            <span>Service 01</span>
            <span aria-hidden="true">·</span>
            <span>Payment Terminals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Get Your Moniepoint POS Terminal
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminate declined cards, delayed settlements, and payment disputes. Delivered under 24 to 48 hours across Ogun State and nationwide in Nigeria with physical merchant setup by Kenny Olu Digital.
          </p>
        </div>

        {/* 2-Column Showcase: Featured Terminal and Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: Terminal Selector & Specs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Terminal Switcher Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200">
              {POS_TERMINALS.map((term) => (
                <button
                  key={term.id}
                  onClick={() => setSelectedTerminal(term)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                    selectedTerminal.id === term.id
                      ? 'bg-white text-blue-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {term.name.split(' (')[0]}
                </button>
              ))}
            </div>

            {/* Selected Terminal Details Card */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                  <div className="text-xs font-semibold uppercase text-blue-600 mb-1">
                    {selectedTerminal.badge}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{selectedTerminal.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">Recommended for: {selectedTerminal.popularFor}</p>
                </div>
                <div className="sm:text-right">
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-tabular">
                    {selectedTerminal.price}
                  </div>
                  <div className="text-xs text-slate-500">One-time terminal activation</div>
                </div>
              </div>

              {/* Hardware Spec Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 text-xs text-slate-700">
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-slate-200">
                  <BatteryCharging className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{selectedTerminal.batteryLife}</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-slate-200">
                  <Wifi className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{selectedTerminal.connectivity}</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-slate-200">
                  <Printer className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>{selectedTerminal.printer}</span>
                </div>
              </div>

              {/* Feature Points */}
              <div className="space-y-3 mb-8">
                {selectedTerminal.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenOrderModal(selectedTerminal.id)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded-xl shadow-sm transition-colors"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Order {selectedTerminal.name.split(' (')[0]}</span>
                </button>
                <button
                  onClick={() => onOpenWhatsApp(`Hello Kenny Olu Digital, I want to order the ${selectedTerminal.name}. Please guide me through registration.`)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-sm font-medium rounded-xl transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Studio Product Image & Verification Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md relative group">
              <img
                src={images.pos}
                alt="Moniepoint POS smart terminal showcase"
                className="w-full h-[280px] sm:h-[320px] object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Image Edit / Replace Button */}
              <button
                type="button"
                onClick={() => openImageEditor('pos', 'Moniepoint POS Showcase Image')}
                className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg shadow backdrop-blur-xs transition-all opacity-90 hover:opacity-100"
                title="Replace or edit this photo"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Change Image</span>
              </button>

              <div className="p-6 bg-white">
                <h4 className="text-sm font-bold text-slate-900 mb-3">What is in the box?</h4>
                <div className="space-y-2.5 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Brand new tested moniepoint pos terminal</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>heavy duty USB charger and power cable</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>complimentary thermal receipt paper rolls</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Moniepoint Business Excellence & Reliability (Zero charges input) */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-900 text-white">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" />
              <span>Moniepoint Merchant Advantage</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Engineered for Seamless Retail & Wholesale Operations
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Deliver smooth checkout experiences for every customer across Ogun State and nationwide with guaranteed speed, reliable network uptime, and dedicated agent support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <Clock className="w-6 h-6 text-emerald-400 mb-3" />
              <h4 className="text-base font-bold text-white mb-1.5">Under 2-Second Settlement</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Money settles instantly into your Moniepoint business account right as the receipt prints out. No waiting for end-of-day bank clearing.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <ShieldCheck className="w-6 h-6 text-blue-400 mb-3" />
              <h4 className="text-base font-bold text-white mb-1.5">Auto Dispense Reversal</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                If a customer's issuing bank glitches, Moniepoint's automated network protocol executes an immediate reversal, protecting your store from disputes.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <CheckCircle2 className="w-6 h-6 text-amber-400 mb-3" />
              <h4 className="text-base font-bold text-white mb-1.5">24-48 Hours Delivery</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Fast dispatch across Ogun State and nationwide in Nigeria. Kenny Olu Digital provides terminal delivery, account linking, and physical staff guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
