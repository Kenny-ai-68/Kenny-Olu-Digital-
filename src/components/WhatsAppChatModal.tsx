import React, { useState } from 'react';
import { MessageCircle, X, ExternalLink, Copy, Check, Phone, Mail } from 'lucide-react';
import { KENNY_OLU_CONTACT } from '../data/servicesData';

interface WhatsAppChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

const QUICK_TEMPLATES = [
  {
    label: 'Get Your POS',
    text: 'Hello Kenny Olu Digital, I need a Moniepoint POS machine for my store. Please share the registration requirements and delivery options.',
  },
  {
    label: 'Enquire About Business Loans',
    text: 'Hello Kenny Olu Digital, I would like to enquire about Moniepoint business working capital loans. How can my business qualify based on POS turnover?',
  },
  {
    label: 'Explore Savings',
    text: 'Hello Kenny Olu Digital, I want to explore Moniepoint high-yield business savings (16% p.a.) and start earning daily interest on my store funds.',
  },
  {
    label: 'Discover Moniebook',
    text: 'Hello Kenny Olu Digital, I want to learn more about Moniebook and set up automated customer debt tracking and reminders for my business.',
  },
];

export const WhatsAppChatModal: React.FC<WhatsAppChatModalProps> = ({
  isOpen,
  onClose,
  initialMessage = 'Hello Kenny Olu Digital, I want to get started with Moniepoint services for my business.',
}) => {
  const [message, setMessage] = useState(initialMessage);
  const [copied, setCopied] = useState(false);

  // Update message if initialMessage changes
  React.useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  if (!isOpen) return null;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${KENNY_OLU_CONTACT.whatsappNumber}?text=${encodedMessage}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-emerald-700 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base">Chat With Kenny Olu Digital</h3>
              <p className="text-xs text-emerald-100">Official Moniepoint Partner & Business Guide</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Select or Customize Your Inquiry
            </label>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {QUICK_TEMPLATES.map((tmpl, idx) => (
                <button
                  key={idx}
                  onClick={() => setMessage(tmpl.text)}
                  className="text-xs px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors font-medium"
                >
                  {tmpl.label}
                </button>
              ))}
            </div>

            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-emerald-600 text-slate-800"
              placeholder="Type your message to Kenny Olu..."
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
            <span>Direct WhatsApp: <strong>{KENNY_OLU_CONTACT.phone}</strong></span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-semibold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy text</span>
                </>
              )}
            </button>
          </div>

          {/* Action buttons */}
          <div className="pt-2 space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Launch WhatsApp Chat Now</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-200" />
            </a>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={`tel:${KENNY_OLU_CONTACT.phone.replace(/\s+/g, '')}`}
                className="py-2.5 px-3 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-700" />
                <span>Call Phone Directly</span>
              </a>
              <a
                href={`mailto:${KENNY_OLU_CONTACT.email}?subject=Moniepoint%20Business%20Inquiry`}
                className="py-2.5 px-3 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-purple-700" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
