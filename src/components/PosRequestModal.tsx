import React, { useState } from 'react';
import { X, CreditCard, CheckCircle2, ArrowRight, MapPin, Phone, Building, MessageCircle } from 'lucide-react';
import { POS_TERMINALS, KENNY_OLU_CONTACT } from '../data/servicesData';
import { LeadEnquiry } from '../types';

interface PosRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialModelId?: string;
  onEnquirySubmitted: (enquiry: LeadEnquiry) => void;
}

export const PosRequestModal: React.FC<PosRequestModalProps> = ({
  isOpen,
  onClose,
  initialModelId = 'smart-pos',
  onEnquirySubmitted,
}) => {
  const [selectedModel, setSelectedModel] = useState(initialModelId);
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync selectedModel if initialModelId changes
  React.useEffect(() => {
    if (initialModelId) {
      setSelectedModel(initialModelId);
    }
  }, [initialModelId]);

  if (!isOpen) return null;

  const currentTerminal = POS_TERMINALS.find((t) => t.id === selectedModel) || POS_TERMINALS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !location) return;

    const newEnquiry: LeadEnquiry = {
      id: `enq-${Date.now()}`,
      fullName,
      businessName: businessName || fullName,
      phone,
      email: email || 'Not provided',
      location,
      serviceRequested: 'pos',
      posModelPreference: currentTerminal.name,
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

  const whatsappOrderMessage = encodeURIComponent(
    `Hello Kenny Olu Digital! I have submitted a request for ${currentTerminal.name}.\n\n` +
    `• Business Name: ${businessName || fullName}\n` +
    `• Contact Person: ${fullName}\n` +
    `• Phone: ${phone}\n` +
    `• Delivery Location: ${location}\n\n` +
    `Please confirm my registration and dispatch schedule.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-blue-700 text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <CreditCard className="w-5 h-5 text-blue-200" />
            <div>
              <h3 className="font-bold text-base">Request Your Moniepoint POS</h3>
              <p className="text-xs text-blue-100">Under 24-48 Hours Delivery Across Ogun State & Nigeria</p>
            </div>
          </div>
          <button
            onClick={resetForm}
            className="p-1 rounded-lg text-blue-200 hover:text-white hover:bg-blue-600 transition-colors"
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
                <h4 className="text-xl font-bold text-slate-900">Request Received Successfully!</h4>
                <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  Thank you, <strong>{fullName}</strong>. Kenny Olu Digital has logged your order for the <strong>{currentTerminal.name}</strong>.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-left space-y-1.5 max-w-sm mx-auto text-slate-700">
                <p><strong>Delivery Location:</strong> {location}</p>
                <p><strong>Phone Contact:</strong> {phone}</p>
                <p><strong>Terminal Fee:</strong> {currentTerminal.price}</p>
              </div>

              <div className="pt-2 flex flex-col gap-2.5 max-w-sm mx-auto">
                <a
                  href={`https://wa.me/${KENNY_OLU_CONTACT.whatsappNumber}?text=${whatsappOrderMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Order to Kenny on WhatsApp</span>
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
              {/* Select Terminal Model */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                  Choose Terminal Model
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {POS_TERMINALS.map((t) => (
                    <button
                      type="button"
                      key={t.id}
                      onClick={() => setSelectedModel(t.id)}
                      className={`p-3 text-left rounded-xl border transition-all text-xs ${
                        selectedModel === t.id
                          ? 'border-blue-600 bg-blue-50/50 ring-1 ring-blue-600'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="font-bold text-slate-900">{t.name.split(' (')[0]}</div>
                      <div className="text-[11px] text-blue-700 font-semibold mt-1 font-tabular">{t.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kehinde Adebayo"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-blue-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Business / Store Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kenny Supermarket"
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
                    placeholder="e.g. 0814 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-blue-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. store@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Delivery Address / Location (Lagos or State) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Shop 14, Ikeja Plaza, Computer Village, Lagos"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-blue-600"
                />
              </div>

              <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-blue-900 flex items-center justify-between">
                <span>Activation Fee:</span>
                <span className="font-bold font-tabular text-sm text-blue-950">{currentTerminal.price}</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>Submit POS Order Request</span>
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
