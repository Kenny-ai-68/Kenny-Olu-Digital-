import React from 'react';
import { KENNY_OLU_CONTACT } from '../data/servicesData';
import { MessageCircle, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onOpenWhatsApp: (message?: string) => void;
  onSelectService: (service: 'pos' | 'loans' | 'savings' | 'moniebook') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp, onSelectService }) => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <span className="text-lg font-bold tracking-tight text-white block">
              Kenny Olu Digital
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Authorized Moniepoint Business Solutions Partner helping Nigerian enterprises simplify payments, access working capital, and build lasting financial reserves.
            </p>
            <div className="text-xs text-blue-400 font-medium">
              Lagos & Nationwide Nigeria
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onSelectService('pos')}
                  className="hover:text-white transition-colors"
                >
                  Moniepoint POS Terminals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService('loans')}
                  className="hover:text-white transition-colors"
                >
                  Business Working Capital Loans
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService('savings')}
                  className="hover:text-white transition-colors"
                >
                  High-Yield Business Savings (16% p.a.)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService('moniebook')}
                  className="hover:text-white transition-colors"
                >
                  Moniebook Digital Ledger
                </button>
              </li>
            </ul>
          </div>

          {/* Compliance & Partner Status */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              Banking & Security
            </h4>
            <div className="space-y-2 text-xs text-slate-400 leading-relaxed">
              <p>Banking services provided by Moniepoint Microfinance Bank.</p>
              <p>Licensed by the Central Bank of Nigeria (CBN).</p>
              <p>All deposits are insured by the Nigeria Deposit Insurance Corporation (NDIC).</p>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <a href={`tel:${KENNY_OLU_CONTACT.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {KENNY_OLU_CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <a href={`mailto:${KENNY_OLU_CONTACT.email}`} className="hover:text-white break-all">
                  {KENNY_OLU_CONTACT.email}
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onOpenWhatsApp('Hello Kenny Olu Digital, I want to chat about Moniepoint business services.')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-medium transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Kenny Olu Digital. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Powered by Moniepoint Financial Infrastructure</span>
            <span>·</span>
            <span>Agent Desk: Kehinde Ikotun</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
